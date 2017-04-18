/**
 * App入口页
 */
import React, { Component } from 'react'
import { View, StatusBar} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Tabs, Tab  } from 'react-native-elements'
import Home from './Home'
import ClassSearch from './ClassSearch'
import Rank from './Rank'
import More from './More'

class App extends Component {
	
	constructor() {
		super()
		this.state = {
			selectedTab: 'home'
		}
	}
	
	changeTab = (selectedTab) => {
		this.setState({selectedTab})
	}
	
	render() {
		const { selectedTab } = this.state
		return (
			<Tabs>
				
				<Tab hidesTabTouch
					titleStyle={{fontWeight: 'bold', fontSize: 10}}
					selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
					selected={selectedTab === 'home'}
					title={selectedTab === 'home' ? '主页' : null}
					renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='whatshot' size={30} />}
					renderSelectedIcon={() => <Icon color={'#6296f9'} name='whatshot' size={30} />}
					onPress={() => this.changeTab('home')}>
					<Home />
				</Tab>
				<Tab hidesTabTouch
					titleStyle={{fontWeight: 'bold', fontSize: 10}}
					selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
					selected={selectedTab === 'classSearch'}
					title={selectedTab === 'classSearch' ? '分类搜' : null}
					renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='search' size={30} />}
					renderSelectedIcon={() => <Icon color={'#6296f9'} name='search' size={30} />}
					onPress={() => this.changeTab('classSearch')}>
					<ClassSearch />
				</Tab>
				<Tab hidesTabTouch
					titleStyle={{fontWeight: 'bold', fontSize: 10}}
					selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
					selected={selectedTab === 'rank'}
					title={selectedTab === 'rank' ? '排行榜' : null}
					renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='equalizer' size={30} />}
					renderSelectedIcon={() => <Icon color={'#6296f9'} name='equalizer' size={30} />}
					onPress={() => this.changeTab('rank')}>
					<Rank />
				</Tab>
				<Tab hidesTabTouch
					titleStyle={{fontWeight: 'bold', fontSize: 10}}
					selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
					selected={selectedTab === 'more'}
					title={selectedTab === 'more' ? '更多' : null}
					renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='settings' size={30} />}
					renderSelectedIcon={() => <Icon color={'#6296f9'} name='settings' size={30} />}
					onPress={() => this.changeTab('more')}>
					<More />
				</Tab>
			</Tabs>
		)
	}
}

export default App