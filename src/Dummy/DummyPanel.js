import React, { useState } from "react";
import test0 from "../Img/garment_1/00.png";
import test1 from "../Img/garment_1/01.png";
import test2 from "../Img/garment_1/02.png";
import test3 from "../Img/garment_1/04.png";
import test4 from "../Img/garment_1/03.png";

function DummyPanel() {
  const [isShortSleve, setIsShortSleve] = useState(true);

  const setSleve = (value) => {
    setIsShortSleve(value);
  };

  return (
    <>
      <div className="dummy-page">
        <div className="dummy-panel text-light p-4">
          <div className="sleve">
            <h4>Sleve</h4>
            <div>
              <button
                type="button"
                className="btn btn-light"
                onClick={() => setSleve(true)}
              >
                Short Sleve
              </button>
              <button
                type="button"
                className="btn btn-light ms-3"
                onClick={() => setSleve(false)}
              >
                Long Sleve
              </button>
            </div>
          </div>
        </div>
        <div style={{ position: "relative" }} className="dummy">
          <img
            src={test0}
            alt=""
            style={{ position: "absolute", width: 400, height: 400 }}
          />
          <img
            src={test1}
            style={{ position: "absolute", width: 400, height: 400 }}
            className="pant"
          />
          <img
            src={test2}
            style={{ position: "absolute", width: 400, height: 400 }}
            className="pant"
          />

          {isShortSleve ? (
            <img
              src={test4}
              style={{ position: "absolute", width: 400, height: 400 }}
              className="pant"
            />
          ) : (
            <img
              src={test3}
              style={{ position: "absolute", width: 400, height: 400 }}
              className="pant"
            />
          )}
        </div>
      </div>
    </>
  );
}

export default DummyPanel;
