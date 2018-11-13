import React from 'react';
import { shallow } from 'enzyme';
import Form from '../../components/Form';
import moment from 'moment';
const expense = {
  id: '1',
  description: 'Description 1',
  amount: 100,
  note: 'Note 1',
  createdAt: 1541604692290
};

test('create form should render correctly', () => {
  const wrapper = shallow(<Form />);

  expect(wrapper).toMatchSnapshot();
});

test('edit form should render correctly', () => {
  const wrapper = shallow(<Form {...expense} amount={expense.amount/100} />);

  expect(wrapper).toMatchSnapshot();
});

test('form should render error on empty description or amount & hide on description & amount value', () => {
  const wrapper = shallow(<Form onSubmit={() => {}} />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault() {

    }
  });
  expect(wrapper).toMatchSnapshot();

  let value = 'New description'
  wrapper.find('input').at(0).simulate('change', {
    target: {
      value
    }
  });
  wrapper.find('form').simulate('submit', {
    preventDefault() {

    }
  });
  expect(wrapper).toMatchSnapshot();

  value = 'abc';
  let previousValue = wrapper.state('amount');
  wrapper.find('input').at(1).simulate('change', {
    target: {
      value
    }
  });
  expect(wrapper.state('amount')).toBe(previousValue);
  wrapper.find('form').simulate('submit', {
    preventDefault() {

    }
  });
  expect(wrapper).toMatchSnapshot();

  value = '10';
  wrapper.find('input').at(1).simulate('change', {
    target: {
      value
    }
  });
  expect(wrapper.state('amount')).toBe(value);
  wrapper.find('form').simulate('submit', {
    preventDefault() {

    }
  });
  expect(wrapper).toMatchSnapshot();

  value = '10.01';
  wrapper.find('input').at(1).simulate('change', {
    target: {
      value
    }
  });
  expect(wrapper.state('amount')).toBe(value);
  wrapper.find('form').simulate('submit', {
    preventDefault() {

    }
  });
  expect(wrapper).toMatchSnapshot();
});

test('form should change note', () => {
  const wrapper = shallow(<Form onSubmit={() => {}} />);
  const value = 'New note'
  wrapper.find('textarea').simulate('change', {
    target: {
      value
    }
  });
  expect(wrapper.state('note')).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test('form onSubmit handler called', () => {
  const onSubmit = jest.fn();
  const wrapper = shallow(<Form onSubmit={onSubmit} />);
  wrapper.find('form').simulate('submit', {
    preventDefault() {

    }
  });

  expect(onSubmit).not.toBeCalled();
  
  wrapper.find('input').at(0).simulate('change', {
    target: {
      value: 'Description 1'
    }
  });
  wrapper.find('input').at(1).simulate('change', {
    target: {
      value: '10.01'
    }
  });
  wrapper.find('form').simulate('submit', {
    preventDefault() {

    }
  });

  expect(onSubmit).toBeCalledWith({
    amount: 1001,
    createdAt: 0,
    description: 'Description 1',
    note: ''
  });
  
  wrapper.find('input').at(0).simulate('change', {
    target: {
      value: 'Description 1 '
    }
  });
  wrapper.find('form').simulate('submit', {
    preventDefault() {

    }
  });

  expect(onSubmit).toBeCalledWith({
    amount: 1001,
    createdAt: 0,
    description: 'Description 1',
    note: ''
  });
});

test('createdAt should change on calling onCreatedAtChange method & set to state', () => {
  const createdAt = moment(100);
  const wrapper = shallow(<Form />);
  wrapper.instance().onCreatedAtChange(createdAt);
  expect(wrapper.state('createdAt')).toEqual(createdAt);

  wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(createdAt);
  expect(wrapper.state('createdAt')).toEqual(createdAt);
});

test('focus change should change on calling onFocusChange method & set to state', () => {
  const wrapper = shallow(<Form />);
  let focused = false;
  wrapper.instance().onCalendarFocusChange({focused});
  expect(wrapper.state('calendarFocused')).toBe(focused);

  wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused});
  expect(wrapper.state('calendarFocused')).toBe(focused);

  focused = true;
  wrapper.instance().onCalendarFocusChange({focused});
  expect(wrapper.state('calendarFocused')).toBe(focused);

  wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused});
  expect(wrapper.state('calendarFocused')).toBe(focused);
});