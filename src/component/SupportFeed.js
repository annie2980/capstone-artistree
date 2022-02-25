import React from 'react';
import Post from './Post';

function SupportFeed(props) {
  const {auth, posts} = props;

  return (
    <div>
      This is the Support Feed
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
      <br />
      <div className="flex-container">
        <section className="col c1">
        <div className="card-container">
          <div className="card-item" id="post2">
            <img src="../img/sewing.png" alt="Help setting up sewing machine" />
          </div>
        </div>
        </section>
    </div>
    <br />
    </div>
  )
}

export default SupportFeed
