import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Devider from '@mui/material/Divider'
import { Grid} from "@mui/material";
import Typography from '@mui/material/Typography';
import {useState} from 'react'
import {Error} from '../../molecules/FormMessage/formMessage.stories'
export default function Login(props) {
  const {isUsernameFill, isPasswordFill, isUsernameRight, isPasswordRight,countLogin} = props
  const limitMessage = "Account Locked Too many login attempts. you account is looked. please contact customer supper to unlock your account`";
  const accountMessage = "Invalid username or password"
  const messageResulst = ""
  const conclusionMessage = isUsernameRight || isPasswordRight ?  accountMessage : '';
  React.useEffect(
    ()=>{
    },[]
  )
  return (
    <Box
      sx={{
        width: 300,
        padding: "20px 10px 15px",
        backgroundColor: "white",
        alignSelf: "center",
        margin: "auto",
      }}
    >
      {
        countLogin>5 ?  <Error content={limitMessage}/> : ""
      }
     
      <Typography variant="h5" gutter Bottom component="div" margin={2}>
        Patient Login
      </Typography>
      <Stack spacing={2}>
        <TextField id="email" label="Email or Phone" 
           error={isUsernameFill}
           helperText={isUsernameFill ? "This field is required" : " "}
        />
        <TextField id="password" 
        label="Password" 
        type="password" 
        error={isPasswordFill}
        helperText={isPasswordFill  ? "This field is required" : " "}
        />
        <Grid
          container
          spacing={2}
          columns={2}
          justifyContent={'flex-end'}
        >
          <Grid>
          </Grid>
          <Grid item>  
            <Link href="/forgot-password" sx={{color : '#009688'}}>Forgot Password?</Link>
        </Grid>
        </Grid>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#009688",
            borderRadius: 46,
            color: "white",
            "&:hover": {
              backgroundColor: "#00695f",
            },
          }}
        >
          Login
        </Button>
        <Button variant="outlined"  sx={
            { borderColor : '#009688', color : '#009688', '&:hover': {
              borderColor: "#00695f",
            },}
          }>Continue as a guest</Button>
       
        <Devider margin={3}/>
        <Grid container justifyContent={'center'}>        <Link href="#" sx={{color : '#009688'}}>Don't have an account?</Link>
</Grid>
        <Button variant="outlined" 
          sx={
            { borderColor : '#009688', color : '#009688', '&:hover': {
          borderColor: "#00695f",
            },}
          }> Create Account</Button>
      </Stack>
    </Box>
  );
}
