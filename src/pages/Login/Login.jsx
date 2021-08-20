import React, { Component } from "react";
import "./Login.css";
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h3>Sign Up</h3>

            <div className="form-group mb-2">
              <label>First name</label>
              <input type="text" className="form-control" />
            </div>

            <div className="form-group mb-2">
              <label>Last name</label>
              <input type="text" className="form-control" />
            </div>

            <div className="form-group mb-2">
              <label>Email address</label>
              <input type="email" className="form-control" />
            </div>

            <div className="form-group mb-2">
              <label>Password</label>
              <input type="password" className="form-control" />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Sign Up
            </button>
            <p className="forgot-password text-right">
              Already registered <a href="#">sign in?</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
