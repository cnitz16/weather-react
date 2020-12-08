import React from "react";

export default function currentConditions() {
  return (
    <div class="p-4 mb-2 bg-info rounded shadow text-black">
      <h5 class="real-feel">Real Feel</h5>
      <div class="row">
        <div class="col-4">
          <i class="fas fa-sun"></i>
        </div>
        <div class="col-4">
          <p class="card-text">
            <span id="realFeel">46</span>°
          </p>
        </div>
      </div>
    </div>
  );
}
