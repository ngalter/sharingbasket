// import React from "react";
//import API from "../../utils/API-external";
import { Col, Row, Container } from "../../components/Grid/";
import { Input, FormBtn } from "../../components/Form/";

// import "./styles.css"

// function SearchBar() {
//     return (
//       <Container fluid>
//         <Row>
//           <div className="hero">
//           </div>
//           <Col size="md-12">
//             <form className="d-flex">
//               <Input
//                 // onChange={handleInputChange}
//                 name="title"
//                 style={{ textAlign: "center", backgroundColor: "rgb(232,240,254)" }}
//                 placeholder='Search your location'
//               />
//               <FormBtn
//                 className="formBtn"
//                 style={{ textAlign: "center", backgroundColor: "rgb(232,240,254)" }}
//                 //onClick={handleSearchSubmit}
//               >
//                 <i className="fas fa-search"></i>
//               </FormBtn>
//             </form>
//           </Col>
//         </Row>
//       </Container>
//     );
// }

// export default SearchBar;

import React, { useState, useEffect } from "react";
// import { makeStyles } from '@material-ui/core/styles';

// import InputBase from '@material-ui/core/InputBase';
import API from "../../utils/API-external";



const SearchBar = () => {

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
      <div>
        <h1>Pantries</h1>
        <form>
          <Input
            onChange={handleInputChange}
            name="city"
            placeholder="City (required)"
          />
          <Input
            onChange={handleInputChange}
            name="state"
            placeholder="State (required)"
          />
          <FormBtn
            disabled={!(formObject.city && formObject.state)}
            onClick={handleFormSubmit}
          >
            Search
            </FormBtn>
        </form>
        <div>

          {pantries.length ? (
            <div>
              <th aria-label="simple table"></th>
              <table>
                <tr >
                  <th align="left" >Pantry Name</th>
                  <th align="left">Street Address1</th>
                  <th align="left">Zip Code</th>
                </tr>
                {pantries.map(pantry => (
                  <tr key={pantry.ein}>
                    <td align="left" >{pantry.charityName}</td>
                    <td align="left" >{pantry.mailingAddress.streetAddress1}&nbsp;{pantry.mailingAddress.streetAddress2}</td>
                    <td align="left" >{pantry.mailingAddress.postalCode}</td>
                  </tr>
                ))}
              </table>
            </div>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </div>
      </div>
    </div>
    );
  };

export default SearchBar;

