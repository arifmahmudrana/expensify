import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Login from '../components/Login';
import Home from '../components/Home';
import Create from '../components/Create';
import Edit from '../components/Edit';
import NotFound from '../components/NotFound';

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <PublicRoute exact path="/" component={Login} />
      <PrivateRoute path="/dashboard" component={Home} />
      <PrivateRoute path="/create" component={Create} />
      <PrivateRoute path="/edit/:id" component={Edit} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

export default AppRouter;