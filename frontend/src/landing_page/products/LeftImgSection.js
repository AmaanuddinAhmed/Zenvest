import React from "react";

function LeftImgSection({
  image,
  title,
  desc,
  tryDemo,
  learnMore,
  google,
  apple,
}) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-8">
          <img src={image} />
        </div>
        <div className="col-4 mt-5">
          <h1 className="fs-2 mb-3">{title}</h1>
          <p className="mb-3">{desc}</p>
          <div className="mb-4">
            <a href={tryDemo}>
              Try Demo <i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <a href={learnMore} style={{ marginLeft: "3rem" }}>
              Learn More <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div>
            <a href={google}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={apple} style={{ marginLeft: "1.5rem" }}>
              <img src="media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftImgSection;
