import 'react-native';
import 'isomorphic-fetch';
import React from 'react';
import renderer from 'react-test-renderer';
import AuthFormComponent from './AuthFormComponent';

test('renders correctly', () => {
  const tree = renderer.create(<AuthFormComponent />).toJSON();

  expect(tree).toMatchSnapshot();
});
