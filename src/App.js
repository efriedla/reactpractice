import React, { Component } from 'react';
import './App.css';
import Calculator from './Calculator/Calculator';
import TickTackToe from './TickTackToe/TickTackToe';
import ToDoList from './ToDoList/ToDoList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoList/>
      </div>
    );
  }
}

export default App;
