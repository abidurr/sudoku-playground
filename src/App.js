import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div style={{
          color: this.state.isToggleOn ? "black" : "white"
        }}><h1>HELLO</h1></div>
          
          <button onClick={this.handleClick}>
            CHANGE
          </button>
        </header>
      </div>
    );
  }
}

export default App;
