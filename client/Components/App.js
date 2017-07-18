import React, { Component } from 'react';
import './App.css';
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      PLAYER_ONE_SYMBOL: "X",
      PLAYER_TWO_SYMBOL: "O",
      currentTurn: "X",
      board:Array(25).fill(""),
      winner: "",
    }
  }

  handleClick(index) {
    if(this.state.board[index] === "" && !this.state.winner) {
      this.state.board[index] = this.state.currentTurn
      this.setState({
        board: this.state.board,
        winner: this.checkForWinner()? this.state.currentTurn : "",
        currentTurn: this.state.currentTurn === this.state.PLAYER_ONE_SYMBOL ? this.state.PLAYER_TWO_SYMBOL : this.state.PLAYER_ONE_SYMBOL
      });
    }
  }

  checkForWinner() {
    var currentTurn = this.state.currentTurn
    var symbols = this.state.board
    var winningCombos = [[0,1,2,3,4], [5,6,7,8,9], [10,11,12,13,14], [15,16,17,18,19], [20,21,22,23,24], [0,5,10,15,20], [1,6,11,16,21],[2,7,12,17,22],[3,8,13,18,23],[4,9,14,19,24],[0,6,12,18,24],[4,8,12,16,20]] 
    return winningCombos.find(function(combo) {
      if(symbols[combo[0]] !== "" && symbols[combo[1]] !== ""  && symbols[combo[2]] !== "" && symbols[combo[3]] !== ""  && symbols[combo[4]] !== "" && symbols[combo[0]] === symbols[combo[1]] && symbols[combo[1]] === symbols[combo[2]] && symbols[combo[2]] === symbols[combo[3]] && symbols[combo[3]] === symbols[combo[4]]) {
        return currentTurn
      } else {
        return false
      }
    });
  }
  
  resetGame()
  {
    this.setState({
        board:Array(25).fill(""),
        winner: "",
        currentTurn: 'X'
      });
  }

  render() {
    return (
      <div className="app-container">
        <h1> Welcome to TicTacToe</h1>
        <p>Player {this.state.currentTurn} turn</p>
        <div className="winner" >
        {this.state.winner ? <p1 >The winner is {this.state.winner}</p1> : null}
        </div>
        <div className="board">
        {this.state.board.map((cell, index) => {
          return <div onClick={() => this.handleClick(index)} className="square">{cell}</div>;
        })}
        </div>
        <div className="button-group">
         <button onClick={() =>  this.resetGame()}> Reset </button>
        </div>
      </div>
    )
  }
}

export default App;