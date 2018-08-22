import React, { Component } from 'react';
import { Route ,Link,Switch } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Page from '../../utils/Page';
import Brief from './Antd/Brief'
import ReactBrief from './React/Brief';
import VirtualDom from './React/VirtualDom';
import JSX from './React/JSX';
import Components from './React/Components';
import Props from './React/Props';
import State from './React/State';
import LifeCycle from './React/LifeCycle';
import Events from './React/Events';


const { SubMenu } = Menu;
const { Content, Sider } = Layout;
class FramePage extends Component{
  
    constructor(props){
      super(props);
      this.state={
        page:"Antd简介"
      }
    }
    handleClick = (e,sub) =>{   
      this.setState({
        page:e.key
      });
      Page.savePageInfo(4,sub,e.key);
    }
    render(){
      const { match }=this.props;
      return( 
           <Layout>
              <Sider 
                collapsible 
                collapsedWidth={0}
                width={200} 
                theme="light">
                <Menu
                  mode="inline"
                  defaultSelectedKeys={[Page.getPageInfo().page?Page.getPageInfo().page:'Antd简介']}
                  defaultOpenKeys={Page.getPageInfo().sub?['sub'+Page.getPageInfo().sub]:['sub1']}
                  style={{ height: '100%', borderRight: 0 }}
                >
                  <SubMenu key="sub1" title={<span><Icon type="bars" />Antd基础</span>}>
                    <Menu.Item key="Antd简介" onClick={(e)=>this.handleClick(e,1)}><Link to={`${match.path}/brief`}>Antd简介</Link></Menu.Item>                    
                  </SubMenu>   
                  <SubMenu key="sub2" title={<span><Icon type="bars" />React</span>}>
                    <Menu.Item key="React简介" onClick={(e)=>this.handleClick(e,2)}><Link to={`${match.path}/ReactBrief`}>React简介</Link></Menu.Item>
                    <Menu.Item key="虚拟DOM" onClick={(e)=>this.handleClick(e,2)}><Link to={`${match.path}/VirtualDom`}>虚拟DOM</Link></Menu.Item>
                    <Menu.Item key="JSX" onClick={(e)=>this.handleClick(e,2)}><Link to={`${match.path}/JSX`}>JSX</Link></Menu.Item>
                    <Menu.Item key="Components" onClick={(e)=>this.handleClick(e,2)}><Link to={`${match.path}/Components`}>Components</Link></Menu.Item>
                    <Menu.Item key="Props" onClick={(e)=>this.handleClick(e,2)}><Link to={`${match.path}/Props`}>Props</Link></Menu.Item> 
                    <Menu.Item key="State" onClick={(e)=>this.handleClick(e,2)}><Link to={`${match.path}/State`}>State</Link></Menu.Item>
                    <Menu.Item key="生命周期" onClick={(e)=>this.handleClick(e,2)}><Link to={`${match.path}/LifeCycle`}>生命周期</Link></Menu.Item>  
                    <Menu.Item key="事件处理" onClick={(e)=>this.handleClick(e,2)}><Link to={`${match.path}/Events`}>事件处理</Link></Menu.Item>  
                    {/* <Menu.Item key="双向绑定" onClick={(e)=>this.handleClick(e,2)}><Link to={`${match.path}/BiBinding`}>双向绑定</Link></Menu.Item>                                */}
                  </SubMenu>              
                </Menu>
              </Sider>
              <Layout style={{ padding: '0 24px 0' }}>
                <Breadcrumb separator=">" style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item><Icon type="home" />Home</Breadcrumb.Item>
                  <Breadcrumb.Item><Icon type="user" />框架</Breadcrumb.Item>
                  <Breadcrumb.Item>{this.state.page}</Breadcrumb.Item>
                </Breadcrumb>
                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                  <Switch>
                    <Route exact path={`${match.path}`} component={Brief}/>
                    <Route path={`${match.path}/brief`} component={Brief}/>  
                    <Route path={`${match.path}/ReactBrief`} component={ReactBrief}/>
                    <Route path={`${match.path}/VirtualDom`} component={VirtualDom}/>
                    <Route path={`${match.path}/JSX`} component={JSX}/>
                    <Route path={`${match.path}/Components`} component={Components}/>
                    <Route path={`${match.path}/Props`} component={Props}/>
                    <Route path={`${match.path}/State`} component={State}/>
                    <Route path={`${match.path}/LifeCycle`} component={LifeCycle}/>
                    <Route path={`${match.path}/Events`} component={Events}/>
                    {/* <Route path={`${match.path}/BiBinding`} component={BiBinding}/>                  */}
                  </Switch>
                </Content>
              </Layout>
            </Layout>  
        )
    }
  }
export default FramePage;
