import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <Link class="navbar-brand mx-4" to="#">
              Daily News
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active mx-2" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item mx-2">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/business"
                  >
                    Business
                  </Link>
                </li>
                <li class="nav-item mx-2">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/entertainment"
                  >
                    Entertainment
                  </Link>
                </li>
                <li class="nav-item mx-2">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/general"
                  >
                    General
                  </Link>
                </li>
                <li class="nav-item mx-2">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/health"
                  >
                    Health
                  </Link>
                </li>
                <li class="nav-item mx-2">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/science"
                  >
                    Science
                  </Link>
                </li>
                <li class="nav-item mx-2">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/sports"
                  >
                    Sports
                  </Link>
                </li>
                <li class="nav-item mx-2">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/technology"
                  >
                    Technology
                  </Link>
                </li>
                {/* <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">
                    About
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
