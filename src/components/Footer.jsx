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
    </footer>
  );
};

export default Footer;
