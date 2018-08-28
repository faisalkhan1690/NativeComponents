import React, {Component} from 'react';
import {StyleSheet,View,Text,DatePickerIOS} from 'react-native';



export default class DatePickerComponent extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'DatePickerIOS',
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

    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date() };
    
        this.setDate = this.setDate.bind(this);
      }
    
      setDate(newDate) {
        this.setState({chosenDate: newDate})
      }
    
      render() {
        return (
          <View style={styles.container}>
            <DatePickerIOS
              date={this.state.chosenDate}
              onDateChange={this.setDate}
            />
          </View>
        )
      }

    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor:'#fff'
    }
  });
  
