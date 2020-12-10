import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Wind() {
  let [wind, setWind] = useState({ ready: false });

  function handleResponse(response) {
    setWind({
      ready: true,
      wind: response.data.wind.speed,
    });
  }
  if (wind.ready) {
    return (
      <div className="p-4 mb-2 bg-warning rounded shadow text-black">
        <h5 className="wind-speed">Wind</h5>
        <div className="row">
          <div className="col-4">
            <i className="fas fa-wind"></i>
          </div>
          <div className="col-4">
            <p className="card-text">
              <span id="windSpeed">{wind.wind}</span>mph
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
