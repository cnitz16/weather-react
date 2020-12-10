import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Conditions() {
  let [conditions, setConditions] = useState({ ready: false });
  function handleResponse(response) {
    setConditions({
      ready: true,
      feeling: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.main.pressure,
    });
  }
  if (conditions.ready) {
    return (
      <div className="row">
        <div className="col-3">
          <div className="p-4 mb-2 bg-info rounded shadow text-black">
            <h5 className="realFeel">Real Feel</h5>
            <div className="row">
              <div className="col-4">
                <i className="fas fa-sun" />
              </div>
              <div className="col-4">
                <p className="card-text">
                  <span id="realFeel">{Math.round(conditions.feeling)}</span>°
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="p-4 mb-2 bg-primary rounded shadow text-black">
            <h5 className="current-humidity">Humidity</h5>
            <div className="row">
              <div className="col-4">
                <i className="fas fa-tint"></i>
              </div>
              <div className="col-4">
                <p className="card-text">
                  <span>{conditions.humidity}</span>%
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="p-4 mb-2 bg-warning rounded shadow text-black">
            <h5 className="wind-speed">Wind</h5>
            <div className="row">
              <div className="col-4">
                <i className="fas fa-wind"></i>
              </div>
              <div className="col-4">
                <p className="card-text">
                  <span id="windSpeed">{Math.round(conditions.wind)}</span>mph
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="p-4 mb-2 bg-success rounded shadow text-black">
            <h5 className="current-pressure">Pressure</h5>
            <div className="row">
              <div className="col-4">
                <i className="fas fa-cloud-sun-rain"></i>
              </div>
              <div className="col-4">
                <p className="card-text">
                  <span id="pressureLevel">{conditions.pressure}</span>hPa
                </p>
              </div>
            </div>
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
