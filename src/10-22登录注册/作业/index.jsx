import React, { Component } from 'react';
import Login from './login';
import './index.css';
import Register from './register';
import 'antd/dist/antd.css';
class index extends Component {
  constructor() {
    super();
    // state控制加载哪个模块
    this.state = {
      show: 'login'
    };
  }
  // 接收组件返回的值，进行条件渲染控制
  getInfo = info => {
    this.setState({
      show: info
    });
  };
  // 渲染
  render() {
    return (
      <div className="boby">
        {/* <h1>登陆注册页</h1> */}
        {this.state.show === 'login' ? (
          <Login getinfo={this.getInfo} />
        ) : (
          <Register getinfo={this.getInfo} />
        )}
      </div>
    );
  }
}

export default index;
