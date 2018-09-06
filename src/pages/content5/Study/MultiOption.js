import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Session from '../../../components/Session';

class MultiOption extends Component {
	render() {
		return (
			<Panel title="乘性操作符">
				<Session title="乘法（*）">
					<dl>
						<dt>乘法操作符注意点</dt>
						<dd>1. 如果有一个操作数为NaN，结果为NaN。</dd>
						<dd>2. 如果Infinity与0相乘，结果是NaN。</dd>
						<dd>
							3.
							如果Infinity和非0数值相乘，则结果为Infinity或-Infinity，取决于有符号操作的符号。
						</dd>
						<dd>4. Infinity与Infinity相乘，还是Infinity</dd>
						<dd>
							5.
							如果有一个操作数不是数值，则在后台调用Number()将其转为数值，在应用上述规则。
						</dd>
						<dd>6. 乘积超过数值表示范围，则返回Infinity或-Infinity。</dd>
					</dl>
				</Session>

				<Session title="除法（/）">
					<dl>
						<dt>除法操作符注意点</dt>
						<dd>1. 如果有一个操作数为NaN，结果为NaN。</dd>
						<dd>2. 如果Infinity被Infinity除，结果是NaN。</dd>
						<dd>3. 如果0被0除，结果为NaN</dd>
						<dd>4. 非0有限数被0除，结果为Infinity或-Infinity，取决于符号</dd>
						<dd>
							5.
							如果有一个操作数不是数值，则在后台调用Number()将其转为数值，在应用上述规则。
						</dd>
					</dl>
				</Session>

				<Session title="求模（%）">
					<dl>
						<dt>乘法操作符注意点</dt>
						<dd>1. 如果操作数都是数值，执行常规除法计算，返回除的余数</dd>
						<dd>2. 如果被除数是无穷大值，除数是有限大的数值，结果为NaN</dd>
						<dd>3. 被除数有限大而除数是0，结果NaN</dd>
						<dd>4. Infinity被Infinity除，结果NaN</dd>
						<dd>5. 被除数有限大，除数无穷大，结果是被除数</dd>
						<dd>6. 被除数为0，结果为0</dd>
						<dd>
							7.
							如果有一个操作数不是数值，则在后台调用Number()将其转为数值，在应用上述规则。
						</dd>
					</dl>
				</Session>
				<Session title="加法（+）">
					<dl>
						<dt>加法操作符注意点</dt>
						<dd>1. Infinity加-Infinity，结果NaN</dd>
						<dd>2. 两个操作数都是字符串，则拼接字符串</dd>
						<dd>
							3.
							如果只有一个是字符串，则将另一个操作数转换为字符串，然后将字符串拼接
						</dd>
					</dl>
				</Session>
				<Session title="减法（-）">
					<dl>
						<dt>加法操作符注意点</dt>
						<dd>1. Infinity减Infinity，结果NaN</dd>
						<dd>2. -Infinity减-Infinity，结果NaN</dd>
						<dd>3. Infinity减-Infinity，结果Infinity</dd>
						<dd>4. -Infinity减Infinity，结果-Infinity</dd>
						<dd>
							5.
							如果有一个操作数不是数值，则在后台调用Number()将其转为数值，在应用上述规则。
						</dd>
					</dl>
				</Session>
			</Panel>
		);
	}
}
export default MultiOption;
