// @flow
import React, { Component } from 'react';
import type { TouchableWithoutFeedback } from 'react-native';
import { Button } from 'react-native-elements';
import colors from '../../utils/colors';
import { scale } from '../../utils/styles';

type ButtonProps = TouchableWithoutFeedback & {
  title: string,
  onPress: () => void,
  type?: 'primary' | 'secondary' | 'tertiary' | 'quaternary',
  block?: boolean,
  // provide a SimpleLineIcons name from:
  // https://oblador.github.io/react-native-vector-icons/
  icon?: string,
  iconType?: string,
  iconSize?: number,
  fontSize?: number,
  large?: boolean,
  disabled?: boolean,
  loading?: boolean,
};

class ButtonComponent extends Component<ButtonProps, *> {
  static defaultProps = {
    title: '',
    type: 'primary',
    block: false,
    iconSize: 18,
    iconType: 'simple-line-icon',
    fontSize: 15,
  };

  getColor = () => {
    switch (this.props.type) {
      case 'secondary':
        return colors.blue;
      case 'tertiary':
        return colors.orange;
      case 'quaternary':
        return colors.lightGreen;
      default:
        return colors.pink;
    }
  };

  render() {
    const {
      title,
      icon,
      iconSize,
      iconType,
      fontSize,
      block,
      buttonStyle,
      containerViewStyle,
      ...rest
    } = this.props;

    return (
      <Button
        title={title.toUpperCase()}
        raised={!this.props.disabled && !this.props.loading}
        buttonStyle={{
          paddingVertical: scale(14),
          paddingHorizontal: scale(40),
          ...buttonStyle,
        }}
        containerViewStyle={
          block
            ? {
                width: '100%',
                marginLeft: 0,
                marginRight: 0,
                ...containerViewStyle,
              }
            : { ...containerViewStyle }
        }
        borderRadius={3}
        backgroundColor={this.getColor().hex()}
        disabledStyle={{
          backgroundColor: this.getColor().desaturate(0.3).lighten(0.3).hex(),
        }}
        fontWeight="bold"
        fontSize={scale(fontSize)}
        rightIcon={{
          name: icon,
          type: iconType,
          size: iconSize,
        }}
        {...rest}
      />
    );
  }
}

export default ButtonComponent;
