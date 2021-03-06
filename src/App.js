import React from "react";
import "./App.css";
import Weather from "./Weather";
import Source from "./Source";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div>
          <Weather defaultCity="Boston" />
        </div>
        <br />
      </div>
      <Source />
    </div>
  );
}
