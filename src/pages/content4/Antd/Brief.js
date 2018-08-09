import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Img from '../../../components/Img';
import Session from '../../../components/Session';
  class Brief extends Component{
    render(){
      return(
        <Panel title="Ant Design of React">
          <Session title="Antd简介">
          <Img src="react-pic.svg" alt="react"/>
          <dl>       
            <dt>特性</dt>
            <dd>提炼自企业级中后台产品的交互语言和视觉风格。</dd>
            <dd>开箱即用的高质量 React 组件。</dd>
            <dd>使用 TypeScript 构建，提供完整的类型定义文件。</dd>
            <dd>全链路开发和设计工具体系。</dd>
          </dl>
          </Session>
          <Session title="HTML标签">
            <dl>
              <dt>HTML 标记标签通常被称为 HTML 标签 (HTML tag)。</dt>
              <dd>HTML 指的是超文本标记语言 (Hyper Text Markup Language)</dd>
              <dd>HTML 不是一种编程语言，而是一种标记语言 (markup language)</dd>
              <dd>标记语言是一套标记标签 (markup tag)</dd>
              <dd>HTML 使用标记标签来描述网页</dd>
            </dl>
          </Session>
        </Panel>
        )
    }
  }
export default Brief;
