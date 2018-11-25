import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  addExpense, deleteExpense, editExpense, fetchExpenses, removeExpense, setExpenses, storeExpense, updateExpense
} from '../../actions/expenses';
import database from '../../firebase/';

const expenses = [
  {
    id: '1',
    description: 'description 1',
    amount: 10,
    createdAt: 10,
    note: 'note 1'    
  },
  {
    id: '2',
    description: 'description 2',
    amount: 20,
    createdAt: 20,
    note: 'note 2'    
  }
];

const createMockStore = configureMockStore([thunk]);

beforeEach(done => {
  const data = {};
  expenses.forEach(({id, description, amount, createdAt, note}) => {
    data[id] = {description, amount, createdAt, note};
  });

  database.ref('expenses').set(data).then(() => done());
});

test('should dispatch setExpenses on dispatching fetchExpenses', (done) => {
  const store = createMockStore({});

  store.dispatch(fetchExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });

    done();
  });
});

test('actions:expenses:setExpenses', () => {
  expect(setExpenses(expenses)).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});

test('should dispatch addExpense on dispatching storeExpense', (done) => {
  const store = createMockStore({});
  const expense = expenses[0];
  delete expense.id;

  store.dispatch(storeExpense(expense)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expense
      }
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expense);
    done();
  });
});

test('actions:expenses:addExpense', () => {
  expect(addExpense({})).toEqual({
    type: 'ADD_EXPENSE',
    expense: {}
  });
});

test('should dispatch editExpense on dispatching updateExpense', (done) => {
  const store = createMockStore({});
  const expense = expenses[0];
  expense.description = 'New description';
  expense.amount = '1234';
  expense.note = 'New note';

  store.dispatch(updateExpense(expense)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      expense
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expense);
    done();
  });
});

test('actions:expenses:editExpense', () => {
  expect(editExpense(expenses[0])).toEqual({
    type: 'EDIT_EXPENSE',
    expense: expenses[0]
  });
});

test('should dispatch removeExpense on dispatching deleteExpense', (done) => {
  const store = createMockStore({});
  const expense = expenses[0];

  store.dispatch(deleteExpense(expense.id)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id: expense.id
    });

    return database.ref(`expenses/${expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toBe(null);
    done();
  });
});

test('actions:expenses:removeExpense', () => {
  const id = expenses[0].id;
  
  expect(removeExpense(id)).toEqual({
    type: 'REMOVE_EXPENSE',
    id
  });
});