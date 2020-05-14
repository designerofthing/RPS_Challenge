import React, { Component } from 'react';
import Rock from '../modules/Rock';
import Paper from '../modules/Paper';
import Scissors from '../modules/Scissors';


class PlayGame extends Component {
  state = {
      shouldShowStartButton: "visible",
      shouldShowPickWeaponButton: "hidden",
      shouldShowPlayButton: "hidden",
      textWeapon: "",
      opponentImage: "",
      shouldShowWeaponImage: "hidden",
      playAgain: "hidden",
  }

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
      <div>
         <button
          id="play"
          onClick={this.playGame}
          style={{ visibility: this.state.shouldShowPlayButton }}
        >
          Play
        </button>
      </div>
    )
  }
}
export default PlayGame;