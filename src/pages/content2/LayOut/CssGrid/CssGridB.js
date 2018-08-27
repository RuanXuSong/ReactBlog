import React, { Component } from 'react';
import Panel from '../../../../components/Panel';
import Session from '../../../../components/Session';
import CssGridCom from '../components/CssGridCom';
import In from '../../../../components/Indent';
import Result from '../../../../components/Result';
import NoteTip from '../../../../components/NoteTip';
import XMP from '../../../../components/XMP';
class CssGridB extends Component{
    
    render(){
      return(
        <Panel title="CssGrid">
          <Session title="简介">
          <dl>
            <dt>CSS Grid 布局是 Web 的第一个真正的布局系统。它的目的是将内容组织成行列的形式，最终使开发人员能高度控制我们眼前屏幕上页面的显示效果。</dt>
            <dd>CSS Grid 布局不仅仅可以使复杂的布局和精美的排版成为可能，而且还可以使其变的干净利落可维护。</dd>
            <dd>CSS Grid 没有替换 flexbox 属性，尽可能保留了它的功能。我们甚至可以将这些属性与 CSS Grid 混用。</dd>
            <dd>通过使用 CSS Grid，Web开发变得更加简洁且对开发者更加友好了</dd>
          </dl>                   
          </Session>
          <Session title="CssGrid基础">
            <blockquote>
              <p>CssGrid有以下基础属性：</p>
              <p>1.grid-template-columns</p>
              <p>2.grid-template-rows</p>
              <p>3.grid-column-gap</p>
              <p>4.grid-row-gap</p>
              <p>5.grid-gap</p>
            </blockquote>
            <div>
              先给大家看个整体效果:
              <Result>
                <CssGridCom gridMode='2'/>
              </Result>
            </div>
            <div>我们后面就要进行实际操作了，还是往常一样地先创建一个div，并且给他 align-items 和 justify-content 之类的 flexbox 属性将其居中，
              因为CSS Grid 没有替换 flexbox 属性,再给他一个display：grid;</div>
            <XMP>
              <i>.grid-wrap&#123;</i>
                <In>display: grid;</In>              
              <i>}</i>
              <i>.grid-div&#123;</i>
                 <In>display: flex;</In>
                 <In>justify-content: center;</In>
                 <In>align-items: center;</In>
                 <In>background: $blue;</In>
                 <In>color: $white;</In>
                 <In>padding: 20px;</In>
                 <In>font-size: 60px;</In>
                 <In>cursor: pointer;</In>
                <i>}</i>
            </XMP> 
            <Result>
              <div className="grid-wrap">
                <div className="grid-div">
                  A
                </div>
                <div className="grid-div">
                  B
                </div>
              </div>
            </Result>
            <div>
              现在你可能看到似乎没什么变化。为什么这样呢？这不像设置 display: inline-block; 或者 display: inline; ，当我们把布局设为网格布局不会发生很明显的变化。
              事实上，想让我们的 grid 起作用，首先还需要给它设置一个确切的行数和列数，在下面Session中我们会讲到。
            </div>

