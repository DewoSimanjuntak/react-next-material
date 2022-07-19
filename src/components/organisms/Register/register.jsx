import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import RowRadioButtonsGroup from '../../../components/atoms/RowRadioButtonsGroup/rowRadioButtonsGroup';
import StyledInput from '../../../components/atoms/Input/input'
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Typography from '@mui/material/Typography';
import { useTranslations } from "next-intl";
import Devider from '@mui/material/Divider'
import Link from 'next/link'

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
  const options = [
    { label: 'Email', value: 'email' },
    { label: 'Phone', value: 'phone' },
    { label: 'Both', value: 'both' }
  ]
  return (
    <Box
      sx={{
        width: 400,
        padding: "20px 10px 15px",
        backgroundColor: "white",
        alignSelf: "center",
        margin: "auto",
      }}
    >
      <Stack spacing={2}>
        <label style={titleStyles}>{locale("title")}</label>
        {/* <Error content={"Invalid use name or password"}/> */}

        <StyledInput type="text" id="firstName" label="First Name" />
        <StyledInput type="text" id="lastName" label="Last Name" />
        <StyledInput type="text" id="email" label="Email" />
        <StyledInput type="text" id="dob" label="Date of Birth" />
        <StyledInput type="text" id="mobile" label="Mobile Number" />
        <StyledInput type="password" id="password" label="Password" />
        <RowRadioButtonsGroup label="Preferred mode of Communication" options={options} />

        <Button
            variant="contained"
            sx={buttonStyle}
        >
            Register
        </Button>
        <p style={bottomParagraph}>
            By registering, you agree to our Terms &<br /> Conditions and Privacy Policy
        </p>
        <Devider margin={3}/>
        <p style={bottomParagraph}>
            Already have an account? <Link href="/login"><a style={loginLink}>Login</a></Link>
        </p>
      </Stack>
    </Box>
  );
}
