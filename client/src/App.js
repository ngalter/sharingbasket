import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Users from "./components/pages/Users";
import Detail from "./components/pages/Detail";
// import NoMatch from "./components/pages/NoMatch";
import Navbar from "./components/Navbar";
// import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup"
import PantryList from "./components/pages/PantryList";

function App() {
  return (<div>
    <Router>
        <Navbar />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/home" component={PantryList} />
        <Route exact path="/Community" component={Users} />
        <Route exact path="/pantry" component={PantryList} />
         <Route exact path="/users/:id" component={Detail} />
  </Router>
    </div>
  );
}

export default App;
