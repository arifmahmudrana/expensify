import React from 'react';
import { shallow } from 'enzyme';
import { Edit } from '../../components/Edit';
import moment from 'moment';
const expense = {
  id: '1',
  description: 'Description 1',
  amount: 100,
  note: 'Note 1',
  createdAt: moment(0)
};

let wrapper, editExpense, removeExpense;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  wrapper = shallow(<Edit editExpense={editExpense} removeExpense={removeExpense} expense={expense} />);
});

test('edit page should render correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should editExpense be called with correct arguments', () => {
  wrapper.find('Form').prop('onSubmit')(expense);
  expect(editExpense).toHaveBeenLastCalledWith(expense);
});

test('should removeExpense be called with correct arguments', () => {
  wrapper.find('button').simulate('click');
  expect(removeExpense).toHaveBeenCalled();
});