// @flow
import React, { Component } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native';

type ExpendingActivityIndicatorProps = {};

export default class ExpendingActivityIndicatorComponent extends Component<ExpendingActivityIndicatorProps, *> {
  static defaultProps = {};

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});


