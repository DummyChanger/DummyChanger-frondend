import React from "react";
import test0 from "../Img/garment_1/00.png";
import test1 from "../Img/garment_1/test01.svg";
import test2 from "../Img/garment_1/test02.svg";
import test3 from "../Img/garment_1/test03.svg";
import test4 from "../Img/garment_1/test04.svg";

function Dummy() {
  return (
    <div style={{ position: "relative" }} className="dummy">
      <img
        src={test0}
        alt=""
        style={{ position: "absolute", width: 400,height:400}}
      />
      <img
        src={test1}
        alt=""
        style={{ position: "absolute", width: 200,height:200}}
      />
      <img
        src={test2}
        alt=""
        style={{ position: "absolute", width: 200,height:200}}
      />
      <img
        src={test3}
        alt="sds"
        style={{ position: "absolute", width: 200,height:200}}
      />
      <img
        src={test4}
        alt=""
        style={{ position: "absolute", width: 200,height:200}}
      />
    </div>
  );
}

export default Dummy;
