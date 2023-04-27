## 13.0 js 原型和原型链
>本来是不想写的，但是想了想还是要用自己的语言记录一下要不然，怎么都记不住

**外加一句这个原型是所有js的根本必须记死了**

 构造函数创建一个对象
```js
function Person(){}

var person = new Person();
person.name = "Kevin";
console.log(person.name) // Kevin 
```
**1.0 prototype**

每个函数都有一个prototype属性
```js
 function Person() {
 
 }
 // 虽然写在注释里，但是你要注意：
 // prototype是函数才会有的属性
 Person.prototype.name = 'Kevin';
 var person1 = new Person();
 var person2 = new Person();
 console.log(person1.name) // Kevin
 console.log(person2.name) // Kevin
```
函数的 prototype 属性指向了一个对象，这个对象正是调用该构造函数而创建的实例的原型，也就是这个例子中的 person1 和 person2 的原型。
<br>
**那什么是原型呢**？

JavaScript的对象中都包含了一个”[[Prototype]]”内部属性，这个属性所对应的就是该对象的原型

![avatar](/images/js/proto-1.png) <br>

我们用Person.prototype 表示实例原型。
<br>
那我们怎么表示实例与实例原型呢？也就是person和Person之间的关联

**2.0 \_\_proto\_\_**
>每一个js对象（null除外）都有一个属性__proto__属性，这个属性指向对象的原型。

```js
function Person(){}
var person = new Person();
console.log(person.__proto__ === Person.prototype) // true 
```
于是就有了下图的关系:
![avatar](/images/js/proto-2.png) <br>
可以看到实例对象和构造函数都指向 原型。

**3.0 constructor属性**

>每个原型都有一个 constructor 属性指向关联的构造函数。

```js
 function Person() {}
 console.log(Person === Person.prototype.constructor); // true
```
更新关系图：
![avatar](/images/js/proto-3.png) <br>
综上我们已经得出：
```js
 function Person() {
 
 }
 
 var person = new Person();
 console.log(person.__proto__ == Person.prototype) // true
 console.log(Person.prototype.constructor == Person) // true
 // 顺便学习一个ES5的方法,可以获得对象的原型
 console.log(Object.getPrototypeOf(person) === Person.prototype) // true
```
**4.0 实例与原型**

当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。(Object.prototype)
```js
function Person() {

}

Person.prototype.name = 'Kevin';

var person = new Person();

person.name = 'Daisy';
console.log(person.name) // Daisy

delete person.name;
console.log(person.name) // Kevin
```
当我们删除了 person 的 name 属性时，读取 person.name，从 person 对象中找不到 name 属性就会从 person 的原型也就是 person.\_\_proto\_\_ ，也就是 Person.prototype中查找，幸运的是我们找到了 name 属性，结果为 Kevin。
<br>

假设要是没找到呢？
<br>
其实原型对象就是通过 Object 构造函数生成的，结合之前所讲，实例的 \_\_proto\_\_ 指向构造函数的 prototype ，所以我们再更新下关系图：

![avatar](/images/js/proto-4.png) <br>

**5.0 原型链**
那 Object.prototype 的原型
```js
 console.log(Object.prototype.__proto__ === null) // true
```
>null 表示“没有对象”，即该处不应该有值。

所以 Object.prototype.\_\_proto\_\_ 的值为 null 跟 Object.prototype 没有原型，其实表达了一个意思。
<br>
所以查找属性的时候查到 Object.prototype 就可以停止查找了。
<br>
![avatar](/images/js/proto-5.png) <br>
顺便还要说一下，图中由相互关联的原型组成的链状结构就是原型链，也就是蓝色的这条线。

最后
```js
 function Person() {
 
 }
 var person = new Person();
 console.log(person.constructor === Person); // true
```
当获取 person.constructor 时，其实 person 中并没有 constructor 属性,当不能读取到constructor 属性时，会从 person 的原型也就是 Person.prototype 中读取，正好原型中有该属性，所以：
>person.constructor === Person.prototype.constructor

当使用 obj.\_\_proto\_\_ 时，可以理解成返回了 Object.getPrototypeOf(obj)
