import React from 'react';
export default () => {
  let el = React.createElement;
// 头部导航栏
  return el('div', { className: 'header' }, [
    el('button', { key:1, className: 'btn' }, '首页'),
    el('button', { key:2, className: 'btn' }, '新闻'),
    el('button', { key:3, className: 'btn' }, '关于')
  ]);
};
