import React from 'react';
import Logo from '../assets/static/img/groomerly-logo.svg';
import Avatar from '../assets/static/img/user-avatar.jpg';
import '../assets/styles/sass/components/Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <a href='/' className='logo'>
        <img src={Logo} alt='Groomerly | Pet Grooming App' className='logo__img' />
      </a>

      <nav className='navigation'>
        <ul className='navigation__website'>
          <li>
            <a href='/'>¿Qué es Groomerly?</a>
          </li>
          <li>
            <a href='/'>Encuentra una estética</a>
          </li>
          <li>
            <a href='/' id='register-now'>Regístrate</a>
          </li>
        </ul>

        <button type='button' className='navigation__mobile'>
          <span className='bars bars__1'> </span>
          <span className='bars bars__2'> </span>
          <span className='bars bars__3'> </span>
        </button>

        <div className='navigation__user'>
          <div className='navigation__user__profile'>
            <img src={Avatar} alt='User Avatar' />
          </div>
          <ul className='navigation__user__options'>
            <li>
              <a href='/'>
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
              <a href='/'>
                Cerrar Sesión
                <i className='fas fa-sign-out-alt'> </i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
