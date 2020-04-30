import { Input, FormBtn } from "../../components/Form";

import React, { useState, useEffect } from "react";
import NavBar2 from "../nav2/nav";
import Jumbotron3 from "../jumbotron3/jumbotron";

import API from "../../utils/API";

import "./styles.css"



const SearchBar = () => {

  const [pantries, setPantries] = useState([]);
  const [formObject, setFormObject] = useState({});

  // Load all pantries and store them with setPantries
  useEffect(() => {
    setFormObject({
      city: "",
      state: ""
    })
  },[]);

  // Loads all pantries and sets them to books
  function loadPantries() {
    API.getPantries(formObject.state, formObject.city)
      .then(
        res => {
          setPantries(res.data)
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
    if (formObject.city && formObject.state) {
      loadPantries();
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
            name="city"
            placeholder="City (required)"
            style={{ textAlign: "center" }}
          />
          <Input
            onChange={handleInputChange}
            name="state"
            placeholder="State (required)"
            style={{ textAlign: "center" }}
          />
          <FormBtn
            disabled={!(formObject.city && formObject.state)}
            onClick={handleFormSubmit}
          >
            <i className="fas fa-search"></i>
            </FormBtn>
            </div>
        <div>
          {pantries.length ? (
               <table className="table-responsive">
               <table className="table table-hover" >
                <thead>
                  <tr>
                  <th scope="col">Pantry Name</th>
                  <th scope="col">Street Address</th>
                  <th scope="col">Zip Code</th>
                  </tr>
                </thead>
                <tbody>
            
                {pantries.map(pantry => (
                  <tr key={pantry.ein}>
                     <td>{pantry.charityName}</td>
                     <td>{pantry.mailingAddress.streetAddress1}&nbsp;{pantry.mailingAddress.streetAddress2}</td>
                    <td>{pantry.mailingAddress.postalCode}</td>
                    <td><FormBtn disabled><i class="far fa-question-circle"></i> info</FormBtn></td>
                  </tr>
                ))}
                  </tbody>
              </table>
              </table>
          ) : (
              <div className="noResults" style={{ textAlign: "center" }}></div>
            )}
        </div>
        </div>      
        </div>
    );
  };

export default SearchBar;
