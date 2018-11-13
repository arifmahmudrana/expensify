import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import Create from '../components/Create';
import Edit from '../components/Edit';
import Help from '../components/Help';
import NotFound from '../components/NotFound';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/create" component={Create}/>
        <Route path="/edit/:id" component={Edit}/>
        <Route path="/help" component={Help}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;