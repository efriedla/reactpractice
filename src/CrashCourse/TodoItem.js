import React, { Component } from 'react';
import './Course.css';
// import List from './List';


export default class TodoItem extends Component {
 
        
  render() { 
      //the delete will get pushed up two componentes
    return (
      <li className='Project'>
        {this.props.todo.title}
        

      </li>
    );
  }
}