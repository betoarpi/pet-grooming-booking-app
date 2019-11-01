import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import '../assets/styles/sass/components/Salon.scss';
import '../assets/styles/sass/components/Gallery.scss';
import CalendarPlaceholder from '../assets/static/img/calendar-placeholder.jpg';

const SalonMap = ({ google }) => {
  return (
    <div className='salon-details__map'>
      <Map
        google={google}
        zoom={18}
        initialCenter={{ lat: 20.5847688, lng: -100.3834763 }}
      />
      <div className='availability'>
        <h5 className='availability__title'>Disponibilidad</h5>
        <img src={CalendarPlaceholder} alt='Calendar placeholder' />
      </div>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBvLWZ8AczyW_kcKg5hPa-N18vaNTUXkcA',
})(SalonMap);
