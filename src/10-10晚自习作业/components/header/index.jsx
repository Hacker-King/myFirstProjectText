import React, { Component } from 'react';
import './index.css';
// Header部分
// 数据部分
const headerData = [
  { id: '1', lable: '服务注册', className: 'header-item' },
  { id: '2', lable: 'Portal', className: 'header-item header-small' },
  { id: '3', lable: 'OPS', className: 'header-item header-small' },
  { id: '4', lable: '服务管理', className: 'header-item' },
  { id: '5', lable: '发布系统', className: 'header-item' }
];
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        {headerData.map((item, index) => {
          return (
            <div className={item.className} key={item.id}>
              {item.lable}
            </div>
          );
        })}
      </div>
    );
  }
}
