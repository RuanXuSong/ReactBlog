import React, { Component } from 'react';
import Panel from '../../../../../components/Panel';
import Img from '../../../../../components/Img';
import Session from '../../../../../components/Session';
import In from '../../../../../components/Indent';
import '../../../index.scss';
class Y2018M09D01 extends Component {
	render() {
		return (
			<Panel title="2018/09/01">
				<Session title="今日安排">
					<dl>
						<dd>1.JS红宝书目标50页。</dd>
						<dd>3.检查大海数据大屏</dd>
					</dl>
				</Session>
				<Session title="今日收获">
					<dl>
						<dd>1.MIME类型</dd>
						<dd>2.</dd>
					</dl>
				</Session>
			</Panel>
		);
	}
}
export default Y2018M09D01;
