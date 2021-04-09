import * as React from 'react';
import WelcomeScreen from './screens/WelcomeScreen'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {AppDrawerNavigator} from './components/AppDrawerNavigator'
import TestScreen from './screens/TestPage'
import ResultScreen from './screens/ResultScreen'

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: {screen: WelcomeScreen},
  Drawer: {screen: AppDrawerNavigator },
  TestPage: {screen: TestScreen},
  ResultScreen: {screen: ResultScreen},
});

const AppContainer = createAppContainer(AppNavigator);
