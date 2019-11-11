import React from 'react';

const BookingSuccess = () => {
  return (
    <div className='booking-confirmation booking-confirmation--success' id='booking-success'>
      <h4 className='booking-confirmation__title'>¡Tu servicio está confirmado!</h4>

      <div className='booking-confirmation__container'>
        <header>
          <i className='far fa-calendar-alt'> </i>
          <h2 className='booking-confirmation__date'>
            <span className='day'>Jueves</span>
            <span className='date'>31 de Septiembre</span>
          </h2>
          <time dateTime='14:00'>14:00 P.M.</time>
        </header>

        <div className='booking-confirmation__details'>
          <div className='row'>
            <div className='col pet-info'>
              <div className='pet-info__avatar'>
                <i className='fas fa-dog'> </i>
              </div>
              <div className='pet-info__name'>
                <b>Nombre de tu perro: </b>
                <span>Morita</span>
              </div>
            </div>
            <div className='col salon-info'>
              <b>Nombre del establecimiento:</b>
              <span>
                Dirección del establecimiento #123, Colonia Nombre, C.P. 757575
              </span>
            </div>
          </div>
          <h4 className='booking-confirmation__details__title'>Detalles de la Reserva:</h4>
          <div className='row'>
            <div className='col services-info'>
              <b>Servicios:</b>
              <ul>
                <li>Baño</li>
                <li>Corte</li>
                <li>Limpieza Dental</li>
              </ul>
            </div>
            <div className='col services-notes'>
              <b>Comentarios</b>
              <span>
                No dejarle el pelo muy corto porque es muy friolenta.
              </span>
            </div>
          </div>
        </div>

        <div className='booking-confirmation__submit'>
          <span className='price'>
            Por pagar: $250.00 MXN
          </span>
          <a href='/#filter' className='btn btn--dark'>
            Agendar otro servicio
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess;
