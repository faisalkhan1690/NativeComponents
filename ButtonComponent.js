import React, {Component} from 'react';
import {StyleSheet,View,Text,TextInput,TouchableOpacity} from 'react-native';



export default class ButtonComponent extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'SectionList',
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

    constructor(props){
        super(props);
        this.state={
            text:""
        }

    }

    componentDidMount(){
        this.setState({text:this.props.navigation.state.params.data});
    }

    


    render() {
        
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textStyle}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                 <TouchableOpacity onPress={()=>this._onClick()}>
                    <Text style={styles.textHeadingStyle}>
                        Click to back 
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    _onClick(){
        this.props.navigation.goBack();
        this.props.navigation.state.params._showAlert(this.state.text)
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#fff'
    },
    textStyle:{
      padding:10,
      fontSize:14,
      color:'#4a4a4a',
      borderWidth:0.3,
      borderColor:'#ccc'
    },
    textHeadingStyle:{
        padding:10,
        fontSize:16,
        color:'#fff',
        alignSelf:"center",
        fontWeight: 'bold',
        backgroundColor:'#bdba00'
      }
  });
  
