import React from 'react';
import NotFoundImg from '../assets/static/img/not-found.svg';
import '../assets/styles/sass/components/NotFound.scss';

const NotFound = () => {
  return (
    <section className='not-found'>
      <h1>
        Error
        <br />
        <span>404</span>
      </h1>
      <img src={NotFoundImg} alt='Page not found' />
    </section>
  );
};

export default NotFound;
