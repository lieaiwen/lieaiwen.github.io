## call和apply的模拟实现
**用法：**
>A.call(B,x,y)  B,x,y 为参数  
1. 改变函数A的this指向，使之指向B; （B为null，undefined的时候A里面的this指向window）
2. 把A函数放到B中运行，x和y是A函数的参数

```
 var girl = { name:'du',age:18 }
 function boy(){ console.log(this.age) }

boy.call(girl) // 18
```
注意：
1. call改变了this的指向，指向了girl
2. boy 函数执行了

**模拟实现第一步**
```
 var girl = {
     age: 18,
     boy: function() {
         console.log(this.age)
     }
 };
 
 girl.boy(); // 18
```
这样this 指向了girl，但是我们又增加了girl的属性，都这样写的话我们还有call干嘛？
<br>
那我们就把它再删除了。<br>
继续我们的步骤：
1. 将函数设为对象的属性
2. 执行该函数
3. 删除该函数
>1.0 girl.fn = boy<br>
>2.0 girl.fn()<br>
>3.0 delete girl.fn<br>

所以我们的第一版likeCall：<br>
```
Function.prototype.ss = function(){ console.log(this) }

function a(){}
a.ss() // function a(){}


Function.prototype.likeCall = function(context){
// 首先要获取调用call的函数，用this可以获取
    context.fn = this;
    context.fn()
    delete context.fn;
} 

var girl = { name:'du',age:18 }
 function boy(){ console.log(this.age) }

boy.likeCall(girl) // 18
```
**模拟实现第二步**

call 里面是可以传参数的并且是一个到多个,此时我们就可以用到函数里面的arguments对象获取对象的参数了
```
 function aa(a,b,c){ console.log(arguments) }
aa(1,2,3) 
arguments = {
      0: 1,
      1: 2,
      2: 3,
      length: 3
 }
因为arguments 是类似数组对象我们可以用for 循环
var args = []
for(var i = 1, len = arguments.length; i < len; i++) {
    args.push('arguments[' + i + ']');
}
 执行后 args为 [arguments[1], arguments[2], arguments[3]]
```
接下里我们把上面的数组放到要执行的函数里面
1. context.fn(...args) //es6
2. eval('context.fn(' + args +')') //es3

所以我们的第二版代码是：
```
 Function.prototype.likeCall = function(context){
 // 首先要获取调用call的函数，用this可以获取
    context.fn = this;
    var args = []
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }
     eval('context.fn(' + args +')')
     delete context.fn;
 } 
 
 var girl = { name:'du',age:18 }
  function boy(a, b){ 
    console.log(this.age + '--' + a +'--' + b)
  }
 
 boy.likeCall(girl,10,9) // 18--10--9
```
不要急还有最后一步:<br>
1. 第一个参数为null或者undefined的时候,即A的this 指向window<br>
```
  var age = 18 
   function boy(){ 
     console.log(this.age )
   }
  
  boy.call(null) // 18
```
2. 函数是有返回值的
```
  var age = 18 
   function boy(){ 
     return this.age +2
   }
  
  boy.call(null) // 20
```
综合上面两种情况直接上代码：
```
  Function.prototype.likeCall = function(context){
      var context = context || window;
  // 首先要获取调用call的函数，用this可以获取
     context.fn = this;
     var args = []
     for(var i = 1, len = arguments.length; i < len; i++) {
         args.push('arguments[' + i + ']');
     }
     var result =  eval('context.fn(' + args +')')
      delete context.fn;
     return result;
  } 
测试：
   var age = 18 
   var woman = {age:30}
   function boy(){ 
     return this.age +2
   }
  
  boy.likeCall(null) // 20  返回值没问题 
  boy.likeCall(woman) // 32 原来的也没问题
```
完成了。<br>
**apply的模拟实现**

apply跟call的区别就是 参数的不同而已 一个是多个参数一个是一个数组:
<br> 
看我们第一行的代码就是：
>A.apply(B,[1,2])

所以我们只要修改一下就行了:
```
 Function.prototype.likeApply = function(context, arr){
       var context = context || window;
   // 首先要获取调用call的函数，用this可以获取
      context.fn = this;
      var result
      if(!arr){
            result = context.fn()
      }else{
          var args = []
          for(var i = 1, len = arguments.length; i < len; i++) {
              args.push('arguments[' + i + ']');
          }
          result =  eval('context.fn(' + args +')')
      }
       delete context.fn;
      return result;
   } 
 测试： 不用测试了 的有点自信吧！
```
最后直接上bind的
```js
// bind要考虑返回的函数，作为构造函数被调用的情况
Function.prototype.Bind = function(context, ...args) {
  if (context === undefined || context === null) {
    context = window;
  }
  let fn = this;
  let f = Symbol();
  const result = function(...args1) {
    if (this instanceof fn) {
      // result如果作为构造函数被调用，this指向的是new出来的对象
      // this instanceof fn，判断new出来的对象是否为fn的实例
      this[f] = fn;
      let res = this[f](...args, ...args1);
      delete this[f];
      return res;
    } else {
      // bind返回的函数作为普通函数被调用时
      context[f] = fn;
      let res = context[f](...args, ...args1);
      delete context[f];
      return res;
    }
  };
  // 如果绑定的是构造函数 那么需要继承构造函数原型属性和方法
  // 实现继承的方式: 使用Object.create
  result.prototype = Object.create(fn.prototype);
  return result;
};
```
参考链接：[冴羽的博客]() https://github.com/mqyqingfeng/Blog/issues/11<br>

