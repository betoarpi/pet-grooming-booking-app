import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import AvailabilityCalendar from './AvailabilityCalendar';

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
        <AvailabilityCalendar />
      </div>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAvW5LdyKj_QPEn57wSrqUFIVM9TdPk_xs',
})(SalonMap);
