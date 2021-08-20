import React, { Component } from "react";
import Nav from "../../Nav/Nav.jsx";
import CardBox from "../../Card/CardBox";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="row px-4 py-3">
          <div className="col-sm">
            <CardBox />
          </div>
          <div className="col-sm">
            <CardBox />
          </div>
          <div className="col-sm">
            <CardBox />
          </div>
          <div className="col-sm">
            <CardBox />
          </div>
        </div>
      </div>
    );
  }
}
