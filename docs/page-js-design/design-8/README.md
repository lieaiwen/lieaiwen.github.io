## 观察者模式(订阅-发布模式)
发布-订阅模式又叫观察者模式，它定义对象间的一种一对多的依赖关系，当一个对象的状态发生
改变时，所有依赖于它的对象都将得到通知，在js开发中，我们一般用事件模型来替代传统的
发布-订阅模式。
``` 
var observer = { //订阅者
    addSubstriber: function (callback){ // 增加子列
        this.subscribers[this.subscribers.length] = callback;
    },
    removeSubstriber: function (callback){ // 删除子列
        for(var i = 0;i<this.subscribers.length;i++){
            if(this.subscribers[i] === callback){
                delete(this.subscribers[i])
            }
        }
    },
    publish:function(what){ // 发布消息
        for(var i=0;i<this.subscribers.length; i++){
            if(typeof this.subscribers[i] === "function"){
                this.subscribers[i](what)
            }
        }
    },
    make:function(o){ // 制作 将对象转换为发布者
        for(var i in this){
            o[i] = this[i];
            o.subscribers = [];
        }
    }
}
```


[demo](http://www.zliel.top/vpdemo/js-demo/js-observer/observer.html)<br>

>所谓js高级程序员,第一个评判标准就是 你要掌握你工作中不常用到的知识点。
>第二个呢，别人会的你得会，别人不会的你也得会。
>第三个呢，不好掌握的，好的话，谁都是高级程序员了。
>所以，最后呢会很苦的，你要很用功的学习和实践。

##vue的双向绑定原理是什么
>vue的双向绑定是由数据劫持结合发布者－订阅者模式实现的,
>通过Object.defineProperty()来劫持对象属性的setter和getter操作，在数据变动时做你想要做的事情

哎，这句话都看了不下十遍了,Object.defineProperty()会啊，不就是几个属性的 是否能读取，删除，遍历嘛？
js的发布，订阅模式也看了，就好比你们订阅了 我的订阅号，然后我发消息，只要订阅的人都能收到，订阅者可以被删除。
但是vue是怎么结合两者呢？让我们开始一探究竟吧！

**Object.defineProperty()**
>Object.defineProperty(obj, prop, descriptor)

* obj 要定义属性的对象。
* prop 要定义或修改的属性的名称。
* descriptor 要定义或修改的属性描述符。
    1. writable : true || false(默认)     // 属性值可修改
    2. enumerable : true || false(默认)    // 属性可枚举
    3. configurable : true || false(默认)  // 属性可重新配置
```
var obj = {}
Object.defineProperty(obj,'age',{
        value:123456,
        writable:true,
        enumerable:true,         
        configurable:true,       
    })
{age: 123456}
更简单的 来说就是 
writable:true,  obj.age = 10  // obj {age: 10}  
writable:false,  obj.age = 10  // obj {age: 123456}  
enumerable:true,  你用for in可以遍历到 属性 age 
enumerable:false,  你用for in不可以遍历到 属性 age 
configurable:true, 你就可以重新修改 上面的三个值 
如果为false  则你第一次定义的 writable enumerable 就固定了不能再修改了。
```
在接下里说一下 getter和setter方法，
```
用大白话说就是 你设置我的时候 就走setter
用大白话说就是 你获取我的时候 就走getter

var book = {};
Object.defineProperty(book,'name',{
    set:function(value) {
        name = value;
        console.log('你取了一个书名叫:'+value);
    },
    get:function() {
        console.log('get方法被监听到');
        return name+'你看过？';
    }
});
设置书名
    book.name = "简爱"
        你取了一个书名叫:简爱
        "简爱"
获取书名
    book.name
         get方法被监听到
        "简爱你看过？"
```
ok 到这里Object.defineProperty()方法就写完了。
**发布-订阅模式**
>比如你订阅了报纸，然后每几天都有人 给你送报纸，你就是订阅者，报社就是发布者。

如何实现该模式呢？
1. 初始化发布者和订阅者
2. 订阅者需要再发布者那里，登记一下，然后发布者发布消息的时候，依次下发给订阅者。

那怎么实现vue的mvvm模式的双向绑定呢？
<br>
**思路分析**

 mvvm实现双向绑定， 就是视图更新数据就更新，数据更新视图也更新。
<hr>
view变化更新data其实可以通过事件监听实现，比如input标签监听input事件，所有我们着重分析data变化更新view.
<hr>
data变化更新view的重点是如何知道data什么时候变化了，只要知道什么时候data变化了，那么接下来的就好处理了．这个时候我们上文提到的Object.defineProperty( )就起作用了．通过Object.defineProperty( )对属性设置一个set函数，当属性变化时就会触发这个函数，所以我们只需要将一些更新的方法放在set函数中就可以实现data变化更新view了．

**实现过程**

>我们已经知道如何实现数据的双向绑定了，　那么首先要对数据进行劫持监听，所以我们首先要设置一个监听器Observer,用来监听所有的属性，当属性变化时，就需要通知订阅者Watcher,看是否需要更新．因为属性可能是多个，所以会有多个订阅者，故我们需要一个消息订阅器Dep来专门收集这些订阅者，并在监听器Observer和订阅者Watcher之间进行统一的管理．以为在节点元素上可能存在一些指令，所以我们还需要有一个指令解析器Compile，对每个节点元素进行扫描和解析，将相关指令初始化成一个订阅者Watcher，并替换模板数据并绑定相应的函数，这时候当订阅者Watcher接受到相应属性的变化，就会执行相对应的更新函数，从而更新视图．

整理上面的思路，我们需要实现三个步骤，来完成双向绑定：
1. 实现一个监听器Observer，用来劫持并监听所有属性，如果有变动的，就通知订阅者。

2. 实现一个订阅者Watcher，可以收到属性的变化通知并执行相应的函数，从而更新视图。

3. 实现一个解析器Compile，可以扫描和解析每个节点的相关指令，并根据初始化模板数据以及初始化相应的订阅器。

**1. 实现一个监听器Observer**

数据监听器的核心方法就是Object.defineProperty( )，通过遍历循环对所有属性值进行监听，并对其进行Object.defineProperty( )处理，那么代码可以这样写：
```
  function observer(data){ // 定义观察者
         if(!data || typeof data !== 'object'){ // 必须是对象
             return;
         }
         Object.keys(data).forEach(function(key){ // 遍历对象的属性 Object.keys,不包括原型上的属性
             defineReactive(data,key,data[key])  // 给每一个属性添加 响应，监听
         })
     }
     function defineReactive(data,key,val){ // 给每一个属性添加 监听
         observer(val);  // 递归监听
         Object.defineProperty(data,key,{
             enumerable:true,
             configurable:true,
             get:function(){ // 获取的时候 直接返回
                 return val;
             },
             set:function(newVal){
               val = newVal
               console.log('属性'+key+'被监听了新值是:'+newVal.toString())
             }
         })
     }
     var library = {
         book_1:{
             name:''
         },
         book_2:''
     }
     observer(library)
     library.book_1.name = 'vue书';
     library.book_2= 'js书';
     // 属性name被监听了新值是:vue书
     // 属性book_2被监听了新值是:js书
```
通过observe()方法进行遍历向下找到所有的属性，并通过defineReactive()方法进行数据劫持监听．
>在上面的思路中，我们需要一个可以容纳消息订阅者的消息订阅器Dep，订阅器主要收集消息订阅者，然后在属性变化时执行相应订阅者的更新函数，那么消息订阅器Dep需要有一个容器，用来存放消息订阅者．我们将上面的监听器Observer稍微修改一下：

```
 function observer(data){
         if(!data || typeof data !== 'object'){
             return;
         }
         Object.keys(data).forEach(function(key){
             defineReactive(data,key,data[key])
         })
     }
     function defineReactive(data,key,val){
         observer(val);
         Object.defineProperty(data,key,{
             enumerable:true,
             configurable:true,
             get:function(){
                 if (是否需要添加订阅者) {    //Watcher初始化触发
                     dep.addSub(watcher); // 在这里添加一个订阅者
                 }
                 return val;
             },
             set:function(newVal){
                 if(val === newVal){
                    return;
                 }
               val = newVal
               console.log('属性'+key+'被监听了新值是:'+newVal.toString())
              dep.notify(); // 如果数据变化，通知所有订阅者
             }
         })
     }
     function Dep(){ // dep 容器 所有的订阅者都在这里面
         this.subs = []
     }
     Dep.prototype = {
         addSub:function(sub){
             this.subs.push(sub);
         },
         notify:function(){ // 通知
           this.subs.forEach(function(sub){
               sub.update();
             })
         }
     }
     Dep.target = null;
```
我们将订阅器Dep添加一个订阅者设计在get里面，这是为了让Watcher在初始化时触发，因此判断是否需要需要添加订阅者，
至于具体实现的方法，我们在下文中深究．在set方法中，如果函数变化，就会通知所有的订阅者，订阅者们将会执行相对应的更新函数，到目前为止，
一个比较完善的Observer已经成型了，下面我们要写订阅者Watcher

**2. 实现订阅者Watcher**
>根据我们的思路，订阅者Wahcher在初始化时要将自己添加到订阅器Dep中，那么如何进行添加呢？

我们已经知道监听器Observer是在get函数中执行了添加订阅者的操作的，所以我们只需要在订阅者Watcher在初始化时触发相对应的get函数来执行添加订阅者的操作即可．那么怎么触发对应的get函数呢？我们只需要获取对应的属性值，就可以通过Object.defineProperty( )触发对应的get了．
<br>
在这里需要注意一个细节，我们只需要在订阅者初始化时才执行添加订阅者，所以我们需要一个判断，在Dep.target上缓存一下订阅者，添加成功后去除就行了，代码如下：
