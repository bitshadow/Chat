#!/usr/bin/env bash

dir=$(dirname $0)/$1
name=${1}Component

mkdir ${dir}
cd ${dir}
touch ${name}.js
touch index.js
touch ${name}.test.js

echo "// @flow
import React, { Component } from 'react';
import {
  View,
} from 'react-native';

type $1Props = {};

class $name extends Component<$1Props, *> {
  static defaultProps = {};

  render() {
    return (
      <View></View>
    );
  }
}

export default $name;" >> ${name}.js

echo "import $1 from './$name';

export default $1;" >> index.js

echo "import 'react-native';
import 'isomorphic-fetch';
import React from 'react';
import renderer from 'react-test-renderer';
import $1 from './$name';

test('renders correctly', () => {
  const tree = renderer.create(
    <$1 />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});" >> ${name}.test.js
