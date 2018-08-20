import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Session from '../../../components/Session';
import In from '../../../components/Indent';
import XMP from '../../../components/XMP';
import Result from '../../../components/Result';
import Img from '../../../components/Img'; 
import './index.scss';
class FlexBox extends Component{
    render(){
      return(
        <Panel title="FlexBox布局">
          <Session title="简介">
          <div>
            FlexBox是现代Web布局的主流方式之一,它也成为一个新的W3C标准规范。flex将取代float和display:table的时代。
          </div>       
          </Session>
          <Session title="开始使用flex">
          <div>
            flex说起来也不难，只是属性要记的多些。首先，我们需要一个Flex容器(Flex Container)。要做到这点，只需要一个<code>display:flex</code>或者<code>display:inline-flex</code>
          </div>
          <div>
            为了看的更清楚，我们给li加了样式
          </div>
          <XMP>
            <i>.FlexBox&#123;</i>
            <In>display: flex;</In>
            <In>color: #fff;</In>
            <In>border:1px solid blue;</In>
            <i>}</i>
            <i>.FlexBox li&#123;</i>
            <In>width: 100px;</In>
            <In>height: 100px;</In>
            <In>background: red;</In>
            <In>margin: 8px;</In>
            <i>}</i>
            <i>&lt;ul className=<span className="code-string">"FlexBox"</span>></i>
              <In><li>1</li></In>
              <In><li>2</li></In>
              <In><li>3</li></In>
            <i>&lt;/ul></i>
          </XMP>
          <Result>
            <ul className="FlexBox">
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </Result>
          <div>我们可以看到，li居然并排排列了，这是本来在float才会看到的结果。这就是flex的体现，加了<code>display:flex</code>以后，ul已经成为了一个flexbox,其子元素li就会成为flex的一个项目。这只是小试牛刀</div>
          </Session>         
          <Session className="flex-direction">
            <div>既然flex可以横着排列，那么当然flex应该也可以竖着排列，<code>flex-direction</code>就是你想要的。这个属性让你决定Flex项目如何排列。它可以是行（水平）、列（垂直）或者行和列的反向。
            从技术上讲，水平和垂直在Flex世界中不是什么方向（概念）。它们常常被称为主轴（Main-Axis）和侧轴（Cross-Axis）。主轴从左往右，侧轴从上往下。默认设置如下所示。</div>
            <Img src="zhou1.jpg" alt="flex轴"/>
            <div>于是我们对<code>.FlexBox</code>再加一条属性:</div>
            <XMP>
              <i>flex-direction:column;</i>
            </XMP>
            <Result>
              <ul className="FlexBox1">
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </Result>
            <div>可以看到，li的方向变成了竖排排列，并且从上往下排，flex-direction属性的值默认是row，从左往右排。</div>
            <div>不过这里有个坑，等一下会提到</div>
          </Session>
          <Session className="flex-wrap">
            <div>flex-wrap有三个可选值<code>wrap || nowrap || wrap-reverse</code></div>
            <div>flex-wrap属性的默认值是nowrap,这个属性跟white-space很像，既然是nowrap，那就是不换行。</div>
            <div>下面来一个实例,当li的数量很多的时候:</div>
            <XMP>
              <i>flex-wrap:nowrap;</i>
              <i>&lt;ul className="FlexBox"></i>
                <In><li>1</li></In>
                <In><li>2</li></In>
                <In><li>3</li></In>
                <In><li>4</li></In>
                <In><li>5</li></In>
                <In><li>6</li></In>
                <In><li>7</li></In>
                <In><li>8</li></In>
                <In><li>9</li></In>
              <i>&lt;/ul></i>
            </XMP>
            <Result>
              <ul className="FlexBox2">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
              </ul>
            </Result>
            <div>事实上，就算有再多的li也不会换行，而是会把li“挤扁”以适应父容器的大小。</div>
            <div>那么很明显，flex-wrap如果是wrap那就是换行咯。下面是实例:</div>
            <XMP>
              <i>flex-wrap:wrap;</i>
              <i>&lt;ul className="FlexBox"></i>
                <In><li>1</li></In>
                <In><li>2</li></In>
                <In><li>3</li></In>
                <In><li>4</li></In>
                <In><li>5</li></In>
                <In><li>6</li></In>
                <In><li>7</li></In>
                <In><li>8</li></In>
                <In><li>9</li></In>
              <i>&lt;/ul></i>
            </XMP>
            <Result>
              <ul className="FlexBox3">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
              </ul>
            </Result>
            <div>确实，意料之中，最后一个li换行了.</div>
            <div>字面上理解wrap-reverse，当然是反着排列了，我们试试效果:</div>
            <XMP>
              <i>flex-wrap:wrap;</i>
              <i>&lt;ul className="FlexBox"></i>
                <In><li>1</li></In>
                <In><li>2</li></In>
                <In><li>3</li></In>
                <In><li>4</li></In>
                <In><li>5</li></In>
                <In><li>6</li></In>
                <In><li>7</li></In>
                <In><li>8</li></In>
                <In><li>9</li></In>
              <i>&lt;/ul></i>
            </XMP>
            <Result>
              <ul className="FlexBox4">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
              </ul>
            </Result>
            <div>可以看到，li是按照最下面那行沿着正方向往右排列的，如果溢出就往上再从最左边开始排列,虽然不一定有用，但是很神奇。</div>
          </Session>
          <Session className="flex-flow">
            <div>给上面两个<code>flex-direction</code>和<code>flex-wrap</code>来个"融合"怎么样呢。</div>
            <div>那就是<code>flex-flow</code>了，这是一个混合属性，可以同时描述<code>flex-direction</code>和<code>flex-wrap</code></div>
            <div>书写规则是先写<code>flex-direction</code>再写<code>flex-wrap</code>,就像这样:</div>
            <XMP>
              <i>flex-flow:row nowrap;</i>
            </XMP>
            <div>当然除了这个还有其他组合，你都可以试一下，有不同的效果</div>    
          </Session>
          <Session title="justify-content">
            <div>
              还记得<code>text-align:center</code>吗，可以使div中的行间元素居中。那么<code>justify-content</code>绝对是他的升级版。
            </div>
            <div>
              <code>justify-content</code>可以取这些值<code>flex-start || flex-end || center || space-between || space-around</code>
              控制主轴上flex项目的排列规律。
            </div>
            <div>接下来我们将一个个演示：</div>
            <div>首先是<code>flex-start</code></div>
            <XMP>
              <i>justify-content:flex-start</i>
            </XMP>
            <Result>
              <ul className="FlexBox5">
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </Result>
            <div>显而易见，<code>flex-start</code>可以让元素靠左排列，并且对齐父容器主轴左边线。</div>
            <div>接下来是<code>flex-end</code></div>
            <XMP>
              <i>justify-content:flex-end</i>
            </XMP>
            <Result>
              <ul className="FlexBox6">
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </Result>
            <div><code>flex-end</code>可以让元素靠右排列，并且对齐父容器主轴右边线。</div>
            <div>接下来是<code>center</code></div>
            <XMP>
              <i>justify-content:center</i>
            </XMP>
            <Result>
              <ul className="FlexBox7">
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </Result>
            <div><code>center</code>可以让flex项目以主轴居中。</div>
            <div>接下来是<code>space-between</code>,为了看的更清楚，我多加了一个li</div>
            <XMP>
              <i>justify-content:space-between</i>
            </XMP>
            <Result>
              <ul className="FlexBox8">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
              </ul>
            </Result>
            <div><code>space-between</code>让所有div之间距离为<code>auto</code>，等间距排列。</div>
            <div>最后一个是<code>space-around</code></div>
            <XMP>
              <i>justify-content:space-around</i>
            </XMP>
            <Result>
              <ul className="FlexBox9">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
              </ul>
            </Result>
            <div><code>space-around</code>让所有div之间距离为<code>auto</code>，等间距排列。</div>
          </Session>   
        </Panel>
        )
    }
  }
export default FlexBox;
