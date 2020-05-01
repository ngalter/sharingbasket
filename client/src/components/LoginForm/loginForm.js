import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { Input, FormBtn } from "../Form";
import NavBar2 from "../../components/nav2/nav"
import API from "../../utils/API";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./styles.css"


const Login = () => {

    const [login, setLogin] = useState([]);
    const [formObject, setFormObject] = useState({});
    
    //Toast
    function Notify() {
      toast("You have successfully logged in!");
    }

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
    API.getLogin(formObject.email, formObject.password)
      .then(
        res => {
          console.log(res.data);
          setLogin(res.data)
        })
        .catch((err) =>
          console.log(err));
        };
    
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

    //Function for Toast and handleFormSubmit
    function submitFunction (e) {
      handleFormSubmit(e);
      Notify(e);
     }
    return (
      <div>
      <ToastContainer />
      <div>
      <NavBar2 />
           <div className="Container-fluid" style={{ textAlign: "center" }}>
           <h2 className="text-center mt-0 titleText">Login</h2>
            <Input
              onChange={handleInputChange}
              className="form-control"
              name="email"
              placeholder="Email"
              style={{ textAlign: "center" }}
            />
            <Input
              onChange={handleInputChange}
              className="form-control"
              name="password"
              placeholder="Password"
              style={{ textAlign: "center" }}
            />
            <FormBtn
              disabled={!(formObject.email && formObject.password)}
              onClick={submitFunction}
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
                    <th scope="col">Password</th>
                    <th scope="col">UserId</th>
                    </tr>
                  </thead>
                  <tbody>
              
                  {login.map(item => (
                    <tr key={item.email}>
                       <td>{item.password}</td>
                       <td>{item.id}</td>
                    </tr>
                  ))}
                    </tbody>
                </table>
                </table>
            ) : (
           <p className="text-muted orLogin"style={{ display: "flex", justifyContent: "center" }}>Sign up&nbsp;<Link to="/sign-up">Here</Link></p>
              )}
          </div>
          </div>      
          </div>
      );
    };
  
  export default Login;
