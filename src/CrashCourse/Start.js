import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
// import Hello from './Hello';
// import About from './About';
import Projects from './Projects';
import ProjectsAdd from './ProjectsAdd';
import Todos from './Todos';
// import TodoItem from './TodoItem';

export default class Start extends Component {
  constructor(props){
      super(props)
      this.state = {
          projects: [],
          todos:[]
      }
  }
  getTodos(){
    $.ajax({
        url:'https://jsonplaceholder.typicode.com/todos',
        dataType:'json',
        cache: false,
        success: function(data){
            this.setState({todos:data}, function(){
                console.log(this.state);
            });
        }.bind(this),
        error: function(xhr, status, err){
            console.log(err);
        }
    });
  }
  getProjects(){
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
  componentWillMount(){
    this.getProjects();
    this.getTodos();
  }
  componentDidMount(){
    this.getTodos();
    
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
        <hr/>
        <Todos  todo={this.state.todos}/>
      </div>
    );
  }
}
