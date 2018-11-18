import React from 'react';
import ReactDOM from 'react-dom';
import 'react-dates/initialize';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import configureStore from './store/configureStore';
import './firebase/';

const store = configureStore();
/* store.subscribe(() => {
  console.log('====================================');
  const {expenses, filters} = store.getState();
  console.log(getVisibleExpenses(expenses, filters));
  console.log('====================================');  
});
const row = store.dispatch(addExpense({
  note: 'Buy movie ticket',
  description: 'Buy movie ticket to watch movie',
  amount: 500,
  createdAt: 128
}));

const bus = store.dispatch(addExpense({
  note: 'Buy bus ticket',
  description: 'Buy bus ticket to travel from Dhaka to Comilla',
  amount: 7000,
  createdAt: 13
}));
setTimeout(() => store.dispatch(sortByAmount()), 3000);
setTimeout(() => store.dispatch(setTextFilter('buy')), 3000); */

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
, document.getElementById('app'));

/* const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);
const requireAuthentication = (WrapedComponent) => props => (
  <div>
    {!props.isLoggedIn && <p>Please log in</p>}
    <WrapedComponent {...props} />
  </div>
);
const AuthInfo = requireAuthentication(Info);
ReactDOM.render(<AuthInfo info="Here is the info" isLoggedIn />, document.getElementById('app')); */

/* import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = (expense = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    amount: 0,
    createdAt: 0,
    ...expense
  }
});

const removeExpense = (id) => ({
  type: 'REMOVE_EXPENSE',
  id
});

const editExpense = (expense) => ({
  type: 'EDIT_EXPENSE',
  expense
});

const expenses = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EXPENSE': 
      // return state.concat(action.expense);
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE': 
      return state.filter(({id}) => id !== action.id);
    case 'EDIT_EXPENSE': 
        return state.map(i => i.id === action.expense.id ? {...i, ...action.expense} : i);
    default:
      return state;
  }
};

const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});

const filtersDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
const filters = (state = filtersDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  expenses = expenses.filter(expense => {
    const textMatch = expense.note.toLowerCase().includes(text.toLowerCase()) || expense.description.toLowerCase().includes(text.toLowerCase());
    const startDateMatch = !startDate || (expense.startDate >= startDate);
    const endDateMatch = !endDate || (expense.endDate <= endDate);

    return textMatch && startDateMatch && endDateMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.startDate < b.startDate ? 1 : -1
    }

    if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1
    }
  });

  return expenses;
}

const store = createStore(combineReducers({
  expenses,
  filters
}));

store.subscribe(() => {
  console.log('====================================');
  const {expenses, filters} = store.getState();
  console.log(getVisibleExpenses(expenses, filters));
  console.log('====================================');  
});

const row = store.dispatch(addExpense({
  note: 'Buy movie ticket',
  description: 'Buy movie ticket to watch movie',
  amount: 500,
  startDate: 128
}));

const bus = store.dispatch(addExpense({
  note: 'Buy bus ticket',
  description: 'Buy bus ticket to travel from Dhaka to Comilla',
  amount: 7000,
  startDate: 1328,
  endDate: 12
})); */

// store.dispatch(removeExpense(row.expense.id));

// store.dispatch(editExpense({
//   id: bus.expense.id,
//   amount: 17000
// }));

// store.dispatch(setTextFilter('buy'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(125));
// store.dispatch(setEndDate());

/* const store = createStore((state = { count: 0 }, actions) => {
  switch (actions.type) {
    case 'INCREMENT':
      return {
        count: state.count + (actions.by || 1)
      }
  
    case 'DECREMENT':
      return {
        count: state.count - (actions.by || 1)
      }
  
    case 'RESET':
      return {
        count: 0
      }
  
    default:
      return state;
  }
});

const increment = (by = 1) => ({
  type: 'INCREMENT',
  by
});

const decrement = (by = 1) => ({
  type: 'DECREMENT',
  by
});

const reset = () => ({
  type: 'RESET'
});

const unsubscribe = store.subscribe(() => {
  console.log('====================================');
  console.log(store.getState());
  console.log('====================================');
});

store.dispatch(increment(5)); */

// unsubscribe();

/* store.dispatch(increment());

store.dispatch(decrement(50));

store.dispatch(increment());

store.dispatch(reset()); */

/* const book = {
  publisher: {
    name: 'Penguin'
  }
};

const {publisher} = book;
const {name: publisherName = 'Self-Published'} = publisher;

console.log('====================================');
console.log(publisherName);
console.log('====================================');

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, , cost] = item;
console.log('====================================');
console.log(`A medium ${coffee} costs ${cost}`);
console.log('===================================='); */