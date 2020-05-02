import React from "react";
import "./App.css";
import { makePuzzle, pluck } from "./sudoku";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true, board: {}, solution: {}, puzzle: {} };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  makeSudoku() {
    const answer = makePuzzle()
    const initial = pluck(answer, 25)
    const sudoku = {answer, initial}
    return sudoku
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div style={{
            color: this.state.isToggleOn ? "black" : "white"
          }}><h1>HELLO</h1></div>
          {}
          <button onClick={this.handleClick}>
            CHANGE
          </button>
          <this.makeSudoku />

        </header>
      </div>
    )
  }
}
export default App;
