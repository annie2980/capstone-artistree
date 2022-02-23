import React from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Image } from 'react-bootstrap';
import { AppBar, Toolbar, IconButton, BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import { HomeOutlined, SearchOutlined, ChatBubbleOutline, PersonOutline } from '@mui/icons-material'
import Auth from './component/auth/Auth';

function App() {
  return (
    <div>
      <Auth/>
      <NavigationBar />
    </div>
  );
}

function NavigationBar() {
  return(
    
    // <AppBar position="fixed" color="background" sx={{ top: 'auto', bottom: 0 }}>
    //   <Toolbar>
    //     <IconButton>
    //       <HomeOutlined />
    //     </IconButton>
    //     <IconButton>
    //       <SearchOutlined />
    //     </IconButton>
    //     <IconButton>
    //       <ChatBubbleOutline />
    //     </IconButton>
    //     <IconButton>
    //       <PersonOutline />
    //     </IconButton>
    //   </Toolbar>
    // </AppBar>
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation >
        <BottomNavigationAction label="Home" icon={<HomeOutlined />} />
        <BottomNavigationAction label="Search" icon={<SearchOutlined />} />
        <BottomNavigationAction label="Message" icon={<ChatBubbleOutline />} />
        <BottomNavigationAction label="User" icon={<PersonOutline />} />
      </BottomNavigation>
    </Paper>
  )
}

export default App;
