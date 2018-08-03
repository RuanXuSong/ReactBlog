import React, { Component } from 'react';
import { BrowserRouter as Router, Route ,Link,Switch} from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

  class Page2 extends Component{
    render(){
      return(
        <div>
          <p>页面4</p>
        </div>
        )
    }
  }
export default Page2;
