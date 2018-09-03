import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Page from '../../utils/Page';
import JsBrief from './Js/Brief';
import EchartBrief from './Echart/Brief';
import EchartEg from './Echart/EchartEg';
import EchartCom from './Echart/EchartCom';
import TypeBrief from './TypeScript/Brief';
import TypeBase from './TypeScript/TypeBase';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
class JsPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 'JS简介'
		};
	}
	handleClick = (e, sub) => {
		this.setState({
			page: e.key
		});
		Page.savePageInfo(3, sub, e.key);
	};
	//获取page打开的menu
	getPageArr = () => {
		let PageArr = [];
		if (typeof Page.getPageInfo().sub === 'object') {
			Page.getPageInfo().sub.forEach(element => {
				PageArr.push('sub' + element);
			});
		} else {
			PageArr.push('sub' + Page.getPageInfo().sub);
		}
		return PageArr;
	};
	render() {
		const { match } = this.props;
		return (
			<Layout>
				<Sider collapsible collapsedWidth={0} width={200} theme="light">
					<Menu
						mode="inline"
						defaultSelectedKeys={[
							Page.getPageInfo().page ? Page.getPageInfo().page : 'JS简介'
						]}
						defaultOpenKeys={
							Page.getPageInfo().sub ? this.getPageArr() : ['sub1']
						}
						style={{ height: '100%', borderRight: 0 }}
					>
						<SubMenu
							key="sub1"
							title={
								<span>
									<Icon type="bars" />
									JS简介
								</span>
							}
						>
							<Menu.Item key="JS简介" onClick={e => this.handleClick(e, 1)}>
								<Link to={`${match.path}/JsBrief`}>JS简介</Link>
							</Menu.Item>
						</SubMenu>
						<SubMenu
							key="sub2"
							title={
								<span>
									<Icon type="bars" />
									Echart
								</span>
							}
						>
							<Menu.Item key="Echart简介" onClick={e => this.handleClick(e, 2)}>
								<Link to={`${match.path}/EchartBrief`}>Echart简介</Link>
							</Menu.Item>
							<Menu.Item key="Echart实例" onClick={e => this.handleClick(e, 2)}>
								<Link to={`${match.path}/EchartEg`}>Echart实例</Link>
							</Menu.Item>
							<Menu.Item
								key="标准化Echart"
								onClick={e => this.handleClick(e, 2)}
							>
								<Link to={`${match.path}/EchartCom`}>标准化Echart</Link>
							</Menu.Item>
						</SubMenu>
						<SubMenu
							key="sub3"
							title={
								<span>
									<Icon type="bars" />
									TypeScript
								</span>
							}
						>
							<Menu.Item
								key="TypeScript简介"
								onClick={e => this.handleClick(e, 3)}
							>
								<Link to={`${match.path}/TypeBrief`}>TypeScript简介</Link>
							</Menu.Item>
							<Menu.Item
								key="TypeScript基础"
								onClick={e => this.handleClick(e, 3)}
							>
								<Link to={`${match.path}/TypeBase`}>TypeScript基础</Link>
							</Menu.Item>
						</SubMenu>
					</Menu>
				</Sider>
				<Layout style={{ padding: '0 24px 0' }}>
					<Breadcrumb separator=">" style={{ margin: '16px 0' }}>
						<Breadcrumb.Item>
							<Icon type="home" />
							Home
						</Breadcrumb.Item>
						<Breadcrumb.Item>
							<Icon type="user" />
							JS
						</Breadcrumb.Item>
						<Breadcrumb.Item>{this.state.page}</Breadcrumb.Item>
					</Breadcrumb>
					<Content
						style={{
							background: '#fff',
							padding: 24,
							margin: 0,
							minHeight: 280
						}}
					>
						<Switch>
							<Route exact path={`${match.path}`} component={JsBrief} />
							<Route path={`${match.path}/JsBrief`} component={JsBrief} />
							<Route
								path={`${match.path}/EchartBrief`}
								component={EchartBrief}
							/>
							<Route path={`${match.path}/EchartEg`} component={EchartEg} />
							<Route path={`${match.path}/EchartCom`} component={EchartCom} />
							<Route path={`${match.path}/TypeBrief`} component={TypeBrief} />
							<Route path={`${match.path}/TypeBase`} component={TypeBase} />
						</Switch>
					</Content>
				</Layout>
			</Layout>
		);
	}
}
export default JsPage;
