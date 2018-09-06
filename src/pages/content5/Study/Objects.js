import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Session from '../../../components/Session';
import In from '../../../components/Indent';
import XMP from '../../../components/XMP';
class Objects extends Component {
	render() {
		return (
			<Panel title="Object">
				<Session title="Object类型">
					<div>
						ECMAScript中的对象其实就是一组数据和功能的集合。对象可以这样子通过new操作符后跟对象类型名称来创建：
					</div>
					<XMP>
						<In>var o = new Object();</In>
					</XMP>
					<div>同样的如果不给构造函数传递参数，后面的圆括号就可以省略。</div>
					<XMP>
						<In>var o = new Object;</In>
					</XMP>
					<div>
						Object类型是他的所以实例的基础。也就是说Object类型所具有的任何属性和方法也同样存在于更具体的对象中。
					</div>
				</Session>

				<Session title="属性和方法">
					<dl>
						<dt>Obejct的每个实例有以下属性和方法：</dt>
						<dd>- constructor：构造函数，保存着用于创建当前对象的函数。</dd>
						<dd>
							-
							hasOwnProperty(*propertyName*):用于检查给点的属性在当前对象实例（而不是实例的原型中）是否存在。其中，作为参数的属性名(*propertyName*)必须以字符串形式指定。
						</dd>
						<dd>
							- isPrototypeOf(object):用于检查传入的对象是否是另一个对象的原型。
						</dd>

						<dd>
							-
							propertyIsEnumerable(*propertyName*):用于检查给定的属性是否能够使用for-in语句来枚举。作为参数的属性名必须以字符串形式指定。
						</dd>
						<dd>
							-
							toLocaleString():返回对象的字符串表示，该字符串与执行环境的地区对应。
						</dd>
						<dd>- toString():返回对象的字符串表示。</dd>
						<dd>
							-
							valueOf():返回对象的字符串、数值或布尔值表示。通常与toString()方法的返回值相同。这里我要拓展一下：其实valueOf()调用完如果需要以字符串形式展现对象的话（比如arr使用）就会调用toString()函数，所以不是valueOf()和toString()函数相同，而是间接的调用了toString()函数。
						</dd>
					</dl>
				</Session>
			</Panel>
		);
	}
}
export default Objects;
