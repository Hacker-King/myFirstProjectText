import React from 'react';
import context from './context';
const left = () => {
  return (
    <context.Consumer>
      {data => {
        return (
          <div className="left">
            <button style={{background:data.theme}} onClick={()=>{data.onclick('川建国')}}>川建国</button>
            <button style={{background:data.theme}} onClick={()=>{data.onclick('郭德纲')}}>郭德纲</button>
            <button style={{background:data.theme}} onClick={()=>{data.onclick('李云龙')}}>李云龙</button>
            
          </div>
        );
      }}
    </context.Consumer>
  );
};

export default left;
