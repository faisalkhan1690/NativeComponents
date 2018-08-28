/**
 * Sample React Native App
 * httmps://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component}from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import SectionListComponent from './SectionListComponent';
import DrawerLayoutComponent from './DrawerLayoutComponent.';
import DatePickerComponent from './DatePickerComponent';
import NavigatorComponent from './NavigatorComponent';



export default class App extends Component {
  render() {
    return <RootStack/>;
  }
}

const RootStack = createStackNavigator({
  Home: {
    screen: Home
  },
  SectionListComponent: {
    screen: SectionListComponent
  },
  DrawerLayoutComponent: {
    screen: DrawerLayoutComponent
  },
  DatePickerComponent: {
    screen: DatePickerComponent
  },
  NavigatorComponent: {
    screen: NavigatorComponent
  }
});