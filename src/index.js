import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import CarRenting from './pages/car-renting/CarRenting';
import RentingDetails from "./pages/renting-details/RentingDetails";
import CarsPage from './pages/cars-page/CarsPage';
import Contacts from './pages/contacts/Contacts';

const setBackgroundForWebsite = () => {
  const element = document.getElementById('root');
  element.style.boxSizing = 'border-box';
  element.style.backgroundSize = 'contain';
  element.style.backgroundColor = '#ededed';
  element.style.margin = '0px';
};

setBackgroundForWebsite();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/car-renting' element={<CarRenting />} />
              <Route path='/cars-page' element={<CarsPage />}  />
              <Route path='/renting-details' element={<RentingDetails/>} />
              <Route path='/contacts' element={<Contacts />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
