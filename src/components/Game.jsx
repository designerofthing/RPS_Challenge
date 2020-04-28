import React, { Component } from 'react'

export class Game extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            buttonText: "Click to start the game!",
            title: "Rock Paper Scissors"
          }   
    };   
    Gamestart = () => {
        this.setState({
          buttonText: "Let's get ready to rumble!",
            message: 'Please choose your weapon, rock, paper or scissors',
            title: ""
        }); 
      }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                 <button onClick={this.Gamestart} id='start'>{this.state.buttonText}</button>
                 <h2>{this.state.message}</h2>
            </div>
        )
    }
}

export default Game;

