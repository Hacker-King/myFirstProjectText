import React, { Component } from 'react';
import getBaidu from './api/index';
import _ from 'lodash';
import './index.css';
import List from './list';
import Seach from './seach';
export default class index extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      list: []
    };
    // 防抖函数
    this.handleDebounce = _.debounce(this.handleDebounce, 1000);
  }
  // 修改input的值
  handleChange = event => {
    let value = event.target.value;
    this.setState({
      input: value
    });
    // 请求接口
    this.handleDebounce(value);
  };
  handleDebounce = value => {
      // 判断输入框不为空
    if (value === '') {
      return false;
    }
    getBaidu(value).then(data => {
      this.setState({
        list: data.s
      });
    });
  };
  //   删除
  deletebtn = index => {
    this.setState(() => {
      const list = this.state.list;
      list.splice(index, 1);
      return list;
    });
  };
  render() {
    return (
      <div className="body">
        <Seach input={this.state.input} handleChange={this.handleChange} />
        <List list={this.state.list} deletebtn={this.deletebtn} />
      </div>
    );
  }
}
