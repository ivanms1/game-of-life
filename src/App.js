import React, { Component } from 'react';

import './App.css';
import Board from './components/Board';

class App extends Component {

  state = {
    generation: 0,
    board: Array(400).fill(false),
    populated: [],
    hasStarted: false
  }

  createBoard = this.createBoard.bind(this);
  startGame = this.startGame.bind(this);
  pauseGame = this.pauseGame.bind(this);
  generation = this.generation.bind(this);
  resetGame = this.resetGame.bind(this);

  componentDidMount(){
    this.createBoard()
  }

  createBoard(){
    const { board } = this.state;

    board.map((cell, index) => {
      if(Math.floor(Math.random() * 4) === 1){
        board[index] = true;
      }
    })

    this.setState({ ...board, board })
  }

  startGame () {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.generation, 500)
  }

  pauseGame () {
    clearInterval(this.intervalId);
  }

  resetGame() {
    this.setState({ board: Array(400).fill(false), generation: 0 }, () => {
      this.createBoard();
      clearInterval(this.intervalId);
    });
  }

  generation(){
    const { board, generation } = this.state;

    let newArray = board;

    newArray.map((cell, index) => {
      let count = 0;
      if(newArray[index - 21]) count++;
      if(newArray[index - 20]) count++;
      if(newArray[index - 19]) count++;
      if(newArray[index - 1]) count++;
      if(newArray[index + 1]) count++;
      if(newArray[index + 19]) count++;
      if(newArray[index + 20]) count++;
      if(newArray[index + 21]) count++;

      if(newArray[index] && (count < 2 || count > 3)) newArray[index] = false;
      if(!newArray[index] && count === 3) newArray[index] = true;
    })

    this.setState({ board: newArray, generation: generation + 1 })
  }

  render() {
    const { generation, board, populated } = this.state;
    return (
      <div className="App">
        <h1>Game of Life</h1>
        <Board board={board} populated={populated}/>
        <h5>Generation: {generation}</h5>
        <div className="buttons">
           <button onClick={this.startGame}>Start</button>
           <button onClick={this.pauseGame}>Pause</button>
           <button onClick={this.resetGame}>Reset</button>
        </div>
      </div>
    );
  }
}

export default App;
