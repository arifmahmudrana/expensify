import auth from '../../reducers/auth';

test('should have default value set for auth reducers on init', () => {
  expect(auth(undefined, {type: '@@INIT'})).toEqual({});
});

test('should set LOGIN auth reducers', () => {
  expect(auth({uid: 'abc'}, {type: 'LOGIN', uid: 'def'})).toEqual({uid: 'def'});
});

test('should set LOGOUT auth reducers', () => {
  expect(auth({uid: 'abc'}, {type: 'LOGOUT'})).toEqual({});
});