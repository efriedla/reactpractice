import React, { Component } from 'react';
import './ToDoList.css';
import List from './List';
// import TickTackToe from './TickTackToe/TickTackToe';


export default class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            items: []
        };
        }
        onChange = (event) => {
            this.setState({term: event.target.value});
          }
        onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term]
        });
        }
  render() {
    return (
      <div >
        <h1>To Do List</h1>
        <form onSubmit={this.onSubmit}>
            <input value={this.state.term} onChange={this.onChange} />
            <button>Submit</button>
        </form>
        <List items={this.state.items}/>
      </div>
    );
  }
}


