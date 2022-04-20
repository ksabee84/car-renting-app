import React, { useState } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const CarSelectElement = () => {
    const [carsData, setCarsData] = useState([]);
    const carsNames = [];

    const cars = () => {
        fetch('http://localhost:8080/api/v1/car-renting/cars')
        .then((result) => result.json())
        .then((data) => setCarsData(data))
        .catch((error) => {
            console.log('Data cannot be loaded: ', error);
        });
    };

    cars();

    const filteredCars = carsData.filter((car) => car.carBrandAndModel);

    return (
        <>
            <Autocomplete className='carSelect'
                disablePortal
                id="combo-box-demo"
                options={ carsNames }
                sx={{ width: 400 }}
                renderInput={(params) =>
                <TextField {...params} label="Selected Car" />}
            /> 
        </>
    )
}

export default CarSelectElement;