import React, {Component} from 'react';
import {StyleSheet,View,Text,SectionList} from 'react-native';



export default class SectionListComponent extends Component {
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


    listData=[
        {title: 'Gender', data: ['Male', 'Female'],visible:false},
        {title: 'Food', data: ['Veg', 'Non Veg','Both'],visible:true},
        {title: 'Session', data: ['Morning', 'Afternoon','Evening','Night'],visible:false},

    ];


    componentDidMount(){
        // uncomment to test scrollToLocation method
        // setTimeout( () => {
        //    this.scrollToSection();
        //  },2000);
    }
    scrollToSection = () => {
        this.sectionListRef.scrollToLocation({
          animated: true,
          sectionIndex: 3,
          itemIndex: 0,
          viewPosition: 0
        });
      };

    render() {
        return (
            <View style={styles.container}>
               <SectionList
                     ref={ref => (this.sectionListRef = ref)}
                    sections={this.listData}
                    renderItem={({item, index,section}) => this.renderItem(item, index,section)}
                    renderSectionHeader={({section: {title}}) => (
                        <Text style={styles.textHeadingStyle}>{title}</Text>
                    )}
                    
                />
            </View>
        );
    }

    renderItem(item, index,section){
        if(section.visible){
            return(<Text style={styles.textStyle} key={index}>{item+"/"+index+"/"+section.visible}</Text>)
        }else{
            return( <View></View>);
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
      fontSize:14,
      color:'#4a4a4a',
      borderWidth:0.3,
      borderColor:'#ccc'
    },
    textHeadingStyle:{
        padding:10,
        fontSize:16,
        color:'#fff',
        fontWeight: 'bold',
        backgroundColor:'#bdba00'
      }
  });
  
