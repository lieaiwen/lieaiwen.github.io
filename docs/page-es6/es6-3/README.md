# Promise

谁说我们程序员不懂浪漫，promise 就是我们的浪漫之一 <br>
promise 承诺，许诺的意思，所以接下来我们就看看到底许诺了什么？

在 JavaScript 的世界中，所有代码都是单线程执行的。<br>
由于这个“缺陷”，导致 JavaScript 的所有网络操作，浏览器事件，都必须是异步执行。异步执行可以用回调函数实现<br>
下面四个概念注意区分：

> 异步执行：就是说我必须先干完事件 1，才能干事件 2，接着干事件 3<br>
> 同步执行：1,2,3 这 3 件事，我同时干<br>
> 异步接口:发起一个接口请求不需要等到响应结果就能发起下一个接口请求。<br>
> 同步接口:发起一个接口请求必须要等到响应结果才能发起下一个接口请求。

```
// 当参数a>10的时候，调用fn2,小的时候调用fn3，调用fn2的时候再把参数传给他，当参数>16的
时候调用fn4 其它情况调用fn5，
function fn1(a){
    if(a>10){
        fn2(a)
    }else{
        fn3()
    }
};
function fn2(b){
    if(b>16){
        fn4()
    }else{
        fn5()
    }
}
```

一般来说我们会碰到的回调嵌套都不会很多，一般就一到两级，但是某些情况下，回调嵌套很多时，代码就会非常繁琐，会给我们的编程带来很多的麻烦，这种情况俗称——回调地狱。<br>

这时候我们的 promise 就应运而生、粉墨登场了.<br>

promise 是用来解决两个问题的：

> 1.0 回调地狱，代码难以维护， 常常第一个的函数的输出是第二个函数的输入这种现象 <br>
> 2.0 promise 可以支持多个并发的请求，获取并发请求中的数据

## 1.0 Promise 的状态

> promise 有三种状态：pending(等待态)，fulfiled(成功态)，rejected(失败态)<br>
> 两个过程: <br>
> 1.0 pending -> fulfiled、状态的改变改变调用的是 resolve(data),其中的参数是 promise 成功状态时的结果，进入.then()<br>
> 2.0 pending -> rejected 状态的改变调用的时 reject(error),参数是失败状态的结果,进入.catch()

Promise 是一个构造函数，所有可以直接 new

```
 let p = new Promise((resolve, reject) => {
    //做一些异步操作
    setTimeout(() => {
        console.log('执行完成');
        resolve('我是成功！！');
    }, 2000);
});
    console.log('p',p) // p Promise{<pending>}
    p.then(res=>{
        console.log(res) // 我是成功
    })
```

## 2.0 then 链式操作的用法

从表面上看，Promise 只是能够简化层层回调的写法，而实质上，Promise 的精髓是“状态”，用维护状态、传递状态的方式来使得回调函数能够及时调用，它比传递 callback 函数要简单、灵活的多。所以使用 Promise 的正确场景是这样的：

```
p.then((data) => {
    console.log(data);
})
.then((data) => {
    console.log(data);
})
.then((data) => {
    console.log(data);
});
```

## 3.0 .catch 用法

.then 是接受成功的时候值的，如果失败了，那就走 catch，看下面

```
let p = new Promise((resolve, rejected) => {
    setTimeout(function(){
        var num = Math.ceil(Math.random()*10); //生成1-10的随机数
        if(num<=5){
            resolve(num);
        }
        else{
          rejected(num);
        }
    }, 2000);
});
    p.then((data) => {
         console.log('resolved',data);
        }
    ).catch(err=>{
        console.log('rejected',err);
    });
```

所以说好用就是好用，肯定返回两个值，要么成功，要么失败，很方便我们接下来的操作。

## 4.0 Promise.all 用法

谁跑的慢，以谁为准执行回调(意思是都执行完了才有返回值)。all 接收一个数组参数，里面的值最终都算返回 Promise 对象

```
 let Promise1 = new Promise(function(resolve, reject){
                resolve({name:'小红'})
    })
    let Promise2 = new Promise(function(resolve, reject){
        setTimeout(()=>{
            resolve({name:'小明'})
        },2000)
    })
    let Promise3 = new Promise(function(resolve, reject){
        resolve({name:'小白'})
    })

    let p = Promise.all([Promise1, Promise2, Promise3])
    console.log('p',p)
    p.then((data) => {
         console.log('resolved',data); // [{name:'小红'},{name:'小明'},{name:'小白'}]
      }
    ).catch(err=>{
        console.log('rejected',err);
    });
```

注意：上面的返回值跟先执行完不执行完，没关系，一定是按 all 后面的顺序返回的。<br>
有了 all，你就可以并行执行多个异步操作，并且在一个回调中处理所有的返回数据.所以有时候，我们跟后台，调接口的时候，需要从两个接口都拿到值
才能进行下一步操作的时候，all 方法是再合适不过了。

## 5.0 Promise.race()方法

谁跑的快，以谁为准执行回调(也就是说，谁先给结果我就用谁)。<br>
race 的使用场景：比如我们可以用 race 给某个异步请求设置超时时间，并且在超时后执行相应的操作

```
//请求某个图片资源
    function requestImg(){
        var p = new Promise((resolve, reject) => {
            var img = new Image();
            img.onload = function(){
                resolve(img);
            }
            img.src = '图片的路径';
        });
        return p;
    }
    //延时函数，用于给请求计时
    function timeout(){
        var p = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('图片请求超时');
            }, 5000);
        });
        return p;
    }
    Promise.race([requestImg(), timeout()]).then((data) =>{
        console.log(data);
    }).catch((err) => {
        console.log(err);
    });
```

requestImg 函数会异步请求一张图片，我把地址写为"图片的路径"，所以肯定是无法成功请求到的。timeout 函数是一个延时 5 秒的异步操作。我们把这两个返回 Promise 对象的函数放进 race，于是他俩就会赛跑，如果 5 秒之内图片请求成功了，那么遍进入 then 方法，执行正常的流程。如果 5 秒钟图片还未成功返回，那么 timeout 就跑赢了，则进入 catch，报出“图片请求超时”的信息。

## 6.0 Promise 的 finally()方法

```
const p = function(){
    let num = Math.random();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            num > 0.5 ? resolve(num) : reject(num); // 大于0.5 成功，小于的话返回失败
        }, 1000);
    })
};

pms().then(res=>{
    console.log('成功的结果',res)
}).catch(err=>{
    console.log('失败的结果',err)
}).finally(() => {
    console.info('不管成功与失败，最后我都要执行干其它的事情');
})
```
## 7.0 Promise 的模拟实现
```js
function myPromise(fun){
        var that = this;
        that.status = "pending";
        that.value = undefined;
        that.reason = undefined;
        function resolve(value){
            if(that.status === "pending"){
                that.value = value;
                that.status = "resolved";
            }
        }
        function reject(reason){
            if(that.status === "pending"){
                that.reason = reason;
                that.status = "rejected";
            }
        }
        //捕获构造异常
        try{
            fun(resolve,reject);
        }catch(e){
            reject(e);
        }
    }
    myPromise.prototype.then=function(onFullfilled,onRejected){
        let self=this;
        switch(self.status){
            case "resolved":
                onFullfilled(self.value);
                break;
            case "rejected":
                onRejected(self.reason);
                break;
            default:
        }
    }
    var aa = new myPromise(function(resolve,reject){ resolve(1)});
    console.log(aa)
    aa.then(function(res){console.log(res)}) 
```
悲观的人，先被自己打败，然后才被生活打败；乐观的人，先战胜自己，然后才战胜生活。——汪国真
