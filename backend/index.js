require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const bodyParser = require("body-parser");
const cors = require("cors");
const { OrdersModel } = require("./model/OrdersModel");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoute");
const { requireAuth } = require("./middleware/AuthMiddleware");
const { validateNewOrder } = require("./middleware/ValidationMiddleware");

const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    // frontend (marketing site) + dashboard run on different ports locally
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  }),
);
app.use(cookieParser());

const PORT = process.env.PORT || 8080;
const URI = process.env.MONGO_URI;
const TWELVE_DATA_API_KEY = process.env.TWELVE_DATA_API_KEY;

app.use("/", authRoute);

app.get("/allHoldings", requireAuth, async (req, res) => {
  const allHoldings = await HoldingsModel.find({ userId: req.userId });
  res.json(allHoldings);
});

app.get("/allPositions", requireAuth, async (req, res) => {
  const allPositions = await PositionsModel.find({ userId: req.userId });
  res.json(allPositions);
});

app.get("/allOrders", requireAuth, async (req, res) => {
  const allOrders = await OrdersModel.find({ userId: req.userId });
  res.json(allOrders);
});

app.post("/newOrder", requireAuth, validateNewOrder, async (req, res) => {
  const { name, qty, price, mode } = req.body;
  const userId = req.userId;

  const newOrder = new OrdersModel({ userId, name, qty, price, mode });
  await newOrder.save();

  // a buy order should actually land in Holdings, otherwise the
  // dashboard has no way of showing what the user owns
  if (mode === "BUY") {
    const existingHolding = await HoldingsModel.findOne({ userId, name });

    if (existingHolding) {
      const totalQty = existingHolding.qty + Number(qty);
      const totalCost = existingHolding.avg * existingHolding.qty + price * qty;

      existingHolding.qty = totalQty;
      existingHolding.avg = totalCost / totalQty;
      existingHolding.price = price;
      await existingHolding.save();
    } else {
      await HoldingsModel.create({
        userId,
        name,
        qty,
        avg: price,
        price,
        net: "+0.00%",
        day: "+0.00%",
      });
    }
  }

  res.send("Order added!");
});

// --- live quotes proxy (Twelve Data) ---
// keeps the API key server-side and caches for 30s so clicking around
// the dashboard doesn't burn through the daily quota in a few refreshes
const quoteCache = new Map(); // symbol -> { data, fetchedAt }
const CACHE_TTL_MS = 30 * 1000;

app.get("/quotes", requireAuth, async (req, res) => {
  const symbolsParam = req.query.symbols; // comma separated, e.g. "INFY,TCS,ONGC"
  if (!symbolsParam) {
    return res.status(400).json({ message: "symbols query param is required" });
  }

  if (!TWELVE_DATA_API_KEY) {
    return res
      .status(503)
      .json({ message: "Live quotes are not configured on this server" });
  }

  const requestedSymbols = symbolsParam.split(",").map((s) => s.trim());
  const now = Date.now();

  const cached = {};
  const toFetch = [];

  requestedSymbols.forEach((symbol) => {
    const entry = quoteCache.get(symbol);
    if (entry && now - entry.fetchedAt < CACHE_TTL_MS) {
      cached[symbol] = entry.data;
    } else {
      toFetch.push(symbol);
    }
  });

  if (toFetch.length === 0) {
    return res.json(cached);
  }

  try {
    // NSE-listed symbols need the :NSE exchange suffix for Twelve Data
    const tdSymbols = toFetch.map((s) => `${s}:NSE`).join(",");

    const response = await axios.get("https://api.twelvedata.com/quote", {
      params: { symbol: tdSymbols, apikey: TWELVE_DATA_API_KEY },
    });

    // single symbol returns one object, multiple returns keyed by symbol -
    // normalize both shapes into { "INFY": {...}, "TCS": {...} }
    const raw =
      toFetch.length === 1
        ? { [`${toFetch[0]}:NSE`]: response.data }
        : response.data;

    toFetch.forEach((symbol) => {
      const quote = raw[`${symbol}:NSE`];
      if (quote && !quote.code) {
        const data = {
          name: symbol,
          price: parseFloat(quote.close),
          percent: `${parseFloat(quote.percent_change).toFixed(2)}%`,
          isDown: parseFloat(quote.percent_change) < 0,
        };
        quoteCache.set(symbol, { data, fetchedAt: now });
        cached[symbol] = data;
      }
    });

    res.json(cached);
  } catch (error) {
    console.error("Twelve Data request failed:", error.message);
    toFetch.forEach((symbol) => {
      const entry = quoteCache.get(symbol);
      if (entry) cached[symbol] = entry.data;
    });
    res.json(cached);
  }
});

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
  mongoose.connect(URI);
  console.log("DB connected!");
});
