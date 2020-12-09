import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Form() {
  return (
    <form id="discover-search" className="form-inline d-flex">
      <div className="row">
        <div className="col-11">
          <input
            type="search"
            className="form-control"
            placeholder="Type in city..."
            id="search-city"
            autoComplete="off"
          />
        </div>
        <div className="col-1">
          <input
            type="submit"
            className="btn btn-dark w-350"
            value="Discover"
          />
        </div>
      </div>
    </form>
  );
}
