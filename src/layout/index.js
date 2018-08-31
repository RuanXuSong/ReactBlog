import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Page from '../utils/Page';
import HtmlPage from '../pages/content1/content1';
import CssPage from '../pages/content2/content2';
import JsPage from '../pages/content3/content3';
import FramePage from '../pages/content4/content4';
import StudyPage from '../pages/content5/content5';
import Banner from './banner';
import 'antd/dist/antd.css';
import './index.scss';
const { Header } = Layout;

class PrimaryLayout extends Component {
	handleClick(e) {
		Page.savePageInfo(e.key, 1, '');
	}
	render() {
		const { path } = this.props.match;
		return (
			<Layout>
				<Header className="header">
					<Menu
						theme="dark"
						mode="horizontal"
						defaultSelectedKeys={
							Page.getPageInfo().index ? [`${Page.getPageInfo().index}`] : ['1']
						}
						style={{ lineHeight: '64px' }}
					>
						<Menu.Item key="1" onClick={this.handleClick}>
							<Link to={`${path}/html`}>HTML</Link>
						</Menu.Item>
						<Menu.Item key="2" onClick={this.handleClick}>
							<Link to={`${path}/css`}>CSS</Link>
						</Menu.Item>
						<Menu.Item key="3" onClick={this.handleClick}>
							<Link to={`${path}/js`}>JS</Link>
						</Menu.Item>
						<Menu.Item key="4" onClick={this.handleClick}>
							<Link to={`${path}/frame`}>框架</Link>
						</Menu.Item>
						<Menu.Item key="5" onClick={this.handleClick}>
							<Link to={`${path}/study`}>学习</Link>
						</Menu.Item>
					</Menu>
				</Header>
				<Banner />
				<Layout style={{ paddingBottom: '100px' }}>
					<Switch>
						{/* 默认进入HTML页面 */}
						<Route exact path={path} component={HtmlPage} />
						{/* 根据路由不同渲染不同组件 */}
						<Route path={`${path}/html`} component={HtmlPage} />
						<Route path={`${path}/css`} component={CssPage} />
						<Route path={`${path}/js`} component={JsPage} />
						<Route path={`${path}/frame`} component={FramePage} />
						<Route path={`${path}/study`} component={StudyPage} />
					</Switch>
				</Layout>
			</Layout>
		);
	}
}

export default PrimaryLayout;
