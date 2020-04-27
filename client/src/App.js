import React from "react";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import LoginPageClient from "./components/pages/LoginPageClient/Login"
import LoginPantryPage from "./components/pages/LoginPagePantry/LoginPantry"
import SignUpPage from "./components/pages/SignUpPage/signUpPage"
import CustomerPage from "./components/pages/CustomerPage/customerpage"
import WishList from "./components/WishList/wishList";
import StorePage from "./components/pages/StorePage/storePage";
import SearchBar from "./components/Search/search";
import AccessibilityPage from "./components/pages/Accessibilty /accessibilityPage";
import HomePage from "./components/pages/HomePage/Home";

import "./appStyles.css"

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path={["/", "/home"]}>
          <HomePage />
        </Route>
        <Route exact path={["/login-client"]}>
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
        <Route exact path={["/", "/accessibility"]}>
          <AccessibilityPage />
        </Route>
        <Route exact path={["/", "/store"]}>
          <StorePage />
          </Route>
        <Route exact path={["/", "/searchbar"]}>
          <SearchBar />
          </Route>
          <Route exact path={["/", "/wishlist"]}>
          <WishList />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
