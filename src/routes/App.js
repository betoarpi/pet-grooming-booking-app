import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from '../containers/Home';
import Salon from '../containers/Salon';
import NotFound from '../containers/NotFound';
import AboutGroomerly from '../containers/AboutGroomerly';
import Layout from '../containers/Layout';

const history = createBrowserHistory();

history.listen((location, action) => {
  window.scrollTo(0, 0);
});

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/salon' component={Salon} />
            <Route exact path='/acerca-de-groomerly' component={AboutGroomerly} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    );
  }
};

export default App;
