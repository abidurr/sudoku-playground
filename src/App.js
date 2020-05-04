import React from "react";
import "./App.css";
import { makePuzzle, pluck } from "./sudoku";

class App extends React.Component {
  constructor(props) {
    super(props);
    const answer = makePuzzle();
    const initial = pluck(answer, 25);
    const sudoku = { initial, answer };
    this.state = {
      isToggleOn: true,
      sudoku: sudoku,
    };
    this.handleClick = this.handleClick.bind(this);
    this.makeSudoku = this.makeSudoku.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  makeSudoku() {
    return JSON.stringify(this.state.sudoku);
  }

  makeTable(values) {
    let str = "";
    for (var i = 0; i < values.length; i++) {
      str = str + "<td>" + values[i] + "</td>";
    }
    console.log(str);
    return str;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div
            style={{
              color: this.state.isToggleOn ? "black" : "white",
            }}
          >
            <h1>HELLO</h1>
          </div>
          {}
          <button onClick={this.handleClick}>CHANGE</button>
          <this.makeSudoku />
          <table className="sudoku-table">
            <thead>
              <tr>
                <th>#</th>
                <this.makeTable props={this.state.sudoku.answer[1]} />
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>I</th>
                <td>3</td>
                <td>2</td>
                <td>3</td>
              </tr>
              <tr>
                <th>II</th>
                <td>7</td>
                <td>8</td>
                <td>7</td>
              </tr>
              <tr>
                <th>III</th>
                <td>9</td>
                <td>6</td>
                <td>6</td>
              </tr>
            </tbody>
          </table>
        </header>
      </div>
    );
  }
}
export default App;
