import React from "react";
import "./App.css";
import { fromJS } from 'immutable';
import { makePuzzle, pluck } from "./sudoku";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true, board: {}, solution: {}, puzzle: {} };
    this.handleClick = this.handleClick.bind(this);
    this.makeBoard = this.makeBoard.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  makeCountObject() {
    const countObj = [];
    for (let i = 0; i < 10; i += 1) countObj.push(0);
    return countObj;
  }

  makeBoard({ puzzle }) {
    // create initial count object to keep track of conflicts per number value
    const rows = Array.from(Array(9).keys()).map(() => this.makeCountObject());
    const columns = Array.from(Array(9).keys()).map(() => this.makeCountObject());
    const squares = Array.from(Array(9).keys()).map(() => this.makeCountObject());
    const result = puzzle.map((row, i) => (
      row.map((cell, j) => {
        if (cell) {
          rows[i][cell] += 1;
          columns[j][cell] += 1;
          squares[((Math.floor(i / 3)) * 3) + Math.floor(j / 3)][cell] += 1;
        }
        return {
          value: puzzle[i][j] > 0 ? puzzle[i][j] : null,
          prefilled: !!puzzle[i][j],
        };
      })
    ));
    return fromJS({ puzzle: result, selected: false, choices: { rows, columns, squares } });
  }
  generateGame = (finalCount = 20) => {
    // get a filled puzzle generated
    const solution = makePuzzle();
    // pluck values from cells to create the game
    const { puzzle } = pluck(solution, finalCount);
    // initialize the board with choice counts
    const board = this.makeBoard({ puzzle });
    this.setState({
      board, solution, puzzle
    });
    return (
      { solution, puzzle }
    )
  }

   renderPuzzle() {
    const { board } = this.state.board;
    return (
      <div>
        {board.get('puzzle').map((row, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={i} className="row">
            {
              row.map((cell, j) => this.renderCell(cell, i, j)).toArray()
            }
          </div>
        )).toArray()}
      </div>
    );
   }

   render() {
    return (
      <div className="App">
        <header className="App-header">
          <div style={{
            color: this.state.isToggleOn ? "black" : "white"
          }}><h1>HELLO</h1></div>
          {makePuzzle()}
          {this.state.puzzle}
          <button onClick={this.handleClick}>
            CHANGE
          </button>
        </header>
      </div>
    )
  }
}
        
export default App;
