import React, { Component } from 'react';
import { Button , Select } from 'antd';
import Panel from '../../../components/Panel';
import Session from '../../../components/Session';
const Option = Select.Option;

require('echarts-gl');
var echarts = require('echarts');
// 基于准备好的dom，初始化echarts实例
  class EchartCom extends Component{ 
    constructor(props){
        super(props);
        this.state={
            data:'[1,2,3,4,5,6]',
            type:'bar',           
            title:'请输入图表名称',
            xAxis:'["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]',
            label:'销量',
            result:'',
        }
    }
    handleChange(e){
        this.setState({
            data:e.target.value
        })        
    }
    handleClick(e){
        
        echarts.init(document.getElementById('bar-chart')).setOption({
            title: {
                text: this.state.title
            },
            tooltip: {},
            xAxis: {
                data: JSON.parse(this.state.xAxis)
            },
            yAxis: {},
            series: [{
                name: this.state.label,
                type: this.state.type,
                data:JSON.parse(this.state.data)
            }]
          });
          this.setState({
            result:`Option({
                title: {
                    text: ${this.state.title}
                },
                tooltip: {},
                xAxis: {
                    data: ${this.state.xAxis}
                },
                yAxis: {},
                series: [{
                    name: ${this.state.label},
                    type: ${this.state.type},
                    data:${this.state.data}
                }]
              });`
        })
    }
    handleChangeType(value){
        this.setState({
            type:value
        })
    }
    handleChangeTitle(e){
        this.setState({
            title:e.target.value
        })
    }
    handleChangeX(e){
        this.setState({
            xAxis:e.target.value
        })
    }
    handleChangeLabel(e){
        this.setState({
            label:e.target.value
        })
    }
    //[5, 20, 36, 10, 10, 20]
    render(){   
      return(
        <Panel title="echart标准化组件">      
          <Session title="echart标准化组件">
          <div className="EchartsWrap">
            <div>
                <Select defaultValue="bar" style={{ width: 120 }} onChange={(e)=>this.handleChangeType(e)}>
                    <Option value="bar">bar</Option>
                    <Option value="line">line</Option>
                </Select>
                <div><div>表名:</div><textarea value={this.state.title} style={{ height:30 }} onChange={(e)=>{this.handleChangeTitle(e)}}/></div>
                <div><div>标注名:</div><textarea value={this.state.label} style={{ height:30 }} onChange={(e)=>{this.handleChangeLabel(e)}}/></div>
                <div><div>数据:</div><textarea value={this.state.data} style={{ height:30 }} onChange={(e)=>{this.handleChange(e)}}/></div>
                <div><div>X轴列名:</div><textarea value={this.state.xAxis} style={{ width: 300,height:30 }} onChange={(e)=>{this.handleChangeX(e)}}/></div>
                <div style={{ marginBottom: 10 }}>
                
                </div>    
                <Button type="primary" onClick={(e)=>{this.handleClick(e)}}>确认</Button>
            </div>                 
            <div id="bar-chart" style={{width:'90%',height:"500px"}}></div>
            <div>输出结果:</div>
            <textarea style={{ width:'90%',height:300 }} value={this.state.result}/>
          </div>
          </Session>
        </Panel>
        )
    }
  }
export default EchartCom;
