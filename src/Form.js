import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Form() {
  return (
    <form id="discover-search" className="form-inline">
      <input
        type="search"
        class="form-control"
        placeholder="Type in city..."
        id="search-city"
        autocomplete="off"
      />
      <input type="submit" class="btn btn-dark" value="Discover" />
    </form>
  );
}
