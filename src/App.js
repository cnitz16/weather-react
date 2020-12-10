import React from "react";
import "./App.css";
import Form from "./Form";
import MainTemp from "./MainTemp";
import Conditions from "./Conditions";
import City from "./City";
import Quote from "./Quote";
import Source from "./Source";
import CurrentDateAndCondition from "./CurrentDateAndCondition";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Form />
          </div>
          <div className="col-6">
            <Quote />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <City />
            <CurrentDateAndCondition />
            <br />
          </div>
          <div className="col-3">
            <img src="images/cloudy.svg" alt="cloudy" width="150px" id="icon" />
          </div>
          <div className="col-5">
            <MainTemp />
          </div>
          <div className="row">
            <Conditions />
          </div>
        </div>
        <br />
        <Source />
      </div>
    </div>
  );
}
