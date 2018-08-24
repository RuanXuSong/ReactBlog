import React, { Component } from 'react';
import Panel from '../../../../components/Panel';
import Session from '../../../../components/Session';
import Img from '../../../../components/Img';
import CssGridCom from './CssGridCom';
import Result from '../../../../components/Result';
import XMP from '../../../../components/XMP';
import NoteTip from '../../../../components/NoteTip';
class CssGridH extends Component{
    
    handleChangeColumns(value){
      this.setState({
        columns:value
      })
    }
    handleChangeRows(value){
      this.setState({
        rows:value
      })
    }
    render(){
      
      return(
        <Panel title="CssGrid">
          <Session title="CssGrid进阶">
            <blockquote>
              <p>CssGrid有以下进阶属性：</p>
              <p>1.minmax()</p>
              <p>2.repeat()</p>
              <p>3.网格线</p>
              <p>4.grid-area</p>
              <p>5.网格线命名</p>
              <p>6.网格区域命名</p>
              <p>7.对齐</p>
              <p>8.隐式网格</p>
            </blockquote>
            <div>
              还是按习惯先给大家看个整体效果:
              <Result>
                <CssGridCom gridMode="4"/>
              </Result>
            </div>
            <Session title="minmax()" sub="true">
              <div>
                可以通过minmax()函数来创建网格轨道的最小或最大尺寸。minmax()函数接受两个参数：第一个参数定义网格轨道的最小值，
                第二个参数定义网格轨道的最大值。可以接受任何长度值，也接受auto值。auto值允许网格轨道基于内容的尺寸拉伸或挤压
              </div>
              <XMP>
                <i>grid-template-rows: minmax(100px, auto);</i>
                <i>grid-template-columns: minmax(auto, 50%) 1fr 3em; </i>
              </XMP>
              <div>在这个示例中，第一行的高度最小值是100px，但其最大值为auto，允许行的高度可以变大超过100px。
                第一列设置了最小值为auto，但它的最大值是50%，也就是列的最大宽度不会超过网格容器宽度的50%。</div>
                <Result>
                  <CssGridCom gridMode="1"/>
                </Result>
            </Session>
           
            <Session title="repeat()" sub="true">
              <div>　使用repeat()可以创建重复的网格轨道。这个适用于创建相等尺寸的网格项目和多个网格项目。
                repeat()接受两个参数：第一个参数定义网格轨道应该重复的次数，第二个参数定义每个轨道的尺寸。</div>
                <XMP>
                  <i>grid-template-rows: repeat(3, 1fr);</i>         
                  <i>grid-template-columns: 30px repeat(3, 1fr) 30px;</i>
                </XMP> 
                <Result>
                  <CssGridCom gridMode="1"/>
                </Result>
              <div>
              在这个示例中，第一列和最后一列的宽度都是30px，并且它们之间有另列三列，这三列是通过repeat()来创建的，而且每列的列宽是1fr（1fr = (网格宽度 - 30px - 30px) / 3）
              </div>
            </Session>

            <Session title="网格项目" sub="true">
              <blockquote>
                <p>网格线：</p>
                <p>1.grid-row-start</p>
                <p>2.grid-row-end</p>
                <p>3.grid-column-start</p>
                <p>4.grid-column-end</p>
              </blockquote>
              <div>默认值为auto。通过网格线可以定位网格项目。网格线实际上是代表线的开始、结束，两者之间就是网格列或行。每条线是从网格轨道开始，网格的网格线从1开始，每条网格线逐步增加1。</div>
              <XMP>
                <i>grid-row-start: 2;</i>
                <i>grid-row-end: 3; </i>
                <i>grid-column-start: 2;</i>
                <i>grid-column-end: 3;</i>    
              </XMP>
              <div>两列三行的网格创建三条列网格线和四条行网格线。项目A就是由行和列的号码重新定位。如果一个网格项目跨度只有一行或一列，那么grid-row-end和grid-column-end不是必需的</div>
              <Result>
                <CssGridCom gridMode="3"/>
              </Result> 
              </Session>
              <Session title="网格线缩写" sub="true">
                <blockquote>
                  <p>网格线：</p>
                  <p>1.grid-row</p>
                  <p>2.grid-column</p>
                </blockquote>
                <XMP>
                  <i>grid-row: 2;</i>
                  <i>grid-column: 3 / 4;</i>
                </XMP>
                <div>默认值为auto</div>
                <div>grid-row是grid-row-start和grid-row-end的简写。grid-column是grid-column-start和grid-column-end的简写。如果只提供一个值，则指定了grid-row-start(grid-column-start)值；如果提供两个值，
                  第一个值是grid-row-start(grid-column-start)的值，第二个值是grid-row-end(grid-column-end)的值，两者之间必须要用/隔开
                </div>
                <b>span</b>
                <div>关键词span后面紧随数字，表示合并多少个列或行</div>
                <XMP>
                  <i>grid-row: 1 / span 3;</i>
                  <i>grid-column: span 2;</i>
                </XMP>
                <Result>
                  <CssGridCom gridMode="4"/>
                </Result> 
              </Session>
              <Session title="网格线命名" sub="true">
                <div>
                  通过grid-template-rows和grid-template-columns定义网格时，网格线可以被命名。网格线名称也可以设置网格项目位置
                </div>
                <div>
                  分配网格线名称必须用方括号[网格线名称]，然后后面紧跟网格轨道的尺寸值。定义网格线名称时需要避免使用规范中出现的关键词，以免导致混乱。
                </div>
                <XMP>
                  <i>grid-template-rows: [row-1-start] 1fr [row-2-start] 1fr [row-2-end];</i>
                  <i>grid-template-columns: [col-1-start] 1fr [col-2-start] 1fr [col-3-start] 1fr [col-3-end];</i>
                </XMP>
                <Img src="colname.png" alt="colname"/> 
                <XMP>
                  <i>grid-template-rows: [row-start row-1-start] 1fr [row-1-end row-2-start] 1fr [row-2-end row-end]; </i>
                  <i>grid-template-columns: [col-start] 1fr [col-2-start] 1fr [col-3-start] 1fr [col-end];</i>
                </XMP>
                <Img src="rowname.png" alt="rowname"/> 
                <div>使用网格线名称设置网格项目位置和使用网格线号码设置网格项目位置类似，引用网格线名称的时候不应该带方括号</div>
                <Result>
                  <CssGridCom gridMode="0"/>
                </Result> 
                <div>使用repeat()函数可以给网格线分配相同的名称。这可以节省一定的时间。</div>
                  <XMP>
                    <i>grid-template-rows: repeat(3, [row-start] 1fr [row-end]);</i>
                    <i>grid-template-columns: repeat(3, [col-start] 1fr [col-end]);</i>
                  </XMP>
                <div>使用相同的网格线名称可以设置网格项目的位置。网格线的名称和数字之间需要用空格分开,如果用相同的名字命名，系统会自动按顺序加数字</div>
                <XMP>
                  <i>grid-row: row-start 2 / row-end 3;</i>
                  <i>grid-column: col-start / col-start 3;</i>
                </XMP>
                <Result>
                  <CssGridCom gridMode="0"/>
                </Result>
              </Session> 
              <Session title="网格区域命名" sub="true">
                <div>
                  像网格线名称一样，网格区域的名称可以使用grid-template-areas属性来命名。引用网格区域名称也可以设置网格项目位置
                </div>
                <XMP>
                  <i>grid-template-areas:   "header header"   "content sidebar"    "footer footer";</i>
                  <i>grid-template-rows:    150px 1fr 100px;</i>
                  <i>grid-template-columns: 1fr 200px;</i>
                </XMP>
                <div>
                  <code>grid-area</code>不一定用网格线，也可以用网格区域的名称代替。
                </div>
                <NoteTip>[注意]:这里的grid-template-areas不能简写，比如 "header header"不可简写为"header"</NoteTip>
                <Result>
                  <CssGridCom gridMode="5"/>
                </Result> 
                <div>这样就可以像填拼图一样，把div一个个填进grid的area区域中。</div>
              </Session>  
              <Session title="隐式网格" sub="true">
                <b>grid-auto-flow</b>
                <div>网格默认流方向是row，可以通过grid-auto-flow属性把网格流的方向改变成column</div>
                <XMP>
                  <i>grid-auto-flow: column</i>
                </XMP>
              </Session>
              <Result>
                  <CssGridCom gridMode="6"/>
                </Result>
           </Session>
           
        </Panel>
        )
    }
  }
export default CssGridH;
