import React, { Component } from 'react';

export default class Index extends Component {
  handleChlick = event => {
    event.preventDefault();
    console.log('我被点击了');
  };
  render() {
    return (
      <div>
        <div>
            
        </div>
        <form>
          <button onClick={this.handleChlick}>点击我</button>
        </form>
      </div>
    );
  }
}
