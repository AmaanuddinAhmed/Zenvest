import React from "react";

function Universe() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row text-center mt-5 mb-5">
        <h1 className="fs-2">The Zenvest Universe</h1>
        <h3 className="fs-6 text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </h3>
      </div>
      <div className="row text-center">
        <div className="col-4 mt-5 mb-5">
          <h5 className="mb-3">Zenvest Fund House</h5>
          <p className="text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 mt-5 mb-5">
          <h5 className="mb-3">Zenvest Options</h5>
          <p className="text-muted">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 mt-5 mb-5">
          <h5 className="mb-3">Zenvest Research</h5>
          <p className="text-muted">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-4 mt-5 mb-5">
          <h5 className="mb-3">Zenvest Strategies</h5>
          <p className="text-muted">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 mt-5 mb-5">
          <h5 className="mb-3">Zenvest Baskets</h5>
          <p className="text-muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 mt-5 mb-5">
          <h5 className="mb-3">Zenvest Insure</h5>
          <p className="text-muted">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Universe;
