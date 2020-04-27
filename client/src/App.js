import React from "react";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import LoginPageClient from "./components/pages/LoginPageClient/Login"
import LoginPantryPage from "./components/pages/LoginPagePantry/LoginPantry"
import SignUpPage from "./components/pages/SignUpPage/signUpPage"
import CustomerPage from "./components/pages/CustomerPage/customerpage"
import WishList from "./components/WishList/wishList";
import StorePage from "./components/pages/StorePage/storePage";
import Search from "./components/Search/search";
import HomePage from "./components/pages/HomePage/Home";

import "./appStyles.css"

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>
        <Route exact path={"/login-client"}>
          <LoginPageClient />
        </Route>
        <Route exact path={["/", "/login-pantry"]}>
          <LoginPantryPage />
        </Route>
        <Route exact path={["/", "/sign-up"]}>
          <SignUpPage />
        </Route>
        <Route exact path={["/", "/customer"]}>
          <CustomerPage />
        </Route>
        <Route exact path={["/", "/pantry"]}>
          <SignUpPage />
        </Route>
        <Route exact path={"/search"}>
          <Search />
        </Route>
        <Route exact path={["/", "/store"]}>
          <StorePage />
          </Route>
          <Route exact path={"/wishlist"}>
          <WishList />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
