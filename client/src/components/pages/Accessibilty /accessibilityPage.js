import React from "react";
import NavBar2 from "../../nav2/nav";
import Search from "../../Search/search";
import Jumbotron3 from "../../jumbotron3/jumbotron";

import "./styles.css"

function AccessPage() {
    return (
      <div>
      <NavBar2 />
      <Jumbotron3/>
      <h2 className="text-center mt-0 titleText">Search for the nearest Food Pantry</h2>
      <Search/>
      </div>
      );
  };

export default AccessPage;