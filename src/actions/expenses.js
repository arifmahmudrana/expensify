import database from '../firebase';

export const fetchExpenses = () => (dispatch, getState) => database.ref(`users/${getState().auth.uid}/expenses/`)
  .once('value')
  .then(snapshot => {
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

export const storeExpense = expense => (dispatch, getState) => database.ref(`users/${getState().auth.uid}/expenses/`)
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

export const updateExpense = ({id, ...expense}) => (dispatch, getState) => database.ref(`users/${getState().auth.uid}/expenses/${id}`)
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

export const deleteExpense = id => (dispatch, getState) => database.ref(`users/${getState().auth.uid}/expenses/${id}`)
  .remove()
  .then(() => dispatch(removeExpense(id)));

export const removeExpense = id => ({
  type: 'REMOVE_EXPENSE',
  id
});