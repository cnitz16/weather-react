import React from "react";
import "./Weather.css";
import WeatherConversion from "./WeatherConversion";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrentDate from "./CurrentDate";
// import WeatherIcon from "./WeatherIcon";
import WeatherImages from "./WeatherImages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSun,
  faTint,
  faWind,
  faCloudSunRain,
} from "@fortawesome/free-solid-svg-icons";

library.add(faSun, faTint, faWind, faCloudSunRain);

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-4">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <CurrentDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
          <br />
        </div>
        <div className="col-3">
          <WeatherImages code={props.data.icon} alt={props.data.sky} />
        </div>
        <WeatherConversion fahrenheit={props.data.temperature} />
      </div>
      <div className="row">
        <div className="col-3">
          <div className="p-4 mb-2 bg-info rounded shadow text-black">
            <h5 className="realFeel">Real Feel</h5>
            <div className="row">
              <div className="col-4">
                <FontAwesomeIcon icon={faSun} />
              </div>
              <div className="col-4">
                <p className="card-text">
                  <span>{Math.round(props.data.feeling)}</span>°
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
                <FontAwesomeIcon icon={faTint} />
              </div>
              <div className="col-4">
                <p className="card-text">
                  <span>{props.data.humidity}</span>%
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
                <FontAwesomeIcon icon={faWind} />
              </div>
              <div className="col-4">
                <p className="card-text">
                  <span>{Math.round(props.data.wind)}</span>mph
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
                <FontAwesomeIcon icon={faCloudSunRain} />
              </div>
              <div className="col-4">
                <p className="card-text">
                  <span>{props.data.pressure}</span>hPa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
