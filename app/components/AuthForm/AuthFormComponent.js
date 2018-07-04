// @flow
import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import {
  FormInput,
  FormValidationMessage,
} from 'react-native-elements';
import Form from 'react-native-form';
import Button from '../Button';

type AuthFormProps = {
  onPress: () => void,
  error: string,
  loading: boolean,
  title: string
};

export default class AuthFormComponent extends Component<AuthFormProps, *> {
  static defaultProps = {
    loading: false
  };

  handleSubmit = () => {
    if (this.form) {
      const vals = this.form.getValues();

      this.props.onPress(vals.email, vals.password);
    }
  }

  render() {
    const { title, loading } = this.props;

    return (
      <View>
        <Form ref={e => (this.form = e)}>
          <FormInput
            name="email"
            type="TextInput"
            keyboardType="email-address"
            autoCapitalize="none"
            returnKeyType="next"
            enablesReturnKeyAutomatically
            onSubmitEditing={() => {
              this.ePassword.focus();
            }}
            underlineColorAndroid="transparent"
            placeholder="E-mail Address"
          />
          <FormInput
            name="password"
            type="TextInput"
            ref={e => (this.ePassword = e)}
            autoCapitalize="none"
            returnKeyType="done"
            secureTextEntry
            enablesReturnKeyAutomatically
            selectTextOnFocus
            placeholder="Password"
            onSubmitEditing={this.handleSubmit}
            underlineColorAndroid="transparent"
          />
          <FormValidationMessage
            labelStyle={{
              marginBottom: 10,
              marginRight: 20,
              color: 'red',
              textAlign: 'right',
            }}
          >
            {this.props.error}
          </FormValidationMessage>
        </Form>
        <Button
          title={title}
          type="secondary"
          onPress={this.handleSubmit}
          loading={loading}
        />
      </View>
    );
  }
}
