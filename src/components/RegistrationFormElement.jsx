import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import RegisterSuccess from '../components/RegisterSuccess';

const RegistrationFormElement = () => {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

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

    const onPhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
        console.log(phoneNumber);
    };

    const lowerCaseChars = /[a-z]/g ;
    const upperCaseChars = /[A-Z]/g;
    const numbers = /[0-9]/g;
    let formValue;

    const checkValues = () => {

            if(!email.includes('@', '.')) {
                formValue = false;
                alert('Enter a valid e-mail address!');
            }

            if(password.length < 8) {
                formValue = false;
                alert('Password must be at least 8 characters long!');
            }
            
            if(password.length > 30) {
                formValue = false;
                alert('Password cannot be longer than 30 characters!');
            }

            if(!password.match(lowerCaseChars, upperCaseChars, numbers)) {
                formValue = false;
                alert('Password must contain at least one lower case and one upper case letter, and one number!');
            }
            
            if(!phoneNumber.match(numbers, '-', '+')) {
                formValue = false;
                alert(`Phone number must contain numbers, and may contain '+' or '-' characters!`);
            }       
    };

    return(
        <>
            <Box className='formBox'
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
                >
                    <TextField
                        required
                        id="demo-helper-text-misaligned-no-helper"
                        label="Please enter your name"
                        onChange={ onNameValueChange }
                    />
                    <TextField className='userName'
                        required
                        id="demo-helper-text-misaligned-no-helper"
                        label="Please enter a username"
                        helperText=""
                        onChange={ onUsernameValueChange }
                    />
                    <TextField
                        required
                        id="demo-helper-text-misaligned-no-helper"
                        label="Please enter an e-mail address"
                        helperText=""
                        onChange={ onEmailValueChange }
                    />
                    <TextField
                        required
                        type="password"
                        id="outlined-password-input"
                        label="Please enter a password"
                        helperText=""
                        autoComplete="current-password"
                        onChange={ onPasswordChange }
                    />
                    <TextField
                        required
                        id="demo-helper-text-misaligned-no-helper"
                        label="Please enter your phone number"
                        helperText=""
                        onChange={ onPhoneNumberChange }
                    />
                <div className='regBtn'>
                    <Button
                        size='large'
                        variant='contained'
                        onClick={ checkValues }>
                            Register and Rent
                    </Button>
                </div>
                    { formValue && <RegisterSuccess /> }
            </Box>
        </>
    )
}

export default RegistrationFormElement;