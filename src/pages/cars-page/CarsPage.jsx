import React from 'react';
import CarRentingMenuElement from '../../components/CarRentingMenuElement';
import RentingCardElement from '../../components/RentingCardElement';
import Container from '@mui/material/Container';
import './cars-page.css';

const CarsPage = () => {

    return (
        <Container className="carsPage">
            <CarRentingMenuElement />
            
            <RentingCardElement />
        </Container>
    )

}

export default CarsPage;