import React, { Component } from 'react';
// import './ToDoList.css';
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
            title: 'Business Website',
            category: 'Web Design'
        },
        {
          title: 'Social App',
          category: 'Mobile Developement'
      },
      {
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
  render() {
      //componentWillMount is where you should place data to setSate not the constroctor
    return (
      <div >
       <Projects projects={this.state.projects} />
       <ProjectsAdd addProject={this.handleProject.bind(this)}/>
      </div>
    );
  }
}
