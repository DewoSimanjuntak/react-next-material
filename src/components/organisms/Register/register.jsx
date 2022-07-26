import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import RowRadioButtonsGroup from '../../atoms/RowRadioButtonsGroup/rowRadioButtonsGroup';
import { StyledInput } from '../../atoms/Input/input'
import { Divider, Typography } from "@mui/material";
import Link from 'next/link'
import { styles } from "./style"
import globalStyles from "../../../styles/Global.module.scss";
import { useForm, Controller } from "react-hook-form";
import { PasswordValidator } from "../../molecules/PasswordValidator/passwordValidator";
import FormMessage from "../../molecules/FormMessage/formMessage";
// import {Error} from '../../molecules/FormMessage/formMessage.stories'


export default function Register() {
    const [isShowValidation, setShowValidation] = React.useState(false)
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

    const watchedPassword = watch("password", "");
    const [watchedEmail, watchedMobile] = watch(["email", "mobile"]); // you can also target specific fields by their names
    const getRegisteredUsername = () => {
        return watchedEmail || watchedMobile || '(auto-populated email id/phone number)'
    }

    return (
        <Box className={globalStyles.container}>
            <Stack spacing={3}>
                <Typography variant="h1" sx={styles.titleStyles}>
                    User Registration
                </Typography>
                {/* <FormMessage success="true" title="Title">Please Create a PasswordPlease Create a PasswordPlease Create a PasswordPlease Create a PasswordPlease Create a Password</FormMessage> */}
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
                    {/* <StyledInput type="text" id="lastName" label="Last Name" adorment="true" /> */}
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
                            required: 'Email required',
                            pattern: {
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
                        rules={{
                            required: 'Mobile Number required',
                            pattern: {
                                value: /[0-9]{9,12}/i,
                                message: "Mobile Number is invalid"
                            }
                        }}
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
                    <PasswordValidator isShowValidation={isShowValidation} password={watchedPassword} username={getRegisteredUsername()} />
                    
                    <div style={styles.registeredUsernameWrapper}>
                        <div>Your username will be {getRegisteredUsername()}</div>
                    </div>
                    
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
