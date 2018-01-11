import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { Container, Header, Button, Content, Card, CardItem, Left, Right, Body, Thumbnail, Spinner, Icon, List, ListItem, Title, Subtitle, Drawer, Form, Item, Input, Label } from 'native-base';

import { GoogleAnalyticsTracker, GoogleTagManager, GoogleAnalyticsSettings } from 'react-native-google-analytics-bridge';

// The tracker must be constructed, and you can have multiple:
let tracker = new GoogleAnalyticsTracker('UA-107124383-1');

// The GoogleAnalyticsSettings is static, and settings are applied across all trackers:
GoogleAnalyticsSettings.setDispatchInterval(30);


export default class ProductsScreen extends Component {

	onstructor(props) {

	}

  async  _handlePress(event) {

        const { params } = this.props.navigation.state;
        const { navigate } = this.props.navigation;

        if(this.state.user == null){
          alert('Ingrese su nombre y apellidos');
        }else if(!this.validateEmail(this.state.mail)){
          alert('Ingrese su correo electronico');
        }else if(this.state.phone == null){
          alert('Ingrese su numero celular');
        }else{

          var classid = params.classid;
          var classfilter = params.filterID;
          let username = this.state.user;
          let usermail = this.state.mail;
          let userphone = this.state.phone;

          //var local = 'http://192.168.0.8:8039/govirfit/discovery.php/makeReservation/';

           var local = 'http://www.govirfit.com/discovery.php/makeReservation/';

          response = await fetch(local,{
          method: 'POST',
          headers: {
            'Accept':'application/json',
            'Content-Type':'application/x-www-form-urlencoded', 
          },
            body: 'classid='+classid+'&names='+username+"&email="+usermail+"&phone="+userphone
          });

          responseJson = await response.json();

          if(response.status >= 200 && response.status < 300){

              //console.warn('Respuesta del servidor'+responseJson);
              
              this.setState({error:""});

              answer = "";

              var stringify = JSON.stringify(responseJson);
              //console.warn("transformado "+stringify); 

            
               for (var i = 0; i < responseJson.length; i++) {
                  answer = responseJson[i]['reserv_status'];
               }

               Alert.alert('Reserva de clase',
                           answer,
              [
              {text: 'Cerrar', onPress: () => navigate('Memberarea',{ filterID: classfilter }) },
              ],
              { cancelable: false }
              );

               //console.warn('dato '+answer);
               //alert(answer); 

           }else{
            
            let error = res;
            console.warn('Error');
            throw res;
            }

        }//end if-else

    }

validateEmail = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

	render() {

    tracker.trackScreenView('Product');
    tracker.trackEvent('Mobile', 'ViewClassReserv');

		const { params } = this.props.navigation.state;
    const { navigate } = this.props.navigation;

    var classid = params.classid;

    //this.setState({classid: classid})

    //console.warn("test"+classid);

    	return (
    			<Container>
             <Header
                    style={styles.barraSuperior}>
            <Left>
            <Button transparent
                    onPress={
                                  () => navigate('Class', { classid: classid})
                                }>
               <Icon name='arrow-back' />
            </Button>
           </Left>
           <Body>
            <Title style={styles.toolbarTitle}>Confirmar clase</Title>
          </Body>
          <Right>
            <Button transparent>
              <Thumbnail size={45} source={{ uri: 'http://www.govirfit.com/appimg/logo_mini.png'}} />
            </Button>
          </Right>
        </Header>
    				 <Content>
                 <Form>
                    <Item stackedLabel>
                      <Label>Nombre y Apellido</Label>
                      <Input
                             onChangeText={(text) => this.setState({user: text})} />
                    </Item>
                   <Item stackedLabel>
                      <Label>Correo electronico</Label>
                      <Input
                               onChangeText={(text) => this.setState({mail: text})} />
                    </Item>
                    <Item stackedLabel>
                      <Label>Numero celular</Label>
                      <Input
                               onChangeText={(text) => this.setState({phone: text})} />
                    </Item>
                  </Form>
                <Button full sucess
                        style={styles.botonReserva}
                        onPress={this._handlePress.bind(this)} >
                    <Text style={styles.tituloReserva}>Confirmar compra</Text>
                </Button>
    				 </Content>
    			</Container>
    		);
	}

}

let styles = StyleSheet.create({
  classTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  tituloReserva:{
       color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        width:200,
        paddingTop:5,
        flex:1    
  },
  botonReserva:{
        backgroundColor:'#00874F',
        alignItems:'center'  //Step 1
  },
  barraSuperior:{
        backgroundColor:'#00874F',
        alignItems:'center'  //Step 1
  },
  toolbar:{
        backgroundColor:'#76C04E',
        paddingTop:30,
        paddingBottom:10,
        flexDirection:'row',
        alignItems:'center'  //Step 1
    },
    toolbarButton:{
        width: 150,            //Step 2
        color:'#fff',
        textAlign:'center'
    },
    toolbarTitle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        width:200,
        paddingTop:15,
        flex:1                //Step 3
    },
  container: {
    flex: 1,
  },
  bg: {
    paddingTop: 30,
    width: null,
    height: null
  },
  headerContainer: {
    flexDirection:'column',
    alignItems:'center',
    flex: 1,
  }
  ,
  inputsContainer: {
    flex: 3,
    marginTop: 50,
  },
  footerContainer: {
    flex: 1
  },
  headerIconView: {
    marginLeft: 10,
    backgroundColor: 'transparent'
  },
  headerBackButtonView: {
    width: 35,
    height: 35,
  },
  backButtonIcon: {
    width: 35,
    height: 35
  },
  headerTitleView: {
    backgroundColor: 'transparent',
    marginTop: 25,
    marginLeft: 25,
  },
  titleViewText: {
    fontSize: 40,
    color: '#fff',
  },
  inputs: {
    paddingVertical: 20,
  },
  titleContainer: {
    borderWidth: 1,
    borderBottomColor: '#CCC',
    borderColor: 'transparent',
    flexDirection: 'row',
  },
  inputContainer: {
    borderWidth: 1,
    borderBottomColor: '#CCC',
    borderColor: 'transparent',
    flexDirection: 'row',
    height: 75,
  },
  iconContainer: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputIcon: {
    width: 30,
    height: 30,
  },
  input: {
    flex: 1,
    fontSize: 20,
  },
  notify: {
    backgroundColor: 'transparent',
    color:'#00874F',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    fontSize: 15,
    fontWeight:'bold',
    flexDirection:'column',
    alignItems: 'center',
  },
  welcome: {
    backgroundColor: 'transparent',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    fontSize: 30,
    fontWeight:'bold',
  },
  signup: {
    backgroundColor: '#FF3366',
    paddingVertical: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  signin: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  greyFont: {
    color: '#D8D8D8'
  },
  whiteFont: {
    color: '#FFF'
  }
})
