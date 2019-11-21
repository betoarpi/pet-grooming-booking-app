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

      <div className='profile__history-salon'>
        <span className='font-bold'>Nombre del Establecimiento</span>
        <p>
          Dirección del establecimiento #123,
          <br />
          Colonia Nombre, C.P. 757575
        </p>
      </div>

      <div className='profile__history-dates'>
        {!details && <i className='far fa-calendar-alt' />}
        <div className='profile__history-dates-info'>
          <span className='font-bold'>Fecha</span>
          <span>09 Sep 2019</span>
          <span>02:00 P.M.</span>
        </div>
        {!details && (
          <div className='profile__history-dates-action'>
            <span>Detalles</span>
            <i className='fas fa-chevron-right'> </i>
          </div>
        )}
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
            <ul>
              <li>Servicio</li>
              <li>Servicio</li>
              <li>Servicio</li>
            </ul>
          </div>

          <div className='profile__history-notes'>
            <span className='font-bold'>Comments</span>
            <span>Some comments here</span>
          </div>
        </div>
      </div>
    )}
  </div>
);

export default HistoryItem;
