import React, {Component} from 'react';
import {StyleSheet,View,Text,DrawerLayoutAndroid,Image,TouchableOpacity,Button} from 'react-native';



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
        headerLeft: (
            <TouchableOpacity onPress={()=>{
                if(_this._isOpen){
                    _this.closeDrawer()
                }else
                    _this.openDrawer()
                }
                }>
            <View>
            <Image
                style={{width: 30, height: 30,marginLeft:10}}
                source={require('/home/user/Work/training/NativeComponents/menu_icon.png')}
                />
            </View>
        </TouchableOpacity>),

        headerRight: (<View/>)
    });

    _this;
    _isOpen=false;


    componentDidMount(){
        _this=this;
       
    }

    openDrawer(){
        this.DrawerLayoutRef.openDrawer();
        this._isOpen=!this._isOpen

    }

    closeDrawer(){
        this.DrawerLayoutRef.closeDrawer();
        this._isOpen=!this._isOpen
    }

    render() {
        var navigationView=(
            <View>
              <Text style={styles.textStyle}>Menu One</Text>
              <Text style={styles.textStyle}>Menu Two</Text>
              <Text style={styles.textStyle}>Menu three</Text>
              <Text style={styles.textStyle}>Mneu four</Text>
            </View>
        )

       return (
            <DrawerLayoutAndroid
              ref={ref => (this.DrawerLayoutRef = ref)}
              drawerWidth={200}
              drawerPosition={DrawerLayoutAndroid.positions.Left}
              renderNavigationView={() => navigationView}>

              <View style={{flex: 1, alignItems: 'center',marginTop:100}}>
                <Button
                    title="I am in main page"
                    color="#841584"
                    accessibilityLabel="I am in main page"
                />
              </View>
            </DrawerLayoutAndroid>
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
        fontSize:14,
        color:'#4a4a4a',
        borderWidth:0.3,
        borderColor:'#ccc'
      },
  });
  
