/**
 * 主页
 */

import React, { Component } from 'react'
import { View, Text, StatusBar, TouchableHighlight, StyleSheet, Image, ListView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Util from './Util'
import { SearchBar } from 'react-native-elements'
import Carousel from 'react-native-looped-carousel';
import MovieSection from './MovieSection'


class Home extends Component{
	
	constructor() {
		super()
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			width: Util.size.width,
			dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 4', 'row 5', 'row 6', 'row 7', 'row 8', 'row 9'
			]),
			headerSize:{
				height:180,
				width:Util.size.width,
			},
			sectionSize:{
				height:360,
				width:Util.size.width,
			}
		}
	}
	
	_getListHeaderCarousel = () => {
		return (
			<View style={this.state.headerSize}>
				<Carousel
		          delay={5000}
		          style={this.state.headerSize}
		          autoplay
		          onAnimateNextPage={(p) => console.log(p)}
		        >
		          <View style={[this.state.headerSize]}>
		          	<Image
		          		style={[this.state.headerSize]}
		          		source={require('./images/index1.jpg')}
		          		resizeMode='stretch'
		          	/>
		          </View>
		          <View style={[this.state.headerSize]}>
		          	<Image
		          		style={[this.state.headerSize]}
		          		source={require('./images/index2.jpg')}
		          		resizeMode='stretch'
		          	/>
		          </View>
		          <View style={[this.state.headerSize]}>
		          	<Image
		          		style={[this.state.headerSize]}
		          		source={require('./images/index3.jpg')}
		          		resizeMode='stretch'
		          	/>
		          </View>
		        </Carousel>
			</View>
		)
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
		        <View style={{width:this.state.width}}>
		        	<ListView
				      dataSource={this.state.dataSource}
				      renderHeader = { () => this._getListHeaderCarousel() }
				      renderRow={(rowData) => <MovieSection data={rowData} viewSize = {this.state.sectionSize} ></MovieSection>}
			    	>
				    </ListView>
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
