import React from 'react'
import routes from './data/routes';
import { Link } from "react-router-dom";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme) => ({
  nav1: {
    color: 'white',
  }
}));

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  }
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);


export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  
  return (
    <div className={classes.root}>
      <AppBar position="static"> 
        <Toolbar>
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >      
                {routes.filter((l) => !l.index).map((l) => (<div>
                  <StyledMenuItem onClick={handleClose}>
                    <Link to={l.path} key={l.id}>{l.label}</Link>
                  </StyledMenuItem> </div>
                ))}
            </StyledMenu>
            </div>
            <Typography variant="h6">
            <Link to="/pantry">
              <div className={classes.nav1}> Sharing Basket</div>
              </Link>
          </Typography>
            
        </Toolbar>
      </AppBar>
    </div>
  );
}