import React from 'react';
import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';

import { Image as Picture } from 'react-native-elements';

type Props = {
  newImageStyle?: StyleProp<ViewStyle>;
  src?: string;
  type: 'logo' | 'banner' | 'event';
  resizeMode?: 'center' | 'contain' | 'stretch' | 'cover' | 'repeat';
};

export default function Image(props: Props) {
  let { src, type, resizeMode, newImageStyle, ...other } = props;

  return !src ? (
    <Picture
      source={require('../../assets/images/placeholder.jpg')}
      style={styles[type || 'logo']}
      containerStyle={newImageStyle}
      PlaceholderContent={<ActivityIndicator />}
      resizeMode={resizeMode}
      {...other}
    />
  ) : (
    <Picture
      source={{ uri: src }}
      style={styles[type || 'logo']}
      containerStyle={newImageStyle}
      PlaceholderContent={<ActivityIndicator />}
      resizeMode={resizeMode}
      {...other}
    />
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 260,
    height: 200,
  },
  event: {
    width: 120,
    height: 56,
    borderRadius: 4,
  },
  banner: {
    width: 328,
    height: 100,
  },
});
