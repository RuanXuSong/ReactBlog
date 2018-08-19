import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Session from '../../../components/Session';
import Result from '../../../components/Result';
import NoteTip from '../../../components/NoteTip';
import XMP from '../../../components/XMP';
import In from '../../../components/Indent';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleTimeString(),
      timer:''
    };
  }
  render() {
    return (
      <div>
        <h2>现在是 {this.state.date}.</h2>
      </div>
    );
  }
}

class Clock1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleTimeString(),
    };
  }
  componentDidMount(){
  	this.timer=setInterval(()=>
		{this.setState(
      {
        date: new Date().toLocaleTimeString()
      }
    )
  }
	,1000)
}
  componentWillUnmount(){
    clearInterval(this.timer);
  }
  render() {
    return (
      <div>
        <h2>现在是 {this.state.date}.</h2>
      </div>
    );
  }
}
class State extends Component{
  render(){
    return(
      <Panel title="State(状态)">
        <Session title="Component">
          <dl>
            <dd>React 把组件看成是一个状态机（State Machines）。通过与用户的交互，实现不同状态，然后渲染 UI，让用户界面和数据保持一致。</dd>
            <dd>React 里，只需更新组件的 <code>state</code>，然后浏览器就会自动根据新的 <code>state</code> 重新渲染用户界面（不要操作 DOM）。</dd>
            <dd>注意：添加一个类构造函数来初始化状态 <code>this.state</code>，类组件应始终使用 <code>props</code> 调用基础构造函数。</dd>
          </dl>
          <div>以下实例创建一个名称扩展为<code>Component</code> 的 ES6 类，在 <code>render()</code> 方法中使用 <code>this.state</code> 来修改当前的时间。</div>
          <NoteTip><code>state</code>不可通过外部访问和修改，在组件内部修改</NoteTip>
          <XMP>
          <i>class Clock extends React.Component &#123;</i>
            <In>constructor(props) &#123;</In>
            <In><In>super(props);</In></In>
            <In><In>this.state = &#123;</In></In>
            <In><In><In>date: new Date().toLocaleTimeString(),</In></In></In>
            <In><In>};</In></In>
            <In>}</In>          
            <In>render() &#123;</In>
            <In><In>return (</In></In>
              <In><In>&lt;div></In></In>
              <In><In><In>&lt;h2>现在是 &#123;this.state.date}.&lt;/h2></In></In></In>
              <In><In>&lt;/div></In></In>
              <In>);</In>
              <In>}</In>
            <i>}</i>              
          </XMP>
          <Result>
              <Clock/>
          </Result>   
          <NoteTip>上面例子中出现的<code>super(props)</code>是用来获得父类值，相当于子类调用父类构造器，必须要用<code>super(props)</code>不然取不到this的属性</NoteTip>
          <div>但是大家看到，时间并没有动起来，接下来，我们让他每秒钟更新一次。</div>
          <XMP>
          <i>class Clock extends React.Component &#123;</i>
            <In>constructor(props) &#123;</In>
            <In><In>super(props);</In></In>
            <In><In>this.state = &#123;</In></In>
            <In><In><In>date: new Date().toLocaleTimeString(),</In></In></In>
            <In><In>};</In></In>
            <In>}</In>
            <In>componentDidMount()&#123;</In>
            <In><In>this.timer=setInterval(()=></In></In>
            <In><In>&#123;this.setState(&#123;</In></In>
            <In><In><In>date: new Date().toLocaleTimeString()</In></In></In>
            <In><In>})</In></In>          
            <In>}</In>
            <In>,<span className="Number">1000</span>)}</In>
            <i/>
            <In>componentWillUnmount()&#123;</In>
            <In><In>if(this.timer!=null)&#123;</In></In>
            <In><In><In>clearInterval(this.timer);</In></In></In>
            <In><In>}</In></In>
            <In>}</In>
            <In>render() &#123;</In>
            <In><In>return (</In></In>
              <In><In>&lt;div></In></In>
              <In><In><In>&lt;h2>现在是 &#123;this.state.date}.&lt;/h2></In></In></In>
              <In><In>&lt;/div></In></In>
              <In>);</In>
              <In>}</In>
            <i>}</i>              
          </XMP>
          <Result>
              <Clock1/>
          </Result>
          <div>React DOM 会将元素及其子元素与之前版本逐一对比, 并只对有必要更新的 DOM 进行更新, 以达到 DOM 所需的状态。
            即使我们我们每隔 1 秒都重建了整个元素, 但实际上 React DOM 只更新了修改过的文本节点.</div>
          <div>在上面例子中，大家可以看到 <code>componentDidMount()</code>(组件完成挂载的时候调用)
            和<code>componentWillUnmount()</code>(组件在dom中移除的时候调用)这两个是生命周期钩子，后面会详细讲到</div>
          </Session>
      </Panel>
      )
  }
}
export default State;
