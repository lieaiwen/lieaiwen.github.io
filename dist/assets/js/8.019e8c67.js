(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{203:function(t,s,a){t.exports=a.p+"assets/img/v1.cf21b79d.png"},270:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"_5-0-js变量提升"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-0-js变量提升"}},[t._v("#")]),t._v(" 5.0 js变量提升")]),t._v(" "),n("blockquote",[n("p",[t._v("任何声明在某个作用域内的变量，都将附属于这个作用域。但是作用域同其中的变量声明出现的位置有某种微妙的联系。这就涉及到JavaScript中的一个很重要的特性：变量提升。")])]),t._v(" "),n("p",[t._v("直觉上会认为JavaScript代码在执行上是一行一行从上往下执行的。但是有一种特殊情况会导致这种假设是错误的。\n"),n("br")]),t._v(" "),n("p",[t._v("栗子：")]),t._v(" "),n("div",{staticClass:"language-angular2html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    a = 2;\n    var a;\n    console.log(a);\n")])])]),n("p",[t._v("结果为：2")]),t._v(" "),n("div",{staticClass:"language-angular2html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    console.log(a);\n    var a = 2;\n")])])]),n("p",[t._v("结果为：undefined "),n("br")]),t._v(" "),n("p",[t._v("为什么会出现这种情况？")]),t._v(" "),n("p",[t._v("答案是："),n("strong",[t._v("编译器")]),t._v("，在js代码执行之前编译器会进行编译。编译中的一部分工作就是找到所有的声明，并用合适的作用域将它们关联起来。因此，正确的思路是，包括变量和函数在内的声明都会在代码被执行前首先被处理。\n"),n("br")]),t._v(" "),n("p",[t._v("所以，我们用编译器的角度来分析下第一段代码，可以重写为：")]),t._v(" "),n("div",{staticClass:"language-angular2html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    var a;\n    a = 2;\n    console.log(2); // 2\n\n")])])]),n("p",[t._v("再看第二段代码，等价为：")]),t._v(" "),n("div",{staticClass:"language-angular2html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    var a;\n    console.log(a);\n    a = 2;\n")])])]),n("p",[n("strong",[t._v("注意：")]),t._v(" 如果在函数中定义变量时没有指定 var 关键字，那么这个变量会自动提升为全局作用域的变量。")]),t._v(" "),n("p",[t._v("同理，函数声明会被提升，函数表达式却不会提升。比如：")]),t._v(" "),n("div",{staticClass:"language-angular2html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    console.log(foo); // foo函数\n    console.log(test); // undefined\n    function foo() {\n        console.log('foo');\n    }\n    \n    var test = function() {\n        console.log('test');\n    }\n")])])]),n("p",[t._v("函数声明和变量声明都会被提升，但是需要注意的是，函数会首先被提升，然后才是变量 "),n("strong",[t._v("（函数是第一共公民🙂）")]),t._v(" 。")]),t._v(" "),n("div",{staticClass:"language-angular2html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    console.log(foo); // foo函数\n    var foo = 'test';\n    function foo() {\n        console.log('foo');\n    }\n")])])]),n("p",[t._v("尽管变量foo的声明在函数foo的声明之前，但是因为函数声明会首先被提升，所以先声明了foo函数，当遇到变量foo的声明时，因为已经有了声明，所以重复的声明会被编译器忽略掉。所以上面的代码在编译器视角是这样子的：\n"),n("br")]),t._v(" "),n("div",{staticClass:"language-angular2html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    function foo() {\n        console.log('foo');\n    }\n    var foo; // 重复声明，被忽略\n    console.log(foo); // 函数foo\n\n")])])]),n("p",[n("strong",[t._v("注意：")]),t._v(" 虽然重复的var声明会被忽略，但是出现在后面的函数声明还是可以覆盖前面的声明的。")]),t._v(" "),n("div",{staticClass:"language-angular2html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("    function foo(){\n        console.log(123)\n    }\n    console.log(foo()) // 456\n    function foo(){\n        console.log(456)\n    }\n")])])]),n("h4",{attrs:{id:"let、const-以及-var-的区别是什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#let、const-以及-var-的区别是什么"}},[t._v("#")]),t._v(" LET、CONST 以及 VAR 的区别是什么?")]),t._v(" "),n("p",[t._v("1.0 其是否会挂载到window上")]),t._v(" "),n("blockquote",[n("p",[t._v("var声明的变量会挂载在window上，而let和const声明的变量不会挂载到window上，它形成了一个块作用域")])]),t._v(" "),n("p",[t._v("2.0 是否存在变量提升")]),t._v(" "),n("blockquote",[n("p",[t._v("var声明变量存在变量提升，let和const不存在变量提升")])]),t._v(" "),n("p",[t._v("3.0 是否形成块作用域\nlet和const声明形成块作用域，var变量提升不会形成作用域")]),t._v(" "),n("p",[t._v("4.0 同一作用域下是否可以重复声明")]),t._v(" "),n("blockquote",[n("p",[t._v("同一作用域下let和const不允许重复声明，否则会报错，而var可以")])]),t._v(" "),n("p",[t._v("5.0 是否可以修改")]),t._v(" "),n("blockquote",[n("p",[t._v("var和let可以可以修改声明的变量，const不可以。")])]),t._v(" "),n("p",[t._v("6.0 暂时性死区")]),t._v(" "),n("blockquote",[n("p",[t._v("let 和 const 定义的变量在定义之前调用，会抛出错误(形成了暂时性死区)，而 var 不会。")])]),t._v(" "),n("p",[t._v("7.0 是否一旦声明，必须立即初始化赋值")]),t._v(" "),n("blockquote",[n("p",[t._v("var 和 let 声明的时候可以不初始化赋值，const声明时必须赋值。")])]),t._v(" "),n("p",[n("strong",[t._v("经典面试题")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//因为i 是全局变量 然而 arr 里面存的都是 function(){ console.log(i) } // 所以打印的都是3")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//怎么解决呢？")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("i")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\narr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//用es6的方法解决")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\narr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n")])])]),n("h4",{attrs:{id:"全局作用域中，用const和let声明的变量去哪了"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#全局作用域中，用const和let声明的变量去哪了"}},[t._v("#")]),t._v(" 全局作用域中，用CONST和LET声明的变量去哪了")]),t._v(" "),n("p",[t._v("1.0 在ES5中，全局变量直接挂载到全局对象window的属性上，所以能在window上看到var和function声明的全局变量")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 10")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("f"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// f(){}")]),t._v("\n")])])]),n("p",[t._v("2.0 在ES6中，全局变量从全局对象WINDOW中脱离，但是为了保持兼容性，旧的不变，所以VAR、FUNCTION声明的全局变量依然可以在WINDOW对象上看到，而LET、CONST声明的全局变量在WINDOW对象上看不到，在SCRIPT中形成了一个块级作用域，这样在全局就可以访问到")]),t._v(" "),n("div",{staticClass:"language-angular2html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("let a = 1;\nconst B = 2;\n \nconsole.log(window.a); // undefined\nconsole.log(window.B); // undefined\nconsole.log(a);     // 1,  通过块作用域访问到的\nconsole.log(B);   // 2， 通过块作用域访问到的\n")])])]),n("p",[t._v("通过设置断点，看看浏览器是怎么处理的\n"),n("img",{attrs:{src:a(203),alt:"avatar"}}),n("br")]),t._v(" "),n("p",[t._v("通过上图也可以看到，在全局作用域中，用 let 和 const 声明的全局变量并没有在全局对象中，只是一个块级作用域（Script）中。\n"),n("br"),t._v("\n那要怎么获取呢？在定义变量的块级作用域中就能获取")]),t._v(" "),n("h4",{attrs:{id:"const-定义的常量不可修改，定义的对象可以修改为什么？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#const-定义的常量不可修改，定义的对象可以修改为什么？"}},[t._v("#")]),t._v(" const 定义的常量不可修改，定义的对象可以修改为什么？")]),t._v(" "),n("blockquote",[n("p",[t._v("const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。")])]),t._v(" "),n("p",[t._v("1.0 对于"),n("strong",[t._v("基本类型")]),t._v("的数据（数值、字符串、布尔值），"),n("strong",[t._v("值就保存在变量指向的那个内存地址")]),t._v("，因此等同于常量。")]),t._v(" "),n("p",[t._v("2.0 对于"),n("strong",[t._v("引用类型")]),t._v("的数据（主要是对象和数组），"),n("strong",[t._v("变量指向的内存地址，保存的只是一个指向实际数据的指针")]),t._v("，const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了")]),t._v(" "),n("p",[n("strong",[t._v("Tips")]),t._v(": Object.freeze()")]),t._v(" "),n("p",[t._v("Object.freeze() 方法可以冻结一个对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。freeze() 返回和传入的参数相同的对象。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" nobj "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("freeze")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("hr"),t._v("\n人生总是在前行，不论走到哪里，只要带着信念往前走，比别人多一点努力，你就会多一份成绩；比别人多一点志气，你就会多一份出息；比别人多一点坚持，你就会夺取胜利；比别人多一点执着，你就会创造奇迹。\n")])}),[],!1,null,null,null);s.default=e.exports}}]);