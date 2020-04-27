// import React, { useState, useEffect } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

// function Donate() {
//   // Setting our component's initial state
//   const [donate, setDonatess] = useState([])
//   const [formObject, setFormObject] = useState({})

//   // Load all books and store them with setBooks
//   useEffect(() => {
//     loadDonates()
//   }, [])

//   // Loads all books and sets them to books
//   function loadDonates() {
//     API.getDonates()
//       .then(res => 
//         setDonates(res.data)
//       )
//       .catch(err => console.log(err));
//   };

//   // Deletes a book from the database with a given id, then reloads books from the db
//   function deleteDonate(id) {
//     API.deleteDonate(id)
//       .then(res => loadDonates())
//       .catch(err => console.log(err));
//   }

//   // Handles updating component state when the user types into the input field
//   function handleInputChange(event) {
//     const { name, value } = event.target;
//     setFormObject({...formObject, [name]: value})
//   };

//   // When the form is submitted, use the API.saveBook method to save the book data
//   // Then reload books from the database
//   function handleFormSubmit(event) {
//     event.preventDefault();
//     if (formObject.title && formObject.author) {
//         API.saveDonate({
//         user_id: formObject.user_id,
//         item: formObject.item,
//         qty: formObject.qty
//       })
//         .then(res => loadDonates())
//         .catch(err => console.log(err));
//     }
//   };

//     return (
//       <Container fluid>
//             <form>
//               <Input
//                 onChange={handleInputChange}
//                 name="user_id"
//                 placeholder="user_id"
//               />
//               <Input
//                 onChange={handleInputChange}
//                 name="item"
//                 placeholder="item"
//               />
//               <TextArea
//                 onChange={handleInputChange}
//                 name="qty"
//                 placeholder="qty"
//               />
//               <FormBtn
//                 disabled={!(formObject.user_id && formObject.item)}
//                 ck={handleFormSubmit}
//               >
//                 Submit Donate
//               </FormBtn>
//             </form>
//           </Col>
//           <Col size="md-6 sm-12">
//             {donate.length ? (
//               <List>
//                 {donate.map(item => (
//                   <ListItem key={item.id}>
//                       <strong>
//                         {item.item} by {item.qty}
//                       </strong>
//                     <DeleteBtn ck={() => deleteDonate(item.id)} />
//                   </ListItem>
//                 ))}
//               </List>
//             ) : (
//               <h3>No Results to Display</h3>
//             )}
//           </Col>
//     );
//   }


// export default Books;