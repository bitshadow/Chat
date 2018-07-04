// @flow
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { map } from 'lodash';
import type { ScreenNavigationProp } from 'react-navigation';
import { GiftedChat } from 'react-native-gifted-chat';
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux';

import { sendMessage, loadMessages } from '../store/chat'
import colors from '../utils/colors';
import { logoutUser } from '../store/session'
import ExpendingActivityIndicator from '../components/ExpendingActivityIndicator';
import Button from '../components/Button';

class ChatScreen extends Component<*, *> {
  static navigationOptions = {
    title: 'Chat',
  };

  props: {
    navigation: ScreenNavigationProp,
    sendMessage: (text: string) => void,
    loadMessages: () => void,
    logoutUser: () => void,
    error: string,
    messages: Array<any>,
    loading: boolean,
    user: any
  };

  sendMessage(message) {
    this.props.sendMessage(message[0].text);
  }

  componentDidMount() {
    this.props.loadMessages()
  }

  render() {
    const { error, messages, loading, user } = this.props;

    if (loading || !user) {
      return <ExpendingActivityIndicator/>;
    }

    const messageList = map(messages, (value, key) => {
        value._id = key;
        value.user.avatar = 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png';

        return value;
      })
      .reverse()
      .map((message) => {
        message.key = message.createdAt;
        message.id = message.createdAt;
        message.user._id = message.user.id;

        return message;
      });

    if (error) {
      Toast.showWithGravity(error, Toast.LONG, Toast.CENTER );
    }

    return (
      <View style={styles.container}>
        <GiftedChat
          messages={messageList}
          onSend={(message) => this.sendMessage(message)}
          user={{
            _id: user.uid,
          }}
        />
        <View style={styles.logout}>
          <Button onPress={this.props.logoutUser} type="secondary" title="Log out" />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.session.error,
    loading: state.session.loading,
    messages: state.chat.messages,
    user: state.session.user
  }
};

const mapDispatchToProps = {
  sendMessage: sendMessage,
  loadMessages: loadMessages,
  logoutUser: logoutUser
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logout: {
    padding: 10,
    alignItems: 'flex-end',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#aaa'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen)
