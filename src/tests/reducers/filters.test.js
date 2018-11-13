import filters from '../../reducers/filters';
import moment from 'moment';

test('should have default value set for filters reducers on init', () => {
  expect(filters(undefined, {type: '@@INIT'})).toEqual({
    endDate: moment().endOf('month'), 
    sortBy: 'date', 
    startDate: moment().startOf('month'), 
    text: ''
  });
});

test('should set text in reducer', () => {
  expect(filters(undefined, {type: 'SET_TEXT_FILTER', text: 'text'}).text).toBe('text');

  expect(filters(undefined, {type: 'SET_TEXT_FILTER', text: ''}).text).toBe('');
});

test('should set sortBy amount in reducer', () => {
  expect(filters(undefined, {type: 'SORT_BY_AMOUNT'}).sortBy).toBe('amount');
});

test('should set sortBy date in reducer', () => {
  const state = filters(undefined, {type: 'SORT_BY_AMOUNT'});
  expect(filters(state, {type: 'SORT_BY_DATE'}).sortBy).toBe('date');
});

test('should set startDate & endDate in reducer', () => {
  const state = filters(undefined, {type: 'SORT_BY_AMOUNT'});
  const startDate = moment().add(-4, 'days');
  const endDate = moment();
  const newState = filters(state, {
    type: 'SET_DATE',
    startDate,
    endDate
  });
  
  expect(newState.startDate.valueOf()).not.toBe(state.startDate.valueOf());
  expect(newState.endDate.valueOf()).not.toBe(state.endDate.valueOf());

  expect(newState.startDate.valueOf()).toBe(startDate.valueOf());
  expect(newState.endDate.valueOf()).toBe(endDate.valueOf());
});