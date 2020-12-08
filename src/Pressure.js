import React from "react";
import bootstrap from "bootstrap";

export default function Wind() {
  return (
    <div class="p-4 mb-2 bg-success rounded shadow text-black">
      <h5 class="current-pressure">Pressure</h5>
      <div class="row">
        <div class="col-4">
          <i class="fas fa-cloud-sun-rain"></i>
        </div>
        <div class="col-4">
          <p class="card-text">
            <span id="pressureLevel">1024</span>hPa
          </p>
        </div>
      </div>
    </div>
  );
}
