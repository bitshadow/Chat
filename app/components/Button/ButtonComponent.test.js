import 'react-native';
import 'isomorphic-fetch';
import React from 'react';
import renderer from 'react-test-renderer';
import ButtonComponent from './ButtonComponent';

test('renders correctly', () => {
  const tree = renderer.create(<ButtonComponent />).toJSON();

  expect(tree).toMatchSnapshot();
});
