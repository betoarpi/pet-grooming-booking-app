import React from 'react';
import '../assets/styles/sass/views/_register.scss';

const Register = () => (
  <section className='register'>
    <div className='register__container'>
      <div className='register__left'>
        <h3 className='register__title'>
          Sign Up
        </h3>
        <div className='register__input-group'>
          <label className='register__label'>Username</label>
          <input type='text' name='username'/>
        </div>
        <div className='register__input-group'>
          <label className='register__label'>Email</label>
          <input type='email' name='email'/>
        </div>
        <div className='register__input-group'>
          <label className='register__label'>Password</label>
          <input type='password' name='password'/>
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
        <div className="register__submit">
          <button type='submit'>Continue</button>
        </div>
      </div>
      <div className='register__right'>
        <h3 className="register__welcome">
          Welcome
        </h3>
        <div className="register__divider" />
      </div>
    </div>
  </section>
);

export default Register;
