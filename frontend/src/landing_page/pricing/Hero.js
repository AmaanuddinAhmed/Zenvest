import React from "react";

function Hero() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row text-center mt-5 mb-5">
        <h1 className="fs-2">Charges</h1>
        <h3 className="text-muted">List of all charges and taxes</h3>
      </div>
      <div className="row text-center mt-5 mb-5">
        <div className="col-4">
          <img src="media/images/pricingEquity.svg" className="p-4" />
          <h1 className="fs-3 mb-3">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/intradayTrades.svg" className="p-4" />
          <h1 className="fs-3 mb-3">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/pricingEquity.svg" className="p-4" />
          <h1 className="fs-3 mb-3">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
