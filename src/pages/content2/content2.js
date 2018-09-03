import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Page from '../../utils/Page';
import CssBrief from './Css/Brief';
import CssGramb from './Css/CssGramb';
import CssGramh from './Css/CssGramh';
import SassBrief from './Sass/Brief';
import SassGramb from './Sass/SassGramb';
import SassGramh from './Sass/SassGramh';
import FlexBox from './LayOut/FlexBox';
import CssGridB from './LayOut/CssGrid/CssGridB';
import CssGridH from './LayOut/CssGrid/CssGridH';
// import Box from './LayOut/Box';
// import Float from './LayOut/Float';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
class CssPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 'brief'
		};
	}
	handleClick = (e, sub) => {
		this.setState({
			page: e.key
		});
		Page.savePageInfo(2, sub, e.key);
	};
	//获取page打开的menu
	getPageArr = () => {
		let PageArr = [];
		if (typeof Page.getPageInfo().sub === 'object') {
			Page.getPageInfo().sub.forEach(function(element) {
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
							Page.getPageInfo().page ? Page.getPageInfo().page : 'CSS简介'
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
									CSS基础
								</span>
							}
						>
							<Menu.Item key="CSS简介" onClick={e => this.handleClick(e, 1)}>
								<Link to={`${match.path}/CssBrief`}>CSS简介</Link>
							</Menu.Item>
							<Menu.Item
								key="CSS基础语法"
								onClick={e => this.handleClick(e, 1)}
							>
								<Link to={`${match.path}/CssGramb`}>CSS基础语法</Link>
							</Menu.Item>
							<Menu.Item
								key="CSS高级语法"
								onClick={e => this.handleClick(e, 1)}
							>
								<Link to={`${match.path}/CssGramh`}>CSS高级语法</Link>
							</Menu.Item>
						</SubMenu>
						<SubMenu
							key="sub2"
							title={
								<span>
									<Icon type="bars" />
									Sass
								</span>
							}
						>
							<Menu.Item key="Sass简介" onClick={e => this.handleClick(e, 2)}>
								<Link to={`${match.path}/SassBrief`}>Sass简介</Link>
							</Menu.Item>
							<Menu.Item
								key="Sass基础语法"
								onClick={e => this.handleClick(e, 2)}
							>
								<Link to={`${match.path}/SassGramb`}>Sass基础语法</Link>
							</Menu.Item>
							<Menu.Item
								key="Sass高级语法"
								onClick={e => this.handleClick(e, 2)}
							>
								<Link to={`${match.path}/SassGramh`}>Sass高级语法</Link>
							</Menu.Item>
						</SubMenu>
						<SubMenu
							key="sub3"
							title={
								<span>
									<Icon type="bars" />
									css布局
								</span>
							}
						>
							<Menu.Item key="FlexBox" onClick={e => this.handleClick(e, 3)}>
								<Link to={`${match.path}/FlexBox`}>FlexBox</Link>
							</Menu.Item>
							<SubMenu
								key="sub3.1"
								title={
									<span>
										<Icon type="bars" />
										CssGrid
									</span>
								}
							>
								<Menu.Item
									key="CssGrid基础"
									onClick={e => this.handleClick(e, [3, 3.1])}
								>
									<Link to={`${match.path}/CssGridB`}>CssGrid基础</Link>
								</Menu.Item>
								<Menu.Item
									key="CssGrid进阶"
									onClick={e => this.handleClick(e, [3, 3.1])}
								>
									<Link to={`${match.path}/CssGridH`}>CssGrid进阶</Link>
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
							CSS
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
							<Route exact path={`${match.path}`} component={CssBrief} />
							<Route path={`${match.path}/CssBrief`} component={CssBrief} />
							<Route path={`${match.path}/CssGramb`} component={CssGramb} />
							<Route path={`${match.path}/CssGramh`} component={CssGramh} />
							<Route path={`${match.path}/SassBrief`} component={SassBrief} />
							<Route path={`${match.path}/SassGramb`} component={SassGramb} />
							<Route path={`${match.path}/SassGramh`} component={SassGramh} />
							<Route path={`${match.path}/FlexBox`} component={FlexBox} />
							<Route path={`${match.path}/CssGridB`} component={CssGridB} />
							<Route path={`${match.path}/CssGridH`} component={CssGridH} />
							{/* <Route path={`${match.path}/Box`} component={Box}/>
                    <Route path={`${match.path}/Float`} component={Float}/>  
                    */}
						</Switch>
					</Content>
				</Layout>
			</Layout>
		);
	}
}
export default CssPage;
