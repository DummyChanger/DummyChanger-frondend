// @ts-nocheck
import { Component } from "react";
import { connect } from "react-redux";
import Model from "../Img/garment_1/model_front.png";
import Pants from "../Img/garment_1/pants_front.png";
import sleveeShort from "../Img/garment_1/sleveeShort.png";
import sleveeLong from "../Img/garment_1/sleveeLong.png";

class Dummy extends Component {
  render() {
    let isSlevee = this.props.isSlevee;
    console.log(this.props.isSlevee);
    return (
      <div
        style={{
          position: "relative",
          backgroundColor: "white",
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
          <img
            src={isSlevee == "SHORT" ? sleveeShort : sleveeLong}
            style={{ position: "absolute", height: 500 }}
            className="pant"
            alt=""
          />

          {/*  {this.state.shortSleve ? (
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

const mapStateToProps = (state) => ({
  isSlevee: state.sleveeType,
});

export default connect(mapStateToProps, null)(Dummy);
