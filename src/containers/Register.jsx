/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerRequest } from '../actions/index';
import '../assets/styles/sass/views/_register.scss';

const Register = (props) => {
  const [formValues, setFormValues] = useState({
    username: ' ',
    email: ' ',
    password: ' ',
  });
  const handleInput = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(formValues);
    props.history.push('/');
  };

  return (
    <section className='register'>
      <div className='register__container'>
        <form className='register__left' onSubmit={handleSubmit}>
          <h3 className='register__title'>
            Regístrate
          </h3>
          <div className='register__input-group'>
            <label className='register__label'>Nombre de Usuario</label>
            <input type='text' name='username' onChange={handleInput} />
          </div>
          <div className='register__input-group'>
            <label className='register__label'>Correo electrónico</label>
            <input type='email' name='email' onChange={handleInput} />
          </div>
          <div className='register__input-group'>
            <label className='register__label'>Contraseña</label>
            <input type='password' name='password' onChange={handleInput} />
          </div>
          <div className='register__social-buttons'>
            <div className='register__facebook-button'>
              <i className='fab fa-facebook-f facebook__icon'> </i>
              <span className='facebook__title'>facebook</span>
            </div>
            <div className='register__google-button'>
              <i className='fab fa-google google__icon'> </i>
              <span className='google__title'>google</span>
            </div>
          </div>
          <div className='register__submit'>
            <button type='submit'>Continuar</button>
          </div>
          <div className='register__login'>
            <Link to='/login'>¿Ya tienes una cuenta? Inicia sesión</Link>
          </div>
        </form>
        <div className='register__right'>
          <h3 className='register__welcome'>
            Bienvenido
          </h3>
          <div className='register__divider' />
        </div>
      </div>
    </section>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
