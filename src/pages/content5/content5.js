import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Page from '../../utils/Page';
import DiaryFace from './Diary/DiaryFace';
import Y2018M8D31 from './Diary/2018/08/31';
import StudyBrief from './Study/StudyBrief';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
class StudyPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 'Diary'
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
			Page.getPageInfo().sub.map(function(item, idx) {
				PageArr.push('sub' + item);
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
							Page.getPageInfo().page ? Page.getPageInfo().page : 'Diary'
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
									Diary
								</span>
							}
						>
							<Menu.Item key="Diary" onClick={e => this.handleClick(e, 1)}>
								<Link to={`${match.path}/diaryFace`}>face</Link>
							</Menu.Item>
							<SubMenu
								key="sub1.1"
								title={
									<span>
										<Icon type="bars" />
										2018
									</span>
								}
							>
								<SubMenu
									key="sub1.1.1"
									title={
										<span>
											<Icon type="bars" />
											08
										</span>
									}
								>
									<Menu.Item
										key="Y2018M8D31"
										onClick={e => this.handleClick(e, [1, 1.1, '1.1.1'])}
									>
										<Link to={`${match.path}/Y2018M8D31`}>31</Link>
									</Menu.Item>
								</SubMenu>
							</SubMenu>
						</SubMenu>
						<SubMenu
							key="sub2"
							title={
								<span>
									<Icon type="bars" />
									Diary
								</span>
							}
						>
							<Menu.Item key="Study" onClick={e => this.handleClick(e, 2)}>
								<Link to={`${match.path}/studyBrief`}>brief</Link>
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
							<Route exact path={`${match.path}`} component={DiaryFace} />
							<Route path={`${match.path}/diaryFace`} component={DiaryFace} />
							<Route path={`${match.path}/Y2018M8D31`} component={Y2018M8D31} />
							<Route path={`${match.path}/studyBrief`} component={StudyBrief} />
						</Switch>
					</Content>
				</Layout>
			</Layout>
		);
	}
}
export default StudyPage;
