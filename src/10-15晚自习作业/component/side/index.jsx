import React from 'react';
export default props => {
  return (
    <div className={props.sidebox} >
      {props.children.map((item, index) => {
        return <div key={index} className={props.sidecon}>{item}</div>;
      })}
    </div>
  );
};
