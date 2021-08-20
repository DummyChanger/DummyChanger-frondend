// @ts-nocheck
import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
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
            <h3>Sign In</h3>

            <div className="form-group mb-3">
              <label>Email address</label>
              <input type="email" className="form-control" />
            </div>

            <div className="form-group mb-3">
              <label>Password</label>
              <input type="password" className="form-control" />
            </div>

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <Link to="/" type="submit" className="btn btn-primary btn-block">
              Submit
            </Link>
            <p className="forgot-password text-right">
              Forgot <Link>password?</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
