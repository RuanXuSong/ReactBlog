import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Img from '../../../components/Img';
import Session from '../../../components/Session';
import In from '../../../components/Indent';
import '../index.scss';
class DiaryFace extends Component {
	render() {
		return (
			<Panel title="日记">
				<Session title="Diary">
					<div className="diary-face">
						<Img src="diary_bg.jpg" alt="react" />
						<div className="diary-box">
							<div>十里寒塘</div>
							<In>烟花半醒</In>
						</div>
					</div>
				</Session>
			</Panel>
		);
	}
}
export default DiaryFace;
