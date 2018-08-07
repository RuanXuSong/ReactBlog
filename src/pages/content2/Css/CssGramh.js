import React, { Component } from 'react';
import HeadTitle from '../../../components/HeadTitle';
import SessionHead from '../../../components/SessionHead';
import SplitLine from '../../../components/SplitLine';
import In from '../../../components/Indent';
import CodeSession from '../../../components/CodeSession';
const columns1 = [{
  title: '标签',
  dataIndex: 'Tag',
  key: 'Tag',
},{
  title: '描述',
  dataIndex: 'Description',
  key: 'Description',
}];
const columns2 = [{
  title: '属性',
  dataIndex: 'Tag',
  key: 'Tag',
},{
  title: '描述',
  dataIndex: 'Description',
  key: 'Description',
}];

const data1 = [{
  key: '1',
  Tag: '<center>',
  Description:'定义居中的内容。',
}, {
  key: '2',
  Tag: '<font> 和 <basefont>',
  Description:'定义 HTML 字体。',
}, {
  key: '3',
  Tag: '<s> 和 <strike>',
  Description:'	定义删除线文本',
}, {
  key: '4',
  Tag: '<u>',
  Description:'定义下划线文本',
}];

const data2 = [{
  key: '1',
  Tag: 'align',
  Description:'定义文本的对齐方式',
}, {
  key: '2',
  Tag: 'bgcolor',
  Description:'定义背景颜色',
}, {
  key: '3',
  Tag: 'color',
  Description:'	定义文本颜色',
}];
  class CssGramh extends Component{
    render(){
      return(
        <div className="content">
          <HeadTitle title="CSS高级语法"/>
          <div className="content-container">
            <SessionHead title="选择器的分组"/>
           <div>
              你可以对选择器进行分组，这样，被分组的选择器就可以分享相同的声明。
              用逗号将需要分组的选择器分开。在下面的例子中，我们对所有的标题元素进行了分组。所有的标题元素都是绿色的。
           </div>       
            <CodeSession>
              <p>h1,h2,h3,h4,h5,h6 &#123;</p>
              <In>color&#58; green;</In>
              <p>&#125; </p>
            </CodeSession>
            <SplitLine/>
            <SessionHead title="解除继承"/>
            <div>
              如果你不希望 "Verdana, sans-serif" 字体被所有的子元素继承，又该怎么做呢？
              比方说，你希望段落的字体是 Times。没问题。创建一个针对 p 的特殊规则，这样它就会摆脱父元素的规则：
            </div>
            <CodeSession>
              <p>body &#123;</p>
              <In>font-family&#58;Verdana, sans-serif;</In>
              <p>&#125; </p>
              <br/>
              <p>td, ul, ol, ul, li, dl, dt, dd &#123;</p>
              <In>font-family&#58; Verdana, sans-serif;</In>
              <p>&#125; </p>
              <br/>
              <p>p &#123;</p>
              <In>font-family&#58; Times, "Times New Roman", serif;</In>
              <p>&#125; </p>
            </CodeSession>
          </div>
        </div>
        )
    }
  }
export default CssGramh;
