import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../../components/Loading';

test('Loading should render correctly', () => {
  const wrapper = shallow(<Loading />);

  expect(wrapper).toMatchSnapshot();
});