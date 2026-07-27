import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container">
      <div className="row text-center p-5 mb-5">
        <h1 className="mt-5 fs-2">404! Page Not Found</h1>
        <p>The page which you are looking for doesn't exists...</p>
        <Link to="/">
          <button
            className="btn btn-primary fs-5 p-2"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Go to home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
