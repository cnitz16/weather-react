import React from "react";
import "./MainTemp.css";
// import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MainTemp() {
  return (
    <div className="col-5">
      <span className="mainTemp">
        35
        <span className="units">
          <a href="/">°F</a> | <a href="/">°C</a>
        </span>
      </span>
    </div>
  );
}
