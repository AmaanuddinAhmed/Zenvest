import React from "react";

function Hero() {
  return (
    <div className="container mt-5 mb-5 border-bottom p-5">
      <div className="row text-center mb-5">
        <h1 className="mb-3 fs-2">Zenvest Products</h1>
        <h3 className="mb-3 text-muted fs-4">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p>
          Check out our{" "}
          <a href="">
            investment offerings <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
