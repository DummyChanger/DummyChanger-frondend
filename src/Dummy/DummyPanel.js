import React, { useState } from "react";
import test0 from "../Img/garment_1/00.png";
import test1 from "../Img/garment_1/01.png";
import test2 from "../Img/garment_1/02.png";
import test3 from "../Img/garment_1/04.png";
import test4 from "../Img/garment_1/03.png";
import { Tab, Tabs, Button } from "react-bootstrap";

function DummyPanel() {
  const [isShortSleve, setIsShortSleve] = useState(true);
  const [bgColor, setColor] = useState("#ffc107");
  const [key, setKey] = useState("home");

  const setSleve = (value) => {
    setIsShortSleve(value);
  };
  const setColorBg = (color) => {
    setColor(color);
  };

  const CustomizeCloth = () => {
    return (
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

        <h4 className="mt-3">Colors</h4>
        <div>
          <button
            type="button"
            style={{ backgroundColor: "#ffc107" }}
            className="btn btn-light garment-color"
            onClick={() => setColorBg("#ffc107")}
          ></button>
          <button
            type="button"
            style={{ backgroundColor: "#dc3545" }}
            className="btn btn-light ms-3 garment-color"
            onClick={() => setColorBg("#dc3545")}
          ></button>
          <button
            type="button"
            style={{ backgroundColor: "#6c757d" }}
            className="btn btn-light ms-3 garment-color"
            onClick={() => setColorBg("#6c757d")}
          ></button>
          <button
            type="button"
            style={{ backgroundColor: "#f8f9fa" }}
            className="btn btn-light ms-3 garment-color"
            onClick={() => setColorBg("#f8f9fa")}
          ></button>
          <button
            type="button"
            style={{ backgroundColor: "#ffc107" }}
            className="btn btn-light ms-3 garment-color"
            onClick={() => setColorBg("#ffc107")}
          ></button>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="dummy-page">
        <div className="dummy-panel text-light p-4 pt-1 position-relative">
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="home" title="Home" className="h-100">
              <CustomizeCloth />
            </Tab>
            <Tab eventKey="profile" title="Profile">
              <h1>Hiiii</h1>
            </Tab>
            <Tab eventKey="contact" title="Contact">
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
        <div
          style={{ position: "relative", backgroundColor: bgColor }}
          className="dummy"
        >
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
