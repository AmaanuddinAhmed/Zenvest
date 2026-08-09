import React from "react";

function Awards() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" alt="Zenvest" />
        </div>
        <div className="col-6 p-5">
          <h1 className="mt-3 fs-2">Everything you need to trade and invest</h1>
          <p className="mb-5">
            One platform for stocks, derivatives, and mutual funds, built for
            people who want to invest on their own terms:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Stocks and IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
