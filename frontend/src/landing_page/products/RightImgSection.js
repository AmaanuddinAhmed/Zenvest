import React from "react";

function RightImgSection({ image, title, desc, learnMore }) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row mt-5">
        <div className="col-4 mt-5">
          <h1 className="fs-2 mb-3 mt-5">{title}</h1>
          <p className="mb-3">{desc}</p>
          <div className="mb-4">
            <a href={learnMore}>
              Learn More <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-7">
          <img src={image} />
        </div>
      </div>
    </div>
  );
}

export default RightImgSection;
