import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RealFeel() {
  let [realFeel, setRealFeel] = useState({ ready: false });

  function handleResponse(response) {
    setRealFeel({
      ready: true,
      realFeel: response.data.main.feels_like,
    });
  }
  if (realFeel.ready) {
    return (
      <div className="p-4 mb-2 bg-info rounded shadow text-black">
        <h5 className="real-feel">Real Feel</h5>
        <div className="row">
          <div className="col-4">
            <i className="fas fa-sun"></i>
          </div>
          <div className="col-4">
            <p className="card-text">
              <span id="realFeel">{realFeel.reelFeel}</span>°
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
