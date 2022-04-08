import React, {useState, useEffect} from 'react';
<<<<<<< HEAD
import { Route, Switch, Redirect, Link, BrowserRouter, NavLink} from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Image } from 'react-bootstrap';
import { BsPinFill } from "react-icons/bs";
import HomePage from './component/Home';
import AboutPage from './component/About';
import UserStories from './component/Stories';
import OurTeam from './component/Team';
=======
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import { HomeOutlined, SearchOutlined, ChatBubbleOutline, PersonOutline } from '@mui/icons-material'
import SplashScreen from './component/onboarding/SplashScreen';
import Auth from './component/auth/Auth';
import Post from './component/Post';
import Profile from './component/Profile';
import SupportFeed from './component/SupportFeed';
import ImageUpload from '../src/component/imageUpload/ImageUpload';
import {db, auth, logoutUser} from '../src/database/firebase'

function App() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);


  useEffect(() => {
    // listens to auth-based changes
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user has logged in
        console.log(authUser);
        setUser(authUser);
        // function to keep the user logged in
      } else {
        // user has logged out
        setUser(null);
      }
    });
  }, [user]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
          }))
        );
      });
  }, []);

  let content = null

  if (user == null) { // if logged out, show login form
    content = (
      <Auth />
      // <SplashScreen />
    )
  } else {
    content = (
      <div>
        <main>
          <div>
            <Switch>
              <Route exact path="/feed"> <SupportFeed auth={auth} posts={posts}/> </Route>
              <Route path="/profile"> <Profile auth={auth} /> </Route>
              <Redirect to="/feed" />
            </Switch>
          </div>
        </main>
        <div>
        <button
              className="comment__button text__button"
              onClick={logoutUser}
              type="submit"
            >
              Logout
            </button>
        </div>
        <div> 
          <NavigationBar />
        </div>
      </div>
    )
  }
>>>>>>> 880525f2f7a2f9df8cae3dcc87b87eb6b6b3252a

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
