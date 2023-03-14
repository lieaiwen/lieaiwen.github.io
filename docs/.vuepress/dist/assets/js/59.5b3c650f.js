(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{258:function(n,o,e){"use strict";e.r(o);var t=e(6),r=Object(t.a)({},(function(){var n=this,o=n.$createElement,e=n._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"js-原型和原型链"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js-原型和原型链"}},[n._v("#")]),n._v(" js 原型和原型链")]),n._v(" "),e("blockquote",[e("p",[n._v("本来是不想写的，但是想了想还是要用自己的语言记录一下要不然，怎么都记不住")])]),n._v(" "),e("p",[e("strong",[n._v("外加一句这个原型是所有js的根本必须记死了")])]),n._v(" "),e("p",[n._v("构造函数创建一个对象")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('function Person(){}\n\nvar person = new Person();\nperson.name = "Kevin";\nconsole.log(person.name) // Kevin \n')])])]),e("p",[e("strong",[n._v("1.0 prototype")])]),n._v(" "),e("p",[n._v("每个函数都有一个prototype属性")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v(" function Person() {\n \n }\n // 虽然写在注释里，但是你要注意：\n // prototype是函数才会有的属性\n Person.prototype.name = 'Kevin';\n var person1 = new Person();\n var person2 = new Person();\n console.log(person1.name) // Kevin\n console.log(person2.name) // Kevin\n")])])]),e("p",[n._v("函数的 prototype 属性指向了一个对象，这个对象正是调用该构造函数而创建的实例的原型，也就是这个例子中的 person1 和 person2 的原型。\n"),e("br"),n._v('\n那什么是原型呢？你可以这样理解：每一个JavaScript对象(null除外)在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性。')]),n._v(" "),e("p",[e("img",{attrs:{src:"/images/js/proto-1.png",alt:"avatar"}}),n._v(" "),e("br")]),n._v(" "),e("p",[n._v("我们用Person.prototype 表示实例原型。\n"),e("br"),n._v("\n那我们怎么表示实例与实例原型呢？也就是person和Person之间的关联")]),n._v(" "),e("p",[e("strong",[n._v("2.0 "),e("strong",[n._v("proto")])])]),n._v(" "),e("blockquote",[e("p",[n._v("每一个js对象（null除外）都有一个属性__proto__属性，这个属性指向对象的原型。")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function Person(){}\nvar person = new Person();\nconsole.log(person.__proto__ === Person.prototype) // true \n")])])]),e("p",[n._v("于是就有了下图的关系:\n"),e("img",{attrs:{src:"/images/js/proto-2.png",alt:"avatar"}}),n._v(" "),e("br"),n._v("\n可以看到实例对象和构造函数都指向 原型。")]),n._v(" "),e("p",[e("strong",[n._v("3.0 constructor属性")])]),n._v(" "),e("blockquote",[e("p",[n._v("每个原型都有一个 constructor 属性指向关联的构造函数。")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v(" function Person() {}\n console.log(Person === Person.prototype.constructor); // true\n")])])]),e("p",[n._v("更新关系图：\n"),e("img",{attrs:{src:"/images/js/proto-3.png",alt:"avatar"}}),n._v(" "),e("br"),n._v("\n综上我们已经得出：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v(" function Person() {\n \n }\n \n var person = new Person();\n console.log(person.__proto__ == Person.prototype) // true\n console.log(Person.prototype.constructor == Person) // true\n // 顺便学习一个ES5的方法,可以获得对象的原型\n console.log(Object.getPrototypeOf(person) === Person.prototype) // true\n")])])]),e("p",[e("strong",[n._v("4.0 实例与原型")])]),n._v(" "),e("p",[n._v("当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。(Object.prototype)")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function Person() {\n\n}\n\nPerson.prototype.name = 'Kevin';\n\nvar person = new Person();\n\nperson.name = 'Daisy';\nconsole.log(person.name) // Daisy\n\ndelete person.name;\nconsole.log(person.name) // Kevin\n")])])]),e("p",[n._v("当我们删除了 person 的 name 属性时，读取 person.name，从 person 对象中找不到 name 属性就会从 person 的原型也就是 person."),e("strong",[n._v("proto")]),n._v(" ，也就是 Person.prototype中查找，幸运的是我们找到了 name 属性，结果为 Kevin。\n"),e("br")]),n._v(" "),e("p",[n._v("假设要是没找到呢？\n"),e("br"),n._v("\n其实原型对象就是通过 Object 构造函数生成的，结合之前所讲，实例的 "),e("strong",[n._v("proto")]),n._v(" 指向构造函数的 prototype ，所以我们再更新下关系图：")]),n._v(" "),e("p",[e("img",{attrs:{src:"/images/js/proto-4.png",alt:"avatar"}}),n._v(" "),e("br")]),n._v(" "),e("p",[e("strong",[n._v("5.0 原型链")]),n._v("\n那 Object.prototype 的原型")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v(" console.log(Object.prototype.__proto__ === null) // true\n")])])]),e("blockquote",[e("p",[n._v("null 表示“没有对象”，即该处不应该有值。")])]),n._v(" "),e("p",[n._v("所以 Object.prototype."),e("strong",[n._v("proto")]),n._v(" 的值为 null 跟 Object.prototype 没有原型，其实表达了一个意思。\n"),e("br"),n._v("\n所以查找属性的时候查到 Object.prototype 就可以停止查找了。\n"),e("br"),n._v(" "),e("img",{attrs:{src:"/images/js/proto-5.png",alt:"avatar"}}),n._v(" "),e("br"),n._v("\n顺便还要说一下，图中由相互关联的原型组成的链状结构就是原型链，也就是蓝色的这条线。")]),n._v(" "),e("p",[n._v("最后")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v(" function Person() {\n \n }\n var person = new Person();\n console.log(person.constructor === Person); // true\n")])])]),e("p",[n._v("当获取 person.constructor 时，其实 person 中并没有 constructor 属性,当不能读取到constructor 属性时，会从 person 的原型也就是 Person.prototype 中读取，正好原型中有该属性，所以：")]),n._v(" "),e("blockquote",[e("p",[n._v("person.constructor === Person.prototype.constructor")])]),n._v(" "),e("p",[n._v("当使用 obj."),e("strong",[n._v("proto")]),n._v(" 时，可以理解成返回了 Object.getPrototypeOf(obj)")])])}),[],!1,null,null,null);o.default=r.exports}}]);