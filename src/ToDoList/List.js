import React, { Component } from 'react';
import './ToDoList.css';
// import { List } from 'material-ui';

const List = props => (
    <ul>
        {
            props.items.map((item, index) => <li key={index}>
                {item}
                <button>Complete</button>
                <button>Delete</button>
            </li>)
            
           

        }
    </ul>
);

export default List;
    