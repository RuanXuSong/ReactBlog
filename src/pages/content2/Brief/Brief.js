import React, { Component } from 'react';
import './index.scss'
  class Brief extends Component{
    render(){
      return(
        <div className="content">
          <div className="head-title">HTML简介</div>
          <dl>
            <dt>HTML 是用来描述网页的一种语言。</dt>
            <dd>HTML 指的是超文本标记语言 (Hyper Text Markup Language)</dd>
            <dd>HTML 不是一种编程语言，而是一种标记语言 (markup language)</dd>
            <dd>标记语言是一套标记标签 (markup tag)</dd>
            <dd>HTML 使用标记标签来描述网页</dd>
          </dl>
        </div>
        )
    }
  }
export default Brief;
