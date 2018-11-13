import {addExpense, removeExpense, editExpense} from '../../actions/expenses';

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
  const expense = {
    description: 'description',
    amount: 10,
    createdAt: 10,
    note: 'note'    
  };

  const data = addExpense(expense);
  
  expect(data).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expense,
      id: data.expense.id
    }
  });
  
  expect(data).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expense,
      id: expect.any(String)
    }
  });

  delete expense.amount;
  delete expense.createdAt;
  
  expect(addExpense(expense)).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expense,
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});