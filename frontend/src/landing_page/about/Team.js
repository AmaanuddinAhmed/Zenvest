import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row text-center mt-5 mb-5">
        <h1 className="fs-2">People</h1>
      </div>
      <div className="row text-muted mt-5 mb-5" style={{ lineHeight: "2rem" }}>
        <div className="col text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Founder"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-4">Nithin Kamath</h4>
          <h6 className="mt-3">Founder, CEO</h6>
        </div>
        <div className="col">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA</a> /
            <a href="#">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
