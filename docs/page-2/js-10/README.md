## 10.0 call,apply 和bind方法

**前言**

call()、apply()和bind()方法 三者作用都是 **改变this指向**

**call/apply/bind方法的来源**

首先，在使用call，apply，bind方法时，我们有必要知道这三个方法究竟是来自哪里？为什么可以使用的到这三个方法？<br>

call，apply，bind这三个方法其实都是继承自Function.prototype中的，属于实例方法。
```js
 console.log(Function.prototype.hasOwnProperty('call')) //true
 console.log(Function.prototype.hasOwnProperty('apply')) //true
 console.log(Function.prototype.hasOwnProperty('bind')) //true
```
上面代码中，都返回了true，表明三种方法都是继承自Function.prototype的。当然，普通的对象，函数，数组都继承了Function.prototype对象中的三个方法，所以这三个方法都可以在对象，数组，函数中使用。

**call方法**

>call方法，可以指定该函数内部this的指向（即函数执行时所在的作用域），然后在所指定的作用域中，调用该函数。并且会立即执行该函数。

```js
 var xiaohong = {
    age:18
}
var age = 22;

function peopleAge(){
    console.log(this.age)
}
peopleAge() // 22
peopleAge.call(this) // 22
peopleAge.call(null) // 22
peopleAge.call(undefined) // 22
peopleAge.call(xiaohong) // 18
```
peopleAge函数中的this关键字，如果指向全局对象，返回结果为 22,<br>

可以看到，如果call方法没有参数，或者参数为null或undefined或者this，则等同于指向全局对象。<br>

如果使用call方法将this关键字指向**xiaohong**对象，也就是将该函数执行时所在的作用域变为**xiaohong**对象，返回结果为18。


**call()方法可以传递多个参数**

第一个参数是指定函数内部中this的指向，第二个参数是函数调用时需要传递的参数。
```js
const xiaohong = {
    age:18,
    name:"小红"
}
 function addString(a, b) {
    let msg = this.age+'-'+this.name + '-' + a + '-' + b
        console.log();
 }

addString.call(xiaohong, 1, 2); // 18-小红-1-2
```
**apply()方法**

用法和call一样，唯一的区别就是，**它接收一个数组作为函数执行时的参数**

```js
addString.apply(xiaohong, [1,2]) // 18-小红-1-2
```
**bind()方法**

bind()方法主要就是将函数绑定到某个对象，bind()会创建一个函数，函数体内的this对象的值会被绑定到传入bind()中的第一个参数的值，

例如：f.bind(obj)，实际上可以理解为obj.f()，这时f函数体内的this自然指向的是obj；

```js
var a = {
    b: function() {
      console.log(this.c);   
      var func = function() {
        console.log(this.c); 
      }
      func();
    },
    c: 'hello'
  }
  a.b();
```
上面打印结果为 //hello 和 //undefined , 为什么 因为 func执行的时候 他的上层对象是b这个对象，b这层对象的this就是指向window
```js
var a={
    b:this,
    c:'ccc'
}
console.log(a.b) // window
```
**方法一：** 改变this的值

```js
var a = {
    b: function() {
      var _this = this; // 通过赋值的方式将this赋值给that
      var func = function() {
        console.log(_this.c);
      }
      func();
    },
    c: 'hello'
  }
  a.b(); // hello
  console.log(a.c); // hello
```
**方法二：** 绑定this的值发生改变

```js
// 使用bind方法一
  var a = {
    b: function() {
      var func = function() {
        console.log(this.c);
      }.bind(this);
      func();
    },
    c: 'hello'
  }
  a.b(); // hello
  console.log(a.c); // hello
 
// 使用bind方法二
  var a = {
    b: function() {
      var func = function() {
        console.log(this.c);
      }
      func.bind(this)();
    },
    c: 'hello'
  }
  a.b(); // hello
  console.log(a.c); // hello
```
这里我们以a.b()的形式去执行a对象中的b这个函数，是经过对象a的所以当我们来执行a对象中b函数的时候找this就会先找到a对象

<br>
所以在a对象中的b这个函数中的this为a对象，所以这个时候bind,绑定的this也就是为a对象了

**三者的区别**

1. 三者作用都是改变this指向

2. 三者第一个参数都是this要指向的对象，若该参数为undefined或null，this则默认指向全局window

3. 传参不同：apply是数组、call是参数列表，而bind可以分为多次传入，实现参数的合并

4. call、apply是立即执行，bind是返回绑定this之后的函数，如果这个新的函数作为构造函数被调用，那么this不再指向传入给bind的第一个参数，而是指向新生成的对象


