import React, { Component } from 'react';
import './Course.css';
import TodoItem from './TodoItem';


export default class Todo extends Component {

        
  render() {
    //   console.log(this.props);
    // when passing state it is alway good to first see what your passing through
    // 2 map through 
    let todoItems;
    if(this.props.todo){
      todoItems = this.props.todo.map(todo => {
        //console.log(Todo);
        return (
            <TodoItem  key={todo.title} todo={todo} />
        );
      });
    }
    return (
      <div className='Todo'>
       <h1>My Todo</h1>
       <h4>Todo</h4>
       <ul>
       {todoItems}
       </ul>
       
      </div>
    );
  }
}
