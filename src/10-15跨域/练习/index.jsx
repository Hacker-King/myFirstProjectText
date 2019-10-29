import React from 'react';
import getBaidu from './api';
export default class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      list: []
    };
  }

  // 不设置input只是只读状态 不能修改
  handleChange = event => {
    this.setState({
      input: event.target.value
    });
    // getBaidu(this.state.input, data => {
    //   this.setState({
    //     list: data.s
    //   });
    // });
  };
  search = () => {
    getBaidu(this.state.input).then(data => {
      this.setState({
        list: data.s
      });
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <button onClick={this.search}>搜索</button>
        <ul>
          {this.state.list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}
