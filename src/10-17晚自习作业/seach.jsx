import React, { Component } from 'react';

export default class Seach extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.input}
          onChange={this.props.handleChange}
          className="seach"
          placeholder="输入框"
        />
      </div>
    );
  }
}
