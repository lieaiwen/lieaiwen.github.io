(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{249:function(t,e,n){"use strict";n.r(e);var a=n(6),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"sleep休眠或等待函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sleep休眠或等待函数"}},[t._v("#")]),t._v(" sleep休眠或等待函数")]),t._v(" "),n("h2",{attrs:{id:"sleep函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sleep函数"}},[t._v("#")]),t._v(" sleep函数")]),t._v(" "),n("p",[t._v("JavaScript是单线程运行的，没有内置的sleep函数，现在模拟实现sleep延迟执行的效果。"),n("br"),t._v("\n使用休眠函数实现页面改变背景颜色，黑色2秒，蓝色3秒，黄色4秒，循环改变颜色。")]),t._v(" "),n("h2",{attrs:{id:"_1-0-settimeout实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-0-settimeout实现"}},[t._v("#")]),t._v(" 1.0 setTimeOut实现")]),t._v(" "),n("p",[t._v("直接使用setTimeout实现sleep()的方法，兼容性最好，但是使用了回调函数的实现方式，代码的可读性和维护性不是很好。"),n("br"),t._v("\n废话少说直接上代码，我们来看")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("var bg = document.getElementsByTagName('body')[0]\n\nfunction changeColor(color) {\n\tbg.style.backgroundColor=color\n}\n\nfunction sleepHandle(){\n\tchangeColor('black');\n\tsetTimeout(()=>{\n\t\tchangeColor('blue');\n\t\tsetTimeout(()=>{\n\t\t\tchangeColor('yellow');\n\t\t\tsetTimeout(()=>{\n\t\t\t\tsleepHandle()\n\t\t\t},4000)\n\t\t},3000)\n\t},2000)\n}\nsleepHandle()\n")])])]),n("p",[t._v("是不是很简单，这可读性和可维护性也不差呀，怎么就不友好了，那是因为我们做的简单，假设改变颜色需要10种呢，一下就能感受出来了，当然了\n可能自己写的没问题，但是你让其他同事看这代码，估计是想揍人的啦。")]),t._v(" "),n("h2",{attrs:{id:"_2-0-使用promise实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-使用promise实现"}},[t._v("#")]),t._v(" 2.0 使用promise实现")]),t._v(" "),n("p",[t._v("在ES6的语法中，Promise是sleep方法异步的实现一种方式，借助Promise方法可以优雅的构建sleep实现方法，避免了出现函数回调‘地狱’。"),n("br")]),t._v(" "),n("blockquote",[n("p",[t._v("使用Promise，把下一次的颜色改变写在then里面，最后同样使用递归完成循环。\n使用promise代替setTimeout，利用链式调用以及then来实现颜色的转换，then返回一个promise对象，当这个对象为resolve状态then可以持续调用。")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("var bg = document.getElementsByTagName('body')[0]\n\nfunction changeColor(color,time) {\n\treturn new Promise((resolve,reject)=>{\n\t\tbg.style.backgroundColor=color\n\t\tsetTimeout(()=>{\n\t\t\tresolve()\n\t\t},time)\n\t})\n}\n\nfunction main(){\n\tPromise.resolve().then(()=>{\n\t\treturn changeColor('black',2000)\n\t}).then(()=>{\n\t\treturn changeColor('blue',3000)\n\t}).then(()=>{\n\t\treturn changeColor('yellow',4000)\n\t}).then(()=>{\n\t\tmain()\n\t})\n}\nmain()\n")])])]),n("p",[t._v("你看看,你看看是不是清晰很多了，等等似乎也不是那么清晰了，好多.then.then的，不要慌我们继续往下看")]),t._v(" "),n("h2",{attrs:{id:"_3-0-使用promise和await实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-0-使用promise和await实现"}},[t._v("#")]),t._v(" 3.0 使用promise和await实现")]),t._v(" "),n("p",[t._v("async await实际上是generator和promise的语法糖，在提供同步编程方式实现异步调用的基础上，同时满足对sleep函数语义化的支持，也是常用的sleep的实现方式。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("var bg = document.getElementsByTagName('body')[0]\n\n function changeColor(color, time) {\n\treturn new Promise((resolve,reject)=>{\n\t\tbg.style.backgroundColor=color\n\t\tsetTimeout(()=>{\n\t\t\tresolve()\n\t\t},time)\n\t})\n}\n\nasync function main() {\n\tawait changeColor('black', 2000);\n\tconsole.log(2)\n\tawait changeColor('blue', 3000);\n\tconsole.log(3)\n\tawait changeColor('yellow', 4000);\n\tconsole.log(4)\n\tmain()\n}\nmain() \n")])])]),n("p",[t._v("2s后输出2 3s后输出3 4s后输出4 然后继续循环往复的进行。"),n("br"),t._v("\n这样逻辑和功能就分开，是不是更清晰了一点了。所以以后再有需要写等一会儿再执行的情况，我们这个方法完全可以胜任的。")]),t._v(" "),n("h2",{attrs:{id:"_4-0-while实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-0-while实现"}},[t._v("#")]),t._v(" 4.0 while实现")]),t._v(" "),n("p",[t._v("while的语法我们都知道，当满足某些条件的时候，while里面的内容会一直执行，所以如下面只有当超过500毫秒才能执行后面的逻辑")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v(" let sleep = (delay = 500) => {\n    let t = Date.now();\n    while(Date.now() - t <= delay) {\n        continue;\n    }\n    doSomeThing\n};\n")])])]),n("p",[t._v("我们就叫上面的代码为阻塞主进程之休眠。"),n("br")]),t._v(" "),n("p",[t._v("通宵复习是因为平时没听过课，拼命减肥是因为吃零食从来不会控制，分手了才开始后悔是因为之前没有给足够的关心。于是别人开始敬佩你的勤奋，同情你的遭遇，可是只有你知道，你的痛苦都是罪有应得。")])])}),[],!1,null,null,null);e.default=s.exports}}]);