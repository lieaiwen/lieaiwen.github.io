## js基础知识2

## 函数声明和函数表达式
  不同之处在于 ：函数声明可以使函数的调用在函数之前提前调用 <br>
      函数表达式必须在编译器读取完函数表达式后才能调用函数  <br>
  ```
    a();
  	function a(){ // 函数声明
  		console.log('a')
  	}
  	b(); // Uncaught TypeError: b is not a function
  	var b = function(){ // 函数表达式
  		console.log('b')
  	}
      b() // 正常
  ```
  其他：自执行也是不一样的。
  ```
  (function a() {
      console.log("a");
  })()
  var b=function () {
      console.log("b")
  }()
  ```
  [demo](http://www.zliel.top/vpdemo/js-demo/js-f/f1.html)  <br>

  函数声明提前优先于变量声明提前
  ```
var f = function () {
  console.log("var");
}
function f() {
  console.log("function");
}
f();//var
  ```
  总结：Javascript 中函数声明和函数表达式是存在区别的，函数声明在JS解析时进行函数提升，因此在同一个作用域内，不管函数声明在哪里定义，该函数都可以进行调用。而函数表达式的值是在JS运行时确定，并且在表达式赋值完成后，该函数才能调用。这个微小的区别，可能会导致JS代码出现意想不到的bug,让你陷入莫名的陷阱中。

## 函数式编程
函数式编程就是一种抽象程度很高的编程范式，纯粹的函数式编程语言编写的函数没有变量， <br>
因此，任意一个函数，只要输入是确定的，输出就是确定的，这种纯函数我们称之为没有副作用。 <br>
而允许使用变量的程序设计语言，由于函数内部的变量状态不确定，同样的输入，可能得到不同的输出，因此，这种函数是有副作用的。 <br>

函数式编程的一个特点就是，允许把函数本身作为参数传入另一个函数，还允许返回一个函数 <br>

JavaScript是一门多范式语言，即可使用OOP（面向对象），也可以使用FP（函数式），<br>
函数式编程（英语：functional programming）即对过程进行抽象，将数据以输入输出流的方式封装进过程内部，从而也降低系统的耦合度。

[example](https://www.cnblogs.com/Darlietoothpaste/p/10633550.html)  <br>

## this指向问题和 箭头函数
js中this指向、箭头函数
```


箭头函数：箭头函数本身是没有this和arguments的，在箭头函数中引用this实际上是调用的是定义时的上一层作用域的this。
这里强调的是上一层作用域，是因为对象是不能形成独立的作用域的。
例如：

(1)

var obj = {
　　say: function() {
    　　var f1 = ()=>{
    　　　　console.log("1111",this);
    　　}
    　　f1();
　　}
}
var o = obj.say;
o();//f1执行时，say函数指向window，所以f1中的this指向window
obj.say();//f1执行时，say函数指向obj，所以f1中的this指向obj；

(2)

var ojb = {
　　pro: {
　　　　getPro: ()=>{
　　　　　　console.log(this);
　　　　}
　　}
}
obj.pro.getPro();//this指向的是window，因为箭头函数定义时，getPro的上一级是pro，是一个对象，不能形成单独的作用域，故指向window。
```
[demo](http://www.zliel.top/vpdemo/js-demo/js-this/this1.html)  <br>
