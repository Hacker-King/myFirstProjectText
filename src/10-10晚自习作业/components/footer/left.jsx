import React, { Component } from 'react'
const footerData = [
  { id: '1', label: 'IDC', className: 'footer-left-top-item green' },
  { id: '2', label: '内核与容器', className: 'footer-left-top-item blue' },
  { id: '3', label: '存储', className: 'footer-left-top-item red' }
]
// 底部左侧
export default class Left extends Component {
  render() {
    return (
      <div className="footer-left">
        {/* 上半部分 */}
        <div className="footer-left-top">
          {footerData.map((item, index) => (
            <p key={item.id} className={item.className}>
              {item.label}
            </p>
          ))}
        </div>
        {/* 下半部分 */}
        <div className="footer-left-bottom">下半部分</div>
      </div>
    )
  }
}
