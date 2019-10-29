import React, { Component } from 'react';
import './index.css';
import { register } from './vif';
import { register as reqRegister } from './api';
import { Input, Button } from 'antd';
class index extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      rpassword: ''
    };
  }
  //   受控组件
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  //  点击注册
  handleReg = () => {
    let state = register(this.state);
    if (state) {
      return alert(state);
    } else {
      reqRegister({
        repassword: this.state.rpassword,
        password: this.state.rpassword,
        username: this.state.username
      }).then(res => {
        // 只有当接口成功返回后，再对值进行处理
        if (res.status === 200) {
          if (res.data.code) {
            this.props.getinfo('login');
            alert('注册成功！');
          } else {
            alert(res.data.msg);
          }
        }
      });
    }
  };
  handlelogin=()=>{
    this.props.getinfo('login');
  }
  render() {
    return (
      <div>
        <h1>注册账号</h1>
        <form className="form">
          <label>
            <Input
              type="text"
              name="username"
              value={this.state.username}
              placeholder="请输入注册账号"
              onChange={this.handleChange}
            />
          </label>
          <label>
            <Input
              type="password"
              name="password"
              placeholder="请输入密码"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <Input
              type="password"
              name="rpassword"
              placeholder="请输入重复密码"
              value={this.state.rpassword}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <Button type="primary" onClick={this.handleReg}>
              注册
            </Button>
            <Button type="primary" onClick={this.handlelogin}>
              快速登录
            </Button>
          </label>
        </form>
      </div>
    );
  }
}

export default index;
