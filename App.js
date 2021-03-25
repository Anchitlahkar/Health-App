import * as React from 'react';
import WelcomeScreen from './screens/WelcomeScreen'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {AppStackNavigator} from './components/AppStackNavigator'
import {AppDrawerNavigator} from './components/AppDrawerNavigator'
import StartUpScreen from './screens/StartUpScreen'
import CheckBox from './screens/CheckBox'

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: {screen: WelcomeScreen},
  Drawer: {screen: AppDrawerNavigator },
  CheckBox: {screen: CheckBox}
});

const AppContainer = createAppContainer(AppNavigator);
