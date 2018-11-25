import expenses from '../../reducers/expenses';

test('should have default value set for expenses reducers on init', () => {
  expect(expenses(undefined, {type: '@@INIT'})).toEqual([]);
});

test('should add expenses reducers', () => {
  expect(expenses([], {type: 'ADD_EXPENSE', expense: {id: '1'}})).toEqual([{id: '1'}]);
});

test('should remove expense reducers', () => {
  expect(expenses([{id: '1'}], {type: 'REMOVE_EXPENSE', id: '1'})).toEqual([]);
});

test('should edit expense reducers', () => {
  expect(expenses([{id: '1', amount: 12}], {type: 'EDIT_EXPENSE', expense: {id: '1', amount: 13}})).toEqual([{id: '1', amount: 13}]);
});

test('should set state for expense reducers', () => {
  expect(expenses([{id: '1', amount: 123}], {type: 'SET_EXPENSES', expenses: [{id: '1', amount: 12}]})).toEqual([{id: '1', amount: 12}]);
});