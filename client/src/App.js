import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import LoginPageClient from "./components/pages/LoginPageClient/Login"
import LoginPantryPage from "./components/pages/LoginPagePantry/LoginPantry"
import SignUpPage from "./components/pages/SignUpPage/signUpPage"
import HomePage from "./components/pages/HomePage/Home";

import "./appStyles.css"

// class App extends Component {
//   static propTypes = {
//     children: PropTypes.node
//   }
// }

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path={["/", "/home"]}>
          <HomePage />
        </Route>
        <Route exact path={["/", "/login-client"]}>
          <LoginPageClient />
        </Route>
        <Route exact path={["/", "/login-pantry"]}>
          <LoginPantryPage />
        </Route>
        <Route exact path={["/", "/sign-up"]}>
          <SignUpPage />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
