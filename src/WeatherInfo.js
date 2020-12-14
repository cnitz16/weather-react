import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrentDate from "./CurrentDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-4">
          <h1>{props.info.city}</h1>
          <ul>
            <li>
              <CurrentDate date={props.info.date} />
            </li>
            <li className="text-capitalize">{props.info.description}</li>
          </ul>
          <br />
        </div>
        <div className="col-3">
          <img src="images/cloudy.svg" alt="cloudy" width="150px" id="icon" />
        </div>
        <div className="col-5">
          <span className="mainTemp">
            {Math.round(props.info.temperature)}
            <span className="units">
              <a href="/">°F</a> | <a href="/">°C</a>
            </span>
          </span>
        </div>
      </div>
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
                  <span id="realFeel">{Math.round(props.info.feeling)}</span>°
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
                  <span>{props.info.humidity}</span>%
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
                  <span id="windSpeed">{Math.round(props.info.wind)}</span>mph
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
                  <span id="pressureLevel">{props.info.pressure}</span>hPa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
