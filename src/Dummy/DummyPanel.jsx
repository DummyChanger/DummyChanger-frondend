// @ts-nocheck
import { Tab, Tabs } from "react-bootstrap";
import { Component } from "react";
import Material from "./Material";
import Styles from "./Style";

export default class DummyPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shortSleve: true,
      color: "#ffc107",
      key: "Style",
    };
  }

  render() {
    const setKey = (value) => {
      this.setState({ key: value });
    };
    return (
      <>
        <div className="dummy-page">
          <div className="dummy-panel text-light p-4 pt-1 position-relative">
            <Tabs
              id="controlled-tab-example"
              activeKey={this.state.key}
              onSelect={(k) => setKey(k)}
              className="mb-3 p-1"
            >
              <Tab eventKey="Style" title="Style" className="h-100">
                <Styles />
              </Tab>
              <Tab eventKey="Customize" title="Customize">
                <Material />
              </Tab>
              <Tab eventKey="Payment" title="Payment">
                <h1>Hiiii</h1>
              </Tab>
            </Tabs>
          </div>
        </div>
      </>
    );
  }
}
