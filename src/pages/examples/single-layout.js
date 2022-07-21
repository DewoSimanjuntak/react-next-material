import { Box, Button, Divider, Stack } from "@mui/material"
import { useMemo, useState } from "react"
import Login from "../../components/organisms/Login/login"
import Register from "../../components/organisms/Register/register"

export default function SingleLayoutPage() {
  const [mode, setMode] = useState('login')

  const getComponent = useMemo(() => {
    switch (mode) {
      case 'login':
        return <Login />
      case 'register':
        return <Register />
    }
  },[mode])

  return (
    <>
      <Stack spacing={2}>
        <div>Choose Component to show:</div>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
          }}
        >
          <Button onClick={() => setMode('login')}>Login</Button>
          <Button onClick={() => setMode('register')}>Register</Button>
        </Box>

        <Divider />
        <Box sx={{
            p: 1,
          }}>
          {getComponent}
        </Box>
      </Stack>

    </>
  )
}