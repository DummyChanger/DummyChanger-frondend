import model_front from "../Img/garment_1/model_front.png";
import test1 from "../Img/garment_1/01.png";
import test2 from "../Img/garment_1/02.png";
import test3 from "../Img/garment_1/04.png";
import test4 from "../Img/garment_1/03.png";
import { Tab, Tabs, Button } from "react-bootstrap";
import { Component } from "react";
import Material from "./Material";

export default class DummyPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shortSleve: true,
      color: "#ffc107",
      key: "Material",
    };
  }

  render() {
    const setSleve = (value) => {
      this.setState({ shortSleve: value });
    };
    const setColorBg = (color) => {
      this.setState({ color: color });
    };
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
              className="mb-3"
            >
              <Tab eventKey="Material" title="Material" className="h-100">
                <Material />
              </Tab>
              <Tab eventKey="Customize" title="Customize">
                <h1>Hiiii</h1>
              </Tab>
              <Tab eventKey="Payment" title="Payment">
                <h1>Hiiii</h1>
              </Tab>
            </Tabs>
            <div className="text-center position-absolute next-item w-100  ">
              <Button
                as="input"
                type="submit"
                value="Next"
                className=" mb-4 px-4"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
