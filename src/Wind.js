import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Wind() {
  return (
    <div className="p-4 mb-2 bg-warning rounded shadow text-black">
      <h5 className="wind-speed">Wind</h5>
      <div className="row">
        <div className="col-4">
          <i className="fas fa-wind"></i>
        </div>
        <div className="col-4">
          <p className="card-text">
            <span id="windSpeed">7</span>mph
          </p>
        </div>
      </div>
    </div>
  );
}
