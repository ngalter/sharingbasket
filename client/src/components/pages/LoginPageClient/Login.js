import React from "react";
import Header from "../../Header/";
import LoginForm from "../../LoginForm/loginForm"

import "./styles.css"

class LoginClientPage extends React.Component {
  
  render() {
      return (
          <div className="hero">
            <Header>
              <h1 style={{ color: 'white' }}>Community Login</h1>
              <h5 style={{ color: 'white' }}>to view pantries</h5>
            </Header>
          <LoginForm>
          </LoginForm>
        </div>
      );
  }
}

export default LoginClientPage;