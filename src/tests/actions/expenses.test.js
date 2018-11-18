import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {addExpense, editExpense, removeExpense, storeExpense} from '../../actions/expenses';
import database from '../../firebase/';

const createMockStore = configureMockStore([thunk]);

test('actions:expenses:removeExpense', () => {
  const id = 123
  
  expect(removeExpense(id)).toEqual({
    type: 'REMOVE_EXPENSE',
    id
  });
});

test('actions:expenses:editExpense', () => {
  const expense = {
    id: 123,
    description: 'description',
    amount: 10,
    createdAt: 10,
    note: 'note'    
  }
  
  expect(editExpense(expense)).toEqual({
    type: 'EDIT_EXPENSE',
    expense
  });
});

test('actions:expenses:addExpense', () => {
  const expense = {};

  const data = addExpense(expense);
  
  expect(data).toEqual({
    type: 'ADD_EXPENSE',
    expense
  });
});

test('should dispatch addExpense on dispatching storeExpense', (done) => {
  const store = createMockStore({});
  const expense = {
    description: 'Internet Bill',
    amount: 1200,
    note: 'Bill',
    createdAt: 100
  };

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