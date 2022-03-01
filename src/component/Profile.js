import React, { useEffect, useState } from 'react';
import ImageUpload from './imageUpload/ImageUpload';
import { db, auth, logoutUser } from '../database/firebase'
import Avatar from "@material-ui/core/Avatar";


function Profile(props) {
  const [profile, setProfile] = useState(null);
  let id = auth.currentUser.uid


  useEffect(() => {

    var users = db.collection('users').where('uid', '==', id);
    users.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setProfile(doc.data())
      });
    });
  }, []);

  console.log(profile)

  var interests;
  if (profile != null) {
    interests = profile.arr.map((item, i) => {
      return(
        <option key={i} value={item}>
        {item}
        </option>
      )
    })
  } else {
    interests = ""
  }



  return (
    <div>
      This is where the Profile will be
      {auth.currentUser && <ImageUpload user={auth.currentUser} />}
      <Avatar
        className="post__avatar"
        alt={auth.currentUser.displayName}
        src="/static/images/avatar/1.jpg" />
      <h3>{auth.currentUser.displayName}</h3>
      <h3>{auth.currentUser.email}</h3>
      <div>
      </div>
      {interests}

    </div>

  )
}



export default Profile;

