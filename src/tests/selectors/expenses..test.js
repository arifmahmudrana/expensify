import selectorsExpenses from '../../selectors/expenses';
import moment from 'moment';

const expenses = [
  {
    id: '1',
    description: 'Internet Bill',
    amount: 60000,
    note: 'Internet Bill of this month',
    createdAt: moment(0).add(-4, 'days').valueOf()
  },
  {
    id: '2',
    description: 'Credit Card Payment',
    amount: 1800000,
    note: 'Credit card payment for this month',
    createdAt: moment(0).valueOf()
  },
  {
    id: '3',
    description: 'Mobile Recharge',
    amount: 10000,
    note: '',
    createdAt: moment(0).add(4, 'days').valueOf()
  }
];

test('filter by text', () => {
  const filters = {
    text: 'month',
    sortBy: 'date'
  }

  expect(selectorsExpenses(expenses, filters)).toEqual([expenses[1], expenses[0]]);
});

test('filter by text should be case insensitive', () => {
  const filters = {
    text: 'credit',
    sortBy: 'date'
  }

  expect(selectorsExpenses(expenses, filters)).toEqual([expenses[1]]);
});

test('filter by startDate', () => {
  const filters = {
    text: 'month',
    startDate: moment(0).add(-2, 'days'),
    sortBy: 'date'
  }

  expect(selectorsExpenses(expenses, filters)).toEqual([expenses[1]]);
});

test('filter by endDate', () => {
  const filters = {
    text: 'month',
    endDate: moment(0).add(-2, 'days'),
    sortBy: 'date'
  }

  expect(selectorsExpenses(expenses, filters)).toEqual([expenses[0]]);
});

test('filter by startDate & endDate', () => {
  const filters = {
    text: 'month',
    startDate: moment(0).add(-1, 'days'),
    endDate: moment(0).add(1, 'days'),
    sortBy: 'date'
  }

  expect(selectorsExpenses(expenses, filters)).toEqual([expenses[1]]);
});

test('sortBy date', () => {
  const filters = {
    sortBy: 'date'
  }

  expect(selectorsExpenses(expenses, filters)).toEqual([expenses[2], expenses[1], expenses[0]]);
});

test('sortBy amount', () => {
  const filters = {
    sortBy: 'amount'
  }

  expect(selectorsExpenses(expenses, filters)).toEqual([expenses[1], expenses[0], expenses[2]]);
});