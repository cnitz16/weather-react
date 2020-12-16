import React from "react";

export default function WeatherImages({ code, alt }) {
  const codeMapping = {
    "01d": "/Images/sun.svg",
    "01n": "/Images/night.svg",
    "02d": "/Images/011-cloud.svg",
    "02n": "/Images/nightcloudy.svg",
    "03d": "/Images/013-cloud.svg",
    "03n": "/Images/nightcloudy.svg",
    "04d": "/Images/013-cloudy.svg",
    "04n": "/Images/nightcloudy.svg",
    "09d": "/Images/002-rain.svg",
    "09n": "/Images/002-rain.svg",
    "10d": "/Images/002-rain.svg",
    "10n": "/Images/002-rain.svg",
    "11d": "/Images/004-storm.svg",
    "11n": "/Images/004-storm.svg",
    "13d": "/Images/003-snow.svg",
    "13n": "/Images/006-blizzard.svg",
    "50d": "/Images/014-cloud.svg",
    "50n": "/Images/014-cloud.svg",
  };
  return <img src={codeMapping[code]} alt={alt} />;
}
