import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { alpha, styled } from "@mui/material/styles";
import { StyledInput } from "../../atoms/Input/input";
import LinkIcon from "@mui/icons-material/Link";
import { useTranslation } from "react-i18next";
import globalStyles from "../../../styles/Global.module.scss";
import { useRouter } from "next/router";
import Link from "@mui/material/Link";
import { useForm, Controller } from "react-hook-form";
import Stack from "@mui/material/Stack";


const headingStyles = {
  marginBottom: 30,
  textAlign: "left",
};

const labelStyle = {
  textAlign: "left",
  marginBottom: "20px"
};

const cardContentStyle = {
  display: "flex",
  flexDirection: "column",
  padding: 0,
};

const buttonStyle = {
  marginTop: 3,
  backgroundColor: "#015064",
  borderRadius: "48pt",
};

const linkStyles= {
  textAlign:"center",
  cursor:"pointer",
  color: "#015064",
  fontWeight: 'bold'
};

const RedditTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const ForgotPasswordComponent = () => {
  const router = useRouter();
  const {handleSubmit,control}=useForm();
  

  const { t } = useTranslation("forgotPassword");
  const [isValidUsername, setValidUsername] = useState(false);
  
  const onResetPasswordClicked = () => {
    setValidUsername(!isValidUsername);
  };
  const validateMandatoryFields=data=>{
    console.log(data);
}

  return (
    <Card className={globalStyles.container} sx={{ minWidth: 275, margin: 10 }}>
      <CardContent style={cardContentStyle}>
        <h1 style={headingStyles}>{t("title")}</h1>
        <label style={labelStyle}>{t("description")}</label>
        <Stack spacing={3}>
    
   <form onSubmit={handleSubmit(validateMandatoryFields)}>
    <Stack spacing={1.5}>
    <Controller 
        name="email"
        control={control}
        defaultValue=""
        rules={{required: "This is a required field" }}
        render={({field: { onChange, value}, fieldState: {error}})=>{
            return(
                <TextField 
                    label="Email*"
                    error={!!error}
                    helperText={error ? error.message : null}
                    value={value}
              />
            )
        }}
    />
    <Button
          variant="contained"
          sx={buttonStyle} type="submit"
    >
    Submit</Button>
    <Link underline="none" sx={linkStyles} href="/login">Back To Login</Link>
    </Stack>
    </form>
    </Stack>

      </CardContent>
    </Card>
  );
};

export default ForgotPasswordComponent;
