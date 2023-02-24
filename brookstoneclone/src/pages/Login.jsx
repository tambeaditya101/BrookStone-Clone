import React from 'react'
import LoginTemp from '../components/LoginTemp'
import SignupTemp from '../components/SignupTemp'
import { Box } from '@chakra-ui/layout'
function Login() {
  return (
    <Box display='flex' justifyContent='space-around' >
        <LoginTemp/>
        <SignupTemp/>
    </Box>
  )
}

export default Login