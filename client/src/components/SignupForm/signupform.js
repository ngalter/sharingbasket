import React from "react";
import "./styles.css"
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {
  
  render() {
      return (
        <div className="wrapper">
          <form 
            onSubmit={this.handleSubmit}
            className="form-signin">
            <h2 className="form-signin-heading">{this.props.title}</h2>
            <h3>Sign Up Form</h3>
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Email Address"
            />
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
            />

            <button className="btn btn-lg btn-primary btn-block" type="submit">
              Submit
            </button>
          </form>
          <p className="text-muted orLogin"style={{ display: "flex", justifyContent: "center" }}>or go back&nbsp;<Link to="/">Home</Link></p>
        </div>
      );
  }
}

export default LoginForm;