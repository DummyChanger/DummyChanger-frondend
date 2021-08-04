import React from "react";

function DummyPanel() {
  return (
    <div className="dummy-panel text-light p-4">
      <div className="sleve">
        <h4>Sleve</h4>
        <div>
          <button type="button" className="btn btn-light">
            Short Sleve
          </button>
          <button type="button" className="btn btn-light ms-3">
            Long Sleve
          </button>
        </div>
      </div>
    </div>
  );
}

export default DummyPanel;
