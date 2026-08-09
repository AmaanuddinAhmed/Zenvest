import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center mt-5 mb-5">
        <h1 className="fs-3">
          We believe investing should be simple and transparent. <br />
          Now, we are building the technology to make that real.
        </h1>
      </div>
      <hr />
      <div className="row text-muted mt-5 mb-5" style={{ lineHeight: "2rem" }}>
        <div className="col p-5">
          <p>
            Zenvest started with a simple goal: break down the barriers that
            traders and investors face in India in terms of cost, support, and
            technology. The name reflects that idea - a calm, focused ("zen")
            approach to investing.
          </p>
          <p>
            Our pricing model and in-house technology are built to keep trading
            affordable, without hidden fees or confusing charges.
          </p>
          <p>
            We're a small, growing platform focused on getting the fundamentals
            right before anything else.
          </p>
        </div>
        <div className="col p-5">
          <p>
            We also run open educational content to help retail traders and
            investors make more informed decisions.
          </p>
          <p>
            And we're always building something new. Catch up on the latest
            updates on our <a href="#">blog</a>, or learn more about our product{" "}
            <a href="#">philosophies</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
