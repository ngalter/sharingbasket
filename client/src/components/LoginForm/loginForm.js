import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { Input, FormBtn } from "../Form";
import NavBar2 from "../../components/nav2/nav"
import API from "../../utils/API";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import "./styles.css"

const Login = () => {

    const [login, setLogin] = useState([]);
    const [formObject, setFormObject] = useState({});
    const history = useHistory();

    //Toast
    function Notify(quote) {
      toast(quote);
    }

    // Load all pantries and store them with setPantries
    useEffect(() => {
      // loadPantries()
      setFormObject({
        email: "",
        password: ""
      })
    },[]);

    //Logout
    function logOut() {
      API.getLogout()
      .then(
        res => {
          history.push("/home")
          })
      .catch((err) => {
        if (err) {
          console.log(err)
        }
      })
   }

 // Loads all pantries and sets them to books
 function loadLogin() {
  API.getLogin(formObject.email, formObject.password)
    .then(
      res => {
        setLogin(res.data)
        if (res.data) {
          console.log(res.data)
          Notify("Login Successful!")
          setTimeout(function() {
          history.push("/home")
          }, 2000)
        }
      }
        )
    .catch((err) => {
      if (err) {
        console.log(err)
        Notify("Try Again or Sign Up.")
      }
    })
 }

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
              type="password"
              placeholder="Password"
              style={{ textAlign: "center" }}
            />
            <FormBtn
              disabled={!(formObject.email && formObject.password)}
              onClick={submitFunction}
            >
              <i class="fas fa-arrow-right"></i>
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
            <button type="button" onClick={()=>{logOut()}} style={{ display: "flex", justifyContent: "center", alignItems: "center"}} className="btn btn-primary logOutBtn">Logout</button> 
          </div>
          </div>      
          </div>
      );
    };
  
  export default Login;