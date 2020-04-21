import React, { Component } from "react";
// import { Router, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Users from "./components/pages/UserList";
import Detail from "./components/pages/Detail";
// import NoMatch from "./components/pages/NoMatch";
import Navbar from "./components/Navbar";
// import Login from "./components/pages/Login";
import Home from "./components/pages/Home"
import Secret from "./components/pages/Secret"
import PantryList from "./components/pages/PantryList";

function App() {
  return (<div>
    <Router>
      <Navbar />
        <Route path="/secret" component={Secret} />
        <Route path="/" exact component={Home} />
        <Route exact path="/Community" component={Users} />
        <Route exact path="/pantry" component={PantryList} />
        <Route exact path="/users/:id" component={Detail} />
  </Router>
    </div>
  );
}

export default App;
