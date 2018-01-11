import React, { Component } from "react";
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
  Thumbnail
} from "native-base";

const datas = [
  {
    name: "Clase Especial",
    route: "Memberarea",
    icon: "functional.png",
    bg: "0"
  },
  {
    name: "Baile",
    route: "Memberarea",
    icon: "dancing2.png",
    bg: "1"
  },
  {
    name: "Funcionales",
    route: "Memberarea",
    icon: "crossfit.png",
    bg: "2"
  },
  {
    name: "Artes de Combate",
    route: "Memberarea",
    icon: "boxing.png",
    bg: "3"
  },
  {
    name: "Estiramiento",
    route: "Memberarea",
    icon: "yoga.png",
    bg: "4"
  },
  {
    name: "Salir",
    route: "Memberarea",
    icon: "exit.png",
    bg: "11"
  }

];

class SideBar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {

    const { navigate } = this.props.navigation;

    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={ () => navigate(data.route,{ filterID: data.bg })}
              >
                <Left>
                  <Thumbnail size={55} source={{ uri: 'http://www.govirfit.com/appimg/'+data.icon}} />
                   
                  <Text>
                    {data.name}
                  </Text>
                </Left>
                {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72
                      }}
                    >
                      <Text
                        
                      >{`${data.types} Types`}</Text>
                    </Badge>
                  </Right>}
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;