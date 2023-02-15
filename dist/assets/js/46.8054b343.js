(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{114:function(s,r,t){"use strict";t.r(r);var n=t(0),e=Object(n.a)({},(function(){var s=this,r=s.$createElement,t=s._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"观察者模式-订阅-发布模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#观察者模式-订阅-发布模式"}},[s._v("#")]),s._v(" 观察者模式(订阅-发布模式)")]),s._v(" "),t("p",[s._v("发布-订阅模式又叫观察者模式，它定义对象间的一种一对多的依赖关系，当一个对象的状态发生\n改变时，所有依赖于它的对象都将得到通知，在js开发中，我们一般用事件模型来替代传统的\n发布-订阅模式。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('var observer = { //订阅者\n    addSubstriber: function (callback){ // 增加子列\n        this.subscribers[this.subscribers.length] = callback;\n    },\n    removeSubstriber: function (callback){ // 删除子列\n        for(var i = 0;i<this.subscribers.length;i++){\n            if(this.subscribers[i] === callback){\n                delete(this.subscribers[i])\n            }\n        }\n    },\n    publish:function(what){ // 发布消息\n        for(var i=0;i<this.subscribers.length; i++){\n            if(typeof this.subscribers[i] === "function"){\n                this.subscribers[i](what)\n            }\n        }\n    },\n    make:function(o){ // 制作 将对象转换为发布者\n        for(var i in this){\n            o[i] = this[i];\n            o.subscribers = [];\n        }\n    }\n}\n')])])]),t("p",[t("a",{attrs:{href:"http://www.zliel.top/vpdemo/js-demo/js-observer/observer.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("demo"),t("OutboundLink")],1),t("br")])])}),[],!1,null,null,null);r.default=e.exports}}]);