import React from 'react';
import SalonMap from '../components/SalonMap';
import '../assets/styles/sass/components/Salon.scss';
import '../assets/styles/sass/components/Gallery.scss';
import GalleryFeatured from '../assets/static/img/gallery__featured.jpg';
import GridItem1 from '../assets/static/img/gallery__grid__item-1.jpg';
import GridItem2 from '../assets/static/img/gallery__grid__item-2.jpg';
import GridItem3 from '../assets/static/img/gallery__grid__item-3.jpg';

const Salon = () => (
  <section className='salon-details'>
    <article className='salon-details__info'>
      <div className='salon-details__info__card'>
        <header>
          <h1>Nombre de Estética Canina</h1>
          <div className='rating-info'>
            <i className='fas fa-star rating'> </i>
            <b>5.0</b>
            <span>(100 Evaluaciones)</span>
          </div>
          <div className='share'>
            <a href='/' className='share__like'>
              <i className='far fa-heart'> </i>
            </a>
            <a href='/' className='share__share'>
              <i className='fas fa-share' aria-hidden='true'> </i>
              Compártelo
            </a>
          </div>
          <address className='address'>
            <a href='/' className='address__street'>
              <i className='fas fa-map-marker-alt'> </i>
              <span>
                742 Evergreen Terrace, Springfield, 58008, United States -
                <b>Agrandar Mapa</b>
              </span>
            </a>
            <a href='tel:+1234567890' className='address__phone'>
              <i className='fas fa-phone'> </i>
              <span>Teléfono: (123) 456-7890</span>
            </a>
          </address>
          <button type='button'>
            Reservar ahora
            <i className='fas fa-paw'> </i>
          </button>
        </header>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. In est ante in nibh mauris. Sit amet venenatis urna cursus eget nunc scelerisque
                      viverra mauris.
        </p>
        <p>
          Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. Amet facilisis magna etiam tempor
                    orci. Viverra adipiscing at in tellus integer feugiat. Risus commodo viverra maecenas accumsan lacus vel
                    facilisis volutpat est. Sagittis orci a scelerisque purus semper eget duis at. Purus in mollis nunc sed id
                      semper risus in hendrerit. Eleifend donec pretium vulputate sapien nec sagittis.
        </p>

        <div className='salon-details__info__card__services'>
          <div className='services'>
            <h5>Servicios</h5>
            <ul>
              <li>Baño</li>
              <li>Baño y corte</li>
              <li>Limpieza Dental</li>
            </ul>
          </div>
          <div className='services'>
            <h6>Servicios Adicionales</h6>
            <ul>
              <li>Veterinaria</li>
              <li>Clínica</li>
              <li>Pensión</li>
              <li>Transporte de tu mascota para servicios veterinarios y estéticos</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='salon__details__info__gallery gallery'>
        <a href='/' className='gallery__featured'>
          <img src={GalleryFeatured} alt='title' />
        </a>

        <div className='gallery__grid'>
          <a href='/' className='gallery__grid__item'>
            <img src={GridItem1} alt='title' />
          </a>
          <a href='/' className='gallery__grid__item'>
            <img src={GridItem2} alt='title' />
          </a>
          <a href='/' className='gallery__grid__item'>
            <img src={GridItem3} alt='title' />
          </a>
        </div>
      </div>
    </article>
    <SalonMap />
  </section>
);

export default Salon;
