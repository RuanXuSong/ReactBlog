import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Img from '../../../components/Img';
import Session from '../../../components/Session';
import In from '../../../components/Indent';
import TableList from '../../../components/TableList';
import XMP from '../../../components/XMP';
import NoteTip from '../../../components/NoteTip';
class Strings extends Component {
	render() {
		return (
			<Panel title="字符串">
				<Session title="字符串的特点">
					<div>
						EMCAScript中的字符串是不可变得，也就是说，字符串一旦创建，他们的值就不能改变。要改变某个变量保存的字符串，
						首先要销毁原来的字符串，然后再用另一个包含新值的字符串填充该变量。
					</div>
				</Session>
				<Session title="toString()">
					<dl>
						<dd>
							基本所有的类型（数值，布尔值，对象和字符串）都有toString方法，除了null和undefined没有这个方法。
						</dd>
						<dd>
							多数情况下，调用toString()方法不必传递参数。但是其实在toString中还有一个参数：输出数值的基数。通过指定基数，toString()会改变输出的值。而toString()根据基数的不同,可以在输出时被转换为
							不同的数值格式。**注意：默认的（没有参数的）输出值与指定基数10时的输出值相同。
						</dd>
						<dd>
							在toString()里面可以传递参数，如2,8,10,16来表示是用哪种进制的数字来解析字符串
						</dd>
					</dl>
					<XMP>
						<In>
							<In>var num = 10;</In>
							<In>alert(num.toString(1)); //"10"</In>
							<In>alert(num.toString(2)); //"1010"</In>
							<In>alert(num.toString(8)); //"12"</In>
							<In>alert(num.toString(10)); //"10"</In>
							<In>alert(num.toString(16)); //"a"</In>
						</In>
					</XMP>
				</Session>

				<Session title="String()">
					<div>下面是Map实例：</div>
					<dl>
						<dt>String遵循以下转换规则：</dt>
						<dd>
							如果值有toString()方法，则调用该方法（没有参数）并返回相应的结果。
						</dd>
						<dd>- 如果值是null，则返回“null”</dd>
						<dd>- 如果值是undefined，则返回“undefined”</dd>
					</dl>
					<NoteTip>
						其实还有一种方法可以得到字符串：
						就是使用加号操作符把它和字符串“”加在一起。
					</NoteTip>
				</Session>
			</Panel>
		);
	}
}
export default Strings;
