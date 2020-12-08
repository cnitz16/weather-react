import React from "react";

export default function Wind() {
  return (
    <div class="p-4 mb-2 bg-warning rounded shadow text-black">
      <h5 class="wind-speed">Wind</h5>
      <div class="row">
        <div class="col-4">
          <i class="fas fa-wind"></i>
        </div>
        <div class="col-4">
          <p class="card-text">
            <span id="windSpeed">7</span>mph
          </p>
        </div>
      </div>
    </div>
  );
}
