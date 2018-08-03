import React, { Component } from 'react';
import { Route ,Link,Switch } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Brief from './Brief/Brief'
import Page2 from './page2/page2'
import Page3 from './page3/page3'
import Page4 from './page4/page4'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
  class JsPage extends Component{
    constructor(props){
      super(props);
      this.state={
        page:"brief"
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
              <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['brief']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%', borderRight: 0 }}
                >
                  <SubMenu key="sub1" title={<span><Icon type="user" />HTML基础</span>}>
                    <Menu.Item key="brief" onClick={this.handleClick}><Link to={`${match.path}/brief`}>HTML简介</Link></Menu.Item>
                    <Menu.Item key="page2" onClick={this.handleClick}><Link to={`${match.path}/page2`}>option2</Link></Menu.Item>
                    <Menu.Item key="page3" onClick={this.handleClick}><Link to={`${match.path}/page3`}>option3</Link></Menu.Item>
                    <Menu.Item key="page4" onClick={this.handleClick}><Link to={`${match.path}/page4`}>option4</Link></Menu.Item>
                  </SubMenu>                 
                </Menu>
              </Sider>
              <Layout style={{ padding: '0 24px 0' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>HTML</Breadcrumb.Item>
                  <Breadcrumb.Item>{this.state.page}</Breadcrumb.Item>
                </Breadcrumb>
                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                  <Switch>
                    <Route exact path={`${match.path}`} component={Brief}/>
                    <Route path={`${match.path}/brief`} component={Brief}/>
                    <Route path={`${match.path}/page2`} component={Page2}/>
                    <Route path={`${match.path}/page3`} component={Page3}/>
                    <Route path={`${match.path}/page4`} component={Page4}/>
                  </Switch>
                </Content>
              </Layout>
            </Layout>  
        )
    }
  }
export default JsPage;
