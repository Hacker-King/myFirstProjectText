import React, { Component } from 'react';
import './index.css';
// 引入顶部导航栏
import Top from './top';
// 引入上下文对象
import context from './context';
// 引入主题内容
import Content from './content';
export default class Index extends Component {
  constructor() {
    super();
    // 默认值
    this.state = {
      bg: '#FF0000',
      text: '川建国'
    };
  }
  // 改变背景颜色
  setchange = bg => {
    this.setState({
      bg
    });
  };
  // 控制文字内容
  onclick = text => {
    this.setState({
      text
    });
  };
  render() {
    return (
      <div className="boby">
        <context.Provider
          value={{
            theme: this.state.bg,
            texts: this.state.text,
            setchange: this.setchange,
            onclick: this.onclick
          }}
        >
          <Top />
          <Content />
        </context.Provider>
      </div>
    );
  }
}
