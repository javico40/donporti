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

export default class ProductsScreen extends Component {

	onstructor(props) {

	}

	render() {

		const { params } = this.props.navigation.state;
    	const { navigate } = this.props.navigation;

    	return (
    			<Container>
    				 <Header>
    				 	<Body>
            				<Title>Titulo aqui</Title>
         				 </Body>
    				 </Header>
    				 <Content>
    				 </Content>
    			</Container>
    		);
	}

}