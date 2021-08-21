import React, { Component } from "react";
import ShortSleeve from "../Img/icon/short-sleeves.png";
import LongSleeve from "../Img/icon/shirt.png";
import ShortPant from "../Img/icon/denim-shorts.png";
import LongPant from "../Img/icon/jeans.png";
import { connect } from "react-redux";
import { setLongSlevee, setShortSlevee } from "../Actions/Action";

class Style extends Component {
  render() {
    console.log(this.props.isSlevee);
    return (
      <>
        <h4>Shirts</h4>
        <div className="d-flex w-100 style-wrapper ">
          <div className="style-box" onClick={() => this.props.setLongSlevee()}>
            <img src={ShortSleeve} alt="" className="style" />
            <h6>Short sleeves</h6>
          </div>
          <div
            className="style-box"
            onClick={() => this.props.setShortSlevee()}
          >
            <img src={LongSleeve} alt="" className="style" />
            <h6>Short sleeves</h6>
          </div>
        </div>

        <h4>Pants</h4>
        <div className="d-flex w-100 style-wrapper ">
          <div className="style-box">
            <img src={ShortPant} alt="" className="style" />
            <h6>Short pants</h6>
          </div>
          <div className="style-box">
            <img src={LongPant} alt="" className="style" />
            <h6>Long pants</h6>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isSlevee: state.sleveeType,
});

const mapDispatchToProps = {
  setLongSlevee,
  setShortSlevee,
};

export default connect(mapStateToProps, mapDispatchToProps)(Style);
