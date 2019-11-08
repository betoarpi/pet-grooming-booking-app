import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const SalonMap = ({ google, children }) => {
  return (
    <div className='salon-details__map'>
      <Map
        google={google}
        zoom={18}
        initialCenter={{ lat: 20.5847688, lng: -100.3834763 }}
      />
      {children}
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAvW5LdyKj_QPEn57wSrqUFIVM9TdPk_xs',
})(SalonMap);
