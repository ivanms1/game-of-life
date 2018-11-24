import React, { Component } from 'react';

import './App.css';
import Board from './components/Board';

class App extends Component {

  state = {
    generation: 0,
    board: [],
    populated: [],
    onGoing: false
  }

  startGame = this.startGame.bind(this);
  stopGame = this.stopGame.bind(this);

  startGame(){
    const { board, onGoing } = this.state;

    this.setState({ onGoing: true })
    
  }

  stopGame(){
    this.setState({
      onGoing: false
    })
  }



  render() {
    const { generation, board, populated } = this.state;
    return (
      <div className="App">
        <h1>Game of life</h1>
        <Board board={board} populated={populated}/>
        <div className="buttons">
          <button onClick={this.startGame}>Start</button>
          <button onClick={this.stopGame}>Stop</button>
        </div>
        <h4>Generations: {generation}</h4>
      </div>
    );
  }
}

export default App;
