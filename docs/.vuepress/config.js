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
			{ text: 'Home', link: '/' },
			{ text: 'Guide', link: '/guide/' },
			{
				text: 'Languages',
				items: [
					{ text: 'Chinese', link: '/language/chinese' },
					{ text: 'English', link: '/language/english' }
				]
			},
			{ text: 'External', link: 'https://www.baidu.com' },
		],
		sidebar: [
			{
				title: 'node',
				children: [
					'/page-node/node-1/',
					'/page-node/node-2/',
					'/page-node/node-3/',
					'/page-node/node-4/',
					'/page-node/node-5/',
					'/page-node/node-6/',
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
					'/page-2/two/',
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
					'/page-js-fun/function-1/',
				]
			},
			{
				title: '有待学习的',
				children: [
					'/page-a/',
				]
			},
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
					'/page-css/css-2/',
					'/page-css/css-3/',
					'/page-css/BFC/',
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
					'/page-js/js-8/',
					'/page-js/js-9/',
					'/page-js/js-10/',
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
				title: 'es6相关',
				children: [
					'/page-es6/es6-1/',
					'/page-es6/es6-2/',
					'/page-es6/es6-3/',
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
