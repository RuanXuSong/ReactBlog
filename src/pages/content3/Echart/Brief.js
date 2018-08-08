import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Session from '../../../components/Session';
  class EchartBrief extends Component{
    render(){
      return(
        <Panel title="Echarts简介">
          <Session title="Echarts特性">
          <div>ECharts，一个使用 JavaScript 实现的开源可视化库，可以流畅的运行在 PC 和移动设备上，
            兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari等），
            底层依赖轻量级的矢量图形库 ZRender，提供直观，交互丰富，可高度个性化定制的数据可视化图表。</div>
          </Session>
      
          <Session title="丰富的可视化类型">
            <dl>
              <dt>实际上有多种编译Sass的方法：</dt>
              <dd>ECharts 提供了常规的折线图、柱状图、散点图、饼图、K线图，用于统计的盒形图，用于地理数据可视化的地图、热力图、线图，用于关系数据可视化的关系图、treemap、旭日图，多维数据可视化的平行坐标，还有用于 BI 的漏斗图，仪表盘，并且支持图与图之间的混搭。</dd>
              <dd>除了已经内置的包含了丰富功能的图表，ECharts 还提供了自定义系列，只需要传入一个renderItem函数，就可以从数据映射到任何你想要的图形，更棒的是这些都还能和已有的交互组件结合使用而不需要操心其它事情。</dd>
              <dd>你可以在下载界面下载包含所有图表的构建文件，如果只是需要其中一两个图表，又嫌包含所有图表的构建文件太大，也可以在在线构建中选择需要的图表类型后自定义构建。</dd>
            </dl>
          </Session>
        </Panel>
        )
    }
  }
export default EchartBrief;
