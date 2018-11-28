import React from 'react';
import ReactDOM from 'react-dom';
import 'react-dates/initialize';
import {Provider} from 'react-redux';
import AppRouter, {history} from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import configureStore from './store/configureStore';
import {firebase} from './firebase/';
import { login, logout } from './actions/auth';
import {fetchExpenses} from './actions/expenses';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(fetchExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.replace('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.replace('/');
  }
});