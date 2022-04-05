import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const RegistrationFormElement = () => {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onNameValueChange = (e) => {
        setName(e.target.value);
        console.log(name);
    };

    const onUsernameValueChange = (e) => {
        setUsername(e.target.value);
        console.log(username);
    };

    const onEmailValueChange = (e) => {
        setEmail(e.target.value);
        console.log(email);
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
        console.log(password);
    };

    const lowerCaseChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const specialChars = ['*','/','-', '+', '#', '@', '$', '%', '^', '(', ')', '_', '='];
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
   
    const checkRules = (passwordArray, charArray) => {
        // if(passwordArray.find(char) => charArray.includes(char) ) {}

        
    };

/*
    const checkValues = () => {
        var formValue = true;

        if(!email.includes('@', '.')) {
            formValue = false;
            alert('Enter a valid e-mail address!');
        };
        
        if(password.length < 8) {
            formValue = false;
            alert('Password must be at least 8 characters long!');
        };

        if(password.length > 30) {
            formValue = false;
            alert('Password cannot be longer than 30 characters!');
        };

        if(!password.includes(lowerCaseChars, upperCaseChars, specialChars, numbers)) {
            formValue = false;
            alert('Password must contain at least one lower case, one upper case, on special character and one number!');
        };
        
    };


    checkValues();
*/
    return(
        <Box className='formBox'
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
                >
                <div>
                    <TextField
                        required
                        id="demo-helper-text-misaligned-no-helper"
                        label="Please enter your name"
                        onChange={ onNameValueChange }
                    />
                </div>
                <div>
                    <TextField className='userName'
                        required
                        id="demo-helper-text-misaligned-no-helper"
                        label="Please enter a username"
                        helperText=""
                        onChange={ onUsernameValueChange }
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="demo-helper-text-misaligned-no-helper"
                        label="Please enter an e-mail address"
                        helperText=""
                        onChange={ onEmailValueChange }
                    />
                </div>
                <div>
                    <TextField
                        required
                        type="password"
                        id="outlined-password-input"
                        label="Please enter a password"
                        helperText=""
                        autoComplete="current-password"
                        onChange={ onPasswordChange }
                    />
                </div>
            </Box>
    )

}

export default RegistrationFormElement;