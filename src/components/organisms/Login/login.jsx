import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Divider, Typography } from "@mui/material";
import { styles } from "./style"
export default function Login() {
  return (
    <Box sx={styles.container}>
      <Stack spacing={3}>
        <Typography variant="h1" sx={styles.title}>Patient Login</Typography>
        <TextField
          id="email"
          label="Email or Phone"
          size="small"
          style={{backgroundColor : 'white'}}
          variant="filled"
          type={"text"}
          helperText="Enter your registered email or phone"
        />
        <TextField
         id="password" label="Password" type="password"
          size="small"
          style={{backgroundColor : 'white'}}
          variant="filled"
        />
        <Grid container 
          justifyContent={"flex-end"}
        >
         <Link href="/forgot-password">Forgot Password</Link>
        </Grid>
        <Button
          variant="contained"
          sx={styles.containedButton}>
          Login
        </Button>
        <Button
          variant="outlined"
          sx={styles.outlinedButton}>
          Continue as a guest
        </Button>
        <Divider variant="middle" />
        <Grid container 
          justifyContent={"center"}
        >
        <Typography variant="caption">Don't have an account?</Typography>
        </Grid>
        
        <Button
          variant="outlined"
          sx={styles.outlinedButton}>
          Create Account 
        </Button>
      </Stack>
    </Box>
  );
}
