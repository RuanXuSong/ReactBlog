import React, { Component } from 'react';
import { Route ,Link,Switch } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import JsBrief from './Js/Brief'
import EchartEg from './Echart/EchartEg'
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
class CssPage extends Component{
    constructor(props){
      super(props);
      this.state={
        page:"JS简介"
      }
    }
    handleClick = e =>{   
      this.setState({
        page:e.key
      });
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
                  defaultSelectedKeys={['JS简介']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%', borderRight: 0 }}
                >
                  <SubMenu key="sub1" title={<span><Icon type="bars" />JS简介</span>}>
                    <Menu.Item key="JS简介" onClick={this.handleClick}><Link to={`${match.path}/JsBrief`}>JS简介</Link></Menu.Item>                                     
                  </SubMenu>
                  <SubMenu key="sub2" title={<span><Icon type="bars" />Echart</span>}>
                    <Menu.Item key="Echart简介" onClick={this.handleClick}><Link to={`${match.path}/EchartBrief`}>Echart简介</Link></Menu.Item>
                    <Menu.Item key="Echart实例" onClick={this.handleClick}><Link to={`${match.path}/EchartEg`}>Echart实例</Link></Menu.Item>                  
                  </SubMenu>             
                </Menu>
              </Sider>
              <Layout style={{ padding: '0 24px 0' }}>
                <Breadcrumb separator=">" style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item><Icon type="home" />Home</Breadcrumb.Item>
                  <Breadcrumb.Item><Icon type="user" />JS</Breadcrumb.Item>
                  <Breadcrumb.Item>{this.state.page}</Breadcrumb.Item>
                </Breadcrumb>
                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                  <Switch>
                    <Route exact path={`${match.path}`} component={JsBrief}/>
                    <Route path={`${match.path}/JsBrief`} component={JsBrief}/>
                    <Route path={`${match.path}/EchartEg`} component={EchartEg}/>
                  </Switch>
                </Content>
              </Layout>
            </Layout>  
        )
    }
  }
export default CssPage;
