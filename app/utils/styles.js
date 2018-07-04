// @flow
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export function scale(x: number) {
  return x * Math.min(screenWidth / 360, 1);
}
