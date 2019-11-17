/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/sass/views/_login.scss';

const Login = () => {
  const [fomrValues, setFormValues] = useState({
    email: ' ',
    password: ' ',
  });

  const handleInput = event => {
    setFormValues({
      ...fomrValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(fomrValues);
  };

  return (
    <section className='login'>
      <div className='login__container'>
        <form className='login__left' onSubmit={handleSubmit}>
          <h3 className='login__title'>
            Inicia Sesión
          </h3>
          <div className='login__input-group'>
            <label className='login__label'>Nombre de Usuario</label>
            <input type='email' name='email' onChange={handleInput} />
          </div>
          <div className='login__input-group'>
            <label className='login__label'>Contraseña</label>
            <input type='password' name='password' onChange={handleInput} />
          </div>
          <div className='login__actions'>
            <div className='login__rememberme'>
              <input type='checkbox' />
              <span>Recuérdame</span>
            </div>
            <span>Olvidaste tu contraseña?</span>
          </div>
          <div className='login__social-buttons'>
            <div className='login__facebook-button'>
              <i className='fab fa-facebook-f facebook__icon'> </i>
              <span className='facebook__title'>facebook</span>
            </div>
            <div className='login__google-button'>
              <i className='fab fa-google google__icon'> </i>
              <span className='google__title'>google</span>
            </div>
          </div>
          <div className='login__submit'>
            <button type='submit'>Continuar</button>
          </div>
          <div className='login__register'>
            <Link to='/register'>¿No tienes cuenta? Regístrate</Link>
          </div>
        </form>
        <div className='login__right'>
          <h3 className='login__welcome'>
            Bienvenido
          </h3>
          <div className='login__divider' />
        </div>
      </div>
    </section>
  );
};

export default Login;
