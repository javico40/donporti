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

import { ListView } from 'react-native';
import SGListView from 'react-native-sglistview';
import { Container, Header, Button, Content, Card, CardItem, Left, Right, Body, Thumbnail, Spinner, Icon, List, ListItem, Title, Subtitle, Drawer } from 'native-base';
 
const LIST_VIEW = 'listview';

const background = require("./signup_bg.png");
const backIcon = require("./back.png");
const personIcon = require("./signup_person.png");
const lockIcon = require("./signup_lock.png");
const emailIcon = require("./signup_email.png");
const birthdayIcon = require("./signup_birthday.png");

const datas = [
  {
    img: "test",
    text: "Sankhadeep",
    note: "Its time to build a difference . ."
  },
  {
    img: "test",
    text: "Supriya",
    note: "One needs courage to be happy and smiling all time . . "
  },
  {
    img: "test",
    text: "Himanshu",
    note: "Live a life style that matchs your vision"
  },
  {
    img: "test",
    text: "Shweta",
    note: "Failure is temporary, giving up makes it permanent"
  },
  {
    img: "test",
    text: "Shruti",
    note: "The biggest risk is a missed opportunity !!"
  },
  {
    img: "test",
    text: "Shivraj",
    note: "Time changes everything . ."
  }
];

//import SideBarScreen from "./screens/sidebar/index";

export default class MemberArea extends Component {

constructor(props) {

    super(props);

    var ds = null;

    this.state = {
                    isLoading: true,
                    dataSource:ds,
          }

    //this.loadData().bind(this)();

  }



  async componentWillMount() {
    
    try {

      //const { params } = this.props.navigation.state;
      //var filterCLass = params.filterID;
      //console.warn('filtro '+filterCLass);

      //var local = 'http://localhost:8089/classes/';
      //var local = 'http://10.69.194.146:8089/classes/';
      //var local = 'http://192.168.0.8:8039/govirfit/discovery.php/checkclases/';
      var local = 'http://www.govirfit.com/discovery.php/checkclases/';
      //Tia marta
      //var local = 'http://192.168.1.21:8089/classes/';
      
      let response = await fetch(local);
      let responseJson = await response.json();
      
      if(response.status >= 200 && response.status < 300){

          datas = responseJson;

          this.setState({
                    dataSource: datas
                 })

      }else{
          console.warn("Error cargando las clases, revise su conexion a internet");
      }

    } catch(error) {
      console.error(error);
    }

  }

   _handlePress(event) {
       
    }

  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    //title: 'Chat with ${navigation.state.params.user}',
  });

  render() {

     closeDrawer = () => {
      this.drawer._root.close()
    };

    openDrawer = () => {
      this.drawer._root.open()
    };

    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    const { state, navigate } = this.props.navigation;

    var filterID = params.filterID;

    var dataSource = ''; 

    if(filterID != 10){
      //console.warn('filter'+filterID);
      //console.warn(datas);
      dataSource = datas.filter(x => x.categoria_id == filterID);
      //const space = datas.filter(x => x.categoria_id == filterID);
      //console.warn(space);
    }else{
      dataSource = datas;
    }

    //var userid = params.iduser;
    //var userName = params.user;

    return (

        <Container>
        <Header style={styles.barraSuperior}
           >
            <Left>
            <Button transparent
                    onPress={() => navigate("DrawerOpen")}>
              <Icon ios='ios-menu' android="md-menu" />
            </Button>
           </Left>
           <Body>
            <Title style={styles.toolbarTitle}>Clases grupales</Title>
          </Body>
          <Right>
            <Button transparent>
              <Thumbnail size={45} source={{ uri: 'http://www.govirfit.com/appimg/logo_mini.png'}} />
            </Button>
          </Right>
        </Header>
        <Content>
              <List
                dataArray={dataSource}
                renderRow={data =>
              <ListItem thumbnail
               onPress={
                        () => navigate('Class', { classid: data.idspecialclass,
                                                  classtitle: data.class_title,
                                                  classtext: data.descripcion_movil,
                                                  classimage: data.class_picture,
                                                  classplace: data.place_name,
                                                  classaddress: data.place_address,
                                                  classdate: data.fecha,
                                                  classstart: data.start_hour,
                                                  classend: data.end_hour,
                                                  classfilter: filterID,
                                                  go_back_key: state.key
                                                 })
                }>

              
              <Card>

                


                <CardItem cardBody>
                  <Image source={{uri: 'http://govirfit.com/appimg/specialclass/'+data.class_picture }} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>

                <CardItem>
              <Left>
                <Body>
                  <Text style={styles.classTitle} >{data.class_title}</Text>
                  <Text note>Lugar:{data.place_name}</Text>
                  <Text note>Direccion:{data.place_address}</Text>
                </Body>
              </Left>
            </CardItem>
            </Card>


              </ListItem>}
          />
        </Content>
      </Container>
    );
  }

  getDataSource() {

    //console.log('ingreso a datasource');

    const dataSource = new ListView.DataSource(
      { rowHasChanged: (r1, r2) => r1.uuid !== r2.uuid });


   var data  =[
                        {
                          "topicName":"sometopic",
                          "title":"sometitle",
                          "imageurl":"imageurl",
                          "story":"storydata",
                          "moral":"",
                          "sid":0
                        }
                      ];

    const deals = data;

    //console.log("datos"+data);


    return deals ? dataSource.cloneWithRows(data) : dataSource;
  }

}//end class

let styles = StyleSheet.create({
  classTitle: {
    fontSize: 15,
    fontWeight: 'bold',
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
