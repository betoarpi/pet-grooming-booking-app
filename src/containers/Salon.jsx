import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCurrent, setFavorite, removeFavorite } from '../actions/index';
import SalonMap from '../components/SalonMap';
import AvailabilityCalendar from '../components/AvailabilityCalendar';
import NotFound from './NotFound';
import '../assets/styles/sass/components/Salon.scss';
import '../assets/styles/sass/components/Gallery.scss';

const Salon = (props) => {
  const { currentSalon, match } = props;
  const { name, rating, fullDescription, address, services, phone, images, coords, isFav } = currentSalon;
  const { id } = match.params;
  const isCurrent = Object.keys(currentSalon).length > 0;

  useEffect(() => {
    props.getCurrent(id);
  }, []);

  const handleSetFavorite = () => {
    props.setFavorite(id);
  };

  const handleRemoveFavorite = () => {
    props.removeFavorite(id);
  };

  return isCurrent ? (
    <section className='salon-details'>
      <article className='salon-details__info'>
        <div className='salon-details__info__card'>
          <header>
            <h1>{name}</h1>
            <div className='rating-info'>
              <i className='fas fa-star rating'> </i>
              <b>{rating}</b>
              <span>(100 Evaluaciones)</span>
            </div>
            <div className='share'>
              <a href='/' className='share__like'>
                {isFav ?
                  <i className='fas fa-heart' aria-hidden='true' onClick={() => handleRemoveFavorite(id)}> </i> :
                  <i className='far fa-heart' aria-hidden='true' onClick={handleSetFavorite}> </i>}
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
                  {address}
                </span>
              </a>
              <a href={`tel:${phone}`} className='address__phone'>
                <i className='fas fa-phone'> </i>
                <span>
                  Teléfono:
                  {' '}
                  {phone}
                </span>
              </a>
            </address>
            <button type='button'>
              Reservar ahora
              <i className='fas fa-paw'> </i>
            </button>
          </header>

          <article>
            {fullDescription}
          </article>

          <div className='salon-details__info__card__services'>
            <div className='services'>
              <h5>Servicios</h5>
              <ul>
                {services.map((item) => {
                  return <li key={item.id}>{item}</li>;
                })}
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
            <img src={images[0]} alt='title' />
          </a>

          <div className='gallery__grid'>
            <a href='/' className='gallery__grid__item'>
              <img src={images[1]} alt='title' />
            </a>
            <a href='/' className='gallery__grid__item'>
              <img src={images[2]} alt='title' />
            </a>
            <a href='/' className='gallery__grid__item'>
              <img src={images[3]} alt='title' />
            </a>
          </div>
        </div>
      </article>
      <SalonMap coords={coords}>
        <AvailabilityCalendar onCloseModal={() => handleCloseModal()} />
      </SalonMap>
    </section>
  ) : <NotFound />;
};

const mapStateToProps = (state) => {
  return {
    currentSalon: state.currentSalon,
  };
};

const mapDispatchToProps = {
  getCurrent,
  setFavorite,
  removeFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(Salon);
