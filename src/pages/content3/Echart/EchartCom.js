import React, { Component } from 'react';
import { Button , Select , Switch } from 'antd';
import Panel from '../../../components/Panel';
import Session from '../../../components/Session';
import './index.scss';
const Option = Select.Option;

require('echarts-gl');
var colorArr=[];
var echarts = require('echarts');
// 基于准备好的dom，初始化echarts实例
  class EchartCom extends Component{ 
    constructor(props){
        super(props);
        this.state={
            data:'[1,2,3,4,5,6]',
            type:'bar',           
            showTitle:'true',
            title:'请输入图表名称',
            color:['#000'],
            colorNum:1,
            xAxis:'["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]',
            yAxis:'',
            label:'销量',
            result:'',           
        }
    }
    handleChange(e){
        if(this.state.type === 'pie'){
            this.setState({
                data:e.target.value,  
            },()=>{
                this.setState({
                    colorNum:JSON.parse(this.state.data).length
                },()=>{colorArr[this.state.colorNum]=this.state.color;})
                
            })
        }
        else{
            this.setState({
                data:e.target.value,  
            })
        }
    }
    handleClick(e){ 
        if(this.state.type === 'pie'){                 
            echarts.init(document.getElementById('chart')).setOption({
                title: {
                    text: this.state.title,
                    show: this.state.showTitle
                },
                xAxis:{
                    show:false
                },
                yAxis:{
                    show:false
                },
                tooltip: {},
                color:this.state.color,
                series: [{
                    name: this.state.label,
                    type: this.state.type,
                    data:JSON.parse(this.state.data)
                }]
            });
            this.setState({
                result:`Option({
                    title: {
                        text: ${this.state.title},
                        show: ${this.state.showTitle}
                    },
                    tooltip: {},
                    xAxis:{
                        show:false
                    },
                    yAxis:{
                        show:false
                    },
                    color: ${JSON.stringify(this.state.color)},
                    series: [{
                        name: ${this.state.label},
                        type: ${this.state.type},
                        data:${this.state.data}
                    }]
                });`
            })
        }
        else{
            echarts.init(document.getElementById('chart')).setOption({
                title: {
                    text: this.state.title,
                    show: this.state.showTitle
                },
                tooltip: {},
                xAxis: {
                    data: JSON.parse(this.state.xAxis),
                    show:true
                },
                yAxis: {
                    show:true
                },
                color:this.state.color,
                series: [{
                    name: this.state.label,
                    type: this.state.type,
                    data:JSON.parse(this.state.data)
                }]
            });
            this.setState({
                result:`Option({
                    title: {
                        text: ${this.state.title},
                        show: ${this.state.showTitle}
                    },
                    tooltip: {},
                    xAxis: {
                        data: ${this.state.xAxis},
                        show:true,
                    },
                    yAxis: {                      
                        ${this.state.yAxis?'data:'+ this.state.yAxis+`, 
                        `:''}show:true,
                    },
                    color: ${JSON.stringify(this.state.color)},
                    series: [{
                        name: ${this.state.label},
                        type: ${this.state.type},
                        data:${this.state.data}
                    }]
                });`
            })
    }
}
    handleChangeType(value){
        if(value==='pie'){
            this.setState({
                data:
                    `[{"name": "A", "value": 1212},
                    {"name": "B", "value": 2400},
                    {"name": "C", "value": 1500}]`
            },()=>{
                this.setState({
                    colorNum:JSON.parse(this.state.data).length,                   
                },()=>{for(let i=0;i<this.state.colorNum;i++){
                    colorArr[i]=this.state.color;
                  };
                })
            })          
        }
        else{
            this.setState({
                data:'[1,2,3,4,5,6]'
            },()=>{
                this.setState({
                    colorNum:1
                })
            })
        }
        this.setState({
            type:value,
            color:colorArr
        })
    }
    handleChangeTitle(e){
        this.setState({
            title:e.target.value
        })
    }
    ChangeShowChartName(e){
        this.setState({
            showTitle:e
    })
}
    handleChangeLabel(e){
        this.setState({
            label:e.target.value
        })
    }
    handleChangeColor(e,idx){
        colorArr[idx]=e.target.value;
        this.setState({
            color:colorArr
        })
    }
    handleChangeX(e){
        this.setState({
            xAxis:e.target.value
        })
    }
    render(){ 
    colorArr=[];
    for(let i=0;i<this.state.colorNum;i++){
        colorArr.push(this.state.color[i]);
    }
      return(
        <Panel title="echart标准化">      
          <Session title="echart标准化">
          <div className="EchartsWrap">
            <div>
                <Select defaultValue="bar" style={{ width: 120 }} onChange={(e)=>this.handleChangeType(e)}>
                    <Option value="bar">bar</Option>
                    <Option value="line">line</Option>
                    <Option value="pie">pie</Option>
                    <Option value="scatter">scatter</Option>
                </Select>
                <div><div>表名:</div><textarea value={this.state.title} style={{ height:30 }} onChange={(e)=>{this.handleChangeTitle(e)}}/></div>
                <div>是否显示表名: <Switch defaultChecked onChange={(e)=>{this.ChangeShowChartName(e)}} /></div>
                <div><div>标注名:</div><textarea value={this.state.label} style={{ height:30 }} onChange={(e)=>{this.handleChangeLabel(e)}}/></div>
                <div><div>数据:</div><textarea value={this.state.data} style={{ height:30 }} onChange={(e)=>{this.handleChange(e)}}/></div>
                {
                    colorArr.map((color,idx)=>
                        (
                        <div key="idx"><div>color:</div><input type='color' value={this.state.color[idx]} style={{ height:30 }} onChange={(e)=>{this.handleChangeColor(e,idx)}}/></div>
                        )
                    )
                }
                <div><div>X轴列名:</div><textarea value={this.state.xAxis} style={{ width: 300,height:100,marginBottom: 10 }} onChange={(e)=>{this.handleChangeX(e)}}/></div>  
                <Button type="primary" onClick={(e)=>{this.handleClick(e)}}>确认</Button>
            </div>                 
            <div id="chart" style={{width:'90%',height:"500px"}}></div>             
          </div>
          <div>输出结果:</div>  
          <textarea style={{ width:'90%',height:300 }} value={this.state.result}/>
          </Session>
        </Panel>
        )
    }
  }
export default EchartCom;
