import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from '../containers/Home';
import Salon from '../containers/Salon';
import NotFound from '../containers/NotFound';
import AboutGroomerly from '../containers/AboutGroomerly';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Profile from '../containers/Profile';

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
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/acerca-de-groomerly' component={AboutGroomerly} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    );
  }
};

export default App;