            <Session title="grid-template-columns" sub="true">
              <div>我们先给他一个列试试,设置<code>grid-template-columns</code></div>
              <XMP>
              <i>.grid-wrap&#123;</i>
                <In>grid-column-gap: 1px;</In>
                <In>grid-template-columns: 50px 50px;</In>              
              <i>}</i>
              </XMP>
              <Result>
                <div className="grid-wrap1">
                  <div className="grid-div">
                    A
                  </div>
                  <div className="grid-div">
                    B
                  </div>
                </div>
              </Result> 
              <div>对<code>grid-template-columns</code>这个属性指定的每个值可以创建每列的长度。事实上，列的长度可以是任何非负值，长度可以是px、%、em等长度单位的值</div>
            </Session>
            <Session title="grid-column-gap" sub="true">
              <div>不过又有人想问了，上面例子中那个<code>grid-column-gap</code>又是什么呢，其实这个是两列grid中间的间隔,因为背景是黑的，所以才会显示出来为黑色。<code>grid-column-gap</code>可以设置为长度任意单位,如px、%、em等。</div>
            </Session>  
            <Session title="grid-row-gap" sub="true">           
              <div>当然，有列就肯定有行，行间的间隔属性为<code>grid-row-gap</code>也可以设置为长度任意单位。</div>
            </Session>
            <Session title="grid-gap" sub="true">            
              <div><code>grid-gap</code>是<code>grid-column-gap</code>和<code>grid-row-gap</code>的混合写法，默认值为0。</div>
              <div>如果它指定了两个值，那么第一个值是设置grid-row-gap的值，第二个值设置grid-column-gap的值。如果只设置了一个值，表示行和列的间距相等，也就是说grid-row-gap和grid-column-gap的值相同</div>
            </Session>
            <Session title="grid-template-rows" sub="true">
              <div>我们先给他可以试着再给他来个行,设置<code>grid-template-rows</code></div>
              <div>grid-template-rows指定的每个值可以创建每行的高度。行的取值跟列类型一样。</div>
              <XMP>
              <i>.grid-wrap&#123;</i>
                <In>grid-column-gap: 1px;</In>
                <In>grid-row-gap: 1px;</In>
                <In>grid-template-columns: 50px 50px;</In> 
                <In>grid-template-rows: 60px 60px;</In>              
              <i>}</i>
              </XMP>
              <Result>
                <div className="grid-wrap2">
                  <div className="grid-div">
                    A
                  </div>
                  <div className="grid-div">
                    B
                  </div>
                  <div className="grid-div">
                    C
                  </div>
                  <div className="grid-div">
                    D
                  </div>
                </div>
              </Result> 
              <div>可以看到，我们的行分成了两行，并且都是60px一行的，网格大小不会因为元素的padding，margin而改变,并且显示出来了行间间隙。</div>
              <NoteTip>如果强行设置过大的margin或padding，会导致网格间元素重叠，这要注意。</NoteTip>
            </Session>
            <Session title="fr" sub="true">
              <div>上面的例子已经有点溢出来了，为了更好看一些，我们其实可以用fr单位来按比例自动让网格排列</div>
              <div>比如给<code>grid-template-rows</code>和<code>grid-template-columns</code>都来一个<code>1fr 1fr</code>试试</div>
              <XMP>
              <i>.grid-wrap&#123;</i>
                <In>grid-column-gap: 1px;</In>
                <In>grid-row-gap: 1px;</In>
                <In>grid-template-rows: 1fr 1fr;</In>    
                <In>grid-template-columns: 1fr 1fr;</In>          
              <i>}</i>
              </XMP>
              <Result>
                <div className="grid-wrap3">
                  <div className="grid-div">
                    A
                  </div>
                  <div className="grid-div">
                    B
                  </div>
                  <div className="grid-div">
                    C
                  </div>
                  <div className="grid-div">
                    D
                  </div>
                </div>
              </Result> 
              <div>可以看到，我们的行分成了两行，行高会随着元素的变化而自适应变化，以每行内最大的元素为参考。</div>
              <div>既然是按比例，那么，你们也想到了，改变比例就会出现不一样的布局:</div>
              <XMP>
              <i>.grid-wrap&#123;</i>
                <In>grid-column-gap: 1px;</In>
                <In>grid-row-gap: 1px;</In>
                <In>grid-template-columns:1fr 3fr 1fr;</In>  
                <In>grid-template-rows: 1fr 3fr;</In>              
              <i>}</i>
              </XMP>
              <Result>
                <div className="grid-wrap4">
                  <div className="grid-div">
                    A
                  </div>
                  <div className="grid-div">
                    B
                  </div>
                  <div className="grid-div">
                    C
                  </div>
                  <div className="grid-div">
                    D
                  </div>
                  <div className="grid-div">
                    E
                  </div>
                  <div className="grid-div">
                    F
                  </div>
                </div>
              </Result> 
              <div>上面例子中，浏览器先把列分为1+3+1=5，5等分再按比例分配，再把行分为1+3=4,4等分再按比例分配。grid布局就这样出来了</div>
              <div>这就能很轻松地做出一个常见的模板布局,以上就是CssGrid基础教程。</div>
              <NoteTip>当fr和其它长度单位的值结合在一起的时候，fr是基于网格容器可用空间来计算的。</NoteTip>
            </Session>
          </Session> 
          <a href="https://zhuanlan.zhihu.com/p/26757425?group_id=844328463711240192" rel="noopener noreferrer" target="_blank">原文出处</a>
        </Panel>
        )
    }
  }
export default CssGridB;
