import { Input, FormBtn } from "../../Form/";

import React, { useState, useEffect } from "react";
import NavBar2 from "../../nav2/";
import Jumbotron3 from "../../jumbotron3/jumbotron";

import API from "../../../utils/API";

import "./styles.css"

const Login = () => {

    const [login, setLogin] = useState([]);
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
    function loadLogin() {
      API.getLogin(formObject.state, formObject.city)
        .then(
          res => {
            console.log(res.data);
            setLogin(res.data)
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
        loadLogin();
      };
    };
    return (
      <div>
      <div>
      <NavBar2 />
        <Jumbotron3/>
           <div className="Container-fluid" style={{ textAlign: "center" }}>
           <h2 className="text-center mt-0 titleText">Search for the nearest Food Pantry</h2>
            <Input
              onChange={handleInputChange}
              name="email"
              placeholder="City (required)"
              style={{ textAlign: "center" }}
            />
            <Input
              onChange={handleInputChange}
              name="password"
              placeholder="State (required)"
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
            {login.length ? (
                 <table className="table-responsive">
                 <table className="table table-hover" >
                  <thead>
                    <tr>
                    <th scope="col">Email</th>
                    <th scope="col">UserId</th>
                    </tr>
                  </thead>
                  <tbody>
              
                  {login.map(item => (
                    <tr key={item.email}>
                       <td>Welcome: {item.email}</td>
                       <td>User #: {item.id}</td>
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
  
  export default Login;
  
