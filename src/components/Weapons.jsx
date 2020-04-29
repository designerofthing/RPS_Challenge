import React, { Component } from 'react'


class Weapons extends Component {
    constructor() {
        super();

        this.state = {
            showWeapons: false,
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
                    <p>Rock</p>
                    <p>Paper</p>
                    <p>Scissors</p>
                  </div>
                )
                : (null)
              }
            </div>
        );
    }
}


export default Weapons;
