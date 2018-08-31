/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View,Text} from 'react-native';



export default class HomeComponent extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Home',
        headerTitleStyle: {
            textAlign: 'center',
            alignSelf: 'center',
            fontSize: 20,
            color: 'white',
            flex:1
        },
        headerStyle: {
            height: 55,
            backgroundColor: '#5D7ED3',
        },
        headerLeft: (<View/>),
        headerRight: (<View/>)
    });

  listData=require('/home/user/Work/training/NativeComponents/listData.json')


  render() {
    return (
      <View style={styles.container}>
       <FlatList
          data={this.listData.dataList}
          renderItem={({item}) => this._getItemView(item)}
        />
      </View>
    );
  }

  _getItemView(item){
        return(
            <TouchableOpacity onPress={()=>this._onSelection(item.itemKey)}>
                <View>
                    <Text style={styles.textStyle}>
                        {item.itemValue}
                    </Text>
                </View>
            </TouchableOpacity>
        )
  }


  _showAlert(text){
      alert(text)

  }

  _onSelection(itemKey){
      switch (itemKey) {
          case 0:
              this.props.navigation.navigate('Button',{data:"I am coming from Home",_showAlert:this._showAlert.bind(this)});
              break;
          case 1:
              this.props.navigation.navigate('SectionList');
              break;
          case 2:
              this.props.navigation.navigate('DrawerLayout');
              break;
          case 3:
              this.props.navigation.navigate('DatePicker');
              break;
          case 4:
              this.props.navigation.navigate('Navigator');
              break;
          default:
              console.warn("default")
      }
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'#fff'
  },
  textStyle:{
    padding:10,
    fontSize:16,
    color:'#000',
    borderWidth:0.2,
    borderColor:'#ccc'
  }
});
