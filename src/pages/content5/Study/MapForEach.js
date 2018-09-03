import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Img from '../../../components/Img';
import Session from '../../../components/Session';
import In from '../../../components/Indent';
import TableList from '../../../components/TableList';
import XMP from '../../../components/XMP';
import NoteTip from '../../../components/NoteTip';
class MapForEach extends Component {
	render() {
		return (
			<Panel title="Map和forEach">
				<Session title="用法区别">
					<dl>
						<dd>
							map最后会新建一个数组，所以必须在回调函数中为每个array对象return一个对应的数或结果
						</dd>
						<dd>
							foreach不要求必须在每一项得到结果，所以甚至可以只用
							<code>console.log</code>。
						</dd>
					</dl>
				</Session>
				<Session title="共同点">
					<dl>
						<dd>都是循环遍历数组中的每一项</dd>
						<dd>
							forEach和map方法里每次执行匿名函数都支持3个参数，参数分别是item（当前每一项）、index（索引值）、arr（原数组）
						</dd>
						<dd>匿名函数中的this都是指向window</dd>
						<dd>只能遍历数组</dd>
					</dl>
				</Session>
				<NoteTip>
					注意：Map不会检测空数组，forEach也不会对空数组调用回调函数
				</NoteTip>
				<Session title="实例">
					<div>下面是Map实例：</div>
					<XMP>
						<In>
							<In>var array1 = [1, 4, 9, 16]; </In>
							<In>const map1 =array1.map(x => x * 2);</In>
							<In>console.log(map1);</In>
						</In>
					</XMP>
					<div>
						以上的结果为
						<code>Array [2, 8, 18, 32]</code>
					</div>
					<div>下面是forEach实例:</div>
					<XMP>
						<In>
							<In>var array1 = [1, 4, 9, 16]; </In>
							<In>
								const map1 =array1.forEach(element => &#123;
								<In>console.log(element); </In>
								});
							</In>
						</In>
					</XMP>
					<div>
						以上的结果为
						<code>1 4 9 16</code>
					</div>
				</Session>
			</Panel>
		);
	}
}
export default MapForEach;
