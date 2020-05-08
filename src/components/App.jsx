import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.weapons = ["Rock", "Paper", "Scissors"];
    this.state = {
      startButtonText: "Click to start the game!",
      title: "Rock Paper Scissors",
      shouldShowStartButton: "visible",
      shouldShowPickWeaponButton: "hidden",
      shouldShowPlayButton: "hidden",
      textWeapon: "",
      shouldShowWeaponImage: "hidden",
      playAgain: "hidden",
    };
  }
  Gamestart = () => {
    this.setState({
      message: "Let's get ready to rumble!",
      message2: "Please choose your weapon, rock, paper or scissors",
      title: "",
      shouldShowStartButton: "hidden",
      shouldShowPickWeaponButton: "visible",
    });
  };
  PickWeapon = () => {
    this.weaponChoice = prompt(
      "Please choose your weapon: rock, paper or scissors:"
    );
    if (this.weaponChoice.toLowerCase() === "rock") {
      this.setState({
        textWeapon: "Rock",
        shouldShowPlayButton: "visible",
        shouldShowPickWeaponButton: "hidden",
        shouldShowWeaponImage: "visible",
      });
    } else if (this.weaponChoice.toLowerCase() === "paper") {
      this.setState({
        textWeapon: "Paper",
        shouldShowPlayButton: "visible",
        shouldShowPickWeaponButton: "hidden",
        shouldShowWeaponImage: "visible",
      });
    } else if (this.weaponChoice.toLowerCase() === "scissors") {
      this.setState({
        textWeapon: "Scissors",
        shouldShowPlayButton: "visible",
        shouldShowPickWeaponButton: "hidden",
        shouldShowWeaponImage: "visible",
      });
    } else if (this.weaponChoice.toLowerCase() === "spock") {
      this.setState({
        textWeapon: "Spock",
        shouldShowPlayButton: "visible",
        shouldShowPickWeaponButton: "hidden",
        shouldShowWeaponImage: "visible",
      });
    } else
      this.setState({
        textWeapon: "Who brings a knife to a gun fight? Choose again.",
        shouldShowPlayButton: "hidden",
        shouldShowPickWeaponButton: "visible",
        shouldShowWeaponImage: "visible",
      });
  };
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
        <h1>{this.state.title}</h1>
        <button
          id="start"
          onClick={this.Gamestart}
          style={{ visibility: this.state.shouldShowStartButton }}
        >
          {this.state.startButtonText}
        </button>
        {this.state.clicked}
        <h2>{this.state.message}</h2>
        <h2>{this.state.message2}</h2>

        <button
          id="weapon"
          onClick={this.PickWeapon}
          style={{ visibility: this.state.shouldShowPickWeaponButton }}
        >
          Pick Weapon
        </button>
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
              <br />
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
              style={{ visibility: this.state.shouldShowPlayButton }}
            >
              Opponent Weapon:
              <br />
              {this.state.opponent}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
