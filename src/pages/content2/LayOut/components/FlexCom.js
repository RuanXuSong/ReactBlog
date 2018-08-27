import React, { Component } from 'react';
import { Select } from 'antd';
const Option = Select.Option;
class FlexCom extends Component{
  constructor(props){
    super(props);
    this.state={
      flexDirection:'row',
      flexWrap:'wrap',
      flexFlow:'auto',
      justifyContent:'auto',
      alignItems:'auto',
      alignContent:'auto',
      order:'0',
      flexGrow:'0',
      flexShrink:'1',
      flexBasis:'auto',
      AlignSelf:'auto',
      flexLiNum:'10',
    }
  }
  handleChangeFlexLiNum(value){
    this.setState({
      flexLiNum:value
    })
  }
  handleChangeFlexDirection(value){
    this.setState({
      flexDirection:value
    })
  }
  handleChangeFlexWrap(value){
    this.setState({
      flexWrap:value
    })
  }
  handleChangeFlexFlow(value){
    this.setState({
      flexFlow:value
    })
  }
  handleChangeJustifyContent(value){
    this.setState({
      justifyContent:value
    })
  }
  handleChangeAlignItems(value){
    this.setState({
      alignItems:value
    })
  }
  handleChangeAlignContent(value){
    this.setState({
      alignContent:value
    })
  }
  handleChangeOrder(value){
    this.setState({
      order:value
    })
  }
  handleChangeFlexGrow(value){
    this.setState({
      flexGrow:value
    })
  }
  handleChangeFlexShrink(value){
    this.setState({
      flexShrink:value
    })
  }
  handleChangeFlexBasis(value){
    this.setState({
      flexBasis:value
    })
  }
  handleChangeAlignSelf(value){
    this.setState({
      alignSelf:value
    })
  }
  render(){
    var BoxCss={
      flexDirection:this.state.flexDirection,
      flexWrap:this.state.flexWrap,
      flexFlow:this.state.flexFlow,
      justifyContent:this.state.justifyContent,
      alignItems:this.state.alignItems,
      alignContent:this.state.alignContent,
    }
    var flexCss={
      order:this.state.order,
      flexGrow:this.state.flexGrow,
      flexShrink:this.state.flexShrink,
      flexBasis:this.state.flexBasis,
      alignSelf:this.state.alignSelf,
      fontSize:'12px',
    }
    var flexTemplate=(
      <React.Fragment>
        <div className="flex-config">
          <span>flex项目个数:</span>
          <Select defaultValue="10" style={{ width: '100%' }} onChange={(e)=>this.handleChangeFlexLiNum(e)}>
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
              <Option value="5">5</Option>
              <Option value="6">6</Option>
              <Option value="7">7</Option>
              <Option value="8">8</Option>
              <Option value="9">9</Option>
              <Option value="10">10</Option>                   
          </Select>
        </div>
        <div className="flex-config">
          <span>flex-direction:</span>
          <Select defaultValue="row" style={{ width: '100%' }} onChange={(e)=>this.handleChangeFlexDirection(e)}>
              <Option value="row">row</Option>
              <Option value="column">column</Option>                   
          </Select>
        </div>
        <div className="flex-config">
          <span>flex-wrap:</span>
          <Select defaultValue="wrap" style={{ width: '100%' }} onChange={(e)=>this.handleChangeFlexWrap(e)}>
              <Option value="wrap">wrap</Option>
              <Option value="nowrap">nowrap</Option>
              <Option value="wrap-reverse">wrap-reverse</Option>                     
          </Select>
        </div>
        <div className="flex-config">
          <span>flex-flow:</span>
          <Select defaultValue="row wrap" style={{ width: '100%' }} onChange={(e)=>this.handleChangeFlexFlow(e)}>
              <Option value="row wrap">row wrap</Option>  
              <Option value="row nowrap">row nowrap</Option>  
              <Option value="row wrap-reverse">row wrap-reverse</Option>  
              <Option value="column nowrap">column nowrap</Option>
              <Option value="column wrap">column wrap</Option>  
              <Option value="column wrap-reverse">column wrap-reverse</Option>                     
          </Select>
        </div>
        <div className="flex-config">
          <span>justify-content:</span>
          <Select defaultValue="auto" style={{ width: '100%' }} onChange={(e)=>this.handleChangeJustifyContent(e)}>
              <Option value="auto">auto</Option>
              <Option value="flex-start">flex-start</Option>
              <Option value="flex-end">flex-end</Option>
              <Option value="center">center</Option>
              <Option value="space-between">space-between</Option>
              <Option value="space-around">space-around</Option>                   
          </Select>
        </div>
        <div className="flex-config">
          <span>align-items:</span>
          <Select defaultValue="stretch" style={{ width: '100%' }} onChange={(e)=>this.handleChangeAlignItems(e)}>
              <Option value="stretch">stretch</Option>
              <Option value="flex-start">flex-start</Option>
              <Option value="flex-end">flex-end</Option>
              <Option value="center">center</Option>              
              <Option value="baseline">baseline</Option>                  
          </Select>
        </div>
        <div className="flex-config">
          <span>align-content:</span>
          <Select defaultValue="stretch" style={{ width: '100%' }} onChange={(e)=>this.handleChangeAlignContent(e)}>
              <Option value="stretch">stretch</Option>
              <Option value="flex-start">flex-start</Option>
              <Option value="flex-end">flex-end</Option>
              <Option value="center">center</Option>                            
          </Select>
        </div>
        <div className="flex-config">
          <span>order[第一个]:</span>
          <Select defaultValue="0" style={{ width: '100%' }} onChange={(e)=>this.handleChangeOrder(e)}>
              <Option value="0">0</Option>
              <Option value="1">1</Option>
              <Option value="2">2</Option>                        
          </Select>
        </div>
        <div className="flex-config">
          <span>flex-grow[第一个]:</span>
          <Select defaultValue="0" style={{ width: '100%' }} onChange={(e)=>this.handleChangeFlexGrow(e)}>
              <Option value="0">0</Option>
              <Option value="1">1</Option>                       
          </Select>
        </div>
        <div className="flex-config">
          <span>flex-shrink[第一个]:</span>
          <Select defaultValue="1" style={{ width: '100%' }} onChange={(e)=>this.handleChangeFlexShrink(e)}>
              <Option value="0">0</Option>
              <Option value="1">1</Option>                       
          </Select>
        </div>
        <div className="flex-config">
          <span>flex-basis[第一个]:</span>
          <Select defaultValue="auto" style={{ width: '100%' }} onChange={(e)=>this.handleChangeFlexBasis(e)}>
              <Option value="auto">auto</Option>
              <Option value="150px">150px</Option>
              <Option value="20%">20%</Option>   
              <Option value="10em">10em</Option>                    
          </Select>
        </div>
        <div className="flex-config">
          <span>align-self[第一个]:</span>
          <Select defaultValue="auto" style={{ width: '100%' }} onChange={(e)=>this.handleChangeAlignSelf(e)}>
              <Option value="auto">auto</Option>
              <Option value="stretch">stretch</Option>
              <Option value="flex-start">flex-start</Option>
              <Option value="flex-end">flex-end</Option>
              <Option value="center">center</Option>              
              <Option value="baseline">baseline</Option>                  
          </Select>
        </div>
      </React.Fragment>);
    function flexConfigs(flexMode){
      var flexConfig;  //Template和间距
      if(flexMode==='1'){
        flexConfig=flexTemplate;
      }
      return(flexConfig);
    }
    var flexLiArr=[];
    for(var i = 1;i< this.state.flexLiNum ; i++)
    {
      flexLiArr.push(
        i+1
      )
    }
    return(
      <div>
        <ul className="FlexBox" style={BoxCss}>
          <li style={flexCss}>我是第1个flex项目，我是第1个flex项目</li>
          {
            flexLiArr.map(             
                function(item,idx){
                  return(<li>我是第{item}个flex项目，我是第{item}个flex项目</li>);
                }
            )
          }
        </ul>
        <div className="flex-config-box"> 
          {flexConfigs(this.props.flexMode)}
        </div>
      </div>
    )
  }
}
export default FlexCom;