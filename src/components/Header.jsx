/* eslint-disable camelcase */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { logoutRequest } from '../actions/index';
import gravatar from '../utils/gravatar';
import Logo from '../assets/static/img/groomerly-logo.svg';
import '../assets/styles/sass/components/Header.scss';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  const [mobileNav, setMobileNav] = useState(false);
  const handleClick = (event) => {
    event.preventDefault();

    const $main = document.querySelector('.main');
    const $navigation__mobile = document.querySelector('.navigation__mobile');
    const $navigation__website = document.querySelector('.navigation__website');

    if (mobileNav === false) {
      setMobileNav(true);
      $navigation__mobile.classList.add('active');
      $navigation__website.classList.add('active');
      $main.classList.add('mobile-active');
    } else {
      $navigation__mobile.classList.add('inactive');
      setTimeout(() => {
        $navigation__mobile.classList.remove('active', 'inactive');
        $navigation__website.classList.remove('active');
        $main.classList.remove('mobile-active');
        setMobileNav(false);
      }, 600);
    }
  };

  return (
    <header className='header'>
      <a href='/' className='logo'>
        <img src={Logo} alt='Groomerly | Pet Grooming App' className='logo__img' />
      </a>

      <nav className='navigation'>
        <ul className='navigation__website'>
          <li>
            <a href='/acerca-de-groomerly'>¿Qué es Groomerly?</a>
          </li>
          <li>
            <a href='/#filter'>Encuentra una estética</a>
          </li>
          {hasUser ? null :
            (
              <>
                <li>
                  <a href='/register' id='register-now'>
                    Register Now
                  </a>
                </li>
              </>
            )}
        </ul>

        <button type='button' className='navigation__mobile' onClick={handleClick}>
          <span className='bars bars__1'> </span>
          <span className='bars bars__2'> </span>
          <span className='bars bars__3'> </span>
        </button>

        <div className='navigation__user'>
          <div className='navigation__user__profile'>
            {hasUser ?
              <img src={gravatar(user.email)} alt={user.email} /> :
              <i className='fas fa-user'> </i>}
          </div>
          <ul className='navigation__user__options'>
            {hasUser ?
              (
                <>
                  <li>
                    <a href='/profile'>
                      Mi Perfil
                      <i className='fas fa-user-circle'> </i>
                    </a>
                  </li>
                  <li>
                    <a href='/'>
                      Mis Reservas
                      <i className='fas fa-calendar-alt'> </i>
                    </a>
                  </li>
                  <li>
                    <a href='/'>
                      Mis Favoritos
                      <i className='fas fa-heart'> </i>
                    </a>
                  </li>
                  <li>
                    <a href='#logout' onClick={handleLogout}>
                      Cerrar Sesión
                      <i className='fas fa-sign-out-alt'> </i>
                    </a>
                  </li>
                </>
              ) :
              (
                <li>
                  <a href='/login'>
                    Iniciar Sesión
                    <i className='fas fa-sign-in-alt'> </i>
                  </a>
                </li>
              )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
