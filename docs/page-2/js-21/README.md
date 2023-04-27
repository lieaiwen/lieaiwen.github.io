## 21.0 js的继承
**什么是继承:**
> 你的爸爸姓“张”（对应js的属性）,你爸爸会“开车”（js方法 canCar()）,你也姓“张”，
>你爸爸又教你开车了，为啥要你爸教你呢？（省钱啊）这就是继承（省事）。当然你也可以不姓“张”
>你就叫“狗蛋”，这就叫“重写”。当然了，本文主要介绍js里面的继承。

总结：继承可以使得子类具有父类的各种方法和属性。以免重复输出很多代码。

**1.0 原型链继承**
```js
     function Parent(){
         this.name = "张"
     }
     Parent.prototype.getName = function(){
         console.log(this.name)
     }
     function Son(){
 
     }
     Son.prototype = new Parent();
     var son1 = new Son();
     console.log(son1.getName()) // 张
```
问题：
1. 引用类型的属性被所有实例共享
```js
     function Parent(){
         this.name = ["张",'大']
     }
     Parent.prototype.getName = function(){
         console.log(this.name)
     }
     function Son(){
 
     }
     Son.prototype = new Parent();
     var son1 = new Son();
     son1.name.push('狗蛋')
     console.log(son1.name) // ["张",'大','狗蛋']
     var son2 = new Son();
     console.log(son2.name) // ["张",'大','狗蛋']
```
2. 在创建 Child 的实例时，不能向Parent传参

**2.0 借用构造函数（call）**
```js
 function Parent(){
         this.name = ["张",'大']
     }
     function Son(){
         Parent.call(this)
     }
     var son1 = new Son();
     son1.name.push('狗蛋')
     console.log(son1.name) // ["张",'大','狗蛋']
     var son2 = new Son();
     console.log(son2.name) // ["张",'大']
```
优点：
1. 避免了引用类型的属性被所有实例共享
2. 可以在 Child 中向 Parent 传参
```js
 function Parent(name){
         this.name = name
     }
     function Son(name){
         Parent.call(this,name)
     }
     var son1 = new Son('狗蛋');
     console.log(son1.name) // '狗蛋'
     var son2 = new Son('张二');
     console.log(son2.name) // 张二
```
缺点：
* 方法都在构造函数中定义，每次创建实例都会创建一遍方法。

**3.0 组合继承**

就是原型链继承和构造函数的合并。
```js
     function Parent(name){
         this.name = name;
         this.colors = ['red', 'blue', 'green'];
     }
     Parent.prototype.getName = function () {
         console.log(this.name)
     }
     function Son(name,age){
         Parent.call(this,name)
         this.age = age;
     }
     Son.prototype = new Parent();
     Son.prototype.constructor = Son;
     console.log(Son)
     var son1 = new Son('狗蛋',18);
     son1.colors.push('black');
     console.log(son1.name); // 狗蛋
     console.log(son1.age); // 18
     console.log(son1.colors); // ["red", "blue", "green", "black"]
 
     var son2 = new Son('张二',18);
     son2.colors.push('red');
     console.log(son2.name); // 张二
     console.log(son2.age); // 18
     console.log(son2.colors); // ["red", "blue", "green", "red"]
```
优点：融合原型链继承和构造函数的优点，是 JavaScript 中最常用的继承模式。

**4.0 原型式继承**

```js
 function createObj(o) {
     function F(){}
     F.prototype = o;
     return new F();
 }
```
就是 ES5 Object.create 的模拟实现，将传入的对象作为创建的对象的原型。
<br>
缺点：<br>
* 包含引用类型的属性值始终都会共享相应的值，这点跟原型链继承一样
```js
 var person = {
        name:'小明',
        friends:['小红','小刘']
    }
    var person1 = createObj(person)
     var person2 = createObj(person)
     person1.name = "狗蛋"
     person1.friends.push('小小');
     console.log(person2.name); // 小明 基本类型没共享
     console.log(person2.friends); // ['小红','小刘','小小'] // 引用类型共享了
```

**5.0 寄生式继承**
>创建一个仅用于封装继承过程的函数，该函数在内部以某种形式来做增强对象，最后返回对象

```js
 function createObj (o) {
         var clone = Object.create(o);
         clone.sayName = function () {
             console.log('hi');
         }
         return clone;
     }
    var person = {
        name:'小明',
        friends:['小红','小刘']
    }
    var person1 = createObj(person)
     console.log(person1.name); // 小明
     person1.sayName(); // hi
```
代码中基于person 返回了一个新对象person1，新对象不仅有person的
所有属性和方法，而且还有自己的sayHi()方法
<br>
缺点:跟借用构造函数模式一样，每次创建对象都会创建一遍方法。

**6.0 寄生组合式继承**

再看一下组合继承
```js
  function Parent(name){
          this.name = name;
          this.colors = ['red', 'blue', 'green'];
      }
      Parent.prototype.getName = function () {
          console.log(this.name)
      }
      function Son(name,age){
          Parent.call(this,name) // // 第二次调用父构造函数
          this.age = age;
      }
      Son.prototype = new Parent(); // 第一次调用父构造函数
      Son.prototype.constructor = Son;
      var son1 = new Son('狗蛋',18);
      console.log(son1.name); // 狗蛋
```
组合继承最大的缺点是会调用两次父构造函数。
<br>

打印Son.prototype 和 son1 都有一个属性为colors，属性值为['red', 'blue', 'green']。
<br>

我们能不能避免这一次调用呢？<br>
如果我们不使用 Son.prototype = new Parent() ，而是间接的让 Son.prototype 访问到 Parent.prototype 呢？
```js
 function Parent(name){
         this.name = name;
         this.colors = ['red', 'blue', 'green'];
     }
     Parent.prototype.getName = function () {
         console.log(this.name)
     }
     function Son(name,age){
         Parent.call(this,name) // // 第二次调用父构造函数
         this.age = age;
     }
     var F = function(){}
     F.prototype = Parent.prototype;
     Son.prototype = new F(); // 第一次调用父构造函数
     var son1 = new Son('狗蛋',18);
     console.log(son1); // {name: "狗蛋",colors:  ["red", "blue", "green"] ,age: "18"}
```
最后封装一下:
```js
 function object(o) {
     function F() {}
     F.prototype = o;
     return new F();
 }
 
 function prototype(child, parent) {
     var prototype = object(parent.prototype);
     prototype.constructor = child;
     child.prototype = prototype;
 }
 
 // 当我们使用的时候：
 prototype(Child, Parent);
```
这种方式的高效率体现它只调用了一次 Parent 构造函数，并且因此避免了在 Parent.prototype 上面创建不必要的、多余的属性。与此同时，原型链还能保持不变；因此，还能够正常使用 instanceof 和 isPrototypeOf。开发人员普遍认为寄生组合式继承是引用类型最理想的继承范式。
