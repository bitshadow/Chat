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
import { loginUser } from '../store/session'

type LoginScreenProps = {
  error: string,
  login: (string, string) => void
};

class SignupScreen extends Component<LoginScreenProps, *> {
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
          onPress={this.props.login}
          error={this.props.error}
          loading={this.props.loading}
          title="Log in"
        />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
          <Text style={{textAlign: 'center', padding: 5}}>Create Account?</Text>
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
  login: loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen)
