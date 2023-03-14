(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{272:function(e,t,n){"use strict";n.r(t);var s=n(6),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"页面性能优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#页面性能优化"}},[e._v("#")]),e._v(" 页面性能优化")]),e._v(" "),n("p",[e._v("1.0 减少请求数量：合并脚本js和样式表css，CSS Sprites，\n1.1 小的图标用字体图标或和svg图标代替png\n因为字体图标和svg图标是矢量图，代码编写出来的，放大也不会变形，并且渲染速度也快。")]),e._v(" "),n("p",[e._v("1.2 图片的懒加载\n具体步骤：\n　　　　1、页面开始加载时不去发送http请求，而是放置一张占位图\n　　　　2、当页面加载完时，并且图片在可视区域再去请求加载图片信息\n1.3 能用css做的尽量不要用 js操作或者插件做\n1.4 减少cookie的使用\n2.0 降低请求带宽：使用GZip，精简JavaScript，移除重复脚本，图像优化，尽可能减少DOM节点数")]),e._v(" "),n("p",[e._v("3.0 缓存利用：使用CDN，使用外部的JavaScript和CSS，减少DNS查找，添加Expires头，配置ETag，使Ajax可缓存")]),e._v(" "),n("p",[e._v("4.0 页面结构：将样式表放在头部，将脚本放在底部，尽早刷新文档的输出")]),e._v(" "),n("p",[e._v("5.0 代码校验：")]),e._v(" "),n("h2",{attrs:{id:"页面渲染优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#页面渲染优化"}},[e._v("#")]),e._v(" 页面渲染优化")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("1.0 HTML 文档结构层次尽量少，最好不深于 6 层\n2.0 脚本尽量放后边，避免组织页面加载\n3.0 少量首屏样式可以放在便签内\n4.0 样式结构层次尽量简单\n5.0 脚本减少 DOM 操作，减少回流，尽量缓存访问 DOM 的样式信息\n6.0 尽量减少 JS 修改样式，可以通过修改 class 名的方式解决\n7.0 减少 DOM 查找，缓存 DOM 查找结果\n8.0 动画在屏幕外或页面滚动时，尽量停止\n")])])]),n("h2",{attrs:{id:"跨域问题："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#跨域问题："}},[e._v("#")]),e._v(" 跨域问题：")]),e._v(" "),n("p",[n("strong",[e._v("1.0 jsonp")]),n("br"),e._v("\nJSONP 原理 "),n("br"),e._v("\n利用 script 标签没有跨域限制的漏洞，网页可以得到从其他来源动态产生的 JSON 数据。JSONP 请求一定需要对方的服务器做支持才可以。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("script.src = `${url}?${arrs.join('&')}`\n    document.body.appendChild(script)\n")])])]),n("p",[n("strong",[e._v("2.0 CORS")]),n("br"),e._v("\nCORS全称是Cross-Origin Resource Sharing，跨域资源共享，这是浏览器的标准，也算是协议，基本上现代浏览器都支持")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Access-Control-Allow-Origin' '*'\n")])])]),n("p",[n("strong",[e._v("3.0nginx 反向代理")]),n("br"),e._v("\n使用 nginx 反向代理实现跨域，是最简单的跨域方式。只需要修改 nginx 的配置即可解决跨域问题，支持所有浏览器，支持 session，不需要修改任何代码，并且不会影响服务器性能。"),n("br")]),e._v(" "),n("p",[e._v("实现思路：通过 nginx 配置一个代理服务器（域名与 domain1 相同，端口不同）做跳板机，反向代理访问 domain2 接口，并且可以顺便修改 cookie 中 domain 信息，方便当前域 cookie 写入，实现跨域登录。"),n("br")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// proxy服务器\nserver {\n    listen       80;\n    server_name  www.domain1.com;\n    location / {\n        proxy_pass   http://www.domain2.com:8080;  #反向代理\n        proxy_cookie_domain www.domain2.com www.domain1.com; #修改cookie里域名\n        index  index.html index.htm;\n\n        # 当用webpack-dev-server等中间件代理接口访问nignx时，此时无浏览器参与，故没有同源限制，下面的跨域配置可不启用\n        add_header Access-Control-Allow-Origin http://www.domain1.com;  #当前端只跨域不带cookie时，可为*\n        add_header Access-Control-Allow-Credentials true;\n    }\n}\n")])])]),n("p",[n("strong",[e._v("4.0 Node 中间件代理(两次跨域)")]),n("br"),e._v("\n这个也没用过"),n("br"),e._v(" "),n("strong",[e._v("5.0 iframe")]),n("br"),e._v("\n这个就不多说了，没用过")]),e._v(" "),n("h2",{attrs:{id:"理解http之keep-alive"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#理解http之keep-alive"}},[e._v("#")]),e._v(" 理解HTTP之keep-alive")]),e._v(" "),n("p",[e._v("再说keep-alive之前，先说说HTTP的短连接&长连接")]),e._v(" "),n("p",[n("strong",[e._v("短连接")])]),e._v(" "),n("blockquote",[n("p",[e._v("所谓短连接，就是每次请求一个资源就建立连接，请求完成后连接立马关闭。每次请求都经过“创建tcp连接->请求资源->响应资源->释放连接”这样的过程")])]),e._v(" "),n("p",[n("strong",[e._v("长连接")])]),e._v(" "),n("blockquote",[n("p",[e._v("所谓长连接(persistent connection)，就是只建立一次连接，多次资源请求都复用该连接，完成后关闭。要请求一个页面上的十张图，只需要建立一次tcp连接，然后依次请求十张图，等待资源响应，释放连接。")])]),e._v(" "),n("p",[n("strong",[e._v("并行连接")])]),e._v(" "),n("blockquote",[n("p",[e._v("所谓并行连接(multiple connections)，其实就是并发的短连接")])]),e._v(" "),n("p",[n("strong",[e._v("keep-alive")]),e._v("\n具体client和server要从短连接到长连接最简单演变需要做如下改进:"),n("br")]),e._v(" "),n("ul",[n("li",[e._v("client发出的HTTP请求头需要增加Connection:keep-alive字段"),n("br"),e._v('\nWeb-Server端要能识别Connection:keep-alive字段，并且在http的response里指定Connection:keep-alive字段，告诉client，我能提供keep-alive服务，并且"应允"client我暂时不会关闭socket连接'),n("br")]),e._v(" "),n("li",[e._v("在HTTP/1.0里，为了实现client到web-server能支持长连接，必须在HTTP请求头里显示指定\nConnection:keep-alive")]),e._v(" "),n("li",[e._v("在HTTP/1.1里，就默认是开启了keep-alive，要关闭keep-alive需要在HTTP请求头里显示指定"),n("br"),e._v("\nConnection:close")])]),e._v(" "),n("h2",{attrs:{id:"html5-websocket"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#html5-websocket"}},[e._v("#")]),e._v(" HTML5 WebSocket")]),e._v(" "),n("p",[e._v("WebSocket 是 HTML5 开始提供的一种在单个 TCP 连接上进行全双工通讯的协议。"),n("br")]),e._v(" "),n("p",[e._v("WebSocket 使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据。在 WebSocket API 中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输。"),n("br")]),e._v(" "),n("p",[e._v("现在，很多网站为了实现推送技术，所用的技术都是 Ajax 轮询。轮询是在特定的的时间间隔（如每1秒），由浏览器对服务器发出HTTP请求，然后由服务器返回最新的数据给客户端的浏览器。这种传统的模式带来很明显的缺点，即浏览器需要不断的向服务器发出请求，然而HTTP请求可能包含较长的头部，其中真正有效的数据可能只是很小的一部分，显然这样会浪费很多的带宽等资源。"),n("br")]),e._v(" "),n("p",[e._v("HTML5 定义的 WebSocket 协议，能更好的节省服务器资源和带宽，并且能够更实时地进行通讯")]),e._v(" "),n("h2",{attrs:{id:"简单讲解一下-http2-的多路复用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简单讲解一下-http2-的多路复用"}},[e._v("#")]),e._v(" 简单讲解一下 http2 的多路复用")]),e._v(" "),n("p",[e._v("在 HTTP/1 中，每次请求都会建立一次HTTP连接，也就是我们常说的3次握手4次挥手，这个过程在一次请求过程中占用了相当长的时间，即使开启了 Keep-Alive ，解决了多次连接的问题，但是依然有两个效率上的问题：")]),e._v(" "),n("ul",[n("li",[e._v("第一个：串行的文件传输。当请求a文件时，b文件只能等待，等待a连接到服务器、服务器处理文件、服务器返回文件，这三个步骤。我们假设这三步用时都是1秒，那么a文件用时为3秒，b文件传输完成用时为6秒，依此类推。（注：此项计算有一个前提条件，就是浏览器和服务器是单通道传输）")]),e._v(" "),n("li",[e._v("第二个：连接数过多。我们假设Apache设置了最大并发数为300，因为浏览器限制，浏览器发起的最大请求数为6，也就是服务器能承载的最高并发为50，当第51个人访问时，就需要等待前面某个请求处理完成。")])]),e._v(" "),n("p",[n("strong",[e._v("HTTP/2的多路复用就是为了解决上述的两个性能问题。")])]),e._v(" "),n("p",[e._v("在 HTTP/2 中，有两个非常重要的概念，分别是帧（frame）和流（stream）。"),n("br"),e._v("\n帧代表着最小的数据单位，每个帧会标识出该帧属于哪个流，流也就是多个帧组成的数据流。"),n("br"),e._v("\n多路复用，就是在一个 TCP 连接中可以存在多条流。换句话说，也就是可以发送多个请求，对端可以通过帧中的标识知道属于哪个请求。通过这个技术，可以避免 HTTP 旧版本中的队头阻塞问题，极大的提高传输性能。")]),e._v(" "),n("h2",{attrs:{id:"为什么网站的静态资源-css-js-要放在跟html不同的域名上"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为什么网站的静态资源-css-js-要放在跟html不同的域名上"}},[e._v("#")]),e._v(" 为什么网站的静态资源(css/js)要放在跟html不同的域名上")]),e._v(" "),n("p",[e._v("同一域名下并行加载数目有限制6个")])])}),[],!1,null,null,null);t.default=a.exports}}]);