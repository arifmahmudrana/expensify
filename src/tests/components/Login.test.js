import React from 'react';
import { shallow } from 'enzyme';
import {Login} from '../../components/Login';

let wrapper, startLogin;

beforeEach(() => {
  startLogin = jest.fn();
  wrapper = shallow(<Login startLogin={startLogin} />);
});

test('Login should render correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should startLogin be called', () => {
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
});