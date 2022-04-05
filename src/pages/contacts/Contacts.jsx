import React from "react";
import Container from '@mui/material/Container';
import CarRentingMenuElement from "../../components/CarRentingMenuElement";
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import './contacts.css';

const Contacts = () => {

    return(
        <Container className='contactsDiv'>
            <CarRentingMenuElement />
            <h1>Contact us using the following platforms!</h1>
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
                    <Link mailTo='carrenting@gmail.com' underline='none'>
                        Write an e-mail
                    </Link>
                </Button>

            </div>
        </Container>
    );

};

export default Contacts;