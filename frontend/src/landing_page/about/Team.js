import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row text-center mt-5 mb-5">
        <h1 className="fs-2">People</h1>
      </div>
      <div className="row text-muted mt-5 mb-5" style={{ lineHeight: "2rem" }}>
        <div className="col text-center">
          <div
            style={{
              borderRadius: "100%",
              width: "50%",
              aspectRatio: "1",
              background: "#e2e8f0",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "3rem",
              color: "#1e293b",
            }}
          >
            A
          </div>
          <h4 className="mt-4">Founder, CEO</h4>
        </div>
        <div className="col">
          <p>
            Zenvest was built by a small team who wanted a simpler way to trade
            and invest, without the clutter that most platforms come with.
          </p>
          <p>
            We're a young, in-progress project - built to learn, and to keep
            growing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
