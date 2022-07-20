import * as React from "react";
import Box from "@mui/material/Box";
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

import { StyledButton } from "../../atoms/Button/button";

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
          id="username"
          label="Username"
          size="small"
          style={{ backgroundColor: "white" }}
          variant="filled"
          type={"text"}
          error={false}
          helperText={"Enter your registered email or phone number"}
          onChange={event => setusername(event.target.value)}
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
          onChange={event => setuserpassword(event.target.value)}
        //  helperText={username === "" ?  'Enter Your Registered email or phone number' : 'This field required (Enter email or phone number)' }
        //  error={username === "" ? true  : false}
        />
        <Grid container justifyContent={"flex-end"}>
          <Link color={"#2095a9"} href="/forgot-password">
            Forgot Password
          </Link>
        </Grid>
        <StyledButton
          primary={true}
          size="large"
          gradient={false}
          onClick={function () {
            console.log(username,userpassword)
            api.client
              .post("https://patientlogin.mocklab.io/user/login", {
                username: "user1",
                password: "password1",
              })
              .then(function (response) {
                console.log(response)
                if (response && response.status === 200) {
                  const cookies = new Cookies();
                  cookies.set('authorized', 'true', { path: '/' });
                  router.push("/");
                  console.log("success");
                }
              })
              .catch(function () {
                console.log("failed");
              })
          }}
        >
          Login
        </StyledButton>
        <StyledButton
          primary={false}
          size="large"
          gradient={false}
        >
          Continue as a guest
        </StyledButton>
        <Divider variant="middle" />
        <Grid container justifyContent={"center"}>
          <Typography variant="caption">Don't have an account?</Typography>
        </Grid>

        <StyledButton
          primary={false}
          size="large"
          gradient={false}
          href="/auth/create-account"
        >
          Create Account
        </StyledButton>
      </Stack>
    </Box>
  );
}
