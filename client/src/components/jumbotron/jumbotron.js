import React from "react";
import "./jumbotron_styles.css"

// Masthead

function Jumbotron() {
    return (
<header className="masthead">
    <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
            <img src="../../assets/logo_share-01.png" alt="logo" className="logoJumbotron" href="logo"/><br /> 
            </div>
            <div className="col-lg-8 align-self-baseline">
                <p className="tagLine">Working Together to End Hunger</p>
                <a href="#login" id="loginBtn" className="btn btn-lg btn-outline-primarypx-4 js-scroll-trigger">View Local Pantries</a>
            </div>
        </div>
    </div>
</header>

);
}

export default Jumbotron;