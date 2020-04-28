import React, { Component } from 'react'
import Weapons from './Weapons'

export class Game extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            buttonText: "Click to start the game!",
            title: "Rock Paper Scissors",
            shouldShowButton: 'visible'
          }   
    };
    
    
    
    Gamestart = () => {
        this.setState({
            message: "Let's get ready to rumble!", 
            message2: "Please choose your weapon, rock, paper or scissors",
            dropDown: <Weapons />,
            title: "",
            shouldShowButton: 'hidden'
            
        }); 
      }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button id='start' onClick={this.Gamestart}
                style={{visibility: this.state.shouldShowButton}}>{this.state.buttonText}</button>
                    {this.state.clicked}
                <h2>{this.state.message}</h2>
                <h2>{this.state.message2}</h2>
                <p>{this.state.dropDown}</p>
                
            </div>
        )
    }
}

export default Game;
