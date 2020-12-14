import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [mainTemp, setMainTemperature] = useState({ ready: false });

  function handleResponse(response) {
    setMainTemperature({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      city: response.data.name,
      feeling: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.main.pressure,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    let apiKey = `62195a01c77939981afa2a73aa7e3da1`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (mainTemp.ready) {
    return (
      <div>
        <div className="row">
          <div className="col-6">
            <form className="form-inline d-flex" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-11">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Type in city..."
                    autoComplete="off"
                    autoFocus="on"
                    onChange={handleCityChange}
                  />
                </div>
                <div className="col-1">
                  <input
                    type="submit"
                    className="btn btn-dark"
                    value="Discover"
                  />
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
        <WeatherInfo info={mainTemp} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
