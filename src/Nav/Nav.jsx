import "../App.css";
import { Link } from "react-router-dom";
import { Component } from "react";
import { Avatar } from "@material-ui/core";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar nav-main navbar-expand-lg navbar-dark ">
          <div className="container-fluid">
            <h5 className="navbar-brand">Shoop</h5>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"></li>
              </ul>
              <Avatar>H</Avatar>
              <Link
                className="btn btn-outline-light ms-1"
                type="submit"
                to="/login"
              >
                SignIn
              </Link>
              <Link
                className="btn btn-outline-light ms-1"
                type="submit"
                to="/register"
              >
                SignUp
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
