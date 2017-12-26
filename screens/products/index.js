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
              {text: 'Cerrar', onPress: () => navigate('Memberarea') },
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

		const { params } = this.props.navigation.state;
    const { navigate } = this.props.navigation;

    var classid = params.classid;

    //this.setState({classid: classid})

    //console.warn("test"+classid);

    	return (
    			<Container>
             <Header
           backgroundColor = '#00874F'>
            <Left>
            <Button transparent>
               <Icon name='arrow-back' />
            </Button>
           </Left>
           <Body>
            <Title>Confirmar clase</Title>
          </Body>
          <Right>
            <Button transparent>
              <Thumbnail size={45} source={{ uri: 'http://www.govirfit.com/appimg/logo_mobile.png'}} />
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
                        onPress={this._handlePress.bind(this)} >
                    <Text>Confirmar reserva</Text>
                </Button>
    				 </Content>
    			</Container>
    		);
	}

}