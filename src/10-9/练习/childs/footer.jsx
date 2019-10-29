import React from 'react';
export default () => {
  let el = React.createElement;
  return el('div', { key: 1, className: 'footer' }, '关于底部');
};
