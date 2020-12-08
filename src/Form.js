import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Form() {
  return (
    <form id="discover-search" className="form-inline">
      <input
        type="search"
        className="form-control"
        placeholder="Type in city..."
        id="search-city"
        autoComplete="off"
      />
      <input type="submit" className="btn btn-dark" value="Discover" />
    </form>
  );
}
