import React from 'react';
import '../assets/styles/sass/components/Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      &copy; Pet Grooming App 2019. Todos los derechos reservados
      <ul className='footer__nav'>
        <li>
          <a href='/'>
            Terminos y Condiciones
          </a>
        </li>
        <li>
          <a href='/'>
            Aviso de Privacidad
          </a>
        </li>
        <li>
          <a href='/'>
            <i className='fab fa-instagram' aria-hidden='true'> </i>
          </a>
        </li>
      </ul>
      <span className='made-with-love'>
        Made with
        {' '}
        <i className='fas fa-heart'> </i>
        {' '}
        in
        {' '}
        <a href='https://platzi.com/escuela-js/' target='_blank' rel='noopener noreferrer'>Escuela de JavaScript.</a>
      </span>
    </footer>
  );
};

export default Footer;
