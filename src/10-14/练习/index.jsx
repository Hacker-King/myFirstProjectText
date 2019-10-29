import React from 'react';
import Input from './input/input';
import List from './list/list';
import './index.css';
export default class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      input2: '',
      list: ['11111', '222222', '333333']
    };
  }
  setInput = event => {
    this.setState({
      input: event.target.value
    });
  };
  setInput2 = event => {
    this.setState({
      input2: event.target.value
    });
  };
  addItem = () => {
    let date = new Date();
    let time = date.getHours() + ':' + date.getMinutes();
    this.setState({
      list: [...this.state.list, this.state.input + '时间' + time]
    });
    this.state.input = '';
  };
  deleteItem = index => {
    // console.log(index);
    this.setState(() => {
      const list = [...this.state.list];
      list.splice(index, 1);
      return {
        list
      };
    });
  };
  cleatItem = () => {
    console.log(1);
    this.setState({
      list: []
    });
  };

  Search = () => {
    let list = [...this.state.list];
    let result = []; //结束
    result = list.filter(item => {
      if (item.search(this.state.input2) !== -1) {
        return item;
      }
    });
    this.setState({
      list: result.length ? result : this.state.list
    });
   
  };
  render() {
    return (
      <div className="body">
        <Input
          value={this.state.input}
          additem={this.additn}
          input={this.setInput}
          additem={this.addItem}
        />
        <List
          list={this.state.list}
          search={this.Search}
          deleteitem={this.deleteItem}
          cleatitem={this.cleatItem}
          input2={this.setInput2}
        />
      </div>
    );
  }
}
