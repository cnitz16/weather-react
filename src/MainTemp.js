import React from "react";
import "./MainTemp.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MainTemp() {
  function handleResponse(response) {
    alert(`The weather in New York is ${response.data.main.temp}`);
  }
  let apiKey = `62195a01c77939981afa2a73aa7e3da1`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="col-5">
      <span className="main-temp">
        <span className="units">
          <a href="/">°F</a> | <a href="/">°C</a>
        </span>
      </span>
    </div>
  );
}
