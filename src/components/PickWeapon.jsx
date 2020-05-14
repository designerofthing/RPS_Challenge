import React, { Component } from 'react';
import Rock from '../modules/Rock';
import Paper from '../modules/Paper';
import Scissors from '../modules/Scissors';
import Spock from '../modules/Spock';
import GameStart from './GameStart';

class PickWeapon extends Component {
  state = {
      shouldShowPickWeaponButton: "visible",
      shouldShowPlayButton: "hidden",
      textWeapon: "",
      opponentImage: "",
      shouldShowWeaponImage: "hidden",
      playAgain: "hidden",
  }

  pickWeapon = () => {
    this.weaponChoice = prompt(
      "Please choose your weapon: rock, paper or scissors:"
    );
    if (this.weaponChoice.toLowerCase() === "rock") {
      this.setState({
        textWeapon: "Rock",
        weaponImage: <Rock />,
        shouldShowPlayButton: "visible",
        shouldShowPickWeaponButton: "hidden",
        shouldShowWeaponImage: "visible",
      });
    } else if (this.weaponChoice.toLowerCase() === "paper") {
      this.setState({
        textWeapon: "Paper",
        weaponImage: <Paper />,
        shouldShowPlayButton: "visible",
        shouldShowPickWeaponButton: "hidden",
        shouldShowWeaponImage: "visible",
      });
    } else if (this.weaponChoice.toLowerCase() === "scissors") {
      this.setState({
        textWeapon: "Scissors",
        weaponImage: <Scissors />,
        shouldShowPlayButton: "visible",
        shouldShowPickWeaponButton: "hidden",
        shouldShowWeaponImage: "visible",
      });
    } else if (this.weaponChoice.toLowerCase() === "spock") {
      this.setState({
        textWeapon: "Spock",
        weaponImage: <Spock />,
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

  render() {
    return (
      <div>
       
         <button
          id="weapon"
          onClick={this.pickWeapon}
          style={{ visibility: this.state.shouldShowPickWeaponButton }}
        >
          Pick Weapon
        </button>
        
      </div>
    )
  }
}
export default PickWeapon;