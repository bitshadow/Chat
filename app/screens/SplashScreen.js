// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import {
  Divider
} from 'react-native-elements';

import type { ScreenNavigationProp } from 'react-navigation';
import Button from '../components/Button';

type SplashScreenProps = {
  resetRoute: (routeName: string) => void,
  navigation: ScreenNavigationProp,
  user: any
};

class SplashScreen extends Component<SplashScreenProps, *> {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const {
      navigation,
      user,
      resetRoute
    } = this.props;

    if (user && user.uid) {
      resetRoute('Chat');
    }

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Hoopsapp Chat</Text>
        <Button
          title="Signup"
          type="primary"
          onPress={() => navigation.navigate('Signup') }
        />
         <Divider style={{height: 15}}/>
        <Button
          title="Login"
          type="secondary"
          onPress={() => navigation.navigate('Login') }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  heading: {
    textAlign: 'center',
    fontSize: 30,
    padding: 30,
  }
});

const mapStateToProps = (state) => {
  return {
    user: state.session.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    // this is to avoid sliding of routes
    // before moving to another screen
    resetRoute: (routeName) => {
      dispatch({
        type: 'Navigation/RESET',
        index: 0,
        actions: [
          {
            type: 'Navigation/NAVIGATE',
            routeName: routeName,
          },
        ],
      });
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
