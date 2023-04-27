(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{89:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"http2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http2"}},[t._v("#")]),t._v(" http2")]),t._v(" "),a("p",[t._v("新特性：\n1.0 二进制帧层 "),a("br"),t._v("\n2.0 流,消息，帧")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("流：已经建立的连接之间双向流动的字节，它能携带一个至多个消息。\n消息：一个完整的帧序列，它映射到逻辑的请求和响应消息。\n帧：在HTTP/2通信的最小单元。每个桢包括一个帧头，里面有个很小标志，来区别是属于哪个流。\n\n")])])]),a("p",[t._v("3.0 请求和响应的多路复用"),a("br"),t._v(" "),a("a",{attrs:{href:"https://www.jianshu.com/p/67c541a421f9",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考链接"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"_1-0-http1-0-和-http1-1-相比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-0-http1-0-和-http1-1-相比"}},[t._v("#")]),t._v(" 1.0 HTTP1.0 和 HTTP1.1 相比")]),t._v(" "),a("p",[t._v("HTTP1.1 是当前使用最为广泛的HTTP协议")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("   HTTP1.0 定义了三种请求方法： GET, POST 和 HEAD 方法。HTTP1.1 新增了六种请求方法：OPTIONS、PUT、PATCH、DELETE、TRACE 和 CONNECT 方法。\n   缓存处理：在HTTP1.0中主要使用header里的If-Modified-Since,Expires来做为缓存判断的标准，HTTP1.1则引入了更多的缓存控制策略例如Entity tag，If-Unmodified-Since, If-Match, If-None-Match等更多可供选择的缓存头来控制缓存策略。\n   带宽优化及网络连接的使用：HTTP1.0中，存在一些浪费带宽的现象，例如客户端只是需要某个对象的一部分，而服务器却将整个对象送过来了，并且不支持断点续传功能，HTTP1.1则在请求头引入了range头域，它允许只请求资源的某个部分，即返回码是206（Partial Content），这样就方便了开发者自由的选择以便于充分利用带宽和连接。\n   错误通知的管理：在HTTP1.1中新增了24个错误状态响应码，如409（Conflict）表示请求的资源与资源的当前状态发生冲突；410（Gone）表示服务器上的某个资源被永久性的删除。\n   Host头处理：在HTTP1.0中认为每台服务器都绑定一个唯一的IP地址，因此，请求消息中的URL并没有传递主机名（hostname）。但随着虚拟主机技术的发展，在一台物理服务器上可以存在多个虚拟主机（Multi-homed Web Servers），并且它们共享一个IP地址。HTTP1.1的请求消息和响应消息都应支持Host头域，且请求消息中如果没有Host头域会报告一个错误（400 Bad Request）。\n   长连接：HTTP 1.1支持长连接（PersistentConnection）和请求的流水线（Pipelining）处理，在一个TCP连接上可以传送多个HTTP请求和响应，减少了建立和关闭连接的消耗和延迟，在HTTP1.1中默认开启Connection： keep-alive，一定程度上弥补了HTTP1.0每次请求都要创建连接的缺点。通过设置http的请求头部和应答头部，保证本次数据请求结束之后，下一次请求仍可以重用这一通道，避免重新握手。\n")])])]),a("h2",{attrs:{id:"_2-0-http2-0-和-http1-x-相比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-http2-0-和-http1-x-相比"}},[t._v("#")]),t._v(" 2.0  HTTP2.0 和 HTTP1.X 相比")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("   新的二进制格式（Binary Format）：HTTP1.x的解析是基于文本。基于文本协议的格式解析存在天然缺陷，文本的表现形式有多样性，要做到健壮性考虑的场景必然很多，二进制则不同，只认0和1的组合。基于这种考虑HTTP2.0的协议解析决定采用二进制格式，实现方便且健壮。\n   多路复用（MultiPlexing）：即连接共享，即每一个request都是是用作连接共享机制的。一个request对应一个id，这样一个连接上可以有多个request，每个连接的request可以随机的混杂在一起，接收方可以根据request的 id将request再归属到各自不同的服务端请求里面。\n   header压缩：如上文中所言，对前面提到过HTTP1.x的header带有大量信息，而且每次都要重复发送，HTTP2.0使用了专门为首部压缩而设计的 HPACK 算法，使用encoder来减少需要传输的header大小，通讯双方各自cache一份header fields表，既避免了重复header的传输，又减小了需要传输的大小。\n   服务端推送（server push）：服务端推送能把客户端所需要的资源伴随着index.html一起发送到客户端，省去了客户端重复请求的步骤。正因为没有发起请求，建立连接等操作，所以静态资源通过服务端推送的方式可以极大地提升速度。例如我的网页有一个sytle.css的请求，在客户端收到sytle.css数据的同时，服务端会将sytle.js的文件推送给客户端，当客户端再次尝试获取sytle.js时就可以直接从缓存中获取到，不用再发请求了。\n")])])]),a("h2",{attrs:{id:"_3-0-https-与-http-相比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-0-https-与-http-相比"}},[t._v("#")]),t._v(" 3.0 HTTPS 与 HTTP 相比")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("   HTTPS协议需要到CA申请证书，一般免费证书很少，需要交费。\n   HTTP协议运行在TCP之上，所有传输的内容都是明文，HTTPS运行在SSL/TLS之上，SSL/TLS运行在TCP之上，所有传输的内容都经过加密的。\n   HTTP和HTTPS使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。\n   HTTPS可以有效的防止运营商劫持，解决了防劫持的一个大问题。\n")])])]),a("h2",{attrs:{id:"_4-0-如何从http切换到https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-0-如何从http切换到https"}},[t._v("#")]),t._v(" 4.0 如何从HTTP切换到HTTPS")]),t._v(" "),a("p",[t._v("（1）需要将页面中所有的链接（例如js,css,图片等链接）都由http改为https")]),t._v(" "),a("p",[t._v("（2）一般情况下会建议保留HTTP，所以在切换的时候可以做HTTP和HTTPS的兼容，具体实现方式是：去掉页面连接中的http头部，这样恶意自动匹配HTTP头和HTTPS头\n(去掉http头部让浏览器自动匹配http或者https)")]),t._v(" "),a("h2",{attrs:{id:"_5-0-浏览器同源策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-0-浏览器同源策略"}},[t._v("#")]),t._v(" 5.0 浏览器同源策略")]),t._v(" "),a("p",[t._v("浏览器安全的基石是“同源策略”（same-origin policy）。所谓“同源”指的是“三个相同”：\n"),a("br"),t._v("\n协议相同\n"),a("br"),t._v("\n域名相同\n"),a("br"),t._v("\n端口相同")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("http://www.baidu.com/dir/page.html\n    协议 http://\n    域名 www.baidu.com\n    端口： 80 默认都是80 \nhttp://www.baidu.com/dir2/page.html 同源\n\nhttp://baidu.com/dir2/page.html 不同源：域名不同\n\nhttps://www.baidu.com/dir/page.html 不同源：协议不同\n\nhttp://www.baidu.com:81/dir2/page.html 不同源：端口不同\n")])])]),a("p",[t._v("同源策略的目的是为了保证用户信息的安全，防止恶意的网站窃取数据。不同源的客户端脚本在没有明确授权的情况下，不能读写对方的资源。\n"),a("br")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("如果非同源，共有三种行为受到限制：\n\n    Cookie、LocalStorage和IndexDB无法读取\n    DOM无法获得\n    AJAX请求不能发送\n\n不受同源策略限制的：\n\n    页面中的链接，重定向以及表单提交\n    跨域资源的引入是可以的，但是js不能读写加载的内容。\n    （如<script src=...><\/script>，<img>，<link>，<iframe>）\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);