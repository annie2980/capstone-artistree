import React from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Image } from 'react-bootstrap';
import { AppBar } from '@mui/material'

function App() {
  return (
    <div>
      <NavigationBar />
    </div>
  );
}

function NavigationBar() {
  return(
    // <Nav justify>
    //   <Nav.Item>
    //     <img src="img/home-light.png" alt="home icon"/>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <img src="img/home-light.png" alt="home icon"/>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <img src="img/home-light.png" alt="home icon"/>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <img src="img/home-light.png" alt="home icon"/>
    //   </Nav.Item>
    // </Nav>
    <AppBar position="fixed" color="primary">

    </AppBar>
  )
}

export default App;
