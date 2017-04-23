/**
 * 更多
 */

import React, { Component } from 'react'
import { View, Text, TouchableHighlight,  WebView, StyleSheet } from 'react-native'


const DEFAULT_URL = 'http://www.lcode.org';

class MoviePlay extends Component{
	
	static navigationOptions = {
	    header: ({ state, setParams }) => ({
	      visible:false //隐藏header
	    }),
  	};
//	static navigationOptions = {
//	  header: ({ state, setParams, goBack }) => ({
//	  		style : {backgroundColor:'#d45f58'},
//	  		left : (
//	  			<TouchableHighlight onPress={() => goBack()}  >
//	  				<Text style={{width:40,fontSize:16,color:'white',marginLeft:10}}>{'<返回'}</Text>
//	  			</TouchableHighlight>
//	  		)
//	  		
//	  })
//	  
//	}



	render() {
		return (
			<View style={{flex:1}}>
		        <Text style={{height:40}}>简单的网页显示</Text>
		        <WebView style={movieStyles.webview_style} 
		          source={{uri: DEFAULT_URL}}
		          startInLoadingState={true}
		          domStorageEnabled={true}
		          javaScriptEnabled={true}
		          >
		        </WebView>
	        </View>
		)
	}
	
}

movieStyles = StyleSheet.create({
    webview_style:{  
       backgroundColor:'#00ff00',   
    }
});

export default MoviePlay
