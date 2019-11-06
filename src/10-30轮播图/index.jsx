import React, { Component } from 'react';
import './index.css';
export default class index extends Component {
  constructor() {
    super();
    // 创建ref
    this.myRef = React.createRef();
  }
  componentDidMount() {
    let time = 0;
    setInterval(() => {
      if (time === 3) {
        time = 0;
      } else {
        time++;
      }
      this.myRef.current.style.left = -time * 100 + 'vw';
    }, 2000);
  }
  render() {
    return (
      <div className="box">
        <ul className="box-inner" ref={this.myRef}>
          <li style={{ background: 'blue' }}>1</li>
          <li style={{ background: 'red' }}>2</li>
          <li style={{ background: 'yellow' }}>3</li>
          <li style={{ background: 'pink' }}>4</li>
        </ul>
      </div>
    );
  }
}
