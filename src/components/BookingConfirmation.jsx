import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bookingRequest } from '../actions/index';

const BookingConfirmation = (props) => {
  const { currentSalon, weekDays, months, bookingTime, user } = props;
  const hasUser = Object.keys(user).length > 0;
  const [cost, setCost] = useState('00');
  const [formValues, setFormValues] = useState({
    storeId: currentSalon.id,
    clientId: null,
    date: currentSalon.selectedDate,
    time: bookingTime,
    petType: 'dog',
    petName: null,
    petBreed: null,
    bath: 'no',
    haircut: 'no',
    teethBrush: 'no',
    fleaControl: 'no',
    specialHaircut: 'no',
    notes: null,
    totalCost: null,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    /* const bookingConfirmationContainer = document.getElementById('booking-confirmation');
    const bookingSuccessContainer = document.getElementById('booking-success');
    bookingConfirmationContainer.classList.remove('active');
    bookingSuccessContainer.classList.add('active'); */
    setFormValues({
      ...formValues,
      time: bookingTime,
      totalCost: cost,
    });
    props.bookingRequest(formValues);
  };

  const handleDay = (date) => {
    const setDate = new Date(date);
    const weekDay = setDate.getDay();
    const renderedDay = `${weekDays[weekDay]}`;
    return renderedDay;
  };

  const handleDateFormat = (date) => {
    const setDate = new Date(date);
    const month = setDate.getMonth();
    const day = setDate.getDate();
    const dateFormat = `${day} de ${months[month]}`;
    return dateFormat;
  };

  const handleAMPM = (time) => {
    const givenTime = time.substring(0, 2);
    let AMPM;
    switch (givenTime) {
      case '09':
        AMPM = 'A.M';
        break;
      case '10':
        AMPM = 'A.M';
        break;
      case '11':
        AMPM = 'A.M';
        break;
      default:
        AMPM = 'P.M';
        break;
    }
    return AMPM;
  };

  const handleInput = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleChecked = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.checked ? 'yes' : 'no',
    });
    setCost(parseFloat(cost) + parseFloat(event.target.checked ? event.target.value : -event.target.value));
  };

  const handleNotes = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form className='booking-confirmation' id='booking-confirmation' onSubmit={handleSubmit}>
      <h4 className='booking-confirmation__title'>Confirma tu Servicio</h4>

      <div className='booking-confirmation__container'>
        <header>
          <i className='far fa-calendar-alt'> </i>
          <h2 className='booking-confirmation__date'>
            <span className='day'>{handleDay(currentSalon.selectedDate)}</span>
            <span className='date'>{handleDateFormat(currentSalon.selectedDate)}</span>
          </h2>
          <time dateTime={bookingTime}>
            {bookingTime}
            {' '}
            {handleAMPM(bookingTime)}
            <input type='text' name='time' id='time' hidden value={bookingTime} onChange={handleInput} />
          </time>
        </header>

        <div action='' className='booking-confirmation__form'>
          <div className='booking-confirmation__pet-type'>
            <h6>Selecciona a tu tipo de mascota:</h6>
            <i className='fas fa-dog'> </i>
            <select name='petType' id='pet-type' onChange={handleInput}>
              <option value='dog'>
                Perro
              </option>
              <option value='cat'>
                Gato
              </option>
            </select>
          </div>

          <div className='booking-confirmation__pet-info'>
            <label htmlFor='pet-name'>
              <span>Nombre de tu mascota</span>
              <input name='petName' type='text' onChange={handleInput} required />
            </label>

            <label htmlFor='pet-breed'>
              <span>Raza</span>
              <select name='petBreed' id='pet-breed' onChange={handleInput} required>
                <option value='no-option-selected'>
                  -
                </option>
                <option value='small-breed'>
                  Raza Chica
                </option>
                <option value='medium-breed'>
                  Raza Mediana
                </option>
                <option value='big-breed'>
                  Raza Grande
                </option>
              </select>
            </label>
          </div>

          <div className='booking-confirmation__services'>
            <h6>Selecciona los Servicios de Grooming para tu mascota:</h6>
            <div className='booking-confirmation__services__checkboxes'>
              <div className='col'>
                <label htmlFor='bath'>
                  <span>
                    <input type='checkbox' name='bath' id='bath' value='150' onChange={handleChecked} />
                    <i className='far fa-square'> </i>
                  </span>
                  Baño
                </label>
                <label htmlFor='haircut'>
                  <span>
                    <input type='checkbox' name='haircut' id='haircut' value='120' onChange={handleChecked} />
                    <i className='far fa-square'> </i>
                  </span>
                  Corte
                </label>
                <label htmlFor='teeth-brush'>
                  <span>
                    <input type='checkbox' name='teethBrush' id='teeth-brush' value='60' onChange={handleChecked} />
                    <i className='far fa-square'> </i>
                  </span>
                  Limpieza Dental
                </label>
              </div>
              <div className='col'>
                <label htmlFor='flea-control'>
                  <span>
                    <input type='checkbox' name='fleaControl' id='flea-control' value='30' onChange={handleChecked} />
                    <i className='far fa-square'> </i>
                  </span>
                  Anti-Pulgas
                </label>
                <label htmlFor='special-haircut'>
                  <span>
                    <input type='checkbox' name='specialHaircut' id='special-haircut' value='300' onChange={handleChecked} />
                    <i className='far fa-square'> </i>
                  </span>
                  Corte para Concurso
                </label>
              </div>
            </div>
          </div>

          <div className='booking-confirmation__notes'>
            <label htmlFor='notes'>
              <h6>Notas para el groomer:</h6>
              <textarea name='notes' id='notes' cols='30' rows='10' onChange={handleNotes} placeholder='Escribe alguna nota para la persona que atenderá tu mascota' />
            </label>
          </div>

          <div className='booking-confirmation__submit'>
            <span className='price'>
              Costo: $
              {cost}
              {' '}
              MXN
            </span>
            <input type='text' name='totalCost' id='total-cost' value={cost} onChange={handleInput} hidden />
            {hasUser ?
              (
                <button type='submit' className='btn btn--dark'>
                  Confirmar y Reservar
                </button>
              ) : <Link to='/login' className='btn--dark'>Confirmar y Reservar</Link>}
          </div>
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    currentSalon: state.currentSalon,
    bookingTime: state.bookingTime,
    bookingInfo: state.bookingInfo,
  };
};

const mapDispatchToProps = {
  bookingRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingConfirmation);
