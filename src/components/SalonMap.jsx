import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const SalonMap = ({ google, children, lng, lat }) => {
  return (
    <div className='salon-details__map'>
      <Map
        google={google}
        zoom={18}
        initialCenter={{ lat: 20.5847688, lng: -100.3834763 }}
      >
        <Marker position={{ lat: { lat }, lng: { lng } }} />
      </Map>
      {children}
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAYV6wpQFvHhrKMH294QNDZC2rHKHKMW9U',
})(SalonMap);
