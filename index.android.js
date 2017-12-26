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

import { StackNavigator } from 'react-navigation';

import LoginScreen from "./screens/login/index";
import SignupScreen from "./screens/signup/index";
import MemberScreen from "./screens/members/index";
import ClassScreen from "./screens/class/index";
import ProducstScreen from "./screens/products/index";
import PaymethodsScreen from "./screens/paymethods/index";
import CreditCardsScreen from "./screens/ccards/index";
import CreditCardRegScreen from "./screens/ccardreg/index";

export default class govirfitapp extends Component {

  static navigationOptions = {
    title: 'Home Screen',
  };

  render() {

    const { navigation } = this.props;
    
    return (
        <View style={styles.container}>
          <LoginScreen navigation={ navigation } />
        </View>

      /*
       <CustomComponents.Navigator initialRoute = {{'id': 'Login'}}
        renderScene = {this.navigatorRenderScene} />*/
    );
  }

/*
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
  }*/


}

const SimpleApp = StackNavigator(
{
  Memberarea: { screen: MemberScreen, title: 'Bienvenido' },
  Home: { screen: LoginScreen },
  Signup: { screen: SignupScreen, title: 'Registro de Usuarios' },
  Class: { screen: ClassScreen, title: 'Clases disponibles' },
  Product: { screen: ProducstScreen, title: 'Ofertas' },
  Paymethod: { screen: PaymethodsScreen, title: 'Metodos de pago' },
  CreditCard: { screen: CreditCardsScreen, title: 'Tarjetas de credito' },
  CreditCardReg: { screen: CreditCardRegScreen, title: 'Registrar tarjeta de credito' },
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
}
}
);


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

AppRegistry.registerComponent('govirfitapp', () => SimpleApp);
