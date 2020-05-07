import React, { Component } from 'react'
import rock from './images/rock.png';

export default class App extends Component {
  constructor(props){
  super(props)
  this.state = {
    startButtonText: "Click to start the game!",
            title: "Rock Paper Scissors",
            shouldShowStartButton: 'visible',
            shouldShowPickWeaponButton: 'hidden',
            shouldShowPlayButton: 'hidden',
            textWeapon: ''
  }
  }
  Gamestart = () => {
    this.setState({
        message: "Let's get ready to rumble!", 
        message2: "Please choose your weapon, rock, paper or scissors",
        title: "",
        shouldShowStartButton: 'hidden',
        shouldShowPickWeaponButton: 'visible'
        
    }); 
  }
PickWeapon = () => {
  this.weaponChoice = prompt('Please choose your weapon: rock, paper or scissors');
  if (this.weaponChoice === 'rock') {
    this.setState({
      textWeapon: "rock",
      shouldShowPlayButton: 'visible',
    shouldShowPickWeaponButton: 'hidden'
  }) 
  } else if (this.weaponChoice === 'paper'){
    this.setState({
      textWeapon: "paper",
      shouldShowPlayButton: 'visible',
      shouldShowPickWeaponButton: 'hidden'
    }) 
  } else if (this.weaponChoice === 'scissors'){
    this.setState({
      textWeapon: "scissors",
      shouldShowPlayButton: 'visible',
      shouldShowPickWeaponButton: 'hidden'
    }) 
  } else 
  this.setState({
    textWeapon: "Who brings a knife to a gun fight? Choose again.",
    shouldShowPlayButton: 'visible',
    shouldShowPickWeaponButton: 'hidden'
  })   
}
playGame = () => {

  
}
  

  render() {
    
    return (
      
      <div
        style={{ textAlign: 'center'}}>
                <h1>{this.state.title}</h1>
                <button id='start' onClick={this.Gamestart}
                style={{visibility: this.state.shouldShowStartButton}}>{this.state.startButtonText}</button>
                    {this.state.clicked}
                <h2>{this.state.message}</h2>
                <h2>{this.state.message2}</h2>
       
        <button id='weapon' onClick={this.PickWeapon}style={{visibility: this.state.shouldShowPickWeaponButton}}>Pick Weapon</button>
        <button id='play' onClick={this.playGame}style={{visibility: this.state.shouldShowPlayButton}}>Play</button>

        <p>{this.state.textWeapon}</p>
      </div>
    )
  }
}
