import React, { Component } from 'react';
import './Course.css';
// import List from './List';


export default class ProjectsItem extends Component {
  
        
  render() { 
      //here is where 
    return (
      <li className='Project'>
        {this.props.project.title} - {this.props.project.category}

      </li>
    );
  }
}