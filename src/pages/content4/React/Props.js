import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Session from '../../../components/Session';
import Result from '../../../components/Result';
import XMP from '../../../components/XMP';
import NoteTip from '../../../components/NoteTip';
import In from '../../../components/Indent';

class Name extends React.Component {
    render(){
      return(
        <p className="NoteTip">{this.props.title}</p>
      )  
    }
 } 
 class NoteTip1 extends React.Component {
  render(){
    return(
      <Name title= {this.props.title}/>
    )
  }          
}

class Props extends Component{
  render(){
    return(
      <Panel title="Props">
        <Session title="React组件属性">
          <dl>
            <dd><code>Props</code>是组件之间传递数据的媒介</dd>
            <dd>组件的属性是父组件给它的（组件之间可以嵌套），存储的是父组件对子组件的要求。</dd>
            <dd><code>state</code> 和 <code>props</code> 主要的区别在于 <code>props</code> 是不可变的，但是在组件内部可以对属性进行访问（使用），而 <code>state</code> 可以根据与用户交互来改变。
            这就是为什么有些容器组件需要定义 <code>state</code> 来更新和修改数据。 而子组件只能通过 <code>props</code> 来传递数据。</dd>
          </dl>      
          <div>还记得上一章的那个组件吗</div>
          <XMP>
            <i>class NoteTip extends Component &#123;</i>
              <In>render()&#123;</In>
              <In><In>return( </In></In>
                <In><In><In>&lt;p className=<span className="code-string">"NoteTip"</span>>&#123;this.props.title}&lt;/p></In></In></In>
              <In><In>)</In></In>  
              <In>}</In>           
            <i>}</i>      
            <i/>
            <i>ReactDOM.render(</i>
              <In>&lt;NoteTip title=<span className="code-string">"Michale"</span>/>,</In>
              <In>document.getElementById(<span className="code-string">'example'</span>)</In>
            <i>);</i>        
          </XMP>
          <div>这个例子里面的<code>&#123;this.prop.title}</code>就代表了：从父组件传递过来的属性<code>title</code>。</div>
          <Result>
            <NoteTip title="Michale"/>
          </Result>             
        </Session>        
        <Session title="默认 Props">
          <div>你可以通过组件类的 <code>defaultProps</code> 属性为 <code>props</code> 设置默认值，实例如下：</div>         
          <XMP>
            <i>class NoteTip extends React.Component &#123;</i>
              <In>render()&#123;</In>
              <In><In>return( </In></In>
                <In><In><In>&lt;p className=<span className="code-string">"NoteTip"</span>>&#123;this.props.title}&lt;/p></In></In></In>
              <In><In>)</In></In>  
              <In>}</In>           
            <i>}</i>    
            <i/>
            <i>NoteTip.defaultProps = &#123;</i>
              <In>title: <span className="code-string">'Michale'</span></In>
            <i>};</i>
            <i/>
            <i>ReactDOM.render(</i>
              <In>&lt;NoteTip/>,</In>
              <In>document.getElementById(<span className="code-string">'example'</span>)</In>
            <i>);</i>
          </XMP>
          <div>在这个实例中，因为定义了<code>defaultProps</code>所以默认值为<code>'Michale'</code></div> 
          <Result>
            <NoteTip title="Michale"/>
          </Result>        
        </Session>
        <Session title="父子传参">
          <NoteTip>
            需要注意的一点是，为了保持可读性，一般把子组件里参数的名字设成跟父组件一样。
          </NoteTip> 
          <div>通过父组件给子组件传参数，实例更改如下：</div>         
          <XMP>
            <i>class Name extends React.Component &#123;</i>
              <In>render()&#123;</In>
                <In><In>return( </In></In>
                  <In><In><In>&lt;p className=<span className="code-string">"NoteTip"</span>>&#123;this.props.title}&lt;/p></In></In></In>
                <In><In>)</In></In>  
              <In>}</In>           
            <i>}</i>    
            <i/>
            <i>class NoteTip1 extends React.Component &#123;</i>
              <In>render()&#123;</In>
              <In><In>return( </In></In>
                <In><In><In>&lt;Name title= &#123;this.props.title}/></In></In></In>
              <In><In>)</In></In>  
              <In>}</In>           
            <i>}</i>           
            <i/>
            <i>ReactDOM.render(</i>
              <In>&lt;NoteTip1 title=<span className="code-string">'Michale'</span>/>,</In>
              <In>document.getElementById(<span className="code-string">'example'</span>)</In>
            <i>);</i>
          </XMP>
          <Result>
            <NoteTip1 title="Michale"/>
          </Result> 
          <NoteTip>
            如果想把父组件的属性全部传给子组件的话，可以直接用<code>this.props</code>把全部的属性传给子组件。
          </NoteTip>
        </Session>
      </Panel>
      )
  }
}
export default Props;
