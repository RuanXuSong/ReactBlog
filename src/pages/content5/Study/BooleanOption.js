import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Img from '../../../components/Img';
import Session from '../../../components/Session';
import In from '../../../components/Indent';
import TableList from '../../../components/TableList';
import XMP from '../../../components/XMP';
import NoteTip from '../../../components/NoteTip';
class BooleanOption extends Component {
	render() {
		return (
			<Panel title="布尔操作符">
				<Session title="逻辑非">
					<div>
						<p>
							逻辑非由一个叹号（!）表示，可以应用于任何值。先执行Boolean()转型函数，再进行求反。
						</p>
					</div>
				</Session>

				<Session title="逻辑与">
					<dl>
						<dt>
							逻辑与在有一个操作数不为布尔值时就不一定返回布尔值，遵循以下规则：
						</dt>
						<dd>如果第一个操作数是对象，则返回第二个操作数。</dd>
						<dd>
							如果第二个操作数为对象，则只有在第一个操作数求值结果为true的情况下，返回该对象。
						</dd>
						<dd>如果两个操作数都是对象，返回第二个操作数</dd>
						<dd>如果有一个操作数为null，返回null</dd>
						<dd>如果有一个操作数为NaN，返回NaN</dd>
						<dd>如果有一个操作数是undefined，则返回undefined</dd>
					</dl>
					<div>
						逻辑与操作属于短路操作，如果第一个操作数能返回结果，就不会对第二个操作数执行求值。对于逻辑与而言，如果第一个值为false，结果都不可能为true。也就会跳过第二个语句。
					</div>
				</Session>

				<Session title="逻辑或（||）">
					<dl>
						<dt>
							跟逻辑与相似，如果有一个操作符不是布尔值，也不一定返回布尔值，以下规则：
						</dt>
						<dd>- 如果第一个操作数是对象，则返回第一个操作数。</dd>
						<dd>- 第一个操作数求值结果为false的情况下，返回第二个操作数。</dd>
						<dd>- 如果两个操作数都是对象，返回第一个操作数</dd>
						<dd>如果有一个操作数为null，返回null</dd>
						<dd>如果有一个操作数为NaN，返回NaN</dd>
						<dd>如果有一个操作数是undefined，则返回undefined</dd>
					</dl>
					<div>
						逻辑或操作也属于短路操作，如果第一个操作数能返回结果，就不会对第二个操作数执行求值。对于逻辑与而言，如果第一个值为true，也就会跳过第二个语句。
					</div>
					<b>因此，我们可以用它来避免为变量赋null或undefined值。</b>
					<div>例如：</div>
					<XMP>
						<In>var myObject = preferraedObject || backupObject;</In>
					</XMP>
					<div>
						在这个例子中，变量myObject将被赋予等号后面两个值中的一个，preferraedObject优先赋给myobject，而backupObject则作为preferraedObject不存在的时候赋给后备值。
					</div>
				</Session>
			</Panel>
		);
	}
}
export default BooleanOption;
