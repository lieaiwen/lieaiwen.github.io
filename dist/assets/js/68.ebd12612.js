(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{281:function(t,e,n){"use strict";n.r(e);var r=n(6),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"迭代器模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#迭代器模式"}},[t._v("#")]),t._v(" 迭代器模式")]),t._v(" "),n("p",[t._v("迭代器模式是指提供一种方法顺序访问一个聚合对象中的各个元素，而不需要暴露\n该对象的内部表示。迭代器模式可以把迭代的过程从业务逻辑中分离出来，在使用迭代器\n模式之后，即使不关心对象的内部构造，也可以按顺序访问其中的每个元素。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("class Creater{\n    constructor(list){\n        this.list = list\n    }\n    // 创建一个迭代器，也叫遍历器\n    createIterator() {\n        return new Iterator(this)\n    }\n}\nclass Iterator {\n    constructor(creater) {\n        this.list = creater.list\n        this.index = 0\n    }\n\n    // 判断是否遍历完数据\n    isDone() {\n        if (this.index >= this.list.length) {\n            return true\n        }\n        return false\n    }\n\n    next() {\n        return this.list[this.index++]\n    }\n\n}\nvar arr = [1, 2, 3, 4]\n\nvar creater = new Creater(arr)\nvar iterator = creater.createIterator()\nconsole.log(iterator.list)  // [1, 2, 3, 4]\nwhile (!iterator.isDone()) {\n    console.log(iterator.next()) \n    // 1\n    // 2\n    // 3\n    // 4\n}\nSymbol（符号，代号）\niterator(迭代器)\n")])])]),n("p",[t._v("es6的迭代器：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("1.0 Array\n2.0 Map\n3.0 Set\n4.0 String\n5.0 typeArray\n6.0 arguments\n7.0 NodeList\n注意: Object不是有序数据集合\n")])])]),n("p",[t._v("以上有序数据集合都部署了Symbol.iterator属性，属性值为一个函数，执行这个函数，返回一个迭代器，迭代器部署了next方法，调用迭代器的next方法可以按顺序访问子元素")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("var arr = [1, 2, 3, 4]\n\nvar iterator = arr[Symbol.iterator]()\n\nconsole.log(iterator.next())  // {value: 1, done: false}\nconsole.log(iterator.next())  // {value: 2, done: false}\nconsole.log(iterator.next())  // {value: 3, done: false}\nconsole.log(iterator.next())  // {value: 4, done: false}\nconsole.log(iterator.next())  // {value: undefined, done: true}\n")])])]),n("p",[t._v("小结："),n("br"),t._v("\n1.0 JavaScript中的有序数据集合有Array，Map，Set，String，typeArray，arguments，NodeList，不包括Object\n"),n("br"),t._v("\n2.0  任何部署了[Symbol.iterator]接口的数据都可以使用for...of循环遍历\n"),n("br"),t._v("\n3.0  迭代器模式使目标对象和迭代器对象分离，符合开放封闭原则")])])}),[],!1,null,null,null);e.default=a.exports}}]);