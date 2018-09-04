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
			<Panel title="一元操作符">
				<Session title="定义">
					<div>
						只能操作一个值的操作符叫做一元操作符。一元操作符是ECMAScript中最简单的操作符。
					</div>
				</Session>

				<Session title="递增和递减操作符">
					<div>前置递增操作：</div>
					<XMP>
						<In>var age = ++29;</In>
					</XMP>
					<div>前置递减操作：</div>
					<XMP>
						<In>var age = --29;</In>
					</XMP>
					<div>
						执行前置操作时，变量的值都是在语句被求值前改变的。（计算机科学领域，这个情况通常被称作副效应）
					</div>
					<dl>
						<dt>前置和后置操作可以用在以下情况：</dt>
						<dd>
							1.
							只有数字的字符串：先将其转换为数字值，再执行加减1的操作，字符串变量变成数值变量。
						</dd>
						<dd>
							2.
							含有除了数字外类型的字符串：将变量的值设置为NaN，字符串变量变成数值变量。
						</dd>
						<dd>
							3.
							布尔值false，先将其转换为0在执行加减1操作，布尔值变量变成数值变量。
						</dd>
						<dd>
							4.
							布尔值true，先将其转换为1在执行加减1操作，布尔值变量变成数值变量。
						</dd>
						<dd>5. 浮点数：执行加减1操作</dd>
						<dd>
							6.
							对象:先调用对象的valueOf方法，然后对齐应用前面的规则，如果是NaN，则在调用toString方法后再应用前述规则，对象变量变成数值变量。
						</dd>
					</dl>
				</Session>
				<Session title="一元加符号">
					<div>
						加号放在数值前面不会对数值产生任何影响，但是该操作符会像Number()一样对这个值执行转换。
					</div>
				</Session>
				<Session title="一元减符号">
					<div>
						主要用于表示负数，转换正负，当应用于非数值的时候会将得到的数值转换为负数。
					</div>
				</Session>
			</Panel>
		);
	}
}
export default OneVar;
