import React from "react";
import Container from '@mui/material/Container';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const rentableCars=[];

const CarSelectElement = () => {

    return (
        <Container className='autocompleteDiv'>

            <Autocomplete className='autocompleteCars'
                disablePortal
                id="combo-box-demo"
                options={ rentableCars }
                sx={{ width: 400 }}
                renderInput={(params) =>
                <TextField {...params} label="Selected Car" />}
            />
            
        </Container>
    )
}

export default CarSelectElement;