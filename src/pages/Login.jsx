import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import BlogIcon from "../assets/blok.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import googleLogo from "../assets/google.png";
import { useState } from "react";
import { useNavigate } from "react-router";
import { signIn, signUpProvider } from "../helpers/firebase";
import { Typography } from "@mui/material";

export default function SimpleContainer() {
  const style = {
    backgroundImage: `url("https://picsum.photos/1200/900")`,
    // marginTop: "150px",
    boxSizing: "border-box",
    backgroundPosition: "center",
    backgroundImageRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    padding: "1rem",
  };

  const navigate = useNavigate();
  const handleProviderLogIn = () => {
    signUpProvider(navigate);
  };
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
    console.log(email, password);
  };
  return (
    <div style={style}>
      <Container
        component="main"
        maxWidth="xs"
        style={{
          borderRadius: "10px",
          boxShadow: "rgba(0, 0, 0, 0.75) 10px 10px 5px 0px",
          backgroundColor: "#fff",
          position: "relative",
          marginTop: "4rem",
        }}
      >
        {/* <CssBaseline /> */}
        <Box
          sx={{
            marginTop: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={BlogIcon}
            alt="login_blog"
            style={{
              width: "200px",
              height: "200px",
              margin: "1rem",
              padding: "0.5rem",
              backgroundColor: "#046582",
              borderRadius: "50%",
            }}
          />

          <Typography
            sx={{ color: "#046582", fontFamily: "Girassol" }}
            component="h1"
            variant="h5"
          >
            ── Login ──
          </Typography>
          <Box noValidate sx={{ mt: 1 }}>
            <form id="register" action="" onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ backgroundColor: "#046582" }}
              >
                Login
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, color: "black", backgroundColor: "white" }}
                onClick={handleProviderLogIn}
              >
                WITH
                <img
                  src={googleLogo}
                  alt="googleLogo"
                  style={{ width: "6rem", height: "2rem", marginLeft: "1rem" }}
                />
              </Button>
            </form>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
