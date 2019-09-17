import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

import {
  WHITE,
  CUSTOM_YELLOW,
  CUSTOM_BLACK,
  CUSTOM_RED,
  BLUE,
} from '../constants/color';

type Props = {
  newStyleButton?: StyleProp<ViewStyle>;
  newStyleText?: StyleProp<TextStyle>;
  newTextContainer?: StyleProp<ViewStyle>;
  buttonType: 'textOnly' | 'textIcon' | 'iconOnly';
  text?: string;
  icon?: JSX.Element;
  onPress?: () => void;
};

export default function Button(props: Props) {
  let {
    newStyleButton,
    newStyleText,
    newTextContainer,
    buttonType,
    text,
    icon,
    onPress,
  } = props;

  const _renderTextButton = () => (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.defaultStyle, newStyleButton]}
    >
      <View style={styles.container}>
        <View style={[styles.textContainer, newTextContainer]}>
          <Text style={[styles.defaultTextStyle, newStyleText]}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const _renderIconButton = () => (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.iconButtonStyle, newStyleButton]}
    >
      <View style={styles.container}>{icon}</View>
    </TouchableOpacity>
  );

  const _renderTextIconButton = () => (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.textIconButtonStyle, newStyleButton]}
    >
      <View style={styles.container}>
        <View style={[styles.textContainer, newTextContainer]}>
          <View style={styles.leftIconContainer}>{icon}</View>
          <Text style={[styles.defaultTextStyle, newStyleText]}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return buttonType === 'textOnly' && text
    ? _renderTextButton()
    : buttonType === 'iconOnly' && icon
    ? _renderIconButton()
    : buttonType === 'textIcon' && icon && text
    ? _renderTextIconButton()
    : null;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftIconContainer: {
    paddingRight: 7,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultStyle: {
    width: '90%',
    height: 40,
    backgroundColor: CUSTOM_YELLOW,
    marginHorizontal: 16,
    borderRadius: 6,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
  },
  iconButtonStyle: {
    width: 42,
    height: 42,
    backgroundColor: BLUE,
    marginHorizontal: 16,
    borderRadius: 6,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
  },
  textIconButtonStyle: {
    width: '90%',
    height: 40,
    backgroundColor: CUSTOM_RED,
    marginHorizontal: 16,
    borderRadius: 6,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
  },
  defaultTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: CUSTOM_BLACK,
  },
  secondaryTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: WHITE,
  },
});
