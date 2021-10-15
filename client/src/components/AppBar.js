import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles, AppBar, Toolbar} from '@material-ui/core';
import { AddOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: 'black',
    width: '60%',
    margin: '0 auto'
  },
  toolbar: {
    '& > *': {
        fontSize: 20,
        textDecoration: 'none',
        color: 'white',
        marginRight: 20,
    }
  },
  name: {
    fontFamily: [
      'Dancing Script',
      'cursive',
    ].join(','),
    color: 'black',
    fontSize: '2rem',
    marginRight:' 20px',
    
  },
  button: {
      fontSize: '1.5rem',
      color: 'white',
      height: 48,
      marginTop: '10px',
  }
}));

const NavigationBar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="static">
        <Toolbar className={classes.toolbar}>
            <NavLink variant= "h1" className={classes.name} to='./'>User Manager</NavLink>
            <NavLink className={classes.button} to='./add'><AddOutlined />Add User</NavLink>
        </Toolbar>
    </AppBar>
   
  );
}

export default NavigationBar;