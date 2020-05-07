import React from 'react';
import Game from './Game';
import Weapons from './Weapons';



class App extends React.Component {
	constructor(props) {
		super(props)
    this.weapons = ['rock', 'paper', 'scissors']
    this.setUserWeapon = ''
    this.state = {
     
	}
	
  }
	outcome = ()=> {
		const {opponent} = this.state
		if(this.setUserWeapon === opponent) {
			return "It's a draw !"
		}
		if((this.userWeapon==="rock" && opponent==="scissors") ||
			(this.userWeapon==="paper" && opponent==="rock") ||
			(this.userWeapon==="scissors" && opponent==="paper")) {
			return "You win!"
		}
		return "You lose!"
	}

	runGame = () => {
		let counter = 0
		let myInterval = setInterval(() => {
			counter++
			this.setState({
				user: this.setUserWeapon,
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
         
			<div className='App'>
        <Weapons />
        {this.userWeapon}
			  {this.state.opponent}
				<p>{this.state.winner}</p>
				<button onClick={this.runGame}>Play game</button>
			</div>
      </>
		);
	}
}

export default App;
