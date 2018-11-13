import uuid from 'uuid';

export const addExpense = (expense = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    amount: 0,
    createdAt: 0,
    ...expense
  }
});

export const removeExpense = (id) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const editExpense = (expense) => ({
  type: 'EDIT_EXPENSE',
  expense
});