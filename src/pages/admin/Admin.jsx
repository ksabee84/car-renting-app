import React, { useState, useEffect } from "react";
import CarRentingMenuElement from "../../components/CarRentingMenuElement";
import Container from '@mui/material/Container';
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
    const [container, setContainer] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const customEventType = 'errorOccured';

    useEffect(() => {
        setContainer(document.getElementById('editableTable'));
        container && container.addEventListener(customEventType, (e) => {
            setErrorMessage(e.detail.errorMessage);
        }, {});
    }, [container]);

    const fetchCars = () => {
        fetch('http://localhost:8080/api/v1/car-renting/cars')
        .then((result) => result.json())
        .then((data) => setRentableCars(data))
        .catch((error) => {
            console.log('Data cannot be loaded :', error);
        });
        
    };

   //  setTimeout(() => console.log('itt kijön a tömb: ', rentableCars), 1000);

    const getCarById = (id) => {
        fetch(`http://localhost:8080/api/v1/car-renting/cars/${id}`)
            .then((result) => result.status === 200 ? result.json() : result.text())
            .then((data) => {
                const result = !typeof data === 'object' && JSON.parse(data);
                if(result.message) {
                    container.dispatchEvent(
                        new CustomEvent(customEventType, { detail: {
                            errorMessage: result.message,
                            wasSuccess: false,
                        }}));
                } else {
                setSelectedCar(data);
            }
        })
            .catch((error) => {
                console.log('error message', error);
            });
    };


    const updateCarData = async (body, id) => {
        const response = await fetch(`http://localhost:8080/api/v1/car-renting/cars/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        });
    };
    
    const deleteCar = async (carId) => {
        const response = await fetch(`http://localhost:8080/api/v1/car-renting/cars/${carId}`, {
            method: 'DELETE',
            });

        if(response.status === '200') {
            const car = rentableCars.find((car) => car.id === carId);
            const index = rentableCars.indexOf(rentableCars);
            const newCarArray = rentableCars.splice(index, 0);
            setRentableCars(newCarArray);
        }
    };


    const addNewCar = () => {

    };

    const handleItemClick = (index) => {
        getCarById(index);
    }

    const detailedRendering = () => {
        if(selectedCar) {
            return (
                <EditableTable
                rows={(rentableCars)}
                edit={editSaved}
                deleteElement={(e, params) => deleteCar(params.id)} />)
        }
    }

    const editSaved = (valueChange) => {
        const rentableCarsKeys = Object.keys(rentableCars);
        
        const requestBody = {
            [valueChange.field]: valueChange.value,
        };
        updateCarData(requestBody, valueChange.id);
        
        console.log('clicked', valueChange.id, valueChange.value);
        console.log('enter', valueChange.field, valueChange.value);
    }
    
    return(
        <div className='adminDiv'>
            <CarRentingMenuElement />
            
            <Container className='buttonsContainer'>
                <Button
                    className='carDataButtons'
                    size='big'
                    variant='contained'
                    onClick={fetchCars}>
                        Show All Cars
                </Button>
                <Button
                    className='carDataButtons'
                    size='big'
                    variant='contained'
                    >
                        Delete Car
                </Button>
                <Button
                    className='carDataButtons'
                    size='big'
                    variant='contained'
                    onClick={addNewCar}
                    >
                        Add New Car
                </Button>
                <Button
                    className='carDataButtons'
                    size='big'
                    variant='contained'
                    onClick={editSaved}
                    >
                        Save Car Data
                </Button>
            </Container>

            <EditableTable
                rows={rentableCars}
                edit={editSaved}
                deleteElement={(e, params) => console.log('params id: ', params.id)}
                id='editableTable'/>
            
        </div>
    );
};


export default AdminInterface;