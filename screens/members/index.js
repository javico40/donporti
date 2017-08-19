import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';

import { ListView } from 'react-native';
import SGListView from 'react-native-sglistview';
import { Card, CardItem } from 'native-base';


const LIST_VIEW = 'listview';

const background = require("./signup_bg.png");
const backIcon = require("./back.png");
const personIcon = require("./signup_person.png");
const lockIcon = require("./signup_lock.png");
const emailIcon = require("./signup_email.png");
const birthdayIcon = require("./signup_birthday.png");

export default class MemberArea extends Component {

constructor(props) {
    super(props);
    
     this.props.stories=[
                        {
                          "topicName":"sometopic",
                          "title":"sometitle",
                          "imageurl":"imageurl",
                          "story":"storydata",
                          "moral":"",
                          "sid":0
                        }
                      ];
  

    this.state = {
                    isLoading: true,
          }
  }



  static renderRow(rowData, sectionID, rowID) {
    return (
      <View>
        <Text>{rowData.title}</Text>
      </View>
    );
  }


   _handlePress(event) {
       
    }

    renderCards(stories) {
    return (
        <Card>
          <CardItem>
             <Left style={{flex:0.8}}>
               <Icon name="ios-book" />
                <Body>
                  <Text style={{fontWeight:'bold',fontSize:17}}>Test</Text>
                  <Text note style={{fontSize:15}}>Hola</Text>
                </Body>
              </Left>
              <Right style={{flex:0.2}}>
                <Icon name="ios-heart"/>
              </Right>
          </CardItem>
          <CardItem cardBody>
            <Text>{stories.story}</Text>
          </CardItem>
          <CardItem content>
            <Text>{stories.story}</Text>
          </CardItem>
        </Card>
      );
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.toolbar}>
                    
                    <View style={styles.headerIconView}>
                        <TouchableOpacity style={styles.headerBackButtonView}>
                    <Image 
                          source={birthdayIcon} 
                          style={styles.backButtonIcon} 
                          resizeMode="contain"
                    />
                    </TouchableOpacity>
                    </View>
                    <Text style={styles.toolbarButton}></Text>
                    
                    <Button style={styles.toolbarTitle}
                            onPress={this._handlePress.bind(this)}
                            title="Explora"
                            color="#FAD205"
                            accessibilityLabel="Buscar en las categorias"
                    />
                    <Text style={styles.toolbarButton}></Text>
                    <View style={styles.headerIconView}>
                        <TouchableOpacity style={styles.headerBackButtonView}>
                    <Image 
                          source={birthdayIcon} 
                          style={styles.backButtonIcon} 
                          resizeMode="contain"
                    />
                    </TouchableOpacity>
                    </View>
        </View>

        <View style={styles.headerContainer}>
          <Text style={styles.notify}>Regala una clase a un amigo usando el boton de regalo</Text>
          <Text style={styles.welcome}>¡Hola Ruben!</Text>
        </View>

        <View style={styles.headerContainer}>
        <SGListView
                    dataSource={this.getDataSource()}
                    renderRow={this.renderCards}
                    pageSize={10}
                    stickyHeaderIndices={[]}
                    onEndReachedThreshold={1}
                    initialListSize={10}
                    scrollRenderAheadDistance={4}
        />
        </View>

      </View>
    );
  }

  getDataSource() {

    console.log('ingreso a datasource');

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

    console.log("datos"+data);


    return deals ? dataSource.cloneWithRows(data) : dataSource;
  }

}//end class

let styles = StyleSheet.create({
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
        width:100,
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
  },
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
