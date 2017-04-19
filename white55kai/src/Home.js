/**
 * 主页
 */

import React, { Component } from 'react'
import { View, Text, StatusBar, TouchableHighlight, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Util from './Util'
import { SearchBar } from 'react-native-elements'

class Home extends Component{
	
	constructor() {
		super()
		this.state = {
			width: Util.size.width
		}
	}

	render() {
		return (
		      <View style={[styles.mainContainer,{ width:this.state.width }]}>
		        <StatusBar
		          backgroundColor='#d45f58'
		        />
		        <View style={styles.searchHeader}>
		        	<Icon color={'white'} name='local-movies' size={30}  containerStyle={{height:30}}/>
		        	<Text style={{color:'white',fontSize:18,height:30,paddingTop:4}}>丑开影视</Text>
		        	<View style={{height:30, width:this.state.width/2, marginLeft:15}}>
		        		<Image
					        style={[styles.icon,{ width:this.state.width/2 }]}
					        source={require('./images/search.png')}
				      	/>
		        	</View>
		        	<View style={{height:30, margin:5, marginLeft:10, marginTop:7}}>
		        		<Icon color={'white'} name='history' size={20} />
		        	</View>
		        	
		        </View>
		      </View>
			)
	}
	
}


styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    flexDirection: 'column'
  },
  searchHeader: {
  	height:40,
  	backgroundColor:'#d45f58',
  	flexDirection: 'row',
  	padding:5,
  },
  icon: {
  	height:20,
  	marginTop:7
  }
  
});

export default Home
