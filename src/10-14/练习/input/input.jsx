import React from 'react';
import './input.css';
export default props => {
  return (
    <>
      <input type="text" className="input" value={props.value} onChange={props.input} placeholder='请输入留言信息' />
      <br />
      <button onClick={props.additem} className='btn'>提交</button>
    </>
  );
};
