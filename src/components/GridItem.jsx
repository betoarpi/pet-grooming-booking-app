import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setFavorite, removeFavorite } from '../actions/index';

const GridItem = (props) => {
  const { id, name, rating, shortDescription, images, isFav } = props;

  const handleSetFavorite = () => {
    props.setFavorite(id);
    const filterPosition = document.getElementById('filter');
    filterPosition.scrollIntoView();
  };

  const handleRemoveFavorite = () => {
    props.removeFavorite(id);
  };

  return (
    <div className='groomers-grid__item' id={id}>
      <div className='groomers-grid__item__thumbnail'>
        <div className='fav'>
          {isFav ?
            <i className='fas fa-heart' aria-hidden='true' onClick={() => handleRemoveFavorite(id)}> </i> :
            <i className='far fa-heart' aria-hidden='true' onClick={handleSetFavorite}> </i>}
        </div>
        <img src={images[0]} alt='Groomers cover' />
      </div>
      <article className='groomers-grid__item__description'>
        <h4 className='groomers-grid__item__title'>
          <Link to='/salon'>{name}</Link>
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
        <Link to={`/salon/${id}`} className='btn'>
          Agenda ahora
        </Link>
      </article>
    </div>
  );
};

const mapDispatchToProps = {
  setFavorite,
  removeFavorite,
};

export default connect(null, mapDispatchToProps)(GridItem);
