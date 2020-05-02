import { Input, FormBtn } from "../../Form";

import React, { useState, useEffect} from "react";

import API from "../../../utils/API";
import NavBar2 from "../../nav2/nav";
import Jumbotron3 from "../../jumbotron3/jumbotron";
import "./styles.css"

function Donates() {
  const [donates, setDonates] = useState([]);
  const [formObject, setFormObject] = useState({});


  // Load all pantries and store them with tries
  useEffect(() => {
    getId();
    setFormObject({
      item: "",
      qty: ""
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Loads all pantries and sets them to books
 function getId() {
    API.getUserInfo()
      .then(res => loadDonates(res.data.id))
 }
  
  function loadDonates(id) {
    API.getDonates( id )
      .then(
        res => {
          setDonates(res.data);
        }
    )
      .catch(err => console.log(err));
  };
  function saveDonations() {
    API.getUserInfo().then(res =>
    API.saveDonates(formObject.item, formObject.qty, res.data.id))
      .then(
        res => {
          console.log(res.data);
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
    if (formObject.item && formObject.qty) {
      saveDonations();
      getId();
    };
  };
  return (
    <div>
      <div>
      <NavBar2 />
      <Jumbotron3/>
         <div className="Container-fluid" style={{ textAlign: "center" }}>
         <h2 className="text-center mt-0 titleText">Your Donations</h2>
          <Input
            onChange={handleInputChange}
            name="item"
            placeholder="Donation"
            style={{ textAlign: "center" }}
          />
          <Input
            onChange={handleInputChange}
            name="qty"
            placeholder="Quantity"
            style={{ textAlign: "center" }}
          />
          <FormBtn
            disabled={!(formObject.item && formObject.qty)}
            onClick={handleFormSubmit}
          >
            <i class="fab fa-gratipay"></i>
            </FormBtn>
            </div>
        <div>
          {donates.length ? (
               <table className="table-responsive">
               <table className="table table-hover" >
                <thead>
                  <tr>
                  <th scope="col">Donation</th>
                    <th scope="col">Number/Qty</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
            
                {donates.map(item => (
                  <tr key={item.id}>
                     <td>{item.item}</td>
                    <td>{item.qty}</td>
                    <td><i class="far fa-check-circle"></i> Delivered</td>
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

export default Donates;
