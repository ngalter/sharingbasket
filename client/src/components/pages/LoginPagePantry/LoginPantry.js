import React from "react";
import Header from "../../Header/";
import LoginForm from "../../LoginForm/loginForm"

import "./styles.css"

class LoginPantryPage extends React.Component {
  
  render() {
      return (
          <div className="hero">
            <Header>
              <h1 style={{ color: 'white' }}>Pantry Login</h1>
              <h5 style={{ color: 'white' }}>add to wishlist</h5>
            </Header>
          <LoginForm>
          </LoginForm>
        </div>
      );
  }
}

export default LoginPantryPage;