import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import claruswaylogo from "../assets/cw.jpeg"
import { useNavigate } from 'react-router-dom';
import {logOut} from "../helpers/firebase"
import {useContext} from "react"
import {AuthContext} from "../context/AuthContext"



const page = ["<Halit/>"];
const Navbar = () => {
  const {currentUser} = useContext(AuthContext)
  // const [anchorElNav, setAnchorElNav] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(false);
  const navigate=useNavigate()
  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(false);
  // };
  const handleCloseUserMenu = () => {
    setAnchorElUser(false);
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'flex',  } }}
            // onClick={navigate("/")}
          
          >
           <img src={claruswaylogo} alt="clglogo" width="50px" height="50px"   />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          </Box>
           {/* ortadaki yazı kısmı */}
           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex'},justifyContent: "center", alignItems: "center" }}>
            <h1 >──── {page}Blog  ──── </h1>
          </Box>
                {/* Profil ikonu */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{color:"white", p: 0}}>
              {currentUser ? (
              <h5 className="mb-0 text-capitalize">
                {currentUser?.displayName}
              </h5>
            ): " "}
               <AccountCircleIcon fontSize='large'/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {currentUser ? (<div>
              <MenuItem onClick={() => {navigate("/profile"); setAnchorElUser(false)}}>
                <Typography textAlign="center">Profile</Typography>
              </MenuItem>
              <MenuItem onClick={() => {navigate("/newblog"); setAnchorElUser(false)}}>
                <Typography textAlign="center">New</Typography>
              </MenuItem>
              <MenuItem onClick={() => {navigate("/"); setAnchorElUser(false);logOut()}}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem> </div>) :(
              <div><MenuItem onClick={() => {navigate("/login");setAnchorElUser(false)}}>
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>
                <MenuItem onClick={() => {navigate("/register");setAnchorElUser(false)}}>
                  <Typography textAlign="center">Register</Typography>
                </MenuItem></div>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;