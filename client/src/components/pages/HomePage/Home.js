import React from "react";
import Nav from "../../nav/nav";
import About from "../../about/about";
//import Login from "../../LandingPage/Login";
import Login from "../../Login/Login"
import Services from "../Services/services"
//import SignUpPage from "../../SignupNancy/Signup"
import GetInvolved from "../../Get Involved/getinvolved";
import Jumbotron from "../../jumbotron/jumbotron";
import "./styles.css"

function HomePage() {
    return (
      <div>
      <Nav />
      <Jumbotron/>
      <About />
      <Login />
      <Services />
      <GetInvolved />
      </div>
    );
  }


export default HomePage;
