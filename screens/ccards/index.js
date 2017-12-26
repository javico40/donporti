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

import { Container, Header, Button, Content, Card, CardItem, Left, Right, Body, Thumbnail, Spinner, Icon, List, ListItem, Title, Subtitle, Drawer, Radio } from 'native-base';

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
                  <Title>Seleccione un medio de pago o registre uno</Title>
                </Body>
            </Header>
    				 <Content>
                  <ListItem>
                    <Text>XXXX-XXXX-XXXXX-4443</Text>
                      <Right>
                        <Radio selected={false} />
                      </Right>
                  </ListItem>
                  <ListItem>
                      <Text>XXXX-XXXX-XXXXX-5552</Text>
                      <Right>
                         <Radio selected={false} />
                      </Right>
                  </ListItem>
                  <Button full sucess  onPress={ () => navigate('CreditCardReg', { classid: classid, iduser: userid } ) }>
                    <Text>Registrar tarjeta de credito</Text>
                  </Button>
    				    </Content>
    			   </Container>
    		);
	}

}