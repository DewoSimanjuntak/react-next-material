import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { StyledInput } from "../../atoms/Input/input";
import { Divider, Typography } from "@mui/material";
import styles from "./Style.module.scss";
import globalStyles from "../../../styles/Global.module.scss";
import { useRouter } from "next/router";
import { StyledButton } from "../../atoms/Button/button";

const constants = require('../../../utils/constants');

export default function Login({
  OnLoginClicked,
  OnGuestClicked,
  OnCreateAccountClicked,
  OnForgotPasswordClicked,
}) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();
  return (
    <Box className={globalStyles.container}>
      <Stack spacing={3}>
        <Typography variant={constants.H1} className={styles.title}>
          Patient Login
        </Typography>
        <StyledInput
          id="username"
          label="Username"
          className={styles.inputStyle}
          size={constants.SMALL}
          variant={constants.FILLED}
          type={constants.INPUT_TEXT}
          error={false}
          helperText={"Enter your registered email or phone number"}
          onChange={(event) => setUsername(event.target.value)}
          //  helperText={userpassword === " " ?  'Enter Your Registered email or phone number' : 'This field required (Enter email or phone number)' }
          //  error={userpassword === "" ? true  : false}
        />
        <StyledInput
          id="password"
          label="Password"
          className ={styles.inputStyle}
          type={constants.INPUT_PASSWORD}
          size={constants.SMALL}
          //  variant="filled"
          onChange={(event) => setPassword(event.target.value)}
          //  helperText={username === "" ?  'Enter Your Registered email or phone number' : 'This field required (Enter email or phone number)' }
          //  error={username === "" ? true  : false}
        />
        <Grid container justifyContent={constants.FLEX_END}>
          <Link
            className={styles.linkStyle}
            onClick={function () {
              OnForgotPasswordClicked(router);
            }}
          >
            Forgot Password
          </Link>
        </Grid>
        <StyledButton
          theme={constants.PATIENT}
          type={constants.PRIMARY}
          size={constants.LARGE}
          gradient={false}
          onClick={function () {
            OnLoginClicked({ username, password }, router);
          }}
        >
          Login
        </StyledButton>
        <StyledButton
          theme={constants.PATIENT}
          type={constants.SECONDARY}
          size={constants.LARGE}
          gradient={false}
          onClick={OnGuestClicked}
        >
          Continue as a guest
        </StyledButton>
        <Divider variant={constants.MIDDLE} />
        <Grid container justifyContent={constants.CENTER}>
          <Typography variant="bodyRegular">Don&apos;t have an account?</Typography>
        </Grid>

        <StyledButton
          theme={constants.PATIENT}
          type={constants.SECONDARY}
          size={constants.LARGE}
          gradient={false}
          onClick={function () {
            OnCreateAccountClicked(router);
          }}
        >
          Create Account
        </StyledButton>
      </Stack>
    </Box>
  );
}
