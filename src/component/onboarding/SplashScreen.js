import React, { useState } from 'react';
import { Container, Box } from '@mui/material';
import Auth from '../auth/Auth';

function SplashScreen() {
  // const [screen, setScreen] = useState(undefined)

  // WILL DEBUG LATER
  // const handleClick = () => {
  //   setScreen(
  //     <Auth />
  //   )
  // }

  // setScreen(
  //   <Box className='splash-screen' onClick={handleClick} >
  //     <img src="img/splash-screen.png" />
  //   </Box>
  // )

  return (
    <Box className='splash-screen' >
      <img src="img/splash-screen.png" />
    </Box>
    // <div>
    //   {screen}
    // </div>
  )
}

export default SplashScreen;