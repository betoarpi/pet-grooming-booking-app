import Home from '../containers/Home';
import Salon from '../containers/Salon';
import NotFound from '../containers/NotFound';
import AboutGroomerly from '../containers/AboutGroomerly';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Profile from '../containers/Profile';

const serverRoutes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/salon/:id',
    component: Salon,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/register',
    component: Register,
    exact: true,
  },
  {
    path: '/profile',
    component: Profile,
    exact: true,
  },
  {
    path: '/acerca-de-groomerly',
    component: AboutGroomerly,
    exact: true,
  },
  {
    name: 'Not Found',
    component: NotFound,
  },
];

export default serverRoutes;
