import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  box: {
      padding: theme.spacing(0),
      margin: 'auto',
      maxWidth: 'auto',
      backgroundColor: 'white',
      alignContent: 'center',
  },
  paper: {
    padding: theme.spacing(0),
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
      marginBottom: 100,
      maxWidth: '400',
      width: '400',
      alignContent: 'center',
      backgroundColor: 'whitesmoke',
  },
}));

function Header() {
  const classes = useStyles();

    return <div className={classes.root}> 
    
        <Typography component="div" >
            <Box className={classes.box}>
            <Paper className={classes.paper}>
            <h5>Food Pantries</h5>  
              
          </Paper>
          </Box>  
          </Typography> 
    </div>
          
    }        

export default Header;