import React, { Component } from "react";
import DummyPanel from "../../Dummy/DummyPanel.jsx";
import Dummy from "../../Dummy/Dummy.jsx";
import Nav from "../../Nav/Nav.jsx";
import "./DummyPage.css";

export default class DummyPage extends Component {
  render() {
    return (
      <div className="dummy-page">
        <Nav />
        <div className="d-flex">
          <DummyPanel id={this.props.match.params.id} />
          <Dummy id={this.props.match.params.id} />
        </div>
      </div>
    );
  }
}
