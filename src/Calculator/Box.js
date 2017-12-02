import React, { Component } from 'react';
import './Calculator.css';

export default class Box extends React.Component {
    
    render() {
    
  
      return (
        <div>
          <form>
          <input type='text' placeholder='0'/>
          <br/>
          <button>AV</button>
          <button>+-</button>
          <button>%</button>
          <button>/</button>
          <br/>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>X</button>
          <br/>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
          <br/>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
          <br/>
          <button>0</button>
          <button>.</button>
          <button>=</button>
          </form>
        </div>
      );
    }
  }
  