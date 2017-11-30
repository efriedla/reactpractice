import React, { Component } from 'react';
import './TickTackToe.css';


export default function Square(props) {
  return (
    <button className="tsquare" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

  