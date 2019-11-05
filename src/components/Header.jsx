/* eslint-disable camelcase */
import React from 'react';
import Logo from '../assets/static/img/groomerly-logo.svg';
import Avatar from '../assets/static/img/user-avatar.jpg';
import '../assets/styles/sass/components/Header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNav: false,
    };

    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(event) {
    event.preventDefault();

    const $main = document.querySelector('.main');
    const $navigation__mobile = document.querySelector('.navigation__mobile');
    const $navigation__website = document.querySelector('.navigation__website');

    const { mobileNav } = this.state;

    if (mobileNav === false) {
      this.setState({ mobileNav: true });
      $navigation__mobile.classList.add('active');
      $navigation__website.classList.add('active');
      $main.classList.add('mobile-active');
    } else {
      $navigation__mobile.classList.add('inactive');
      setTimeout(() => {
        $navigation__mobile.classList.remove('active', 'inactive');
        $navigation__website.classList.remove('active');
        $main.classList.remove('mobile-active');
        this.setState({ mobileNav: false });
      }, 600);
    }
  };

  render() {
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
            <li>
              <a href='/register' id='register-now'>Regístrate</a>
            </li>
          </ul>

          <button type='button' className='navigation__mobile' onClick={this.handleClick}>
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
};

export default Header;
