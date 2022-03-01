import React, {useState, useEffect} from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Image } from 'react-bootstrap';
import { AppBar, Toolbar, IconButton, BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import { HomeOutlined, SearchOutlined, ChatBubbleOutline, PersonOutline } from '@mui/icons-material'
import Auth from './component/auth/Auth';
import Post from './component/Post';
import Profile from './component/Profile';
import SupportFeed from './component/SupportFeed';
import ImageUpload from '../src/component/imageUpload/ImageUpload';
import {db, auth} from '../src/database/firebase'

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
          <NavigationBar />
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Moved this to Profile.js and SupportFeed.js */}
      <div className="timeline">
        {/* {auth.currentUser && <ImageUpload user={auth.currentUser} />} */}
        {/* {posts.map(({ id, post }) => (
          <Post
            key={id}
            postId={id}
            user={auth.currentUser} // To pass current user to add current user when adding comment
            username={post.username}
            caption={post.caption}
            imageUrl={post.imageUrl}
          />
        ))} */}
      </div>
      {content}
    </div>
  );
}

function NavigationBar() {
  return(
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation >
        <BottomNavigationAction label="Home" icon={<HomeOutlined />} component={Link} to="/feed" />
        <BottomNavigationAction label="Search" icon={<SearchOutlined />} />
        <BottomNavigationAction label="Message" icon={<ChatBubbleOutline />} />
        <BottomNavigationAction label="User" icon={<PersonOutline />} component={Link} to="/profile" />
      </BottomNavigation>
    </Paper>
  )
}

export default App;
