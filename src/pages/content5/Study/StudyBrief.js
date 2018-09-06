import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Session from '../../../components/Session';
class StudyBrief extends Component {
	render() {
		return (
			<Panel title="学习">
				<Session title="Study">
					<div>本栏目用于收集学习的资料用于共享。</div>
				</Session>
			</Panel>
		);
	}
}
export default StudyBrief;
