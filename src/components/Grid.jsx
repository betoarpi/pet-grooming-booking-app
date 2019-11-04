import React from 'react';
import { Link } from 'react-router-dom';
import GroomingSalon from '../assets/static/img/grooming-salon.jpg';
import DogComb from '../assets/static/img/dog-comb.jpg';
import DogBath from '../assets/static/img/dog-bath.jpg';
import DogDrying from '../assets/static/img/dog-drying.jpg';
import '../assets/styles/sass/components/Grid.scss';

const Grid = () => {
  return (
    <section className='groomers-grid'>
      <h2>Estas son las estéticas caninas que encontramos para tí</h2>

      <div className='groomers-grid__container'>
        <Link to='/salon' className='groomers-grid__item'>
          <div className='groomers-grid__item__thumbnail'>
            <div className='fav'>
              <i className='fa fa-heart' aria-hidden='true'> </i>
            </div>
            <img src={GroomingSalon} alt='Groomers cover' />
          </div>
          <article className='groomers-grid__item__description'>
            <h4 className='groomers-grid__item__title'>
              Petly Salon
            </h4>
            <div className='rating'>
              <i className='fa fa-star' aria-hidden='true'> </i>
              <i className='fa fa-star' aria-hidden='true'> </i>
              <i className='fa fa-star' aria-hidden='true'> </i>
              <i className='fa fa-star' aria-hidden='true'> </i>
              <i className='fa fa-star' aria-hidden='true'> </i>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Officia at repudiandae inventore exercitationem consequatur
              labore reprehenderit.
            </p>
            <button type='button' className='btn'>
              Book now
            </button>
          </article>
        </Link>

        <Link to='/salon' className='groomers-grid__item'>
          <div className='groomers-grid__item__thumbnail'>
            <div className='fav'>
              <i className='fa fa-heart' aria-hidden='true'> </i>
            </div>
            <img src={DogComb} alt='Groomers cover' />
          </div>
          <article className='groomers-grid__item__description'>
            <h4 className='groomers-grid__item__title'>
              Petly Salon
            </h4>
            <div className='rating'>
              <i className='fa fa-star' aria-hidden='true'> </i>
              <i className='fa fa-star' aria-hidden='true'> </i>
              <i className='fa fa-star' aria-hidden='true'> </i>
              <i className='fa fa-star' aria-hidden='true'> </i>
              <i className='fa fa-star' aria-hidden='true'> </i>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Officia at repudiandae inventore exercitationem consequatur
              labore reprehenderit.
            </p>
            <button type='button' className='btn'>
              Book now
            </button>
          </article>
        </Link>

        <Link to='/salon' className='groomers-grid__item'>
          <div className='groomers-grid__item__thumbnail'>
            <div className='fav'>
              <i className='fa fa-heart' aria-hidden='true'> </i>
            </div>
            <img src={DogBath} alt='Groomers cover' />
          </div>
          <article className='groomers-grid__item__description'>
            <h4 className='groomers-grid__item__title'>
              Petly Salon
            </h4>
            <div className='rating'>
              <i className='fa fa-star' aria-hidden='true'> </i>
              <i className='fa fa-star' aria-hidden='true'> </i>
              <i className='fa fa-star' aria-hidden='true'> </i>
              <i className='fa fa-star' aria-hidden='true'> </i>
              <i className='fa fa-star' aria-hidden='true'> </i>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Officia at repudiandae inventore exercitationem consequatur
              labore reprehenderit.
            </p>
            <button type='button' className='btn'>
              Book now
            </button>
          </article>
        </Link>

        <Link to='/salon' className='groomers-grid__item'>
          <div className='groomers-grid__item__thumbnail'>
            <div className='fav'>
              <i className='fa fa-heart' aria-hidden='true'> </i>
            </div>
            <img src={GroomingSalon} alt='Groomers cover' />
          </div>
          <article className='groomers-grid__item__description'>
            <h4 className='groomers-grid__item__title'>
              Petly Salon
            </h4>
            <div className='rating'>
              <i className='fa fa-star' aria-hidden='true'> </i>
              <i className='fa fa-star' aria-hidden='true'> </i>
              <i className='fa fa-star' aria-hidden='true'> </i>
              <i className='fa fa-star' aria-hidden='true'> </i>
              <i className='fa fa-star' aria-hidden='true'> </i>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Officia at repudiandae inventore exercitationem consequatur
              labore reprehenderit.
            </p>
            <button type='button' className='btn'>
              Book now
            </button>
          </article>
        </Link>

        <Link to='/salon' className='groomers-grid__item'>
          <div className='groomers-grid__item__thumbnail'>
            <div className='fav'>
              <i className='fa fa-heart' aria-hidden='true'> </i>
            </div>
            <img src={DogDrying} alt='Groomers cover' />
          </div>
          <article className='groomers-grid__item__description'>
            <h4 className='groomers-grid__item__title'>
              Petly Salon
            </h4>
            <div className='rating'>
              <i className='fa fa-star' aria-hidden='true'> </i>
              <i className='fa fa-star' aria-hidden='true'> </i>
              <i className='fa fa-star' aria-hidden='true'> </i>
              <i className='fa fa-star' aria-hidden='true'> </i>
              <i className='fa fa-star' aria-hidden='true'> </i>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Officia at repudiandae inventore exercitationem consequatur
              labore reprehenderit.
            </p>
            <button type='button' className='btn'>
              Book now
            </button>
          </article>
        </Link>

        <Link to='/salon' className='groomers-grid__item'>
          <div className='groomers-grid__item__thumbnail'>
            <div className='fav'>
              <i className='fa fa-heart' aria-hidden='true'> </i>
            </div>
            <img src={DogComb} alt='Groomers cover' />
          </div>
          <article className='groomers-grid__item__description'>
            <h4 className='groomers-grid__item__title'>
              Petly Salon
            </h4>
            <div className='rating'>
              <i className='fa fa-star' aria-hidden='true'> </i>
              <i className='fa fa-star' aria-hidden='true'> </i>
              <i className='fa fa-star' aria-hidden='true'> </i>
              <i className='fa fa-star' aria-hidden='true'> </i>
              <i className='fa fa-star' aria-hidden='true'> </i>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Officia at repudiandae inventore exercitationem consequatur
              labore reprehenderit.
            </p>
            <button type='button' className='btn'>
              Book now
            </button>
          </article>
        </Link>
      </div>
    </section>
  );
};

export default Grid;
