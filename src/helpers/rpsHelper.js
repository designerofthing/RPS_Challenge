import Weapons from "../components/Weapons";


const userWeapon = Weapons.choice 
 
const opponentWeapon = Math.floor(Math.random()*3) + 1;

if(opponentWeapon == 1){
    opponentWeapon === 'Rock'
    }else if (opponentWeapon == 2) {
    opponentWeapon === 'Paper'
  } else if (opponentWeapon == 3) {
    opponentWeapon === 'Scissors'
  };

  if(opponentWeapon === userWeapon){
    return 'Draw' 
    }else if(opponentWeapon === 'Rock' && userWeapon === 'Paper'){
    return  "You Win!";
    }else if(opponentWeapon === 'Rock' && userWeapon === 'Scissors') {
    return  "You Lose!";
    }else if(opponentWeapon === 'Paper' && userWeapon === 'Scissors') {
    return  "You Win!";
    }else if(opponentWeapon === 'Paper' && userWeapon === 'Rock') {
    return  "You Lose!";
    }else if(opponentWeapon === 'Scissors' && userWeapon === 'Rock') {
    return  "You Win!";
    }else if(opponentWeapon === 'Scissors' && userWeapon === 'Paper'){
    return  "You Lose";
    };

    export default rpsHelper;