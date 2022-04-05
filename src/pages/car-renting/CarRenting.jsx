import React from "react";
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import CarRentingMenuElement from "../../components/CarRentingMenuElement";
import CarRentingOpenerElement from "../../components/CarRentingOpenerElement";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './car-renting.css';

const CarRenting = () => (
    <Container className='carRenting'>
        <CssBaseline />
        
        <CarRentingMenuElement />
        
        <CarRentingOpenerElement />

        <Button
                size='large'
                variant='contained'
                className='buttonToCars'
            >
                <Link to='/cars-page' className='linkToCars'>
                    Click for our available cars!
                </Link>  
            </Button>
    </Container>   
);

CarRenting.propTypes = {

};

export default CarRenting;