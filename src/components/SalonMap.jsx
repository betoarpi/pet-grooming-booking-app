import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import '../assets/styles/sass/components/Salon.scss';
import '../assets/styles/sass/components/Gallery.scss';

const SalonMap = ({ google }) => {
  return (
    <div className='salon-details__map'>
      <Map google={google} zoom={18} initialCenter={{ lat: 20.5847688, lng: -100.3834763 }} />
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDXggG-qWHEkHndlWzYbsq6vrVgy9i2Cf4',
})(SalonMap);
