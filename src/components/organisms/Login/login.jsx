import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { StyledInput } from "../../atoms/Input/input";
import { Divider, Typography } from "@mui/material";
import { styles } from "./style";
import { Api } from "../../../pages/api/api";
import { useRouter } from "next/router";
import Cookies from 'universal-cookie';

export default function Login() {
  const [username, setusername] = React.useState("");
  const [userpassword, setuserpassword] = React.useState("");
  const api = new Api();
  const router = useRouter();
  return (
    <Box sx={styles.container}>
      <Stack spacing={3}>
        <Typography variant="h1" sx={styles.title}>
          Patient Login
        </Typography>
        <StyledInput
          required
          id="email"
          label="Email or Phone"
          size="small"
          style={{ backgroundColor: "white" }}
          variant="filled"
          type={"text"}
        //  onChange={event => setuserpassword(event.target.value)}
        //  helperText={userpassword === " " ?  'Enter Your Registered email or phone number' : 'This field required (Enter email or phone number)' }
        //  error={userpassword === "" ? true  : false}
        />
        <StyledInput
          id="password"
          label="Password"
          type="password"
          size="small"
          style={{ backgroundColor: "white" }}
        //  variant="filled"
        //  onChange={event => setusername(event.target.value)}
        //  helperText={username === "" ?  'Enter Your Registered email or phone number' : 'This field required (Enter email or phone number)' }
        //  error={username === "" ? true  : false}
        />
        <Grid container justifyContent={"flex-end"}>
          <Link color={"#2095a9"} href="/forgot-password">
            Forgot Password
          </Link>
        </Grid>
        <Button
          variant="contained"
          onClick={function () {
            api.client
              .post("https://patientlogin.mocklab.io/user/login", {
                username: "user1",
                password: "password",
              })
              .then(function (response) {
                console.log(response)
                if (response && response.status === 200) {
                  console.log("success");
                }
              })
              .catch(function () {
                console.log("failed");
              })
              .finally(function () {
                const cookies = new Cookies();
                cookies.set('authorized', 'true', { path: '/' });
                router.push("/");
              })
          }}
          sx={styles.containedButton}
        >
          Login
        </Button>
        <Button variant="outlined" sx={styles.outlinedButton}>
          Continue as a guest
        </Button>
        <Divider variant="middle" />
        <Grid container justifyContent={"center"}>
          <Typography variant="caption">Don't have an account?</Typography>
        </Grid>

        <Button
          variant="outlined"
          sx={styles.outlinedButton}
          href="/auth/create-account"
        >
          Create Account
        </Button>
      </Stack>
    </Box>
  );
}
