import React from "react";
import "./jumbotron_styles.css"
import SearchBar from "../../components/Search/search";
// Masthead

function Jumbotron() {
    return (
<header className="masthead">
    <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
            <SearchBar />
            </div>
            <div className="col-lg-8 align-self-baseline">
                <p className="tagLine">Working Together to End Hunger</p>
            </div>
        </div>
    </div>
</header>

);
}

export default Jumbotron;