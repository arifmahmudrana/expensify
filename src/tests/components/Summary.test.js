import React from 'react';
import { shallow } from 'enzyme';
import { Summary } from '../../components/Summary';

test('Summary should render correctly', () => {
  const wrapper = shallow(<Summary count={1} total={100000} />);

  expect(wrapper).toMatchSnapshot();
});

test('Summary should render correctly for plural version', () => {
  const wrapper = shallow(<Summary count={2} total={100.1000} />);

  expect(wrapper).toMatchSnapshot();
});