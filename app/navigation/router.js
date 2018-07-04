// @flow
import { StackNavigator } from 'react-navigation';
import SplashScreen from '../screens/SplashScreen';
import SignupScreen from '../screens/SignupScreen';
import ChatScreen from '../screens/ChatScreen';
import LoginScreen from '../screens/LoginScreen';

const defaultStackOptions = {
  mode: 'card'
};

export default StackNavigator(
  {
    Splash: {
      screen: SplashScreen,
    },
    Signup: {
      screen: SignupScreen
    },
    Login: {
      screen: LoginScreen
    },
    Chat: {
      screen: ChatScreen
    }
  },
  Object.assign({}, defaultStackOptions, {
    initialRouteName: 'Splash',
    headerMode: 'none',
    mode: 'modal',
  })
);
