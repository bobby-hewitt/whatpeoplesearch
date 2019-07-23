import React, { Component } from 'react'
import './style.scss'
import { Player } from 'components'

export default class ScoreboardPlayer extends Component {


	constructor(props){
		super(props)
		this.state = {
			score: this.props.score,
			
		}
	}



	componentWillReceiveProps(np){
		if (np.score !== this.state.score){
			console.log('should adjust')
				this.adjustScore(parseInt(np.score))
			
			
		}
	}

	adjustScore(target){
		

		
		const plus = (value) => {
			setTimeout(() => {
				this.setState({isAdjusting: true, score: this.state.score + value}, () => {

					if (this.state.score <= target - 50){
						plus(50)
					} else if (this.state.score !== target){
						plus(target - this.state.score)
					} 
				})
			},50)
		}
		if (this.state.score < target){
			plus(50)
		}
		
		
	}
	render(){
		const { physicalPosition, player, visible} = this.props
		return(
			<div style={{
				position:'absolute', 
				marginTop: physicalPosition.top,
				marginLeft: physicalPosition.left
			}}className={`finalPlayerInnerContainer ${visible && 'isVisible'}`}>
				<p className="position">#{player.position + 1} {player.name}</p>
				<p className="score">{this.state.score}💰 {player.likes}👍</p>
				<Player {...player} isScores showLikes hideName/>
			</div>
		)
	}
}