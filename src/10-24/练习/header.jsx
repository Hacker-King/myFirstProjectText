import React from 'react';

const header = props => {
  return (
    <div>
      <ul>
        <li>默认主题</li>
        <li onClick={() => props.onclick('#B84130', '#ffffff')} style={{ background: '#B84130' }}></li>
        <li onClick={() => props.onclick('#363D98', '#ffffff')} style={{ background: '#363D98' }}></li>
        <li onClick={() => props.onclick('#FFD5CD', '#000000')} style={{ background: '#FFD5CD' }}></li>
        <li>动态颜色</li>
        <li>背景：</li>
        <input
          type="color"
          value={props.teme.background}
          onChange={props.handlechange}
          name="background"
        />
        <li>Color：</li>
        <input type="color" value={props.teme.color} onChange={props.handlechange} name="color" />
      </ul>
    </div>
  );
};

export default header;
