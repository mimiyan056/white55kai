/**
 * 主页
 */

import React, { Component } from 'react'
import { View, Text, StatusBar, TouchableHighlight, StyleSheet, Image, ListView, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Util from './Util'
import { SearchBar } from 'react-native-elements'
import Carousel from 'react-native-looped-carousel';
import MovieSection from './MovieSection'


class ClassSearch extends Component{
	
	constructor() {
		super()
		this.state = {
			width: Util.size.width,
			headerSize:{
				height:200,
				width:Util.size.width,
			}
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
		        	<ScrollView>
		        		<View style={[{ flexDirection:'row',width:this.state.headerSize.width}]}>
		        			<View style={[ { height:100, width:this.state.headerSize.width/2-10, margin:5, flexDirection:'column'}]}>
		        				<Image
								style={{height:100, width:this.state.headerSize.width/2-10}}
				          		source={require('./images/classSearch/classSearch1.png')}
				          		resizeMode='stretch'
				          		/>
		        			</View>
		        			<View style={[ { height:100, width:this.state.headerSize.width/2-10, margin:5, flexDirection:'column'}]}>
		        				<Image
								style={{height:100, width:this.state.headerSize.width/2-10}}
				          		source={require('./images/classSearch/classSearch2.png')}
				          		resizeMode='stretch'
				          		/>
		        			</View>
		        		</View>
		        		<View style={[{ flexDirection:'row',width:this.state.headerSize.width}]}>
		        			<View style={[ { height:100, width:this.state.headerSize.width/2-10, margin:5, flexDirection:'column'}]}>
		        				<Image
								style={{height:100, width:this.state.headerSize.width/2-10}}
				          		source={require('./images/classSearch/classSearch3.png')}
				          		resizeMode='stretch'
				          		/>
		        			</View>
		        			<View style={[ { height:100, width:this.state.headerSize.width/2-10, margin:5, flexDirection:'column'}]}>
		        				<Image
								style={{height:100, width:this.state.headerSize.width/2-10}}
				          		source={require('./images/classSearch/classSearch4.png')}
				          		resizeMode='stretch'
				          		/>
		        			</View>
		        		</View>
		        		
		        		<View style={[{width:this.state.headerSize.width}]}>
		        			<View style={[{height:30, flexDirection:'row',margin:10,backgroundColor:'#f6f6f6'}]}>
								<View style={[{height:20, width:3, backgroundColor:'#d45f58', marginTop:5}]}>
								</View>
								<View style={[{height:20, width:Util.size.width, margin:5, marginLeft:10}]}>
									<Text>热门分类</Text>
								</View>
							</View>
							<View style={[{height:400, flexDirection:'column', margin:10}]}>
								<View style={{height:100, margin:5, flexDirection:'row' , justifyContent: 'space-between'  }}>
									<View style={[{height:100, width:105,  flexDirection:'column'}]}>
										<View style={{height:85, width:105, justifyContent:'center', alignItems: 'center',}}>
											<Image
							          			source={require('./images/nationnal/1.png')}
							          			resizeMode='center'
							          		/>
										</View>
										
										<Text style={{height:15,width:105,textAlign:'center', fontSize:10}}>
											好莱坞影视
										</Text>
									</View>
									<View style={[{height:100, width:105, flexDirection:'column'}]}>
										<View style={{height:85, width:105, justifyContent:'center', alignItems: 'center',}}>
											<Image
							          			source={require('./images/nationnal/2.png')}
							          			resizeMode='center'
							          		/>
										</View>
										<Text style={{height:15,width:105,textAlign:'center', fontSize:10}}>
											国内院线
										</Text>
									</View>
									<View style={[{height:100, width:105, flexDirection:'column'}]}>
										<View style={{height:85, width:105, justifyContent:'center', alignItems: 'center',}}>
											<Image
							          			source={require('./images/nationnal/3.png')}
							          			resizeMode='center'
							          		/>
										</View>
										<Text style={{height:15,width:105,textAlign:'center', fontSize:10}}>
											娱乐综艺
										</Text>
									</View>
								</View>
								<View style={{height:100, margin:5, flexDirection:'row' , justifyContent: 'space-between'  }}>
									<View style={[{height:100, width:105,  flexDirection:'column'}]}>
										<View style={{height:85, width:105, justifyContent:'center', alignItems: 'center',}}>
											<Image
							          			source={require('./images/nationnal/TH.png')}
							          			resizeMode='center'
							          		/>
										</View>
										
										<Text style={{height:15,width:105,textAlign:'center', fontSize:10}}>
											泰剧
										</Text>
									</View>
									<View style={[{height:100, width:105, flexDirection:'column'}]}>
										<View style={{height:85, width:105, justifyContent:'center', alignItems: 'center',}}>
											<Image
							          			source={require('./images/nationnal/US.png')}
							          			resizeMode='center'
							          		/>
										</View>
										<Text style={{height:15,width:105,textAlign:'center', fontSize:10}}>
											美剧
										</Text>
									</View>
									<View style={[{height:100, width:105, flexDirection:'column'}]}>
										<View style={{height:85, width:105, justifyContent:'center', alignItems: 'center',}}>
											<Image
							          			source={require('./images/nationnal/KR.png')}
							          			resizeMode='center'
							          		/>
										</View>
										<Text style={{height:15,width:105,textAlign:'center', fontSize:10}}>
											韩剧
										</Text>
									</View>
								</View>
								<View style={{height:100, margin:5, flexDirection:'row' , justifyContent: 'space-between'  }}>
									<View style={[{height:100, width:105,  flexDirection:'column'}]}>
										<View style={{height:85, width:105, justifyContent:'center', alignItems: 'center',}}>
											<Image
							          			source={require('./images/nationnal/4.png')}
							          			resizeMode='center'
							          		/>
										</View>
										
										<Text style={{height:15,width:105,textAlign:'center', fontSize:10}}>
											内地剧
										</Text>
									</View>
									<View style={[{height:100, width:105, flexDirection:'column'}]}>
										<View style={{height:85, width:105, justifyContent:'center', alignItems: 'center',}}>
											<Image
							          			source={require('./images/nationnal/JP.png')}
							          			resizeMode='center'
							          		/>
										</View>
										<Text style={{height:15,width:105,textAlign:'center', fontSize:10}}>
											日剧
										</Text>
									</View>
									<View style={[{height:100, width:105, flexDirection:'column'}]}>
										<View style={{height:85, width:105, justifyContent:'center', alignItems: 'center',}}>
											<Image
							          			source={require('./images/nationnal/GB.png')}
							          			resizeMode='center'
							          		/>
										</View>
										<Text style={{height:15,width:105,textAlign:'center', fontSize:10}}>
											英剧
										</Text>
									</View>
								</View>
							</View>
		        		</View>
		        		
		        		
		        		
		        	</ScrollView>
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

export default ClassSearch
