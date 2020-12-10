import React, { useState } from "react";
import "./MainTemp.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MainTemp() {
  let [mainTemp, setMainTemperature] = useState({ ready: false });

  function handleResponse(response) {
    setMainTemperature({
      ready: true,
      temperature: response.data.main.temp,
    });
  }
  if (mainTemp.ready) {
    return (
      <div className="col-5">
        <span className="mainTemp">
          {Math.round(mainTemp.temperature)}
          <span className="units">
            <a href="/">°F</a> | <a href="/">°C</a>
          </span>
        </span>
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
