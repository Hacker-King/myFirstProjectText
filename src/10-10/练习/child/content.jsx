import React from 'react';
export default () => {
  return (
    <div className="content">
      <div className="contentleft">
        <button className="leftbtn">调度控制中心</button>
        <button className="leftbtn">干扰分析</button>
        <button className="leftbtn">自动运维</button>
        <button className="leftbtn1">策略控制</button>
        <button className="leftbtn1">服务画像</button>
        <button className="leftbtn1">重调度</button>
        <button className="leftbtn2">弹性</button>
        <button className="leftbtn1">容量规划</button>
        <button className="leftbtn1">IPAM</button>
        <button className="leftbtn1">配置中心</button>
        <button className="leftbtn3">伸缩</button>
      </div>
      <div className="contentright">
        <div className="rightdiv">
          <button className="rightbtn">MQ</button>
          <button className="rightbtnf">服务树</button>
        </div>
        <div className="rightdiv">
          <button className="rightbtn1">Redis</button>
          <button className="rightbtnd">DNS和Token服务</button>
        </div>
        <div className="rightdiv">
          <button className="rightbtn">DB</button>
          <button className="rightbtnc">CMDB</button>
        </div>
      </div>
    </div>
  );
};
