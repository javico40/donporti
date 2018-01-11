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

import Moment from 'moment';

import { NavigationActions } from 'react-navigation';

import { GoogleAnalyticsTracker, GoogleTagManager, GoogleAnalyticsSettings } from 'react-native-google-analytics-bridge';

// The tracker must be constructed, and you can have multiple:
let tracker = new GoogleAnalyticsTracker('UA-107124383-1');

// The GoogleAnalyticsSettings is static, and settings are applied across all trackers:
GoogleAnalyticsSettings.setDispatchInterval(30);


export default class ClassArea extends Component {

	constructor(props) {

    super(props);

    this.state = {
                    trainer: '',
                    category: '',
                    place:'',
                    address:'',
                    starttime:'',
                    endtime:'',
                    trainerpicture:'',
                    classid:'',
          }

    //this.loadData().bind(this)();

  }

    async componentWillMount() {

    	//console.warn("NAV: ", this.props.navigation);
    	const { params } = this.props.navigation.state;
    	
    	//var idCLass = params.classid;

    try {

      /*
      //var local = 'http://localhost:8089/classes/';
      var local = 'http://10.69.194.146:8089/classes/';
      //var local = 'http://192.168.0.8:8089/classes/';
      //var local = 'http://192.168.1.21:8089/classes/';
      
      let response = await fetch(local+idCLass);
      let responseJson = await response.json();
      
      if(response.status >= 200 && response.status < 300){

         //datas = responseJson;
         var trainerName = "";
         var classCategory = "";
         var classPlace = "";
         var classAddress = "";
         var classStart = "";
         var classEnd = "";
         var trainerPictureOR ="";
         var classIdentification = "";

         for (var i = 0; i < responseJson.length; i++) {
         	classPlace = responseJson[i]['Place_name'];
         	classCategory = responseJson[i]['description'];
        	trainerName = responseJson[i]['name']+" "+responseJson[i]['lastname'];
      	 	classAddress = responseJson[i]['Place_address'];
      	 	classStart = responseJson[i]['starttime'];
      	 	classEnd = responseJson[i]['endtime'];
          trainerPictureOR = responseJson[i]['trainer_picture'];
          classIdentification = responseJson[i]['idschedule'];
      	 } 

         //console.warn('prueba'+trainerPictureOR);


      	  this.setState({
                 trainer: trainerName,
                 category:classCategory,
                 place:classPlace,
                 address:classAddress,
                 starttime:classStart,
                 endtime:classEnd,
                 trainerpicture:trainerPictureOR,
                 classid:classIdentification,
                 })

      }else{
          console.warn("Error cargando las clases, revise su conexion a internet");
      }*/

    } catch(error) {
      console.error(error);
    }

  }

  static navigationOptions = ({ navigation }) => ({
    //title: 'Chat with ${navigation.state.params.classid}',
  });


  render() {

    tracker.trackScreenView('Class');
    tracker.trackEvent('Mobile', 'ViewClass');
     
     Moment.locale('es');

  	 const { params } = this.props.navigation.state;
     const { navigate } = this.props.navigation;
     
     var classid = params.classid;
     var classimage = params.classimage
     var classtitle = params.classtitle;
     var classdesc = params.classtext;
     var classplace = params.classplace;
     var classaddress = params.classaddress;
     var classdate = params.classdate;
     var classstart = params.classstart;
     var classend = params.classend;
     var classfilter = params.classfilter;

  	/*
    var trainer = this.state.trainer;
  	var category = this.state.category;
  	var place = this.state.place;
  	var address = this.state.address;
  	var starttime = this.state.starttime;
  	var endtime = this.state.endtime;
    var trainerpicture = this.state.trainerpicture;
    var classid = this.state.classid;

    */

    //console.warn('prueba'+userid);

    return (
    	 <Container>
          <Header
           style={styles.barraSuperior}>
            <Left>
            <Button transparent
                    onPress={
                                  () => navigate('Memberarea',{ filterID: classfilter })
                                }>
               <Icon name='arrow-back' />
            </Button>
           </Left>
           <Body>
            <Title style={styles.toolbarTitle}>Clase Grupal</Title>
          </Body>
          <Right>
            <Button transparent>
              <Thumbnail size={45} source={{ uri: 'http://www.govirfit.com/appimg/logo_mini.png'}} />
            </Button>
          </Right>
        </Header>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail size={55} source={{ uri: 'http://www.govirfit.com/appimg/pilates_icon.png'}} />
                <Body>
                  <Text>{classtitle}</Text>
                  <Text note>{Moment(classdate).format('Do MMM YYYY')}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{ uri: 'http://www.govirfit.com/appimg/specialclass/'+classimage }} style={{ height: 200, width: 440, flex: 1 }} />
                <Text>
                      {classdesc}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Thumbnail size={55} source={{ uri: 'http://www.govirfit.com/appimg/gympic.jpg'}} />
                <Body>
                  <Text>Lugar: {classplace}</Text>
                  <Text note>Direccion: {classaddress}</Text>
                  <Text note>Hora: {Moment(classstart).format('h:mm a')} - {Moment(classend).format('h:mm a')}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Button full sucess
                        style={styles.botonReserva}
                        onPress={
                                  () => navigate('Product', { classid: classid, filterID: classfilter })
                                }>
                    <Text style={styles.tituloReserva}>Comprar</Text>
                </Button>
               </Body>
            </CardItem>
          </Card>
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
