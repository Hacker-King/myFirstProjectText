import React from 'react';
import './index.css';
import context from './context';
import Left from './left';
import Right from './right';
const content = () => {
  return (
    <context.Consumer>
      {data => {
        return (
          <div className="content" style={{ background: data.theme }}>
            <Left />
            <Right />
          </div>
        );
      }}
    </context.Consumer>
  );
};

export default content;
