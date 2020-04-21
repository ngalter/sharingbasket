import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import InputBase from '@material-ui/core/InputBase';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import API from "../../utils/API-external";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  head: {
    backgroundColor: '#efefef',
  },
}))

const PantryList = () => {
  const classes = useStyles();
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
      <Box>
        <Paper>
          <Box>
            <h1>Pantries</h1>
            <form>
              <InputBase
                onChange={handleInputChange}
                name="city"
                placeholder="City (required)"
              />
              <InputBase
                onChange={handleInputChange}
                name="state"
                placeholder="State (required)"
              />
              <Button
                disabled={!(formObject.city && formObject.state)}
                onClick={handleFormSubmit}
              >
                Search
            </Button>
            </form>
          </Box>
          <Box>

            {pantries.length ? (
   <TableContainer component={Paper}>
   <Table  aria-label="simple table">
     <TableHead className={classes.head}>
       <TableRow >
         <TableCell align="left" >Pantry Name</TableCell>
         <TableCell align="left">Street Address1</TableCell>
         <TableCell align="left">Zip Code</TableCell>
       </TableRow>
     </TableHead>
     <TableBody>
     {pantries.map(pantry => (
   <TableRow key={pantry.ein}>
         <TableCell align="left" >{pantry.charityName}</TableCell>
         <TableCell align="left" >{pantry.mailingAddress.streetAddress1}&nbsp;{pantry.mailingAddress.streetAddress2}</TableCell>
         <TableCell align="left" >{pantry.mailingAddress.postalCode}</TableCell>
    </TableRow>
))}
     </TableBody>
   </Table>
 </TableContainer>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Box>
        </Paper>
      </Box>
    );
  };
export default PantryList;

