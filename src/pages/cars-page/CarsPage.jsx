import React from 'react';
import Container from '@mui/material/Container';
import CarRentingMenuElement from '../../components/CarRentingMenuElement';
import RentingCardElement from '../../components/RentingCardElement';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './cars-page.css';

const CarsPage = () => {

    return (
        <Container className="carsPage">
            <CarRentingMenuElement />
            <Button class='buttonToAdmin'
                size='small'
                variant='outlined'
            >
                <Link to='/admin' className='linkToAdmin'>
                    Admin Interface
                </Link>  
            </Button>
            
            <RentingCardElement />
        </Container>
    )

}

export default CarsPage;