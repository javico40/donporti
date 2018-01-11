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

const background = require("./login1_bg.png");
const mark = require("./login1_mark.png");
const lockIcon = require("./login1_lock.png");
const personIcon = require("./login1_person.png");

export default class LoginScreen extends Component {
	
	constructor(){
		super()
    this.state = { username: null, password: null };
		this.loginValidate = this.loginValidate.bind(this);
		
	}

    async  _handlePress(event) {
        let username = this.state.user;
        let password = this.state.password;

        this.loginValidate(username, password);
    }

    _handleRegister(event) {

      const {navigate} = this.props.navigation;
      navigate('Signup');
      
      /*
      this.props.navigator.push({
        'id': 'Signup'
        });*/
      
    }

    _handleForgotPass(event) {
     
    }

    async saveItem(item, selectedValue) {
      try {
        await AsyncStorage.setItem(item, selectedValue);
      } catch (error) {
        console.error('AsyncStorage error: ' + error.message);
      }
    }

    async userLogout() {
    try {
      await AsyncStorage.removeItem('id_token');
      Alert.alert('Logout Success!');
      Actions.Authentication();
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }


  async loginValidate(username, password){

	try{

     //const {navigate} = this.props.navigation;
     //navigate('Memberarea', {user: answer});

  if (!this.state.username || !this.state.password) return;
  
	//console.warn(this.state.username);
	//console.warn(this.state.password);
  
  const uid = this.state.username;
  const pid = this.state.password; 

  let hex_md5v = md5.hex_md5(pid);
  
/*
    try {
      
      let response = await fetch('https://facebook.github.io/react-native/movies.json');
      let responseJson = await response.json();
      
      if(response.status >= 200 && response.status < 300){
          console.warn("funciona");
      }else{
          console.warn("no funciona");
      }

      console.warn('iniciando la validacion');

      response = await fetch('http://192.168.0.6:8089');
      responseJson = await response.json();
      
      if(response.status >= 200 && response.status < 300){
          console.warn("funcionoooo");
      }else{
          console.warn("no funcionoooo");
      }

      console.warn('terminando la validacion');


    } catch(error) {
      console.error(error);
    }*/

  
  const answer = '';

  //console.warn('comenzando el fetch');

  /*
  response = await fetch('http://192.168.0.6:8089/userlogin',{
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json', 
      },
      body: JSON.stringify({
        session:{
          uid: this.state.username,
          pid: this.state.password,
        }
      })
    });
    */

    //var local = 'http://localhost:8089/userlogin';
    //var local = 'http://10.69.194.139:8089/userlogin';
    var local = 'http://192.168.0.8:8039/govirfit/discovery.php/userlogin/';
    //tia marta
    //var local = 'http://192.168.1.21:8089/userlogin';

    //console.warn('uid:'+this.state.username);
    //console.warn('pid'+hex_md5v);

    response = await fetch(local,{
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/x-www-form-urlencoded', 
      },
      body: 'uid='+this.state.username+'&pid='+hex_md5v
    });

    console.warn('paso');
    //let res = await response.text();

    responseJson = await response.json();

    console.warn('respuesta '+responseJson);
    
    if(response.status >= 200 && response.status < 300){

      console.warn('Respuesta del servidor');
      this.setState({error:""});

      //console.warn("recibido "+responseJson);
      //var stringify = JSON.stringify(reidsponseJson);
      //console.warn("transformado "+stringify); 

      for (var i = 0; i < responseJson.length; i++) {
        answer = responseJson[i]['username'];
        userid = responseJson[i]['idusers'];
      } 

      console.warn(answer);  

    }else{
      let error = res;
      console.warn('Error');
      throw res;
    }

   if(answer != '' && answer == this.state.username){
      const {navigate} = this.props.navigation;
      navigate('Memberarea', {user: answer, iduser: userid});
    }else{
      console.warn('Usuario o contraseña invalidos');
    }


   // console.warn('termino el fetch '+answer);

  //console.warn('http://192.168.0.6:8089/users/'+uid+'/'+pid);

  //fetch('http://192.168.0.6:3001/users/'+username+'/'+password, 

/*
  console.warn('comenzando el fetch');

  // TODO: localhost doesn't work because the app is running inside an emulator. Get the IP address with ifconfig.
  let response = await fetch('http://192.168.0.6:8089/userlogin', {
    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({
      uid: this.state.username,
      pid: this.state.password,
    })
  })
  .then((response) => response.json())
  .then((responseData) => {
    this.saveItem('id_token', responseData.id_token),
    Alert.alert( 'Signup Success!', 'Click the button to get a Chuck Norris quote!'),
    console.warn('paso por aqui');
    //const {navigate} = this.props.navigation,
    //navigate('Memberarea');
  })
  .done(); 


    console.warn('terminando el fetch');  

*/

  /*
  fetch('http://localhost:8089/users/${data.foo}/${data.bar}')
 .then(res => {
    if (res.ok){
     return res.json()
    }else{
     throw new Error(res)
    }
 .then(json => {
   for (var key in json) {
     // now you can parse it by calling json[key]
     answer = json['username'];
   }
  }
 .catch(error => console.log(error)
 }*/

 
 
	
	
  /*
	let response = await fetch('http://localhost:8089/users/'+username+'/'+password,{
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

    const { navigate } = this.props.navigation;

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
                onChangeText={(text) => this.setState({username: text})}
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
  }//en render

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
