## 16.0 闭包
>是指有权访问另一个函数作用域中的变量的函数<br>
>闭包的形成与变量的作用域以及变量的生存周期密切相关。

对于在函数内用 var 关键字声明的局部变量来说，当退出函数时，这些局部变量即失去了
它们的价值，它们都会随着函数调用的结束而被销毁：
```js
var func = function(){ 
 var a = 1; // 退出函数后局部变量 a 将被销毁
 alert ( a ); 
}; 
func();
```
现在来看看下面这段代码：
```js
var func = function(){ 
 var a = 1; 
 return function(){ 
 a++; 
 alert ( a );
 }
};
var f = func();
f(); // 输出：2 
f(); // 输出：3 
f(); // 输出：4 
f(); // 输出：5
```
跟我们之前的推论相反，当退出函数后，局部变量 a 并没有消失，而是似乎一直在某个地方
存活着。这是因为当执行 var f = func();时，f 返回了一个匿名函数的引用，它可以访问到 func()
被调用时产生的环境，而局部变量 a 一直处在这个环境里。既然局部变量所在的环境还能被外界
访问，这个局部变量就有了不被销毁的理由。在这里产生了一个闭包结构，局部变量的生命看起
来被延续了。

下面介绍一个闭包的经典应用

假设页面上有 5 个
div 节点，我们通过循环来给每个 div 绑定 onclick 事件，按照索引顺序，点击第 1 个 div 时弹出
0，点击第 2 个 div 时弹出 1，以此类推。代码如下：

```js
<html> 
 <body> 
 <div>1</div> 
 <div>2</div> 
 <div>3</div> 
 <div>4</div> 
 <div>5</div> 
 <script> 
 var nodes = document.getElementsByTagName( 'div' ); 
 for ( var i = 0, len = nodes.length; i < len; i++ ){ 
       nodes[ i ].onclick = function(){ 
        alert ( i ); 
       } 
 }; 
 </script> 
 </body> 
</html>
```
测试这段代码就会发现，无论点击哪个 div，最后弹出的结果都是 5。这是因为 div 节点的
onclick 事件是被异步触发的，当事件被触发的时候，for 循环早已结束，此时变量 i 的值已经是
5，所以在 div 的 onclick 事件函数中顺着作用域链从内到外查找变量 i 时，查找到的值总是 5。

我们可以再结尾打印

console.log(i,window.i) // 5 5
证明 for循环里面的i 是全局变量挂载在window对象上

解决办法：

**1.0 var关键字换成let**
```js
 var nodes = document.getElementsByTagName( 'div' ); 
 for ( let i = 0, len = nodes.length; i < len; i++ ){ 
       nodes[ i ].onclick = function(){ 
        alert ( i ); 
       } 
 }; 
```
for循环每次循环产生一个新的块级作用域，每个块级作用域的变量是不同的。函数输出的是自己的上一级（循环产生的块级作用域）下i的值。

**2.0 自执行函数**
>是在闭包的帮助下，把每次循环的 i 值都封闭起来。当在事件函数中顺着作用域链
中从内到外查找变量 i 时，会先找到被封闭在闭包环境中的 i，如果有 5 个 div，这里的 i 就分别
是 0,1,2,3,4：
```js
for ( var i = 0, len = nodes.length; i < len; i++ ){ 
       (function( i ){ 
             nodes[ i ].onclick = function(){ 
             console.log(i); 
       } 
       })( i ) 
};
```


**形成条件**<br>

1. 函数嵌套

2. 内部函数引用外部函数的局部变量

**优点**<br>

* 延长外部函数局部变量的生命周期

**作用**<br>

1. 防抖
2. 节流
3. 等等

