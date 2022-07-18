import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Paper } from '@mui/material';
export default function Login() {
    return (
        <Box sx={{
            width: 300,
            padding: '4rem 4rem 15px',
            backgroundColor: 'white',
            alignSelf: 'center',
            margin: 'auto'
        }}>
            <Stack spacing={2}>
                <Grid 
                    container
                    justifyContent={"center"}
                >
                     <Typography variant="h4" gutterBottom component="div">
                        Pattient Login
                    </Typography>
                </Grid>
            <TextField id="email" label="Email or Phone" />
            <TextField id="password" label="Password" type="password" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Keep me signed in on this device" />
            <Button variant="contained" sx={{
                backgroundColor:"#E5EDF8P",
                borderRadius: 46,
                color: "white",
                '&:hover': {
                    backgroundColor: '#E5EDF8P',
                  },
            }}>Login</Button>
            <Button variant="outlined" color>Continue as a guest</Button>
            <Grid 
                container
                direction="row"
            >
                <Paper></Paper>
                <Paper><Link href="#">Forgot Username or Password</Link></Paper>
            </Grid>
            
            <Divider/>
            <p>Don't have an account</p>
            <Button variant='outlined'>Create Account</Button>
            </Stack>
        </Box>

    );
}
