import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { Container, Header, Button, Content, Card, CardItem, Left, Right, Body, Thumbnail, Spinner, Icon, List, ListItem, Title, Subtitle, Drawer } from 'native-base';

export default class ProductsScreen extends Component {

	onstructor(props) {

	}

	render() {

		const { params } = this.props.navigation.state;
    const { navigate } = this.props.navigation;

    var userid = params.iduser;
    var classid = params.classid;

    	return (
    			<Container>
              <Header>
                <Body>
                  <Title>Elija un medio de pago</Title>
                </Body>
              </Header>
              <Content>
               <Card>
    				    <CardItem>
                   <Body>
                  <Image source={{ uri: 'http://www.govirfit.com/appimg/tdc.png' }} style={{ height: 200, width: 440, flex: 1 }} />
                    </Body>
                </CardItem>
                <CardItem>
                    <Body>
                      <Button full sucess
                                         onPress={ () => navigate('CreditCard', { classid: classid, iduser: userid } ) }>
                    <Text>Tarjeta de Credito</Text>
                  </Button>
                  </Body>
                </CardItem>
               <CardItem>
                   <Body>
                  <Image source={{ uri: 'http://www.govirfit.com/appimg/giftcard.jpg' }} style={{ height: 200, width: 440, flex: 1 }} />
                    </Body>
                </CardItem>
                <CardItem>
                    <Body>
                      <Button full sucess>
                    <Text>Govirfit Pack</Text>
                  </Button>
                  </Body>
                </CardItem>
                   
             </Card>
             </Content>
    			</Container>
    		);
	}

}