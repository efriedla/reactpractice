import React, { Component } from 'react';
import './Course.css';
// import List from './List';


export default class Hello extends Component {
  
        
  render() {
    //   console.log(this.props);
    // when passing state it is alway good to first see what your passing through
    // 2 map through 
    return (
      <div >
       <h1>{this.props.test}</h1>
      </div>
    );
  }
}