import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  render() {
    return (
      <div >
       <h1>Calculator</h1>
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
          {/* on click right number in output */}
          {/* + on click symbol it take that number and adds it */}
          {/* = it says the result in the input box */}
          {/* c clears it  */}
          {/* begit with other functions */}

          
        </form>
      </div>
    );
  }
}

export default Calculator;