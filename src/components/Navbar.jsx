import * as React from "react";
import { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Navbar.css";
import { useNavigate } from "react-router";
import claruswayLogo from "../assets/cw.jpeg";
import { logOut } from "../helpers/firebase";
import { AuthContext } from "../context/AuthContext";

const pages = ["<M.Emin/>"];

const Navbar = () => {
  // const currentUser = false;

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);

  return (
    <AppBar position="static" className="nav-container">
      <Container className="nav-container" maxWidth="xxl">
        <Toolbar disableGutters>
          <Typography
            onClick={() => {
              handleCloseUserMenu();
              navigate("/");
            }}
            variant="h6"
            noWrap
            component="div"
            sx={{
              width: 30,
              height: 30,
              cursor: "pointer",
              mr: 2,
              display: { xs: "flex" },
            }}
          >
            <img src={claruswayLogo} alt="claruswayLogo" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}></Box>
          {/* ortadaki yazi kismi */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                onClick={() => {
                  handleCloseUserMenu();
                  navigate("/");
                }}
                className="middleText"
                sx={{
                  my: 2,
                  color: "#F5DEB1",
                  display: "block",
                  m: "auto",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                }}
              >
                <span className="middleSpan">────</span>
                {page}
                <span className="middleSpan">Blog</span>
                <span className="middleSpan">────</span>
              </Button>
            ))}
          </Box>
          <span>
            {currentUser?.displayName
              ? currentUser?.displayName
              : currentUser?.email}
          </span>

          {/* profil iconu kismi */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Profile Settings">
              <AccountCircleIcon
                onClick={handleOpenUserMenu}
                sx={{ color: "white", width: 40, height: 40, p: 0 }}
              >
                <AccountCircleIcon />
              </AccountCircleIcon>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* Login register kismi burada  */}
              {currentUser ? (
                <div>
                  <MenuItem
                    onClick={() => {
                      navigate("/profile");
                      setAnchorElUser(null);
                    }}
                  >
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate("/newblog");
                      setAnchorElUser(null);
                    }}
                  >
                    <Typography textAlign="center">New</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      logOut();
                      navigate("/");
                      setAnchorElUser(null);
                    }}
                  >
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </div>
              ) : (
                <div>
                  <MenuItem
                    onClick={() => {
                      navigate("/login");
                      setAnchorElUser(null);
                    }}
                  >
                    <Typography textAlign="center">Login</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate("/register");
                      setAnchorElUser(null);
                    }}
                  >
                    <Typography textAlign="center">Register</Typography>
                  </MenuItem>
                </div>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
