import React, { useState, useEffect } from "react";
import NavBar2 from "../nav2/nav";
import Jumbotron3 from "../jumbotron3/jumbotron";
import API from "../../utils/API";

import "./styles.css"

const WishList = () => {

const [pantries, setPantries] = useState([]);

  // Load all pantries and store them with setPantries
  useEffect(() => {
    loadPantries()

  },[]);

  // Loads all pantries and sets them to books
  function loadPantries() {
    API.getWishes()
      .then(
        res => {
          setPantries(res.data)
        }
    )
      .catch(err => console.log(err));
  };

  return (
  <div>
    <div>
    <NavBar2 />
      <Jumbotron3/>
        <h2 className="text-center mt-0 titleText">List of Items from Food Pantries</h2>
        </div>
          {pantries.length ? (
            <div>
                <table className="table-responsive">
               <table className="table table-hover" >
                <tr>
                  <th align="left">Pantry Name</th>
                  <th align="left">Wish Item</th>
                  <th align="left">Quantity Desired</th>
                </tr>
                {pantries.map(item => (
                  <tr key={item.id}>
                    <td align="left" >{item.charityName}</td>
                    <td align="left" >{item.item}</td>
                    <td align="left" >{item.qty}</td>
                  </tr>
                ))}
              </table>
               </table>
            </div>
          ) : (
            <div className="noResults" style={{ textAlign: "center" }}>No Results to Display</div>
            )}
    </div>
    );
  };

export default WishList
