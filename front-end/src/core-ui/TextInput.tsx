import React from 'react';
import {
  StyleSheet,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
  TextInput as Input,
} from 'react-native';
// import { Input } from 'react-native-elements';

import { BLACK } from '../constants/color';

type Props = TextInputProps & {
  newContainerStyle?: StyleProp<ViewStyle>;
  newInputContainerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  placeholder?: string;
  onChangeText: (text: string) => void;
};

export default function TextInput(props: Props) {
  let {
    newContainerStyle,
    newInputContainerStyle,
    inputStyle,
    placeholder,
    onChangeText,
    ...otherProps
  } = props;

  // return (
  //   <Input
  //     containerStyle={[styles.containerItemBoxTextInput, newContainerStyle]}
  //     inputContainerStyle={[
  //       styles.defaultInputContainerStyle,
  //       newInputContainerStyle,
  //     ]}
  //     inputStyle={[styles.defaultTextStyle, inputStyle]}
  //     placeholder={placeholder}
  //     onChangeText={onChangeText}
  //     secureTextEntry={placeholder === 'Password'}
  //     autoCapitalize="none"
  //     {...otherProps}
  //   />
  // );
  return (
    <Input
      style={styles.containerItemBoxTextInput}
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry={placeholder === 'Password'}
      autoCapitalize="none"
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  containerItemBoxTextInput: {
    flex: 1,
    width: 300,
    borderWidth: 1,
    borderColor: BLACK,
    borderRadius: 8,
    marginBottom: 24,
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
  defaultInputContainerStyle: {
    borderBottomWidth: 0,
  },
  defaultTextStyle: {
    color: BLACK,
    fontSize: 14,
  },
});
