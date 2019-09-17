import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

type Props = NavigationScreenProps & {};

export default function EventListScene(props: Props) {
  return (
    <View style={styles.container}>
      <Text>Open up EventListScene.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
