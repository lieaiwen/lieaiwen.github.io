## js事件循环机制(Event Loop)
javascript从诞生之日起就是一门  `单线程的  非阻塞的`  脚本语言，
`单线程`意味着，javascript代码在执行的任何时候，都只有一个主线程来处理所有的任务，
`非阻塞`靠的就是 event loop（事件循环），本文就讲解下事件循环。
<br>
**event loop它最主要是分三部分：主线程、宏队列（macrotask）、微队列（microtask）**<br>
js的任务队列分为同步任务和异步任务，所有的同步任务都是在主线程里执行的，异步任务可能会在macrotask或者microtask里面<br>

**主线程**<br>
就是访问到的script标签里面包含的内容，或者是直接访问某一个js文件的时候，里面的可以在当前作用域直接执行的所有内容
<br>

**宏队列（macrotask）**<br>
setTimeout、setInterval、setImmediate(Node.js 环境)、I/O、UI rendering<br>

**微队列（microtask）**<br>
promise.then、process.nextTick(Node.js 环境) <br>

**执行顺序**<br>
1、先执行主线程<br>

2、遇到宏队列（macrotask）放到宏队列（macrotask）<br>

3、遇到微队列（microtask）放到微队列（microtask）<br>

4、主线程执行完毕<br>

5、执行微队列（microtask），微队列（microtask）执行完毕<br>

6、执行一次宏队列（macrotask）中的一个任务，执行完毕<br>

7、执行微队列（microtask），执行完毕<br>

8、依次循环...<br>
下面代码执行结果：
``` 
 console.log(1); // 1

setTimeout(function() { //2
 console.log(2);
}, 0);

new Promise(function(resolve) {//3
 console.log(3);
 resolve(Date.now());
}).then(function() {
 console.log(4);
});

console.log(5); //4 

setTimeout(function() { // 5
 new Promise(function(resolve) {
  console.log(6);
  resolve(Date.now());
 }).then(function() {
  console.log(7);
 });
}, 0);
```
执行顺序
>1.0 主线程 碰到1: 打印1 <br>
>2.0 碰到2： 打印3，把promise.then放到宏任务里面 碰到3: 放到微任务里面 碰到4: 打印5  碰到5: 放到宏任务里面 <br>
>3.0 执行微任务3： 打印4<br>
>4.0 执行宏任务2（因为先进去的）： 打印2<br>
>5.0 执行宏任务5，打印6 里面有promise.then 放到微任务 宏任务执行完毕<br>
>6.0 执行微任务：打印7<br>
最终结果是：1 3 5 4 2 6 7

我们在Promise.then实现一个稍微耗时的操作，
``` 
console.log(1); //1

var start = Date.now();

setTimeout(function() { // 2
 console.log(2);
}, 0);

setTimeout(function() { //3
 console.log(4, Date.now() - start);
}, 400);

Promise.resolve().then(function() { //4
 var sum = function(a, b) {
  return Number(a) + Number(b);
 }
 var res = [];
 for(var i=0; i<5000000; i++) {
  var a = Math.floor(Math.random()*100);
  var b = Math.floor(Math.random()*200);
  res.push(sum(a, b));
 }
 res = res.sort();
 console.log(3); 
})
```
>1.0 主线程 碰到1: 打印1 <br>
>2.0 碰到2，3： 放到宏任务  碰到4：放到微任务里<br>
>3.0 执行微任务4： 打印3<br>
>4.0 执行宏任务2，3： 2  4 3986<br>

本来要设定的是400ms后输出，但因为之前的任务耗时严重，导致之后的任务只能延迟往后排。说明，setTimeout和setInterval这种操作的延时是不准确的，这两个方法只能大概将任务400ms之后的宏任务中，但具体的执行时间，还是要看线程是否空闲。若前一个任务中有耗时的操作，或者有无限的微任务加入进来时，则会阻塞下一个任务的执行。
<br>

**async-await**<br>
那么 async-await 的代码怎么执行呢
``` 
function A() {
  return Promise.resolve(Date.now());
}
async function B() {
  console.log(Math.random());
  let now = await A();
  console.log(now);
}
console.log(1);
B();
console.log(2);
```
其实，async-await 只是 Promise+generator 的一种语法糖而已。上面的代码我们改写为这样，可以更加清晰一点：
``` 
function B() {
  console.log(Math.random());
  A().then(function(now) {
    console.log(now);
  })
}
console.log(1);
B();
console.log(2);
```
输出结果是：1, 0.4793526730678652(随机数), 2, 1557830834679(时间戳);<br>

## 其他概念
**队列（Queue）**<br>
队列 是一种 FIFO(First In, First Out) 的数据结构，它的特点就是 先进先出
>生活中最常见的例子就是排队啦，排在队伍最前面的人最先被提供服务。


**栈（Stack）**<br>
栈 是一种 LIFO（Last In, First Out）的数据结构，特点即 后进先出。
>薯片在包装的时候只能从顶部放入，而吃的时候也只能从顶部拿出，这就叫后进先出哈

**调用栈（Call Stack）**<br>
它本质上当然还是个栈啦 废话，关键在于它里面装的东西，是一个个待执行的函数。
>Event Loop 会一直检查 Call Stack 中是否有函数需要执行，如果有，就从栈顶依次执行。同时，如果执行的过程中发现其他函数，继续入栈然后执行。

先拿两个函数来说：

1 栈空<br>
2 现在执行到一个 函数A，函数A 入栈<br>
3 函数A 又调用了 函数B，函数B 入栈<br>
4 函数B 执行完后 出栈<br>
5 然后继续执行 函数A，执行完后A也 出栈<br>
6 栈空<br>

## 删除数组

