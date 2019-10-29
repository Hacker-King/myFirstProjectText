import React from 'react';
// 引入ant ui框架
import 'antd/dist/antd.css';
import './index.css';
// 顶部导航
import Sider from './sider/index';
// 搜索
import Seach from './seach/seach';
// ant 按钮样式
import { Button } from 'antd';
export default class Index extends React.Component {
  constructor() {
    super();
    // 动态给组件传值
    this.state = {
      home: '首页',
      new: '新闻',
      about: '关于',
      cont1: '产品',
      cont2: '画册',
      cont4: '热点',
      cont5: '咨询',
    };
  }
  // 渲染
  render() {
    return (
      <div className="body">
          {/* 组件复用 */}
        <Sider
          siderlist={this.state.home}
          cont1={this.state.cont1}
          cont2={this.state.cont2}
        />
        <Sider
          siderlist={this.state.new}
          cont1={this.state.cont4}
          cont2={this.state.cont5}
        />
        <Button type="primary" >
          关于
        </Button>
        {/* 搜索组件 */}
        <Seach />
      </div>
    );
  }
}
