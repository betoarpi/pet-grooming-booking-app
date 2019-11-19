import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/sass/views/_register.scss';

const Register = () => (
  <section className='register'>
    <div className='register__container'>
      <div className='register__left'>
        <h3 className='register__title'>
          Regístrate
        </h3>
        <div className='register__input-group'>
          <label className='register__label'>Nombre de Usuario</label>
          <input type='text' name='username' />
        </div>
        <div className='register__input-group'>
          <label className='register__label'>Correo electrónico</label>
          <input type='email' name='email' />
        </div>
        <div className='register__input-group'>
          <label className='register__label'>Contraseña</label>
          <input type='password' name='password' />
        </div>
        <div className='register__social-buttons'>
          <div className='register__facebook-button'>
            <i className='fab fa-facebook-f facebook__icon'></i>
            <span className='facebook__title'>facebook</span>
          </div>
          <div className='register__google-button'>
            <i className='fab fa-google google__icon'></i>
            <span className='google__title'>google</span>
          </div>
        </div>
        <div className='register__submit'>
          <button type='submit'>Continuar</button>
        </div>
        <div className="register__login">
          <Link to='/login'>¿Ya tienes una cuenta? Inicia sesión</Link>
        </div>
      </div>
      <div className='register__right'>
        <h3 className="register__welcome">
          Bienvenido
        </h3>
        <div className="register__divider" />
      </div>
    </div>
  </section>
);

export default Register;