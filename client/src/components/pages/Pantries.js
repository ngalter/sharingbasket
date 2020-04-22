import React, { useState, useEffect } from "react";
import DeleteBtn from "../DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../List";
import { Input, FormBtn } from "../Form";

function Pantries() {
  // Setting our component's initial state
  const [pantries, setPantries] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadPantries()
  }, [])

  // Loads all books and sets them to books
  function loadPantries() {
    API.getPantries()
      .then(res => 
        setPantries(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db

  function deletePantry(id) {
    API.deletePantry(id)
      .then(res => loadPantries())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.name && formObject.email) {
      API.savePantry({
        name: formObject.name,
        email: formObject.email,
        password: formObject.password
      })
        .then(res => loadPantries())
        .catch(err => console.log(err));
    }
  };

    return (<div>
              <h1>Pantries?</h1>
            <form>
              <Input
                onChange={handleInputChange}
                name="name"
                placeholder="Name (required)"
              />
              <Input
                onChange={handleInputChange}
                name="email"
                placeholder="Email (required)"
              />
              <Input
                onChange={handleInputChange}
                name="password"
                placeholder="Password (Required)"
              />
              <FormBtn
                disabled={!(formObject.name && formObject.email )}
                onClick={handleFormSubmit}
              >
                Submit Pantry
              </FormBtn>
            </form>
              <h1>pantries</h1><div>
            {pantries.length ? (
              <List>
                {pantries.map(item=> (
                  <ListItem key={item._id}>
                    <Link to={"/pantries/" + item._id}>
                      <strong>
                        {item.name} at: {item.email}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deletePantry(item._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}</div></div>
    );
  }


export default Pantries;

