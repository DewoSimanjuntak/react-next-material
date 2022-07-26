import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import validator from "validator";
import Button from "@mui/material/Button";
import globalStyles from "../../../styles/Global.module.scss";
import {Typography } from "@mui/material";
import { styles } from "./registrationstyle"
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Information = ({ nextStep, handleFormData, values, sendBirthDay, sendGenderValue }) => {
    //creating error state for validation
    const [error, setError] = useState(false);
    const [birthdayValue, setBirthdayValue] = React.useState(new Date());
    const birthdayChange = (birthday) => {
        setBirthdayValue(birthday);
        sendBirthDay(birthday)
    };

    const [gender, setGender] = React.useState('');
    const genderChange = (event) => {
        setGender(event.target.value);
        sendGenderValue(event.target.value)
    };

    // after form submit validating the form data using validator
    const submitFormData = (e) => {
      e.preventDefault();
      // checking if value of npi and designation is empty show error else take to step 2
      if (validator.isEmpty(values.npi) || validator.isEmpty(values.lastName) && validator.isAlpha(values.lastName) || validator.isEmpty(values.firstName)) {
        setError(true);
      } 
      else {
        nextStep();
      }

    };
  
    return (
        <Box className={globalStyles.container}>
            <Stack spacing={3}>
                <div style={styles.titleStyles}>Register Account</div>
                <div style={styles.subtitleStyles}>Personal Information</div>
                <form onSubmit={submitFormData} style={styles.form}>
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={1}
                    >
                        <Grid item md={12} xs={12} style={styles.gridItem}>
                            <TextField
                                id="npi"
                                label="NPI*"
                                name="npi"
                                style={styles.textField}
                                margin="normal"
                                variant="outlined"
                                type={"number"}
                                error={error}
                                defaultValue={values.npi}
                                onChange={handleFormData("npi")}
                                helperText={error ? "This is a required field": "*Required"}
                            />
                        </Grid>
                        <Grid item md={12} xs={12} style={styles.gridItem}>
                            <TextField
                                id="designation"
                                label="Designation"
                                name="designation"
                                style={styles.textField}
                                margin="normal"
                                variant="outlined"
                                type={"text"}
                                defaultValue={values.designation}
                                onChange={handleFormData("designation")}
                            />
                        </Grid>
                        <Grid item md={12} xs={12} style={styles.gridItem}>
                            <TextField
                                id="lastName"
                                label="Last Name*"
                                name="lastName"
                                margin="normal"
                                style={styles.textField}
                                variant="outlined"
                                error={error}
                                defaultValue={values.lastName}
                                onChange={handleFormData("lastName")}
                                helperText={error ? "This is a required field": "*Required"}
                                type={"text"}
                            />
                        </Grid>
                        <Grid item md={12} xs={12} style={styles.gridItem}>
                            <TextField
                                id="middleName"
                                label="Middle Name"
                                name="middleName"
                                style={styles.textField}
                                margin="normal"
                                variant="outlined"
                                defaultValue={values.middleName}
                                onChange={handleFormData("middleName")}
                                type={"text"}
                            />
                        </Grid>
                        <Grid item md={12} xs={12} style={styles.gridItem}>
                            <TextField
                                id="firstName"
                                label="First Name*"
                                name="firstName"
                                margin="normal"
                                variant="outlined"
                                style={styles.textField}
                                error={error}
                                defaultValue={values.firstName}
                                onChange={handleFormData("firstName")}
                                helperText={error ? "This is a required field": "*Required"}
                                type={"text"}
                            />
                        </Grid>
                    </Grid>
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={1}
                    >
                        <Grid item md={6} xs={6} style={styles.dateGenderItems}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <MobileDatePicker
                                    label="Birth Day"
                                    id="birthday"
                                    name="birthday"
                                    variant="outlined"
                                    inputFormat="MM/dd/yyyy"
                                    value={birthdayValue}
                                    onChange={birthdayChange}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item md={6} xs={6} style={styles.dateGenderItems}>
                            <FormControl fullWidth>
                                <InputLabel id="gender">Gender</InputLabel>
                                <Select value={gender} label="Gender" onChange={genderChange}>
                                    <MenuItem value={1}>Male</MenuItem>
                                    <MenuItem value={2}>Female</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Button type="submit" variant="contained" sx={styles.containedButton}>
                        Next: Specialization
                    </Button>
                    <div style={styles.backToLogin}>Back To Login</div>
                </form>
            </Stack>
        </Box>
    );
  };
  
export default Information;
