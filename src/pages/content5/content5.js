import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Page from '../../utils/Page';
import MapForEach from './Study/MapForEach';
import StudyBrief from './Study/StudyBrief';
import MIME from './Study/MIME';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
class StudyPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 'Study'
		};
	}
	handleClick = (e, sub) => {
		this.setState({
			page: e.key
		});
		Page.savePageInfo(5, sub, e.key);
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
							Page.getPageInfo().page ? Page.getPageInfo().page : 'Study'
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
									Study
								</span>
							}
						>
							<Menu.Item key="Study" onClick={e => this.handleClick(e, 1)}>
								<Link to={`${match.path}/studyBrief`}>brief</Link>
							</Menu.Item>
							<Menu.Item key="MIME" onClick={e => this.handleClick(e, 1)}>
								<Link to={`${match.path}/MIME`}>MIME类型</Link>
							</Menu.Item>
							<Menu.Item key="MapForEach" onClick={e => this.handleClick(e, 1)}>
								<Link to={`${match.path}/MapForEach`}>map和forEach</Link>
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
							学习
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
							<Route exact path={`${match.path}`} component={StudyBrief} />
							<Route path={`${match.path}/studyBrief`} component={StudyBrief} />
							<Route path={`${match.path}/MIME`} component={MIME} />
							<Route path={`${match.path}/MapForEach`} component={MapForEach} />
						</Switch>
					</Content>
				</Layout>
			</Layout>
		);
	}
}
export default StudyPage;
