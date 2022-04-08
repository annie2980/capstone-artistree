import React, {useState, useEffect} from 'react';
import { Route, Switch, Redirect, Link, BrowserRouter, NavLink} from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Image } from 'react-bootstrap';
import { BsPinFill } from "react-icons/bs";
import HomePage from './component/Home';
import AboutPage from './component/About';
import UserStories from './component/Stories';
import OurTeam from './component/Team';

function App(props) {
  return (
  <BrowserRouter>
  <div>
    <header>
      <div className="container-fluid fixed-top header">
        <ul>
            <li>
                <h1 className="WebTitle">ARTISTREE</h1>
            </li>
        </ul>

        {/* Search bar for mobile screens */}

        {/* Larger screens navbar */}
        <nav className="nav headerNav d-none d-lg-flex">
          <NavLink exact to='/' className="nav-link" activeClassName={"activeLink"}>HOME</NavLink>
          <NavLink to='/about' className="nav-link" activeClassName={"activeLink"}>ABOUT</NavLink>
          <NavLink to='/stories' className="nav-link" activeClassName={"activeLink"}>STORIES</NavLink>
          <NavLink to='/our_team' className="nav-link" activeClassName={"activeLink"}>OUR TEAM</NavLink>
        </nav>
      </div>
    </header>

    {/* Mobile/Tablet screen navbar FIX */}
    <nav className="navbar">
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Menu
      </a>
      <div className="container-fluid fixed-top navbar dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <NavLink exact to='/' className="nav-link dropdown-item" activeClassName={"activeLink"}>HOME</NavLink>
        <NavLink to='/quiz' className="nav-link dropdown-item" activeClassName={"activeLink"}>ABOUT</NavLink>
        <NavLink to='/stories' className="nav-link dropdown-item" activeClassName={"activeLink"}>STORIES</NavLink>
        <NavLink to='/our_team' className="nav-link dropdown-item" activeClassName={"activeLink"}>OUR TEAM</NavLink>
      </div>
    </nav>

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/stories" component={UserStories} />
      <Route path="/our_team" component={OurTeam} />
      <Redirect to="/" />
    </Switch>
  </div>
</BrowserRouter>
);
}

export default App;
