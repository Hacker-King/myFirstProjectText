import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Input } from 'antd';
// const { Option } = Select;
export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      password: '',
      select: '2',
      checkbox: [true, false, false]
    };
  }
  handleChange = ({ target }) => {
    const { name, value } = target;
    let checkbox = [...this.state[name]];
    checkbox[value] = !checkbox[value];
    this.setState({
      [name]: name === 'checkbox' ? checkbox : value
    });
  };
  render() {
    const { input, password, select, checkbox } = this.state;

    return (
      <div className="boby">
        <form>
          <label>
            输入框
            <Input
              type="text"
              name="input"
              value={input}
              onChange={this.handleChange}
              placeholder="请输入标题"
            />
          </label>
          <label>
            密码框
            <Input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder="请输入密码"
            />
          </label>
          <label>
            选择框
            <select name="select" value={select} onChange={this.handleChange}>
              <option value="1">打代码</option>
              <option value="2">看电视</option>
              <option value="3">读书</option>
            </select>
          </label>
          <React.Fragment>
            {checkbox.map((item, index) => {
              return (
                <label  key={index}>
                  {item.name}
                  <input
                    type="checkbox"
                    checked={item}
                    value={index}
                    name="checkbox"
                    onChange={this.handleChange}
                  />
                </label>
              );
            })}
          </React.Fragment>
        </form>
      </div>
    );
  }
}
