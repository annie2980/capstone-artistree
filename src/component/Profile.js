import React from 'react';
import ImageUpload from './imageUpload/ImageUpload';

function Profile(props) {
  const {auth} = props;

  return (
    <div>
      This is where the Profile will be
      {auth.currentUser && <ImageUpload user={auth.currentUser} />}
      {}
    </div>
  )
}

export default Profile