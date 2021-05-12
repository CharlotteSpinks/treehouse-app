import '../index.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import Player from './Player';


class App extends Component {
  
   state = {
    players : [
      {
        id: 1,
        name: "Lottie",
        score: 0
      },
      {
        id: 2,
        name :"Rich",
        score: 0
      },
      {
        id: 3,
        name :"Michael",
        score: 0
      },
      {
        id: 4,
        name :"Sarah",
        score: 0
      }
    ]
   };

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
      }));
  } 

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
       players:prevState.players.filter( p => p.id !== id )
      };
    });
  }
        
  render() {
      return (
      <div className="scoreboard">
      <Header 
        title="scoreboard"
        totalPlayers={this.state.players.length} 
      />
    
    {/* Players list */}
    {this.state.players.map( (player, index) => 
      <Player
        key={ player.id.toString() }
        id={ player.id }
        name={ player.name }
        index= { index }
        score={ player.score }
        removePlayer= { this.handleRemovePlayer }
        changeScore= { this.handleScoreChange }
      />
     )}
      </div>
  );
 }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

export default App;
