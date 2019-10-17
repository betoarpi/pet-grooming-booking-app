import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Salon from '../containers/Salon';
import Layout from '../containers/Layout';
import Login from '../containers/Login';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/salon' component={Salon} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
