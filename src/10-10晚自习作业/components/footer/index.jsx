import React, { Component } from 'react'
import Item from './left' //底部每一项
// Footer组件
import './index.css'
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        {/* 底部左侧 */}
        <Item />
        {/* 底部右侧 */}
        <Item />
      </div>
    )
  }
}
