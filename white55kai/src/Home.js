/**
 * 主页
 */

import React, { Component } from 'react'
import { View, Text, StatusBar, TouchableHighlight, StyleSheet, Image, ListView, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Util from './Util'
import { SearchBar } from 'react-native-elements'
import Carousel from 'react-native-looped-carousel';
import MovieSection from './MovieSection'
import axios  from  'axios'



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
			},
			carouselData:[],
		}
	}
	
	
	_getFetchData = () => {
	    axios.get('http://api.29pai.com/xnw/homepage?p=ios&n=1&p=ios', {
		    headers:  {
		    	'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
		    	'Accept-Encoding' : 'gzip, deflate, sdch',
		    	'Accept-Language'  : 'zh-CN,zh;q=0.8',
		    	'Connection': 'keep-alive',
		    	'Host' : 'api.29pai.com',
		    	'Upgrade-Insecure-Requests' : '1',
		    	'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36',
		    }
		})
		.then((response) => {
			if(response.data.toString() == '[object Object]'){
				this.setState({carouselData:response.data.data.run})
			}
		})
		  .catch(function (error) {
		    console.log(error);
		});

	}
	
	_onPressButton = () => {
		console.warn(1);
	}
	
	componentDidMount(){
		this._getFetchData();
	}
	
	
	_getListHeaderCarousel = () => {
		if(this.state.carouselData.length <=0 ){
			return (
				<View></View>
			)
		}else{
			return (
				<View style={this.state.headerSize}>
					<Carousel
			          delay={5000}
			          style={this.state.headerSize}
			          autoplay
			        >
					<TouchableHighlight  
					  onPressIn={() => console.log("onPressIn")}
					  onPressOut={() => console.log("onPressOut")}
					  onPress={() => this.props.navigate('MoviePlay')}
					  onLongPress={() => console.log("onLongPress")}
					  >
					  <Image
						          		style={[this.state.headerSize]}
						          		source={{uri: this.state.carouselData[0].img}}
						          		resizeMode='stretch'
						          	/>
					</TouchableHighlight>  
					<TouchableHighlight  
					  onPressIn={() => console.log("onPressIn")}
					  onPressOut={() => console.log("onPressOut")}
					  onPress={() => console.log("onPress")}
					  onLongPress={() => console.log("onLongPress")}
					  >
					  <Image
						          		style={[this.state.headerSize]}
						          		source={{uri: this.state.carouselData[1].img}}
						          		resizeMode='stretch'
						          	/>
					</TouchableHighlight>  
					<TouchableHighlight  
					  onPressIn={() => console.log("onPressIn")}
					  onPressOut={() => console.log("onPressOut")}
					  onPress={() => console.log("onPress")}
					  onLongPress={() => console.log("onLongPress")}
					  >
					  <Image
						          		style={[this.state.headerSize]}
						          		source={{uri: this.state.carouselData[2].img}}
						          		resizeMode='stretch'
						          	/>
					</TouchableHighlight>  
					<TouchableHighlight  
					  onPressIn={() => console.log("onPressIn")}
					  onPressOut={() => console.log("onPressOut")}
					  onPress={() => console.log("onPress")}
					  onLongPress={() => console.log("onLongPress")}
					  >
					  <Image
						          		style={[this.state.headerSize]}
						          		source={{uri: this.state.carouselData[3].img}}
						          		resizeMode='stretch'
						          	/>
					</TouchableHighlight>  
			        </Carousel>
				</View>
			)
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
