/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View,Text} from 'react-native';



export default class App extends Component {

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

  listData=[
    {itemValue:'SectionList',itemKey:0},
    {itemValue:'DrawerLayoutAndroid',itemKey:1},
    {itemValue:'DatePickerIOS',itemKey:2},
    {itemValue:'NavigatoriOS',itemKey:3}];


  render() {
    return (
      <View style={styles.container}>
       <FlatList
          data={this.listData}
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

  _onSelection(itemKey){
      switch (itemKey) {
          case 0:
              this.props.navigation.navigate('SectionListComponent');
              break;
          case 1:
                this.props.navigation.navigate('DrawerLayoutComponent');
              break;
          case 2:
                this.props.navigation.navigate('DatePickerComponent');
              break;
          case 3:
                this.props.navigation.navigate('NavigatorComponent');
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
