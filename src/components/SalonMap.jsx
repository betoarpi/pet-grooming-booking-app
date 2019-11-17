import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const SalonMap = ({ google, children, coords }) => {
  return (
    <div className='salon-details__map'>
      <Map
        google={google}
        zoom={18}
        initialCenter={{ ...coords, lat: coords.lat - 0.0011 }}
      >
        <Marker position={coords} />
      </Map>
      {children}
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAYV6wpQFvHhrKMH294QNDZC2rHKHKMW9U',
})(SalonMap);
