import React, { Component } from 'react';
import 'antd/dist/antd.css';
import date from './web1810.json';
import './index.css';
export default class Index extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <table border="1">
        {date.fraction.map((item, index) => {
          return (
            <tr key={index}>
              <th>{item.name}</th>
              <th>{item.id}</th>
              <table>
                {item.dateArr.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.date}</td>
                      <td>{item.fraction}</td>
                      <td>
                        <button>编辑</button>
                      </td>
                    </tr>
                  );
                })}
              </table>
              {/* <th>{item.dateArr.map((item)=>{
                console.log(item)
                return <th>
                 123
                </th>
              })}</th>
              <th>{item.id}</th> */}
            </tr>
          );
        })}
      </table>
    );
  }
}
