import React, { Component } from 'react'
// content2组件
import './index.css'
import Title from '../../common/title/'
export default class Content2 extends Component {
  render() {
    return (
      <div className="content2">
        {/* 标题部分 */}
        <Title content="Kubernetes API" />
        {/* 主要内容部分 */}
        <main className="content2-main">
          {/* 第一部分 */}
          <div className="content2-main-part1">
            <p>监控</p>
          </div>
          {/* 第二部分 */}
          <div className="content2-main-part2">
            <div className="content2-main-part2-top">
              kube-controller-manager
            </div>
            <div className="content2-main-part2-bottom">
              <div className="content2-main-part2-bottom-item">
                <p>kube-</p>
                <p>controller-left</p>
              </div>
              <div className="content2-main-part2-bottom-item">
                <p>kube-</p>
                <p>controller-right</p>
              </div>
            </div>
          </div>
          {/* 第三部分 */}
          <div className="content2-main-part3">
            <div className="content2-main-part3-item lineH120">ETCD</div>
            <div className="content2-main-part3-item">
              镜像
              <br />
              仓库
            </div>
          </div>
          {/* 第四部分 */}
          <div className="content2-main-part4">
            <ul>
              <li>docker</li>
              <li>hulk-agent</li>
              <li className="content2-main-part4-ul-li">
                <span>CNI</span>
                <span>CSI</span>
              </li>
              <li>docker</li>
            </ul>
          </div>
        </main>
      </div>
    )
  }
}
