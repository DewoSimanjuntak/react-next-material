import { ThemeProvider, styled } from '@mui/material/styles';
import React, { useEffect } from "react";
import "./input.css";

// import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { colors, primaryTheme, secondaryTheme } from "../../../styles/theme";

export const CustomInput = styled(({...props}) => {
  const [values, setValues] = React.useState({
    value: '',
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
  },[values.value])

  return (
    <>
      {props.type === 'password'
      ? <>
          <FormControl sx={{ m: 1, width: '25ch', backgroundColor: 'white', borderRadius: '4px', borderColor: '#B5B5B5' }}
            error={props.error}>
            <InputLabel htmlFor="outlined-adornment-password" sx={{backgroundColor: 'white', paddingLeft:1, paddingRight:1, borderRadius: 1}}>Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.value}
              onChange={handleChange('value')}
              label={props.label}
              placeholder={props.placeholder}
              variant={props.variant}
              endAdornment={props.withIcon ? 
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
                : ''
              }
            />
            <FormHelperText>{props.helperText}</FormHelperText>
          </FormControl>
        </>
      : props.type === 'dob'
        ? <>
            <div>Input Date of birth (under construction)</div>
          </>
        : <>
            <TextField
              sx={{ m: 1, width: '25ch', backgroundColor: 'white', borderRadius: '4px', borderColor: '#B5B5B5' }}
              type={props.type}
              error={props.error}
              label={props.label}
              placeholder={props.placeholder}
              variant={props.variant}
              helperText={props.helperText} />
          </>
      }
      
    </>
  )
})
(
  ({ theme }) => `
  color: white;
  `,
)

export const StyledInput = ({
  type,
  variant = 'outlined',
  helperText = '',
  placeholder = '',
  label = '',
  withIcon = true,
  ...props
}) => {
  return (
    <ThemeProvider theme={primaryTheme}>
      <CustomInput type={type} variant={variant} label={label} placeholder={placeholder} helperText={helperText} withIcon={withIcon} {...props}
        className={[
          'custom-input',
          ].join(' ')}>
      </CustomInput>
    </ThemeProvider>
  );
}