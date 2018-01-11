import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

import md5 from "react-native-md5";

const { width, height } = Dimensions.get("window");

const background = require("./frontend_bg.jpg");

export default class FrontendScreen extends Component {

  constructor(){
    super()
  }

  _handlePress(event) {

    }


  render() {

    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;

    return ( 
             <View style={styles.container}>
               <Image source={background} style={styles.background} resizeMode="cover">
                  <View style={styles.wrapper}>
                      <TouchableOpacity activeOpacity={.5} onPress={ 
                        () => navigate('Memberarea',{ filterID: 10 })
                      }>
                          <View style={styles.button} >
                            <Text style={styles.buttonText}>Entrar</Text>
                          </View>
                      </TouchableOpacity>
                      </View>
                </Image>
              </View>
      );

  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  markWrap: {
    flex: 1,
    paddingVertical: 30,
  },
  mark: {
    width: null,
    height: null,
    flex: 1,
  },
  background: {
    width,
    height,
  },
  wrapper: {
    paddingVertical: 310,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC"
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 20,
    width: 20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#76C04E",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
  forgotPasswordText: {
    color: "#D8D8D8",
    backgroundColor: "transparent",
    textAlign: "right",
    paddingRight: 15,
  },
  signupWrap: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  accountText: {
    color: "#D8D8D8"
  },
  signupLinkText: {
    color: "#FFF",
    marginLeft: 5,
  }
});
