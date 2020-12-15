import React, { useState } from "react";

export default function WeatherConversion(props) {
  const [units, setUnits] = useState("fahrenheit");
  function convertToCelsius(event) {
    event.preventDefault();
    setUnits("celsius");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }
  if (units === "fahrenheit") {
    return (
      <div className="col-5">
        <span className="mainTemp">
          {Math.round(props.fahrenheit)}
          <span className="units">
            °F |{" "}
            <a href="/" onClick={convertToCelsius}>
              °C
            </a>
          </span>
        </span>
      </div>
    );
  } else {
    let celsiusTemp = (props.fahrenheit - 32) * (5 / 9);
    return (
      <div className="col-5">
        <span className="mainTemp">
          {Math.round(celsiusTemp)}
          <span className="units">
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>{" "}
            | °C
          </span>
        </span>
      </div>
    );
  }
}
