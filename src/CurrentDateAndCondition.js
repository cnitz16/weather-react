import React, { useState } from "react";
import axios from "axios";
import "./CurrentDateAndCondition.css";

export default function CurrentDateAndCondition() {
  let [currentDateAndConditions, setCurrentDateAndConditions] = useState({
    ready: false,
  });
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.date.getDay()];
  let hours = date.date.getHours();
  let minutes = date.date.getMinutes();

  function handleResponse(response) {
    setCurrentDateAndConditions({
      ready: true,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }
  if (currentDateAndConditions.ready) {
    return (
      <ul>
        <li>
          {day} {hours}:{minutes}
        </li>
        <li className="text-capitalize">
          {currentDateAndConditions.description}
        </li>
      </ul>
    );
  } else {
    let apiKey = `62195a01c77939981afa2a73aa7e3da1`;
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
