## 9.0 this 指向问题
>this 就是一个指针，指向调用函数的对象

0. 对象里面的 this，指向window
```js
var obj = {
        name:1,
        age:this.name
    }
 console.log(obj.age) // undefined
```
1. 单独的this，指向的是window这个对象 (默认绑定)
```
 console.log(this) // window
```
2. 全局函数中的this (默认绑定)
```
 function foo(){
     console.log(this) // window
 }
 foo()

严格模式下,this->undefined
    function foo(){
        'use strict'
        console.log(this)
    }
    foo()
```
3. 通过new 关键字生成的对象 this就指向该对象
>所谓构造函数，就是通过这个函数生成一个新对象，这时，this就指向这个对象。

```
function foo(){
    this.name = "big"
    console.log(this) // foo {name: "big"}
}
var a = new foo()
console.log(a) // foo {name: "big"}
console.log(a.name) // big
```
4. 用call与apply的方式调用函数
```
function demo() {
    console.log(this);
}
demo.call('abc'); // abc
demo.call(null); // this -> window
demo.call(undefined); // this -> window 
```
5. 定时器中的this，指向的是window
```
setTimeout(function() {
        console.log(this); // this -> window ，严格模式 也是指向window
    },500) 
```
6. 元素绑定事件，事件触发后，执行的函数中的this，指向的是当前元素
```
 let $btn = document.getElementById('btn');
 $btn.onclick = function(){
     console.log(this); // this -> 当前元素
 }
```
7. 函数调用时如果绑定了bind，那么函数中的this指向了bind中绑定的元素
```
 let $btn = document.getElementById('btn');
 $btn.addEventListener('click',function() {
    console.log(this); // window
 }.bind(window)) 
```
8. 对象中的方法，该方法被哪个对象调用了，那么方法中的this就指向该对象 (隐式绑定)
```
 let name = 'out'
     let obj = {
         name: 'in',
         getName: function() {
             console.log(this.name);
         }
     }
     obj.getName(); // in
     let fn = obj.getName; // 等于 let fn = function(){}
     fn(); //out  this -> window
```
9. 箭头函数是ES6中新增的，它和普通函数有一些区别，箭头函数没有自己的this，它的this继承于外层代码库中的this
```
var obj = {
        hi: function(){
            console.log(this);
            return ()=>{
                console.log(this);
            }
        },
        sayHi: function(){
            return function() {
                console.log(this);
                return ()=>{
                    console.log(this);
                }
            }
        },
        say: ()=>{
            console.log(this);
        }
    }
    let hi = obj.hi();  // obj 对象上的函数 function(){ console.log(this); return ()=> { console.log(this) } },
    hi();               // obj
    let sayHi = obj.sayHi();  // 独立的函数 function() { console.log(this); return ()=>{console.log(this);}
    let fun1 = sayHi(); // window return ()=>{console.log(this)}
    fun1();             //  window
    obj.say();          // window 对象上的箭头函数指向 外层 window 
```
**如何判定 this的指向的是什么**

1. 函数是否在new中调用(new绑定)，如果是，那么this绑定的是新创建的对象。
2. 函数是否通过call,apply调用，或者使用了bind(即硬绑定)，如果是，那么this绑定的就是指定的对象。
3. 函数是否在某个上下文对象中调用(隐式绑定)，如果是的话，this绑定的是那个上下文对象。一般是obj.foo()
4. 如果以上都不是，那么使用默认绑定。如果在严格模式下，则绑定到undefined，否则绑定到全局对象。
5. 如果把null或者undefined作为this的绑定对象传入call、apply或者bind，这些值在调用时会被忽略，实际应用的是默认绑定规则。
6. 如果是箭头函数，箭头函数的this继承的是外层代码块的this。

**来做一道题**
```
 var x = 10;
     var a = {
         x: 20,
         fn: function() {
             var x = 30
             return function() {
                 return this.x;
             }
         }
     }
     console.log( a.fn() ) // function(){ return this.x }
     console.log( (a.fn())() ) // this->window.x->10
     console.log( a.fn()() ) // this->window.x->10
     console.log( (a.fn())() == a.fn()() ) // true
     console.log( a.fn().call(this) ) // this->window.x->10
     console.log( a.fn().call(a) ) // this->a->20
```
**再来一道**
```
var number = 5;
var obj = {
    number: 3,
    fn1: (function () {
        var number;
        this.number *= 2;
        number = number * 2;
        number = 3;
        return function () {
            var num = this.number;
            this.number *= 2;
            console.log(num);
            number *= 3;
            console.log(number);
        }
    })()
}
var fn1 = obj.fn1;
fn1.call(null);
obj.fn1();
console.log(window.number);
```
>var fn1 = obj.fn1

```
1.0 fn1 
 function(){
  var num = this.number;
  this.number *= 2;
  console.log(num);
  number *= 3;
  console.log(number);
 }

2.0  fn1.call(null); 改变fn1的this指向window，所以
    先执行闭包  this.number = 10  number = 3
    var num = 10
    this.number = 20
    num // 10
    number = 闭包里面的3*3 9
    则结果为  10 9

3.0 obj.fn1() 对象调用 this指向 obj
    这时候还是不执行闭包了
    var num = 3
    this.number = 6
    num // 3
    number = 闭包里面的9*3 27
    则结果为  3 27

4.0 上面 最后一步指向window的是 2.0 里面的 this.number 则
    结果为：20
```
参考链接：[FinGet]() https://www.jb51.net/article/151599.htm<br>
参考链接：[刘小夕的博客]() https://juejin.im/post/5c96d0c751882511c832ff7b#heading-3


