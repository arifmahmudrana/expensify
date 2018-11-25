import database from '../firebase';

export const fetchExpenses = () => dispatch => database.ref('expenses').once('value').then(snapshot => {
  const expenses = [];
  snapshot.forEach(e => {
    const expense = {
      id: e.key,
      ...e.val()
    };

    expenses.push(expense);
  });

  return dispatch(setExpenses(expenses));
});

export const setExpenses = expenses => ({
  type: 'SET_EXPENSES',
  expenses
});

export const storeExpense = expense => dispatch => database.ref('expenses')
  .push(expense)
  .then((ref) => dispatch(
    addExpense({
      id: ref.key,
      ...expense
    })
  ));

export const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense
});

export const updateExpense = ({id, ...expense}) => dispatch => database.ref(`expenses/${id}`)
  .update(expense)
  .then(() => dispatch(
    editExpense({
      id,
      ...expense
    })
  ));

export const editExpense = expense => ({
  type: 'EDIT_EXPENSE',
  expense
});

export const deleteExpense = id => dispatch => database.ref(`expenses/${id}`)
  .remove()
  .then(() => dispatch(removeExpense(id)));

export const removeExpense = id => ({
  type: 'REMOVE_EXPENSE',
  id
});