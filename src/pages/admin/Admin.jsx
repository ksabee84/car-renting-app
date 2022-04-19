import React, { useState, useEffect } from "react";
import CarRentingMenuElement from "../../components/CarRentingMenuElement";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import EditableTable from '../../components/EditableTable';
import { DataGrid } from '@mui/x-data-grid';
import './admin.css';

const AdminInterface = () => {

    const [rentableCars, setRentableCars] = useState([]);
    const [selectedCar, setSelectedCar] = useState({});
    const [isRenderDetail, setIsRenderDetail] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [container, setContainer] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const customEventType = 'errorOccured';

    /*
    useEffect(() => {
        setContainer(document.getElementById('editableTable'));
        container && container.addEventListener(customEventType, (e) => {
            setErrorMessage(e.detail.errorMessage);
        }, {});
        selectedCar.id && setIsRenderDetail(true);
    }, [container, selectedCar]);
    */

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
                console.log('error message: ', error);
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
            console.log('response is: ', response);

        if(response.status === 200) {
            const car = rentableCars.find((car) => car.id === parseInt(carId));
            const index = rentableCars.indexOf(car);
            const newCarArray = [...rentableCars];
            newCarArray.splice(index, 1);
            setRentableCars(newCarArray);
        }
    };

    const [numberOfRows, setNumberOfRows] = useState(6);
    
    const addNewCar = () => {
        setNumberOfRows((x) => Math.min(100, x + 1));
        console.log('adding message');

        return(
            <div style={{ width: '100%' }}>
                <DataGrid autoHeight {...EditableTable} rows={EditableTable.rows.slice(0, numberOfRows)} />
            </div>
        );
    }

    /*
    const handleItemClick = (event, index) => {
        getCarById(index);
    }
    */

    const detailedRendering = () => {
        if(selectedCar) {
            return (
                <EditableTable
                rows={rentableCars}
                edit={editSaved}
                deleteElement={(e, params) => deleteCar(params.id)}
                />)
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
                    onClick={ fetchCars }>
                        Show All Cars
                </Button>

                <Button
                    className='carDataButtons'
                    size='big'
                    variant='contained'
                    onClick={ addNewCar }
                    >
                        Add New Car
                </Button>
                <Button
                    className='carDataButtons'
                    size='big'
                    variant='contained'
                    onClick={ editSaved }
                    >
                        Save Car Data
                </Button>
            </Container>
            { 
                isRenderDetail && detailedRendering()
            }
            <EditableTable
                rows={rentableCars}
                edit={editSaved}
                deleteElement={(e, params) => deleteCar(params.id).then( () => {fetchCars()})}
                id='editableTable'/>
        </div>
    );
};

export default AdminInterface;