import React from 'react';
import CarRentingMenuElement from '../../components/CarRentingMenuElement';
import CarSelectElement from '../../components/CarSelectElement';
import RegistrationFormElement from '../../components/RegistrationFormElement';
// import StepperElement from '../../components/StepperElement';
import './renting-details.css';


const RentingDetails = () => {

    return(
        <div className='formDiv'>
            <CarRentingMenuElement />

            <CarSelectElement />

            <RegistrationFormElement />
        </div>
    );
}

export default RentingDetails;