import React from 'react';
import '../assets/styles/sass/views/_login.scss';

const Login = () => (
  <section className='login'>
    <div className='login__container'>
      <div className='login__left'>
        <h3 className='login__title'>
          Sign In
        </h3>
        <div className='login__input-group'>
          <label className='login__label'>Username</label>
          <input type='text' name='username'/>
        </div>
        <div className='login__input-group'>
          <label className='login__label'>Password</label>
          <input type='password' name='password'/>
        </div>
        <div className='login__actions'>
          <div className='login__rememberme'>
            <input type='checkbox' />
            <span>Rememberme</span>
          </div>
          <span>Forgot password?</span>
        </div>
        <div className='login__social-buttons'>
          <div className='login__facebook-button'>
            <i className='fab fa-facebook-f facebook__icon'></i>
            <span className='facebook__title'>facebook</span>
          </div>
          <div className='login__google-button'>
            <i className='fab fa-google google__icon'></i>
            <span className='google__title'>google</span>
          </div>
        </div>
        <div className="login__submit">
          <button type='submit'>Continue</button>
        </div>
      </div>
      <div className='login__right'>
        <h3 className="login__welcome">
          Welcome
        </h3>
        <div className="login__divider" />
      </div>
    </div>
  </section>
);

export default Login;
