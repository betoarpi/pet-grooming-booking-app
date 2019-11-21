import React from 'react';
import Doggy from '../assets/static/img/gallery__grid__item-3.jpg';
import '../assets/styles/sass/components/AboutGroomerly.scss';

const AboutGroomerly = () => {
  return (
    <section className='about'>
      <article>
        <h1>¿Qué es Groomerly?</h1>
        <p>Groomerly es una app que te permite reservar servicios de estética para tus perros o gatos. Conectamos a los mejores salones de Grooming con los duseños de mascotas que buscan los mejores servicios, profesionalismo y cuidado.</p>
        <h3>Reserva cuando quieras</h3>
        <p>Con Groomerly puedes reservar el servicio de estética para tu mascota cuando quieras, desde donde quieras. Encuentra los salones de grooming más cercanos a tí, revisa la disponibilidad y elije el horario que mejor se adapte a tus necesidades y las de tu mascota.</p>
        <h3>Conecta con más clientes</h3>
        <p>Si tienes un salón de estética para mascotas, únete a Groomerly y comienza a aprovechar las nuevas oportunidades que te ofrece nuestra aplicación. Conecta con más clientes, eficientiza tus tiempos de servicio, reduce los costos que te generan las cancelaciones y sácale provecho a tu abanico de servicios.</p>
      </article>
      <figure>
        <img src={Doggy} alt='Groomerly App' />
      </figure>
    </section>
  );
};

export default AboutGroomerly;
