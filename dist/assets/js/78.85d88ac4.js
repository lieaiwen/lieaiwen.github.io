(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{296:function(t,n,e){"use strict";e.r(n);var a=e(6),r=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"_1-0-js递归和尾递归"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-0-js递归和尾递归"}},[t._v("#")]),t._v(" 1.0 js递归和尾递归")]),t._v(" "),e("p",[t._v("定义： "),e("br"),t._v("\n递归函数就是在函数体内调用本函数")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function fac(n){\n    if( n === 1) return 1;\n    return n * fac(n-1)\n}\nfac(3)\n(3*fac(2))\n(3*(2*fac(1))) // 6\n")])])]),e("p",[t._v("说明："),e("br"),t._v("\n函数调用会产生“调用记录（存储着函数的相关信息）”存放在栈中，当有函数返回，对应的调用记录才会消失，\n"),e("br"),t._v("\n述用普通递归实现的阶乘的执行过程中，不断的调用自身，导致一直没有返回，这样也就不断的在栈中存储调用记录\n而当调用自身的次数过多后，就会产生我们常说的“栈溢出”\n"),e("br"),t._v("\n更形象的描述：\n"),e("br"),t._v("\n就想一个人不断地借钱（调用自身，不断向栈中存调用记录），但是总想着以后再还（一直没有返回），\n当外债积累到超出自己偿还能力的时候，就跑路了（栈溢出）")]),t._v(" "),e("h2",{attrs:{id:"尾递归"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#尾递归"}},[t._v("#")]),t._v(" 尾递归")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function fac(n, total){\n    if(n ===1) return total;\n    return fac(n-1,n*total);\n}\nfac(3,1)\n执行步骤：\n1.0 fac(2,3*1)\n2.0 fac(1,2*3)\n3.0 // 6\n")])])]),e("p",[t._v("说明： "),e("br"),t._v("\n永远只有一个调用记录，调用函数产生一个调用记录，最后一步操作 return fac(n - 1, n * total)\n"),e("br"),t._v("\n把当前函数的计算结果当做参数传递给了下一个自身调用，这样第一个函数调用产生的调用记录就消失了，因为它执行完了\n依次类推，就不会溢出\n"),e("br"),t._v("\n尾递归：函数的最后一步是执行一个函数")]),t._v(" "),e("h2",{attrs:{id:"_3-0-使用new关键字调用函数（new-person-…-）的具体步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-0-使用new关键字调用函数（new-person-…-）的具体步骤"}},[t._v("#")]),t._v(" 3.0 使用new关键字调用函数（new Person(…)）的具体步骤")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1.0 创建空对象\n    var obj = {};\n2.0 设置新对象的的constructor属性为构造函数的名称,\n设置新对象的__proto__属性指向构造函数的prototype对象；\nobj.__proto__ = Person.prototype;\n3.0 使用新对象调用函数，函数中的this被指向新实例对象；\nPerson.call(obj);\n4.0 将初始化完毕的新对象地址，保存到等号左边的变量中 \n")])])]),e("p",[t._v("prototype的定义")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('javascript中的每个对象都有prototype属性，\nJavascript中对象的prototype属性的解释是：返回对象类型原型的引用。\nfunction test () {\n　　this.foo = "foo";\n}\nvar a = new test()\njs  constructor 属性返回对创建此对象的数组函数的引用\na.constructor\n    ƒ test () {\n    　　this.foo = "foo";\n    }\ntest.prototype\n    {constructor: ƒ}\n    constructor: ƒ test()\n    __proto__: Object\n')])])]),e("h2",{attrs:{id:"_4-0-new-object-和-object-create的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-0-new-object-和-object-create的区别"}},[t._v("#")]),t._v(" 4.0 new Object 和 Object.create的区别")]),t._v(" "),e("p",[t._v("1.0 new Object()继承内置对象Object，Object.create继承指定对象\n"),e("br"),t._v("\n2.0 可以通过Object.create(null) 创建一个干净的对象，也就是没有原型，而 new Object() 创建的对象是 Object的实例，原型永远指向Object.prototype.")]),t._v(" "),e("h2",{attrs:{id:"判断js对象是否拥有某属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#判断js对象是否拥有某属性"}},[t._v("#")]),t._v(" 判断JS对象是否拥有某属性")]),t._v(" "),e("p",[t._v("1.0 in 运算符")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var obj = {name:'jack'};\nalert('name' in obj); // --\x3e true\nalert('toString' in obj); // --\x3e true\n无论是name，还是原形链上的toString，都能检测到返回true。\n")])])]),e("p",[t._v("2.0 hasOwnProperty 方法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var obj = {name:'jack'};\nobj.hasOwnProperty('name'); // --\x3e true\nobj.hasOwnProperty('toString'); // --\x3e false\n原型链上继承过来的属性无法通过hasOwnProperty检测到，返回false。\n")])])])])}),[],!1,null,null,null);n.default=r.exports}}]);