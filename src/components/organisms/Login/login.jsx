import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Divider, Typography } from "@mui/material";
import { styles } from "./style"

export default function Login() {
  return (
    <Box sx={styles.container}>
      <Stack spacing={2}>
        <Typography variant="h1" sx={styles.title}>Patient Login</Typography>
        <TextField id="email" label="Email or Phone" />
        <TextField id="password" label="Password" type="password" />
        <Link href="/forgot-password">Forgot Password</Link>
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
        <Typography variant="caption">Don't have an account?</Typography>
        <Button
          href="/register"
          variant="outlined"
          sx={styles.outlinedButton}>
          Create Account
        </Button>
      </Stack>
    </Box>
  );
}
