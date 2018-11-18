import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import expenses from '../reducers/expenses';
import filters from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

export default () => createStore(combineReducers({
  expenses,
  filters
}), enhancer);