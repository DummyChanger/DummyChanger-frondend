import React, { Component } from "react";
import ShortSleeve from "../Img/icon/short-sleeves.png";
import LongSleeve from "../Img/icon/shirt.png";
import ShortPant from "../Img/icon/denim-shorts.png";
import LongPant from "../Img/icon/jeans.png";

export default class Style extends Component {
  render() {
    return (
      <>
        <h4>Shirts</h4>
        <div className="d-flex w-100 style-wrapper ">
          <div className="style-box">
            <img src={ShortSleeve} alt="" className="style" />
            <h6>Short sleeves</h6>
          </div>
          <div className="style-box">
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
