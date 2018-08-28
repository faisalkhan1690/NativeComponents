import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { NavigatorIOS, Text, TouchableHighlight, View } from 'react-native';



export default class NavigatorComponent extends Component {
    render() {
        return (
          <NavigatorIOS
            initialRoute={{
              component: MyScene,
              title: 'My Initial Scene',
            }}
            style={{flex: 1}}
          />
        );
      }
    }
    
    class MyScene extends Component {
      static propTypes = {
        title: PropTypes.string.isRequired,
        navigator: PropTypes.object.isRequired,
      }
    
      _onForward = () => {
        this.props.navigator.push({
          title: 'Scene ' + nextIndex,
        });
      }
    
      render() {
        return (
          <View>
            <Text>Current Scene: { this.props.title }</Text>
            <TouchableHighlight onPress={this._onForward}>
              <Text>Tap me to load the next scene</Text>
            </TouchableHighlight>
          </View>
        )
      }
}

  
