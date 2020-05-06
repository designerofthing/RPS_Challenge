import React, { Component } from 'react'
import Rock from '../modules/Rock';
import Scissors from '../modules/Scissors';
import Paper from '../modules/Paper';



class Weapons extends Component {
    constructor() {
        super();

        this.state = {
            showWeapons: false,
            setUserWeapon: '' 
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
    
      handleClick(event) {
       this.setState.setUserWeapon('event.target.id')
    }

    render() {

        return (
            <div>
                <button onClick={this.showWeapons}> 
                    Weapons
                </button>
                
                {
                this.state.showWeapons
                ? (
                  <div id='weapon' className="menu"
                  
                  >
                   <Rock />
                   <button onClick={this.handleClick}id='rock'>Rock</button>
                   <Paper />
                   <button onClick={this.handleClick} id='paper'>Paper</button>
                   <Scissors />
                   <button onClick={this.handleClick} id='scissors'>Scissors</button> 
                    
                  </div>
                )
                : (null)
              }
            </div>
        );
    }
  }


export default Weapons;
