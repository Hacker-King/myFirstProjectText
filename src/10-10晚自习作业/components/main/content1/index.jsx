import React, { Component } from 'react'
import Title from '../../common/title/' //标题部分
import Left from './left' // 左侧部分
import Right from './right' //右侧部分
import './index.css'
export default class Content1 extends Component {
  render() {
    return (
      <div className="content1">
        {/* 标题 */}
        <Title content="HULK API" />
        {/* 内容部分 */}
        <main className="content1-main">
          {/* 左侧内容 */}
          <Left />
          {/* 右侧内容 */}
          <Right />
        </main>
      </div>
    )
  }
}
