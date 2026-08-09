import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track tickets</a>
      </div>
      <div className="row p-5 m-5">
        <div className="col-6 p-3">
          <h1 className="fs-2 mb-4">
            Search for an answer or browse help to create a ticket
          </h1>
          <input placeholder="Eg: How do I activate F&O" className="mb-4" />
          <br />
          <a href="">Track account opening </a>&nbsp;&nbsp;
          <a href="">Track segment activation </a>&nbsp;&nbsp;
          <a href="">Intraday margins </a>&nbsp;&nbsp;
          <a href="">Dashboard user manual</a>&nbsp;&nbsp;
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-2 mb-4">Featured</h1>
          <ol>
            <li>
              <a href="">Current takeovers and de-listings</a>
            </li>
            <li>
              <a href="">Latest intraday leverages</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
