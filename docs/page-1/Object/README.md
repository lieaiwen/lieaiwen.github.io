## js对象
js中所有的事情都是对象：字符串，数字，数组，日期等<br>
在js中 对象是拥有属性和方法的数据 <br>
	属性 是与对象相关的值 <br>
	方法 是能够在对象上执行的动作 <br>
<hr>
比如： var txt = "hello";<br>
这实际上创建了一个js字符串对象，字符串拥有内建的属性length <br>
txt.length = 5 ; <br> 
同时拥有若干个内建的方法：<br>Object.defineProperty() 方法
txt.indexOf(); //判断某个字符在不在 字符串中 txt.indexOf('e')<br>
txt.replace(); // 替换某个字符 txt.replace('l','aa')<br>
txt.search(); //判断某个字符在不在 字符串中 txt.search('a')<br>
<hr>
在面向对象的语言中，属性和方法常被称为对象的成员。<br>

### 创建一个对象
```
	var person = new Object();
	person.name = "bill"; // 添加属性
	person.sleep = function(){ // 添加方法
		console.log(this.name + '在睡觉');
	}
	访问属性
	person.name
	并可以用 String 对象的length属性 比如
	person.name.length
	使用 String 对象的toUpperCase()方法把文本准换为大写
	var x = person.name.toUpperCase();// BILL
```
## 问题： 创建js对象的集中方法
1.0 通过new关键字创建对象 
```
var obj = new Object(); 
```
2.0  通过字面量创建对象 
```
var obj = { 
	name:'lele'， 
	age:function(){
		console.log('789456')
	}
}<br>
```
3.0 通过构造函数创建对象
```
// 建议首字母大写
function Person(name,age){
	this.name = name;
	this.age = age;
	this.say = function(){
		console.log('我是'+this.name)
	}
}
var person1 = new Person('bill',13)
var person2 = new PErson('wen',54)
```
注意：访问对象的属性 两种： <br>

0.1 通过点访问 obj.name  <br>
0.2 通过中括号访问。obj['name']  <br>
访问 方法 只能用点 obj.say()

## 问题： this指向问题
他代表函数运行时，自动生成的一个内部对象，只能在函数内部使用。<br>
随着函数使用场合的不同，this的值会发生变化。但是有一个总的原则，<br>

重点：：那就是this指的是，调用函数的那个对象。<br>

1.0 纯粹的函数调用 <br>
这是函数的最通常的用法，属于全局性调用，因此this就代表全局对象(Global)
```
var index = 0;
function fun(){
	// 此处的this代表就是全局对象 window
	this.index = 1;
}
fun();
console.log(index);// 1
```
因为我们使用window.fun()来调用函数，调用函数的那个对象是window，所以this的指向的也是window。	<br>

2.0 作为对象方法的调用 <br>
作为对象方法的调用，this指向当前实例对象。
```
var point = {
	x:0,
	y:0,
	moveTo:function(x,y){
		this.x += x;
		this.y += y;
	}
}
point.moveTo(10,10);
console.log("x: " + point.x + " y: " + point.y);  // 输出：x: 10 y: 10
```
因为point.moveTo()来调用函数，调用函数的那个对象是point，所以this指向的也是point  <br>

3.0 作为构造函数调用<br>
所谓构造函数，就是通过这个函数生成一个新对象(object)，这时this就指这个新对象。
```
function Student(){
	this.name = 'asd';
}
var s1 = new Student();
s1.name // asd 
```
构造函数 不能在外面添加 属性和方法 比如 Student.age = 18;这样是不对的
##  for in 遍历对象和数组
遍历对象
```
var obj ={
	name:'a',
	age:10,
	sex:'man'
}
for(var attr in obj){
	if(typeof obj[attr] != 'function'){
		console.log('属性值'+obj[attr])
	}
}
```

