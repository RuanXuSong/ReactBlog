import React, { Component } from 'react';
import Panel from '../../../../components/Panel';
import Session from '../../../../components/Session';
import Img from '../../../../components/Img';
import CssGridCom from '../components/CssGridCom';
import Result from '../../../../components/Result';
import XMP from '../../../../components/XMP';
import NoteTip from '../../../../components/NoteTip';
class CssGridH extends Component {
	handleChangeColumns(value) {
		this.setState({
			columns: value
		});
	}
	handleChangeRows(value) {
		this.setState({
			rows: value
		});
	}
	render() {
		return (
			<Panel title="CssGrid">
				<Session title="CssGrid进阶">
					<blockquote>
						<p>CssGrid有以下进阶属性：</p>
						<p>1.minmax()</p>
						<p>2.repeat()</p>
						<p>3.auto-fit和auto-fill</p>
						<p>4.网格线</p>
						<p>5.grid-area</p>
						<p>6.网格线命名</p>
						<p>7.网格区域命名</p>
						<p>8.对齐</p>
						<p>9.隐式网格</p>
					</blockquote>
					<div>
						还是按习惯先给大家看个整体效果:
						<Result>
							<CssGridCom gridMode="10" />
						</Result>
					</div>
					<Session title="minmax()" sub="true">
						<div>
							可以通过minmax()函数来创建网格轨道的最小或最大尺寸。minmax()函数接受两个参数：第一个参数定义网格轨道的最小值，
							第二个参数定义网格轨道的最大值。可以接受任何长度值，也接受auto值。auto值允许网格轨道基于内容的尺寸拉伸或挤压
						</div>
						<XMP>
							<i>grid-template-rows: minmax(100px, auto);</i>
							<i>grid-template-columns: minmax(auto, 50%) 1fr 3em; </i>
						</XMP>
						<div>
							在这个示例中，第一行的高度最小值是100px，但其最大值为auto，允许行的高度可以变大超过100px。
							第一列设置了最小值为auto，但它的最大值是50%，也就是列的最大宽度不会超过网格容器宽度的50%。
						</div>
						<Result>
							<CssGridCom gridMode="1" />
						</Result>
						<NoteTip>
							这里minmax()的特性是:如果容器长或宽是定值，则会尽可能地取定值，如果长或高是auto，则会自适应跟最小的比例值相等
						</NoteTip>
					</Session>

					<Session title="repeat()" sub="true">
						<div>
							　使用repeat()可以创建重复的网格轨道。这个适用于创建相等尺寸的网格项目和多个网格项目。
							repeat()接受两个参数：第一个参数定义网格轨道应该重复的次数，第二个参数定义每个轨道的尺寸。
						</div>
						<XMP>
							<i>grid-template-rows: repeat(3, 1fr);</i>
							<i>grid-template-columns: 30px repeat(3, 1fr) 30px;</i>
						</XMP>
						<Result>
							<CssGridCom gridMode="1" />
						</Result>
						<div>
							在这个示例中，第一列和最后一列的宽度都是30px，并且它们之间有另列三列，这三列是通过repeat()来创建的，而且每列的列宽是1fr（1fr
							= (网格宽度 - 30px - 30px) / 3）
						</div>
					</Session>

					<Session title="auto-fit和auto-fill" sub="true">
						<div>
							<code>auto-fit</code>和<code>auto-fill</code>
							是一对兄弟，都用在
							<code>repeat()</code>
							里面。repeat的第一个参数是指定重复的次数，有的时候我们希望自动填充次数，充满外面的容器，这时候可以用他们。
						</div>
						<div>
							比如下面这个例子，用的是
							<code>auto-fill</code>
							，记得先把
							<code>grid-gap</code>
							选为0，也会占空间。
						</div>
						<NoteTip>
							这有个小bug，在选了
							<code>auto-fill</code>
							或者
							<code>auto-fit</code>
							以后，如果直接再选另一个时，会无法响应，需要先选其他的值。再选另一个才能选中效果。
						</NoteTip>
						<XMP>
							<i>grid-template-columns:repeat(auto-fill, minmax(50px, 1fr));</i>
						</XMP>
						<Result>
							<CssGridCom gridMode="11" />
						</Result>
						<div>
							可以看到，在选择
							<code>auto-fill</code>
							的时候，grid项目会尽可能多的用grid轨道填满这个容器，其实是宽度和数量相互配合的结果。但是选
							<code>auto-fit</code>
							的时候，就会用最大宽度全部填满容器。
						</div>
					</Session>

					<Session title="网格项目" sub="true">
						<blockquote>
							<p>网格线：</p>
							<p>1.grid-row-start</p>
							<p>2.grid-row-end</p>
							<p>3.grid-column-start</p>
							<p>4.grid-column-end</p>
						</blockquote>
						<div>
							默认值为auto。通过网格线可以定位网格项目。网格线实际上是代表线的开始、结束，两者之间就是网格列或行。
							每条线是从网格轨道开始，网格的网格线从1开始，每条网格线逐步增加1。
						</div>
						<XMP>
							<i>grid-row-start: 2;</i>
							<i>grid-row-end: 3; </i>
							<i>grid-column-start: 2;</i>
							<i>grid-column-end: 3;</i>
						</XMP>
						<div>
							两列三行的网格创建三条列网格线和四条行网格线。项目A就是由行和列的号码重新定位。如果一个网格项目跨度只有一行或一列，
							那么grid-row-end和grid-column-end不是必需的
						</div>
						<Result>
							<CssGridCom gridMode="3" />
						</Result>
					</Session>
					<Session title="网格线缩写" sub="true">
						<blockquote>
							<p>网格线：</p>
							<p>1.grid-row</p>
							<p>2.grid-column</p>
						</blockquote>
						<XMP>
							<i>grid-row: 2;</i>
							<i>grid-column: 3 / 4;</i>
						</XMP>
						<div>默认值为auto</div>
						<div>
							grid-row是grid-row-start和grid-row-end的简写。grid-column是grid-column-start和grid-column-end的简写。如果只提供一个值，则指定了grid-row-start(grid-column-start)值；如果提供两个值，
							第一个值是grid-row-start(grid-column-start)的值，第二个值是grid-row-end(grid-column-end)的值，两者之间必须要用/隔开
						</div>
						<b>span</b>
						<div>关键词span后面紧随数字，表示合并多少个列或行</div>
						<XMP>
							<i>grid-row: 1 / span 3;</i>
							<i>grid-column: span 2;</i>
						</XMP>
						<Result>
							<CssGridCom gridMode="4" />
						</Result>
					</Session>
					<Session title="网格线命名" sub="true">
						<div>
							通过grid-template-rows和grid-template-columns定义网格时，网格线可以被命名。网格线名称也可以设置网格项目位置
						</div>
						<div>
							分配网格线名称必须用方括号[网格线名称]，然后后面紧跟网格轨道的尺寸值。定义网格线名称时需要避免使用规范中出现的关键词，以免导致混乱。
						</div>
						<XMP>
							<i>
								grid-template-rows: [row-1-start] 1fr [row-2-start] 1fr
								[row-2-end];
							</i>
							<i>
								grid-template-columns: [col-1-start] 1fr [col-2-start] 1fr
								[col-3-start] 1fr [col-3-end];
							</i>
						</XMP>
						<Img src="colname.png" alt="colname" />
						<XMP>
							<i>
								grid-template-rows: [row-start row-1-start] 1fr [row-1-end
								row-2-start] 1fr [row-2-end row-end];{' '}
							</i>
							<i>
								grid-template-columns: [col-start] 1fr [col-2-start] 1fr
								[col-3-start] 1fr [col-end];
							</i>
						</XMP>
						<Img src="rowname.png" alt="rowname" />
						<div>
							使用网格线名称设置网格项目位置和使用网格线号码设置网格项目位置类似，引用网格线名称的时候不应该带方括号
						</div>
						<Result>
							<CssGridCom gridMode="0" />
						</Result>
						<NoteTip>
							【注意】：若所有的列线名字都与grid-column中属性名不一样，就会以最后一条线的后面一条不存在的线作为该线，并且如果grid-column中，/后面的线在前面，则改区块会把前面列的所有区块挤开，反着占空间。
						</NoteTip>
						<div>
							使用repeat()函数可以给网格线分配相同的名称。这可以节省一定的时间。
						</div>
						<XMP>
							<i>grid-template-rows: repeat(3, [row-start] 1fr [row-end]);</i>
							<i>
								grid-template-columns: repeat(3, [col-start] 1fr [col-end]);
							</i>
						</XMP>
						<div>
							使用相同的网格线名称可以设置网格项目的位置。网格线的名称和数字之间需要用空格分开,如果用相同的名字命名，系统会自动按顺序加数字
						</div>
						<XMP>
							<i>grid-row: row-start 2 / row-end 3;</i>
							<i>grid-column: col-start / col-start 3;</i>
						</XMP>
						<Result>
							<CssGridCom gridMode="0" />
						</Result>
					</Session>
					<Session title="网格区域命名" sub="true">
						<div>
							像网格线名称一样，网格区域的名称可以使用grid-template-areas属性来命名。引用网格区域名称也可以设置网格项目位置
						</div>
						<XMP>
							<i>
								grid-template-areas: "header header" "content sidebar" "footer
								footer";
							</i>
							<i>grid-template-rows: 150px 1fr 100px;</i>
							<i>grid-template-columns: 1fr 200px;</i>
						</XMP>
						<div>
							<code>grid-area</code>
							不一定用网格线，也可以用网格区域的名称代替。
						</div>
						<NoteTip>
							[注意]:这里的grid-template-areas不能简写，比如 "header
							header"不可简写为"header"
						</NoteTip>
						<Result>
							<CssGridCom gridMode="5" />
						</Result>
						<div>这样就可以像填拼图一样，把div一个个填进grid的area区域中。</div>
					</Session>
					<Session title="隐式网格" sub="true">
						<b>grid-auto-flow</b>
						<div>
							网格默认流方向是row，可以通过grid-auto-flow属性把网格流的方向改变成column
						</div>
						<XMP>
							<i>grid-auto-flow: column</i>
						</XMP>
						<Result>
							<CssGridCom gridMode="6" />
						</Result>
						<b>grid-auto-rows</b>
						<b>grid-auto-columns</b>
						<div>默认值为auto</div>
						<div>
							使用grid-auto-rows和grid-auto-columns属性可以定义隐式的网格,也就是定义默认值
						</div>
						<XMP>
							<i>grid-template-rows:70px;</i>
							<i>grid-template-columns: repeat(2, 1fr);</i>
							<i>grid-auto-rows:140px;</i>
						</XMP>
						<div>
							在上面这个例子中我们只定义了一行（轨道），所以item1和item2的高都是70px。第二行（轨道）自动创建了item3和item4空间。
							grid-auto-rows定义隐式网格中的行（轨道）的大小，因此item3和item4的高度是140px
						</div>
						<Result>
							<CssGridCom gridMode="7" />
						</Result>
					</Session>
					<Session title="隐式命名" sub="true">
						<b>隐式命名网格区域名称</b>
						<div>
							通常可以将网格线命名成任何想命名的名称，如果网格线名称添加-start和-end的后缀，其实也隐式的创建一个网格区域，
							可以用来设置网格项目的位置
						</div>
						<XMP>
							<i>
								grid-template-rows: [outer-start] 1fr [inner-start] 1fr
								[inner-end] 1fr [outer-end];
							</i>
							<i>
								grid-template-columns: [outer-start] 1fr [inner-start] 1fr
								[inner-end] 1fr [outer-end];
							</i>
						</XMP>
						<div>
							在这个示例中，行和列都具有inner-start和inner-end网格线名称，同时也对应的创建一个隐式网格区域名称inner
						</div>
						<XMP>
							<i>grid-area: inner</i>
						</XMP>
						<div>
							网格项目定位可以通过网格区域名称来设置，而不需要使用网格线名称
						</div>
						<Img src="gridArea.png" alt="gridArea" />
						<Result>
							<CssGridCom gridMode="7" />
						</Result>
					</Session>
					<Session title="网格项目层级">
						<div>
							网格项目可以具有层级和堆栈，必要时可能通过z-index属性来指定。
						</div>
						<div>跟position里面的z-index一样，越大的项目处于越上层</div>
					</Session>
					<Session title="对齐">
						<Session title="网格项目对齐方式" sub="true">
							<b>justify-items</b>
							<div>
								justify-items指定网格项目沿着行轴对齐方式,应用在网格容器上。
							</div>
							<b>justify-self</b>
							<div>
								justify-self指定网格项目沿着行轴对齐方式,应用在网格项目自身上。
							</div>
							<b>align-items</b>
							<div>
								align-items指定网格项目沿着列轴对齐方式,应用在网格容器上。
							</div>
							<b>align-self</b>
							<div>
								align-self指定网格项目沿着列轴对齐方式,应用在网格项目自身上。
							</div>
							<div>
								这些值接受以下属性:
								<code>
									auto | normal | start | end | center | stretch | baseline |
									first baseline | last baseline
								</code>
							</div>
							<Result>
								<CssGridCom gridMode="8" />
							</Result>
						</Session>
						<Session title="网格轨道对齐方式" sub="true">
							<b>align-content</b>
							<div>align-content指定网格轨道沿着列轴对齐方式。</div>
							<b>justify-content</b>
							<div>justify-self指定网格轨道沿着行轴对齐方式。</div>
							<div>
								这些值接受以下属性:
								<code>
									normal | start | end | center | stretch | space-around |
									space-between | space-evenly | baseline | first baseline |
									last baseline
								</code>
							</div>
							<div>
								想看到下面的
								<code>align-content</code>和<code>justify-content</code>
								的效果需要将
								<code>grid-template-columns</code>和
								<code>grid-template-rows</code>
								改为"50px 50px 50px".并将width，height改为300px或500px;
							</div>
							<Result>
								<CssGridCom gridMode="9" />
							</Result>
						</Session>
					</Session>
				</Session>
			</Panel>
		);
	}
}
export default CssGridH;
