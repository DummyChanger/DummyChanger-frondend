import React, { Component } from "react";

export default class Register extends Component {
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

            <div className="form-group mb-3">
              <label>First name</label>
              <input type="text" className="form-control" />
            </div>

            <div className="form-group mb-3">
              <label>Last name</label>
              <input type="text" className="form-control" />
            </div>

            <div className="form-group mb-3">
              <label>Email address</label>
              <input type="email" className="form-control" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control mb-3" />
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
