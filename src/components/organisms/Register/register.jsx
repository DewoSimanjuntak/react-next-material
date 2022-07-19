import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// import {RowRadioButtonsGroup} from '../../atoms/RowRadioButtonsGroup/rowRadioButtonsGroup';
import { StyledInput } from '../../atoms/Input/input'
// import Link from "@mui/material/Link";
import { Divider } from '@mui/material/Divider'
import { Link } from 'next/link'
import { styles } from "./style"

import { useForm, Controller } from "react-hook-form";

// import {Error} from '../../molecules/FormMessage/formMessage.stories'


export default function Register() {
    const { handleSubmit, control } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

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
                <label style={styles.titleStyles}>User Registration</label>
                {/* <Error content={"Invalid use name or password"}/> */}

                <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
                    <Controller
                        name="firstName"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => {
                            return (
                                <StyledInput type="text" id="firstName" label="First Name"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null} />
                            )
                        }}
                        rules={{ required: 'First name required' }}
                    />
                    <Controller
                        name="lastName"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => {
                            return (
                                <StyledInput type="text" id="lastName" label="Last Name"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null} />
                            )
                        }}
                        rules={{ required: 'Last name required' }}
                    />
                    <StyledInput type="text" id="lastName" label="Last Name" variant="outlined" adorment={true} />
                    <StyledInput type="email" id="email" label="Email" />
                    <StyledInput type="dob" id="dob" label="Date of Birth" />
                    <StyledInput type="text" id="mobile" label="Mobile Number" />
                    <StyledInput type="password" id="password" label="Password" adorment={true} />
                    {/* <div style={styles.divMargin}>
                        <RowRadioButtonsGroup label="Preferred mode of Communication" options={options} />
                    </div> */}

                    <Button
                        type="submit"
                        variant="contained"
                        sx={styles.buttonStyle}
                    >
                        Register
                    </Button>
                </form>

                <p style={styles.bottomParagraph}>
                    By registering, you agree to our Terms &<br /> Conditions and Privacy Policy
                </p>
                <Divider margin={3} />
                <p style={styles.bottomParagraph}>
                    Already have an account? <Link href="/login"><a style={styles.loginLink}>Login</a></Link>
                </p>
            </Stack>
        </Box>
    );
}
