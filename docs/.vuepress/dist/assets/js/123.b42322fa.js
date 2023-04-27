(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{338:function(t,e,a){"use strict";a.r(e);var s=a(6),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"vue面试题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue面试题"}},[t._v("#")]),t._v(" vue面试题")]),t._v(" "),a("h2",{attrs:{id:"说说你对-spa-单页面的理解，它的优缺点分别是什么？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说说你对-spa-单页面的理解，它的优缺点分别是什么？"}},[t._v("#")]),t._v(" 说说你对 SPA 单页面的理解，它的优缺点分别是什么？")]),t._v(" "),a("p",[t._v("SPA（single-page application）仅在Web页面初始化时加载相应的 HTML、JavaScript 和 CSS。一旦页面加载完成，SPA 不会因为用户的操作而进行页面的重新加载或跳转；取而代之的是利用路由机制实现 HTML 内容的变换，UI 与用户的交互，避免页面的重新加载。")]),t._v(" "),a("p",[a("strong",[t._v("优点：")])]),t._v(" "),a("ul",[a("li",[t._v("用户体验好、快，内容的改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染；")]),t._v(" "),a("li",[t._v("基于上面一点，SPA 相对对服务器压力小；")]),t._v(" "),a("li",[t._v("前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理；")])]),t._v(" "),a("p",[a("strong",[t._v("缺点：")])]),t._v(" "),a("ul",[a("li",[t._v("初次加载耗时多：为实现单页 Web 应用功能及显示效果，需要在加载页面的时候将 JavaScript、CSS 统一加载，部分页面-- 按需加载；")]),t._v(" "),a("li",[t._v("前进后退路由管理：由于单页应用在一个页面中显示所有的内容，所以不能使用浏览器的前进后退功能，所有的页面切换需要自己建立堆栈管理；")]),t._v(" "),a("li",[t._v("SEO 难度较大：由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势。")])]),t._v(" "),a("p",[t._v("SEO："),a("br"),t._v("\n为了提升网页在搜索引擎自然搜索结果中的收录数量以及排序位置而做的优化行为。简言之，就是希望百度等搜索引擎能多多我们收录精心制作后的网站，并且在别人访问时网站能排在前面。\n"),a("br")]),t._v(" "),a("ol",[a("li",[t._v("合理的 title、description、keywords：搜索对着三项的权重逐个减小，title 值强调重点即可，重要关键词出现不要超过 2 次，而且要靠前，不同页面 title 要有所不同；description 把页面内容高度概括，长度合适，不可过分堆砌关键词，不同页面 description 有所不同；keywords 列举出重要关键词即可")]),t._v(" "),a("li",[t._v("语义化的 HTML 代码，符合 W3C 规范：语义化代码让搜索引擎容易理解网页")]),t._v(" "),a("li",[t._v("重要内容 HTML 代码放在最前：搜索引擎抓取 HTML 顺序是从上到下，有的搜索引擎对抓取长度有限制，保证重要内容一定会被抓取")]),t._v(" "),a("li",[t._v("重要内容不要用 js 输出：爬虫不会执行 js 获取内容")]),t._v(" "),a("li",[t._v("少用 iframe：搜索引擎不会抓取 iframe 中的内容")]),t._v(" "),a("li",[t._v("非装饰性图片必须加 alt")]),t._v(" "),a("li",[t._v("提高网站速度：网站速度是搜索引擎排序的一个重要指标")])]),t._v(" "),a("h2",{attrs:{id:"mvvm定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mvvm定义"}},[t._v("#")]),t._v(" Mvvm定义")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("MVVM是Model-View-ViewModel的简写。即模型-视图-视图模型。\n【模型】指的是后端传递的数据。\n【视图】指的是所看到的页面。\n【视图模型】mvvm模式的核心，它是连接view和model的桥梁。\n\n 它有两个方向：\n    一是将【模型】转化成【视图】，即将后端传递的数据转化成所看到的页面。\n    实现的方式是：数据绑定。\n    二是将【视图】转化成【模型】，即将所看到的页面转化成后端的数据。\n    实现的方式是：DOM 事件监听。\n\n    这两个方向都实现的，我们称之为数据的双向绑定。\n\n    总结：在MVVM的框架下视图和模型是不能直接通信的。\n    它们通过ViewModel来通信，ViewModel通常要实现一个observer观察者，\n    当数据发生变化，ViewModel能够监听到数据的这种变化，\n    然后通知到对应的视图做自动更新，而当用户操作视图，\n    ViewModel也能监听到视图的变化，然后通知数据做改动，\n    这实际上就实现了数据的双向绑定。并且MVVM中的View 和 ViewModel可以互相通信。\n")])])]),a("h2",{attrs:{id:"mvc定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mvc定义"}},[t._v("#")]),t._v(" MVC定义")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("MVC是Model-View- Controller的简写。即模型-视图-控制器。\nM和V指的意思和MVVM中的M和V意思一样。\nC即Controller指的是页面业务逻辑。使用MVC的目的就是将M和V的代码分离。\n\n‘MVC是单向通信。也就是View跟Model，必须通过Controller来承上启下。\nMVC和MVVM的区别并不是VM完全取代了C，\nViewModel存在目的在于抽离Controller中展示的业务逻辑，\n而不是替代Controller，其它视图操作业务等还是应该放在Controller中实现。\n\n也就是说MVVM实现的是业务逻辑组件的重用。\n由于mvc出现的时间比较早，前端并不那么成熟，很多业务逻辑也是在后端实现，\n所以前端并没有真正意义上的MVC模式。而我们今天再次提起MVC，是因为大前端的来到，\n出现了MVVM模式的框架，我们需要了解一下MVVM这种设计模式是如何一步步演变过来的。\n")])])]),a("h2",{attrs:{id:"mvvm框架-vue的介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mvvm框架-vue的介绍"}},[t._v("#")]),t._v(" MVVM框架:VUE的介绍")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Vue就是基于MVVM模式实现的一套框架，\n    在vue中：Model:指的是js中的数据，如对象，数组等等。\n    View:指的是页面视图\n    viewModel:指的是vue实例化对象\n为什么说VUE是一个渐进式的javascript框架, 渐进式是什么意思？\n    1.如果你已经有一个现成的服务端应用，你可以将vue 作为该应用的一部分嵌入其中，\n    带来更加丰富的交互体验;\n    2.如果你希望将更多业务逻辑放到前端来实现，\n    那么VUE的核心库及其生态系统也可以满足你的各式需求（core+vuex+vue-route）。\n    和其它前端框架一样，VUE允许你将一个网页分割成可复用的组件，\n    每个组件都包含属于自己的HTML、CSS、JAVASCRIPT以用来渲染网页中相应的地方。\n    3.如果我们构建一个大型的应用，在这一点上，我们可能需要将东西分割成为各自的组件和文件，\n    vue有一个命令行工具，使快速初始化一个真实的工程变得非常简单\n    （vue init webpack my-project）。我们可以使用VUE的单文件组件，\n    它包含了各自的HTML、JAVASCRIPT以及带作用域的CSS或SCSS。\n\n    以上这三个例子，是一步步递进的，也就是说对VUE的使用可大可小，\n    它都会有相应的方式来整合到你的项目中。所以说它是一个渐进式的框架。\n\n    VUE最独特的特性：响应式系统VUE是响应式的（reactive），\n    也就是说当我们的数据变更时，VUE会帮你更新所有网页中用到它的地方。\n\n    Model 层代表数据模型，也可以在Model中定义数据修改和操作的业务逻辑；View 代表UI 组件，它负责将数据模型转化成UI 展现出来，ViewModel 是一个同步View 和Model的对象（桥梁）。\n    \n    在MVVM架构下，View 和 Model 之间并没有直接的联系，而是通过ViewModel进行交互，Model 和 ViewModel 之间的交互是双向的， 因此View 数据的变化会同步到Model中，而Model 数据的变化也会立即反应到View 上。\n    \n    ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，而View 和 Model 之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。\n    \n    主要就是mvc中Controller\n    mvvm主要解决了mvc中大量的DOM 操作使页面渲染性能降低，加载速度变慢，影响用户体验。\n")])])]),a("h2",{attrs:{id:"vue-实现双向数据绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-实现双向数据绑定"}},[t._v("#")]),t._v(" vue 实现双向数据绑定")]),t._v(" "),a("p",[t._v("简单的demo")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<input type="text" id="inp"/>\n<p id="showText"></p>\nvar obj = {};\n　　Object.defineProperty(obj,"newProp",{\n　　　　get:function(){\n　　　　　　return obj;\n　　　　},\n　　　　set:function(newVal){\n　　　　　　document.getElementById("inp").value = newVal;\n　　　　　　document.getElementById("showText").innerHTML = newVal;\n　　　　}\n　　})\n　　document.addEventListener("keyup",function(e){\n　　　　obj.newProp = e.target.value;\n　　})\n')])])]),a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000006599500?utm_source=tag-newest",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考链接"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"谈谈你对对vuex的理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#谈谈你对对vuex的理解"}},[t._v("#")]),t._v(" 谈谈你对对vuex的理解")]),t._v(" "),a("p",[a("strong",[t._v("vuex是什么")])]),t._v(" "),a("blockquote",[a("p",[t._v("vuex是一个专为vue.js应用程序开发的状态管理模式")])]),t._v(" "),a("p",[a("strong",[t._v("vuex的属性")])]),t._v(" "),a("blockquote",[a("p",[t._v("vuex五大核心属性：state，getter，mutation，action，module")])]),t._v(" "),a("ol",[a("li",[t._v("state：存储数据，存储状态；在根实例中注册了store 后，用 this.$store.state 来访问；对应vue里面的data；存放数据方式为响应式，vue组件从store中读取数据，如数据发生变化，组件也会对应的更新。")]),t._v(" "),a("li",[t._v("getter：可以认为是 store 的计算属性，它的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算")]),t._v(" "),a("li",[t._v("mutation：更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。")]),t._v(" "),a("li",[t._v("action：包含任意异步操作，通过提交 mutation 间接更变状态。")]),t._v(" "),a("li",[t._v("module：将 store 分割成模块，每个模块都具有state、mutation、action、getter、甚至是嵌套子模块。")])]),t._v(" "),a("p",[a("strong",[t._v("vuex的数据传递流程")]),t._v(" "),a("img",{attrs:{src:"/images/vue/vue1.jpg",alt:"avatar"}}),a("br")]),t._v(" "),a("ul",[a("li",[t._v("当组件进行数据修改的时候我们需要调用dispatch来触发actions里面的方法")]),t._v(" "),a("li",[t._v("actions里面的每个方法中都会有一个commit方法，当方法执行的时候会通过commit来触发mutations里面的方法进行数据的修改")]),t._v(" "),a("li",[t._v("mutations里面的每个函数都会有一个state参数，这样就可以在mutations里面进行state的数据修改，当数据修改完毕后，会传导给页面。")]),t._v(" "),a("li",[t._v("页面的数据也会发生改变")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://vuex.vuejs.org/zh/guide/structure.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("模板"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"vue生命周期的理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue生命周期的理解"}},[t._v("#")]),t._v(" vue生命周期的理解")]),t._v(" "),a("blockquote",[a("p",[t._v("总共分为8个阶段创建前/后，载入前/后，更新前/后，销毁前/后。")])]),t._v(" "),a("p",[a("strong",[t._v("创建前/后")])]),t._v(" "),a("ul",[a("li",[t._v("在beforeCreated阶段，vue实例的挂载元素$el和数据对象data都为undefined，还未初始化。")]),t._v(" "),a("li",[t._v("在created阶段，vue实例的数据对象data有了，$el还没有。")])]),t._v(" "),a("p",[a("strong",[t._v("载入前/后")])]),t._v(" "),a("ul",[a("li",[t._v("在beforeMount阶段，vue实例的$el和data都初始化了，但还是挂载之前为虚拟的dom节点，data.message还未替换。")]),t._v(" "),a("li",[t._v("在mounted阶段，vue实例挂载完成，data.message成功渲染。")])]),t._v(" "),a("p",[a("strong",[t._v("更新前/后")])]),t._v(" "),a("ul",[a("li",[t._v("当data变化时，会触发beforeUpdate和updated方法。")])]),t._v(" "),a("p",[a("strong",[t._v("销毁前/后")])]),t._v(" "),a("ul",[a("li",[t._v("在执行destroy方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在")])]),t._v(" "),a("p",[a("strong",[t._v("1.0 什么是 vue 生命周期")])]),t._v(" "),a("blockquote",[a("p",[t._v("vue 实例从创建到销毁的过程就是生命周期。"),a("br"),t._v("\n也就是从开始创建、初始化数据、编译模板、挂在 dom -> 渲染、更新 -> 渲染、写在等一系列过程")])]),t._v(" "),a("p",[a("strong",[t._v("2.0 vue生命周期的作用是什么")])]),t._v(" "),a("blockquote",[a("p",[t._v("生命周期中有多个事件钩子，让我们在控制整个 vue 实例的过程时更容易形成好的逻辑")])]),t._v(" "),a("p",[a("strong",[t._v("3.0 第一次页面加载会触发哪几个钩子")])]),t._v(" "),a("blockquote",[a("p",[t._v("第一次加载会触发 beforeCreate、created、beforeMount、mounted")])]),t._v(" "),a("p",[a("strong",[t._v("4.0 简述每个周期具体适合哪些场景")])]),t._v(" "),a("blockquote",[a("p",[t._v("beforecreate : 可以在这加个loading事件，在加载实例时触发"),a("br"),t._v("\ncreated : 初始化完成时的事件写在这里，如在这结束loading事件，异步请求也适宜在这里调用"),a("br"),t._v("\nmounted : 挂载元素，获取到DOM节点 updated : 如果对数据统一处理，在这里写上相应函数"),a("br"),t._v("\nbeforeDestroy : 可以做一个确认停止事件的确认框 nextTick : 更新数据后立即操作dom")])]),t._v(" "),a("h2",{attrs:{id:"vue-组件之间通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-组件之间通信"}},[t._v("#")]),t._v(" vue 组件之间通信")]),t._v(" "),a("p",[a("strong",[t._v("父向子")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('import CH from \'./ch\'\ncomponents:{\n            CH\n        },\n<CH :datalist="list" @childFn="parentFn"></CH>\nprops:{\n    datalist:{\n        type:Object,\n        default: {name:2222}\n    }\n},\n')])])]),a("p",[a("strong",[t._v("子向父")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<button @click="click">Send</button>\nclick() {\n    this.$emit(\'childFn\', this.message);\n}\n<CH :datalist="list" @childFn="parentFn"></CH>\nparentFn(payload) {\n    this.message = payload;\n},\n')])])]),a("p",[a("strong",[t._v("兄弟组件")]),t._v(" "),a("code",[t._v("query paramas")]),t._v(" "),a("strong",[t._v("隔代组件")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("两层 父传子 \n多的话 vuex 或者\n\n订阅与发布者 pubsub.js   插件库 类似于vuex\na 订阅消息 PubSub.subscribe('msg',function(msg,data){})\nb 发布消息 PubSub.publish('msg',data)\n优点：可以实现任意关系组件通信\n")])])]),a("h2",{attrs:{id:"v-show和v-if指令的共同点和不同点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-show和v-if指令的共同点和不同点"}},[t._v("#")]),t._v(" v-show和v-if指令的共同点和不同点")]),t._v(" "),a("ul",[a("li",[t._v("v-show指令是通过修改元素的display的CSS属性让其显示或者隐藏")]),t._v(" "),a("li",[t._v("v-if指令是直接销毁和重建DOM达到让元素显示和隐藏的效果,如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。")]),t._v(" "),a("li",[t._v("v-show只编译一次；而v-if不停地销毁和创建")]),t._v(" "),a("li",[t._v("所以，v-if 适用于在运行时很少改变条件，不需要频繁切换条件的场景；v-show 则适用于需要非常频繁切换条件的场景。")])]),t._v(" "),a("p",[a("strong",[t._v("性能")])]),t._v(" "),a("ol",[a("li",[t._v("v-show只编译一次，后面其实就是控制css，而v-if不停的销毁和创建，故v-show性能更好一点")]),t._v(" "),a("li",[t._v("v-if有更高的切换消耗；v-show有更高的初始渲染消耗；")])]),t._v(" "),a("h2",{attrs:{id:"vue的双向数据绑定原理是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue的双向数据绑定原理是什么"}},[t._v("#")]),t._v(" Vue的双向数据绑定原理是什么")]),t._v(" "),a("blockquote",[a("p",[t._v("vue.js 是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。")])]),t._v(" "),a("h2",{attrs:{id:"vue-路由原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-路由原理"}},[t._v("#")]),t._v(" vue 路由原理")]),t._v(" "),a("blockquote",[a("p",[t._v("本质就是监听 URL 的变化，然后匹配路由规则，显示相应的页面，并且无须刷新。目前单页面使用的路由就只有两种实现方式")])]),t._v(" "),a("p",[a("strong",[t._v("hash 模式")])]),t._v(" "),a("blockquote",[a("p",[t._v("www.test.com/#/ 就是 Hash URL，当 # 后面的哈希值发生变化时，不会向服务器请求数据，可以通过 hashchange 事件来监听到 URL 的变化，从而进行跳转页面")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/vue/vue2.png",alt:"avatar"}})]),t._v(" "),a("p",[a("strong",[t._v("History 模式")])]),t._v(" "),a("blockquote",[a("p",[t._v("History 模式是 HTML5 新推出的功能，比之 Hash URL 更加美观")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/vue/vue3.png",alt:"avatar"}})]),t._v(" "),a("h2",{attrs:{id:"vue-页面的懒加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-页面的懒加载"}},[t._v("#")]),t._v(" vue 页面的懒加载")]),t._v(" "),a("blockquote",[a("p",[t._v("利用了函数只有被调用才会执行的特性。将组件的component属性赋值一个函数，在函数中去异步引入组件")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/test1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/components/children/Test1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    children"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])]),a("p",[t._v("component: () => import('@/components/children/Test1')这个是配置路由懒加载，优化首屏加载缓慢")]),t._v(" "),a("h2",{attrs:{id:"class-与-style-如何动态绑定？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-与-style-如何动态绑定？"}},[t._v("#")]),t._v(" Class 与 Style 如何动态绑定？")]),t._v(" "),a("p",[a("strong",[t._v("Class 可以通过对象语法和数组语法进行动态绑定：")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.0 对象语法：")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bind"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"{ active: isActive, 'text-danger': hasError }\"")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   isActive"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   hasError"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.0 数组语法：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bind"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"[isActive ? activeClass : '', errorClass]\"")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\ndata"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  activeClass"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'active'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  errorClass"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text-danger'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Style 也可以通过对象语法和数组语法进行动态绑定：")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.0 对象语法：")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bind"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"{ color: activeColor, fontSize: fontSize + 'px' }\"")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   activeColor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'red'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   fontSize"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.0 数组语法：")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bind"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[styleColor, styleSize]"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      styleColor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         color"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'red'")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      styleSize"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         fontSize"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'23px'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"computed-和-watch-的区别和运用的场景？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#computed-和-watch-的区别和运用的场景？"}},[t._v("#")]),t._v(" computed 和 watch 的区别和运用的场景？")]),t._v(" "),a("p",[t._v("computed：是计算属性，依赖其它属性值，并且 computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed  的值；")]),t._v(" "),a("p",[t._v("watch：更多的是「观察」的作用，类似于某些数据的监听回调 ，每当监听的数据变化时都会执行回调进行后续操作；")]),t._v(" "),a("p",[a("strong",[t._v("运用场景：")])]),t._v(" "),a("ul",[a("li",[t._v("当我们需要进行数值计算，并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时，都要重新计算；")]),t._v(" "),a("li",[t._v("当我们需要在数据变化时执行异步或开销较大的操作时，应该使用 watch，使用 watch 选项允许我们执行异步操作 ( 访问一个 API )，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。")])]),t._v(" "),a("h2",{attrs:{id:"直接给一个数组项赋值，vue-能检测到变化吗？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直接给一个数组项赋值，vue-能检测到变化吗？"}},[t._v("#")]),t._v(" 直接给一个数组项赋值，Vue 能检测到变化吗？")]),t._v(" "),a("p",[t._v("由于 JavaScript 的限制，Vue 不能检测到以下数组的变动："),a("br")]),t._v(" "),a("ul",[a("li",[t._v("当你利用索引直接设置一个数组项时，例如：vm.items[indexOfItem] = newValue")]),t._v(" "),a("li",[t._v("当你修改数组的长度时，例如：vm.items.length = newLength")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 为了解决第一个问题，Vue 提供了以下操作方法：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Vue.set")]),t._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" indexOfItem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vm.$set，Vue.set的一个别名")]),t._v("\nvm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" indexOfItem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Array.prototype.splice")]),t._v("\nvm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("splice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("indexOfItem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 为了解决第二个问题，Vue 提供了以下操作方法：")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Array.prototype.splice")]),t._v("\nvm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("splice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newLength"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[a("strong",[t._v("注意：")])]),t._v(" "),a("p",[t._v("上面说的是vue2  vue3.0 是可以监听到变化的")]),t._v(" "),a("p",[a("code",[t._v("原理")]),t._v(" 应该是 Object.definePrototype 和 proxy的区别\n数组的话是因为 vue 重写了array的一些方法导致的")]),t._v(" "),a("h2",{attrs:{id:"vue-的父组件和子组件生命周期钩子函数执行顺序？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-的父组件和子组件生命周期钩子函数执行顺序？"}},[t._v("#")]),t._v(" Vue 的父组件和子组件生命周期钩子函数执行顺序？")]),t._v(" "),a("ul",[a("li",[t._v("加载渲染过程")])]),t._v(" "),a("p",[t._v("父 beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子 created -> 子 beforeMount -> 子 mounted -> 父 mounted\n"),a("br")]),t._v(" "),a("ul",[a("li",[t._v("子组件更新过程")])]),t._v(" "),a("p",[t._v("父 beforeUpdate -> 子 beforeUpdate -> 子 updated -> 父 updated\n"),a("br")]),t._v(" "),a("ul",[a("li",[t._v("销毁过程\n父 beforeDestroy -> 子 beforeDestroy -> 子 destroyed -> 父 destroyed")])]),t._v(" "),a("h2",{attrs:{id:"在哪个生命周期内调用异步请求？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在哪个生命周期内调用异步请求？"}},[t._v("#")]),t._v(" 在哪个生命周期内调用异步请求？")]),t._v(" "),a("p",[t._v("可以在钩子函数 created、beforeMount、mounted 中进行调用，因为在这三个钩子函数中，data 已经创建，可以将服务端端返回的数据进行赋值。但是本人推荐在 created 钩子函数中调用异步请求，因为在 created 钩子函数中调用异步请求有以下优点：\n"),a("br")]),t._v(" "),a("ol",[a("li",[t._v("能更快获取到服务端数据，减少页面 loading 时间；")]),t._v(" "),a("li",[t._v("ssr 不支持 beforeMount 、mounted 钩子函数，所以放在 created 中有助于一致性；")])]),t._v(" "),a("h2",{attrs:{id:"ssr-服务端渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssr-服务端渲染"}},[t._v("#")]),t._v(" ssr 服务端渲染")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.jb51.net/article/173920.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo1"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://segmentfault.com/a/1190000015964813",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo2"),a("OutboundLink")],1),a("br")]),t._v(" "),a("h2",{attrs:{id:"父组件可以监听到子组件的生命周期吗？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#父组件可以监听到子组件的生命周期吗？"}},[t._v("#")]),t._v(" 父组件可以监听到子组件的生命周期吗？")]),t._v(" "),a("ol",[a("li",[t._v("比如有父组件 Parent 和子组件 Child，如果父组件监听到子组件挂载 mounted 就做一些逻辑处理，可以通过以下写法实现：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(' // Parent.vue\n <Child @mounted="doSomething"/>\n     \n // Child.vue\n mounted() {\n   this.$emit("mounted");\n }\n')])])]),a("p",[t._v("以上需要手动通过 $emit 触发父组件的事件，\n2. 更简单的方式可以在父组件引用子组件时通过 @hook 来监听即可，如下所示：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("//  Parent.vue\n<Child @hook:mounted=\"doSomething\" ></Child>\n\ndoSomething() {\n  console.log('父组件监听到 mounted 钩子函数 ...');\n},\n   \n//  Child.vue\nmounted(){\n  console.log('子组件触发 mounted 钩子函数 ...');\n},    \n   \n// 以上输出顺序为：\n// 子组件触发 mounted 钩子函数 ...\n// 父组件监听到 mounted 钩子函数 ...   \n")])])]),a("p",[t._v("当然 @hook 方法不仅仅是可以监听 mounted，其它的生命周期事件，例如：created，updated 等都可以监听。")]),t._v(" "),a("h2",{attrs:{id:"组件中-data-为什么是一个函数？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件中-data-为什么是一个函数？"}},[t._v("#")]),t._v(" 组件中 data 为什么是一个函数？")]),t._v(" "),a("blockquote",[a("p",[t._v("为什么组件中的 data 必须是一个函数，然后 return 一个对象，而 new Vue 实例里，data 可以直接是一个对象？")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// data\ndata() {\n  return {\n\tmessage: \"子组件\",\n\tchildName:this.name\n  }\n}\n\n// new Vue\nnew Vue({\n  el: '#app',\n  router,\n  template: '<App/>',\n  components: {App}\n})\n")])])]),a("p",[t._v("因为组件是用来复用的，且 JS 里对象是引用关系，如果组件中 data 是一个对象，那么这样作用域没有隔离，子组件中的 data 属性值会相互影响，如果组件中 data 选项是一个函数，那么每个实例可以维护一份被返回对象的独立的拷贝，组件实例之间的 data 属性值不会互相影响；而 new Vue 的实例，是不会被复用的，因此不存在引用对象的问题。")]),t._v(" "),a("h2",{attrs:{id:"v-model-的原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-model-的原理"}},[t._v("#")]),t._v(" v-model 的原理")]),t._v(" "),a("p",[t._v("我们在 vue 项目中主要使用 v-model 指令在表单 input、textarea、select 等元素上创建双向数据绑定，我们知道 v-model 本质上不过是语法糖，v-model 在内部为不同的输入元素使用不同的属性并抛出不同的事件：")]),t._v(" "),a("ul",[a("li",[t._v("text 和 textarea 元素使用 value 属性和 input 事件；")]),t._v(" "),a("li",[t._v("checkbox 和 radio 使用 checked 属性和 change 事件；")]),t._v(" "),a("li",[t._v("select 字段将 value 作为 prop 并将 change 作为事件。")])]),t._v(" "),a("p",[t._v("以 input 表单元素为例：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<input v-model=\'something\'>\n    \n相当于\n<input v-bind:value="something" v-on:input="something = $event.target.value">\n\n')])])]),a("p",[t._v("如果在自定义组件中，v-model 默认会利用名为 value 的 prop 和名为 input 的事件，如下所示：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" 父组件：\n <ModelChild v-model=\"message\"></ModelChild>\n \n 子组件：\n <div>{{value}}</div>\n \n props:{\n     value: String\n },\n methods: {\n   test1(){\n      this.$emit('input', '小红')\n   },\n },\n\n")])])]),a("h2",{attrs:{id:"proxy-与-object-defineproperty-优劣对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proxy-与-object-defineproperty-优劣对比"}},[t._v("#")]),t._v(" Proxy 与 Object.defineProperty 优劣对比")]),t._v(" "),a("p",[a("strong",[t._v("Proxy 的优势如下:")])]),t._v(" "),a("ol",[a("li",[t._v("Proxy 可以直接监听对象而非属性；")]),t._v(" "),a("li",[t._v("Proxy 可以直接监听数组的变化；")]),t._v(" "),a("li",[t._v("Proxy 有多达 13 种拦截方法,不限于 apply、ownKeys、deleteProperty、has 等等是 Object.defineProperty 不具备的；")]),t._v(" "),a("li",[t._v("Proxy 返回的是一个新对象,我们可以只操作新的对象达到目的,而 Object.defineProperty 只能遍历对象属性直接修改；")]),t._v(" "),a("li",[t._v("Proxy 作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利；")])]),t._v(" "),a("p",[a("strong",[t._v("Object.defineProperty 的优势如下:")])]),t._v(" "),a("ul",[a("li",[t._v("兼容性好，支持 IE9，而 Proxy 的存在浏览器兼容性问题,而且无法用 polyfill 磨平，因此 Vue 的作者才声明需要等到下个大版本( 3.0 )才能用 Proxy 重写")])]),t._v(" "),a("h2",{attrs:{id:"你有对-vue-项目进行哪些优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#你有对-vue-项目进行哪些优化"}},[t._v("#")]),t._v(" 你有对 Vue 项目进行哪些优化")]),t._v(" "),a("p",[a("strong",[t._v("代码层面的优化")])]),t._v(" "),a("ol",[a("li",[t._v("v-if 和 v-show 区分使用场景")]),t._v(" "),a("li",[t._v("computed 和 watch  区分使用场景")]),t._v(" "),a("li",[t._v("v-for 遍历必须为 item 添加 key，且避免同时使用 v-if")]),t._v(" "),a("li",[t._v("长列表性能优化")]),t._v(" "),a("li",[t._v("事件的销毁")]),t._v(" "),a("li",[t._v("图片资源懒加载")]),t._v(" "),a("li",[t._v("路由懒加载")]),t._v(" "),a("li",[t._v("第三方插件的按需引入")]),t._v(" "),a("li",[t._v("优化无限列表性能")]),t._v(" "),a("li",[t._v("服务端渲染 SSR or 预渲染")])]),t._v(" "),a("p",[a("strong",[t._v("Webpack 层面的优化")])]),t._v(" "),a("ol",[a("li",[t._v("Webpack 对图片进行压缩")]),t._v(" "),a("li",[t._v("减少 ES6 转为 ES5 的冗余代码")]),t._v(" "),a("li",[t._v("提取公共代码")]),t._v(" "),a("li",[t._v("模板预编译")]),t._v(" "),a("li",[t._v("提取组件的 CSS")]),t._v(" "),a("li",[t._v("优化 SourceMap")]),t._v(" "),a("li",[t._v("构建结果输出分析")]),t._v(" "),a("li",[t._v("Vue 项目的编译优化")])]),t._v(" "),a("p",[a("strong",[t._v("基础的 Web 技术的优化")])]),t._v(" "),a("ol",[a("li",[t._v("开启 gzip 压缩")]),t._v(" "),a("li",[t._v("浏览器缓存")]),t._v(" "),a("li",[t._v("CDN 的使用")]),t._v(" "),a("li",[t._v("使用 Chrome Performance 查找性能瓶颈")])]),t._v(" "),a("h2",{attrs:{id:"未完成的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#未完成的"}},[t._v("#")]),t._v(" 未完成的")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5d59f2a451882549be53b170#heading-12",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue的30个问题"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);