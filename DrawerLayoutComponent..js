import React, {Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';



export default class DrawerLayoutComponent extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'DrawerLayoutAndroid',
        headerTitleStyle: {
            textAlign: 'left',
            alignSelf: 'center',
            fontSize: 20,
            color: 'white',
            flex:1
        },
        headerTintColor:'white',
        headerStyle: {
            height: 55,
            backgroundColor: '#5D7ED3',
        },
        headerRight: (<View/>)
    });

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}> Hello</Text>
            </View>
        );
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
  
