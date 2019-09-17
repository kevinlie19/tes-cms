import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { Image, Text, TextInput, Button } from '../core-ui';

import Logo from '../../assets/images/logo.png';
import { WHITE, GREY } from '../constants/color';

type Props = NavigationScreenProps & {};

type LoginSceneState = {
  email: string;
  password: string;
};

export default class LoginScene extends Component<Props, LoginSceneState> {
  state: LoginSceneState = {
    email: '',
    password: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image type="logo" src={Logo} />
        </View>
        <View style={styles.loginContainer}>
          <Text
            text="Halo!"
            type="xlarge"
            newTextStyle={styles.haloTextStyle}
          />
          <TextInput
            placeholder="Email Address"
            onChangeText={this._onChangeTextEmail}
          />
          <TextInput
            placeholder="Password"
            onChangeText={this._onChangeTextPassword}
          />
          <View style={styles.bottomContainer}>
            <Text
              text="Lupa password?"
              type="small"
              newTextStyle={styles.lupaPasswordText}
            />
            <Button
              buttonType="textOnly"
              text="Masuk"
              newStyleButton={styles.masukButton}
            />
          </View>
        </View>
      </View>
    );
  }

  _onChangeTextEmail = (newEmail: string) => {
    this.setState({
      email: newEmail,
    });
  };

  _onChangeTextPassword = (newPassword: string) => {
    this.setState({
      password: newPassword,
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoContainer: {
    flex: 1,
    marginTop: 50,
  },
  loginContainer: {
    flex: 1,
    marginBottom: 300,
  },
  haloTextStyle: {
    marginBottom: 20,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lupaPasswordText: {
    paddingTop: 10,
    fontWeight: 'normal',
    color: GREY,
  },
  masukButton: {
    width: 150,
    height: 35,
    borderRadius: 20,
    marginHorizontal: 0,
  },
});
