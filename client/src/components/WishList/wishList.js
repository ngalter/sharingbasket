import React from "react";
import data from "../../components/data/wishlist";

const WishList = () => {

  return (<div>
    <div>
        <h1>Wish List</h1>
        </div>
          {data.length ? (
            <div>
              <th aria-label="data table"></th>
              <table>
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
            </div>
          ) : (
              <h3>No Results to Display</h3>
            )}
    </div>
    );
  };

export default WishList;

