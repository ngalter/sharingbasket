// import React from 'react';
// // import { Paper, makeStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
// import { Face, Fingerprint } from '@material-ui/icons'

// const useStyles = makeStyles((theme) => ({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//         width: '25ch',
//       },
//     },
//   }));
 
import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

function LoginTab() {
        
        return (
            <Paper>
                {/* <div className={classes.margin}>
                    <Box container spacing={8} alignItems="flex-end">
                        <Box item md={true} sm={true} xs={true}>
                            <Typography id="username" label="Username" type="email" fullWidth autoFocus required />
                        </Box>
                    </Box>
                    <Box container spacing={8} alignItems="flex-end">
                        <Box item md={true} sm={true} xs={true}>
                            <Typography id="password" label="Password" type="password" fullWidth required />
                        </Box>
                    </Box>
                    <Box container alignItems="center" justify="space-between">
                        <Box item>
                            <FormControlLabel control={
                            } label="Remember me" />
                        </Box>
                        <Box item>
                            <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Forgot password ?</Button>
                        </Box>
                    </Box>
                    <Box container justify="center" style={{ marginTop: '10px' }}>
                        <Button variant="outlined" color="primary" style={{ textTransform: "none" }}>Login</Button>
                    </Box>
                </div> */}
            </Paper>
        );
    }


export default LoginTab;