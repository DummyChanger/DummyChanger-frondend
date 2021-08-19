import "../App.css";
import { Link } from "react-router-dom";
import { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar nav-main navbar-expand-lg navbar-dark ">
          <div className="container-fluid">
            <h5 className="navbar-brand">Navbar</h5>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" to="">
                    Home
                  </Link>
                </li>
              </ul>
              <button className="btn btn-outline-light ms-1" type="submit">
                Admin
              </button>
              <button className="btn btn-outline-light ms-1" type="submit">
                Customer
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
