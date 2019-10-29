import React from 'react';
export default () => {
  let el = React.createElement;
  // 中间内容
  return el('div', { className: 'main' }, [
    el('div', {key:1, className: 'left' }, '左侧部分'),
    el('div', {key:2, className: 'center' }, '中间部分'),
    el('div', {key:3, className: 'right' }, '右侧部分')
  ]);
};
