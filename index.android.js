/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';

import CustomComponents from 'react-native-deprecated-custom-components';

import LoginScreen from "./screens/login/index";
import SignupScreen from "./screens/signup/index";
import MemberScreen from "./screens/members/index";

export default class govirfitapp extends Component {

  render() {
    return (
       <CustomComponents.Navigator initialRoute = {{'id': 'Login'}}
        renderScene = {this.navigatorRenderScene} />
    );
  }

  navigatorRenderScene(route, navigator){
    _navigator = navigator;
    
    switch(route.id){
    case 'Login':
      return( <LoginScreen navigator = {navigator} /> );
    case 'Memberarea':
      return( <MemberScreen navigator = {navigator} /> );
    case 'Signup':
      return( <SignupScreen navigator = {navigator} /> );
      
    }
    
  }  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('govirfitapp', () => govirfitapp);
