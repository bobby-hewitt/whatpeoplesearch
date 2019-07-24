import React, { Component } from 'react'
import SocketListener from '../SocketListener'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { User, Button } from 'components'
import { toggleUserSelect } from 'actions/player'
import { Route } from 'react-router'
import './style.scss'
import EnterName from './EnterName'
import WaitingStart from './WaitingStart'
import Waiting from './Waiting'
import End from './End'
import QuestionInput from './QuestionInput'
import AnswerInput from './AnswerInput'
import HostDisconnected from './HostDisconnected'
import Likes from './Likes'
import Loading from './Loading'
import QuestionInputError from './QuestionInputError'
import { setLikes } from 'actions/player'

class Player extends Component {

	onClickUser(index){
		this.props.toggleUserSelect(index)
	}

	changeScene(path){
		this.props.push(path)
	}

	componentWillMount(){
		// if (window.localStorage.quiz){
			this.props.push('/')
		// }
	}
	render(){
		const { loading, room, likes }= this.props
		return(
			<div className="playerContainer">
				<SocketListener />
				<div className="routeContentContainer">
					<Route exact path="/" render={() => <EnterName push={this.changeScene.bind(this)}/>} />
					<Route exact path="/waiting-start" render={() => <WaitingStart push={this.changeScene.bind(this)}/>} />
					<Route exact path="/waiting" render={() => <Waiting />} />
					<Route exact path="/question-input" render={() => <QuestionInput />} />
					<Route exact path="/question-input-error" render={() => <QuestionInputError />} />
					<Route exact path="/answer-input" render={() => <AnswerInput />} />
					<Route exact path="/end" render={() => <End push={this.props.push.bind(this)}room={room}/>} />
					<Route exact path="/likes" render={() => <Likes setLikes={this.props.setLikes}likes={likes} room={room}/>} />
					<Route exact path="/host-disconnected" render={() => <HostDisconnected push={this.props.push.bind(this)}/>} />
				</div>
				
			</div>
		)
	}
}

const mapStateToProps = state => ({
	loading:state.player.loading,
	room:state.player.room,
	likes:state.player.likes
})

const mapDispatchToProps = dispatch => bindActionCreators({
  push: (path) => push(path),
  setLikes
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player)