import React from 'react';
import './index.css';
const fixedDate = [
   { id:'1',lable:'综合 ↓',className:'fixed_text red'},
   { id:'2',lable:'人气 ↓',className:'fixed_text'},
   { id:'3',lable:'新品 ↓',className:'fixed_text'},
   { id:'4',lable:'销量 ↓',className:'fixed_text'},
   { id:'5',lable:'价格 ^',className:'fixed_text'}
]
export default class Index extends React.Component{
    render(){
        return( 
            <React.Fragment>
                <p>11</p>
                <p>11</p>
                <p>11</p>
                <p>11</p>
                <p>11</p>
        <div className='fixed'>
            {fixedDate.map((items,index)=>{
                return <div className={items.className} key={items.id}>{items.lable}</div>
            })}
             <div className='site'>
        <div className='site_left'>收获地:</div>
         <div className='site_right'>杭州</div>
          </div>
         <div className='site br'>
             <div className='site_text'>￥请输入</div>
             <div className='drop'>-</div>
             <div className='site_text'>￥请输入</div>
         </div>
          <div className='fM_con'>
          <label htmlFor="" className='new'><input className='inp' type="checkbox"/>新到商品</label>
          <label htmlFor=""><input className='inp' type="checkbox"/>包邮</label>
          <label htmlFor=""><input className='inp' type="checkbox"/>折扣</label>
          <div className='more'>更多<div className='i'>></div></div>
          </div>
          <div className='fType'>
              <div className='fType_w'><i className='icon_black'></i>店铺</div>
              <div className='fType_w red'><i className='icon_red'></i>大图</div>
          </div>
          <div className='right'>
               1/80 
             <div className='right_1 gray'> ^ </div>
              <div  className='right_1 fff'> > </div>
          </div>
        </div>
        <p style={{height:'2000px'}}>11</p>
              
        </React.Fragment>
        )
    }
}