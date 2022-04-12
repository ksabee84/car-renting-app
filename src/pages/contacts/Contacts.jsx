import React from "react";
import Container from '@mui/material/Container';
import CarRentingMenuElement from "../../components/CarRentingMenuElement";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import './contacts.css';

const Contacts = () => {

    return(
        <Container className='contactsDiv'>
            <CarRentingMenuElement />

            <Typography variant='h4' color='text.secondary' component='div' className='contactsText'>
                Contact us using the following platforms!
            </Typography>

            <div className='contactLinks'>
                <Button className='contactButton'
                    size='large'
                    variant='outlined'>
                    <Link href='https://facebook.com' rel='nofollow noopener' underline='none' target='_blank'>
                        Facebook
                    </Link>
                </Button>
                <Button className='contactButton'
                    size='large'
                    variant='outlined'>
                    <Link href='https://instagram.com' rel='nofollow noopener' underline='none' target='_blank'>
                        Instagram
                    </Link>
                </Button>
                <Button className='contactButton'
                    size='large'
                    variant='outlined'>
                    <Link mailto='mailto:carrenting@gmail.com' underline='none'>
                        Write an e-mail
                    </Link>
                </Button>

            </div>
        </Container>
    );

};

export default Contacts;