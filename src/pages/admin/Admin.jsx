import React, { useState } from "react";
import Button from '@mui/material/Button';
import EditableTable from '../../components/EditableTable';
import './admin.css';
// import Box from '@mui/material/Box';
// import RentingCardElement from '../../components/RentingCardElement';
// import List from '@mui/material/List';
// import { ListItemButton, ListItemText } from "@mui/material";


/*
        <Box sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}>
            <List component='nav' aria-label="main mailbox folders">
                {
                    rentableCars.length > 0 && rentableCars.map((car) => (
                        <ListItemButton
                        selected={selectedIndex === car.id}
                        key={car.carName}
                        >
                            <ListItemText primary={car.carName} key={car.carName} />
                        </ListItemButton>
                    ))
                }
            </List>
                { selectedIndex 
                && <RentingCardElement
                    {...car(selectedIndex)}
                    />
                }
        </Box>
    */

const AdminInterface = () => {

    const [rentableCars, setRentableCars] = useState([]);
    const [selectedCar, setSelectedCar] = useState({});
    const [selectedIndex, setSelectedIndex] = useState();

    const fetchCars = () => {
        fetch('http://localhost:8080/api/v1/car-renting/cars')
        .then((result) => result.json())
        .then((data) => setRentableCars(data))
        .catch((error) => {
            console.log('error message', error);
        });
        
    };

   //  setTimeout(() => console.log('itt kijön a tömb: ', rentableCars), 1000);

    const car = (id) => {
        fetch(`http://localhost:8080/api/v1/car-renting/cars/${id}`)
            .then((result) => result.status === 200 ? result.json() : console.log('Error'))
            .then((data) => {
                setSelectedCar(data);
                setSelectedIndex(selectedCar.id);
            })
            .catch((error) => {
                console.log('error message', error);
            });
    };

    const handleItemClick = (event, index) => {
        car(index);
    }

    return(
        <div className='adminDiv'>
            <Button
                className='showCarsButton'
                size='large'
                variant='contained'
                onClick={fetchCars}>
                    Show All Cars
            </Button>
            <EditableTable rows={rentableCars}/>
            <Button>

            </Button>
        
           
        </div>
    );
};


export default AdminInterface;