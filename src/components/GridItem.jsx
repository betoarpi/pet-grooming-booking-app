import React from 'react';
import { Link } from 'react-router-dom';

const GridItem = (props) => {
  const { id, name, rating, shortDescription, images } = props;
  return (
    <Link to='/salon' className='groomers-grid__item' id={id}>
      <div className='groomers-grid__item__thumbnail'>
        <div className='fav'>
          <i className='fa fa-heart' aria-hidden='true'> </i>
        </div>
        <img src={images[0]} alt='Groomers cover' />
      </div>
      <article className='groomers-grid__item__description'>
        <h4 className='groomers-grid__item__title'>
          {name}
        </h4>
        <div className='rating'>
          <i className='fa fa-star' aria-hidden='true'> </i>
          {' '}
          rating
          {' '}
          {rating}
        </div>
        <p>
          {shortDescription}
        </p>
        <button type='button' className='btn'>
          Book now
        </button>
      </article>
    </Link>
  );
};

export default GridItem;
