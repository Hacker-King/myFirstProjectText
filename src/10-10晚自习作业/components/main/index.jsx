import React, { Component } from 'react'
import './index.css'
import Content1 from './content1/' //第一个部分内容
import Content2 from './content2/'
// Main组件
export default class Main extends Component {
  render() {
    return (
      <div className="main">
        {/* 第一部分内容 */}
        <Content1 />
        {/*第二部分  */}
        <Content2 />
      </div>
    )
  }
}
