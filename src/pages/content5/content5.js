import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Page from '../../utils/Page';
import MapForEach from './Study/MapForEach';
import StudyBrief from './Study/StudyBrief';
import MIME from './Study/MIME';
import OneVar from './Study/OneVar';
import WeiOption from './Study/WeiOption';
import MultiOption from './Study/MultiOption';
import Strings from './Study/Strings';
import Objects from './Study/Objects';
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
							<Menu.Item key="Objects" onClick={e => this.handleClick(e, 1)}>
								<Link to={`${match.path}/Objects`}>对象</Link>
							</Menu.Item>
							<Menu.Item key="Strings" onClick={e => this.handleClick(e, 1)}>
								<Link to={`${match.path}/Strings`}>字符串</Link>
							</Menu.Item>

							<SubMenu
								key="sub1.1"
								title={
									<span>
										<Icon type="bars" />
										操作符
									</span>
								}
							>
								<Menu.Item
									key="OneVar"
									onClick={e => this.handleClick(e, [1, 1.1])}
								>
									<Link to={`${match.path}/OneVar`}>一元操作符</Link>
								</Menu.Item>
								<Menu.Item
									key="WeiOption"
									onClick={e => this.handleClick(e, [1, 1.1])}
								>
									<Link to={`${match.path}/WeiOption`}>位操作符</Link>
								</Menu.Item>
								<Menu.Item
									key="MultiOption"
									onClick={e => this.handleClick(e, [1, 1.1])}
								>
									<Link to={`${match.path}/MultiOption`}>乘性操作符</Link>
								</Menu.Item>
							</SubMenu>
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
							<Route path={`${match.path}/Strings`} component={Strings} />
							<Route path={`${match.path}/Objects`} component={Objects} />
							<Route path={`${match.path}/OneVar`} component={OneVar} />
							<Route path={`${match.path}/WeiOption`} component={WeiOption} />
							<Route
								path={`${match.path}/MultiOption`}
								component={MultiOption}
							/>
						</Switch>
					</Content>
				</Layout>
			</Layout>
		);
	}
}
export default StudyPage;
