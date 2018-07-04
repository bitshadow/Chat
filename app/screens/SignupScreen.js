// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import type { ScreenNavigationProp } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import { connect } from 'react-redux';
import { signupUser } from '../store/session'

type SignupScreenProps = {
  error: string,
  signup: (string, string) => void
};

class SignupScreen extends Component<SignupScreenProps, *> {
  static navigationOptions = {
    title: 'Signup',
  };

  props: {
    navigation: ScreenNavigationProp,
  };

  render() {
    return (
      <View style={styles.container}>
        <AuthForm
          onPress={this.props.signup}
          error={this.props.error}
          loading={this.props.loading}
          title="Sign up"
        />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={{textAlign: 'center', padding: 5}}>Log in?</Text>
        </TouchableOpacity>
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

const mapStateToProps = (state) => {
  return {
    error: state.session.error,
    loading: state.session.loading
  }
};

const mapDispatchToProps = {
  signup: signupUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen)
