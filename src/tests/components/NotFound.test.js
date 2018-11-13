import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../components/NotFound';

test('NotFound should render correctly', () => {
  const wrapper = shallow(<NotFound />);

  expect(wrapper).toMatchSnapshot();
});