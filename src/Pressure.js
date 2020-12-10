import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function Pressure() {
  let [pressure, setPressure] = useState({ ready: false });

  function handleResponse(response) {
    setPressure({
      ready: true,
      pressure: response.data.main.pressure,
    });
  }
  if (pressure.ready) {
    return (
      <div className="p-4 mb-2 bg-success rounded shadow text-black">
        <h5 className="current-pressure">Pressure</h5>
        <div className="row">
          <div className="col-4">
            <i className="fas fa-cloud-sun-rain"></i>
          </div>
          <div className="col-4">
            <p className="card-text">
              <span id="pressureLevel">{pressure.pressure}</span>hPa
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `62195a01c77939981afa2a73aa7e3da1`;
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
