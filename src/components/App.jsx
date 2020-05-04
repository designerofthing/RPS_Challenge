import React from 'react';
import Game from './Game';
import Weapons from './Weapons';
import Rock from '../modules/Rock'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.weapons = ["rock" , "paper", "scissors"]
		this.state = {}
	}

	outcome = ()=> {
		const {userWeapon, opponent} = this.state
		if(userWeapon == opponent) {
			return "It's a draw !"
		}
		if((userWeapon==="rock" && opponent==="scissors") ||
			(userWeapon==="paper" && opponent==="rock") ||
			(userWeapon==="scissors" && opponent==="paper")) {
			return "You win!"
		}
		return "You lose!"
	}

	runGame = () => {
		let counter = 0
		let myInterval = setInterval(() => {
			counter++
			this.setState({
				user: this.userWeapon,
				opponent: this.weapons[Math.floor(Math.random()*3)],
				winner: ""
			})
			if(counter > 20) {
				clearInterval(myInterval)
				this.setState({winner: this.outcome()})
			}
		},100)
	}

  render() {
		return (
      <>
      <Game />
			<div className="App">
       	User Weapon={this.state.userWeapon} />   
				Opponent Weapon={this.state.opponent}   />
				<p>{this.state.winner}</p>
				<button onClick={this.runGame}>Run game</button>
			</div>
      </>
		);
	}
}

export default App;
