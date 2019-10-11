import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Salon from '../containers/Salon';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/salon' component={Salon} />
    </Switch>
  </BrowserRouter>
);

export default App;
