import React, {useState} from "react"
import { Button, TextField } from "@mui/material";

const headingStyles = {
    marginBottom: 30,
}

const center = {
    margin: 'auto',
    width: '50%',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center'
}

const securityQuestionContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}

const marginTop = {
    marginTop: 2
}

const regularFont = {
    fontFamily: 'Libre Franklin',
    fontSize: '16px'
}

const ForgotPasswordPage = () => {
    const [isValidUsername, setValidUsername] = useState(false);
    const [isMagicLinkClicked, setMagicLinkClicked] = useState(false);
    const [isShowSecurityQuestion, setShowSecurityQuestion] = useState(false);

    const onResetPasswordClicked = () =>{
        setValidUsername(!isValidUsername)
    }

    const onMagicLinkClicked = () => {
        setMagicLinkClicked(!isMagicLinkClicked)
    }

    const onSetNewPasswordClicked = () => {
        setShowSecurityQuestion(!isShowSecurityQuestion)
    }

    const magicLinkUI = () =>{
        return(
            <div>
                <p style={regularFont}>User receives a magic link to their registered email-id/ mobile number</p>
            </div>
        )
    }

    const getSecurityQuestionUI = () =>{
        return(
            <div style={securityQuestionContainer}>
                <TextField id="outlined-basic" label="Security Question 1" variant="standard" margin="dense"/>
                <TextField id="outlined-basic" label="Security Question 2" variant="standard" margin="dense"/>
                <TextField id="outlined-basic" label="Security Question 3" variant="standard" margin="dense"/>
            </div>
        )
    }
    
    return (
        <main>
            <title>Forgot Password Page</title>
            <div style={center}>
                <h1 style={headingStyles}>Forgot Password</h1>
                    <TextField id="outlined-basic" label="Username" variant="outlined" />
                    <Button variant="contained" sx={marginTop} onClick={onResetPasswordClicked}>Reset Password</Button>
                    {isValidUsername ? 
                        <div style={center}>
                            <Button variant="contained" sx={marginTop} onClick={onMagicLinkClicked}>Magic Link</Button>
                            {isMagicLinkClicked ? magicLinkUI() : null}
                            <Button variant="contained" sx={marginTop} onClick={onSetNewPasswordClicked}>Set New Password</Button>
                            {isShowSecurityQuestion ? getSecurityQuestionUI() : null}
                        </div>
                    : null}
            </div>
      </main>
      
    )
  }


export default ForgotPasswordPage