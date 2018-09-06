import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Session from '../../../components/Session';
import TableList from '../../../components/TableList';
const columns = [
	{
		title: '文件后缀',
		dataIndex: 'backword',
		key: 'backword'
	},
	{
		title: 'Mime类型',
		dataIndex: 'mimetype',
		key: 'mimetype'
	},
	{
		title: '说明',
		dataIndex: 'instruction',
		key: 'instruction'
	}
];

const data = [
	{
		key: '1',
		backword: '.flv',
		mimetype: 'flv/flv-flash',
		instruction: '在线播放'
	},
	{
		key: '2',
		backword: '.html或.htm',
		mimetype: 'text/html',
		instruction: '超文本标记语言文本'
	},
	{
		key: '3',
		backword: '.rtf',
		mimetype: 'application/rtf',
		instruction: 'RTF文本'
	},
	{
		key: '4',
		backword: '.gif',
		mimetype: 'image/gif',
		instruction: 'GIF图形'
	},
	{
		key: '5',
		backword: '.jpeg或.jpg',
		mimetype: 'image/jpeg',
		instruction: 'JPEG图形'
	},
	{
		key: '6',
		backword: '.au',
		mimetype: 'audio/basic',
		instruction: 'au声音文件'
	},
	{
		key: '7',
		backword: '.mid或.midi',
		mimetype: 'audio/midi或audio/x-midi',
		instruction: 'MIDI音乐文件'
	},
	{
		key: '8',
		backword: '.ra或.ram或.rm',
		mimetype: 'audio/x-pn-realaudio',
		instruction: 'RealAudio音乐文件'
	},
	{
		key: '9',
		backword: '.mpg或.mpeg或.mp3 ',
		mimetype: 'video/mpeg',
		instruction: 'MPEG文件'
	},
	{
		key: '10',
		backword: '.avi',
		mimetype: 'video/x-msvideo',
		instruction: 'AVI文件'
	},
	{
		key: '11',
		backword: '.gz',
		mimetype: 'application/x-gzip',
		instruction: 'GZIP文件'
	},
	{
		key: '12',
		backword: '.tar',
		mimetype: 'application/x-tar',
		instruction: 'TAR文件'
	},
	{
		key: '13',
		backword: '.exe',
		mimetype: 'application/octet-stream',
		instruction: '下载文件类型'
	},
	{
		key: '14',
		backword: '.rmvb',
		mimetype: 'video/vnd.rn-realvideo',
		instruction: '在线播放'
	},
	{
		key: '15',
		backword: '.txt',
		mimetype: 'text/plain',
		instruction: '普通文本'
	},
	{
		key: '16',
		backword: '.mrp',
		mimetype: 'application/octet-stream',
		instruction: 'MRP文件（国内普遍的手机）'
	},
	{
		key: '17',
		backword: '.ipa',
		mimetype: 'application/iphone-package-archive',
		instruction: 'IPA文件(IPHONE)'
	},
	{
		key: '18',
		backword: '.deb',
		mimetype: 'application/x-debian-package-archive',
		instruction: 'DED文件(IPHONE)'
	},
	{
		key: '19',
		backword: '.apk',
		mimetype: 'application/vnd.android.package-archive',
		instruction: 'APK文件(安卓系统)'
	},
	{
		key: '20',
		backword: '.cab',
		mimetype: 'application/vnd.cab-com-archive',
		instruction: 'CAB文件(Windows Mobile)'
	},
	{
		key: '21',
		backword: '.xap',
		mimetype: 'application/x-silverlight-app',
		instruction: 'XAP文件(Windows Phone 7)'
	},
	{
		key: '22',
		backword: '.sis',
		mimetype: 'application/vnd.symbian.install-archive',
		instruction: 'SIS文件(symbian平台)'
	},
	{
		key: '23',
		backword: '.jar',
		mimetype: 'application/java-archive',
		instruction: 'JAR文件(JAVA平台手机通用格式)'
	},
	{
		key: '24',
		backword: '.jad',
		mimetype: 'text/vnd.sun.j2me.app-descriptor',
		instruction: 'JAD文件(JAVA平台手机通用格式)'
	},
	{
		key: '25',
		backword: '.sisx',
		mimetype: 'application/vnd.symbian.epoc/x-sisx-app',
		instruction: 'SISX文件(symbian平台)'
	}
];
class MIME extends Component {
	render() {
		return (
			<Panel title="MIME类型">
				<Session title="MIME类型">
					<dl>
						<dt>MIME类型是什么？</dt>
						<dd>
							MIME(Multipurpose Internet Mail
							Extensions)多用途互联网邮件扩展类型。是设定某种扩展名的文件用一种应用程序来打开的方式类型，
							当该扩展名文件被访问的时候，浏览器会自动使用指定应用程序来打开。
						</dd>
					</dl>
				</Session>
				<Session title="MIME类型有哪些？">
					<TableList columns={columns} data={data} />
				</Session>
			</Panel>
		);
	}
}
export default MIME;
