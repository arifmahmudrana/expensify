import React from 'react';
import { shallow } from 'enzyme';
import { Create } from '../../components/Create';
const expense = {
  description: 'Description 1',
  amount: 100,
  note: 'Note 1'
};

let wrapper, onSubmit;

beforeEach(() => {
  onSubmit = jest.fn();
  wrapper = shallow(<Create storeExpense={onSubmit} />);
});

test('create page should render correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should onSubmit be called', () => {
  wrapper.find('Form').prop('onSubmit')(expense);
  expect(onSubmit).toHaveBeenLastCalledWith(expense);
});