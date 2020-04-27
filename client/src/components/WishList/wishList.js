import React from "react";
import data from "../../components/data/wishlist";
import NavBar2 from "../nav2/nav";
import Jumbotron3 from "../jumbotron3/jumbotron";

import "./styles.css"

const WishList = () => {

  return (
  <div>
    <div>
    <NavBar2 />
      <Jumbotron3/>
        <h2 className="text-center mt-0 titleText">List of Items from Food Pantries</h2>
        </div>
          {data.length ? (
            <div>
                <table class="table-responsive">
               <table class="table table-hover" >
                <tr>
                  <th align="left">Pantry Name</th>
                  <th align="left">Wish Item</th>
                </tr>
                {data.map(item => (
                  <tr key={item.id}>
                    <td align="left" >{item.name}</td>
                    <td align="left" >{item.wish}</td>
                  </tr>
                ))}
              </table>
               </table>
            </div>
          ) : (
              <h3>No Results to Display</h3>
            )}
    </div>
    );
  };

export default WishList
