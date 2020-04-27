import { Col, Row, Container } from "../../Grid/";
import React, { useState, useEffect } from "react";
import SearchBar from "../../Search/search";
import API from "../../../utils/API-external";
import { Input, FormBtn } from "../../Form/";


import "./styles.css"



const CustomerPage = () => {

  const [pantries, setPantries] = useState([]);
  const [formObject, setFormObject] = useState({});

  // Load all pantries and store them with setPantries
  useEffect(() => {
    // loadPantries()
    setFormObject({
      city: "Philadelphia",
      state: "PA"
    })
  },[]);

  // Loads all pantries and sets them to books
  function loadPantries() {
    API.getPantries(formObject.state, formObject.city)
      .then(
      res => setPantries(res.data)
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
         <div className="Container-fluid" style={{ textAlign: "center" }}>
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
               <table class="table-responsive">
               <table class="table table-hover" >
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
    );
  };

export default CustomerPage;
