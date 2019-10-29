import React from 'react';
export default (props) => {
  return (
    <div className="hulkapi">
      {/* 控制文本内容 */}
        <div className="hulapip">{props.text || 'HULK API'}</div>
      </div>
  );
};