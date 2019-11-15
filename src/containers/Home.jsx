import React from 'react';
import { connect } from 'react-redux';
import Hero from '../components/Hero';
import Filter from '../components/Filter';
import Grid from '../components/Grid';

const Home = ({ salons }) => (
  <>
    <Hero />
    <Filter />
    <Grid salons={salons} />
  </>
);

const mapStateToProps = (state) => {
  return {
    salons: state.salons,
  };
};

export default connect(mapStateToProps, null)(Home);
