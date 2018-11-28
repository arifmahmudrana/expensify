import React from 'react';
import { shallow } from 'enzyme';
import {Header} from '../../components/Header';

let wrapper, startLogout;

beforeEach(() => {
  startLogout = jest.fn();
  wrapper = shallow(<Header startLogout={startLogout} />);
});

test('header should render correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should startLogout be called', () => {
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});