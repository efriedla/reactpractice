import React, { Component } from 'react';
import './Course.css';
import ProjectsItem from './ProjectsItem';
// import ProjectsAdd from './ProjectsAdd';


export default class Projects extends Component {
  deleteProject(id){
      this.props.onDelete(id)
  }
        
  render() {
    //   console.log(this.props);
    // when passing state it is alway good to first see what your passing through
    // 2 map through 
    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
        //console.log(projects);
        return (
            <ProjectsItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
        );
      });
    }
    return (
      <div className='projects'>
       <h1>My projects</h1>
       <h4>projects</h4>
       <ul>
       {projectItems}
       </ul>
       
      </div>
    );
  }
}
