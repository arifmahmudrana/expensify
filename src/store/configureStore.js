import { createStore, combineReducers } from 'redux';
import expenses from '../reducers/expenses';
import filters from '../reducers/filters';

export default () => createStore(combineReducers({
  expenses,
  filters
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());