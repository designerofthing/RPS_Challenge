import React, { Component } from "react";
import Rock from '../modules/Rock';
import Paper from '../modules/Paper';
import Scissors from '../modules/Scissors';
import Spock from '../modules/Spock';
import GameStart from "./GameStart";
import PickWeapon from "./PickWeapon"


class App extends Component {
  constructor(props) {
    super(props);
    this.weapons = ["Rock", "Paper", "Scissors"];
    this.state = {
      startButtonText: "Click to start the game!",
      shouldShowStartButton: "visible",
      shouldShowPickWeaponButton: "hidden",
      shouldShowPlayButton: "hidden",
      textWeapon: "",
      opponentImage: "",
      shouldShowWeaponImage: "hidden",
      playAgain: "hidden",
    };
  }
 
  outcome = () => {
    const { textWeapon, opponent } = this.state;
    if (textWeapon === opponent) {
      return "It's a draw !";
    }
    if (
      (textWeapon === "Rock" && opponent === "Scissors") ||
      (textWeapon === "Paper" && opponent === "Rock") ||
      (textWeapon === "Scissors" && opponent === "Paper") ||
      textWeapon === "Spock"
    ) {
      return "You win!";
    }
    return "You lose!";
  };

  playGame = () => {
    let counter = 0;
    let myInterval = setInterval(() => {
      counter++;
      this.setState({
        textWeapon: this.state.textWeapon,
        opponent: this.weapons[Math.floor(Math.random() * 3)],
        winner: "",
      }); 
      if (this.state.opponent === 'Rock'){
        this.setState({
          opponentImage: <Rock />
        })
      } else if (this.state.opponent === 'Paper'){
        this.setState({
          opponentImage: <Paper />
        })
      } else if (this.state.opponent === 'Scissors'){
        this.setState({
          opponentImage: <Scissors />
        })
      }
      if (counter > 20) {
        clearInterval(myInterval);
        this.setState({
          winner: this.outcome(),
          playAgain: "visible",
        });
      }
    }, 100);
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <GameStart />
       <PickWeapon />
        <br />
        <button
          id="play"
          onClick={this.playGame}
          style={{ visibility: this.state.shouldShowPlayButton }}
        >
          Play
        </button>
        <div id="battle">
          <div id="left">
            <p
              id="text-weapon"
              style={{ visibility: this.state.shouldShowWeaponImage }}
            >
              Your Weapon:
              <br/>
              {this.state.weaponImage}
              <br/>
              {this.state.textWeapon}
            </p>
          </div>
          <div id="centre">
            <p id="outcome" style={{ visibility: this.state.playAgain }}>
              {this.state.winner}
              <br />
              Click Play to Play Again
            </p>
          </div>
          <div id="right">
            <p
              id="opponent-weapon"
              style={{ visibility: this.state.shouldShowWeaponImage }}
            >
              Opponent Weapon:
              <br/>
              {this.state.opponentImage}
              <br/>
              {this.state.opponent}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default App;