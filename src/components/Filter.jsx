import React from 'react';
import '../assets/styles/sass/components/Filter.scss';

const Filter = () => {
  return (
    <div id='filter' className='groomers-filter'>
      <form action='' className='groomers-filter__form'>
        <div>
          <span>
            Nombre
          </span>
          <input type='text' name='name' id='name' />
        </div>
        <div>
          <span>
            Ciudad
          </span>
          <input type='text' name='city' id='city' />
        </div>
        <div>
          <span>
            Mascota
          </span>
          <select name='pet' id='pet'>
            <option value='none'>Selecciona una opción</option>
            <option value='dog'>Perro</option>
            <option value='cat'>Gato</option>
          </select>
        </div>
        <button type='submit'>
          Buscar estética
          <i className='fas fa-paw'> </i>
        </button>
      </form>
    </div>
  );
};

export default Filter;
