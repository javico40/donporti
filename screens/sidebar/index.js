import React, { Component } from 'react';
import { Image } from "react-native";

import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge,
  Button,
  View,
  StyleProvider,
  getTheme,
  variables,
} from "native-base";

const { width, height } = Dimensions.get("window");



export default class SideBarScreen extends Component {
	
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
    };
  }

	
  render() {

    const { navigate } = this.props.navigation;

    return (
        <Container>
          <Content bounces={false} style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>
          </Content>
        </Container>
    );
  }

}

