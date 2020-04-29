import Weapons from "../components/Weapons";


const userWeapon = 
if(Weapons.choice == 'Rock'){
    return 1
} else if (Weapons.choice == 'Paper') {
    return 2
} else { 
    return 3 
}
 
const opponentWeapon = Math.floor(Math.random()*3) + 1;

if(opponentWeapon == 1){
    document.querySelectorAll("img")[0].setAttribute("src", "images/rock.png");
    }else if (opponentWeapon == 2) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/paper.png");
  } else if (opponentWeapon == 3) {
    document.querySelectorAll("img")[0].setAttribute("src", "images/scissors.png");
  }

  if(opponentWeapon < userWeapon){
    document.querySelector("h1").textContent = "Player 2 Wins!";
    }else if(opponentWeapon > userWeapon) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
  }else  {
    document.querySelector("h1").textContent = "Draw!";
  }opponentWeapon