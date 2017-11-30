import React, { Component } from 'react';
import './App.css';
import Calculator from './Calculator/Calculator';
import TickTackToe from './TickTackToe/TickTackToe';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TickTackToe/>
      </div>
    );
  }
}

export default App;
