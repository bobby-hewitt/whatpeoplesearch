import React, { Component } from 'react'
import './style.scss'
import { ColorText, InputStyleText } from 'components'
export default class QuestionInput extends Component {

	constructor(props){
		super(props)
		this.state = {
			isLoaded: false,
			index: 0
		}
	}

	loadComplete(){
		this.setState({isLoaded: true})
	}

	
	componentDidMount(){
		this.getNewPlayer()
	}

	getNewPlayer(){
		this.setState({index: this.state.index+ 1})
		if (this.props.gameState !== 'question-input'){
			setTimeout(() => {
				this.getNewPlayer()
			},150)
		}

	}


	render(){


		const { name, players, isChoosing } = this.props
		const { index } = this.state
		// console.log(index % (players.length))
		const player = players[index % players.length]
		console.log('isChoosing', isChoosing)
		return(
			<div className="hostQuestionInputContainer">
				{player && isChoosing  &&
					<ColorText text={player.name} />	
				}
				{!isChoosing &&
					<ColorText text={name} loadComplete={this.loadComplete.bind(this)}/>
				}
				
				<InputStyleText isVisible={this.state.isLoaded  && !isChoosing}secondaryText={"Enter your search term"}/>
				
			</div>
			
		)
	}
}