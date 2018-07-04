#!/usr/bin/env bash

dir=$(dirname $0)
name=${1}Screen

cd ${dir}
touch ${name}.js

echo "// @flow
import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import type { ScreenNavigationProp } from 'react-navigation';

class $name extends Component<*, *> {
  static navigationOptions = {
    title: '$1',
  };

  props: {
    navigation: ScreenNavigationProp,
  };

  render() {
    return (
      <View></View>
    );
  }
}

export default $name;" >> ${name}.js
