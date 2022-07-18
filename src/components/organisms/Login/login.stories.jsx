import React from 'react';
import Login from './login';
export default{
    title : 'organisms/formlogin',
    component : Login
}

const Templates = (args)=> <Login {...args}/>
export const LoginDua = Templates.bind({})
LoginDua.args = {
    name : 'primary',
    isUsernameFill : true,
    isPasswordFill : true,
    isUsernameRight : true,
    isPasswordRight : true,
    countLogin : 0
}
export const LoginForm = <Login/>