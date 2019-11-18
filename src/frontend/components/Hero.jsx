import React from 'react';
import WetDog from '../assets/static/img/wet-dog.jpg';
import '../assets/styles/sass/components/Hero.scss';

const Hero = () => {
  return (
    <div className='hero'>
      <h1 className='hero__title'>Encuentra una estética canina cerca de tí</h1>
      <p className='hero__description'>
        Regístrate ya y encuentra el Grooming Salón ideal. Reserva servicios
        de baño para tu mascota, cortes de pelo, SPA y servicios premium.
      </p>
      <a href='#filter' className='hero__btn'>Reservar ahora</a>
      <img src={WetDog} alt='Pet Grooming App' className='hero__img' />
    </div>
  );
};

export default Hero;
