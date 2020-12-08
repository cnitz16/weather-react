import React from "react";

export default function Humidity() {
  return (
    <div class="p-4 mb-2 bg-primary rounded shadow text-black">
      <h5 class="current-humidity">Humidity</h5>
      <div class="row">
        <div class="col-4">
          <i class="fas fa-tint"></i>
        </div>
        <div class="col-4">
          <p class="card-text">
            <span id="humidityLevel">89</span>%
          </p>
        </div>
      </div>
    </div>
  );
}
