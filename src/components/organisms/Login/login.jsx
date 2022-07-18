import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Devider from '@mui/material/Divider'
import Paper from '@mui/material/Paper';
import { Grid} from "@mui/material";
import Typography from '@mui/material/Typography';
export default function Login() {
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
      <Typography variant="h4" gutter Bottom component="div" margin={2}>
        Patient Login
      </Typography>
      <Stack spacing={2}>
        <TextField id="email" label="Email or Phone" />
        <TextField id="password" label="Password" type="password" />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Keep me signed in on this device"
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#E5EDF8P",
            borderRadius: 46,
            color: "white",
            "&:hover": {
              backgroundColor: "#E5EDF8P",
            },
          }}
        >
          Login
        </Button>
        <Button variant="outlined">Continue as a guest</Button>
        <Grid
          container
          spacing={2}
          columns={2}
          justifyContent={'flex-end'}
        >
          <Grid>
          </Grid>
          <Grid item>  
            <Link href="/forgot-password">Forgot Username or Password</Link>
        </Grid>
        </Grid>
        <Devider margin={3}/>
        <Link href="/forgot-password">Don't have an account?</Link>
        <Button variant="outlined">Create Account</Button>
      </Stack>
    </Box>
  );
}