遍历数组
```
var arr = [1,2,3,4]
for(var attr in arr){
	console.log(arr[attr])
}
```
## 删除对象属性delete
```
var person = {
	firstName:"Bill", 
	lastName:"Gates",
 	age:62,
 	eyeColor:"blue"
};
delete person.age;
```
## js对象访问器
es5 引入了Getter 和Setter 他俩允许您定义对象访问器(被计算的属性)
```
Getter(get关键字)
var persona = {
	firstName:'zheng',
	lastName:'ll',
	get name(){
		return this.firstName;
	}
}
console.log(person.name) // 'zheng'
```
Setter(set关键字)
```
var persona = {
	firstName:'zheng',
	lastName:'ll',
	set name(ne){
		this.firstName = ne;
	}
}
person.name  = "aiai";
console.log(person.firstName) // 'aiai'
```
js函数还是 Getter 区别在哪里？
```
var persona = {
	firstName:'zheng',
	lastName:'ll',
	oName:function(){
		return this.firstName;
	}
}
console.log(person.oName()) // 'zheng'
```
对比：console.log(person.name) <br>
console.log(person.oName()) <br>
为什么使用Getter 和Setter？ <br>
1.0 第一个更简洁 <br>
2.0 它允许属性 跟方法的语法相同 <br>
3.0 它可以确保更好的数据质量 <br>
4.0 有利于后台工作  <br>
 数据质量更好
 ```
 1.0  使用 lang 属性以大写形式返回 language 属性的值：
 // Create an object:
var person = {
  firstName: "Bill",
  lastName : "Gates",
  language : "en",
  get lang() {
    return this.language.toUpperCase();
  }
};

// 使用 getter 来显示来自对象的数据：
person.lang

2.0 使用 lang 属性将大写值存储在 language 属性中：
var person = {
  firstName: "Bill",
  lastName : "Gates",
  language : "",
  set lang(lang) {
    this.language = lang.toUpperCase();
  }
};

// 使用 getter 来设置对象属性：
person.lang = "en";

// 显示来自对象的数据：
person.language;
 ```
 实例：
 ```
var obj = {
  counter : 0,
  get reset() {
    this.counter = 0;
  },
  get increment() {
    this.counter++;
  },
  get decrement() {
    this.counter--;
  },
  set add(value) {
    this.counter += value;
  },
  set subtract(value) {
    this.counter -= value;
  }
};

// 操作计数器：
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;
 ```
 Object.defineProperty() 方法也可用于添加 Getter 和 Setter：

```
// 定义对象
var obj = {counter : 0};

// 定义 setters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});

// 操作计数器：
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;
```
Object.defineProperty() 的作用就是直接在一个对象上
定义一个新属性，或者修改一个已经存在的属性
```
Object.defineProperty(obj, prop, desc)
obj 需要定义属性的当前对象
prop 当前需要定义的属性名
desc 属性描述符 必须是 Object
```
例子
```

let Person = {}

Object.defineProperty(Person,'name',{name:'ll'}) // 这种不指定的话不可逆 再定义任何属性都会报错
Person.name //undefined
// 因为writable 默认是false，不能改变属性的值
上面desc(数据描述符)--特有的两个属性（value，writable）
应该这样写
Object.defineProperty(Person, 'name', {
   value: 'jack',
   writable: true // 是否可以改变
})
Person.name //jack

其中还有属性  configurable(是否可以删除)、
enumerable(是否可以枚举)、
writable(是否可以修改)  默认都是false
```
## 内建js构造器
JavaScript 提供用于原始对象的构造器：
```
var x1 = new Object();    // 一个新的 Object 对象
var x2 = new String();    // 一个新的 String 对象
var x3 = new Number();    // 一个新的 Number 对象
var x4 = new Boolean();   // 一个新的 Boolean 对象
var x5 = new Array();     // 一个新的 Array 对象
var x6 = new RegExp();    // 一个新的 RegExp 对象
var x7 = new Function();  // 一个新的 Function 对象
var x8 = new Date();      // 一个新的 Date 对象
注意： Math() 对象不再此列。Math 是全局对象。new 关键词不可用于 Math。
```
正如以上所见，JavaScript 提供原始数据类型字符串、数字和布尔的对象版本。但是并无理由创建复杂的对象。原始值快得多！
```
请使用对象字面量 {} 代替 new Object()。

请使用字符串字面量 "" 代替 new String()。

请使用数值字面量代替 Number()。

请使用布尔字面量代替 new Boolean()。

请使用数组字面量 [] 代替 new Array()。

请使用模式字面量代替 new RexExp()。

请使用函数表达式 () {} 代替 new Function()。
var x1 = {};            // 新对象
var x2 = "";            // 新的原始字符串
var x3 = 0;             // 新的原始数值
var x4 = false;         // 新的原始逻辑值
var x5 = [];            // 新的数组对象
var x6 = /()/           // 新的正则表达式对象
var x7 = function(){};  // 新的函数对象
```
为什么不建议使用 new
```
var x = "Bill";
var y = new String("Bill");

// typeof x 将返回 string
// typeof y 将返回 object
```
2.0 请不要把字符串创建为对象。它会拖慢执行速度。<br>

