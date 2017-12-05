import React, { Component } from 'react';
import './Course.css';
// import List from './List';


export default class ProjectsItem extends Component {
  deleteProject(id){
      this.props.onDelete(id);
  }
        
  render() { 
      //the delete will get pushed up two componentes
    return (
      <li className='Project'>
        {this.props.project.title}
         - 
        {this.props.project.category}
         <a href='#' 
            onClick={this.deleteProject.bind(this, this.props.project.id)}>
                 X 
        </a>

      </li>
    );
  }
}