# Zenvest

A stock trading platform clone built to learn and demonstrate the MERN stack, JWT-based auth, and third-party API integration. Inspired by real Indian discount brokers like Zerodha, but built from scratch as a personal/learning project — not a real brokerage.

## What it does

- Sign up, log in, and stay authenticated with a JWT stored in an httpOnly cookie
- Browse a live watchlist of NSE stocks with real (delayed) prices, refreshed automatically
- Place buy orders, which update your Holdings and Orders in real time
- View per-user Holdings, Positions, and Orders — data is scoped per account, not shared globally
- A separate marketing/landing site (signup, product pages, pricing, support) alongside the actual trading dashboard, mirroring how real brokerages split their public site from their trading terminal

## Tech stack

- **Frontend (marketing site):** React, React Router, Bootstrap
- **Dashboard (trading terminal):** React, MUI, Chart.js
- **Backend:** Node.js, Express, MongoDB (Mongoose)
- **Auth:** JWT + bcrypt, httpOnly cookies
- **Live market data:** [Twelve Data](https://twelvedata.com) API (NSE quotes), proxied through the backend so the API key never reaches the browser

## Project structure

zenvest/
├── backend/ # Express API + MongoDB models, auth, live quotes proxy
├── frontend/ # Public marketing site (home, about, pricing, signup, login)
└── dashboard/ # The actual trading dashboard (post-login)

Each of the three apps runs independently and talks to the backend over HTTP.

## Running it locally

You'll need Node.js, npm, and a MongoDB instance (local or a free [Atlas](https://www.mongodb.com/cloud/atlas) cluster).

### 1. Backend

```bash
cd backend
npm install
cp .env.example .env   # fill in MONGO_URI, TOKEN_KEY, and TWELVE_DATA_API_KEY
npm start
```

Runs on `http://localhost:8080` by default.

Get a free Twelve Data API key at [twelvedata.com/pricing](https://twelvedata.com/pricing) (no card required) if you want live prices — the app still runs without one, just without live quotes.

### 2. Frontend (marketing site)

```bash
cd frontend
npm install
cp .env.example .env
npm start
```

Runs on `http://localhost:3000`.

### 3. Dashboard (trading terminal)

```bash
cd dashboard
npm install
cp .env.example .env
npm start
```

Runs on `http://localhost:3001` (set via `PORT` in `.env`, since the frontend already uses 3000).

### Try it

1. Sign up on the frontend (`localhost:3000/signup`)
2. You'll be redirected to the dashboard
3. Buy a stock from the watchlist — it'll show up under Holdings and Orders
4. Log out and log back in with a different account to confirm data is scoped per user

## Known limitations

Being upfront about what this is and isn't:

- **Not a real brokerage.** No real money, no real trades, no regulatory registration. Purely educational.
- **Live prices are delayed, not real-time**, and limited by the free API tier's daily request quota (mitigated with server-side caching, but it's still a free tier).
- **No Sell functionality yet** — Buy is fully wired end-to-end, Sell is a UI stub.
- **No password reset / email verification** — signup and login are functional but minimal.
- **Positions and some dashboard sections (Funds, Apps) are still placeholder/static data** rather than live-computed.

## Why this exists

Built as a learning project to practice the full MERN stack, JWT authentication with per-user data scoping, and integrating a third-party financial API safely (keeping the key server-side). Not intended to compete with or replace real trading platforms.
