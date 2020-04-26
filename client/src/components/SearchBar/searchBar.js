import React from "react";
//import DataAreaContext from "../utils/dataAreaContext.js";
import "./searchBar.css"

const SearchBar = (props) => {
//const context = useContext(DataAreaContext)

  return (
    <form>
    <div className="form-group search-widget searchBarPantry">
      <div className="input-group mb-3">
  
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder='Enter Your Location'
          id="search"
        />
      </div>
    </div>
  </form>
  );
}
export default SearchBar;