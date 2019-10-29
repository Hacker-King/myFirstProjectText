import React from 'react';
export default (props) => {
  return (
    <div className="mon">
    <div className="monleft">
      <p className="monlfetp">监控</p>
    </div>
    <div className="kube">
      <div className="kubeheader">kube-controller-manager</div>
      <div className="kubefoot">
        <div className="kubeleft">kube-apiserver</div>
        <div className="kuberight">kube-scheduler</div>
      </div>
    </div>
    <div className="etcd">
      <div className="top">
        <div className="tops">ETCD</div>
      </div>
      <div className="topx">
        <div className="tops">镜像仓库</div>
      </div>
    </div>
    <div className="monright">
      <button className="monbtn1">docker</button>
      <button className="monbtn2">hulk-agent</button>
      <button className="monbtn">CNI</button>
      <button className="monbtn">CSI</button>
      <button className="monbtn1">kubelet</button>
    </div>
  </div>
  );
};