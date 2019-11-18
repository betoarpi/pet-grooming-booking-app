/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import GridItem from './GridItem';
import '../assets/styles/sass/components/Grid.scss';

const Grid = (props) => {
  const { salons, favs } = props;

  return (
    <section className='groomers-grid'>
      <h2>Estas son las estéticas caninas que encontramos para tí</h2>

      <div className='groomers-grid__container'>
        {salons.map((item) => {
          if (favs.includes(item.id)) {
            return <GridItem key={item.id} isFav={true} {...item} />;
          }
          return null;
        })}
        {salons.map((item) => {
          if (!favs.includes(item.id)) {
            return <GridItem key={item.id} isFav={false} {...item} />;
          }
          return null;
        })}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    favs: state.favs,
  };
};

export default connect(mapStateToProps, null)(Grid);
