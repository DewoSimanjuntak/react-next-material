import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';

export default function Login() {
    return (
        <Box sx={{
            width: 300,
            padding: '20px 10px 15px',
            backgroundColor: 'white',
            alignSelf: 'center',
            margin: 'auto'
        }}>
            <Stack spacing={2}>
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
            <Button variant="outlined">Continue as a guest</Button>
            <Link href="#">Forgot Username or Password</Link>
            </Stack>
        </Box>

    );
}
