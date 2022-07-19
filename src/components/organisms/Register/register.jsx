import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Typography from '@mui/material/Typography';
import { useTranslations } from "next-intl";
import Devider from '@mui/material/Divider'

// import {Error} from '../../molecules/FormMessage/formMessage.stories'

const titleStyles = {
    color: "#366A70",
    fontSize: "1.25rem",
    marginLeft: "8px",
    marginRight: "8px",
    paddingBottom: "6px"
}

const bottomParagraph = {
    color: "#366A70",
    fontSize: "12px",
    textAlign: "center",
}

const loginLink = {
    color: "#3EAFBD",
    textDecoration: "underline"
}

const buttonStyle = {
    marginTop: 2,
    backgroundColor: "#3EAFBD",
    borderRadius: "48pt",
};

export default function Register() {
    const locale = useTranslations("userRegistration");
    return (
        <Box
            sx={{
                width: 300,
                padding: "20px 10px 15px",
                backgroundColor: "white",
                alignSelf: "center",
                margin: "auto",
            }}
        >
            <Stack spacing={2}>
                <label style={titleStyles}>{locale("title")}</label>
                {/* <Error content={"Invalid use name or password"}/> */}

                <TextField id="firstName" label="First Name" />
                <TextField id="lastName" label="Last Name" />
                <TextField id="email" label="Email" />
                <TextField id="dob" label="Date of Birth" />
                <TextField id="mobile" label="Mobile Number" />
                <TextField id="password" label="Password" type="password" />
                <Button
                    variant="contained"
                    sx={buttonStyle}
                >
                    Register
                </Button>
                <p style={bottomParagraph}>
                    By registering, you agree to our Terms &<br /> Conditions and Privacy Policy
                </p>
                <Devider margin={3} />
                <p style={bottomParagraph}>
                    Already have an account? <a style={loginLink} href="/">Login</a>
                </p>
            </Stack>
        </Box>
    );
}
