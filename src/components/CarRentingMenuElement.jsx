import React from "react";
import Container from '@mui/material/Container';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import '../pages/car-renting/car-renting.css';

const CarRentingMenuElement = () => {

    return(
        <Container className='buttonGroupContainer'>
            <ButtonGroup variant="contained" aria-label="outlined primary button group" className='buttonGroup'>
                <Button size="big" className='linkButton'>
                    <Link to='/home' className='link'>Home</Link>
                </Button>
                <Button size="big" className='linkButton'>
                    <Link to='/car-renting' className='link'>Car Renting</Link>
                </Button>
                <Button size="big" className='linkButton'>
                    <Link to='/contacts' className='link'>Contact Us</Link>
                </Button>
            </ButtonGroup>
        </Container>
    )   
}

export default CarRentingMenuElement;