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
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import RemoveIcon from '@mui/icons-material/Remove';

const OfficeDetails = ({ nextStep, prevStep, values }) => {
    const [officeDetails, setOfficeDetails] = useState(
        [
            {
                practiceName: "",
                addressLine1: "",
                addressLine2: "",
                state: "",
                city: "",
                zip: "",
                office: "",
                fax: "",
                cell: "",
                email: "" 
            }
        ]
    )

    const handleOfficeDetailsChange = (e, index) => {
        const { name, value } = e.target;
        const officeDetailsList = [...officeDetails];
        officeDetailsList[index][name] = value;
        setOfficeDetails(officeDetailsList);
        console.log(officeDetailsList)
    };

    const handleOfficeDetailsRemove = (index) => {
        console.log(index)
        const officeDetailsList = [...officeDetails];
        officeDetailsList.splice(index, 1);
        setOfficeDetails(officeDetailsList);
        console.log(officeDetails)
    };

    const handleOfficeDetailsAdd = () => {
        setOfficeDetails([...officeDetails, { 
            practiceName: "",
            addressLine1: "",
            addressLine2: "",
            state: "",
            city: "",
            zip: "",
            office: "",
            fax: "",
            cell: "",
            email: "" 
        }]);
    };

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
                    {officeDetails.map((officeInput, index) => (
                        <div key={index} className="office-details">
                            <div className="addForm">
                                {/* <FormControl name="primaryPractice">
                                    <RadioGroup onChange={(e) => handleOfficeDetailsChange(e, index)}>
                                        <FormControlLabel value="true" control={<Radio />} label="Primary Practice" />
                                    </RadioGroup>
                                </FormControl> */}
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
                                            value={officeInput.practiceName}
                                            onChange={(e) => handleOfficeDetailsChange(e, index)}
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
                                            onChange={(e) => handleOfficeDetailsChange(e, index)}
                                            value={officeInput.addressLine1}
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
                                            value={officeInput.addressLine2}
                                            onChange={(e) => handleOfficeDetailsChange(e, index)}
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
                                            value={officeInput.state}
                                            onChange={(e) => handleOfficeDetailsChange(e, index)}
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
                                            value={officeInput.city}
                                            onChange={(e) => handleOfficeDetailsChange(e, index)}
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
                                            value={officeInput.zip}
                                            onChange={(e) => handleOfficeDetailsChange(e, index)}
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
                                            value={officeInput.office}
                                            onChange={(e) => handleOfficeDetailsChange(e, index)}
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
                                            value={officeInput.fax}
                                            onChange={(e) => handleOfficeDetailsChange(e, index)}
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
                                            value={officeInput.cell}
                                            onChange={(e) => handleOfficeDetailsChange(e, index)}
                                            helperText={error ? "This is a required field": ""}
                                        />
                                    </Grid>
                                    <Grid item md={12} xs={12} style={styles.gridItem}>
                                        <TextField
                                            id="email"
                                            label="Email"
                                            style={styles.textField}
                                            name="email"
                                            value={officeInput.email}
                                            margin="normal"
                                            variant="outlined"
                                            onChange={(e) => handleOfficeDetailsChange(e, index)}
                                        />
                                    </Grid>
                                </Grid>
                                {officeDetails.length - 1 === index && officeDetails.length < 5 && (
                                    <div onClick={() => handleOfficeDetailsAdd()} style={styles.addPractice}><span><AddIcon sx={{fontSize: 16}} /></span><span style={styles.addPracticeTitle}>Add Practice</span></div>
                                )}
                            </div>
                            <div className="removeForm">
                                {officeDetails.length !== 1 && (
                                    <div onClick={() => handleOfficeDetailsRemove(index)} style={styles.removePractice}><span><RemoveIcon sx={{fontSize: 16}} /></span><span style={styles.removePracticeTitle}>Remove Practice</span></div>
                                )}
                            </div>
                        </div>
                    ))}
                   
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
