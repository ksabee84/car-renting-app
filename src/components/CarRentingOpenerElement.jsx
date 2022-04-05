import React, { useState } from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import '../pages/car-renting/car-renting.css';

const CarRentingOpenerElement = () => {
     return(
        <Container fixed maxWidth="md" className='welcomeTextContainer'>
            <Typography color='text.secondary' variant='h6' marginTop='80px' marginBottom='50px' className='welcomeText'>
                <h2 className='header'>Welcome!</h2>
                <p className='text'>If you are interested in unique cars and driving, this is your place!</p>
                <p className='text'>Our firm is committed to bring you some special experience.</p>
                <p className='text'>We offer you some exclusive beauties you can rent for one or even more days!</p>
                <p className='text'>Don't hesitate, explore our heritage and sports car palette!</p> 
            </Typography>
        </Container>
    );
}

export default CarRentingOpenerElement;