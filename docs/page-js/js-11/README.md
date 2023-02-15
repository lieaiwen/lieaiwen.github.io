## 一道js题
```
function Foo() {
  getName = function() { console.log(1) } // 没有用关键字 var 所以定义的是全局的
  return this // 这里返回的是window 
}

Foo.getName = function() { console.log(2) }
Foo.prototype.getName = function() { console.log(3) }

var getName = function() { console.log(4) }
function getName () { console.log(5)  }

写出下面代码，打印的内容
Foo.getName()
getName()
Foo().getName()
getName()
new Foo.getName()
new Foo().getName()
```
先回顾一下函数的3 种声明方式
### 1.0 函数声明
这种方式就是使用 function 声明一个具名函数，特点是可以先使用后声明
```
fn()    // hello world!
function fn() {
	console.log('hello world!')
}
```
### 2.0 函数表达式
这种方式是把一个匿名函数赋给一个变量，必须先声明后使用
```
let fn1 = function(){
	console.log('hello world!')
}
fn1()   // hello world!

fn2()   // Uncaught ReferenceError: Cannot access 'fn2' before initialization
let fn2 = function(){
	console.log('hello world!')
}
```

### 3.0 通过构造函数 new 生成
```
//  let 函数名 = new Function(“参数...”, ”函数体”)
let fn = new Function('a', 'b', 'return a +b')
fn(1, 2)    // 3
```

解析：<br>
1.0 Foo.getName() // 打印2
<br>
2.0 getName() //4 这里有个概念就是函数声明会被提升，所以等于 现有了 function getName () { console.log(5)  }，然后再
重新定义了getName，所以打印4
<br>
3.0 Foo().getName() //1 Foo函数的返回值是this,所以Foo().getName()就是window.getName(),Foo()函数内全局的getName被覆盖，所以Foo().getName()执行后，打印1。
<br>
4.0 getName() // 1 上面Foo()函数执行 getName变成全局的 
<br>
5.0 new Foo.getName() //2  因为：. 的优先级比 new 高，所以这里就是一次 Foo.getName() 调用，所以是 2 ,new 是误导用的
<br>
6.0 new Foo().getName() //3 new Foo() 加个括号，是提升了优先级，会去先执行 new Foo(), 然后在调用 .getName(), 那问题又来了，为啥不是 1，因为内部的 getName 不是绑定在 this 上的呀，所以就去找原型上的方法，结果是 3
