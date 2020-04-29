import { Input, FormBtn } from "../Form";

import React, { useState, useEffect } from "react";
import NavBar2 from "../nav2/nav";
import Jumbotron3 from "../jumbotron3/jumbotron";

import API from "../../utils/API";

import "./styles.css"

const Signup = () => {

    const [signup, setSignup] = useState([]);
    const [formObject, setFormObject] = useState({});
  
    // Load all pantries and store them with setPantries
    useEffect(() => {
      // loadPantries()
      setFormObject({
        email: "",
        password: ""
      })
    },[]);
  
    // Loads all pantries and sets them to books
    function loadSignup() {
      API.getSignup(formObject.email, formObject.password)
        .then(
          res => {
            console.log(res.data);
            setSignup(res.data)
          }
      )
        .catch(err => console.log(err));
    };
   
    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({ ...formObject, [name]: value })
  }
  
    function handleFormSubmit(event) {
      event.preventDefault();
      if (formObject.email && formObject.password) {
        loadSignup();
      };
    };
    return (
      <div>
      <div>
      <NavBar2 />
        <Jumbotron3/>
           <div className="Container-fluid" style={{ textAlign: "center" }}>
           <h2 className="text-center mt-0 titleText">Sign Up Nancy Page</h2>
            <Input
              onChange={handleInputChange}
              name="email"
              placeholder="Email"
              style={{ textAlign: "center" }}
            />
            <Input
              onChange={handleInputChange}
              name="password"
              placeholder="Password"
              style={{ textAlign: "center" }}
            />
            <FormBtn
              disabled={!(formObject.email && formObject.password)}
              onClick={handleFormSubmit}
            >
              <i className="fas fa-search"></i>
              </FormBtn>
              </div>
          <div>
            {signup.length ? (
                 <table className="table-responsive">
                 <table className="table table-hover" >
                  <thead>
                    <tr>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">UserId</th>
                    </tr>
                  </thead>
                  <tbody>
              
                  {signup.map(item => (
                    <tr key={item.email}>
                       <td>{item.password}</td>
                       <td>{item.id}</td>
                    </tr>
                  ))}
                    </tbody>
                </table>
                </table>
            ) : (
                <div className="noResults" style={{ textAlign: "center" }}>No Results to Display</div>
              )}
          </div>
          </div>      
          </div>
      );
    };
  
  export default Signup;
  
