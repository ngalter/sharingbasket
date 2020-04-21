import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Signup() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-secondary" label="Standard secondary" color="secondary" />
      <TextField
        id="userId"
        label="Email Address"
        variant="outlined"
        color="secondary"
      />
      <TextField
        id="password"
        label="Password"
        variant="outlined"
        color="secondary"
      />
    </form>
  );
}
