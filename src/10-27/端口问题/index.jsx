import React, { Component } from 'react';
import { login } from './vif.js';
import { login as reqLogin } from './api';
export default class index extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value
    });
  };
  handleClick = () => {
    let state = login(this.state);
    if (state) {
      return alert(state);
    } else {
      reqLogin(this.state).then(res=>{
          if (res.status===200&&res.data.code) {
            return alert('登陆成功！');
          }else{
              return alert(res.data.msg)
          }
      })
    }
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.username}
          name="username"
          onChange={this.handleChange}
        />
        <input
          type="password"
          value={this.state.password}
          name="password"
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>登录</button>
      </div>
    );
  }
}
