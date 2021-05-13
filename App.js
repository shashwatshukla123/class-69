import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchScreens from './screens/SearchScreens';
import BookTransationScreen from './screens/BookTransationScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component{
  render(){
    return(
    <AppContainer/>
    )
  }
}

const TabNavigator=createBottomTabNavigator({
  transaction:{screen:BookTransationScreen},
  search:{screen:SearchScreens}
})
const AppContainer=createAppContainer(TabNavigator)