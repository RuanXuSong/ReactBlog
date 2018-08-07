import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import SessionHead from '../../../components/SessionHead';
import SplitLine from '../../../components/SplitLine';
import In from '../../../components/Indent';
import CodeSession from '../../../components/CodeSession';
class CssGramh extends Component{
    render(){
      return(
        <Panel title="CSS高级语法">
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
        </Panel>
        )
    }
  }
export default CssGramh;
