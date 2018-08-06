import React, { Component } from 'react';
import HeadTitle from '../../../components/HeadTitle';
import SessionHead from '../../../components/SessionHead';
import SplitLine from '../../../components/SplitLine';
import TableList from '../../../components/TableList';
import NoteTip from '../../../components/NoteTip';
import CodeSession from '../../../components/CodeSession';
import './index.scss';		
const columns = [{
  title: '开始标签',
  dataIndex: 'startTag',
  key: 'startTag',
}, {
  title: '元素内容',
  dataIndex: 'eleContent',
  key: 'eleContent',
}, {
  title: '结束标签',
  dataIndex: 'endTag',
  key: 'endTag',
}];

const data = [{
  key: '1',
  startTag: '<p>',
  eleContent:'This is a paragraph',
  endTag: '</p>',
}, {
  key: '2',
  startTag: '<a href="default.htm" >',
  eleContent:'This is a link',
  endTag: '	</a>',
}, {
  key: '3',
  startTag: '<br />',
  eleContent:'',
  endTag: '',
}];
  class HtmlEle extends Component{
    render(){
      return(
        <div className="content">
          <HeadTitle title="HTML元素"/>
          <div className="content-container">
            <SessionHead title="HTML元素"/>
            <dl>
              <dt>HTML 文档是由 HTML 元素定义的。</dt>
              <dd>HTML 元素指的是从开始标签（start tag）到结束标签（end tag）的所有代码。</dd>
            </dl>
            <TableList columns={columns} data={data}/>
            <NoteTip title="注释：开始标签常被称为开放标签（opening tag），结束标签常称为闭合标签（closing tag）。"/>
            <SplitLine/>
            <dl>
              <SessionHead title="HTML 元素语法"/>
              <dd>HTML 元素以开始标签起始</dd>
              <dd>HTML 元素以结束标签终止</dd>
              <dd>元素的内容是开始标签与结束标签之间的内容</dd>
              <dd>某些 HTML 元素具有空内容（empty content）</dd>
              <dd>空元素在开始标签中进行关闭（以开始标签的结束而结束）</dd>
              <dd>大多数 HTML 元素可拥有属性</dd>
            </dl>
            <CodeSession>
              <p>&lt;html&gt;</p>
              <p></p>
              <p>&lt;body&gt;</p>
              <p>&lt;p>This is my first paragraph.&lt;/p&gt;</p>
              <p>&lt;/body&gt;</p>
              <p></p>
              <p>&lt;/html&gt;</p>
            </CodeSession>
            <SplitLine/>
          </div>
        </div>
        )
    }
  }
export default HtmlEle;
