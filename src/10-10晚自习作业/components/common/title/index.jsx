import React from 'react'
import './index.css'
// title 组件
export default props => {
  const { content } = props
  return (
    <div className="title">
      <h1 className="title-h1">{content}</h1>
    </div>
  )
}
