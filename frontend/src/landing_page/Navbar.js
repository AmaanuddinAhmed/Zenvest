import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg border-bottom">
      <div class="container p-2">
        <Link class="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="Logo"
            style={{ width: "25%" }}
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/products">
                Products
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/support">
                Support
              </Link>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link class="nav-link active" to="/login">
                Login
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/signup">
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
