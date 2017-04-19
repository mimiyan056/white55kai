/**
 * 
 * 分类介绍
 * 
 */
import React, { Component } from 'react'
import { View, StyleSheet, Text, Image} from 'react-native'
import Util from './Util'
import Icon from 'react-native-vector-icons/MaterialIcons'

class MovieSection extends Component {
	
	constructor(props) {
		super(props)
	}
	
	render(){
		const { data } = this.props;
		
		if(data === 'row 9'){
			return (
				<View style={{height:50,width:Util.size.width}}>
				</View>
			)
			
		}
		
		return (
			<View style={this.props.viewSize}>
				<View style={[{height:30, flexDirection:'row',margin:10}]}>
					<View style={[{height:20, width:3, backgroundColor:'#d45f58', marginTop:5}]}>
					</View>
					<View style={[{height:20, width:Util.size.width-70, margin:5, marginLeft:10}]}>
						<Text>今日热播</Text>
					</View>
					<View style={[{height:20, }]}>
						<Icon containerStyle={{justifyContent: 'center'}} color={'#d45f58'} name='more-horiz' size={30} />
					</View>
				</View>
				<View style={[{height:300, flexDirection:'column', margin:10}]}>
					<View style={{height:140, margin:5, flexDirection:'row' , justifyContent: 'space-between'  }}>
						<View style={[{height:140, width:105,  flexDirection:'column'}]}>
							<Image
								style={{height:125, width:105}}
				          		source={require('./images/movie.jpg')}
				          		resizeMode='stretch'
				          	/>
							<Text style={{height:15,width:105,textAlign:'left', fontSize:10}}>
								全球最屌
							</Text>
						</View>
						<View style={[{height:140, width:105, flexDirection:'column'}]}>
							<Image
								style={{height:125, width:105}}
				          		source={require('./images/movie.jpg')}
				          		resizeMode='stretch'
				          	/>
							<Text style={{height:15,width:105,textAlign:'left', fontSize:10}}>
								全球最屌
							</Text>
						</View>
						<View style={[{height:140, width:105, flexDirection:'column'}]}>
							<Image
								style={{height:125, width:105}}
				          		source={require('./images/movie.jpg')}
				          		resizeMode='stretch'
				          	/>
							<Text style={{height:15,width:105,textAlign:'left', fontSize:10}}>
								全球最屌
							</Text>
						</View>
					</View>
					<View style={{height:140, margin:5, flexDirection:'row' , justifyContent: 'space-between'  }}>
						<View style={[{height:140, width:105,  flexDirection:'column'}]}>
							<Image
								style={{height:125, width:105}}
				          		source={require('./images/movie.jpg')}
				          		resizeMode='stretch'
				          	/>
							<Text style={{height:15,width:105,textAlign:'left', fontSize:10}}>
								全球最屌
							</Text>
						</View>
						<View style={[{height:140, width:105, flexDirection:'column'}]}>
							<Image
								style={{height:125, width:105}}
				          		source={require('./images/movie.jpg')}
				          		resizeMode='stretch'
				          	/>
							<Text style={{height:15,width:105,textAlign:'left', fontSize:10}}>
								全球最屌
							</Text>
						</View>
						<View style={[{height:140, width:105, flexDirection:'column'}]}>
							<Image
								style={{height:125, width:105}}
				          		source={require('./images/movie.jpg')}
				          		resizeMode='stretch'
				          	/>
							<Text style={{height:15,width:105,textAlign:'left', fontSize:10}}>
								全球最屌
							</Text>
						</View>
					</View>
				</View>
				<View style={[this.props.viewSize,{height:5, backgroundColor:'#f6f6f6'}]}>
				</View>
			</View>
		)
	}
}

export default MovieSection