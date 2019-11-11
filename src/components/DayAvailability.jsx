import React from 'react';

const DayAvailability = () => {
  function handleClick(e) {
    e.preventDefault();
    const dayAvailabilityContainer = document.querySelector('.day-availability');
    const bookingConfirmationContainer = document.getElementById('booking-confirmation');
    dayAvailabilityContainer.classList.remove('active');
    bookingConfirmationContainer.classList.add('active');
  }

  return (
    <div className='day-availability active'>
      <h2>
        <i className='far fa-calendar-alt'> </i>
        Disponibilidad
      </h2>

      <div className='day-availability__calendar'>
        <header>
          <h5 className='day-availability__date'>Jueves 31 de Octubre del 2019</h5>
          <div className='prev'><i className='fas fa-chevron-left'> </i></div>
          <div className='next'><i className='fas fa-chevron-right'> </i></div>
        </header>

        <a href='/#' className='day-availability__hour not-available'>
          <div className='day-availability__time'>
            <time dateTime='9:00'>9:00 A.M.</time>
          </div>
          <div className='day-availability__booking'>
            Horario Reservado
          </div>
        </a>
        <a href='/#' className='day-availability__hour available' onClick={(e) => handleClick(e)}>
          <div className='day-availability__time'>
            <time dateTime='10:00'>10:00 A.M.</time>
          </div>
          <div className='day-availability__booking'> </div>
        </a>
        <a href='/#' className='day-availability__hour available' onClick={(e) => handleClick(e)}>
          <div className='day-availability__time'>
            <time dateTime='11:00'>11:00 A.M.</time>
          </div>
          <div className='day-availability__booking'> </div>
        </a>
        <a href='/#' className='day-availability__hour available' onClick={(e) => handleClick(e)}>
          <div className='day-availability__time'>
            <time dateTime='12:00'>12:00 P.M.</time>
          </div>
          <div className='day-availability__booking'> </div>
        </a>
        <a href='/#' className='day-availability__hour booked'>
          <div className='day-availability__time'>
            <time dateTime='13:00'>13:00 P.M.</time>
          </div>
          <div className='day-availability__booking'>
            Reservado para Morita
            <span>Ver Detalles</span>
          </div>
        </a>
        <a href='/#' className='day-availability__hour available' onClick={(e) => handleClick(e)}>
          <div className='day-availability__time'>
            <time dateTime='14:00'>14:00 P.M.</time>
          </div>
          <div className='day-availability__booking'> </div>
        </a>
        <a href='/#' className='day-availability__hour available' onClick={(e) => handleClick(e)}>
          <div className='day-availability__time'>
            <time dateTime='15:00'>15:00P.M.</time>
          </div>
          <div className='day-availability__booking'> </div>
        </a>
        <a href='/#' className='day-availability__hour available' onClick={(e) => handleClick(e)}>
          <div className='day-availability__time'>
            <time dateTime='16:00'>16:00P.M.</time>
          </div>
          <div className='day-availability__booking'> </div>
        </a>
        <a href='/#' className='day-availability__hour available' onClick={(e) => handleClick(e)}>
          <div className='day-availability__time'>
            <time dateTime='17:00'>17:00P.M.</time>
          </div>
          <div className='day-availability__booking'> </div>
        </a>
        <a href='/#' className='day-availability__hour available' onClick={(e) => handleClick(e)}>
          <div className='day-availability__time'>
            <time dateTime='18:00'>18:00P.M.</time>
          </div>
          <div className='day-availability__booking'> </div>
        </a>
        <a href='/#' className='day-availability__hour available' onClick={(e) => handleClick(e)}>
          <div className='day-availability__time'>
            <time dateTime='19:00'>19:00P.M.</time>
          </div>
          <div className='day-availability__booking'> </div>
        </a>
        <a href='/#' className='day-availability__hour available' onClick={(e) => handleClick(e)}>
          <div className='day-availability__time'>
            <time dateTime='20:00'>20:00P.M.</time>
          </div>
          <div className='day-availability__booking'> </div>
        </a>
      </div>
    </div>
  );
};

export default DayAvailability;
