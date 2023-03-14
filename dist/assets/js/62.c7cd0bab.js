(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{277:function(n,e,t){"use strict";t.r(e);var a=t(6),r=Object(a.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"单例模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单例模式"}},[n._v("#")]),n._v(" 单例模式")]),n._v(" "),t("p",[n._v("单例模式的定义是：保证一个类仅有一个实例,并提供一个访问它的全局访问点。"),t("br"),n._v("\n单例模式是一种常用的模式，有一些对象我们往往只需要一个，比如线程池、全局缓存、浏览器\n中的window对象等。在js开发中，单例模式的用途同样非常广泛。试想一下，当我们单击\n登录按钮的时候，页面中会出现一个登录浮窗，而这个登录浮窗是唯一的，无论单击多少次登录按钮，\n这个浮窗都只会被创建一次，那么这个登录浮窗就适合用单例模式来创建。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("<!DOCTYPE html>\n<html lang=\"en\">\n\n<body>\n    <button id=\"btn\">登录</button>\n</body>\n<script>\n    class Login {\n        createLayout() {\n            var oDiv = document.createElement('div')\n            oDiv.innerHTML = '我是登录框'\n            document.body.appendChild(oDiv)\n            oDiv.style.display = 'none'\n            return oDiv\n        }\n    }\n\n    class Single {\n        getSingle(fn) {\n            var result;\n            return function() {\n                return result || (result = fn.apply(this, arguments))\n            }\n        }\n    }\n\n    var oBtn = document.getElementById('btn')\n    var single = new Single()\n    var login = new Login()\n\n    // 由于闭包，createLoginLayer对result的引用，所以当single.getSingle函数执行完之后，内存中并不会销毁result。\n\n    // 当第二次以后点击按钮，根据createLoginLayer函数的作用域链中已经包含了result，所以直接返回result\n\n    // 讲获取单例和创建登录框的方法解耦，符合开放封闭原则\n    var createLoginLayer = single.getSingle(login.createLayout)\n    oBtn.onclick = function() {\n        var layout = createLoginLayer()\n        layout.style.display = 'block'\n    }\n<\/script>\n\n</html>\n")])])]),t("p",[n._v("小结："),t("br"),n._v("\n1.0 单例模式的主要思想就是 如果 已经创建，则直接返回")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function createSingle(){\n    var obj = null;\n    if(!obj){\n        obj = xxx    \n    }\n    return obj;\n}\n")])])]),t("p",[n._v("2.0 符合开放封闭原则")])])}),[],!1,null,null,null);e.default=r.exports}}]);