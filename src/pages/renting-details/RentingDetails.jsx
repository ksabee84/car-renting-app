import React from 'react';
import CarRentingMenuElement from '../../components/CarRentingMenuElement';
import StepperElement from '../../components/StepperElement';
import RegistrationFormElement from '../../components/RegistrationFormElement';
import './renting-details.css';

const RentingDetails = () => {

    return(
        <div className='formDiv'>
            <CarRentingMenuElement />

            <StepperElement />

            <div className='registrationForm'>
                <RegistrationFormElement />
            </div>
        </div>
    );
}

export default RentingDetails;