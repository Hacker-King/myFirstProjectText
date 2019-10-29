import React from 'react';
// 引入组件
import Side from './component/side/index';
// 引入样式
import './index.css';
// 引入图片
import Img from './component/img/b22.jpg';
export default class Index extends React.Component {
  render() {
      // 自定数组
    const listleft = ['1', '2', '3', '4', '5'];
    const listtop = ['1', '1', '1', '1', '1'];
    return (
      <div className="html">
          {/* 给组件传class */}
        <Side sidebox="sidebox" sidecon="sidecon">
          {listleft}
        </Side>
        {/* 右边主题内容 */}
        <div className="body">
            {/* 改变服用组件的样式 */}
          <Side sidebox="bodybox" sidecon="bodycon">
            {listtop}
          </Side>

          <div className="content">
              {/* 图像 */}
            <div className="content_left">
              <img className="img" src={Img} alt="" />
              
              周恩来（1898年3月5日-1976年1月8日）
              ，原籍浙江绍兴，1898年3月5日生于江苏淮安。1921年加入中国共产党，是伟大的马克思主义者，伟大的无产阶级革命家、政治家、军事家、外交家，党和国家主要领导人之一，中国人民解放军主要创建人之一，是以毛泽东同志为核心的党的第一代中央领导集体的重要成员。
            </div>
            <div className="content_right">
                {/* 顶部 */}
              <div className="right_top">
                <div className="top_left"></div>
                <div className="top_left"></div>
              </div>
              {/* 底部 */}
              <div className="buttom"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
