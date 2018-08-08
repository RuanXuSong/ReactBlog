import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Session from '../../../components/Session';
import SimplexNoise from './simplex';
require('echarts-gl');
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
    echarts.init(document.getElementById('line-chart')).setOption({
      title: {
        text: 'ECharts-折线'
      },       
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
          type: 'value'
      },
      series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
      }]
    });

function generate(n){
    var data=[];
    var z;
    for(var i=0;i<n;i++){
        z=Math.floor(i/10);
        data[i] = new Array();
        for(var j=0;j<3;j++){      
            data[i][j]=Math.random()*10;
            data[i][0]=i%10;
            data[i][1]=z;
            }
        }
        return data;   
    }
        
    let seriesData=generate(300);
// 绘制图表。
    echarts.init(document.getElementById('3d-chart')).setOption({
            xAxis3D: {
        type: 'value'
        },
        yAxis3D: {
        type: 'value'
        },
        zAxis3D: {
        type: 'value'
        },
        grid3D: {
            environment: '#000',
            light: {
                main: {
                    shadow: true,
                    quality: 'ultra',
                    intensity: 1.5
                }
            }
        },
        // visualMap: {
        // show: false,
        // min: 0,
        // max: 5,
        // inRange: {
        // symbolSize: [5, 25],
        // color: [
        //     '#6e6e6e',
        //     '#5ad563',
        //     '#9dc416',
        //     '#fdd01d',
        //     '#fd931d',
        //     '#f7776a'
        // ],
        // colorAlpha: [0.2, 1]
        // }
        // },
        series: [{      
            type: 'bar3D',
            data: seriesData,
            shading: 'realistic',
            stack: 'stack',
            barSize: 4,
            bevelSize: 0.4,
            bevelSmoothness: 4,
            realisticMaterial: {
                roughness: 0.3,
                metalness: 0.4
            },
            itemStyle: {
                color: '#ccc'
            },
        }]           
        })    
}  
    render(){   
      return(
        <Panel title="Echarts实例">
          <Session title="柱状图">
          <div id="bar-chart" style={{width:'90%',height:"500px"}}></div>
          </Session>

          <Session title="饼状图">
          <div id="pie-chart" style={{width:'90%',height:"500px"}}></div>
          </Session>

          <Session title="折线图">
          <div id="line-chart" style={{width:'90%',height:"500px"}}></div>
          </Session>

          <Session title="3d柱状图">
          <div id="3d-chart" style={{width:'90%',height:"500px"}}></div>
          </Session>
        </Panel>
        )
    }
  }
export default EchartEg;
