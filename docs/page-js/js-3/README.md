## js中的类型检测（三种）
1.0 typeof：主要用于检测基本类型
```js
typeof undefined // 'undefined'
typeof 'a';//=> string
typeof 1;//=> number
typeof true;//=> boolean
typeof {};//=> object
typeof [];//=> object
typeof null;//=> object
typeof function() {};//=> function
```
判断一个变量是否存在 我们是用
```js
if(typeof a!= "undefined"){
    alert('ok')
}
//不用 if(a) 因为 a 不存在(未声明)则会出错。
```
注意：<br>
对于 Array,Null 等特殊对象使用 typeof 一律返回 object，这正是 typeof 的局限性。
``` 
经常会在js里用到数组,比如 多个名字相同的input, 若是动态生成的, 提交时就需要判断其是否是数组. 

    if(document.mylist.length != "undefined" ) {} //这个用法有误. 

正确的是 if( typeof(document.mylist.length) != "undefined" ) {} 

    或 if( !isNaN(document.mylist.length) ) {} 

    typeof的运算数未定义,返回的就是 "undefined". 
```
在 JavaScript 中，判断一个变量的类型尝尝会用 typeof 运算符，在使用 typeof 运算符时采用引用类型存储值会出现一个问题，无论引用的是什么类型的对象，它都返回 “object”。这就需要用到instanceof来检测某个对象是不是另一个对象的实例。
<br>
2.0 instanceof：主要用于检测引用类型(左边是对象，右边是函数.根据对象的原形链往上找，如果原形链上有右边函数.prototype，返回true;否则返回false)
<br>
instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。<br>

语法：object instanceof constructor<br>
参数：object（要检测的对象.）constructor（某个构造函数）<br>
描述：instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上。<br>
```
instanceof 用于判断一个变量是否某个对象的实例，
1.0 var obj = {}; obj instanceof Object; //=> true; 

2.0 var a=new Array();
alert(a instanceof Array); // true，
同时 alert(a instanceof Object) //也会返回 true;
这是因为 Array 是 object 的子类。

3.0 var arr = []; arr instanceof Array; //=> true;

4.0 var fn = function() {}; fn instanceof Function; //=> true;
function test(){};
var a=new test();
alert(a instanceof test) 会返回true
var b=new test();
alert(a==b);  //flase

5.0 更重的一点是 instanceof 可以在继承关系中用来判断一个实例是否属于它的父类型。
    例如：
    function Foo(){} 
    Foo.prototype = new Aoo();//JavaScript 原型继承 
    var foo = new Foo(); 
    console.log(foo instanceof Foo)//true 
    console.log(foo instanceof Aoo)//true

    上面的代码中是判断了一层继承关系中的父类，在多层继承关系中，instanceof 运算符同样适用。
    又如：
    console.log(Object instanceof Object);//true 
    console.log(Function instanceof Function);//true 
    console.log(Function instanceof Object);//true  
    console.log(Foo instanceof Function);//true 
    console.log(Number instanceof Number);//false 
    console.log(String instanceof String);//false  
    console.log(Foo instanceof Foo);//false
6.0 // 定义构造函数
    function C(){} 
    function D(){} 
    
    var o = new C();
    
    // true，因为 Object.getPrototypeOf(o) === C.prototype
    o instanceof C; 
    
    // false，因为 D.prototype不在o的原型链上
    o instanceof D; 
    
    o instanceof Object; // true,因为Object.prototype.isPrototypeOf(o)返回true
    C.prototype instanceof Object // true,同上
    
    C.prototype = {};
    var o2 = new C();
    
    o2 instanceof C; // true
    
    o instanceof C; // false,C.prototype指向了一个空对象,这个空对象不在o的原型链上.

    D.prototype = new C(); // 继承
    var o3 = new D();
    o3 instanceof D; // true
    o3 instanceof C; // true
```
谈到 instanceof 我们要多插入一个问题，就是 function 的 arguments，我们大家也许都认为 arguments 是一个 Array，但如果使用 instaceof 去测试会发现 arguments 不是一个 Array 对象，尽管看起来很像。
<br>
另外：
<br>
测试 var a=new Array();if (a instanceof Object) alert('Y');else alert('N');//得'Y’
<br>
但 if (window instanceof Object) alert('Y');else alert('N'); //得'N'
<br>
所以，这里的 instanceof 测试的 object 是指 js 语法中的 object，不是指 dom 模型对象。
<br>
使用 typeof 会有些区别<br>
alert(typeof(window)) 会得 object <br>

需要注意的是，如果表达式 obj instanceof Foo 返回true，则并不意味着该表达式会永远返回ture，因为Foo.prototype属性的值有可能会改变，改变之后的值很有可能不存在于obj的原型链上，这时原表达式的值就会成为false。另外一种情况下，原表达式的值也会改变，就是改变对象obj的原型链的情况，虽然在目前的ES规范中，我们只能读取对象的原型而不能改变它，但借助于非标准的__proto__魔法属性，是可以实现的。比如执行obj.__proto__ = {}之后，obj instanceof Foo就会返回false了。
<br>

例子: 表明String对象和Date对象都属于Object类型
``` 
ar simpleStr = "This is a simple string"; 
var myString  = new String();
var newStr    = new String("String created with constructor");
var myDate    = new Date();
var myObj     = {};

simpleStr instanceof String; // returns false, 检查原型链会找到 undefined
myString  instanceof String; // returns true
newStr    instanceof String; // returns true
myString  instanceof Object; // returns true

myObj instanceof Object;    // returns true, despite an undefined prototype
({})  instanceof Object;    // returns true, 同上

myString instanceof Date;   // returns false

myDate instanceof Date;     // returns true
myDate instanceof Object;   // returns true
myDate instanceof String;   // returns false

注意： 
str = "2343"
str instanceof Striing // false
因为 只是一个以string为数据类型的值 并不是String的实例对象
str instanceof String 在只有左侧是右侧类的对象时才会返回ture
那么我们看下他是不是Object的实例对象
str instanceof Object // false
```
3.0 Object.prototype.toString.call(sth)：由于原形链的检测有漏洞(原型是可以改变的)，所以会造成检测结果不准确，所以可以采用此种形式.
``` 
var toString = Object.prototype.toString;
toString.call(undefined);//=> [object Undefined]
toString.call(1);//=> [object Number]
toString.call(NaN);//=> [object Number]
toString.call('a');//=> [object String]
toString.call(true);//=> [object Boolean]

toString.call({});//=> [object Object]
toString.call(function() {});//=> [object Function]
toString.call([]);//=> [object Array]
toString.call(null);//=> [object Null]
我们怎么用这种方法获取准确的值呢？
toString.call(null).slice(9,-1) 
```

