import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { LabelWithIcon } from "../../atoms/LabelWithIcon/labelWithIcon";
import Box from "@mui/material/Box"
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { StyledInput } from "../../atoms/Input/input";
import { Alert, AlertTitle } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

export const styles={
    buttonStyles:{
        backgroundColor:"#1a2d5c",
        borderRadius:"30px",
        "&:hover": {
            backgroundColor: "#1c8696",
        },
    },

    linkStyles:{
        textAlign:"center",
        cursor:"pointer"
    },

    boxStyles:{
        minWidth:"300px", backgroundColor:"white", padding: "2% 2%",
        borderRadius:"5px"
    },

    alertMsg:{
        backgroundColor:"rgb(18 192 18)",
        color:"#FFF"
    },

    alertMsgIcon:{
        color:"#FFF"
    }

}

export const CreateNewPassword=()=>{
    const [showPassword,setShowPassword]=useState(false);
    const [showConfirmPassword,setShowConfirmPassword]=useState(false);
    const [newPassword,setNewPassword]=React.useState('');
    const [confirmNewPassword,setConfirmNewPassword]=useState('');
    const [errorMessage,setErrorMessage]=useState('');
    const [newPasswordError,setNewPasswordError]=useState(false);
    const [confirmNewPasswordError,setConfirmNewPasswordError]=useState(false);
    const [alertInfo,setAlertInfo]=useState({
            type:"",
            msg:"",
            showAlert:false
        }
    )

    const {handleSubmit,control}=useForm();

    const handleClickShowPassword=()=>{
        setShowPassword(showPassword ? false : true);
    }

    const handleClickShowConfirmPassword=()=>{
        setShowConfirmPassword(showConfirmPassword ? false : true);
     }

    const validateMandatoryFields=data=>{
        console.log(data);
    }

    return(
        <Box sx={styles.boxStyles} >
            <Stack spacing={3}>
            <Typography variant="h6">Create New Password</Typography>
             {alertInfo.showAlert ? <Alert severity={alertInfo.type}>
                <AlertTitle>{alertInfo.title}</AlertTitle>
                 <strong>{alertInfo.msg}</strong>
                 {alertInfo.type==="success" ? <Link href="/login">Login</Link> : ""}
            </Alert> : ""}
           

        {/* <StyledInput 
            id="newPassword"
            label="New Password*" 
            type={"passwordWithHelperText"}
            error={newPasswordError}
            helperText={newPasswordError ? "This is required Field" : ""}
            value={newPassword}
            onChange={e=>setNewPassword(e.target.value)}
        /> */}
        <form onSubmit={handleSubmit(validateMandatoryFields)}>
            <Stack spacing={1.5}>
            <Controller 
                name="newPassword"
                control={control}
                defaultValue=""
                rules={{required: "This is requried field",
                minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters"
                  },
                  maxLength: {
                    value: 20,
                    message: "Password should not exceed 20 characters"
                  }}}
                render={({field: { onChange, value}, fieldState: {error}})=>{
                    return(
                        <TextField 
                            id="newPassword"
                            label="New Password*"
                            type={showPassword ? "text" : "password"}
                            size="small"
                            error={!!error}
                            helperText={error ? error.message : null}
                            value={value}
                            onChange={onChange}
                            InputProps={{
                                endAdornment: 
                                    <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {!showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton> 
                                </InputAdornment> 
                                }}
                            />
                    )
                }}
            />
                
                <Controller 
                name="confirmNewPassword"
                control={control}
                defaultValue=""
                rules={{required: "This is requried field"}}
                render={({field: { onChange, value}, fieldState: {error}})=>{
                    return(
                        <TextField 
                            id="confirmPassword"
                            label="Confirm Password*"
                            type={showConfirmPassword ? "text" : "password"}
                            size="small"
                            error={!!error}
                            helperText={error ? error.message : null}
                            value={value}
                            onChange={onChange}
                            InputProps={{
                                endAdornment: 
                                    <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowConfirmPassword}
                                        edge="end"
                                    >
                                        {!showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton> 
                                </InputAdornment> 
                                }}
                            />
                    )
                }}
            />

            <LabelWithIcon label="Password length should range from 8 to 20 characters" />
            <LabelWithIcon label="Password length should range from 8 to 20 characters" />
            <LabelWithIcon label="Password length should range from 8 to 20 characters" />
            <LabelWithIcon error= "true" label="Password length should range from 8 to 20 characters" />
            <LabelWithIcon label="Password length should range from 8 to 20 characters" />
            <LabelWithIcon label="Password length should range from 8 to 20 characters" />

            <Button type="submit" sx={styles.buttonStyles} variant="contained">Submit</Button>
            <Link sx={styles.linkStyles} href="/login">Back To Login</Link>
            </Stack>
            </form>
            </Stack>
        </Box>
    )
}
// <div> <Link color={"#2095a9"} onClick={handleClickOpen}>Forgot Username</Link>or<Link color={"#2095a9"} href="/create-new-password">Password</Link></div> 
export default CreateNewPassword;