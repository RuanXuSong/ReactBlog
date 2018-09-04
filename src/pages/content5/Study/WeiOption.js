import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Img from '../../../components/Img';
import Session from '../../../components/Session';
import In from '../../../components/Indent';
import TableList from '../../../components/TableList';
import XMP from '../../../components/XMP';
import NoteTip from '../../../components/NoteTip';
class OneVar extends Component {
	render() {
		return (
			<Panel title="位操作符">
				<Session title="要求">
					<div>
						<p>
							总共有32位二进制数，位操作要在这个基础上进行。最左边位是符号位，0为正，1为负。
						</p>
					</div>
				</Session>

				<Session title="求负数的二进制">
					<dl>
						<dt>步骤：</dt>
						<dd>1. 就要先要求18的二进制码（32位），</dd>
						<dd>2. 再对二进制求反码，即将0替换为1,0替换为1；</dd>
						<dd>3. 把得到的二进制反码加1。</dd>
					</dl>
				</Session>
				<Session title="按位非操作(NOT)">
					<XMP>
						<In>var num1 = 25; //二进制 27个0 11001</In>
						<In>var num2 =-num1; //二进制 27个1 00110</In>
						<In>alert(num2) //-26（这里因为少加了补码的1所以更小）</In>
					</XMP>
					<div>
						也就是说，按位非是将num1先求负，再加1,而按位非是最底层执行操作，所以速度更快。
					</div>
				</Session>
				<Session title="按位与(\&amp;)">
					<div>将各位二进制对齐。</div>
				</Session>
				<Session title="按位或（|）">
					<div>将各位二进制取或运算。</div>
				</Session>
				<Session title="按位异或">
					<div>两个操作数不同返回1。</div>
				</Session>
				<Session title="左移">
					<div>左移多少位补0多少位</div>
				</Session>
				<Session title="有符号右移(&gt;&gt;)">
					<div>跟左移相反，在左边补0，但是保留符号位不变。</div>
				</Session>
				<Session title="无符号右移(&gt;&gt;&gt;)">
					<div>
						对正数不变，但对负数无符号右移时，由于符号位移动补0，结果变成了正数，而负数以其绝对值的二进制补码形式表示，因此就会导致无符号右移结果非常大。
					</div>
				</Session>
			</Panel>
		);
	}
}
export default OneVar;
