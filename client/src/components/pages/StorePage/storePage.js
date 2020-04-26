import React from "react";
import NavBar2 from "../../nav2/nav";
import Jumbotron3 from "../../jumbotron3/jumbotron";

import "./styles.css"

function AccessPage() {
    return (
      <div>
      <NavBar2 />
      <Jumbotron3/>
      <h2 className="text-center mt-0 titleText">Store your list of items for a later time</h2>
      </div>
      );
  };

export default AccessPage;