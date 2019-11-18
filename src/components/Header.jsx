/* eslint-disable camelcase */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
      <Link to='/' className='logo'>
        <img src={Logo} alt='Groomerly | Pet Grooming App' className='logo__img' />
      </Link>

      <nav className='navigation'>
        <ul className='navigation__website'>
          <li>
            <Link to='/acerca-de-groomerly'>¿Qué es Groomerly?</Link>
          </li>
          <li>
            <Link to='/#filter'>Encuentra una estética</Link>
          </li>
          {hasUser ? null :
            (
              <>
                <li>
                  <Link to='/register' id='register-now'>
                    Register Now
                  </Link>
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
                    <Link to='/profile'>
                      Mi Perfil
                      <i className='fas fa-user-circle'> </i>
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      Mis Reservas
                      <i className='fas fa-calendar-alt'> </i>
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      Mis Favoritos
                      <i className='fas fa-heart'> </i>
                    </Link>
                  </li>
                  <li>
                    <Link to='#logout' onClick={handleLogout}>
                      Cerrar Sesión
                      <i className='fas fa-sign-out-alt'> </i>
                    </Link>
                  </li>
                </>
              ) :
              (
                <li>
                  <Link to='/login'>
                    Iniciar Sesión
                    <i className='fas fa-sign-in-alt'> </i>
                  </Link>
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
