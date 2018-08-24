import React, { Component } from 'react';
import { Select } from 'antd';
const Option = Select.Option;
class CssGridCom extends Component{
  constructor(props){
    super(props);
    this.state={
      columns:'1fr 1fr',
      rows:'1fr 1fr',
      columngap:'1px',
      rowgap:'1px',
      gridRowStart:'auto',
      gridRowEnd:'auto',
      gridColumnStart:'auto',
      gridColumnEnd:'auto',
      gridRow:'auto',
      gridColumn:'auto',
      gridArea:'auto',
      gridTemArea:'none',
      gridAutoFlow:'row',
    }
  }
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
  handleChangeColumnGap(value){
    this.setState({
      columngap:value
    })
  }
  handleChangeRowGap(value){
    this.setState({
      rowgap:value
    })
  }
  handleChangeRowStart(value){
    this.setState({
      gridRowStart:value
    })
  }
  handleChangeRowEnd(value){
    this.setState({
      gridRowEnd:value
    })
  }
  handleChangeColumnStart(value){
    this.setState({
      gridColumnStart:value
    })
  }
  handleChangeColumnEnd(value){
    this.setState({
      gridColumnEnd:value
    })
  }
  handleChangeGridRow(value){
    this.setState({
      gridRow:value
    })
  }
  handleChangeGridColumn(value){
    this.setState({
      gridColumn:value
    })
  }
  handleChangeGridArea(value){
    this.setState({
      gridArea:value
    })
  }
  handleChangeGridTemAreas(value){
    this.setState({
      gridTemArea:value
    })
  }
  handleChangeFlow(value){
    this.setState({
      gridAutoFlow:value
    })
  }
  render(){
    var gridcss={
      width:'60%',
      gridTemplateColumns:this.state.columns,
      gridTemplateRows:this.state.rows,
      gridColumnGap:this.state.columngap,
      gridRowGap:this.state.rowgap,
      gridTemplateAreas:this.state.gridTemArea,
      gridAutoFlow:this.state.gridAutoFlow,
    }
    var itemcss={
      gridRowStart: this.state.gridRowStart,
      gridRowEnd: this.state.gridRowEnd,
      gridColumnStart: this.state.gridColumnStart,
      gridColumnEnd: this.state.gridColumnEnd,
      gridRow:this.state.gridRow,
      gridColumn:this.state.gridColumn,
      gridArea:this.state.gridArea,
    }
    var gridTemplate0=(
    <React.Fragment>
      <div className="grid-config">
      <span>grid-template-columns:</span>
      <Select defaultValue="1fr 1fr" style={{ width: '100%' }} onChange={(e)=>this.handleChangeColumns(e)}>
          <Option value="1fr 1fr">1fr 1fr</Option>
          <Option value="2fr 1fr 2fr">2fr 1fr 2fr</Option>
          <Option value="repeat(3, [cs] 1fr [ce])">repeat(3, [cs] 1fr [ce])</Option>
          <Option value="[cs] 1fr [c2s] 1fr [c3s] 1fr [ce]">[cs] 1fr [c2s] 1fr [c3s] 1fr [ce]</Option>                       
      </Select>
    </div>
    <div className="grid-config">
      <span>grid-template-rows:</span>
      <Select defaultValue="1fr 1fr" style={{ width: '100%' }} onChange={(e)=>this.handleChangeRows(e)}>
          <Option value="1fr 1fr">1fr 1fr</Option>
          <Option value="2fr 1fr 2fr">2fr 1fr 2fr</Option>
          <Option value="repeat(3, [rs] 1fr [re])">repeat(3, [rs] 1fr [re])</Option>
          <Option value="[rs r1s] 1fr [r1e r2s] 1fr [r2e re]">[rs r1s] 1fr [r1e r2s] 1fr [r2e re]</Option> 
      </Select>
    </div>
    <div className="grid-config">
        <span>grid-row[项目A]:</span>
        <Select defaultValue="auto" style={{ width: '100%' }} onChange={(e)=>this.handleChangeGridRow(e)}>
            <Option value="auto">auto</Option>
            <Option value="rs/re2">rs/re2</Option>
            <Option value="r1s/re">r1s/re</Option>
        </Select>
      </div>
      <div className="grid-config">
        <span>grid-column[项目A]:</span>
        <Select defaultValue="auto" style={{ width: '100%' }} onChange={(e)=>this.handleChangeGridColumn(e)}>
            <Option value="auto">auto</Option>
            <Option value="cs/ce2">cs/ce2</Option>
            <Option value="c2s/ce">c2s/ce</Option>
        </Select>
      </div>
    </React.Fragment>);
    var gridTemplate=(<React.Fragment>
    <div className="grid-config">
    <span>grid-template-columns:</span>
    <Select defaultValue="1fr 1fr" style={{ width: '100%' }} onChange={(e)=>this.handleChangeColumns(e)}>
        <Option value="1fr 1fr">1fr 1fr</Option>
        <Option value="2fr 1fr">2fr 1fr</Option>
        <Option value="2fr 1fr 2fr">2fr 1fr 2fr</Option>
        <Option value="50px 50px">50px 50px</Option>
        <Option value="50% 50%">50% 50%</Option>
        <Option value="100px 1fr 2fr">100px 1fr 2fr</Option>
        <Option value="repeat(3, 1fr)">repeat(3, 1fr)</Option>
        <Option value="30px repeat(3, 1fr) 30px">30px repeat(3, 1fr) 30px</Option>
        <Option value="minmax(auto, 50%) 1fr 3em">minmax(auto, 50%) 1fr 3em</Option>
        <Option value="minmax(100px, auto)">minmax(100px, auto)</Option>                                   
    </Select>
  </div>
  <div className="grid-config">
    <span>grid-template-rows:</span>
    <Select defaultValue="1fr 1fr" style={{ width: '100%' }} onChange={(e)=>this.handleChangeRows(e)}>
        <Option value="1fr 1fr">1fr 1fr</Option>
        <Option value="2fr 1fr">2fr 1fr</Option>
        <Option value="2fr 1fr 2fr">2fr 1fr 2fr</Option>
        <Option value="50px 50px">50px 50px</Option>
        <Option value="50% 50%">50% 50%</Option>
        <Option value="100px 1fr 2fr">100px 1fr 2fr</Option>
        <Option value="repeat(3, 1fr)">repeat(3, 1fr)</Option>
        <Option value="30px repeat(3, 1fr) 30px">30px repeat(3, 1fr) 30px</Option>
        <Option value="minmax(100px, auto)">minmax(100px, auto)</Option>
        <Option value="minmax(auto, 50%) 1fr 3em">minmax(auto, 50%) 1fr 3em</Option> 
    </Select>
  </div>
  </React.Fragment>);
    var gridGap = (
    <React.Fragment>
    {gridTemplate}
    <div className="grid-config">
        <span>grid-column-gap:</span>
        <Select defaultValue="1px" style={{ width: '100%' }} onChange={(e)=>this.handleChangeColumnGap(e)}>
            <Option value="1px">1px</Option>
            <Option value="50px">50px</Option>
            <Option value="10%">10%</Option>
            <Option value="10em">10em</Option>
        </Select>
      </div>
      <div className="grid-config">
        <span>grid-row-gap:</span>
        <Select defaultValue="1px" style={{ width: '100%' }} onChange={(e)=>this.handleChangeRowGap(e)}>
            <Option value="1px">1px</Option>
            <Option value="50px">50px</Option>
            <Option value="10%">10%</Option>
            <Option value="10em">10em</Option>
        </Select>
      </div>
  </React.Fragment>);
  var gridRowStart=(
    <React.Fragment>
      {gridGap}
      <div className="grid-config">
            <span>grid-row-start[项目A]:</span>
            <Select defaultValue="auto" style={{ width: '100%' }} onChange={(e)=>this.handleChangeRowStart(e)}>
                <Option value="auto">auto</Option>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
            </Select>
          </div>
          <div className="grid-config">
            <span>grid-row-end[项目A]:</span>
            <Select defaultValue="auto" style={{ width: '100%' }} onChange={(e)=>this.handleChangeRowEnd(e)}>
                <Option value="auto">auto</Option>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
            </Select>
          </div>
          <div className="grid-config">
            <span>grid-column-start[项目A]:</span>
            <Select defaultValue="auto" style={{ width: '100%' }} onChange={(e)=>this.handleChangeColumnStart(e)}>
                <Option value="auto">auto</Option>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
            </Select>
          </div>
          <div className="grid-config">
            <span>grid-column-end[项目A]:</span>
            <Select defaultValue="auto" style={{ width: '100%' }} onChange={(e)=>this.handleChangeColumnEnd(e)}>
                <Option value="auto">auto</Option>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
            </Select>
          </div>
    </React.Fragment>
  )
  var gridRow=(  
    <React.Fragment>
      {gridRowStart}
          <div className="grid-config">
            <span>grid-row[项目A]:</span>
            <Select defaultValue="auto" style={{ width: '100%' }} onChange={(e)=>this.handleChangeGridRow(e)}>
                <Option value="auto">auto</Option>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="2 / 4">2 / 4</Option>
                <Option value="3 / 4">3 / 4</Option>
                <Option value="span 2">span 2</Option>
                <Option value="2 / span 2">1 / span 3</Option>
                <Option value="1 / span 3">1 / span 3</Option>
            </Select>
          </div>
          <div className="grid-config">
            <span>grid-column[项目A]:</span>
            <Select defaultValue="auto" style={{ width: '100%' }} onChange={(e)=>this.handleChangeGridColumn(e)}>
                <Option value="auto">auto</Option>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="2 / 4">2 / 4</Option>
                <Option value="3 / 4">3 / 4</Option>
                <Option value="span 2">span 2</Option>
                <Option value="2 / span 2">1 / span 3</Option>
                <Option value="1 / span 3">1 / span 3</Option>
            </Select>
          </div>
          <div className="grid-config" style={{gridColumn:'3/5'}}>
            <span>grid-area[项目A]:</span>
            <Select defaultValue="auto" style={{ width: '100%' }} onChange={(e)=>this.handleChangeGridArea(e)}>
                <Option value="auto">auto</Option>
                <Option value="1/1/2/2">1/1/2/2</Option>
                <Option value="2/3/3/4">2/3/3/4</Option>
                <Option value="1/2/2/4">1/2/2/4</Option>
                <Option value="2/1/3/4">2/1/3/4</Option>
            </Select>
          </div>
    </React.Fragment>
  )
  var gridTemplateAreas=(  
    <React.Fragment>
          <div className="grid-config">
            <span>grid-template-columns:</span>
            <Select defaultValue="1fr 1fr" style={{ width: '100%' }} onChange={(e)=>this.handleChangeColumns(e)}>
                <Option value="1fr 1fr">1fr 1fr</Option>
                <Option value="2fr 1fr">2fr 1fr</Option>                 
            </Select>
          </div>
          <div className="grid-config">
            <span>grid-template-rows:</span>
            <Select defaultValue="1fr 1fr" style={{ width: '100%' }} onChange={(e)=>this.handleChangeRows(e)}>
                <Option value="1fr 1fr">1fr 1fr</Option>
                <Option value="1fr 2fr 1fr">1fr 2fr 1fr</Option>
                <Option value="2fr 1fr 2fr">2fr 1fr 2fr</Option>
            </Select>
          </div>
          <div className="grid-config" style={{gridColumn:'3/5'}}>
            <span>grid-template-areas:</span>
            <Select defaultValue="none" style={{ width: '100%' }} onChange={(e)=>this.handleChangeGridTemAreas(e)}>
                <Option value="none">none</Option>
                <Option value='"header header" "content sidebar" "footer footer"'>"header header" "content sidebar" "footer footer"</Option> 
            </Select>
          </div>
          <div className="grid-config" style={{gridColumn:'1/3'}}>
            <span>grid-area[项目A]:</span>
            <Select defaultValue="auto" style={{ width: '100%' }} onChange={(e)=>this.handleChangeGridArea(e)}>
                <Option value="auto">auto</Option>
                <Option value="header">header</Option>
                <Option value="content">content</Option>
                <Option value="sidebar">sidebar</Option>
                <Option value="footer">footer</Option>
            </Select>
          </div>
    </React.Fragment>
  )
  var gridAutoFlow=(  
    <React.Fragment>
        <div className="grid-config">
            <span>grid-template-columns:</span>
            <Select defaultValue="1fr 1fr" style={{ width: '100%' }} onChange={(e)=>this.handleChangeColumns(e)}>
                <Option value="1fr 1fr">1fr 1fr</Option>
                <Option value="2fr 1fr 2fr">2fr 1fr 2fr</Option>
                <Option value="repeat(3, [cs] 1fr [ce])">repeat(3, [cs] 1fr [ce])</Option>
                <Option value="[cs] 1fr [c2s] 1fr [c3s] 1fr [ce]">[cs] 1fr [c2s] 1fr [c3s] 1fr [ce]</Option>                       
            </Select>
          </div>
          <div className="grid-config">
            <span>grid-template-rows:</span>
            <Select defaultValue="1fr 1fr" style={{ width: '100%' }} onChange={(e)=>this.handleChangeRows(e)}>
                <Option value="1fr 1fr">1fr 1fr</Option>
                <Option value="2fr 1fr 2fr">2fr 1fr 2fr</Option>
                <Option value="repeat(3, [rs] 1fr [re])">repeat(3, [rs] 1fr [re])</Option>
                <Option value="[rs r1s] 1fr [r1e r2s] 1fr [r2e re]">[rs r1s] 1fr [r1e r2s] 1fr [r2e re]</Option> 
            </Select>
          </div>
          <div className="grid-config">
            <span>grid-auto-flow:</span>: 
            <Select defaultValue="row" style={{ width: '100%' }} onChange={(e)=>this.handleChangeFlow(e)}>
                <Option value="row">row</Option>    
                <Option value="column">column</Option>             
            </Select>
          </div>
    </React.Fragment>
  )
    function gridConfigs(gridMode){
      var gridConfig;  //Template和间距
      if(gridMode==='0'){
        gridConfig=gridTemplate0;
      }
      else if(gridMode==='1'){
        gridConfig=gridTemplate;
      }
      else if(gridMode==='2'){
        gridConfig=gridGap;
      }
      else if(gridMode==='3'){
        gridConfig=gridRowStart;
      }
      else if(gridMode==='4'){
        gridConfig=gridRow;
      }
      else if(gridMode==='5'){
        gridConfig=gridTemplateAreas;
      }
      else if(gridMode==='6'){
        gridConfig=gridAutoFlow;
      }
      return(gridConfig);
    }
    
    return(
      <div>
        <div className="grid-wrap" style={gridcss}>
          <div className="grid-div" style={itemcss}>
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
        <div className="grid-config-box"> 
          {gridConfigs(this.props.gridMode)}
        </div>
      </div>
    )
  }
}
export default CssGridCom;
