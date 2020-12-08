import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Humidity() {
  return (
    <div className="p-4 mb-2 bg-primary rounded shadow text-black">
      <h5 className="current-humidity">Humidity</h5>
      <div className="row">
        <div className="col-4">
          <i className="fas fa-tint"></i>
        </div>
        <div className="col-4">
          <p className="card-text">
            <span>89</span>%
          </p>
        </div>
      </div>
    </div>
  );
}
