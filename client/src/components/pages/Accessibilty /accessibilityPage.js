import React from "react";
import NavBar2 from "../../nav2/nav";
import SearchBar from "../../SearchBar/searchBar";
import Jumbotron3 from "../../jumbotron3/jumbotron";

import "./styles.css"

function AccessPage() {
    return (
      <div>
      <NavBar2 />
      <Jumbotron3/>
      <h2 className="text-center mt-0 titleText">Search for the nearest Food Pantry</h2>
      <SearchBar/>
      </div>
      );
  };

export default AccessPage;