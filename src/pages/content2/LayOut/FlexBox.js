import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Session from '../../../components/Session';
import In from '../../../components/Indent';
import XMP from '../../../components/XMP';
import NoteTip from '../../../components/NoteTip';
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
          <blockquote>
              <p>Flex容器属性包括:</p>
              <p>1.flex-direction</p>
              <p>2.flex-wrap</p>
              <p>3.flex-flow</p>
              <p>4.justify-content</p>
              <p>5.align-items</p>
              <p>6.align-content</p>
            </blockquote>
          <div>
            flex说起来也不难，只是属性要记的多些。首先，我们需要一个Flex容器(Flex Container)。要做到这点，只需要一个<code>display:flex</code>或者<code>display:inline-flex</code>，如果是块元素就用前者，是行内元素就用后者。
          </div>
          <div>
            为了看的更清楚，我们给li加了样式:
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
          <Session title="flex-direction">
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
          <Session title="flex-wrap">
            <div>flex-wrap有三个可选值<code>wrap || nowrap || wrap-reverse</code></div>
            <Session sub="true" title="nowrap">
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
            </Session>
            <Session sub="true" title="wrap">
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
            </Session>
            <Session sub="true" title="wrap-reverse">
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
          </Session>
          <Session title="flex-flow">
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
            <Session sub="true" title="flex-start">
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
              </Session>
              <Session sub="true" title="center">
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
              </Session>
              <Session sub="true" title="space-between">
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
              </Session>
              <Session sub="true" title="space-around">
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
                <div><code>space-around</code>跟<code>space-between</code>的区别就在于前者为第一个和最后一个在两边留了1/2间距的边距，其他div之间距离还是等间距排列的。</div>
              </Session>
          </Session>   
          <Session title="align-items">
            <div>那么刚刚我们讲的都是沿着主轴(一般水平)方向的flex排列也就是<code>justify-content</code>,当然也有沿着侧轴(一般垂直)方向的</div>
            <div><code>align-items</code>是规定侧轴方向排列的属性，他可以接收这些值:<code>flex-start || flex-end || center || stretch || baseline</code></div>
            <Session sub="true" title="stretch">
              <div>stretch属性就是使div沿着侧轴方向撑满,stretch是默认属性</div>
              <XMP>
                <i>align-items:stretch</i>
              </XMP>
              <Result>
                <ul className="FlexBoxs1">
                  <li style={{fontSize:10}}>我是第一段我是第一段我是第一段</li>
                  <li style={{fontSize:25}}>第二段</li>
                  <li style={{fontSize:20}}>我是第三段我是第三段</li>
                  <li style={{fontSize:15}}>我是第四段我是第四段我是第四段我是第四段</li>
                </ul>
              </Result>
            </Session>
            <Session sub="true" title="flex-start">
              <div>flex-start属性就是使div沿着侧轴开始边界对齐</div>
              <XMP>
                <i>align-items:flex-start</i>
              </XMP>
              <Result>
                <ul className="FlexBoxs2">
                  <li style={{fontSize:10}}>我是第一段我是第一段我是第一段</li>
                  <li style={{fontSize:25}}>第二段</li>
                  <li style={{fontSize:20}}>我是第三段我是第三段</li>
                  <li style={{fontSize:15}}>我是第四段我是第四段我是第四段我是第四段</li>
                </ul>
              </Result>
            </Session>
            <Session sub="true" title="flex-end">
              <div>flex-end就是把div沿着侧轴结束边界对齐</div>
              <XMP>
                <i>align-items:flex-end</i>
              </XMP>
              <Result>
                <ul className="FlexBoxs3">
                  <li style={{fontSize:10}}>我是第一段我是第一段我是第一段</li>
                  <li style={{fontSize:25}}>第二段</li>
                  <li style={{fontSize:20}}>我是第三段我是第三段</li>
                  <li style={{fontSize:15}}>我是第四段我是第四段我是第四段我是第四段</li>
                </ul>
              </Result>
            </Session>
            <Session sub="true" title="center">
              <div>center属性就是使div沿着侧轴方向居中</div>
              <XMP>
                <i>align-items:center</i>
              </XMP>
              <Result>
                <ul className="FlexBoxs4">
                  <li style={{fontSize:10}}>我是第一段我是第一段我是第一段</li>
                  <li style={{fontSize:25}}>第二段</li>
                  <li style={{fontSize:20}}>我是第三段我是第三段</li>
                  <li style={{fontSize:15}}>我是第四段我是第四段我是第四段我是第四段</li>
                </ul>
              </Result>
            </Session>
            <Session sub="true" title="baseline">
              <div>baseline属性呢，跟flex-start很像，但是有略微不同，他是沿着第一行文字的基线对齐的，如果文字大小一致，就跟flex-start效果等同。下图能让你更好理解:</div>
              <XMP>
                <i>align-items:baseline</i>
              </XMP>
              <Result>
                <ul className="FlexBoxs5">
                  <div className="baseline"></div>
                  <li style={{fontSize:10}}>我是第一段我是第一段我是第一段</li>
                  <li style={{fontSize:25}}>第二段</li>
                  <li style={{fontSize:20}}>我是第三段我是第三段</li>
                  <li style={{fontSize:15}}>我是第四段我是第四段我是第四段我是第四段</li>
                </ul>
              </Result>
            </Session>
          </Session>
          <Session title="align-content">
            <div>那么如果有多行的item呢<code>align-content</code>，可以对多行的元素起作用</div>
            <div><code>align-content</code>是规定多行的Flex容器侧轴方向排列的属性，他可以接收这些值:<code>flex-start || flex-end || center || stretch</code></div>
            <div>排列效果和align-content值一样，但除了没有baseline属性值。像align-items属性一样，它的默认值是stretch。你现在应该熟悉这些值。那它又是如何影响Flex容器里的10个Flex项目多行排列方式。</div>
            <Session sub="true" title="stretch">
              <div>stretch属性就是使div沿着侧轴方向撑满,stretch是默认属性</div>
              <XMP>
                <i>align-content:stretch</i>
              </XMP>
              <Result>
                <ul className="FlexBoxm1">
                  <li style={{fontSize:10}}>我是第一段我是第一段我是第一段</li>
                  <li style={{fontSize:25}}>第二段</li>
                  <li style={{fontSize:20}}>我是第三段我是第三段</li>
                  <li style={{fontSize:15}}>我是第四段我是第四段我是第四段我是第四段</li>
                  <li style={{fontSize:20}}>我是第三段我是第三段</li>
                  <li style={{fontSize:20}}>我是第三段我是第三段</li>
                  <li style={{fontSize:20}}>我是第三段我是第三段</li>
                  <li style={{fontSize:20}}>我是第三段我是第三段</li>
                  <li style={{fontSize:20}}>我是第三段我是第三段</li>
                  <li style={{fontSize:20}}>我是第三段我是第三段</li>
                </ul>
              </Result>
            </Session>
            <Session sub="true" title="flex-start">
              <div>flex-start属性就是使div沿着侧轴开始边界对齐</div>
              <XMP>
                <i>align-content:flex-start</i>
              </XMP>
              <Result>
                <ul className="FlexBoxm2">
                  <li style={{fontSize:10}}>我是第一段我是第一段我是第一段</li>
                  <li style={{fontSize:25}}>第二段</li>
                  <li style={{fontSize:20}}>我是第三段我是第三段</li>
                  <li style={{fontSize:15}}>我是第四段我是第四段我是第四段我是第四段</li>
                  <li style={{fontSize:20}}>我是第三段我是第三段</li>
                  <li style={{fontSize:20}}>我是第三段我是第三段</li>
                  <li style={{fontSize:20}}>我是第三段我是第三段</li>
                  <li style={{fontSize:20}}>我是第三段我是第三段</li>
                  <li style={{fontSize:20}}>我是第三段我是第三段</li>
                  <li style={{fontSize:20}}>我是第三段我是第三段</li>
                </ul>
              </Result>
            </Session>
            <Session sub="true" title="flex-end">
              <div>flex-end就是把div沿着侧轴结束边界对齐</div>
              <XMP>
                <i>align-content:flex-end</i>
              </XMP>
              <Result>
                <ul className="FlexBoxm3">
                  <li style={{fontSize:10}}>我是第一段我是第一段我是第一段</li>
                  <li style={{fontSize:25}}>第二段</li>
                  <li style={{fontSize:20}}>我是第三段我是第三段</li>
                  <li style={{fontSize:15}}>我是第四段我是第四段我是第四段我是第四段</li>
                  <li style={{fontSize:20}}>我是第三段我是第三段</li>
                  <li style={{fontSize:20}}>我是第三段我是第三段</li>
                  <li style={{fontSize:20}}>我是第三段我是第三段</li>
                  <li style={{fontSize:20}}>我是第三段我是第三段</li>
                  <li style={{fontSize:20}}>我是第三段我是第三段</li>
                  <li style={{fontSize:20}}>我是第三段我是第三段</li>
                </ul>
              </Result>
            </Session>
            <Session sub="true" title="center">
              <div>center属性就是使div沿着侧轴方向居中</div>
              <XMP>
                <i>align-content:center</i>
              </XMP>
              <Result>
                <ul className="FlexBoxm4">
                  <li style={{fontSize:10}}>我是第一段我是第一段我是第一段</li>
                  <li style={{fontSize:25}}>第二段</li>
                  <li style={{fontSize:20}}>我是第三段我是第三段</li>
                  <li style={{fontSize:15}}>我是第四段我是第四段我是第四段我是第四段</li>
                  <li style={{fontSize:20}}>我是第三段我是第三段</li>
                  <li style={{fontSize:20}}>我是第三段我是第三段</li>
                  <li style={{fontSize:20}}>我是第三段我是第三段</li>
                  <li style={{fontSize:20}}>我是第三段我是第三段</li>
                  <li style={{fontSize:20}}>我是第三段我是第三段</li>
                  <li style={{fontSize:20}}>我是第三段我是第三段</li>
                </ul>
              </Result>
            </Session>
            <Session title="Flex项目属性">
              <blockquote>
                <p>Flex项目属性包括:</p>
                <p>1.order</p>
                <p>2.flex-grow </p>
                <p>3.flex-shrink</p>
                <p>4.flex-basis</p>
                <p>5.flex</p>
                <p>6.align-self</p>
              </blockquote>
              <Session title="order" sub="true">
                <div>
                  允许Flex项目在一个Flex容器中重新排序。基本上，你可以改变Flex项目的顺序，从一个位置移动到另一个地方。
                  这不会影响源代码。这也意味着Flex项目的位置在HTML源代码中不需要改变。order属性的默认值是0。它可以接受一个正值，也可以接受一个负值。
                  值得注意的是，Flex项目会根据order值重新排序。从底到高。
                </div>
                <div>
                  如下面这个无序列表:
                </div>
                <XMP>
                  <i>&lt;ul></i>
                    <In><li>1</li></In>
                    <In><li>2</li></In>
                    <In><li>3</li></In>
                    <In><li>4</li></In>
                  <i>&lt;/ul></i>
                </XMP>
                <Result>
                  <ul className="FlexBox">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                  </ul>
                </Result>
                <div>因为都是<code>order:0</code>,Flex项目显示是按HTML源代码中的顺序来显示，Flex项目1、2、3和4。</div>
                <div>这时候，如果想让1到最后，那就给1的那个li一个order大于0的值就可以了:</div>
                <XMP>
                  <i>li:nth-child(1)&#123;</i>
                    <In>order:1;</In>
                  <i>}</i>
                </XMP>
                <Result>
                  <ul className="FlexBox10">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                  </ul>
                </Result>
                <div><code>order</code>就有点像以前的<code>z-index</code>属性，哪个order大哪个排后面。可以为负值</div>
                <div>当两个Flex项目具有相同的order值呢？在下面的示例中，把Flex项目1和3设置相同的order值。</div>
                <XMP>
                  <i>li:nth-child(1)&#123;</i>
                    <In>order:1;</In>
                  <i>}</i>
                  <i>li:nth-child(3)&#123;</i>
                    <In>order:1;</In>
                  <i>}</i>
                </XMP>
                <Result>
                  <ul className="FlexBox11">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                  </ul>
                </Result>
                <div>可以看到，这两个Flex项目先全部排到最后，再按HTML源代码中的顺序排列</div>
              </Session>
              <Session title="flex-grow" sub="true">
              <div>flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。</div>
                <XMP>
                  <i>.item &#123;</i>
                    <In>flex-grow: &lt;number>; /* default 0 */</In>
                  <i>}</i>
                </XMP>
                <Img src="flexgrow.png" alt="flexgrow"/>
                <div>如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。
                如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。</div>
              </Session>
              <Session title="flex-shrink" sub="true">
              <div>flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。</div>
                <XMP>
                  <i>.item &#123;</i>
                    <In>flex-shrink: &lt;number>; /* default 1 */</In>
                  <i>}</i>
                </XMP>
                <Img src="flexshrink.jpg" alt="flexgrow"/>
                <div>如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。
                  如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。</div>
                <NoteTip>负值对该属性无效。</NoteTip>
              </Session>
              <Session title="flex-basis" sub="true">
              <div>flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。
                浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。</div>
                <XMP>
                  <i>.item &#123;</i>
                    <In> flex-basis: &lt;length> | auto; /* default auto */</In>
                  <i>}</i>
                </XMP>
                <div>flex-basis默认的值是auto。flex-basis可以取任何用于width属性的任何值。比如 % || em || rem || px等。</div>
                <div>它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。</div>
                <NoteTip>如果flex-basis属性的值是0时，也需要使用单位。即flex-basis: 0px不能写成flex-basis:0。</NoteTip>
              </Session>
              <Session title="flex属性" sub="true">
              <div>flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。属性为<code>auto</code>时会自动地随着文本长度调整item长度</div>
                <XMP>
                  <i>.item &#123;</i>
                    <In> flex: none | [ &lt;'flex-grow'> &lt;'flex-shrink'>? || &lt;'flex-basis'> ]</In>
                  <i>}</i>
                </XMP>
                <div>该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。</div>
                <div>建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。</div>
              </Session>
              <Session title="align-self" sub="true">
              <div>align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，
                表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。</div>
                <XMP>
                  <i>.item &#123;</i>
                    <In>align-self: auto | flex-start | flex-end | center | baseline | stretch;</In>
                  <i>}</i>
                </XMP>
                <Img src="alignself.png" alt="alignself"/>
                <div>该属性可能取6个值，除了auto，其他都与align-items属性完全一致。</div>
              </Session>     
            </Session>
          </Session>
          <div><a href="https://www.w3cplus.com/css3/understanding-flexbox-everything-you-need-to-know.html" rel="noopener noreferrer" target="_blank">本文参考原文</a></div>
          <div><a href="http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html" rel="noopener noreferrer" target="_blank">阮一峰Flex教程</a></div>
        </Panel>
        )
    }
  }
export default FlexBox;
