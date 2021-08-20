import React, { Component } from "react";
import Nav from "../../Nav/Nav.jsx";
import CardBox from "../../Card/CardBox";
import style1 from "../../Img/styles/1.woman_suitpants.webp";
import style2 from "../../Img/styles/2.woman_shirts.webp";
import style3 from "../../Img/styles/3.woman_jackets.webp";
import style4 from "../../Img/styles/4.woman_trenchcoats.webp";

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
            <CardBox img={style1} name="Pant Suits" discrip="" id="1" />
          </div>
          <div className="col-sm">
            <CardBox img={style2} name="Shirt" discrip="" id="2" />
          </div>
          <div className="col-sm">
            <CardBox img={style3} name="Blazers" discrip="" id="3" />
          </div>
          <div className="col-sm">
            <CardBox img={style4} name="Trenchcoats" discrip="" id="4" />
          </div>
        </div>
      </div>
    );
  }
}
