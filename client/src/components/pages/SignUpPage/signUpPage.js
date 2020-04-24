import React from "react";
import Header from "../../Header/";
import SignUpForm from "../../SignupForm/signupform"

import "./styles.css"

class signUpPage extends React.Component {
  
  render() {
      return (
          <div className="hero">
            <Header>
              <h1 style={{ color: 'white' }}>Sign up</h1>
              <h5 style={{ color: 'white' }}>to create account</h5>
            </Header>
          <SignUpForm>
          </SignUpForm>
        </div>
      );
  }
}

export default signUpPage;