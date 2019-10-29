import React from 'react';
// 引入css样式
import './index.css';
// 引入头部
import Header from './child/header';
// 引入Huikapi内容的div
import Huikapi from './child/huikapi';
// 引入中间内容
import Content from './child/content';
// 引入监控部分内容
import Mon from './child/mon';
// 引入底部
import Footer from './child/footer';
export default () => {
  return (
    // 占位
    <React.Fragment>
      {/* 使用无定义组件 */}
      {/* 头部 */}
      <Header />
      <Huikapi />
      {/* 中间部分 */}
      <Content />
      {/* 使用text里面自定义内容 */}
      <Huikapi text="Hubernetes API" />
      <Mon />
      {/* 底部 */}
      <Footer />
    </React.Fragment>
  );
};
