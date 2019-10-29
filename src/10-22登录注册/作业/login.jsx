import React, { Component } from 'react';
import './index.css';
import { login } from './vif';
import { login as reqLogin } from './api';
import { Input } from 'antd';
import { Button } from 'antd';
class Index extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }
  // 改变input值
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  // 提交验证
  handleSubmit = () => {
    let state = login(this.state);
    if (state) {
      console.log(state)
      return alert(state);
    } else {
      reqLogin({
        password: this.state.rpassword,
        username: this.state.username
      }).then(res => {
        // 只有当接口成功返回后，再对值进行处理
        if (res.status === 200) {
          console.log(res);
          if (res.data.code) {
            alert('登陆成功！');
          } else {
            alert(res.data.msg);
          }
        }
      });
    }
  };
  handle = () => {
    this.props.getinfo('register');
  };
  // 渲染
  render() {
    const { username, password } = this.state;
    return (
      <div>
        <h1>登陆</h1>
        <form className="form">
          <label>
            <Input
              type="text"
              placeholder="用户名"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <Input
              type="password"
              name="password"
              placeholder="密码"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          
          <label>
            <Button type="primary" onClick={this.handle}>
              注册
            </Button>
            <Button block type="primary" onClick={this.handleSubmit}>
              Log in
            </Button>
          </label>
        </form>
      </div>
    );
  }
}

export default Index;
