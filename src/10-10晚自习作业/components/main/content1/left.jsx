import React, { Component } from 'react'
// 左侧内容
// 第一层数据
const leftData1 = [
  { id: '1', label: '调度控制中心' },
  { id: '2', label: '干扰分析' },
  { id: '3', label: '自动运维' }
]
// 第二层数据
const LeftData2 = [
  { id: '1', label: '策略控制' },
  { id: '2', label: '服务画像' },
  { id: '3', label: '重调度' }
]
// 第三层数据
const LeftData3 = [
  { id: '1', label: '容量规划' },
  { id: '1', label: 'IPAM' },
  { id: '1', label: '配置中心' }
]

export default class Left extends Component {
  render() {
    return (
      <div className="main-left">
        {/*上半部分 */}
        <div className="main-left-top">
          {leftData1.map((item, index) => (
            <span key={item.id}>{item.label}</span>
          ))}
        </div>

        {/* 下半部分 */}
        <div className="main-left-bottom">
          {/* 左半部分 */}
          <div className="main-left-bottom-left">
            {/* 上半部分 */}
            <div className="main-left-bottom-left-top">
              {LeftData2.map((item, index) => (
                <span key={item.label}>{item.label}</span>
              ))}
            </div>
            {/* 下半部分 */}
            <div className="main-left-bottom-left-top">
              {LeftData3.map((item, index) => (
                <span key={item.label}>{item.label}</span>
              ))}
            </div>
          </div>
          {/* 右半部分 */}
          <div className="main-left-bottom-right">
            <p>弹 性</p>
            <p>伸 缩</p>
          </div>
        </div>
      </div>
    )
  }
}
