import React from 'react';
import Post from './Post';
import { NavLink } from 'react-router-dom';

function SupportFeed(props) {
  const {auth, posts} = props;

  return (
    <div>
      {/* This is the Support Feed */}
      <nav className="navbar headerNav fixed-top">
        <NavLink to='/Community' className="nav-link" activeClassName={"activeLink"}>Community</NavLink>
        <NavLink exact to='/SupportFeed' className="nav-link" activeClassName={"activeLink"}>Support</NavLink>
      </nav>
      <hr className="breakLine"/>
      {posts.map(({ id, post }) => (
        <Post
          key={id}
          postId={id}
          user={auth.currentUser} // To pass current user to add current user when adding comment
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  )
}

export default SupportFeed
