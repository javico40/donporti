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
  TouchableOpacity
} from 'react-native';

const { width, height } = Dimensions.get("window");

const background = require("./login1_bg.png");
const mark = require("./login1_mark.png");
const lockIcon = require("./login1_lock.png");
const personIcon = require("./login1_person.png");

export default class LoginScreen extends Component {
	
	constructor(){
		super()

		this.state = {
			user:"",
			password:"",
			error:""
		}

		this.loginValidate = this.loginValidate.bind(this);
		
	}

    _handlePress(event) {
        let username = this.state.user;
        let password = this.state.password;

        this.loginValidate(username, password);
    }

    _handleRegister(event) {
      
      this.props.navigator.push({
        'id': 'Signup'
        });
      
    }

    _handleForgotPass(event) {
     
    }


  async loginValidate(username, password){

	try{

	console.log(username);
	console.log('test '+password);

	this.props.navigator.push({
		'id': 'Memberarea'
	});
	
	/*
	let response = await fetch('http://localhost:8089/users/',{
    		  method: 'GET',
    		  headers: {
    			  'Accept':'application/json',
    			  'Content-Type':'application/json',
    		  },
    		  body: JSON.stringify({
    			  session:{
    				  email:username,
    				  password:password,
    			  }
    		  })
    	  });
		  
		  


     console.log(this.state.user);
     console.log(this.state.password);


     console.log('entro funciona');

        var usuario = this.state.user;
        var password = this.state.password;

        console.log('datos:'+usuario);
*/

    /*
	  let response = await fetch('http://localhost:8000/users/',{
		  method: 'POST',
		  headers: {
			  'Accept':'application/json',
			  'Content-Type':'application/json', 
		  },
		  body: JSON.stringify({
			  session:{
				  email:this.state.email,
				  password:this.state.password,
			  }
		  })
	  });
	  
	  let res = await response.text();
	  
	  if(response.status >= 200 && response.status < 300){
		  this.setState({error:""});
		  let accessToken = res;
		  console.log("res token:" + accessToken);
	  }else{
		  let error = res;
		  throw res;
	  }


	*/
	}catch(error){
		//this.setState({error:error});
		console.log("error "+error);
	}
	  
  }	
	
  render() {
    return (
      <View style={styles.container}>
        <Image source={background} style={styles.background} resizeMode="cover">
          <View style={styles.markWrap}>
            <Image source={mark} style={styles.mark} resizeMode="contain" />
          </View>
          <View style={styles.wrapper}>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image source={personIcon} style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput 
                placeholder="Usuario" 
                placeholderTextColor="#FFF"
                style={styles.input}
                onChangeText={(text) => this.setState({user: text})}
              />
            </View>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image source={lockIcon} style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput 
                placeholderTextColor="#FFF"
                placeholder="Contraseña" 
                style={styles.input}
                onChangeText={(text) => this.setState({password: text})}
                secureTextEntry 
              />
            </View>
            <TouchableOpacity activeOpacity={.5} onPress={this._handleForgotPass.bind(this)}>
              <View>
                <Text style={styles.forgotPasswordText}>¿Olvido su contraseña?</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.5} onPress={this._handlePress.bind(this)}>
              <View style={styles.button} >
                <Text style={styles.buttonText}>Entrar</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <View style={styles.signupWrap}>
              <Text style={styles.accountText}>¿Aun no tienes una cuenta?</Text>
              <TouchableOpacity activeOpacity={.5} onPress={this._handleRegister.bind(this)}>
                <View>
                  <Text style={styles.signupLinkText}>Registrate</Text>
                </View>
              </TouchableOpacity>
            </View>
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
    paddingVertical: 30,
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
