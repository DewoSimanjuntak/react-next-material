import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button } from "@mui/material";
import { LabelWithIcon } from "../../atoms/LabelWithIcon/labelWithIcon";

const headingStyles = {
  marginBottom: 30,
};

const cardContentStyle = {
  display: "flex",
  flexDirection: "column",
};

const buttonStyle = {
  marginTop: 2,
  backgroundColor: "#3EAFBD",
  borderRadius: "48pt",
};

const setPasswordComponent = () => {
  const [values, setValues] = useState({
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = (passwordData) => {
    setValues({
      ...values,
      ...passwordData,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Card sx={{ minWidth: 275, margin: 10 }}>
      <CardContent style={cardContentStyle}>
        <h1 style={headingStyles}>Set Password</h1>
        <FormControl sx={{ m: 1 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => {
                    handleClickShowPassword({
                      showPassword: !values.showPassword,
                    });
                  }}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <FormControl sx={{ m: 1 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-confirm-password">
            Confirm Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-confirm-password"
            type={values.showConfirmPassword ? "text" : "password"}
            value={values.confirmPassword}
            onChange={handleChange("confirmPassword")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => {
                    handleClickShowPassword({
                      showConfirmPassword: !values.showConfirmPassword,
                    });
                  }}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showConfirmPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
          />
        </FormControl>
        <Button variant="contained" sx={buttonStyle}>
          Reset Password
        </Button>
        <LabelWithIcon label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
        <LabelWithIcon
          error={true}
          label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        />
        <LabelWithIcon label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
        <LabelWithIcon label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
      </CardContent>
    </Card>
  );
};

export default setPasswordComponent;