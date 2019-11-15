/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import GridItem from './GridItem';
import '../assets/styles/sass/components/Grid.scss';

const Grid = (props) => {
  const { salons } = props;
  return (
    <section className='groomers-grid'>
      <h2>Estas son las estéticas caninas que encontramos para tí</h2>

      <div className='groomers-grid__container'>
        {salons.map((item) => <GridItem key={item.id} {...item} />)}
      </div>
    </section>
  );
};

export default Grid;
