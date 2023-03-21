module.exports = {
	title:'速度至上',
	description: 'Reggie Study Notes',
	head: [
		['link', { rel: 'icon', href: '/img/logo.ico' }],
		['link', { rel: 'manifest', href: '/manifest.json' }],
	],
	dest: './docs/.vuepress/dist',
	base: '/dist/',// 打包的时候用 设置站点根路径/vuepress/dist/
	ga: '',
	evergreen: true,
	themeConfig: {
		nav: [
			{ text: '首页', link: '/' },
			{
				text: '文档',
				items: [
					{
						text:'框架文档',
						items:[
							{ text: 'vue2', link: 'https://v2.cn.vuejs.org/' },
							{ text: 'vue3', link: 'https://cn.vuejs.org/' },
							{ text: 'element', link: 'https://element.eleme.io/#/zh-CN/component/installation' },
							{ text: 'element-plus', link: 'https://doc-archive.element-plus.org/#/zh-CN/component/installation' },
							{ text: 'axios', link: 'https://www.axios-http.cn/' },
							{ text: 'webpack', link: 'https://www.webpackjs.com/' },
							{ text: 'vite', link: 'https://vitejs.cn/' },
							{ text: 'vuex', link: 'https://vuex.vuejs.org/zh/' },
							{ text: 'pinia', link: 'https://pinia.vuejs.org/zh/' },
							{ text: 'Lodash 中文文档', link: 'https://www.lodashjs.com/' },
							{ text: '微信官方文档', link: 'https://developers.weixin.qq.com/doc/' },
							{ text: 'uniapp', link: 'https://uniapp.dcloud.net.cn/' },
							{ text: 'jQueryApi', link: 'https://jquery.cuishifeng.cn/' },
							{ text: 'Electron', link: 'https://www.electronjs.org/zh/docs/latest/' },
						]
					},
					{
						text:'node相关',
						items:[
							{ text: 'node', link: 'https://nodejs.org/en/' },
							{ text: 'express', link: 'https://www.expressjs.com.cn/' },
							{ text: 'koa', link: 'https://koa.bootcss.com/' },
							{ text: 'egg', link: 'https://www.eggjs.org/zh-CN/intro/egg-and-koa' },
							{ text: 'npm', link: 'https://www.npmjs.com/' },
						]
					},
					{
						text:'文档教程',
						items:[
							{ text: 'Devdocs有可能是全球最全的文档库', link: 'https://devdocs.io/' },
							{ text: 'Overapi', link: 'https://overapi.com/' },
							{ text: 'JavaScript 标准参考教程', link: 'http://javascript.ruanyifeng.com/' },
							{ text: 'es6', link: 'https://es6.ruanyifeng.com/' },
							{ text: 'MND在线文档', link: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript' },
							{ text: 'JavaScript Promise迷你书（中文版）', link: 'http://liubin.org/promises-book/#introductiono' },

						]
					},
					{
						text:'可视化',
						items:[
							{ text: 'Echarts', link: 'https://echarts.apache.org/zh/index.html' },
							{ text: 'AntV', link: 'https://antv.gitee.io/zh' },
						]
					},

				]
			},
			{
				text: '工具',
				items: [
					{ text: '实用工具',
						items: [
							{ text: '可以在线看代码流程的网站：loupe', link: 'JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7' },
							{ text: '在线JSON解析', link: 'https://www.json.cn/' },
							{ text: '在线MD5编码工具', link: 'https://www.zxgj.cn/g/md5' },
							{ text: '在线JWT解码工具', link: 'http://jwt.calebb.net/' },
							{ text: '在线JS代码格式化', link: 'https://prettier.io/playground/' },
						]
					},
					{ text: '创作必备',
						items: [
							{ text: '在线markdown排版1', link: 'https://mdnice.com/?category=frontend' },
							{ text: '在线markdown排版2', link: 'http://tools.jb51.net/static/markdown/' },
							{ text: '在线markdown排版3', link: 'http://md.aclickall.com/' },
						]
					},
					{ text: 'css相关',
						items: [
							{ text: 'w3c教程', link: 'https://www.w3school.com.cn/css/index.asp' },
							{ text: '提供了CSS相关属性的浏览器兼容表', link: 'https://caniuse.com/' },
							{ text: 'sass官网', link: 'https://www.sass.hk/' },
							{ text: 'SCSS在线转CSS', link: 'https://www.sassmeister.com/' },
						]
					},
				]
			},
			// { text: 'External', link: 'https://github.com/lieaiwen' },
		],
		sidebar: [
			{
				title: 'HTML',
				children: [
					'/page-html/html-1/',
				]
			},
			{
				title: 'CSS',
				children: [
					'/page-css/css-1/',
					'/page-css/BFC/',
					'/page-css/css-2/',
					'/page-css/css-3/',

				]
			},
			{
				title: 'js知识点',
				// collapsable: false,
				children: [
					'/page-1/one/',
					'/page-1/oneArray/',
					'/page-1/three/',
					'/page-1/two/',
					'/page-1/Boolean/',
					'/page-1/Object/',
					'/page-1/RegExp/',
					'/page-1/Date/',
					'/page-1/Math/',
					'/page-1/Number/',
					'/page-1/String/',
					'/page-1/Error/',
					'/page-1/Global/',
					'/page-1/Class/',
				]
			},
			{
				title: 'js杂项知识点',
				children: [
					'/page-2/one/',
					'/page-2/console/',
					'/page-2/model/',
					'/page-2/actionScope/',
					'/page-2/variable/',
					'/page-2/json-server/',
					'/page-2/js-7/',
					'/page-2/js-8/',
					'/page-2/js-9/',
					'/page-2/js-10/',
					'/page-2/js-11/',
					'/page-2/js-12/',
					'/page-2/js-13/',
					'/page-2/two/',
				]
			},
			{
				title: 'es6+',
				children: [
					'/page-es6/es6-1/',
					'/page-es6/es6-2/',
					'/page-es6/es6-3/',
				]
			},
			{
				title: 'js设计模式',
				children: [
					'/page-js-design/design-0/',
					'/page-js-design/design-1/',
					'/page-js-design/design-2/',
					'/page-js-design/design-3/',
					'/page-js-design/design-4/',
					'/page-js-design/design-5/',
					'/page-js-design/design-6/',
					'/page-js-design/design-7/',
					'/page-js-design/design-8/',
					'/page-js-design/design-9/',
					'/page-js-design/design-10/',
					'/page-js-design/design-11/',
				]
			},
			{
				title: 'js函数（方法）',
				// collapsable: false,
				children: [
					'/page-js-fun/fun-sleep/',
					// '/page-js-fun/function-1/',
				]
			},
			{
				title: '有待学习的',
				children: [
					'/page-a/',
				]
			},
			{
				title: 'JS',
				children: [
					'/page-js/js-0/',
					'/page-js/js-1/',
					'/page-js/js-2/',
					'/page-js/js-3/',
					'/page-js/js-4/',
					'/page-js/js-5/',
					'/page-js/js-6/',
					'/page-js/js-9/',
					'/page-js/js-11/',
				]
			},
			{
				title: 'VUE',
				children: [
					'/page-vue/vue-1/',
					'/page-vue/vue-2/',
					'/page-vue/vue-3/',
					'/page-vue/vue-4/',
					'/page-vue/vue-5/',
					'/page-vue/vue-6/',
				]
			},
			{
				title: 'VUE3',
				children: [
					'/page-vue3/vue3-1/',
				]
			},
			// { 先隐藏掉
			// 	title: '排序',
			// 	children: [
			// 		'/page-sort/sort-1/',
			// 		'/page-sort/sort-2/',
			// 		'/page-sort/sort-3/',
			// 		'/page-sort/sort-4/',
			// 		'/page-sort/sort-5/',
			// 		'/page-sort/sort-6/',
			// 		'/page-sort/sort-7/',
			// 		'/page-sort/sort-8/',
			// 		'/page-sort/sort-9/',
			// 		'/page-sort/sort-10/',
			// 	]
			// },
			{
				title: 'HTTP',
				children: [
					'/page-http/http-1/',
					'/page-http/http-2/',
					'/page-http/http-3/',
					'/page-http/http-4/',
				]
			},

            {
                title: 'Git',
                children: [
                    '/page-git/',
                ]
            },
            {
                title: 'webpack',
                children: [
                    '/page-webpack/',
                ]
            },
			{
				title: 'node',
				children: [
					'/page-node/node-1/',
					'/page-node/node-2/',
					'/page-node/node-3/',
					'/page-node/node-4/',
					'/page-node/node-5/',
					'/page-node/node-6/',
					'/page-node/zz-template/',
				]
			},
			{
				title: 'mysql',
				children: [
					'/page-mysql/mysql-1/',
					'/page-mysql/mysql-2/',
					'/page-mysql/mysql-3/',
				]
			},
			{
				title: '数据结构与算法',
				children: [
					'/page-structure/structure-1/',
				]
			},
			{
				title: 'javaScript函数式编程（美）',
				children: [
					'/page-js-function/function-1/',
				]
			},
			{
				title: '英语单词',
				children: [
					'/page-english/english-1/',
				]
			},
		],
		displayAllHeaders: false // 默认值：false // 侧边栏不显示标题
	}
}
