import React from 'react';
import { shallow } from 'enzyme';
import { Filters } from '../../components/Filters';
import moment from 'moment';
const filters = {
  text: '',
  sortBy: 'date',
  startDate: moment(0),
  endDate: moment(0).add(4, 'days')
};

let setTextFilter, sortByAmount, sortByDate, setDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByAmount = jest.fn();
  sortByDate = jest.fn();
  setDate = jest.fn();

  const props = {
    setTextFilter,
    sortByAmount,
    sortByDate,
    setDate,
    ...filters
  }
  wrapper = shallow(<Filters {...props} />);
});

test('should render filters component with default values', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render filters component with changed values', () => {
  wrapper.setProps({
    text: 'Bills',
    sortBy: 'amount'
  });

  expect(wrapper).toMatchSnapshot();
});

test('should call setTextFilter on text change', () => {
  wrapper.find('input').simulate('change', {
    target: {
      value: 'Some text value'
    }
  });

  expect(setTextFilter).toHaveBeenLastCalledWith('Some text value');
});

test('should call sortByAmount on sortBy change', () => {
  wrapper.find('select').simulate('change', {
    target: {
      value: 'date'
    }
  });
  expect(sortByDate).toHaveBeenCalled();

  wrapper.find('select').simulate('change', {
    target: {
      value: 'amount'
    }
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test('should be called setDate on calling onDatesChange of DateRangePicker', () => {
  wrapper.find('withStyles(DateRangePicker)')
        .prop('onDatesChange')(moment(0).add(-7, 'days'), moment(0).add(7, 'days'));

  expect(setDate).toHaveBeenLastCalledWith(moment(0).add(-7, 'days'), moment(0).add(7, 'days'));
});

test('should set state calendarFocused on onFocusChange', () => {
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')('startDate');
  expect(wrapper.state('calendarFocused')).toBe('startDate');

  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')('endDate');
  expect(wrapper.state('calendarFocused')).toBe('endDate');

  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(null);
  expect(wrapper.state('calendarFocused')).toBe(null);
});