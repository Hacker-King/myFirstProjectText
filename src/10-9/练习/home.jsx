import React from 'react';
// 引入头部
import Header from './childs/header';
// 引入中间区
import Main from './childs/mian'
// 引入底部
import Footer from './childs/footer'
import './index.css';
export default () => {
  let el = React.createElement;
  return el('div', { className: 'warp' }, [
      <Header key='1' />,
      <Main key='2'  />,
      <Footer key='3' />
  ]);
};
