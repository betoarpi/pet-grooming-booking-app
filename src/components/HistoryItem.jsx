import React from 'react';
import '../assets/styles/sass/components/HistoryItem.scss';

const HistoryItem = ({ reservation, details = false }) => (
  <div className='profile__history-wrapper'>
    <div className='profile__history-info'>
      <div className='profile__history-pet'>
        <div className='profile__history-pet-img-container'>
          <i className='fas fa-cat' />
        </div>
        <div className='profile__history-pet-info'>
          <div className='font-bold'>Mascota</div>
          <div className='profile__history-pet-name'>Garfield</div>
          <div className='profile__history-pet-type'>Gato</div>
        </div>
      </div>

      <span className='divider' />

      <div className='profile__history-salon'>
        <span className='font-bold'>Establishment name</span>
        <span>Service</span>
        <span>Service</span>
      </div>

      <span className='divider' />

      <div className='profile__history-dates'>
        <i className='far fa-calendar-alt' />
        <div className='profile__history-dates-info'>
          <span className='font-bold'>Fecha</span>
          <span>09 Sep 2019</span>
          <span>02:00 P.M.</span>
        </div>
        <div className='profile__history-dates-action'>
          <span>Detalles</span>
          <i className='fas fa-chevron-right'></i>
        </div>
      </div>
    </div>

    {details && (
      <div className='profile__history-details'>
        <div className='profile__history-details-headers'>
          <span>Detalles de la Reserva</span>
          <span>$150.00 MXN</span>
        </div>
        <div className='profile__history-details-info'>
          <div className='profile__history-services'>
            <span className='font-bold'>Servicios</span>
            <span>Servicio 1</span>
            <span>Servicio 2</span>
          </div>
          <span className='divider' />
          <div className='profile__history-comments'>
            <span className='font-bold'>Comments</span>
            <span>Some comments here</span>
          </div>
        </div>
      </div>
    )}
  </div>
);

export default HistoryItem;
