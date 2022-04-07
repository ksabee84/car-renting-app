import React, { useEffect, useState } from 'react';
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
  
  let rentableCars = [];

  const fetchCars = () => {
        fetch('http://localhost:8080/api/v1/car-renting/cars')
        .then((result) => result.json())
        .then((data) => console.log('data', data))
        .catch((error) => {
            console.log('error message', error);
        });
        

      // axios.get('http://localhost:8080/api/v1/car-renting/cars').then((result) => console.log('result', result));
  };

  setTimeout(() => console.log('cars', rentableCars), 5000);

  useEffect(() => { 
    const rentableCars = [
    {
      id: 1,
      carName: 'Ford Mustang Mk1',
      carBrandAndModel: 'Ford Mustang Mk1',
      modelYear: '1965',
      color: 'red',
      engine: 'V8, 4736cc, 225hp',
      VIN: '5F09A250001',
      isRented: false,
      imgText: `D'ya like classic American cars? Ride this '65 Mk1 Mustang!`,
      imgUrl: '/img/mustang.jpg',
      imgAlt: 'A red 1965 Ford Mustang car',
      rentingPrice: 200
    },
    {
      id: 2,
      carName: 'Dodge Viper GTS',
      carBrandAndModel: 'Dodge Viper GTS (Mk2, SR II)',
      modelYear: '1996',
      color: 'red',
      engine: 'V10, 7994cc, 456hp',
      VIN: '1B3ED6BE5TV563423',
      isRented: false,
      imgText: `Wanna ride a real American V10 gasoline-eater beast? Don't hesitate, rent this red Viper now!`,
      imgUrl: '/img/vipergts.jpg',
      imgAlt: 'A red Dodge Viper GTS car',
      rentingPrice: 300
    },
    {
      id: 3,
      carName: 'Mercedes-Benz 560SEL',
      carBrandAndModel: 'Mercedes-Benz 560SEL (W126)',
      modelYear: '1989',
      color: 'black',
      engine: 'V8, 5547cc, 299hp',
      VIN: 'WDB1260391A522052',
      isRented: false,
      imgText: `German luxury and comfort at the top. Try driving a Mercedes limo!`,
      imgUrl: '/img/mercedes560sel.jpg',
      imgAlt: 'A black Mercedes limousine car',
      rentingPrice: 300
    },
    {
      id: 4,
      carName: 'Porsche 911 Turbo',
      carBrandAndModel: 'Porsche 911 Turbo (993)',
      modelYear: '1996',
      color: 'lightgrey',
      engine: 'boxer-6, 3600cc, 450hp',
      VIN: 'T99TS372094',
      isRented: false,
      imgText: `If you like Porsche cars, you cannot miss this beauty. Call for the 911!`,
      imgUrl: '/img/porsche911.jpg',
      imgAlt: 'A grey Porsche 911 car',
      rentingPrice: 300
    },
    {
      id: 5,
      carName: 'Alfa Romeo 1750 Spider',
      carBrandAndModel: 'Alfa Romeo 1750 Spider Veloce (Mk1, 105)',
      modelYear: '1969',
      color: 'grey',
      engine: 'inline-4, 1779cc, 116hp',
      VIN: 'AR147233',
      isRented: false,
      imgText: `Buongiorno! Wanna have a retro Italian feeling? Try this real classic '69 Alfa!`,
      imgUrl: '/img/alfaspider.jpg',
      imgAlt: 'A grey Alfa Romeo 1750 Spider car',
      rentingPrice: 200
    },
    {
      id: 6,
      carName: 'Trabant 601',
      carBrandAndModel: 'Trabant 601 S Limousine',
      modelYear: '1989',
      color: 'green',
      engine: 'inline-2, 594cc, 26hp',
      VIN: 'SNTN411STL9123456',
      isRented: true,
      imgText: `Retro experience from the former Eastern Bloc. Try this two-stroke legend, a common partner of the '70s & '80s!`,
      imgUrl: '/img/trabant601.JPG',
      imgAlt: 'A green Trabant 601 car',
      rentingPrice: 100
    }
  ];

    setRentableCarsData(rentableCars);
  }, [])

  const handleItemClick = (event, index) => {
      setSelectedIndex(index);
      console.log(car.id);
  }

  const car = (id) => (
      rentableCarsData.find((car) => car.id === id)
  );


    return (
        <div className="carsDiv">
        {
        rentableCarsData.length > 0 ? rentableCarsData.map((car, index) => (
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
            <CardActions className="carsCardActions">
              <Button
                size='large'
                variant='contained'
                className="carsButton"
                selected={selectedIndex === car.id}
                onClick={(event) => handleItemClick(event, car.id)}
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