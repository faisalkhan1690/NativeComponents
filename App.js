/**
 * Sample React Native App
 * httmps://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component}from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeComponent from './HomeComponent';
import SectionListComponent from './SectionListComponent';
import DrawerLayoutComponent from './DrawerLayoutComponent.';
import DatePickerComponent from './DatePickerComponent';
import NavigatorComponent from './NavigatorComponent';
import ButtonComponent from './ButtonComponent';




export default class App extends Component {
  render() {
    return <RootStack/>;
  }
}

const RootStack = createStackNavigator({
  Home: {
    screen: HomeComponent
  },
  Button: {
    screen: ButtonComponent
  },
  SectionList: {
    screen: SectionListComponent
  },
  DrawerLayout: {
    screen: DrawerLayoutComponent
  },
  DatePicker: {
    screen: DatePickerComponent
  },
  Navigator: {
    screen: NavigatorComponent
  }
});