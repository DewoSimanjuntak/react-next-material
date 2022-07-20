import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import RowRadioButtonsGroup from '../../atoms/RowRadioButtonsGroup/rowRadioButtonsGroup';
import { StyledInput } from '../../atoms/Input/input'
import { Divider, Typography } from "@mui/material";
import Link from 'next/link'
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
            sx={styles.container}
        >
            <Stack spacing={3}>
                <Typography variant="h1" sx={styles.titleStyles}>
                    User Registration
                </Typography>
                {/* <Error content={"Invalid use name or password"}/> */}

                <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
                    <Controller
                        name="firstName"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => {
                            return (
                                <StyledInput type="text" id="firstName" label="First Name"
                                    required
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    size="small"
                                    variant="filled"
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
                                    required
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    size="small"
                                    variant="filled"
                                    helperText={error ? error.message : null} />
                            )
                        }}
                        rules={{ required: 'Last name required' }}
                    />
                    <StyledInput type="text" id="lastName" label="Last Name" adorment={true} />
                    <StyledInput type="email" id="email" label="Email" variant="filled" />
                    <StyledInput type="dob" id="dob" label="Date of Birth" variant="filled" />
                    <Controller
                        name="mobile"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => {
                            return (
                                <StyledInput type="text" id="mobile" label="Mobile Number"
                                    required
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    size="small"
                                    variant="filled"
                                    helperText={error ? error.message : null} />
                            )
                        }}
                        rules={{ required: 'Mobile Number required' }}
                    />
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => {
                            return (
                                <StyledInput type="password" id="password" label="Password"
                                    required
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    size="small"
                                    variant="outlined"
                                    adorment={true}
                                    helperText={error ? error.message : null} />
                            )
                        }}
                        rules={{ required: 'Password required' }}
                    />
                    {/* <StyledInput type="dob" id="dob" label="Date of Birth" variant="filled" />
                    <StyledInput type="text" id="mobile" label="Mobile Number" variant="filled" />
                    <StyledInput type="password" id="password" label="Password" variant="outlined" /> */}
                    <div style={styles.divMargin}>
                        <RowRadioButtonsGroup label="Preferred mode of Communication" options={options} />
                    </div>

                    <Button
                        type="submit"
                        variant="contained"
                        sx={styles.containedButton}
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
