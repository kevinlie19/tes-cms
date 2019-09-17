import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import AppStack from './AppStack';
import AuthStack from './AuthStack';
import LoginScene from '../../scenes/LoginScene';

const AppNavigator: any = createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
    Login: LoginScene,
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(AppNavigator);
