import { ThemeProvider, styled, alpha } from "@mui/material/styles";
import React, { useEffect } from "react";
// import "./input.css";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

import { colors, primaryTheme, secondaryTheme } from "../../../styles/theme";

export const CustomFormControl = styled((props) => <FormControl {...props} />)(
  ({ theme }) => ({
    "&.MuiFormControl-root": {
      border: "none",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
      "&:focus": {
        backgroundColor: "transparent",
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: "transparent",
      },
    },
  })
);

export const CustomPasswordInput = styled((props) => <TextField InputProps={{
  disableUnderline: true,
  endAdornment: <InputAdornment position="end">
    <IconButton
      aria-label="toggle password visibility"
      onClick={props.clickIcon}
      onMouseDown={props.mouseDown}
      edge="end"
    >
      {props.showPassword ? <VisibilityOff /> : <Visibility />}
    </IconButton>
  </InputAdornment>,
}} {...props} />)(
  ({ theme }) => ({
    "& .MuiFilledInput-root": {
      border: "1px solid #e2e2e1",
      overflow: "hidden",
      borderRadius: 4,
      height:52,
      backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
      "&:hover": {
        backgroundColor: "transparent",
      },
      "&.Mui-error": {
        borderColor: "#FF0000",
        backgroundColor: "#FF000010",
      },
      "&.Mui-focused": {
        backgroundColor: "transparent",
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main,
      },
    },
  })
);

export const RedditTextField = styled((props) => (
  <TextField InputProps={{
    endAdornment: props.adorment ?
      <InputAdornment position="end"><IconButton
        aria-label="toggle password visibility" edge="end">
        <PersonOutlinedIcon sx={{ fontSize: "20px" }} /></IconButton>
      </InputAdornment> : null,
  }}
    {...props} />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 4,
    height:52,
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-error": {
      borderColor: "#FF0000",
      backgroundColor: "#FF000010",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export const CustomInput = styled(({ ...props }) => {
  const [values, setValues] = React.useState({
    value: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    // should send to parent page.
  }, [values.value]);

  return (
    <>
      {props.type === "password" ? (
        <>
          <CustomFormControl variant="filled">
            {/* <InputLabel htmlFor="filled-adornment-password" style={props.adorment ? { top: -16 } : null} error={props.error}>
              {props.label}
            </InputLabel> */}
            <CustomPasswordInput
              error={(!Boolean(values.value) && props.error)}
              variant="filled"
              id={props.id}
              type={values.showPassword ? "text" : "password"}
              clickIcon={handleClickShowPassword}
              mouseDown={handleMouseDownPassword}
              onChange={props.onChange}
              placeholder={props.placeholder}
              label={props.label}
              adorment={props.adorment}
              helperText={props.helperText}
            />
          </CustomFormControl>
        </>
      ) : props.type === "dob" ? (
        <>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label={props.label}
              onChange={() => { }}
              renderInput={(params) => (
                <RedditTextField
                  variant="filled"
                  style={{ marginTop: 11 }}
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "4px",
                    borderColor: "#B5B5B5",
                  }}
                  {...params}
                />
              )}
            />
          </LocalizationProvider>
        </>
      ) : (
        <>
          <RedditTextField
            variant="filled"
            style={{ marginTop: 11 }}
            sx={{
              backgroundColor: "white",
              borderRadius: "4px",
              borderColor: "#B5B5B5",
            }}
            {...props}
          />
        </>
      )}
    </>
  );
})(
  ({ theme }) => `
  color: white;
  `
);

export const StyledInput = ({
  type,
  variant = "outlined",
  helperText = "",
  placeholder = "",
  label = "",
  withIcon = "true",
  adorment = null,
  ...props
}) => {
  return (
    <ThemeProvider theme={primaryTheme}>
      <CustomInput
        type={type}
        variant={variant}
        label={label}
        placeholder={placeholder}
        helperText={helperText}
        withicon={withIcon}
        {...props}
        className={["custom-input"].join(" ")}
        adorment={adorment}
      ></CustomInput>
    </ThemeProvider>
  );
};

export default StyledInput