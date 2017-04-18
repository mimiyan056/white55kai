/**
 * 主页
 */

import React, { Component } from 'react'
import { View, Text, StatusBar, TouchableHighlight, StyleSheet } from 'react-native'


class Home extends Component{
	
	constructor() {
		super()
		this.state = {
			translucent : true
		}
	}
	
	
	_onChangeTranslucent  = () => {
	    this.setState({
	      translucent: !this.state.translucent,
	    });
    }

	render() {
		return (
		      <View>
		        <StatusBar
		          translucent={this.state.translucent}
		        />
		        <TouchableHighlight
		          style={styles.wrapper}
		          onPress={this._onChangeTranslucent}>
		          <View style={styles.button}>
		            <Text>translucent: {this.state.translucent ? 'true' : 'false'}</Text>
		          </View>
		        </TouchableHighlight>
		      </View>
			)
	}
	
}


styles = StyleSheet.create({
  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#eeeeee',
    padding: 10,
  },
  title: {
    marginTop: 16,
    marginBottom: 8,
    fontWeight: 'bold',
  }
});

export default Home
