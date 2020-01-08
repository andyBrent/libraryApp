import * as React from 'react';
import {AppRegistry, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import AdministerScreen from '../administer/administerPage';
import StudentScreen from '../student/studentPage';
import WelcomeScreen from '../welcome/welcomePage';

const RootStack = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Student: StudentScreen,
    Administer: AdministerScreen,
  },
  {
    initialRouteName: 'Welcome',
  },
);

const AppContainer = createAppContainer(RootStack);
export default AppContainer;
