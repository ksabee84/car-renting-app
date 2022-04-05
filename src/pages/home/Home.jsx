import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <div className="landingPageBaseDiv">
            <Card className="landingPageCard" sx={{ maxWidth: 640 }}>
                <CardMedia
                component="img"
                alt=""
                height="auto"
                image="/img/alfaspider.jpg"
                className="landingPageImg"
                />
                <CardContent className="landingPageCardContent">
                    <Typography gutterBottom variant='h3' component='div' className='title'>
                        Exclusive Car Renting
                    </Typography>
                    <Typography color='text.secondary' className='lead'>
                        <p>Do you like unique cars and driving?</p>
                        <p>You can do it with us! Rent your dream car now!</p>
                    </Typography>
                </CardContent>
                <CardActions className='landingPageCardActions'>
                    <Button size='large' variant='contained' className='linkButton'>
                        <Link to='/car-renting' className='link'>Click To Rent</Link>
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default Home;