import React, { Component } from 'react';
import uuid from 'uuid';
import Hello from './Hello';
import About from './About';
import Projects from './Projects';
import ProjectsAdd from './ProjectsAdd';

export default class Start extends Component {
  constructor(props){
      super(props)
      this.state = {
          projects: []
      }
  }
  componentWillMount(){
    this.setState({projects: [
        {
            id:uuid.v4(),
            title: 'Business Website',
            category: 'Web Design'
        },
        {
            id:uuid.v4(),
            title: 'Social App',
            category: 'Mobile Developement'
      },
      {
            id:uuid.v4(),
            title: 'Ecomerce Shopping Cart',
            category: 'Web Developement'
      }
    ]});
  }
      handleProject(project){
        // console.log(p);
        let projects = this.state.projects;
        projects.push(project);
        this.setState({projects: projects}); 
      }
      handleDeleteProject(id){
        let projects = this.state.projects;
        let index = projects.findIndex(x => x.id === id);
        projects.splice(index, 1);
        this.setState({projects:projects});
      }  
  render() {
      //componentWillMount is where you should place data to setSate not the constroctor
    return (
      <div >
       <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
       <ProjectsAdd addProject={this.handleProject.bind(this)}/>
      </div>
    );
  }
}
