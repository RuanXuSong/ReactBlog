import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Session from '../../../components/Session';
import XMP from '../../../components/XMP';
import Result from '../../../components/Result';
import In from '../../../components/Indent';

class Result0 extends Component{
  render(){
    return(
      <h1>Hello, world!</h1>
    )         
  }
}

class Result1 extends Component{
    render(){
    var child1 = React.createElement('li', null, 'First Text Content');
    var child2 = React.createElement('li', null, 'Second Text Content');
    var root = React.createElement('ul', { className: 'my-list' }, child1, child2);
    return(
      root
    )
  }
}

class Result2 extends Component{
  render(){
    return(
      <h1>{1+1}</h1>
    )         
  }
}

class Result3 extends Component{
  render(){
    let i=1;
    return(
      <h1>{i === 1 ? 'True!' : 'False'}</h1>
    )         
  }
}

class Result4 extends Component{
  render(){
    var myStyle = {
      fontSize: 50,
      color: '#FF0000'
    };
    return(
      <h1 style = {myStyle}>内联样式</h1>
    )         
  }
}

class Result5 extends Component{
  render(){
  return(
      <ul className="my-list">
        <li>First Text Content</li>
        <li>Second Text Content</li>
      </ul>
    )                
  }
}

class JSX extends Component{
    render(){
      return(
        <Panel title="React JSX">
          <Session title="JSX是什么">
            <dl>
              <dd>React 使用 JSX 来替代常规的 JavaScript。</dd>
              <dd>JSX 是一个看起来很像 XML 的 JavaScript 语法扩展,是Javascript和XML结合的一种格式。</dd>
              <dd>JSX是一种基于ECMAcript的一种新特性，一种带属性的树结构的语法。</dd>
              <dd>React发明了JSX，利用HTML语法来创建虚拟DOM。当遇到 <code>&lt;</code> ，JSX就当HTML解析，遇到 <code>&#123;</code> 就当JavaScript解析。</dd>
            </dl>
          </Session>
          <Session title="JSX优点">
            <dl>
              <dt>我们不需要一定使用 JSX，但它有以下优点：</dt>
              <dd>它是类型安全的，在编译过程中就能发现错误。</dd>
              <dd>JSX以干净且简洁的方式保证了组件中的标签与所有业务逻辑的互相分离。</dd>
              <dd>关注点分离,模块化，JSX 执行更快，因为它在编译为 JavaScript 代码后进行了优化。</dd>
              <dd>使用 JSX 编写模板更加简单快速。</dd>
            </dl>
          </Session>
          <Session title="使用JSX">    
            <div>JSX 看起来类似 XML ，我们可以看下实例:</div>
            <XMP>
                <i>render(</i>
                  <In>&lt;h1>Hello, world!&lt;/h1>,</In>
                  <In>document.getElementById(<span className="code-string">'example'</span>)</In>
                <i>);</i>
            </XMP>
            <Result>
              <Result0/>
            </Result>
            <div>前面提到过，在React中如果用JS写法也是可以的，如下：</div>
            <XMP>
              <i>var child1 = React.createElement(<span className="code-string">'li'</span>, null, <span className="code-string">'First Text Content'</span>);</i>
              <i>var child2 = React.createElement(<span className="code-string">'li'</span>, null, <span className="code-string">'Second Text Content'</span>);</i>
              <i>var root = React.createElement(<span className="code-string">'ul'</span>, &#123; className: <span className="code-string">'my-list'</span> }, child1, child2);</i>
            </XMP>
            <Result>
              <Result1/>
            </Result>
            <div>上面的代码就等价于:</div>
            <XMP>
              <i>var root =(</i>
                <In>&lt;ul className=<span className="code-string">"my-list"</span>></In>
                <In><In>&lt;li>First Text Content&lt;/li></In></In>
                <In><In>&lt;li>Second Text Content&lt;/li></In></In>
                <In>&lt;/ul></In>
              <i>);</i>
            </XMP>
            <Result>
              <Result5/>
            </Result>
            <div>后者将XML语法直接加入JS中,通过代码而非模板来高效的定义界面。之后JSX通过翻译器转换为纯JS再由浏览器执行。在实际开发中，JSX在产品打包阶段都已经编译成纯JavaScript，JSX的语法不会带来任何性能影响。另外，由于JSX只是一种语法，因此JavaScript的关键字<code>class</code>, <code>for</code>等也不能出现在XML中，
              而要如例子中所示，使用<code>className</code>, <code>htmlFor</code>代替，这和原生DOM在JavaScript中的创建也是一致的。JSX只是创建虚拟DOM的一种语法格式而已,除了用JSX,我们也可以用JS代码来创建虚拟DOM.</div>
          </Session>
          <Session title="独立文件">
            <div>你的 React JSX 代码可以放在一个独立文件上，例如我们创建一个 helloworld_react.js 文件，代码如下：</div>
            <XMP>
                <i>render(</i>
                  <In>&lt;h1>Hello, world!&lt;/h1>,</In>
                  <In>document.getElementById(<span className="code-string">'example'</span>)</In>
                <i>);</i>
            </XMP>
            <div>然后在 HTML 文件中引入该 JS 文件：</div>
            <XMP>
              <i>&lt;body></i>
                <In>&lt;div id=<span className="code-string">"example"</span>>&lt;/div></In>
              <In>&lt;script type=<span className="code-string">"text/babel"</span> src=<span className="code-string">"helloworld_react.js"</span>>&lt;/script></In>
              <i>&lt;/body></i>
            </XMP>
            <Result>
              <Result1/>
            </Result>
          </Session>
          <Session title="JavaScript 表达式">
            <div>我们可以在 JSX 中使用 JavaScript 表达式。表达式写在花括号 <code>&#123;}</code> 中。实例如下：</div>
            <XMP>
              <i>ReactDOM.render(</i>
                  <In>&lt;div></In>
                    <In><In>&lt;h1>&#123;<span className="Number">1</span>+<span className="Number">1</span>}&lt;/h1></In></In>
                  <In>&lt;/div></In>
                  <In>,</In>
                  <In>document.getElementById(<span className="code-string">'example'</span>)</In>
                <i>);</i>
            </XMP>  
            <Result>
              <Result2/>
            </Result>
            <div>在 JSX 中不能使用 <code>if else</code> 语句，但可以使用 conditional (三元运算) 表达式来替代。以下实例中如果变量 <code>i</code> 等于 1 浏览器将输出 <code>true</code>, 如果修改 <code>i</code> 的值，则会输出 <code>false</code>.</div>
            <XMP>
              <i>ReactDOM.render(</i>
                  <In>&lt;div></In>
                  <In><In>&lt;h1>&#123;i === <span className="Number">1</span> ? <span className="code-string">'True!'</span> : <span className="code-string">'False'</span>}&lt;/h1></In></In>
                  <In>&lt;/div></In>
                  <In>,</In>
                  <In>document.getElementById(<span className="code-string">'example'</span>)</In>
                <i>);</i>
            </XMP>
            <Result>
              <Result3/>
            </Result>
            <div className="session-head">在JSX中使用<code>...</code>操作符</div>
            <div><code>...</code>操作符是ES6新语法，JSX使用了它的特点，但并不是真正的ES6语法。其作用是把对象中的各个属性展开</div>
            <XMP>
              <i>var props = &#123;</i>
              <i>props.foo = x;</i>
              <i>props.bar = y;</i>
              <i>}</i>
              <i>var component = &lt;Component &#123;...props} />;</i>
            </XMP>
            <div>相当于</div>
            <XMP>
              <i>var component = &lt;Component foo=&#123;props.foo} bar=&#123;props.bar} />;</i>             
            </XMP>
            <div>如果override(重复定义)，该怎么做呢？也很简单：</div>
            <XMP>
              <i>var component = &lt;Component &#123;...props} foo=<span className="code-string">"override"</span>/>;</i>
              <i>console.log(this.props.foo) //输出 override</i>
            </XMP>
          </Session>     
          <Session title="样式">
            <div>React 推荐使用内联样式。我们可以使用 camelCase（驼峰） 语法来设置内联样式. React 会在指定元素数字后自动添加 <code>px</code> 。以下实例演示了为 <code>h1</code> 元素添加 <code>myStyle</code> 内联样式：</div>
            <XMP>
              <i>var myStyle = &#123;</i>
                <In>fontSize: <span className="Number">50</span>,</In>
                <In>color: <span className="code-string">'#FF0000'</span></In>
              <i>};</i>
              <i>ReactDOM.render(</i>
                <In>&lt;h1 style = &#123;myStyle}>内联样式&lt;/h1>,</In>
              <i>document.getElementById(<span className="code-string">'example'</span>)</i>
              <i>);</i>
            </XMP>    
            <Result>
              <Result4/>
            </Result>         
          </Session>  
          <Session title="用 JSX 指定属性值">
              <div>你可以使用双引号来指定字符串字面量作为属性值：</div>
              <XMP>
                <i>const element = &lt;div tabIndex="<span className="Number">0</span>">&lt;/div>;</i>
              </XMP>
              <div>您也可以用花括号嵌入一个 JavaScript 表达式作为属性值:</div>
              <XMP>
                <i>const element = &lt;img src=&#123;user.avatarUrl}/>;</i>
              </XMP>
          </Session>              
        </Panel>
        )
    }
  }
export default JSX;
