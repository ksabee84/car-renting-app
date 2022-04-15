import React from "react";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const rentableCars=[];

const CarSelectElement = () => {
    return (
        <>
            <Autocomplete className='carSelect'
                disablePortal
                id="combo-box-demo"
                options={ rentableCars }
                sx={{ width: 400 }}
                renderInput={(params) =>
                <TextField {...params} label="Selected Car" />}
            /> 
        </>
    )
}

export default CarSelectElement;