import React, { useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { LabelWithIcon } from "../../atoms/LabelWithIcon/labelWithIcon";
import Box from "@mui/material/Box"
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { StyledInput } from "../../atoms/Input/input";
import { Alert, AlertTitle } from "@mui/material";
import {useForm, Controller } from "react-hook-form";

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

export const atleastOneUpperAlphabet = new RegExp('(?=.*?[A-Z])');
export const atleastOneLowerAlphabet = new RegExp('(?=.*?[a-z])');
export const atleastOneSplChar = new RegExp('[\\[\\]?*+#?!@$%^&*|{}\\\\()]');
export const atleastOneNum = new RegExp('(?=.*?[0-9])');

export const CreateNewPassword=()=>{
    const [showPassword,setShowPassword]=useState(false);
    const [showConfirmPassword,setShowConfirmPassword]=useState(false);
    const [pwd3of4, setPwd3of4]=useState(true);
    const [pwdUpperAlphabet, setPwdUpperAlphabet]=useState(true);
    const [pwdLowerAlphabet, setPwdLowerAlphabet]=useState(true);
    const [pwdLength,setPwdLength]=useState(true);
    const [pwdSplChar,setPwdSplChar]=useState(true);
    const [pwdNumeric, setPwdNumerice]=useState(true);
    const [pwdUserName,setPwdUserName]=useState(true);
    const [pwdCurrentPassword, setPwdCurrentPassword]=useState(true);


    const [alertInfo,setAlertInfo]=useState({
            type:"",
            msg:"",
            showAlert:false
        }
    )

    const {handleSubmit,control, register, watch}=useForm();
    const password = useRef({});
    password.current = watch("newPassword", "");

    const handleClickShowPassword=()=>{
        setShowPassword(showPassword ? false : true);
    }

    const handleClickShowConfirmPassword=()=>{
        setShowConfirmPassword(showConfirmPassword ? false : true);
    }
  
    const is3of4 = (pass) => {
      let passes = 0;
      if (atleastOneLowerAlphabet.test(pass)) {
        ++passes;
      }
      if (atleastOneUpperAlphabet.test(pass)) {
        ++passes;
      }
      if (atleastOneSplChar.test(pass)) {
        ++passes;
      }
      if (atleastOneNum.test(pass)) {
        ++passes;
      }
      
     
      return passes >= 3 ? true : false;
    };

    const validateMandatoryFields=data=>{
        console.log(data);

        setPwd3of4(is3of4(data['newPassword']));
        setPwdUpperAlphabet(atleastOneUpperAlphabet(data['newPassword']));
        setPwdLowerAlphabet(atleastOneLowerAlphabet(data['newPassword']));
        setPwdLength(!(data['newPassword'].length >=8 && data['newPassword'].length <=20));
        setPwdNumerice(!atleastOneNum.test(data['newPassword']));
        setPwdSplChar(!atleastOneSplChar.test(data['newPassword']));
        setPwdCurrentPassword(true);
        setPwdUserName(true);
    }

    const validateFields=()=>{
        console.log("validate ",password.current);
        return atleastOneAlphabet.test(password.current);
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
           
        <form onSubmit={handleSubmit(validateMandatoryFields)}>
            <Stack spacing={1.5}>
            <Controller 
                name="newPassword"
                control={control}
                defaultValue=""
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
                rules={{required: "This is requried field",
                minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters"
                  },
                  maxLength: {
                    value: 20,
                    message: "Password should not exceed 20 characters"
                  },
                  //validate: validateFields || "Password does not meet requirements"
                  
                }}
            />
                
                <Controller 
                name="confirmNewPassword"
                control={control}
                defaultValue=""
                rules={{required: "This is requried field",
                    validate: value =>
                       value === password.current || "The passwords do not match"
                     }}
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

                <LabelWithIcon error ={pwdLength} label="Password length: 8 to 20 characters" />
                <LabelWithIcon error={pwd3of4} label="Contains at least 3 out of 4 types of characters below" />
                <LabelWithIcon error={pwdNumeric} label="Atleast One Numeric" />
                <LabelWithIcon error={pwdUpperAlphabet} label="Atleast One Upper case Alphabet" />
                <LabelWithIcon error={pwdLowerAlphabet} label="Atleast One Lower case Alphabet" />
                <LabelWithIcon error={pwdSplChar} label="Atleast One Special character (no spaces)" />
                <LabelWithIcon error={pwdUserName} label="Password must not contain your username" />
                <LabelWithIcon error={pwdCurrentPassword} label="New password must not match current password" />

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