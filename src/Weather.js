import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Conditions from "./Conditions";
import CurrentDate from "./CurrentDate";


export default function Weather() {
  let [mainTemp, setMainTemperature] = useState({ ready: false });

  function handleResponse(response) {
    setMainTemperature({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
    });
  }
  if (mainTemp.ready) {
    return (
      <div className="row">
      <div className="col-6">
            <form id="discover-search" className="form-inline d-flex">
      <div className="row">
        <div className="col-11">
          <input
            type="search"
            className="form-control"
            placeholder="Type in city..."
            id="search-city"
            autoComplete="off"
            autoFocus="on"
          />
        </div>
        <div className="col-1">
          <input type="submit" className="btn btn-dark" value="Discover" />
        </div>
      </div>
    </form>
          </div>
          <div className="col-6">
            <h5 className="quote">
      "Climate is what we expect, weather is what we get."
      <br />
      -Mark Twain
    </h5>
          </div>
          </div>
        <div className="row">
          <div className="col-4">
            <h1>Boston</h1>;
            <ul>
        <li>
          <CurrentDate date={mainTemp.date} />
        </li>
        <li className="text-capitalize">
          {mainTemp.description}
        </li>
      </ul>
            <br />
          </div>
          <div className="col-3">
            <img src="images/cloudy.svg" alt="cloudy" width="150px" id="icon" />
          </div>
          <div className="col-5">
        <span className="mainTemp">
          {Math.round(mainTemp.temperature)}
          <span className="units">
            <a href="/">°F</a> | <a href="/">°C</a>
          </span>
        </span>
      </div>
          </div>
          <div>
          <Conditions />
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
