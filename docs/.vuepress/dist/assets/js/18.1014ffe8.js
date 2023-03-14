(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{204:function(e,n,t){"use strict";t.r(n);var a=t(6),r=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"js对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js对象"}},[e._v("#")]),e._v(" js对象")]),e._v(" "),t("p",[e._v("js中所有的事情都是对象：字符串，数字，数组，日期等"),t("br"),e._v("\n在js中 对象是拥有属性和方法的数据 "),t("br"),e._v("\n属性 是与对象相关的值 "),t("br"),e._v("\n方法 是能够在对象上执行的动作 "),t("br")]),t("hr"),e._v('\n比如： var txt = "hello";'),t("br"),e._v("\n这实际上创建了一个js字符串对象，字符串拥有内建的属性length "),t("br"),e._v("\ntxt.length = 5 ; "),t("br"),e._v("\n同时拥有若干个内建的方法："),t("br"),e._v("Object.defineProperty() 方法\ntxt.indexOf(); //判断某个字符在不在 字符串中 txt.indexOf('e')"),t("br"),e._v("\ntxt.replace(); // 替换某个字符 txt.replace('l','aa')"),t("br"),e._v("\ntxt.search(); //判断某个字符在不在 字符串中 txt.search('a')"),t("br"),e._v(" "),t("hr"),e._v("\n在面向对象的语言中，属性和方法常被称为对象的成员。"),t("br"),t("p"),e._v(" "),t("h3",{attrs:{id:"创建一个对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建一个对象"}},[e._v("#")]),e._v(" 创建一个对象")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\tvar person = new Object();\n\tperson.name = \"bill\"; // 添加属性\n\tperson.sleep = function(){ // 添加方法\n\t\tconsole.log(this.name + '在睡觉');\n\t}\n\t访问属性\n\tperson.name\n\t并可以用 String 对象的length属性 比如\n\tperson.name.length\n\t使用 String 对象的toUpperCase()方法把文本准换为大写\n\tvar x = person.name.toUpperCase();// BILL\n")])])]),t("h2",{attrs:{id:"问题：-创建js对象的集中方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题：-创建js对象的集中方法"}},[e._v("#")]),e._v(" 问题： 创建js对象的集中方法")]),e._v(" "),t("p",[e._v("1.0 通过new关键字创建对象")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var obj = new Object(); \n")])])]),t("p",[e._v("2.0  通过字面量创建对象")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var obj = { \n\tname:'lele'， \n\tage:function(){\n\t\tconsole.log('789456')\n\t}\n}<br>\n")])])]),t("p",[e._v("3.0 通过构造函数创建对象")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 建议首字母大写\nfunction Person(name,age){\n\tthis.name = name;\n\tthis.age = age;\n\tthis.say = function(){\n\t\tconsole.log('我是'+this.name)\n\t}\n}\nvar person1 = new Person('bill',13)\nvar person2 = new PErson('wen',54)\n")])])]),t("p",[e._v("注意：访问对象的属性 两种： "),t("br")]),e._v(" "),t("p",[e._v("0.1 通过点访问 obj.name  "),t("br"),e._v("\n0.2 通过中括号访问。obj['name']  "),t("br"),e._v("\n访问 方法 只能用点 obj.say()")]),e._v(" "),t("h2",{attrs:{id:"问题：-this指向问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题：-this指向问题"}},[e._v("#")]),e._v(" 问题： this指向问题")]),e._v(" "),t("p",[e._v("他代表函数运行时，自动生成的一个内部对象，只能在函数内部使用。"),t("br"),e._v("\n随着函数使用场合的不同，this的值会发生变化。但是有一个总的原则，"),t("br")]),e._v(" "),t("p",[e._v("重点：：那就是this指的是，调用函数的那个对象。"),t("br")]),e._v(" "),t("p",[e._v("1.0 纯粹的函数调用 "),t("br"),e._v("\n这是函数的最通常的用法，属于全局性调用，因此this就代表全局对象(Global)")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var index = 0;\nfunction fun(){\n\t// 此处的this代表就是全局对象 window\n\tthis.index = 1;\n}\nfun();\nconsole.log(index);// 1\n")])])]),t("p",[e._v("因为我们使用window.fun()来调用函数，调用函数的那个对象是window，所以this的指向的也是window。\t"),t("br")]),e._v(" "),t("p",[e._v("2.0 作为对象方法的调用 "),t("br"),e._v("\n作为对象方法的调用，this指向当前实例对象。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('var point = {\n\tx:0,\n\ty:0,\n\tmoveTo:function(x,y){\n\t\tthis.x += x;\n\t\tthis.y += y;\n\t}\n}\npoint.moveTo(10,10);\nconsole.log("x: " + point.x + " y: " + point.y);  // 输出：x: 10 y: 10\n')])])]),t("p",[e._v("因为point.moveTo()来调用函数，调用函数的那个对象是point，所以this指向的也是point  "),t("br")]),e._v(" "),t("p",[e._v("3.0 作为构造函数调用"),t("br"),e._v("\n所谓构造函数，就是通过这个函数生成一个新对象(object)，这时this就指这个新对象。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function Student(){\n\tthis.name = 'asd';\n}\nvar s1 = new Student();\ns1.name // asd \n")])])]),t("p",[e._v("构造函数 不能在外面添加 属性和方法 比如 Student.age = 18;这样是不对的")]),e._v(" "),t("h2",{attrs:{id:"for-in-遍历对象和数组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#for-in-遍历对象和数组"}},[e._v("#")]),e._v(" for in 遍历对象和数组")]),e._v(" "),t("p",[e._v("遍历对象")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var obj ={\n\tname:'a',\n\tage:10,\n\tsex:'man'\n}\nfor(var attr in obj){\n\tif(typeof obj[attr] != 'function'){\n\t\tconsole.log('属性值'+obj[attr])\n\t}\n}\n")])])]),t("p",[e._v("遍历数组")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var arr = [1,2,3,4]\nfor(var attr in arr){\n\tconsole.log(arr[attr])\n}\n")])])]),t("h2",{attrs:{id:"删除对象属性delete"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除对象属性delete"}},[e._v("#")]),e._v(" 删除对象属性delete")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('var person = {\n\tfirstName:"Bill", \n\tlastName:"Gates",\n \tage:62,\n \teyeColor:"blue"\n};\ndelete person.age;\n')])])]),t("h2",{attrs:{id:"js对象访问器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js对象访问器"}},[e._v("#")]),e._v(" js对象访问器")]),e._v(" "),t("p",[e._v("es5 引入了Getter 和Setter 他俩允许您定义对象访问器(被计算的属性)")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Getter(get关键字)\nvar persona = {\n\tfirstName:'zheng',\n\tlastName:'ll',\n\tget name(){\n\t\treturn this.firstName;\n\t}\n}\nconsole.log(person.name) // 'zheng'\n")])])]),t("p",[e._v("Setter(set关键字)")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var persona = {\n\tfirstName:'zheng',\n\tlastName:'ll',\n\tset name(ne){\n\t\tthis.firstName = ne;\n\t}\n}\nperson.name  = \"aiai\";\nconsole.log(person.firstName) // 'aiai'\n")])])]),t("p",[e._v("js函数还是 Getter 区别在哪里？")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var persona = {\n\tfirstName:'zheng',\n\tlastName:'ll',\n\toName:function(){\n\t\treturn this.firstName;\n\t}\n}\nconsole.log(person.oName()) // 'zheng'\n")])])]),t("p",[e._v("对比：console.log(person.name) "),t("br"),e._v("\nconsole.log(person.oName()) "),t("br"),e._v("\n为什么使用Getter 和Setter？ "),t("br"),e._v("\n1.0 第一个更简洁 "),t("br"),e._v("\n2.0 它允许属性 跟方法的语法相同 "),t("br"),e._v("\n3.0 它可以确保更好的数据质量 "),t("br"),e._v("\n4.0 有利于后台工作  "),t("br"),e._v("\n数据质量更好")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('1.0  使用 lang 属性以大写形式返回 language 属性的值：\n// Create an object:\nvar person = {\n firstName: "Bill",\n lastName : "Gates",\n language : "en",\n get lang() {\n   return this.language.toUpperCase();\n }\n};\n\n// 使用 getter 来显示来自对象的数据：\nperson.lang\n\n2.0 使用 lang 属性将大写值存储在 language 属性中：\nvar person = {\n firstName: "Bill",\n lastName : "Gates",\n language : "",\n set lang(lang) {\n   this.language = lang.toUpperCase();\n }\n};\n\n// 使用 getter 来设置对象属性：\nperson.lang = "en";\n\n// 显示来自对象的数据：\nperson.language;\n')])])]),t("p",[e._v("实例：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var obj = {\n counter : 0,\n get reset() {\n   this.counter = 0;\n },\n get increment() {\n   this.counter++;\n },\n get decrement() {\n   this.counter--;\n },\n set add(value) {\n   this.counter += value;\n },\n set subtract(value) {\n   this.counter -= value;\n }\n};\n\n// 操作计数器：\nobj.reset;\nobj.add = 5;\nobj.subtract = 1;\nobj.increment;\nobj.decrement;\n")])])]),t("p",[e._v("Object.defineProperty() 方法也可用于添加 Getter 和 Setter：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// 定义对象\nvar obj = {counter : 0};\n\n// 定义 setters\nObject.defineProperty(obj, "reset", {\n  get : function () {this.counter = 0;}\n});\nObject.defineProperty(obj, "increment", {\n  get : function () {this.counter++;}\n});\nObject.defineProperty(obj, "decrement", {\n  get : function () {this.counter--;}\n});\nObject.defineProperty(obj, "add", {\n  set : function (value) {this.counter += value;}\n});\nObject.defineProperty(obj, "subtract", {\n  set : function (value) {this.counter -= value;}\n});\n\n// 操作计数器：\nobj.reset;\nobj.add = 5;\nobj.subtract = 1;\nobj.increment;\nobj.decrement;\n')])])]),t("p",[e._v("Object.defineProperty() 的作用就是直接在一个对象上\n定义一个新属性，或者修改一个已经存在的属性")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Object.defineProperty(obj, prop, desc)\nobj 需要定义属性的当前对象\nprop 当前需要定义的属性名\ndesc 属性描述符 必须是 Object\n")])])]),t("p",[e._v("例子")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\nlet Person = {}\n\nObject.defineProperty(Person,'name',{name:'ll'}) // 这种不指定的话不可逆 再定义任何属性都会报错\nPerson.name //undefined\n// 因为writable 默认是false，不能改变属性的值\n上面desc(数据描述符)--特有的两个属性（value，writable）\n应该这样写\nObject.defineProperty(Person, 'name', {\n   value: 'jack',\n   writable: true // 是否可以改变\n})\nPerson.name //jack\n\n其中还有属性  configurable(是否可以删除)、\nenumerable(是否可以枚举)、\nwritable(是否可以修改)  默认都是false\n")])])]),t("h2",{attrs:{id:"内建js构造器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内建js构造器"}},[e._v("#")]),e._v(" 内建js构造器")]),e._v(" "),t("p",[e._v("JavaScript 提供用于原始对象的构造器：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var x1 = new Object();    // 一个新的 Object 对象\nvar x2 = new String();    // 一个新的 String 对象\nvar x3 = new Number();    // 一个新的 Number 对象\nvar x4 = new Boolean();   // 一个新的 Boolean 对象\nvar x5 = new Array();     // 一个新的 Array 对象\nvar x6 = new RegExp();    // 一个新的 RegExp 对象\nvar x7 = new Function();  // 一个新的 Function 对象\nvar x8 = new Date();      // 一个新的 Date 对象\n注意： Math() 对象不再此列。Math 是全局对象。new 关键词不可用于 Math。\n")])])]),t("p",[e._v("正如以上所见，JavaScript 提供原始数据类型字符串、数字和布尔的对象版本。但是并无理由创建复杂的对象。原始值快得多！")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('请使用对象字面量 {} 代替 new Object()。\n\n请使用字符串字面量 "" 代替 new String()。\n\n请使用数值字面量代替 Number()。\n\n请使用布尔字面量代替 new Boolean()。\n\n请使用数组字面量 [] 代替 new Array()。\n\n请使用模式字面量代替 new RexExp()。\n\n请使用函数表达式 () {} 代替 new Function()。\nvar x1 = {};            // 新对象\nvar x2 = "";            // 新的原始字符串\nvar x3 = 0;             // 新的原始数值\nvar x4 = false;         // 新的原始逻辑值\nvar x5 = [];            // 新的数组对象\nvar x6 = /()/           // 新的正则表达式对象\nvar x7 = function(){};  // 新的函数对象\n')])])]),t("p",[e._v("为什么不建议使用 new")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('var x = "Bill";\nvar y = new String("Bill");\n\n// typeof x 将返回 string\n// typeof y 将返回 object\n')])])]),t("p",[e._v("2.0 请不要把字符串创建为对象。它会拖慢执行速度。"),t("br")]),e._v(" "),t("p",[e._v("new 关键字使代码复杂化。也可能产生一些意想不到的结果："),t("br")]),e._v(" "),t("p",[e._v("当使用 == 相等运算符时，相等字符串是相等的："),t("br")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('var x = "Bill";             \nvar y = new String("Bill");\n\n// (x == y) 为 true，因为 x 和 y 的值相等\n')])])]),t("p",[e._v("3.0 当使用 === 运算符时，相等字符串是不相等的，因为 === 运算符需要类型和值同时相等。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('var x = "Bill";             \nvar y = new String("Bill");\n\n// (x === y) 为 false，因为 x 和 y 的类型不同（字符串与对象）\n')])])]),t("p",[e._v("4.0 甚至更糟。对象无法比较：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('var x = new String("Bill");             \nvar y = new String("Bill");\n\n// (x == y) 为 false，因为 x 和 y 是不同的对象\n\nvar x = new String("Bill");             \nvar y = new String("Bill");\n\n// (x === y) 为 false，因为 x 和 y 是不同的对象\n请注意 (x==y) 与 (x===y) 的区别。\n\nJavaScript 对象无法进行对比，比较两个 JavaScript 对象将始终返回 false。\n')])])]),t("h2",{attrs:{id:"js-对象原型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js-对象原型"}},[e._v("#")]),e._v(" js 对象原型")]),e._v(" "),t("p",[e._v("所有 JavaScript 对象都从原型继承属性和方法。 "),t("br"),e._v("\n我们上面知道了 我们无法为已有的对象构造器添加新的属性和方法。"),t("br"),e._v("\n日期对象继承自 Date.prototype "),t("br"),e._v("\n数组对象继承自 Array.prototype"),t("br"),e._v("\nPerson对象继承自 Person.prototype"),t("br"),e._v("\nObject.prototype 位于原型继承链的顶端"),t("br"),e._v("\n日期对象,数组对象和Person 对象都继承自 Object.prototype"),t("br")]),e._v(" "),t("p",[e._v("有时候 你希望向所有给定类型的已有对象添加新属性(或方法)"),t("br"),e._v("\n有时候 你希望向对象构造器添加新属性(或方法)。"),t("br"),e._v("\n使用prototype 属性"),t("br"),e._v("\njs prototype 属性允许您为对象构造器添加新属性和方法：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('function Person(first, last, age, eyecolor) {\n    this.firstName = first;\n    this.lastName = last;\n    this.age = age;\n    this.eyeColor = eyecolor;\n}\nPerson.prototype.nationality = "English";\nPerson.prototype.name = function() {\n    return this.firstName + " " + this.lastName;\n};\nvar myFriend = new Person("Bill", "Gates", 62, "blue");\nmyFriend.nationality // English\nmyFriend.name // Bill Gates\n')])])]),t("p",[e._v("注意： 请只修改您自己的原型，绝不要 修改标准js对象的原型")]),e._v(" "),t("h2",{attrs:{id:"es5-为js添加了大量新的对象方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es5-为js添加了大量新的对象方法"}},[e._v("#")]),e._v(" es5 为js添加了大量新的对象方法")]),e._v(" "),t("p",[e._v("es5 新的对象方法")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// 添加或更改对象属性\nObject.defineProperty(object, property, descriptor)\n\n// 添加或更改多个对象属性\nObject.defineProperties(object, descriptors)\n\n// 访问属性\nObject.getOwnPropertyDescriptor(object, property)\n\n// 以数组返回所有属性\nObject.getOwnPropertyNames(object)\n\n// 以数组返回所有可枚举的属性\nObject.keys(object)\n\n// 访问原型\nObject.getPrototypeOf(object)\n\n// 阻止向对象添加属性\nObject.preventExtensions(object)\n\n// 如果可将属性添加到对象，则返回 true\nObject.isExtensible(object)\n\n// 防止更改对象属性（而不是值）\nObject.seal(object)\n\n// 如果对象被密封，则返回 true\nObject.isSealed(object)\n\n// 防止对对象进行任何更改\nObject.freeze(object)\n\n// 如果对象被冻结，则返回 true\nObject.isFrozen(object)\n\n\nES5 允许更改以下属性元数据：\nwritable : true      // 属性值可修改\nenumerable : true    // 属性可枚举\nconfigurable : true  // 属性可重新配置\nwritable : false     // 属性值不可修改\nenumerable : false   // 属性不可枚举\nconfigurable : false // 属性不可重新配置\n")])])]),t("h2",{attrs:{id:"object-defineproperty"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#object-defineproperty"}},[e._v("#")]),e._v(" Object.defineProperty()")]),e._v(" "),t("p",[e._v("一个有意思的例子")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('var a = new function() {return "圆心"}; \nconsole.log(a); // [object object] \n\nfunction x(){ \n    return "圆心"; \n} \nvar a = new x(); \n console.log(a); // [object object] \n\n var a = new function() {return new String("圆心")}; \n console.log(a); // 圆心\n\n为什么：\n var a=new function(){}\n 在javascript中，方法被当作一个类来处理，这中定义方式下，a即带表了这个方法的类，也就是这个方法本身。\n\n但是有一种特殊情况，若是在该方法中，返回值为数组、方法、或是别的类，那么a不在表示该方法，而是表示返回的新类了。 \n只要 new 表达式之后返回（return）一个引用对象（数组，对象，函数等），都将覆盖new创建的匿名对象，如果返回（return）一个原始类型（无 return 时其实为 return 原始类型 undefined），那么就返回 new 创建的匿名对象\n由于 new String 会构造一个对象，而不是一个 string 直接量，且new String(x) 如果带参数，那么alert它的时候就会返回 x。所以 yx01 将返回 new String(”圆心”) 这个对象，而 alert yx01 则显示 “圆心”。\n')])])]),t("h2",{attrs:{id:"object-assign-基本方法-拷贝相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#object-assign-基本方法-拷贝相关"}},[e._v("#")]),e._v(" Object.assign() 基本方法 拷贝相关")]),e._v(" "),t("p",[e._v("Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const target = { a: 1 };\n\nconst source1 = { b: 2 };\nconst source2 = { c: 3 };\n\nObject.assign(target, source1, source2);\ntarget // {a:1, b:2, c:3}\n")])])]),t("p",[t("a",{attrs:{href:"https://www.jianshu.com/p/d5f572dd3776",target:"_blank",rel:"noopener noreferrer"}},[e._v("example"),t("OutboundLink")],1),e._v(" "),t("br")])])}),[],!1,null,null,null);n.default=r.exports}}]);