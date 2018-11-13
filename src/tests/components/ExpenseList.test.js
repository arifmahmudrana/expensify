import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
const expenses = [
  {
    id: '1',
    description: 'Description 1',
    amount: 100,
    note: 'Note 1',
    createdAt: 1541604692290
  },
  {
    id: '2',
    description: 'Description 2',
    amount: 200,
    note: 'Note 2',
    createdAt: 1541777492293
  }
];

test('expense list should render correctly when no expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);

  expect(wrapper).toMatchSnapshot();
});

test('expense list should render correctly when there is expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);

  expect(wrapper).toMatchSnapshot();
});