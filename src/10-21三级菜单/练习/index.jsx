import React, { Component } from 'react';
import './index.scss';
// 数据
const data = [
  {
    id: 1001,
    name: '一级导肮',
    arr: [
      {
        id: 1002,
        name: '二级导肮',
        arr: [
          { id: 10022, name: '三级导肮' },
          { id: 10023, name: '三级导肮' },
          { id: 10024, name: '三级导肮' }
        ]
      }
    ]
  },
  {
    id: 2001,
    name: '一级导肮',
    arr: [
      {
        id: 2002,
        name: '二级导肮',
        arr: [
          { id: 20022, name: '三级导肮' },
          { id: 20023, name: '三级导肮' },
          { id: 20024, name: '三级导肮' }
        ]
      }
    ]
  }
];
export default class index extends Component {
  queryItem = (id, data) => {
    // forEach遍历数组
    data.forEach(data => {
      if (data.id === id) {
        if (data.class === 'hide') {
          data.class = 'show';
        } else {
          data.class = 'hide';
        }
      } else {
        Array.isArray(data.arr) && this.queryItem(id, data.arr);
      }
    });
  };
  setDate = (event, id) => {
    // 阻止事件冒泡
    event.stopPropagation();
    // 调用递归函数
    this.queryItem(id, data);
    // 强制更新
    this.forceUpdate();
  };
  renderDom = data => {
    return (
      <ul>
        {data.map(item => {
          return (
            <li
              className={item.class}
              key={item.id}
              onClick={event => {
                this.setDate(event, item.id);
              }}
            >
              <p>{item.name}</p>
              {Array.isArray(item.arr) && this.renderDom(item.arr)}
            </li>
          );
        })}
      </ul>
    );
  };
  render() {
    return <div className="boby">{this.renderDom(data)}</div>;
  }
}
