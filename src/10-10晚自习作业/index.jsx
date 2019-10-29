import React, { Component } from 'react';
import Header from './components/header/'; //头部
import Main from './components/main'; // 内容部分
import Footer from './components/footer/'; //底部
import './index.css';
export default class Index extends Component {
  render() {
    return (
      <div className="wrap">
        {/* 头部 */}
        <Header />
        {/* 内容部分 */}
        <Main />
        {/* 底部 */}
        <Footer />
      </div>
    );
  }
}
