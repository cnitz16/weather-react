import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function currentConditions() {
  return (
    <div className="p-4 mb-2 bg-info rounded shadow text-black">
      <h5 className="real-feel">Real Feel</h5>
      <div className="row">
        <div className="col-4">
          <i className="fas fa-sun"></i>
        </div>
        <div className="col-4">
          <p className="card-text">
            <span id="realFeel">46</span>°
          </p>
        </div>
      </div>
    </div>
  );
}
