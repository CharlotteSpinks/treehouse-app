import React from 'react';

import Counter from './Counter';

const Player = (props) => {
    return (
      <div className="player">
      <span className="player-name">
      <button className="remove-player" onClick={ () => props.removePlayer(props.id)}> x </button>
      { props.name }
      <Counter 
        score={ props.score }
        changeScore={ props.changeScore }
        index={ props.index }
      />
      </span>
      </div>
    );
  }

  export default Player;