import 'react-native';
import 'isomorphic-fetch';
import React from 'react';
import renderer from 'react-test-renderer';
import ExpendingActivityIndicatorComponent from './ExpendingActivityIndicatorComponent';

test.skip('renders correctly', () => {
  const tree = renderer.create(<ExpendingActivityIndicatorComponent />).toJSON();

  expect(tree).toMatchSnapshot();
});
