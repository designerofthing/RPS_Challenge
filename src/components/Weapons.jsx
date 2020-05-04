import React, { Component } from 'react'
import Rock from '../modules/Rock';
import Scissors from '../modules/Scissors';
import Paper from '../modules/Paper';



class Weapons extends Component {
    constructor() {
        super();

        this.state = {
            showWeapons: false,
            userWeapon: ''
        }

        this.showWeapons = this.showWeapons.bind(this);
        this.closeWeapons = this.showWeapons.bind(this);
  
    }

    showWeapons(event) {
      event.preventDefault();

      this.setState({ showWeapons: true }, () => {
        document.addEventListener('click', this.closeWeapons);
      });
    }

    closeWeapons(event) {
      if (!event.target.closest('#weapon')) {
       
      this.setState({ showWeapons: false }, () => {
        document.removeEventListener('click', this.closeWeapons);
      });
     }
    }
    userWeapon(event) {
      event.preventDefault();
      this.setState({userWeapon: true }, () => {
        document.addEventListener('click', this.userWeapon)
      })
    }
    render() {
    
        return (
            <div>
                <button onClick={this.showWeapons}> 
                    Show Weapons
                </button>
                
                {
                this.state.showWeapons
                ? (
                  <div id='weapon' className="menu"
                  
                  >
                    <Rock onClick={this.state.userWeapon = Rock} >Rock</Rock>
                    <Paper onClick={this.state.userWeapon=Paper} >Rock</Paper>
                    <Scissors onClick={this.state.userWeapon=Scissors} >Rock</Scissors>
                  </div>
                )
                : (null)
              }
            </div>
        );
    }
}


export default Weapons;
