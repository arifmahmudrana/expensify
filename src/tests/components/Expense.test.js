import React from 'react';
import { shallow } from 'enzyme';
import Expense from '../../components/Expense';
const expense = {
  id: '1',
  description: 'Description 1',
  amount: 100,
  note: 'Note 1',
  createdAt: 1541604692290
};

test('expense should render correctly', () => {
  const wrapper = shallow(<Expense {...expense} />);

  expect(wrapper).toMatchSnapshot();
});