import React, { Component } from "react";

export default class Material extends Component {
  render() {
    return (
      <div className="sleve">
        <h4>Sleve</h4>
        <div>
          <button
            type="button"
            className="btn btn-light"
            // onClick={() => setSleve(true)}
          >
            Short Sleve
          </button>
          <button
            type="button"
            className="btn btn-light ms-3"
            // onClick={() => setSleve(false)}
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
          >
            hoem
          </button>
          <button
            type="button"
            style={{ backgroundColor: "#dc3545" }}
            className="btn btn-light ms-3 garment-color"
            // onClick={() => setColorBg("#dc3545")}
          ></button>
          <button
            type="button"
            style={{ backgroundColor: "#6c757d" }}
            className="btn btn-light ms-3 garment-color"
            // onClick={() => setColorBg("#6c757d")}
          ></button>
          <button
            type="button"
            style={{ backgroundColor: "#f8f9fa" }}
            className="btn btn-light ms-3 garment-color"
            // onClick={() => setColorBg("#f8f9fa")}
          ></button>
          <button
            type="button"
            style={{ backgroundColor: "#ffc107" }}
            className="btn btn-light ms-3 garment-color"
            // onClick={() => setColorBg("#ffc107")}
          ></button>
        </div>
      </div>
    );
  }
}
