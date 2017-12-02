import React, { Component } from 'react';
import './Calculator.css';
import Box from './Box';



class Calculator extends Component {
  render() {
    return (
      <div >
       <h1>Calculator</h1>
        
          <Box/>
          {/* on click right number in output */}
          {/* + on click symbol it take that number and adds it */}
          {/* = it says the result in the input box */}
          {/* c clears it  */}
          {/* begit with other functions */}

          
      </div>
    );
  }
}

export default Calculator;