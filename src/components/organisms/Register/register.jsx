// import * as React from "react";
import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import RowRadioButtonsGroup from '../../atoms/RowRadioButtonsGroup/rowRadioButtonsGroup';
import { StyledInput } from '../../atoms/Input/input'
import { Divider, Typography } from "@mui/material";
import Link from 'next/link'
import { styles } from "./style"
import { LabelWithIcon } from "../../atoms/LabelWithIcon/labelWithIcon";
import globalStyles from "../../../styles/Global.module.scss";
import { useForm, Controller } from "react-hook-form";
// import {Error} from '../../molecules/FormMessage/formMessage.stories'


export default function Register() {
    const [isShowValidation, setShowValidation] = React.useState(true)
    const [isCharLengthPass, setCharLengthPass] = React.useState(false)
    const [isAlphabethPass, setAlphabethPass] = React.useState(false)
    const [isSpecialCharPass, setSpecialCharPass] = React.useState(false)

    // const { handleSubmit, setError, control, formState: { errors }, watch } = useForm();
    const { handleSubmit, setError, control, watch, formState: { errors } } = useForm(
        {
            defaultValues: {
                firstName: '',
                lastName: '',
                email: '',
                mobile: '',
                password: ''
            }
        }
    );

    const onSubmit = data => {
        setShowValidation(true);
        setError("firstName", { type: 'custom', message: 'An error occured' })
        setError("lastName", { type: 'custom', message: 'An error occured' })
        setError("mobile", { type: 'custom', message: 'An error occured' })
        setError("password", { type: 'custom', message: 'An error occured' })
    };

    const options = [
        { label: 'Email', value: 'email' },
        { label: 'Phone', value: 'phone' },
        { label: 'Both', value: 'both' }
    ]

    const [watchedEmail, watchedMobile] = watch(["email", "mobile"]); // you can also target specific fields by their names
    const getRegisteredUsername = () => {
        return watchedEmail || watchedMobile || '(auto-populated email id/phone number)'
    }

    const password = useRef({});
    password.current = watch("password", "");

    // const checkPass = (use, pwd) => {
    //     console.log(use, pwd, 'dfv')
    //     return pwd.match(/[a-z]+/ig).filter(a=> a.length > 4 && use.includes(a)).length > 0? true:false;
    //     }

    useEffect(() => {
        let lengthRegex = new RegExp('.{8,20}');
        let alphabethRegex = new RegExp('[A-Za-z]');
        let specialRegex = new RegExp('[@#$%^&-+=()]');

        setCharLengthPass(lengthRegex.test(password.current));
        setAlphabethPass(alphabethRegex.test(password.current));
        setSpecialCharPass(specialRegex.test(password.current));

        console.log(password.current, 'password.current')
        // console.log(checkPass("Npasandarshana@gmail.com","S@pasan123"))//true
        // console.log(checkPass("Npasandarshana@gmail.com","S@pasysan123"))//false
        // console.log(checkPass(getRegisteredUsername(), password.current), 'password.cek')
    }, [password.current]);

    return (
        <Box className={globalStyles.container}>
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
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    size="small"
                                    variant="filled"
                                    helperText={error ? error.message : null} />
                            )
                        }}
                        rules={{
                            required: 'Last name required', pattern: {
                                value: /^([A-Za-z ])+$/i,
                                message: "Last name is invalid"
                            }
                        }}
                    />
                    <StyledInput type="text" id="lastName" label="Last Name" adorment={true} />
                    {/* <StyledInput type="text" id="email" label="Email" variant="filled" /> */}
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => {
                            return (
                                <StyledInput type="text" id="email" label="Email"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    size="small"
                                    variant="filled"
                                    helperText={error ? error.message : null} />
                            )
                        }}
                        rules={{
                            required: 'Email required', pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i,
                                message: "Email is invalid"
                            }
                        }}
                    />
                    <StyledInput type="dob" id="dob" label="Date of Birth" variant="filled" />
                    <Controller
                        name="mobile"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => {
                            return (
                                <StyledInput type="text" id="mobile" label="Mobile Number"
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
                    <Typography variant="h1" sx={styles.passwordLabel}>
                        Please Create a Password
                    </Typography>
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => {
                            return (
                                <StyledInput type="password" id="password" label="Password"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    size="small"
                                    variant="filled"
                                    helperText={error ? error.message : null} />
                            )
                        }}
                        rules={{ required: 'Password required' }}
                    />

                    <div style={styles.registeredUsernameWrapper}>
                        <div>Your username will be {getRegisteredUsername()}</div>
                    </div>

                    {/* <StyledInput type="dob" id="dob" label="Date of Birth" variant="filled" />
                    <StyledInput type="text" id="mobile" label="Mobile Number" variant="filled" />
                    <StyledInput type="password" id="password" label="Password" variant="outlined" /> */}
                    {isShowValidation ?
                        <div style={{ display: "block" }}>
                            <LabelWithIcon error={!isCharLengthPass} label="Password length should range from 8 to 20 characters" />
                            <LabelWithIcon
                                error={!isAlphabethPass}
                                label="Password should contain at least one alphabet (a-z)"
                            />
                            <LabelWithIcon
                                error={!isSpecialCharPass}
                                label="Password should contain at least one special character"
                            />
                            <LabelWithIcon
                                error={!isSpecialCharPass}
                                label="Password should not contain your username"
                            />
                            <LabelWithIcon
                                error={true}
                                label="Password should not be match with your previously used password"
                            />
                            <LabelWithIcon
                                error={true}
                                label="Password should not contain 3 or more identical characters consecutively (ex. Emploooooye, Sys@@@tem, abcabcabc, 123123123, etc.) "
                            />
                        </div> : null}
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

                <Typography variant="caption" style={styles.bottomParagraph}>By registering, you agree to our Terms &<br /> Conditions and Privacy Policy</Typography>
                <Divider margin={3} />
                <Typography variant="caption" style={styles.bottomParagraph}>Already have an account? <Link href="/login"><a style={styles.loginLink}>Login</a></Link></Typography>
            </Stack>
        </Box>
    );
}
