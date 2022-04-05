import React from "react";
import Container from '@mui/material/Container';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const CarSelectElement = () => {

    const rentableCars=[];

    return (
        <Container className='autocompleteDiv'>

            <Autocomplete className='autocompleteCars'
                disablePortal
                id="combo-box-demo"
                options={rentableCars}
                sx={{ width: 400 }}
                renderInput={(params) =>
                <TextField {...params} label="carName" />}
            />

            <Button size='large' variant='contained'>
                Register and Rent
            </Button>
        </Container>
    )
}

export default CarSelectElement;