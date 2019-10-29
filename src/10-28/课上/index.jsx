import React, { Component } from 'react';
import './index.css';
import context from './context';
import Child1 from './child1';
export default class index extends Component {
  constructor() {
    super();
    this.state={
        theme:'red'
    }
  }

  render() {
    return (
      <context.Provider >
        <Child1 />
      </context.Provider>
    );
  }
}
