import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center p-5 mb-5">
        <img src="media/images/homeHero.png" alt="Home hero" className="mb-5" />
        <h1 className="mt-5 fs-2">Invest in everything</h1>
        <p>
          Online platform to invest in stock, derivatives, mutual funds, and
          more..
        </p>
        <button
          className="btn btn-primary fs-5 p-2"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup now
        </button>
      </div>
    </div>
  );
}

export default Hero;
