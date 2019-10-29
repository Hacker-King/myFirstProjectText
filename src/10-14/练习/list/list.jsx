import React from 'react';
import './list.css';
export default class List extends React.Component {
  render() {
    return (
      <ul className="list">
        <li className='li'>
          当前留言共：{this.props.list.length}条<input type="text" className='search' placeholder='查询留言' value={this.props.value} onChange={this.props.input2} />
          <button className='search_btn' onClick={this.props.search}>查</button>
          <button className='btn_clear' onClick={this.props.cleatitem} >清空留言板</button>
        </li>

        {this.props.list.map((item, index) => {
          return (
            <li className='list_li' key={index}>
              {index + 1 > 9 ? index + 1 : `0` + (index + 1)}、{item}
             
             <button className='delete_btn' onClick={()=>this.props.deleteitem(index)} key={index}>删除</button>
            </li>
          );
        })}
      </ul>
    );
  }
}
