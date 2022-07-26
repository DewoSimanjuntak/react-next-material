import React, { useState } from 'react'
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import validator from "validator";
import Button from "@mui/material/Button";
import globalStyles from "../../../styles/Global.module.scss";
import { styles } from "./registrationstyle"
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const Specialization = ({ nextStep, handleFormData, prevStep, values }) => {
    //creating error state for validation
    const [error, setError] = useState(false);
  
    // after form submit validating the form data using validator
    const submitFormData = (e) => {
      e.preventDefault();
      // checking if value of first name and last name is empty show error else take to step 2
      if (validator.isEmpty(values.taxonomy)) {
        setError(true);
      } else {
        nextStep();
      }
    };
  
    return (
        <Box className={globalStyles.container}>
            <Stack spacing={3}>
                <div onClick={prevStep}>
                    <KeyboardBackspaceIcon sx={{fontSize: 12}} /> <span style={styles.backToPage}>Back To Personal Information</span>
                </div>
                <div style={styles.titleStyles}>Register Account</div>
                <div style={styles.subtitleStyles}>Specialization</div>
                <form onSubmit={submitFormData} style={styles.form}>
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={1}
                    >
                        <Grid item md={12} xs={12} style={styles.gridItem}>
                            <TextField
                                id="taxonomy"
                                label="Taxonomy Code*"
                                name="taxonomy"
                                margin="normal"
                                style={styles.textField}
                                variant="outlined"
                                type={"number"}
                                error={error}
                                defaultValue={values.taxonomy}
                                onChange={handleFormData("taxonomy")}
                                helperText={error ? "This is a required field": "*Required"}
                            />
                        </Grid>
                        <Grid item md={12} xs={12} style={styles.gridItem}>
                            <TextField
                                id="classification"
                                label="Classifications*"
                                name="classification"
                                style={styles.textField}
                                margin="normal"
                                variant="outlined"
                                type={"text"}
                                error={error}
                                defaultValue={values.classification}
                                onChange={handleFormData("classification")}
                                helperText={error ? "This is a required field": "*Required"}
                            />
                        </Grid>
                        <Grid item md={12} xs={12} style={styles.gridItem}>
                            <TextField
                                id="specialization"
                                label="Specialization*"
                                name="specialization"
                                style={styles.textField}
                                margin="normal"
                                variant="outlined"
                                error={error}
                                defaultValue={values.specialization}
                                type={"text"}
                                helperText={error ? "This is a required field": "*Required"}
                            />
                        </Grid>
                    </Grid>
                    <Button type="submit" variant="contained" sx={styles.containedButton}>
                        Next: Office Details
                    </Button>
                    <div style={styles.backToLogin}>Back To Login</div>
                </form>
            </Stack>
        </Box>
    );
  };
  
  export default Specialization;