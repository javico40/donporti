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
  AsyncStorage,
  Alert
} from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import {setJSExceptionHandler, getJSExceptionHandler} from 'react-native-exception-handler';
import {setNativeExceptionHandler} from 'react-native-exception-handler';
import RNRestart from 'react-native-restart';
import { GoogleAnalyticsTracker, GoogleTagManager, GoogleAnalyticsSettings } from 'react-native-google-analytics-bridge';

// The tracker must be constructed, and you can have multiple:
let tracker = new GoogleAnalyticsTracker('UA-107124383-1');

// The GoogleAnalyticsSettings is static, and settings are applied across all trackers:
GoogleAnalyticsSettings.setDispatchInterval(30);


const errorHandler = (e, isFatal) => {
  if (isFatal) {
    Alert.alert(
        'Un error inexperado ha ocurrido',
        `
        Error: ${(isFatal) ? 'Fatal:' : ''} ${e.name} ${e.message}

        We will need to restart the app.
        `,
      [{
        text: 'Reiniciar',
        onPress: () => {
          RNRestart.Restart();
        }
      }]
    );
  } else {
    console.log(e); // So that we can see it in the ADB logs in case of Android if needed
  }
};

// registering the error handler (maybe u can do this in the index.android.js or index.ios.js)
setJSExceptionHandler(errorHandler);

// getJSExceptionHandler gives the currently set JS exception handler
const currentHandler = getJSExceptionHandler();

setNativeExceptionHandler((exceptionString) => {
  // This is your custom global error handler
  // You do stuff likehit google analytics to track crashes.
  // or hit a custom api to inform the dev team.
  //NOTE: alert or showing any UI change via JS
  //WILL NOT WORK in case of NATIVE ERRORS.
  console.log('Error en la app');
});

import LoginScreen from "./screens/login/index";
import SignupScreen from "./screens/signup/index";
import MemberScreen from "./screens/members/index";
import ClassScreen from "./screens/class/index";
import ProducstScreen from "./screens/products/index";
import PaymethodsScreen from "./screens/paymethods/index";
import CreditCardsScreen from "./screens/ccards/index";
import CreditCardRegScreen from "./screens/ccardreg/index";
import FrontendScreen from "./screens/frontend/index";
import SideBarScreen from "./screens/sidebar/SideBar";

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

const Drawer = DrawerNavigator(
  {
    Frontend: { screen: FrontendScreen, title: 'Bienvenido' },
    Memberarea: { screen: MemberScreen, title: 'Bienvenido' }
    },
  {
      initialRouteName: "Frontend",
      contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBarScreen {...props} />
  }
);

const SimpleApp = StackNavigator(
{
  Drawer: { screen: Drawer },
  Frontend: { screen: FrontendScreen, title: 'Bienvenido' },
  Memberarea: { screen: MemberScreen, title: 'Bienvenido' },
  Home: { screen: LoginScreen },
  Signup: { screen: SignupScreen, title: 'Registro de Usuarios' },
  Class: { screen: ClassScreen, title: 'Clases disponibles' },
  Product: { screen: ProducstScreen, title: 'Ofertas' },
  Paymethod: { screen: PaymethodsScreen, title: 'Metodos de pago' },
  CreditCard: { screen: CreditCardsScreen, title: 'Tarjetas de credito' },
  CreditCardReg: { screen: CreditCardRegScreen, title: 'Registrar tarjeta de credito' },
  SideBar: { screen: SideBarScreen, title: '' },
},
{
  initialRouteName: "Drawer",
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
