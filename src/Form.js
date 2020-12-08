import React from "react";

export default function Form() {
  return (
    <form id="discover-search" class="form-inline">
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
