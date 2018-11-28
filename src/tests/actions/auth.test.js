import {login, logout} from '../../actions/auth';

test('actions:auth:login', () => {
  expect(login('adasdas')).toEqual({
    type: 'LOGIN',
    uid: 'adasdas'
  });
});

test('actions:auth:logout', () => {
  expect(logout()).toEqual({
    type: 'LOGOUT'
  });
});