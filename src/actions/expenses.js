import uuid from 'uuid';
import database from '../firebase';

export const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense
});

export const storeExpense = expense => dispatch => database.ref('expenses')
  .push(expense)
  .then((ref) => dispatch(
    addExpense({
      id: ref.key,
      ...expense
    })
  ));

export const removeExpense = id => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const editExpense = expense => ({
  type: 'EDIT_EXPENSE',
  expense
});