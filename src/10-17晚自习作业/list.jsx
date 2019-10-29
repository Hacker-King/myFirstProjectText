import React, { Component } from 'react';
export default class List extends Component {
  render() {
    return (
      <div>
        <ul className="ul">
          {this.props.list.map((item, index) => {
            return (
              <li className="list" key={index}>
                {index + 1 > 9 ? index + 1 : '0' + (index + 1)}.{item}
                <button
                  className="deletebtn"
                  onClick={() => this.props.deletebtn(index)}
                  className="btn"
                >
                  删除
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
