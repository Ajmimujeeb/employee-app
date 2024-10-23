import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';


const Nav = () => {
  return ( <div>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed" sx={{backgroundColor: '#A5B68D'}}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
         
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1,color:'#181C14' }}>
          Employee APP
        </Typography>
        <Link to={'/'}><Button sx={{ color: '#181C14', border: 1}}>Home</Button></Link>
        <Link to={'/add'}><Button sx={{ color: '#181C14', border: 1, margin: 2}}>ADD</Button></Link>
    
      </Toolbar>
    </AppBar>
  </Box>  <br /><br />
  </div>
  )
}

export default Nav