import React from 'react';
import context from './context';
const top = () => {
  return (
    <context.Consumer>
      {data => {
        return (
          <div className="top">
            <span>主题按钮:</span>
            <button
              style={{ background: '#FF0000' }}
              onClick={() => {
                data.setchange('#FF0000');
              }}
            >
              玫瑰红
            </button>
            <button
              style={{ background: '#4F81BD' }}
              onClick={() => {
                data.setchange('#4F81BD');
              }}
            >
              宝石蓝
            </button>
            <button
              style={{ background: '#FFFF00' }}
              onClick={() => {
                data.setchange('#FFFF00');
              }}
            >
              雏菊黄
            </button>
            <button
              style={{ background: '#FFFFFF' }}
              onClick={() => {
                data.setchange('#FFFFFF');
              }}
            >
              天使白
            </button>
            <button
              style={{ background: '#604A7B' }}
              onClick={() => {
                data.setchange('#604A7B');
              }}
            >
              浪漫紫
            </button>
          </div>
        );
      }}
    </context.Consumer>
  );
};

export default top;
