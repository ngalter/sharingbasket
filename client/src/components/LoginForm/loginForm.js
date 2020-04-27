import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { Input, FormBtn } from "../../components/Form/";
import API from "../../routes/api-routes";


// class LoginForm extends React.Component {

const LoginForm = () => {

  const [formObject, setFormObject] = useState({});

  // Load all pantries and store them with setPantries
  useEffect(() => {
   
    setFormObject({
      email: "",
      password: ""
    })
  }, []);

 
  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.city && formObject.state) {
      API.post({ formObject })
        .then(
          res => console.log(res.data)
        )
        .catch(err => console.log(err));
    };
  };



  handleSubmit = (e) => {
    event.preventDefault();
    console.log({ objectForm })
    axios.post('"/api/signup"', { objectForm })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }
  
    return (
      <div className="wrapper">
        <form
          onSubmit={this.handleSubmit}
          className="form-signin">
          <h2 className="form-signin-heading">{this.props.title}</h2>
          <h3>Sign In</h3>
          <Input
            onChange={handleInputChange}
            name="email"
            placeholder="Email (required)"
          />
          <Input
            onChange={handleInputChange}
            name="password"
            placeholder="Password (required)"
          />
        
          <FormBtn
            disabled={!(formObject.email && formObject.password)}
            onClick={handleFormSubmit}
          >
            Login
            </FormBtn>

          {/* <button className="btn btn-lg btn-primary btn-block" type="submit">
              Login
            </button>
            <p className="text-muted orLogin"style={{ display: "flex", justifyContent: "center" }}>Sign up&nbsp;<Link to="/sign-up">Here</Link></p>
          </form>
          <p className="text-muted orLogin"style={{ display: "flex", justifyContent: "center" }}>or go back&nbsp;<Link to="/">Home</Link></p> */}
        </form>
      </div>
    );
  };



export default LoginForm;

