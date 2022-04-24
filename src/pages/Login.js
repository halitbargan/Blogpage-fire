import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BlogIcon from "../assets/blok.png";
import googleLogo from "../assets/google.png";
import "./LoginRegister.css"
import { useState } from 'react';
import {signIn,signUpProvider} from "../helpers/firebase";
import {useNavigate} from "react-router-dom"



const theme = createTheme();

 function Login() {
   const [email,setEmail] = useState();
   const [password,setPassword] = useState();
   const navigate= useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email,password,navigate);
    console.log(email,password);
    
  };
  const handleProviderLogin=()=>{
    signUpProvider(navigate)
  }

  return (
    <div className= "login-container">
    <ThemeProvider theme={theme} >
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          bgcolor: "white", 
            width:"150%",
            height:"150%",
            color: 'primary.main',
            borderRadius: 10,
            
          }}
        >
           <img className="blog-icon" src={BlogIcon} alt="blog_icon" />
         
          <Typography component="h1" variant="h5" sx={{fontFamily:"Roboto"}}>
          ────LOGIN────
          </Typography>
          
          <Box  noValidate  sx={{ mt: 3 }}>
          <form id= "register" onSubmit={handleSubmit}>
            <Grid container spacing={5}>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  onChange={(e)=>setEmail(e.target.value)}
                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 5, mb: 2 }}
              
                >
            
              LOGIN
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="text"
              sx={{ mt: 0, mb: 2 }}
              onClick={handleProviderLogin}
            >
              WITH <img className= "google-logo" src={googleLogo} alt="google-logo"/>
            </Button>
            </form>
          </Box>
          
        </Box>
        
      </Container>
    </ThemeProvider>
    </div>
  );
}

export default Login