import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';
import Repository from './pages/Repository';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
      Repository,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitle: 'visible',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#EE8C87',
        },
        headerTintColor: '#FFF',
      },
    },
  ),
);

export default Routes;
