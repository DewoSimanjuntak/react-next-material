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
import { useForm, Controller } from "react-hook-form";
import FormMessage from "../../molecules/FormMessage/formMessage";
import Button from "@mui/material/Button";

const constants = require("../../../utils/constants");

export default function Login({
  OnLoginClicked,
  OnGuestClicked,
  OnCreateAccountClicked,
  OnForgotPasswordClicked,
}) {
  const [postMessage, setPostMessage] = React.useState("")
  const router = useRouter();

  const { handleSubmit, setError, control } = useForm({
    defaultValues: {
      email: '',
      password: ''
  }
  });

  const onSubmit = data => {
    console.log(data);
};

  // const [watchedEmail] = watch(["email"]); // you can also target specific fields by their names
  // const getRegisteredUsername = () => {
  //     return watchedEmail  || '(auto-populated email id)'
  // }

  // const onSubmit = ({ username, password }) => {
  //   OnLoginClicked({ username, password }, router, checkMessage)
  //   console.log({ username, password });
  // };

  // const checkMessage = (message) => {
  //   const messageStatus = postMessage.status === "failed"
  //   if (messageStatus) {
  //     setError("username", { type: 'custom', message: "Enter a valid Email" })
  //     setError("password", { type: 'custom', message: "This password is required" })
  //   }
  //   setPostMessage(message)
  //   console.log("this", postMessage, message)
  // }

  // const renderFromMessage = () => {
  //   console.log("sas", postMessage)
  //   return (
  //     postMessage.status === "failed" && <FormMessage error>{postMessage.message.description}</FormMessage>
  //   )
  // }

  return (
    <Box className={globalStyles.container}>
      <Typography variant={constants.H1} className={styles.title}>
        Provider Login
      </Typography>
      {/* {renderFromMessage()} */}
      <Stack spacing={2}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <Controller
              name="username"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value }, fieldState: { error } }) => {
                return (
                  <StyledInput
                    id="username"
                    label="Username or Email"
                    adorment={true}
                    size={constants.SMALL}
                    variant={constants.FILLED}
                    type={constants.INPUT_TEXT}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )
              }}
              rules={{
                required: 'Please Enter your Username or Email', pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i,
                    message: "Please Enter Valid Username or Email"
                }
            }}
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value }, fieldState: { error } }) => {
                return (
                  <StyledInput
                    id="password"
                    label="Password"
                    type={constants.INPUT_PASSWORD}
                    size={constants.SMALL}
                    variant={constants.OUTLINED}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )
              }}
              rules={{ required: "Please Enter your Password" }}
            />
            <Button
              //theme={constants.PATIENT}
             // mode={constants.SECONDARY}
              variant={constants.CONTAINED}
              type="submit"
              //size={constants.LARGE}
              //gradient={false}
            //  onClick={function () {
            //    OnLoginClicked({ username, password }, router);
            //  }}
            >
              Login
            </Button>
          </Stack>
        </form>
        <Divider variant={constants.MIDDLE} />
        <Grid container justifyContent={"center"}>
          <Link
            className={styles.linkStyle}
            onClick={function () {
              OnForgotPasswordClicked(router);
            }}
          >
            Forgot Password or Username
          </Link>
        </Grid>

        <Grid container justifyContent={constants.CENTER}>
          <Typography variant="caption">
            Not a Member?
          </Typography>
        <Link
          onClick={function () {
            OnCreateAccountClicked(router);
          }}
        >
          Create An Account
        </Link>

        </Grid>
      </Stack>
    </Box>
  );
}
