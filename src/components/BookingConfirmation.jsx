import React from 'react';

const BookingConfirmation = () => {
  function handleClick(e) {
    e.preventDefault();
    const bookingConfirmationContainer = document.getElementById('booking-confirmation');
    const bookingSuccessContainer = document.getElementById('booking-success');
    bookingConfirmationContainer.classList.remove('active');
    bookingSuccessContainer.classList.add('active');
  }
  return (
    <div className='booking-confirmation' id='booking-confirmation'>
      <h4 className='booking-confirmation__title'>Confirma tu Servicio</h4>

      <div className='booking-confirmation__container'>
        <header>
          <i className='far fa-calendar-alt'> </i>
          <h2 className='booking-confirmation__date'>
            <span className='day'>Jueves</span>
            <span className='date'>31 de Septiembre</span>
          </h2>
          <time dateTime='14:00'>14:00 P.M.</time>
        </header>

        <form action='' className='booking-confirmation__form'>
          <div className='booking-confirmation__pet-type'>
            <h6>Selecciona a tu tipo de mascota:</h6>
            <i className='fas fa-dog'> </i>
            <select name='pet-type' id='pet-type'>
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
              <input name='pet-name' type='text' />
            </label>

            <label htmlFor='pet-breed'>
              <span>Raza</span>
              <select name='pet-breed' id='pet-breed'>
                <option value='big-breed'>
                  Raza Grande
                </option>
                <option value='medium-breed'>
                  Raza Mediana
                </option>
                <option value='small-breed'>
                  Raza Chica
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
                    <i className='fas fa-check-square'> </i>
                    <input type='checkbox' name='bath' id='bath' />
                  </span>
                  Baño
                </label>
                <label htmlFor='haircut'>
                  <span>
                    <i className='far fa-square'> </i>
                    <input type='checkbox' name='haircut' id='haircut' />
                  </span>
                  Corte
                </label>
                <label htmlFor='teeth-brush'>
                  <span>
                    <i className='far fa-square'> </i>
                    <input type='checkbox' name='teeth-brush' id='teeth-brush' />
                  </span>
                  Limpieza Dental
                </label>
              </div>
              <div className='col'>
                <label htmlFor='flea-control'>
                  <span>
                    <i className='far fa-square'> </i>
                    <input type='checkbox' name='flea-control' id='flea-control' />
                  </span>
                  Anti-Pulgas
                </label>
                <label htmlFor='special-haircut'>
                  <span>
                    <i className='far fa-square'> </i>
                    <input type='checkbox' name='special-haircut' id='special-haircut' />
                  </span>
                  Corte para Concurso
                </label>
              </div>
            </div>
          </div>

          <div className='booking-confirmation__notes'>
            <label htmlFor='notes'>
              <h6>Notas para el groomer:</h6>
              <textarea name='notes' id='notes' cols='30' rows='10' placeholder='Escribe alguna nota para la persona que atenderá tu mascota' />
            </label>
          </div>

          <div className='booking-confirmation__submit'>
            <span className='price'>
              Costo: $250.00 MXN
            </span>
            <button type='submit' className='btn btn--dark' onClick={(e) => handleClick(e)}>
              Agendar Servicio
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingConfirmation;
