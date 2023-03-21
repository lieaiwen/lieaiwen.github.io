(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{290:function(t,n,e){"use strict";e.r(n);var a=e(6),s=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"js中的类型检测（三种）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js中的类型检测（三种）"}},[t._v("#")]),t._v(" js中的类型检测（三种）")]),t._v(" "),e("p",[t._v("1.0 typeof：主要用于检测基本类型")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'undefined'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> string")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> number")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> boolean")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> object")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> object")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> object")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=> function")]),t._v("\n")])])]),e("p",[t._v("判断一个变量是否存在 我们是用")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" a"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"undefined"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ok'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//不用 if(a) 因为 a 不存在(未声明)则会出错。")]),t._v("\n")])])]),e("p",[t._v("注意："),e("br"),t._v("\n对于 Array,Null 等特殊对象使用 typeof 一律返回 object，这正是 typeof 的局限性。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('经常会在js里用到数组,比如 多个名字相同的input, 若是动态生成的, 提交时就需要判断其是否是数组. \n\n    if(document.mylist.length != "undefined" ) {} //这个用法有误. \n\n正确的是 if( typeof(document.mylist.length) != "undefined" ) {} \n\n    或 if( !isNaN(document.mylist.length) ) {} \n\n    typeof的运算数未定义,返回的就是 "undefined". \n')])])]),e("p",[t._v("在 JavaScript 中，判断一个变量的类型尝尝会用 typeof 运算符，在使用 typeof 运算符时采用引用类型存储值会出现一个问题，无论引用的是什么类型的对象，它都返回 “object”。这就需要用到instanceof来检测某个对象是不是另一个对象的实例。\n"),e("br"),t._v("\n2.0 instanceof：主要用于检测引用类型(左边是对象，右边是函数.根据对象的原形链往上找，如果原形链上有右边函数.prototype，返回true;否则返回false)\n"),e("br"),t._v("\ninstanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。"),e("br")]),t._v(" "),e("p",[t._v("语法：object instanceof constructor"),e("br"),t._v("\n参数：object（要检测的对象.）constructor（某个构造函数）"),e("br"),t._v("\n描述：instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上。"),e("br")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("instanceof 用于判断一个变量是否某个对象的实例，\n1.0 var obj = {}; obj instanceof Object; //=> true; \n\n2.0 var a=new Array();\nalert(a instanceof Array); // true，\n同时 alert(a instanceof Object) //也会返回 true;\n这是因为 Array 是 object 的子类。\n\n3.0 var arr = []; arr instanceof Array; //=> true;\n\n4.0 var fn = function() {}; fn instanceof Function; //=> true;\nfunction test(){};\nvar a=new test();\nalert(a instanceof test) 会返回true\nvar b=new test();\nalert(a==b);  //flase\n\n5.0 更重的一点是 instanceof 可以在继承关系中用来判断一个实例是否属于它的父类型。\n    例如：\n    function Foo(){} \n    Foo.prototype = new Aoo();//JavaScript 原型继承 \n    var foo = new Foo(); \n    console.log(foo instanceof Foo)//true \n    console.log(foo instanceof Aoo)//true\n\n    上面的代码中是判断了一层继承关系中的父类，在多层继承关系中，instanceof 运算符同样适用。\n    又如：\n    console.log(Object instanceof Object);//true \n    console.log(Function instanceof Function);//true \n    console.log(Function instanceof Object);//true  \n    console.log(Foo instanceof Function);//true \n    console.log(Number instanceof Number);//false \n    console.log(String instanceof String);//false  \n    console.log(Foo instanceof Foo);//false\n6.0 // 定义构造函数\n    function C(){} \n    function D(){} \n    \n    var o = new C();\n    \n    // true，因为 Object.getPrototypeOf(o) === C.prototype\n    o instanceof C; \n    \n    // false，因为 D.prototype不在o的原型链上\n    o instanceof D; \n    \n    o instanceof Object; // true,因为Object.prototype.isPrototypeOf(o)返回true\n    C.prototype instanceof Object // true,同上\n    \n    C.prototype = {};\n    var o2 = new C();\n    \n    o2 instanceof C; // true\n    \n    o instanceof C; // false,C.prototype指向了一个空对象,这个空对象不在o的原型链上.\n\n    D.prototype = new C(); // 继承\n    var o3 = new D();\n    o3 instanceof D; // true\n    o3 instanceof C; // true\n")])])]),e("p",[t._v("谈到 instanceof 我们要多插入一个问题，就是 function 的 arguments，我们大家也许都认为 arguments 是一个 Array，但如果使用 instaceof 去测试会发现 arguments 不是一个 Array 对象，尽管看起来很像。\n"),e("br"),t._v("\n另外：\n"),e("br"),t._v("\n测试 var a=new Array();if (a instanceof Object) alert('Y');else alert('N');//得'Y’\n"),e("br"),t._v("\n但 if (window instanceof Object) alert('Y');else alert('N'); //得'N'\n"),e("br"),t._v("\n所以，这里的 instanceof 测试的 object 是指 js 语法中的 object，不是指 dom 模型对象。\n"),e("br"),t._v("\n使用 typeof 会有些区别"),e("br"),t._v("\nalert(typeof(window)) 会得 object "),e("br")]),t._v(" "),e("p",[t._v("需要注意的是，如果表达式 obj instanceof Foo 返回true，则并不意味着该表达式会永远返回ture，因为Foo.prototype属性的值有可能会改变，改变之后的值很有可能不存在于obj的原型链上，这时原表达式的值就会成为false。另外一种情况下，原表达式的值也会改变，就是改变对象obj的原型链的情况，虽然在目前的ES规范中，我们只能读取对象的原型而不能改变它，但借助于非标准的__proto__魔法属性，是可以实现的。比如执行obj."),e("strong",[t._v("proto")]),t._v(" = {}之后，obj instanceof Foo就会返回false了。\n"),e("br")]),t._v(" "),e("p",[t._v("例子: 表明String对象和Date对象都属于Object类型")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('ar simpleStr = "This is a simple string"; \nvar myString  = new String();\nvar newStr    = new String("String created with constructor");\nvar myDate    = new Date();\nvar myObj     = {};\n\nsimpleStr instanceof String; // returns false, 检查原型链会找到 undefined\nmyString  instanceof String; // returns true\nnewStr    instanceof String; // returns true\nmyString  instanceof Object; // returns true\n\nmyObj instanceof Object;    // returns true, despite an undefined prototype\n({})  instanceof Object;    // returns true, 同上\n\nmyString instanceof Date;   // returns false\n\nmyDate instanceof Date;     // returns true\nmyDate instanceof Object;   // returns true\nmyDate instanceof String;   // returns false\n\n注意： \nstr = "2343"\nstr instanceof Striing // false\n因为 只是一个以string为数据类型的值 并不是String的实例对象\nstr instanceof String 在只有左侧是右侧类的对象时才会返回ture\n那么我们看下他是不是Object的实例对象\nstr instanceof Object // false\n')])])]),e("p",[t._v("3.0 Object.prototype.toString.call(sth)：由于原形链的检测有漏洞(原型是可以改变的)，所以会造成检测结果不准确，所以可以采用此种形式.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("var toString = Object.prototype.toString;\ntoString.call(undefined);//=> [object Undefined]\ntoString.call(1);//=> [object Number]\ntoString.call(NaN);//=> [object Number]\ntoString.call('a');//=> [object String]\ntoString.call(true);//=> [object Boolean]\n\ntoString.call({});//=> [object Object]\ntoString.call(function() {});//=> [object Function]\ntoString.call([]);//=> [object Array]\ntoString.call(null);//=> [object Null]\n我们怎么用这种方法获取准确的值呢？\ntoString.call(null).slice(9,-1) \n")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);