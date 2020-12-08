import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Wind() {
  return (
    <div className="p-4 mb-2 bg-success rounded shadow text-black">
      <h5 className="current-pressure">Pressure</h5>
      <div className="row">
        <div className="col-4">
          <i className="fas fa-cloud-sun-rain"></i>
        </div>
        <div className="col-4">
          <p className="card-text">
            <span id="pressureLevel">1024</span>hPa
          </p>
        </div>
      </div>
    </div>
  );
}
