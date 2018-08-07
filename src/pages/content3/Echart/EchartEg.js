import React, { Component } from 'react';
import HeadTitle from '../../../components/HeadTitle';
import SessionHead from '../../../components/SessionHead';
import SplitLine from '../../../components/SplitLine';
import In from '../../../components/Indent';
import NoteTip from '../../../components/NoteTip';
import CodeSession from '../../../components/CodeSession';
import { height } from 'window-size';
var echarts = require('echarts');
// 基于准备好的dom，初始化echarts实例
  class EchartEg extends Component{ 
    componentDidMount(){      
      // 绘制图表
      echarts.init(document.getElementById('bar-chart')).setOption({
        title: {
            text: 'ECharts-柱状图'
        },
        tooltip: {},
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
      });

      echarts.init(document.getElementById('pie-chart')).setOption({
        title: {
          text: 'ECharts-饼状图'
        },       
        series: {
            name: '访问来源',
            type: 'pie',
            data: [
                {name: 'A', value: 1212},
                {name: 'B', value: 2400},
                {name: 'C', value: 1500}
            ]
        }
    });
    }   
    render(){   
      return(
        <div className="content">
          <HeadTitle title="Echarts实例"/>
          <div className="content-container">
            <SessionHead title="柱状图"/>
            <div id="bar-chart" style={{width:'90%',height:"500px"}}></div>
            <SplitLine/>

            <SessionHead title="饼状图"/>
            <div id="pie-chart" style={{width:'90%',height:"500px"}}></div>
            <SplitLine/>
          </div>
        </div>
        )
    }
  }
export default EchartEg;
