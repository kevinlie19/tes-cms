import { createStackNavigator } from 'react-navigation-stack';

import LoginScene from '../../scenes/LoginScene';

const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScene,
    navigationOptions: { header: null },
  },
});

export default AuthStack;
