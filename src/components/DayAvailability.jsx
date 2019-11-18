import React from 'react';
import { connect } from 'react-redux';
import { bookingTime } from '../actions/index';

const DayAvailability = (props) => {
  const { currentSalon, handleNext, handlePrev, weekDays, months } = props;

  function handleBookingTime(time) {
    props.bookingTime(time);
  }

  function handleClick(e) {
    e.preventDefault();
    const dayAvailabilityContainer = document.querySelector('.day-availability');
    const bookingConfirmationContainer = document.getElementById('booking-confirmation');
    dayAvailabilityContainer.classList.remove('active');
    bookingConfirmationContainer.classList.add('active');

    const timeElement = e.target.querySelector('time').getAttribute('dateTime');
    handleBookingTime(timeElement);
  }

  function handleDate(date) {
    const setDate = new Date(date);
    const year = setDate.getFullYear();
    const month = setDate.getMonth();
    const day = setDate.getDate();
    const weekDay = setDate.getDay();
    const fullDate = `${weekDays[weekDay]}, ${day} de ${months[month]} de ${year}`;
    return fullDate;
  }

  return (
    <div className='day-availability active'>
      <h2>
        <i className='far fa-calendar-alt'> </i>
        Disponibilidad
      </h2>

      <div className='day-availability__calendar'>
        <header>
          <h5 className='day-availability__date'>{handleDate(currentSalon.selectedDate)}</h5>
          <button type='button' onClick={handlePrev} className='prev'><i className='fas fa-chevron-left'> </i></button>
          <button type='button' onClick={handleNext} className='next'><i className='fas fa-chevron-right'> </i></button>
        </header>

        <a href='/#' className='day-availability__hour not-available'>
          <div className='day-availability__time'>
            <time dateTime='09:00'>9:00 A.M.</time>
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

const mapStateToProps = (state) => {
  return {
    currentSalon: state.currentSalon,
  };
};

const mapDispatchToProps = {
  bookingTime,
};

export default connect(mapStateToProps, mapDispatchToProps)(DayAvailability);
