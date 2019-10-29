import React, { Component } from 'react'
// 右侧内容
// 数据1
const Data1 = [
  { id: '1', label: 'MQ' },
  { id: '2', label: 'Redis' },
  { id: '3', label: 'DB' }
]
// 数据2
const Data2 = [
  { id: '1', label: '服务树' },
  { id: '2', label: 'DNS和Token服务' },
  { id: '3', label: 'CMDB' }
]
export default class Right extends Component {
  render() {
    return (
      <div className="main-right">
        {/* 第一列 */}
        <ul className="main-right-left">
          {Data1.map((item, index) => (
            <li key={item.id}>{item.label}</li>
          ))}
        </ul>
        {/* 第二列 */}
        <ul className="main-right-right">
          {Data2.map((item, index) => (
            <li key={item.id}>{item.label}</li>
          ))}
        </ul>
      </div>
    )
  }
}
