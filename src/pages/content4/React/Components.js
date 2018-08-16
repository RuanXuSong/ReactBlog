import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Session from '../../../components/Session';
import XMP from '../../../components/XMP';
import Result from '../../../components/Result';
import NoteTip from '../../../components/NoteTip';
import In from '../../../components/Indent';
function NoteTips(props) {
  return <p className="NoteTip">{props.title}</p>;
}

class JSX extends Component{
  render(){
    return(
      <Panel title="React 组件">
        <Session title="组件是什么">
          <dl>
            <dd>在React中，组件（component）就是一个UI的单元。它的思想是，将要展示的内容，分成多个独立部分，每一个这样的部分，就是一个组件。</dd>
            <dd>每个组件，其实在代码中体现出来就是一个类。可以在组件里面定义方法和属性。对于组件来说，<code>render()</code>方法是非常重要的（必须实现），
            就是在这个方法返回组件的界面。在<code>render()</code>方法中，使用了JSX来定义组件的界面。</dd>
            <dd>我个人把组件理解为一个模具，把<code>div</code>按照规定的样式做成元素返回，每一个组件都能实现一种特定的功能，并且能够复用，大大提升了工作效率。</dd>
          </dl>
        </Session>
        <Session title="使用组件">
          <div>使用组件可以使得我们的应用更容易来管理。</div>
          <div>接下来我们封装一个输出 <code>title</code> 属性的组件，组件名为 <code>NoteTips</code>：</div>
          <XMP>
            <i>function NoteTips(props) &#123;</i>
              <In>return &lt;p className=<span className="code-string">"NoteTip"</span>>&#123;props.title}&lt;/p>;</In>
            <i>}</i>
            <i/>
            <i>const element = &lt;NoteTips title=<span className="code-string">"注意事项"</span>/>;</i>
            <i/>
            <i>ReactDOM.render(</i>
              <In>element,</In>
              <In>document.getElementById(<span className="code-string">'example'</span>)</In>
            <i>);</i>               
          </XMP>
          <Result>
              <NoteTips title="注意事项"/>
          </Result>
          以上是用了js函数的方式定义了组件，当然也可以用ES6的<code>class</code>方式定义组件，如下：
          <XMP>
            <i>class NoteTip extends Component &#123;</i>
              <In>render()&#123;</In>
              <In><In>return( </In></In>
                <In><In><In>&lt;p className=<span className="code-string">"NoteTip"</span>>&#123;this.props.title}&lt;/p></In></In></In>
              <In><In>)</In></In>  
              <In>}</In>           
            <i>}</i>
            <i/>       
            <i>const element = &lt;NoteTips title=<span className="code-string">"注意事项"</span>/>;</i>
            <i/>
            <i>ReactDOM.render(</i>
              <In>element,</In>
              <In>document.getElementById(<span className="code-string">'example'</span>)</In>
            <i>);</i>        
          </XMP>
          <Result>
            <NoteTip title="注意事项"/>
          </Result>
          <NoteTip>注意，原生 HTML 元素名以小写字母开头，而自定义的 React 类名以大写字母开头，比如 <code>HelloMessage</code> 不能写成 <code>helloMessage</code>。除此之外还需要注意组件类只能包含一个顶层标签，否则也会报错。</NoteTip>        
        </Session>
      </Panel>
      )
  }
}
export default JSX;
