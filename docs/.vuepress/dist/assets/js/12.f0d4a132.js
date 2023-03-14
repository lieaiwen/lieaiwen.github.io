(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{202:function(s,e,n){"use strict";n.r(e);var t=n(6),a=Object(t.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"es6-class"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#es6-class"}},[s._v("#")]),s._v(" es6 class")]),s._v(" "),n("p",[s._v("定义：\n在ES6中，class (类)作为对象的模板被引入，可以通过 class 关键字定义类。 "),n("br"),s._v("\nclass 的本质是 function。"),n("br"),s._v("\n它可以看作一个语法糖，让对象原型的写法更加清晰、更像面向对象编程的语法。"),n("br")]),s._v(" "),n("h2",{attrs:{id:"基础用法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基础用法"}},[s._v("#")]),s._v(" 基础用法")]),s._v(" "),n("p",[s._v("在ES5时代，可以像下面这样模拟一个类，先声明一个构造函数，然后在其原型上定义共享的方法，最后与new运算符组合实例化一个类。")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('function People(name) {\n  this.name = name;\n}\nPeople.prototype.getName = function () {\n  return this.name;\n};\nvar people = new People("strick");\npeople.getName();       //"strick"\n')])])]),n("p",[s._v("1.0 类的定义")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 匿名类\nlet Example = class{\n    constructor(a){\n        this.a = a;\n    }\n}\n// 命名类\nlet Example = class Example{\n    constructor(a){\n        this.a = a;\n    }\n}\n")])])]),n("p",[s._v("2.0 类声明")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Example{\n    constructor(a){\n        this.a = a;\n    }\n}\n")])])]),n("p",[s._v("注意点： "),n("br"),s._v("\n1.0 不能重复声明")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("比如：\n class Example{}\n class Example{}\n// Uncaught SyntaxError: Identifier 'Example' has already been \n// declared\n再比如：\nlet Example1 = class{}\nclass Example{}\n// Uncaught SyntaxError: Identifier 'Example' has already been \n// declared\n")])])]),n("p",[s._v("2.0 类定义不能被提升 意味着必须在访问前对类进行定义，否则就会报错。"),n("br"),s._v("\n类中方法不需要 function 关键字。"),n("br"),s._v("\n方法间不能加分号。"),n("br")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    class People{\n        constructor(name){\n            this.name = name   \n        }\n        getName(){\n            return this.name\n        }\n    }\nvar people = new People('lie')\npeople.getName(); // lie\ntypeof People;// function\ntypeof People.prototype.getName;// function\n")])])]),n("h2",{attrs:{id:"类的主体"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#类的主体"}},[s._v("#")]),s._v(" 类的主体")]),s._v(" "),n("p",[s._v("属性\n1.0 prototype 还是存在的，虽然可以直接自类中定义方法，但是其实方法还是定义在 prototype 上的。 覆盖方法 / 初始化时添加方法")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Example.prototype={\n    //methods\n}\n添加方法\nObject.assign(Example.prototype,{\n    //methods\n})\n")])])]),n("p",[s._v("2.0 静态属性 "),n("br"),s._v("\nClass 内部只有静态方法，没有静态属性。"),n("br"),s._v("\n3.0 公共属性")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Example{}\nExample.prototype.a = 2;\n")])])]),n("p",[s._v("4.0 实例属性")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("实例属性：定义在实例对象（ this ）上的属性。\n\nclass Example {\n    a = 2;\n    constructor () {\n        console.log(this.a);\n    }\n}\n")])])]),n("p",[s._v("5.0 name 属性 "),n("br"),s._v("\n返回跟在 class 后的类名(存在时)。")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("   let Example=class Exam {\n       constructor(a) {\n           this.a = a;\n       }\n   }\n   console.log(Example.name); // Exam\n    \n   let Example=class {\n       constructor(a) {\n           this.a = a;\n       }\n   }\n   console.log(Example.name); // Example\n")])])]),n("h2",{attrs:{id:"类的方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#类的方法"}},[s._v("#")]),s._v(" 类的方法")]),s._v(" "),n("p",[s._v("1.0 constructor 方法 "),n("br"),s._v("\nconstructor 方法是类的默认方法，创建类的实例化对象时被调用。")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Example{\n    constructor(){\n      console.log('我是constructor');\n    }\n}\nnew Example(); // 我是constructor\n")])])]),n("p",[s._v("返回对象")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Test {\n    constructor(){\n        // 默认返回实例对象 this\n    }\n}\nconsole.log(new Test() instanceof Test); // true\n \nclass Example {\n    constructor(){\n        // 指定返回对象\n        return new Test();\n    }\n}\nconsole.log(new Example() instanceof Example); // false\n")])])]),n("p",[s._v("2.0 静态方法")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Example{\n    static sum(a, b) {\n        console.log(a+b);\n    }\n}\nExample.sum(1, 2); // 3\n")])])]),n("p",[s._v("3.0 原型方法")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Example {\n    sum(a, b) {\n        console.log(a + b);\n    }\n}\nlet exam = new Example();\nexam.sum(1, 2); // 3\n")])])]),n("p",[s._v("4.0  实例方法 跟上面比实例化的时候就已经被创建了 (不用在意)")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Example {\n    constructor() {\n        this.sum = (a, b) => {\n            console.log(a + b);\n        }\n    }\n}\nlet exam = new Example();\nexam.sum(1, 2); // 3\n")])])]),n("p",[s._v("类的实例化\nnew "),n("br"),s._v("\nclass 的实例化必须通过 new 关键字。"),n("br")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Example {}\nlet exam1 = Example();\n// Class constructor Example cannot be invoked without 'new' \n")])])]),n("p",[s._v("实例化对象  共享原型对象")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Example {\n    constructor(a, b) {\n        this.a = a;\n        this.b = b;\n        console.log('Example');\n    }\n    sum() {\n        return this.a + this.b;\n    }\n}\nlet exam1 = new Example(2, 1);\nlet exam2 = new Example(3, 1);\nconsole.log(exam1._proto_ == exam2._proto_); // true\n \nexam1._proto_.sub = function() {\n    return this.a - this.b;\n}\nconsole.log(exam1.sub()); // 1\nconsole.log(exam2.sub()); // 2\n")])])]),n("h2",{attrs:{id:"getter-和-setter"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#getter-和-setter"}},[s._v("#")]),s._v(" getter 和 setter")]),s._v(" "),n("p",[s._v("例子：")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Example{\n    constructor(a, b) {\n        this.a = a; // 实例化时调用 set 方法\n        this.b = b;\n    }\n    get a(){\n        console.log('getter');\n        return this.a;\n    }\n    set a(a){\n        console.log('setter');\n        this.a = a; // 自身递归调用\n    }\n}\nlet exam = new Example(1,2); // 不断输出 setter ，最终导致 RangeError\n")])])]),n("p",[s._v("另外一个例子：")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Example1{\n    constructor(a, b) {\n        this.a = a;\n        this.b = b;\n    }\n    get a(){\n        console.log('getter');\n        return this._a;\n    }\n    set a(a){\n        console.log('setter');\n        this._a = a;\n    }\n}\nlet exam1 = new Example1(1,2); // 只输出 setter , 不会调用 getter 方法\nconsole.log(exam._a); // 1, 可以直接访问\n")])])]),n("p",[s._v("getter 不能单独出现")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Example {\n    constructor(a) {\n        this.a = a; \n    }\n    get a() {\n        return this.a;\n    }\n}\nlet exam = new Example(1); // Uncaught TypeError: Cannot set property // a of #<Example> which has only a getter\n")])])]),n("p",[s._v("getter与setter必须同时出现")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Father {\n    constructor(){}\n    get a() {\n        return this._a;\n    }\n}\nclass Child extends Father {\n    constructor(){\n        super();\n    }\n    set a(a) {\n        this._a = a;\n    }\n}\nlet test = new Child();\ntest.a = 2;\nconsole.log(test.a); // undefined\nconsole.log(test._a); // 2\nFather.a //undefined\nFather._a //undefined\n")])])]),n("p",[s._v("都放在父类或者子类里面")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Father1 {\n    constructor(){}\n    // 或者都放在子类中\n    get a() {\n        return this._a;\n    }\n    set a(a) {\n        this._a = a;\n    }\n}\nclass Child1 extends Father1 {\n    constructor(){\n        super();\n    }\n}\nlet test1 = new Child1();\ntest1.a = 2;\nconsole.log(test1.a); // 2\n")])])]),n("h2",{attrs:{id:"extends"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#extends"}},[s._v("#")]),s._v(" extends")]),s._v(" "),n("p",[s._v("通过exteds实现类的继承"),n("br"),s._v("\nsuper "),n("br"),s._v("\n子类constructor方法中必须有super，且必须出现在this之前。")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Father {\n    constructor() {}\n}\nclass Child extends Father {\n    constructor() {}\n    // or \n    // constructor(a) {\n        // this.a = a;\n        // super();\n    // }\n}\nlet test = new Child(); // Uncaught ReferenceError: Must call super \n// constructor in derived class before accessing 'this' or returning \n// from derived constructor\n")])])]),n("p",[s._v("调用父类构造函数,只能出现在子类的构造函数。")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Father {\n    test(){\n        return 0;\n    }\n    static test1(){\n        return 1;\n    }\n}\nclass Child extends Father {\n    constructor(){\n        super();\n    }\n}\nclass Child1 extends Father {\n    test2() {\n        super(); // Uncaught SyntaxError: 'super' keyword unexpected     \n        // here\n    }\n}\n")])])]),n("p",[s._v("调用父类方法, super 作为对象，在普通方法中，指向父类的原型对象，在静态方法中，指向父类")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Child2 extends Father {\n    constructor(){\n        super();\n        // 调用父类普通方法\n        console.log(super.test()); // 0\n    }\n    static test3(){\n        // 调用父类静态方法\n        return super.test1()+2;\n    }\n}\nChild2.test3(); // 3\n")])])]),n("h2",{attrs:{id:"constructor-方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#constructor-方法"}},[s._v("#")]),s._v(" constructor 方法")]),s._v(" "),n("p",[s._v("constructor 方法是类的构造函数，是一个默认方法，通过 new 命令创建对象实例时，自动调用该方法。一个类必须有 constructor 方法，如果没有显式定义，一个默认的 consructor 方法会被默认添加。所以即使你没有添加构造函数，也是会有一个默认的构造函数的。一般 constructor 方法返回实例对象 this ，但是也可以指定 constructor 方法返回一个全新的对象，让返回的实例对象不是该类的实例。")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("es5\nfunction Point(x, y) {\n  this.x = x;\n  this.y = y;\n}\n \nPoint.prototype.toString = function() {\n  return '(' + this.x + ',' + this.y + ')';\n}\n")])])]),n("p",[s._v("等同于")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\nclass Point {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n  }\n \n  toString() {\n    return '(' + this.x + ',' + this.y + ')';\n  }\n}\n")])])]),n("h2",{attrs:{id:"super-关键字"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#super-关键字"}},[s._v("#")]),s._v(" super 关键字")]),s._v(" "),n("p",[s._v("super 这个关键字，既可以当做函数使用，也可以当做对象使用。这两种情况下，它的用法完全不用。"),n("br"),s._v("\n1.0 当做函数使用")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class A {}\nclass B extends A {\n  constructor() {\n    super();  // ES6 要求，子类的构造函数必须执行一次 super 函数，否则会报错。\n  }\n}\n")])])]),n("p",[s._v("注意：在 constructor 中必须调用 super 方法，因为子类没有自己的 this 对象，而是继承父类的 this 对象，然后对其进行加工,而 super 就代表了父类的构造函数。super 虽然代表了父类 A 的构造函数，但是返回的是子类 B 的实例，即 super 内部的 this 指的是 B，因此 super() 在这里相当于 ```A.prototype.constructor.call(this, props)``。")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class A {\n  constructor() {\n    console.log(new.target.name); // new.target 指向当前正在执行的函数\n  }\n}\n \nclass B extends A {\n  constructor {\n    super();\n  }\n}\n \nnew A(); // A\nnew B(); // B\n")])])]),n("p",[s._v("可以看到，在 super() 执行时，它指向的是 子类 B 的构造函数，而不是父类 A 的构造函数。也就是说，super() 内部的 this 指向的是 B。\n"),n("br"),s._v("\n2.0 当做对象使用\n"),n("br"),s._v("\n在普通方法中，指向父类的原型对象；在静态方法中，指向父类。")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("lass A {\n  c() {\n    return 2;\n  }\n}\n \nclass B extends A {\n  constructor() {\n    super();\n    console.log(super.c()); // 2\n  }\n}\n \nlet b = new B();\n")])])]),n("p",[s._v("上面代码中，子类 B 当中的 super.c()，就是将 super 当作一个对象使用。这时，super 在普通方法之中，指向 A.prototype，所以 super.c() 就相当于 A.prototype.c()。\n"),n("br"),s._v("\n通过 super 调用父类的方法时，super 会绑定子类的 this。")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class A {\n  constructor(){\n    this.x = 1;\n  }\n  s() {\n    console.log(this.x);\n  }\n}\n \nclass B extends A {\n  constructor(){\n    super();\n    this.x = 2;\n  }\n  m() {\n    super.s();\n  }\n}\n \nlet b = new B();\nb.m(); // 2\n")])])]),n("p",[s._v("上面代码中，super.s() 虽然调用的是 A.prototytpe.s()，但是 A.prototytpe.s()会绑定子类 B 的 this，导致输出的是 2，而不是 1。也就是说，实际上执行的是 super.s.call(this)。\n"),n("br")]),s._v(" "),n("p",[s._v("由于绑定子类的 this，所以如果通过 super 对某个属性赋值，这时 super 就是 this，赋值的属性会变成子类实例的属性")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class A {\n  constructor() {\n    this.x = 1;\n  }\n}\n \nclass B extends A {\n  constructor() {\n    super();\n    this.x = 2;\n    super.x = 3;\n    console.log(super.x); // undefined\n    console.log(this.x); // 3\n  }\n}\n \nlet b = new B();\n\n")])])]),n("p",[s._v("上面代码中，super.x 赋值为 3，这时等同于对 this.x 赋值为 3。而当读取 super.x 的时候，调用的是 A.prototype.x，但并没有 x 方法，所以返回 undefined。")]),s._v(" "),n("p",[s._v("注意，使用 super 的时候，必须显式指定是作为函数，还是作为对象使用，否则会报错。"),n("br")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("比如上面的例子\nclass B extends A {\n  constructor() {\n    super();\n    console.log(super); // Uncaught SyntaxError: 'super' keyword unexpected here\n    console.log(super()); // Super constructor may only be called once\n  }\n}\nclass B extends A {\n  constructor() {\n    console.log(super());// 这样是不报错的 如果\n  }\n}\n")])])]),n("p",[s._v("上面代码中，console.log(super); 的当中的 super，无法看出是作为函数使用，还是作为对象使用，所以 JavaScript 引擎解析代码的时候就会报错。这是，如果能清晰的表明 super 的数据类型，就不会报错。\n"),n("br")]),s._v(" "),n("p",[s._v("super 虽然代表了父类 A 的构造函数，但是返回的是子类 B 的实例，即 super 内部的 this 指的是 B，因此 super() 在这里相当于 ```A.prototype.constructor.call(this, props)``。\n"),n("br"),s._v("\n如下：")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class A {\n  constructor() {\n    this.x = 1;\n  }\n}\n \nclass B extends A {\n  constructor() {\n    console.log(super()) // B {x: 1}\n    this.x = 2;\n    super.x = 3;\n    \n    console.log(this.x); // 3\n  }\n}\n \nlet b = new B();\n\n")])])]),n("p",[s._v("最后，由于对象总是继承其他对象的，所以可以在任意一个对象中，使用 super 关键字。")])])}),[],!1,null,null,null);e.default=a.exports}}]);