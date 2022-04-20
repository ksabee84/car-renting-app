import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import axios from 'axios';

const RentingCardElement = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [rentableCarsData, setRentableCarsData] = useState([]);

  const fetchCars = () => {
        fetch('http://localhost:8080/api/v1/car-renting/cars')
        .then((result) => result.json())
        .then((data) => setRentableCarsData(data))
        .catch((error) => {
            console.log('Data cannot be loaded: ', error);
        });
        
      // axios.get('http://localhost:8080/api/v1/car-renting/cars').then((result) => console.log('result', result));
  };

  fetchCars();

  // setTimeout(() => console.log('cars', rentableCars), 5000);

  const car = (id) => {
      rentableCarsData.find((car) => car.id === parseInt(id));
  };

  const handleItemClick = (event, index) => {
      setSelectedIndex(index);
      console.log(car.id);
  };

    return (
        <div className="carsDiv">
        {
        rentableCarsData.length > 0 ? rentableCarsData.map((car) => (
          !car.isRented &&
          <Card className="card" >
            <CardMedia
              component="img"
              alt={car.imgAlt}
              height="auto"
              image={car.imgUrl}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" key={car.carBrandAndModel}>
                { car.carName } 
              </Typography>
              <Typography variant="body2" color="text.secondary">
                { car.imgText }
              </Typography>
            </CardContent>
            <Accordion className='specs'>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Typography variant="button">
                  Specifications
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">
                  <p>Car Model: { car.carBrandAndModel }</p>
                  <p>Model Year: { car.modelYear }</p>
                  <p>Color: { car.color }</p>
                  <p>Engine: { car.engine }</p>
                  <p>VIN: { car.VIN }</p>
                  <p>Renting Price: { car.rentingPrice } €/day</p>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <CardActions className='carsCardActions'>
              <Button
                size='large'
                variant='contained'
                className='carsButton'
                selected={selectedIndex === parseInt(car.id)}
                onClick={(e) => handleItemClick(e, car.id)}
                key={car.carName}>
                <Link to='/renting-details' className='linkToRegister'>
                  Rent this car
                </Link>
              </Button>
            </CardActions>
          </Card>
          ))
      : console.log('No data', rentableCarsData)
      }
    </div>
  )
}

RentingCardElement.propTypes = {
  
}

export default RentingCardElement;