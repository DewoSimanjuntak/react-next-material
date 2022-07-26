import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import validator from "validator";
import Button from "@mui/material/Button";
import globalStyles from "../../../styles/Global.module.scss";
import { styles } from "./registrationstyle"
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import AddIcon from '@mui/icons-material/Add';

const OfficeDetails = ({ nextStep, handleFormData, prevStep, values }) => {
    //creating error state for validation
    const [error, setError] = useState(false);
  
    // after form submit validating the form data using validator
    const submitFormData = (e) => {
      e.preventDefault();
  
      // checking if value of practiceName is empty show error else take to step 2
      if (validator.isEmpty(values.practiceName) || validator.isEmpty(values.addressLine1) || validator.isEmpty(values.state) || validator.isEmpty(values.city) || validator.isEmpty(values.zip) || validator.isEmpty(values.fax) || validator.isEmpty(values.cell)) {
        setError(true);
      } else {
        nextStep();
      }
    };
  
    return (
        <Box className={globalStyles.container}>
            <Stack spacing={3}>
                <div onClick={prevStep}>
                    <KeyboardBackspaceIcon sx={{fontSize: 12}} /> <span style={styles.backToPage}>Back To Specialization</span>
                </div>
                <div style={styles.titleStyles}>Register Account</div>
                <div style={styles.subtitleStyles}>Office Details</div>
                <form onSubmit={submitFormData} style={styles.form}>
                    <FormControlLabel value="primarypractice" control={<Radio />} label="Primary Practice" />
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={1}
                    >
                        <Grid item md={12} xs={12} style={styles.gridItem}>
                            <TextField
                                id="practiceName"
                                label="Practice Name*"
                                name="practiceName"
                                margin="normal"
                                style={styles.textField}
                                variant="outlined"
                                type="text"
                                error={error}
                                defaultValue={values.practiceName}
                                onChange={handleFormData("practiceName")}
                                helperText={error ? "This is a required field": ""}
                            />
                        </Grid>
                    </Grid>
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={1}
                    >
                        <Grid item md={6} xs={6} style={styles.gridItem}>
                            <TextField
                                id="addressLine1"
                                label="Address Line1*"
                                name="addressLine1"
                                margin="normal"
                                variant="outlined"
                                type="text"
                                error={error}
                                onChange={handleFormData("addressLine1")}
                                defaultValue={values.addressLine1}
                                helperText={error ? "This is a required field": ""}
                            />
                        </Grid>
                        <Grid item md={6} xs={6} style={styles.gridItem}>
                            <TextField
                                id="addressLine2"
                                label="Address Line2"
                                name="addressLine2"
                                margin="normal"
                                variant="outlined"
                                type="text"
                                defaultValue={values.addressLine2}
                                onChange={handleFormData("addressLine2")}
                            />
                        </Grid>
                    </Grid>
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={1}
                    >
                        <Grid item md={6} xs={6} style={styles.gridItem}>
                            <TextField
                                id="state"
                                label="State*"
                                name="state"
                                margin="normal"
                                variant="outlined"
                                type="text"
                                error={error}
                                onChange={handleFormData("state")}
                                defaultValue={values.state}
                                helperText={error ? "This is a required field": ""}
                            />
                        </Grid>
                        <Grid item md={6} xs={6} style={styles.gridItem}>
                            <TextField
                                id="city"
                                label="City*"
                                name="city"
                                margin="normal"
                                variant="outlined"
                                type="text"
                                error={error}
                                onChange={handleFormData("city")}
                                defaultValue={values.city}
                                helperText={error ? "This is a required field": ""}
                            />
                        </Grid>
                    </Grid>
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={1}
                    >
                        <Grid item md={6} xs={6} style={styles.gridItem}>
                            <TextField
                                id="zip"
                                label="Zip*"
                                name="zip"
                                margin="normal"
                                variant="outlined"
                                type="text"
                                error={error}
                                onChange={handleFormData("zip")}
                                defaultValue={values.zip}
                                helperText={error ? "This is a required field": ""}
                            />
                        </Grid>
                        <Grid item md={6} xs={6} style={styles.gridItem}>
                            <TextField
                                id="office"
                                label="Office (optional)"
                                name="office"
                                margin="normal"
                                variant="outlined"
                                type="text"
                                defaultValue={values.office}
                                onChange={handleFormData("office")}
                            />
                        </Grid>
                    </Grid>
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={1}
                    >
                        <Grid item md={6} xs={6} style={styles.gridItem}>
                            <TextField
                                id="fax"
                                label="Fax* (XX)XX-XX"
                                name="fax"
                                margin="normal"
                                variant="outlined"
                                type="text"
                                error={error}
                                onChange={handleFormData("fax")}
                                defaultValue={values.fax}
                                helperText={error ? "This is a required field": ""}
                            />
                        </Grid>
                        <Grid item md={6} xs={6} style={styles.gridItem}>
                            <TextField
                                id="cell"
                                label="Cell* (XX)XX-XX"
                                name="cell"
                                margin="normal"
                                variant="outlined"
                                type="text"
                                error={error}
                                onChange={handleFormData("cell")}
                                defaultValue={values.cell}
                                helperText={error ? "This is a required field": ""}
                            />
                        </Grid>
                        <Grid item md={12} xs={12} style={styles.gridItem}>
                            <TextField
                                id="email"
                                label="Email"
                                style={styles.textField}
                                name="email"
                                margin="normal"
                                variant="outlined"
                                onChange={handleFormData("email")}
                                defaultValue={values.email}
                            />
                        </Grid>
                    </Grid>
                    <div style={styles.addPractice}><span><AddIcon sx={{fontSize: 20}} /></span><span style={styles.addPracticeTitle}>Add Practice</span></div>
                    <Button variant="contained" sx={styles.containedButton} type="submit">
                        Register
                    </Button>
                    <div style={styles.backToLogin}>Back To Login</div>
                </form>
            </Stack>
        </Box>
    );
  };
  
export default OfficeDetails;
