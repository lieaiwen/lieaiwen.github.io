## 14.0 函数调用的4种方式
函数调用的方式对函数内部的代码是如何执行的，有着巨大的影响，尤其是在this参数的创建中。除了函数名()这种最基础的调用方法外，还有哪些方式呢？

### 1.0 作为一个函数进行调用，最简单的方式。
```js
    // 定义函数
    funciton fun(a){
        return a+1;
    }
    // 调用函数并取得返回值
    var ret = fun(2012)
    console.log(ret) //2013
```

### 2.0 作为一个方法进行调用，在对象上调用。
```js
var o = {a:1,b:2};
o.add= function(c){return this.a + this.b + c};
o.add(3); //6
```
### 3. 作为构造器调用，用于创建一个新对象。

* 构造器(constructor)的目的，是为了创建一个新对象并对其设置，然后将其作为构造器的返回值进行返回。
* 用函数作为构造器使用时，要在函数调用前使用new关键字。
* new出来的对象，可作为this参数来引用构造器内的变量或方法。

```js
function Person(name,age){
    this.name = name;
    this.age = age;
	return this;
}
var zhangsan = new Person("张三",20);
var lisi = new Person("李四",19);
console.log(zhangsan.name); //张三
console.log(zhangsan.age); //20
console.log(lisi.name); //李四
console.log(lisi.age); //19
```

### 4. 通过apply()或call()方法调用
上述三种函数调用它的上下文(this指向)都是由外部环境决定的，为了在一些对象的方法复用上，能否任意指定呢？<br>
这就用到了call，apply方法。使用方法:
>函数名.call(被指定作为函数this的对象，函数参数1，函数参数2，函数参数3...)<br>
>函数名.apply(被指定作为函数this的对象，函数参数数组)

使用场景1. **对象的继承**

```js
function Person() {
    this.say = "我是一个人"; // this == window
    this.print = function () {
        console.log(this.say); // this == Person
    }
}
function Student() {
    Person.call(this);
    this.print();
}
Student();   // "我是一个人"
```

使用场景2. **方法复用**

```js
//类数组对象使用数组的方法:对象拷贝为数组
var anArrayLikeObj = {0:"zhangsan", 1:23, 2:[12,23], length:3 };
var newArray = Array.prototype.slice.call(anArrayLikeObj, 0);
console.log(newArray); //["zhangsan", 23, Array(2)]
```
