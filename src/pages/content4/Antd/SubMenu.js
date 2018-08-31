import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import XMP from '../../../components/XMP';
import In from '../../../components/Indent';
import NoteTip from '../../../components/NoteTip';
import Session from '../../../components/Session';
class SubMenus extends Component {
	render() {
		return (
			<Panel title="SubMenu">
				<Session>
					在React中用Antd框架时，有的小伙伴会用到Menu，但是有时候会遇到一些麻烦的问题，下面是我碰到的，希望可以给大家带来一些帮助。
				</Session>
				<Session title="SubMenu嵌套问题">
					<div>首先，问题分析：在SubMenu里面怎么实现重重嵌套结构？</div>
				</Session>
				<Session title="问题解决">
					<div>
						在Antd中，
						<code>Menu.Item</code>
						就意味着有一个链接，但是在这个链接里面是不能有SubMenu的，如果直接塞一个
						<code>SubMenu</code>
						进去 就会报一个“isNotRootMenu”的问题，要想在这个
						<code>Menu.Item</code>
						里面加SubMenu，就要把
						<code>Menu.Item</code>
						改成
						<code>SubMenu</code>
						，然后在里面加 还有下级目录就再套一层
						<code>SubMenu</code>
						才能进到下一级目录。直到没有下级目录了就用
						<code>Menu.Item</code>
						在里面再加一个
						<code>Link</code>
						链接。
					</div>
				</Session>

				<Session title="SubMenu初始化打开">
					<div>
						首先，问题分析：当浏览器重新打开的时候怎么用历史记录打开Menu和SubMenu呢？
					</div>
				</Session>
				<Session title="问题解决">
					<div>
						<dl>
							<dd>
								1.首先，明确思路，先写点击菜单栏目时的函数,传入参数记录点击的栏目的所属位置,
							</dd>
							<dd>2.用cookie保存打开的menu和submenu的对应标记值。</dd>
							<dd>
								3.当下次浏览器打开时，在
								<code>defaultSelectedKeys</code>和<code>defaultOpenKeys</code>
								中传入保存的值。
							</dd>
						</dl>
						<div>那么，下面就开始一步步来。</div>
					</div>
				</Session>
				<Session title="点击函数传入参数，记录位置">
					<div>
						<div>废话不多说，下面上代码：</div>
						<XMP>
							<i>
								&lt;Menu.Item key="CSS简介" onClick=&#123;e =>
								this.handleClick(e, <span className="Number">1</span>
								)}>
							</i>
							<In>
								&lt;Link to= &#123;
								<span className="code-string">
									`$&#123;match.path}/CssBrief`
								</span>
								} >CSS简介&lt;/Link>
							</In>
							<i>&lt;/Menu.Item></i>
						</XMP>
						<div>
							以上是在menu中调用function来传入参数，记录位置的，两个参数一个是事件本身e，后面用来调用e.key记录page的，另一个是
							表示打开的Menu与SubMenu的参数，本来应该是个数组，我后面加了判断把他组成新数组，如果是用在SubMenu上就必须用数组，把所有打开的Menu与SubMenu
							都写上去，这样才会父Menu和子Menu都打开。
						</div>
					</div>
				</Session>
				<Session title="用cookie保存打开的menu和submenu的对应标记值">
					<div>
						<div>
							下面这段代码我写在了
							<code>utils/Page.js</code>
							里面，用来cookie保存与读取：
						</div>
						<XMP>
							<i>
								import Cookies from{' '}
								<span className="code-string">'universal-cookie'</span>;
							</i>
							<i>const cookie = new Cookies();</i>
							<i>class Page&#123;</i>
							<i>// 保存刷新前页面信息</i>
							<i>static savePageInfo(index,sub,page)&#123;</i>
							<In>
								cookie.set(
								<span className="code-string">'pageInfo'</span>
								,JSON.stringify(&#123;index,sub,page}));
							</In>
							<i>}</i>
							<i>//获得刷新前页面信息</i>
							<i>static getPageInfo()&#123;</i>
							<In>
								return cookie.get(
								<span className="code-string">'pageInfo'</span>
								)||&#123;};
							</In>
							<i>}</i>
							<i>}</i>
							<i>export default Page;</i>
						</XMP>
					</div>
				</Session>
				<Session title="当下次浏览器打开时，传入保存的值">
					<div>
						<div>下面这段代码是Menu里的属性配置：</div>
						<XMP>
							<i>//获取打开的Menu数组</i>
							<i>getPageArr = () => &#123;</i>
							<In>let PageArr = [];</In>
							<In>
								if (typeof Page.getPageInfo().sub ==={' '}
								<span className="code-string">'object'</span>) &#123;
							</In>
							<In>
								<In>Page.getPageInfo().sub.map(function(item, idx) &#123;</In>
							</In>
							<In>
								<In>
									PageArr.push(
									<span className="code-string">'sub'</span> + item);
								</In>
							</In>
							<In>});</In>
							<In>} </In>
							<In>else &#123;</In>
							<In>
								<In>
									PageArr.push(
									<span className="code-string">'sub'</span> +
									Page.getPageInfo().sub);
								</In>
							</In>
							<In>&#125;</In>
							<In>return PageArr;</In>
							<i>};</i>
							<i>//以下为在Menu中的代码片段：</i>
							<i>&lt;Menu</i>
							<In>mode="inline"</In>
							<In>defaultSelectedKeys=&#123;[</In>
							<In>
								<In>
									Page.getPageInfo().page ? Page.getPageInfo().page :{' '}
									<span className="code-string">'CSS简介'</span>
								</In>
							</In>
							<In>]}</In>
							<In>defaultOpenKeys=&#123;</In>
							<In>
								<In>
									Page.getPageInfo().sub ? this.getPageArr() : [
									<span className="code-string">'sub1']</span>
								</In>
							</In>
							<In>}</In>
							<In>
								style=&#123;&#123; height:{' '}
								<span className="code-string">'100%'</span>, borderRight:{' '}
								<span className="Number">0</span> }}
							</In>
							<i>&gt;</i>
							<i>&lt;SubMenu</i>
							<In>key="sub1"</In>
							<In>title=&#123;</In>
							<In>&lt;span></In>
							<In>
								<In>&lt;Icon type="bars" /></In>
							</In>
							<In>
								<In>css布局</In>
							</In>
							<In>&lt;/span></In>
							<In>}</In>
							<i>&gt;</i>
							<i>
								&lt;Menu.Item key="FlexBox" onClick=&#123;e =>
								this.handleClick(e, <span className="Number">1</span>
								)}>
							</i>
							<In>
								&lt;Link to=&gt;`$&gt;match.path}/FlexBox`}>FlexBox&lt;/Link>
							</In>
							<i>&lt;/Menu.Item></i>
							<i>&lt;SubMenu</i>
							<In>key="sub1.1"</In>
							<In>title=&gt;</In>
							<In>&lt;span></In>
							<In>
								<In>&lt;Icon type="bars" /></In>
							</In>
							<In>
								<In>CssGrid</In>
							</In>
							<In>&lt;/span></In>
							<i>}</i>
							<i>&gt;</i>
							<i>&lt;Menu.Item</i>
							<In>key="CssGrid基础"</In>
							<In>
								onClick=&#123;e => this.handleClick(e,{' '}
								<span className="Number">[1, 1.1]</span>
								)}
							</In>
							<i>&gt;</i>
							<i>
								&lt;Link
								to=&#123;`$&#123;match.path}/CssGridB`}>CssGrid基础&lt;/Link>
							</i>
							<i>&lt;/Menu.Item></i>
							<i>&lt;Menu.Item</i>
							<In>key="CssGrid进阶"</In>
							<In>
								onClick=&#123;e => this.handleClick(e,{' '}
								<span className="Number">[1, 1.1]</span>
								)}
							</In>
							<i>></i>
							<In>
								<In>
									<In>
										<In>
											&lt;Link
											to=&lt;`$&#123;match.path}/CssGridH`}>CssGrid进阶&lt;/Link>
										</In>
									</In>
								</In>
							</In>
							<In>
								<In>
									<In>&lt;/Menu.Item></In>
								</In>
							</In>
							<In>
								<In>&lt;/SubMenu></In>
							</In>
							<In>&lt;/SubMenu></In>
							<i>&lt;/Menu></i>
						</XMP>
						<NoteTip>
							注意：在defaultOpenKeys中的参数是数组形式，所以传过去数字以后要在函数中重组为数组。
						</NoteTip>
					</div>
				</Session>
			</Panel>
		);
	}
}
export default SubMenus;
