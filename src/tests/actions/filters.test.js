import {setTextFilter, sortByAmount, sortByDate, setDate} from '../../actions/filters';
import moment from 'moment';

test('filters:expenses:setTextFilter', () => {
  expect(setTextFilter('text')).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'text'
  });
});

test('filters:expenses:sortByAmount', () => {
  expect(sortByAmount()).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('filters:expenses:sortByDate', () => {
  expect(sortByDate()).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('filters:expenses:setDate', () => {
  expect(setDate(moment(0), moment(0))).toEqual({
    type: 'SET_DATE',
    startDate: moment(0),
    endDate: moment(0)
  });
});