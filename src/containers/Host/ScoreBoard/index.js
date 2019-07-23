import React, { Component } from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Player, ColorText } from 'components'
import { setGameState, setScreenLoadingState, nextQuestion, updateAnswers, setRound, updatePlayers, setViewResponses,addAnswersToLikes} from 'actions/host'
import { sendQuestionInput, playVoiceover } from 'containers/SocketListener/host'
import ScoreboardPlayer from './ScoreboardPlayer'
import positions from 'data/scoreboardPositions'
import './style.scss'
const colors = [
	'#4285F4','#DB4437','#F4B400','#4285F4','#0F9D58','#DB4437'
]



class ScoreBoard extends Component {

	constructor(props){
		super(props)
		this.timeouts = []
		this.state = {
			visible: -1,
			end: false,
		}
	}


	componentWillMount(){
		const { players } = this.props
		
		const scores = this.assignScoreValue(players)
		for (var i = 0; i < players.length; i++){
			scores.find( (s, j) => {
				if (s.id === players[i].id){
					console.log('found matching id', players[i], j)
					players[i].position = j
				}
			})
		}
		this.setState({players: players})
	}

	assignScoreValue(players){
		var scores = []
		for (var i = 0; i < players.length; i++){
			scores.push({id: players[i].id, score: players[i].score})
		}
		scores = scores.sort(function(a, b){return b.score-a.score})
		return scores
	}

	componentDidMount(){
		this.showPlayer(0)
		playVoiceover(this, 'scores')
	}


	updateScores(){
		const { players } = this.props
		let newPlayers = Object.assign([], players)
		for (var i = 0; i < newPlayers.length; i++){
			console.log('updating, ', newPlayers[i].score, newPlayers[i].roundScore)
			newPlayers[i].score = newPlayers[i].score + newPlayers[i].roundScore;
			newPlayers[i].roundScore = 0;
		}
		this.props.updatePlayers(newPlayers)

		const scores = this.assignScoreValue(newPlayers)
		for (var i = 0; i < newPlayers.length; i++){
			scores.find( (s, j) => {
				if (s.id === newPlayers[i].id){
					console.log('found matching id', newPlayers[i], j)
					newPlayers[i].position = j
				}
			})
		}
		
		
		this.setState({players:newPlayers})


	}
	showPlayer(index){
		const { players } = this.props
		this.timeouts[index] = setTimeout(() => {
			this.setState({visible: index}, () => {
				if (players[index +1 ] && players[index + 1].name){
					this.showPlayer(index +1)
				} else {
					setTimeout(() => {
						this.updateScores()
						setTimeout(() => {
							if (!this.props.isEnd){
								
									addAnswersToLikes(Object.assign([], players))
									this.props.updateAnswers([])
									this.props.setRound(1)
									var newPlayers = Object.assign([], players)
									for (var i = 0; i < players.length; i++){
										players[i].answer = false
										players[i].hasSubmitted = false
										
									}
									this.props.updatePlayers(newPlayers)
									this.props.setViewResponses(false)
									this.props.nextQuestion()
									sendQuestionInput(this)
									
									this.props.push('/host/question-input')
								
							} else {
								playVoiceover(this, 'end')
								this.setState({
									end: true
								})
							}
						}, 4000)
					},1000)
					
				}
			})
		},500)
	}

	componentWillUnmount(){
		for (var i = this.timeouts.length - 1; i >= 0; i--) {
			clearTimeout(this.timeouts[i])
		}
	}





	render(){
		const { players, end } = this.state
		return(
			<div className="hostEndContainer">
				
				<div className="finalPlayerOuterContainer">

				{players && players.map((player, i) => {
					console.log(player)
					return(
						<ScoreboardPlayer
							key={i}  
							player={player}
							visible={this.state.visible >= player.position}
							score={player.score}
							physicalPosition={positions[players.length][player.position]}

						/>
					
					)
				})}
				{end &&
					<div className="scoreboardEndContainer">
						<ColorText text="That's it" />
					</div>
				}
				</div>
			</div>
		)
	}
}


const mapStateToProps = state => ({
	players: state.host.players,
	sounds: state.sounds,
	hostRoom: state.host.room,
	questionIndex: state.host.questionIndex
})

const mapDispatchToProps = dispatch => bindActionCreators({
  push: (path) => push(path),
  setGameState, 
  addAnswersToLikes,
  updateAnswers,
  setRound,
  updatePlayers,
  setViewResponses,
  nextQuestion,
  setScreenLoadingState 

}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreBoard)