## es6 class
定义：
在ES6中，class (类)作为对象的模板被引入，可以通过 class 关键字定义类。 <br>
class 的本质是 function。<br>
它可以看作一个语法糖，让对象原型的写法更加清晰、更像面向对象编程的语法。<br>
## 基础用法
在ES5时代，可以像下面这样模拟一个类，先声明一个构造函数，然后在其原型上定义共享的方法，最后与new运算符组合实例化一个类。
``` 
function People(name) {
  this.name = name;
}
People.prototype.getName = function () {
  return this.name;
};
var people = new People("strick");
people.getName();       //"strick"
```
1.0 类的定义
```
// 匿名类
let Example = class{
    constructor(a){
        this.a = a;
    }
}
// 命名类
let Example = class Example{
    constructor(a){
        this.a = a;
    }
}
```
2.0 类声明
``` 
class Example{
    constructor(a){
        this.a = a;
    }
}
```

注意点： <br>
1.0 不能重复声明 
``` 
比如：
 class Example{}
 class Example{}
// Uncaught SyntaxError: Identifier 'Example' has already been 
// declared
再比如：
let Example1 = class{}
class Example{}
// Uncaught SyntaxError: Identifier 'Example' has already been 
// declared
```
2.0 类定义不能被提升 意味着必须在访问前对类进行定义，否则就会报错。<br>
类中方法不需要 function 关键字。<br>
方法间不能加分号。<br>
``` 
    class People{
        constructor(name){
            this.name = name   
        }
        getName(){
            return this.name
        }
    }
var people = new People('lie')
people.getName(); // lie
typeof People;// function
typeof People.prototype.getName;// function
```
## 类的主体
属性
1.0 prototype 还是存在的，虽然可以直接自类中定义方法，但是其实方法还是定义在 prototype 上的。 覆盖方法 / 初始化时添加方法
``` 
Example.prototype={
    //methods
}
添加方法
Object.assign(Example.prototype,{
    //methods
})
```
2.0 静态属性 <br>
Class 内部只有静态方法，没有静态属性。<br>
3.0 公共属性
``` 
class Example{}
Example.prototype.a = 2;
```
4.0 实例属性
``` 
实例属性：定义在实例对象（ this ）上的属性。

class Example {
    a = 2;
    constructor () {
        console.log(this.a);
    }
}
```
5.0 name 属性 <br>
返回跟在 class 后的类名(存在时)。
``` 
   let Example=class Exam {
       constructor(a) {
           this.a = a;
       }
   }
   console.log(Example.name); // Exam
    
   let Example=class {
       constructor(a) {
           this.a = a;
       }
   }
   console.log(Example.name); // Example
```
## 类的方法
1.0 constructor 方法 <br>
constructor 方法是类的默认方法，创建类的实例化对象时被调用。
``` 
class Example{
    constructor(){
      console.log('我是constructor');
    }
}
new Example(); // 我是constructor
```
返回对象
``` 
class Test {
    constructor(){
        // 默认返回实例对象 this
    }
}
console.log(new Test() instanceof Test); // true
 
class Example {
    constructor(){
        // 指定返回对象
        return new Test();
    }
}
console.log(new Example() instanceof Example); // false
```
2.0 静态方法
``` 
class Example{
    static sum(a, b) {
        console.log(a+b);
    }
}
Example.sum(1, 2); // 3
```
3.0 原型方法
``` 
class Example {
    sum(a, b) {
        console.log(a + b);
    }
}
let exam = new Example();
exam.sum(1, 2); // 3
```
4.0  实例方法 跟上面比实例化的时候就已经被创建了 (不用在意)
``` 
class Example {
    constructor() {
        this.sum = (a, b) => {
            console.log(a + b);
        }
    }
}
let exam = new Example();
exam.sum(1, 2); // 3
```
类的实例化
new <br>
class 的实例化必须通过 new 关键字。<br>
```
class Example {}
let exam1 = Example();
// Class constructor Example cannot be invoked without 'new' 
```
实例化对象  共享原型对象
```
class Example {
    constructor(a, b) {
        this.a = a;
        this.b = b;
        console.log('Example');
    }
    sum() {
        return this.a + this.b;
    }
}
let exam1 = new Example(2, 1);
let exam2 = new Example(3, 1);
console.log(exam1._proto_ == exam2._proto_); // true
 
exam1._proto_.sub = function() {
    return this.a - this.b;
}
console.log(exam1.sub()); // 1
console.log(exam2.sub()); // 2
```
## getter 和 setter
例子：
``` 
class Example{
    constructor(a, b) {
        this.a = a; // 实例化时调用 set 方法
        this.b = b;
    }
    get a(){
        console.log('getter');
        return this.a;
    }
    set a(a){
        console.log('setter');
        this.a = a; // 自身递归调用
    }
}
let exam = new Example(1,2); // 不断输出 setter ，最终导致 RangeError
```
另外一个例子：
``` 
class Example1{
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    get a(){
        console.log('getter');
        return this._a;
    }
    set a(a){
        console.log('setter');
        this._a = a;
    }
}
let exam1 = new Example1(1,2); // 只输出 setter , 不会调用 getter 方法
console.log(exam._a); // 1, 可以直接访问
```
getter 不能单独出现
``` 
class Example {
    constructor(a) {
        this.a = a; 
    }
    get a() {
        return this.a;
    }
}
let exam = new Example(1); // Uncaught TypeError: Cannot set property // a of #<Example> which has only a getter
```
getter与setter必须同时出现
```  
class Father {
    constructor(){}
    get a() {
        return this._a;
    }
}
class Child extends Father {
    constructor(){
        super();
    }
    set a(a) {
        this._a = a;
    }
}
let test = new Child();
test.a = 2;
console.log(test.a); // undefined
console.log(test._a); // 2
Father.a //undefined
Father._a //undefined
```
都放在父类或者子类里面
```  
class Father1 {
    constructor(){}
    // 或者都放在子类中
    get a() {
        return this._a;
    }
    set a(a) {
        this._a = a;
    }
}
class Child1 extends Father1 {
    constructor(){
        super();
    }
}
let test1 = new Child1();
test1.a = 2;
console.log(test1.a); // 2
```
## extends 
通过exteds实现类的继承<br>
super <br>
子类constructor方法中必须有super，且必须出现在this之前。
``` 
class Father {
    constructor() {}
}
class Child extends Father {
    constructor() {}
    // or 
    // constructor(a) {
        // this.a = a;
        // super();
    // }
}
let test = new Child(); // Uncaught ReferenceError: Must call super 
// constructor in derived class before accessing 'this' or returning 
// from derived constructor
```
调用父类构造函数,只能出现在子类的构造函数。
``` 
class Father {
    test(){
        return 0;
    }
    static test1(){
        return 1;
    }
}
class Child extends Father {
    constructor(){
        super();
    }
}
class Child1 extends Father {
    test2() {
        super(); // Uncaught SyntaxError: 'super' keyword unexpected     
        // here
    }
}
```
调用父类方法, super 作为对象，在普通方法中，指向父类的原型对象，在静态方法中，指向父类
``` 
class Child2 extends Father {
    constructor(){
        super();
        // 调用父类普通方法
        console.log(super.test()); // 0
    }
    static test3(){
        // 调用父类静态方法
        return super.test1()+2;
    }
}
Child2.test3(); // 3
```
## constructor 方法
constructor 方法是类的构造函数，是一个默认方法，通过 new 命令创建对象实例时，自动调用该方法。一个类必须有 constructor 方法，如果没有显式定义，一个默认的 consructor 方法会被默认添加。所以即使你没有添加构造函数，也是会有一个默认的构造函数的。一般 constructor 方法返回实例对象 this ，但是也可以指定 constructor 方法返回一个全新的对象，让返回的实例对象不是该类的实例。
```  
es5
function Point(x, y) {
  this.x = x;
  this.y = y;
}
 
Point.prototype.toString = function() {
  return '(' + this.x + ',' + this.y + ')';
}
```
等同于
```  

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
 
  toString() {
    return '(' + this.x + ',' + this.y + ')';
  }
}
```
## super 关键字
super 这个关键字，既可以当做函数使用，也可以当做对象使用。这两种情况下，它的用法完全不用。<br>
1.0 当做函数使用
```  
class A {}
class B extends A {
  constructor() {
    super();  // ES6 要求，子类的构造函数必须执行一次 super 函数，否则会报错。
  }
}
```
注意：在 constructor 中必须调用 super 方法，因为子类没有自己的 this 对象，而是继承父类的 this 对象，然后对其进行加工,而 super 就代表了父类的构造函数。super 虽然代表了父类 A 的构造函数，但是返回的是子类 B 的实例，即 super 内部的 this 指的是 B，因此 super() 在这里相当于 ```A.prototype.constructor.call(this, props)``。
``` 
class A {
  constructor() {
    console.log(new.target.name); // new.target 指向当前正在执行的函数
  }
}
 
class B extends A {
  constructor {
    super();
  }
}
 
new A(); // A
new B(); // B
```
可以看到，在 super() 执行时，它指向的是 子类 B 的构造函数，而不是父类 A 的构造函数。也就是说，super() 内部的 this 指向的是 B。
<br>
2.0 当做对象使用
<br>
在普通方法中，指向父类的原型对象；在静态方法中，指向父类。
``` 
lass A {
  c() {
    return 2;
  }
}
 
class B extends A {
  constructor() {
    super();
    console.log(super.c()); // 2
  }
}
 
let b = new B();
```
上面代码中，子类 B 当中的 super.c()，就是将 super 当作一个对象使用。这时，super 在普通方法之中，指向 A.prototype，所以 super.c() 就相当于 A.prototype.c()。
<br>
通过 super 调用父类的方法时，super 会绑定子类的 this。
``` 
class A {
  constructor(){
    this.x = 1;
  }
  s() {
    console.log(this.x);
  }
}
 
class B extends A {
  constructor(){
    super();
    this.x = 2;
  }
  m() {
    super.s();
  }
}
 
let b = new B();
b.m(); // 2
```
上面代码中，super.s() 虽然调用的是 A.prototytpe.s()，但是 A.prototytpe.s()会绑定子类 B 的 this，导致输出的是 2，而不是 1。也就是说，实际上执行的是 super.s.call(this)。
<br>

由于绑定子类的 this，所以如果通过 super 对某个属性赋值，这时 super 就是 this，赋值的属性会变成子类实例的属性
```
class A {
  constructor() {
    this.x = 1;
  }
}
 
class B extends A {
  constructor() {
    super();
    this.x = 2;
    super.x = 3;
    console.log(super.x); // undefined
    console.log(this.x); // 3
  }
}
 
let b = new B();

```
上面代码中，super.x 赋值为 3，这时等同于对 this.x 赋值为 3。而当读取 super.x 的时候，调用的是 A.prototype.x，但并没有 x 方法，所以返回 undefined。


注意，使用 super 的时候，必须显式指定是作为函数，还是作为对象使用，否则会报错。<br>
``` 
比如上面的例子
class B extends A {
  constructor() {
    super();
    console.log(super); // Uncaught SyntaxError: 'super' keyword unexpected here
    console.log(super()); // Super constructor may only be called once
  }
}
class B extends A {
  constructor() {
    console.log(super());// 这样是不报错的 如果
  }
}
```
上面代码中，console.log(super); 的当中的 super，无法看出是作为函数使用，还是作为对象使用，所以 JavaScript 引擎解析代码的时候就会报错。这是，如果能清晰的表明 super 的数据类型，就不会报错。
<br>

super 虽然代表了父类 A 的构造函数，但是返回的是子类 B 的实例，即 super 内部的 this 指的是 B，因此 super() 在这里相当于 ```A.prototype.constructor.call(this, props)``。
<br>
如下：
``` 
class A {
  constructor() {
    this.x = 1;
  }
}
 
class B extends A {
  constructor() {
    console.log(super()) // B {x: 1}
    this.x = 2;
    super.x = 3;
    
    console.log(this.x); // 3
  }
}
 
let b = new B();

```
最后，由于对象总是继承其他对象的，所以可以在任意一个对象中，使用 super 关键字。



