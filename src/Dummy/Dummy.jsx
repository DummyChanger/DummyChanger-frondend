import { Component } from "react";
import Model from "../Img/garment_1/model_front.png";
import Pants from "../Img/garment_1/pants_front.png";

export default class Dummy extends Component {
  render() {
    return (
      <div
        style={{
          position: "relative",
          backgroundColor: "blue",
        }}
        className="dummy"
      >
        <div className="dummy-container">
          <img
            src={Model}
            alt=""
            style={{ position: "absolute", height: 500 }}
          />
          <img
            src={Pants}
            style={{ position: "absolute", height: 500 }}
            className="pant"
            alt=""
          />
          {/* <img
            src={test2}
            style={{ position: "absolute", width: 400, height: 500 }}
            className="pant"
            alt=""
          />

          {this.state.shortSleve ? (
            <img
              src={test4}
              style={{ position: "absolute", width: 400, height: 500 }}
              className="pant"
              alt=""
            />
          ) : (
            <img
              src={test3}
              style={{ position: "absolute", width: 400, height: 400 }}
              className="pant"
              alt=""
            /> */}
        </div>
      </div>
    );
  }
}
