import { createStackNavigator } from 'react-navigation-stack';

import HomeScene from '../../scenes/HomeScene';
import EventListScene from '../../scenes/EventListScene';

const AppStack = createStackNavigator({
  Home: {
    screen: HomeScene,
    navigationOptions: { header: null },
  },
  Event: {
    screen: EventListScene,
    navigationOptions: { header: null },
  },
});

export default AppStack;
