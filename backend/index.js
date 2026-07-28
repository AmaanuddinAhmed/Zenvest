require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const bodyParser = require("body-parser");
const cors = require("cors");
const { OrdersModel } = require("./model/OrdersModel");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoute");

const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  }),
);
app.use(cookieParser());

const PORT = process.env.PORT || 8080;
const URI = process.env.MONGO_URI;

app.use("/", authRoute);

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.get("/allOrders", async (req, res) => {
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
});

app.post("/newOrder", async (req, res) => {
  const { name, qty, price, mode } = req.body;

  const newOrder = new OrdersModel({ name, qty, price, mode });
  await newOrder.save();

  // a buy order should actually land in Holdings, otherwise the
  // dashboard has no way of showing what the user owns
  if (mode === "BUY") {
    const existingHolding = await HoldingsModel.findOne({ name });

    if (existingHolding) {
      const totalQty = existingHolding.qty + Number(qty);
      const totalCost = existingHolding.avg * existingHolding.qty + price * qty;

      existingHolding.qty = totalQty;
      existingHolding.avg = totalCost / totalQty;
      existingHolding.price = price;
      await existingHolding.save();
    } else {
      await HoldingsModel.create({
        name,
        qty,
        avg: price,
        price,
        net: "0.00%",
        day: "0.00%",
      });
    }
  }
  res.send("Order added!");
});

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
  mongoose.connect(URI);
  console.log("DB connected!");
});
