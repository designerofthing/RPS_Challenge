import React, { Component } from "react";
import '../index.css';

class GameStart extends Component {
  constructor(props) {
    super(props);
  this.state = {
    title: "Rock Paper Scissors",
    shouldShowStartButton: "visible",
    shouldShowPickWeaponButton: "hidden",
    shouldShowPlayButton: "hidden",
    textWeapon: "",
    opponentImage: "",
    shouldShowWeaponImage: "hidden",
    playAgain: "hidden",
    startButtonText: "Click to start the game!",
  }
  }
  gameStart = () => {
    this.setState({
      message: "Let's get ready to rumble!",
      message2: "Please choose your weapon, rock, paper or scissors",
      title: "",
      shouldShowStartButton: "hidden",
      shouldShowPickWeaponButton: "hidden",
    });
  };
  
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button
          id="start"
          onClick={this.gameStart}
          style={{ visibility: this.state.shouldShowStartButton }}
        >
          {this.state.startButtonText}
        </button>
        {this.state.clicked}
        <h2>{this.state.message}</h2>
        <h2>{this.state.message2}</h2>
      </div>
    );
  }
}
export default GameStart;
