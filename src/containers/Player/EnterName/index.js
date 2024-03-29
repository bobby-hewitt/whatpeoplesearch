import React, { Component } from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.scss'
import { BackButton, Button, TextInput, BottomContainer, ColorText } from 'components'
import { joinRoom } from 'containers/SocketListener/player'
import { setLoading } from 'actions/player'


class NameTeam extends Component {

	constructor(props){
		super(props)
		const prevData = window.localStorage.quiz ? JSON.parse(window.localStorage.quiz) : false
		console.log(prevData)
		this.state = {
			name: prevData && prevData.name ? prevData.name : '',
			roomcode: prevData && prevData.room ? prevData.room : '',
		}
	}

	onContinue(){
		const { roomcode, name } = this.state
		joinRoom(this, {room: roomcode, name: name})
		// this.props.push('/p/waiting-start')
	}

	onChange(key, e){
		var value;
		if (key === 'roomcode'){
			value = e.target.value.toUpperCase()
		} else {
			value = e.target.value.slice(0,12)
		}
		this.setState({[key]: value})
	}

	onHost(){
		window.location.replace("http://host.trending.guru");
	}

	render(){
		const { name, roomcode } = this.state
		return(
			<div className="loginContainer">
				<ColorText text="Let's go" letterStyle={{fontSize:'50px'}}/>
				
				<TextInput 
					placeholder="Roomcode"
					value={roomcode} 
					onChange={this.onChange.bind(this, 'roomcode')}
					/>
				<TextInput 
					placeholder="Name"
					value={name}
					onContinue={this.onContinue.bind(this)} 
					onChange={this.onChange.bind(this, 'name')}
					/>
				
					<Button onClick={this.onHost.bind(this)} text="I'm the host" help/>
				
				<div>
					
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	users: state.player.users,
	room: state.player.room,
	usersSelected: state.player.usersSelected
})

const mapDispatchToProps = dispatch => bindActionCreators({
  	setLoading,
  	push: (path) => push(path),
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NameTeam)