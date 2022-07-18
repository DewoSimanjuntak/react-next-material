import React, {useState} from "react"
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from "@mui/material";
import {LabelWithIcon} from "../../components/atoms/LabelWithIcon/labelWithIcon"
import { styled, alpha } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import FilledInput from '@mui/material/FilledInput';
import {StyledInput} from "../atoms/Input/input"

const headingStyles = {
    marginBottom: 30,
}

const cardContentStyle = {
    display: 'flex',
    flexDirection: 'column',
}

const buttonStyle = {
    marginTop: 2,
    backgroundColor: "#3EAFBD",
    borderRadius:'48pt'
}

export const CustomFormControl= styled((props) => (
    <FormControl {...props} />
  ))(({ theme }) => ({
    '&.MuiFormControl-root': {
      border: '1px solid #e2e2e1',
      overflow: 'hidden',
      borderRadius: 4,
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
    '&:focus':{
        backgroundColor: 'transparent',
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: 'transparent',
    },
    },
}));

export const CustomFilledInput= styled((props) => (
    <FilledInput {...props} />
  ))(({ theme }) => ({
    '&.MuiFilledInput-root': {
        backgroundColor: 'transparent',
        overflow: 'hidden',
    '&:hover': {
        border:0,
        backgroundColor: 'transparent',
    },
    '&:not(.Mui-disabled):before':{
        border:0,
    },
    '&:before': {
        border:0,
    },
    '&:after': {
        border:0,
    },
    '&.Mui-error':{
        borderColor: "#FF0000",
        backgroundColor:  "#FF000010",
    },
    '&.Mui-focused':{
        backgroundColor: 'transparent',
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: 'transparent',
    },
    },
}));

const setPasswordComponent = () => {
    const [values, setValues] = useState({
        password: '',
        confirmPassword: '',
        showPassword: false,
        showConfirmPassword: false
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    
    const handleClickShowPassword = (passwordData) => {
        setValues({
            ...values,
            ...passwordData
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    
    
    return (
        <Card sx={{ minWidth: 275, margin:10 }}>
            <CardContent style={cardContentStyle}>
                <h1 style={headingStyles}>Set Password</h1>
                    <FormControl sx={{ m: 1 }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={()=>{handleClickShowPassword({showPassword: !values.showPassword})}}
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
                    <CustomFormControl sx={{ m: 1 }}  variant="filled">
                    <InputLabel htmlFor="filled-adornment-password">Confirm Password</InputLabel>
                        <CustomFilledInput
                            variant="filled"
                            id="outlined-adornment-confirm-password"
                            type={values.showConfirmPassword ? 'text' : 'password'}
                            value={values.confirmPassword}
                            onChange={handleChange('confirmPassword')}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={()=>{handleClickShowPassword({showConfirmPassword: !values.showConfirmPassword})}}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {values.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label="Confirm Password"
                    />
                    </CustomFormControl>
                    <Button variant="contained" sx={buttonStyle}>Reset Password</Button>
                    <LabelWithIcon label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"/>
                    <LabelWithIcon error={true} label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"/>
                    <LabelWithIcon label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"/>
                    <LabelWithIcon label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"/>
                </CardContent>
        </Card>
      
    )
  }


export default setPasswordComponent