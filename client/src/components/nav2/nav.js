import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import "./nav_styles.css"


//Navigation 

function Nav() {
  const [header, setHeader] = useState("nav");

  const listenScrollEvent = event => {
    if (window.scrollY < 73) {
      return setHeader("nav");
    } else if (window.scrollY > 100) {
      return setHeader("nav2");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <header className={header}>
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-3" id="mainNav">
    <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top"><Link to="/home" style={{ color: 'white' }}>The Sharing Basket</Link></a><button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
        </div>
    </div>
</nav>
</header>
);
}

export default Nav;

