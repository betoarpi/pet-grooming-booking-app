import React from 'react';
import Hero from '../components/Hero';
import Filter from '../components/Filter';
import Grid from '../components/Grid';

const Home = () => (
  <>
    <Hero />
    <Filter />
    <Grid />
  </>
);

/* const mapStateToProps = (state) => {
  return {
    salons: state.salons,
  };
}; */

export default Home;
