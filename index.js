import { AppRegistry, YellowBox } from 'react-native'
import App from './app/index'
// react-navigation error, ignore until resolved upstream
// https://github.com/react-navigation/react-navigation/issues/3956
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module A0Auth0',
  'Module RCTImageLoader',
  'Module RNFetchBlob',
  'Module RCTCardIOUtilities requires main queue setup',
  'Class RCTCxxModule',
  'Setting a timer',
  'Warning: Cannot update during an',
  'Cannot update during an'
]);

AppRegistry.registerComponent('Chat', () => App)