new 关键字使代码复杂化。也可能产生一些意想不到的结果：<br>

当使用 == 相等运算符时，相等字符串是相等的：<br>
```
var x = "Bill";             
var y = new String("Bill");

// (x == y) 为 true，因为 x 和 y 的值相等
```
3.0 当使用 === 运算符时，相等字符串是不相等的，因为 === 运算符需要类型和值同时相等。
```
var x = "Bill";             
var y = new String("Bill");

// (x === y) 为 false，因为 x 和 y 的类型不同（字符串与对象）
```

4.0 甚至更糟。对象无法比较：
```
var x = new String("Bill");             
var y = new String("Bill");

// (x == y) 为 false，因为 x 和 y 是不同的对象

var x = new String("Bill");             
var y = new String("Bill");

// (x === y) 为 false，因为 x 和 y 是不同的对象
请注意 (x==y) 与 (x===y) 的区别。

JavaScript 对象无法进行对比，比较两个 JavaScript 对象将始终返回 false。
```

## js 对象原型
所有 JavaScript 对象都从原型继承属性和方法。 <br>
我们上面知道了 我们无法为已有的对象构造器添加新的属性和方法。<br>
日期对象继承自 Date.prototype <br>
数组对象继承自 Array.prototype<br>
Person对象继承自 Person.prototype<br>
Object.prototype 位于原型继承链的顶端<br>
日期对象,数组对象和Person 对象都继承自 Object.prototype<br>


有时候 你希望向所有给定类型的已有对象添加新属性(或方法)<br>
有时候 你希望向对象构造器添加新属性(或方法)。<br>
使用prototype 属性<br>
js prototype 属性允许您为对象构造器添加新属性和方法：
```
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
Person.prototype.nationality = "English";
Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
};
var myFriend = new Person("Bill", "Gates", 62, "blue");
myFriend.nationality // English
myFriend.name // Bill Gates
```
注意： 请只修改您自己的原型，绝不要 修改标准js对象的原型

## es5 为js添加了大量新的对象方法
es5 新的对象方法
```
// 添加或更改对象属性
Object.defineProperty(object, property, descriptor)

// 添加或更改多个对象属性
Object.defineProperties(object, descriptors)

// 访问属性
Object.getOwnPropertyDescriptor(object, property)

// 以数组返回所有属性
Object.getOwnPropertyNames(object)

// 以数组返回所有可枚举的属性
Object.keys(object)

// 访问原型
Object.getPrototypeOf(object)

// 阻止向对象添加属性
Object.preventExtensions(object)

// 如果可将属性添加到对象，则返回 true
Object.isExtensible(object)

// 防止更改对象属性（而不是值）
Object.seal(object)

// 如果对象被密封，则返回 true
Object.isSealed(object)

// 防止对对象进行任何更改
Object.freeze(object)

// 如果对象被冻结，则返回 true
Object.isFrozen(object)


ES5 允许更改以下属性元数据：
writable : true      // 属性值可修改
enumerable : true    // 属性可枚举
configurable : true  // 属性可重新配置
writable : false     // 属性值不可修改
enumerable : false   // 属性不可枚举
configurable : false // 属性不可重新配置
```
## Object.assign() 基本方法 拷贝相关
Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
``` 
const target = { a: 1 };

const source1 = { b: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}
```

一个有意思的例子
```
var a = new function() {return "圆心"}; 
console.log(a); // [object object] 

function x(){ 
    return "圆心"; 
} 
var a = new x(); 
 console.log(a); // [object object] 

 var a = new function() {return new String("圆心")}; 
 console.log(a); // 圆心

为什么：
 var a=new function(){}
 在javascript中，方法被当作一个类来处理，这中定义方式下，a即带表了这个方法的类，也就是这个方法本身。

但是有一种特殊情况，若是在该方法中，返回值为数组、方法、或是别的类，那么a不在表示该方法，而是表示返回的新类了。 
只要 new 表达式之后返回（return）一个引用对象（数组，对象，函数等），都将覆盖new创建的匿名对象，如果返回（return）一个原始类型（无 return 时其实为 return 原始类型 undefined），那么就返回 new 创建的匿名对象
由于 new String 会构造一个对象，而不是一个 string 直接量，且new String(x) 如果带参数，那么alert它的时候就会返回 x。所以 yx01 将返回 new String(”圆心”) 这个对象，而 alert yx01 则显示 “圆心”。
```












