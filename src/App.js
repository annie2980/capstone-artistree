import React from 'react';
import {Route, Switch, Redirect, NavLink} from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Image } from 'react-bootstrap';

function App() {
  return (
    <div>
      <NavBar />
    </div>
  );
}

function NavBar() {
  return(
    <div>
      <img src="img/home-light.png" alt="home icon"/>
    </div>
  )
}

export default App;
