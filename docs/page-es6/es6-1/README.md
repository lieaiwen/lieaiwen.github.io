## es6 相关知识点

## 1.0 解构赋值
```js
let [a, b, c] = [1, 2, 3];

不完全解构
let [a = 1, b] = []; // a = 1, b = undefined

剩余运算符
let [a, ...b] = [1, 2, 3]; 
//a = 1
//b = [2, 3]

对象模型的解构
 let { foo, bar } = { foo: 'aaa', bar: 'bbb' };

解构默认值
let {a = 10, b = 5} = {a: 3};

深层次解构
let {data:[list],status} = {data:[{name:'1'}],status:0}
list // [{name:'1'}]
``` 
## 2.0 对象的扩展
2.1 对象简写
```js
let name = "xiaoming"
let obj = {
    name
}
```
2.2 对象属性表达式
```js
let name = "a";
let obj = {
    [name]:'小红',
    [name+'bb']:'销量'
}
```
2.3 扩展运算符 (es2018才支持)
```js
let obj = {name:'123'}
let obj2 = {...obj}
obj2.name = '2222'
console.log(obj2.name) // 2222
console.log(obj.name) // 123
//合并
let obj1 = {age:12}
let obj2 = {name:'xiaoming'}
let obj = {
    ...obj1,
    ...obj2
}
console.log(obj) // {age:12,name:'xiaoming'}
```
2.4 Object.assign()合并对象 才是es6的
```js
let obj1 = {age:12}
let obj2 = {name:'xiaoming'}
let obj3 = {name:'小亮'}
Object.assign(obj1,obj2,obj3)
console.log(obj1) // {age:12,name:'小亮'}
console.log(obj2) // {name:'xiaoming'}
console.log(obj3) // {name:'小亮'}
//会影响了obj1
```
2.5 Object.is() 判断两个对象是否相等
```js
NaN == NaN // false
NaN === NaN // false
Object.is(5,5) //true
Object.is(5,'5') //false
Object.is({},{}) // false
Object.is(NaN,NaN) // true
Object.is(parseInt('wweer'),NaN) // true 比如第一个是某个函数的返回值，用这个判断是很好的
```

**扩展**

判断指定参数是否是一个数字值？
```js

function isTNumber(value){
    return !isNaN(parseFloat(value)) && isFinite(value);
}
// 就是jq的源码 $.isNumeric
```

## 3.0 promise
是异步编程的一种解决方案。<br>

从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。<br>

**状态的特点**<br>
Promise 异步操作有三种状态：pending（进行中）、fulfilled（已成功）和 rejected（已失败）。除了异步操作的结果，任何其他操作都无法改变这个状态。
<br>
Promise 对象只有：从 pending 变为 fulfilled 和从 pending 变为 rejected 的状态改变。只要处于 fulfilled 和 rejected ，状态就不会再变了即 resolved（已定型）。<br>

**状态的缺点**<br>
无法取消 Promise ，一旦新建它就会立即执行，无法中途取消。
<br>
如果不设置回调函数，Promise 内部抛出的错误，不会反应到外部。
<br>
当处于 pending 状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。
<br>

## 4.0 Generator
 Generator 函数，可以通过 yield 关键字，把函数的执行流挂起，为改变执行流程提供了可能，从而为异步编程提供解决方案。 基本用法
```js
function *gen(){
    console.log(1)
    yield 'aaa'// 产出
    console.log(2)
    yield 'bbb'
    console.log(3)
}
let g = gen() //
g.next() // 1
g.next() // 2
g.next() // 3

function *gen(){
    console.log(1)
    yield 'aaa'// 产出
    console.log(2)
    yield 'bbb'
    console.log(3)
}
let g = gen() //
let res1 = g.next() //  {value: 'aaa', done: false}
let res2 = g.next() // {value: 'bbb', done: false}
let res3 = g.next() // {value: undefined, done: true}
for(let i of g){
    console.log(i) // aaa //bbb //undefined
}
```

## 5.0 async
async 函数返回一个 Promise 对象，可以使用 then 方法添加回调函数。
```js
 function testAwait(){
    return new Promise((resolve) => {
        setTimeout(function(){
           console.log("testAwait");
           resolve();
        }, 1000);
    });
 }
  
 async function helloAsync(){
    await testAwait();
    console.log("helloAsync");
  }
 helloAsync();
 // testAwait
 // helloAsync
```
await 关键字仅在 async function 中有效。如果在 async function 函数体外使用 await ，你只会得到一个语法错误。

## 6.0 函数的扩展
```js
 //1.0 函数参数的扩展  默认参数
function fn(name,age=17){
 console.log(name+","+age);
}
fn("Amy",18);  // Amy,18
fn("Amy","");  // Amy,
fn("Amy");     // Amy,17

//2.0 不定参数
function f(...values){
    console.log(values.length);
}
f(1,2);      //2
f(1,2,3,4);  //4

//3.0 函数的name属性
function test(){ }
console.log(test.name) //test

// 3.0 箭头函数
//  3.1 简洁
//  3.2 没有arguments 参数 不能new
//  3.3 没有this
```
## 7.0 Symbol 数据类型
>ES6 引入了一种新的原始数据类型 Symbol ，表示独一无二的值，最大的用法是用来定义对象的唯一属性名。

```js
let sy = Symbol("KK");
console.log(sy);   // Symbol(KK)
typeof(sy);        // "symbol"
 
// 相同参数 Symbol() 返回的值不相等
let sy1 = Symbol("kk"); 
sy === sy1;       // false
```
**用法**
```js
let sy = Symbol("key1");
 
// 写法1
let syObject = {};
syObject[sy] = "kk";
console.log(syObject,syObject[sy]);    // {Symbol(key1): "kk"} kk
 
// 写法2
let syObject = {
  [sy]: "kk"
};
console.log(syObject);    // {Symbol(key1): "kk"}
 
// 写法3
let syObject = {};
Object.defineProperty(syObject, sy, {value: "kk"});
console.log(syObject);   // {Symbol(key1): "kk"}
```
**注意点**

Symbol 值作为属性名时，该属性是公有属性不是私有属性，可以在类的外部访问。但是不会出现在 for...in 、 for...of 的循环中，也不会被 Object.keys() 、 Object.getOwnPropertyNames() 返回。如果要读取到一个对象的 Symbol 属性，可以通过 Object.getOwnPropertySymbols() 和 Reflect.ownKeys() 取到。
```js
 let syObject = {
    name:'ll'
};
 syObject[sy] = "kk";
 console.log(syObject); // {name: 'll', Symbol(key1): 'kk'}
  
 for (let i in syObject) {
   console.log(i);
 }    // 无输出
  
 Object.keys(syObject);                     // ['name']
 Object.getOwnPropertySymbols(syObject);    // [Symbol(key1)]
// 映射
 Reflect.ownKeys(syObject);                 // ['name',Symbol(key1)]
```

## 8.0 Set 对象 和map对象

>Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。<br>
Set 中的特殊值<br>

Set 对象存储的值总是唯一的，所以需要判断两个值是否恒等。有几个特殊值需要特殊对待：<br>
* +0 与 -0 在存储判断唯一性的时候是恒等的，所以不重复；
*undefined 与 undefined 是恒等的，所以不重复；
* NaN 与 NaN 是不恒等的，但是在 Set 中只能存一个，不重复。

```js
 let mySet = new Set();
  
 mySet.add(1); // Set(1) {1}
 mySet.add(5); // Set(2) {1, 5}
 mySet.add(5); // Set(2) {1, 5} 这里体现了值的唯一性
 mySet.add("some text"); 
 // Set(3) {1, 5, "some text"} 这里体现了类型的多样性
 var o = {a: 1, b: 2}; 
 mySet.add(o);
 mySet.add({a: 1, b: 2}); 
 // Set(5) {1, 5, "some text", {…}, {…}} 
 // 这里体现了对象之间引用不同不恒等，即使值相同，Set 也能存储
```
**类型转换**
```js
 // Array 转 Set
 var mySet = new Set(["value1", "value2", "value3"]);
 // 用...操作符，将 Set 转 Array
 var myArray = [...mySet];
 String
 // String 转 Set
 var mySet = new Set('hello');  // Set(4) {"h", "e", "l", "o"}
 // 注：Set 中 toString 方法是不能将 Set 转换成 String
```
**Set 对象作用**
```js
 //1.0 数组去重
var mySet = new Set([1, 2, 3, 4, 4]);
[...mySet]; // [1, 2, 3, 4]

//2.0 并集
var a = new Set([1, 2, 3]);
var b = new Set([4, 3, 2]);
var union = new Set([...a, ...b]); // {1, 2, 3, 4}

//3.0 交集

var a = new Set([1, 2, 3]);
var b = new Set([4, 3, 2]);
var intersect = new Set([...a].filter(x => b.has(x))); // {2, 3}

//4.0 差集
var a = new Set([1, 2, 3]);
var b = new Set([4, 3, 2]);
var difference = new Set([...a].filter(x => !b.has(x))); // {1}
```
Set常用属性及增删改查方法:

* size属性: 返回集合的元素个数。（类似数组的长度length）
* add(value)方法: 向集合中添加一个元素value。注意：如果向集合中添加一个已经存在的元素，不报错但是集合不会改变。
* delete(value)方法: 从集合中删除元素value。
* has(value)方法: 判断value是否在集合中，返回true或false.
* clear()方法: 清空集合。

```js
 let mySet = new Set([1, 2, 3, 2, 1]);
 console.log(mySet.size);   //3
 console.log(...mySet);      //1,2,3
 mySet.add(4);
 console.log(mySet.size);   //4
 mySet.delete(3);
 console.log(mySet.size);  //3
 console.log(mySet.has(2));  //true
 mySet.clear();
 console.log(mySet.size);  //0
```
**稍微复杂点的去重**
```js
let arr = ['xiao',1,2,2,{name:'qq'},{age:12},{name:'qq'},[1,2],[3,4],[1,2]]

function uni(arr){
    let res = new Set();
    return arr.filter((item)=>{
        let data = JSON.stringify(item)
        if(res.has(data)){
            return false
        }else{
            res.add(data)
            return true
        }
    })
}
let oArr = uni(arr);
console.log(aArr) //['xiao',1,2,{name:'qq'},{age:12},[1,2],[3,4]]
```


**Map(字典)：**
集合与字典的区别:

* 同: 集合和字典都是存储不重复的值.
* 异: 集合中是以[value,value]存储的，字典中是以[key,value]存储的。

Map 对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。
**Maps 和 Objects 的区别**

* 一个 Object 的键只能是字符串或者 Symbols，但一个 Map 的键可以是任意值。
* Map 中的键值是有序的（FIFO 原则），而添加到对象中的键则不是。
* Map 的键值对个数可以从 size 属性获取，而 Object 的键值对个数只能手动计算。
* Object 都有自己的原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突。

**Map 中的 key**
```js
//1. key 是字符串
var myMap = new Map();
var keyString = "a string"; 
 
myMap.set(keyString, "和键'a string'关联的值");
 
myMap.get(keyString);    // "和键'a string'关联的值"
myMap.get("a string");   // "和键'a string'关联的值"
                         // 因为 keyString === 'a string'

//2.0 key 是对象
var myMap = new Map();
var keyObj = {};
 
myMap.set(keyObj, "和键 keyObj 关联的值");
myMap.get(keyObj); // "和键 keyObj 关联的值"
myMap.get({}); // undefined, 因为 keyObj !== {}

//3.0 key 是函数
var myMap = new Map();
var keyFunc = function () {}; // 函数
 
myMap.set(keyFunc, "和键 keyFunc 关联的值");
 
myMap.get(keyFunc); // "和键 keyFunc 关联的值"
myMap.get(function() {}) // undefined, 因为 keyFunc !== function () {}

//4.0 key 是 NaN
var myMap = new Map();
myMap.set(NaN, "not a number");
 
myMap.get(NaN); // "not a number"
 
var otherNaN = Number("foo");
myMap.get(otherNaN); // "not a number"
//虽然 NaN 和任何值甚至和自己都不相等(NaN !== NaN 返回true)，NaN作为Map的键来说是没有区别的。
```
**Map 的迭代**
```js
 //1.0 for...of
var myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");
 
// 将会显示两个 log。 一个是 "0 = zero" 另一个是 "1 = one"
for (var [key, value] of myMap) {
  console.log(key + " = " + value);
}
for (var [key, value] of myMap.entries()) {
  console.log(key + " = " + value);
}
/* 这个 entries 方法返回一个新的 Iterator 对象，它按插入顺序包含了 Map 对象中每个元素的 [key, value] 数组。 */
 
// 将会显示两个log。 一个是 "0" 另一个是 "1"
for (var key of myMap.keys()) {
  console.log(key);
}
/* 这个 keys 方法返回一个新的 Iterator 对象， 它按插入顺序包含了 Map 对象中每个元素的键。 */
 
// 将会显示两个log。 一个是 "zero" 另一个是 "one"
for (var value of myMap.values()) {
  console.log(value);
}
/* 这个 values 方法返回一个新的 Iterator 对象，它按插入顺序包含了 Map 对象中每个元素的值。 */

//2.0 forEach()
var myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");
 
// 将会显示两个 logs。 一个是 "0 = zero" 另一个是 "1 = one"
myMap.forEach(function(value, key) {
  console.log(key + " = " + value);
}, myMap)
```
**Map 对象的操作**
```js
//1.0 Map 与 Array的转换
var kvArray = [["key1", "value1"], ["key2", "value2"]];
 
// Map 构造函数可以将一个 二维 键值对数组转换成一个 Map 对象
var myMap = new Map(kvArray);
 
// 使用 Array.from 函数可以将一个 Map 对象转换成一个二维键值对数组
var outArray = Array.from(myMap);

//2.0 Map 的克隆
var myMap1 = new Map([["key1", "value1"], ["key2", "value2"]]);
var myMap2 = new Map(myMap1);
 
console.log(original === clone); 
// 打印 false。 Map 对象构造函数生成实例，迭代出新的对象。

//3.0 Map 的合并
var first = new Map([[1, 'one'], [2, 'two'], [3, 'three'],]);
var second = new Map([[1, 'uno'], [2, 'dos']]);
 
// 合并两个 Map 对象时，如果有重复的键值，则后面的会覆盖前面的，对应值即 uno，dos， three
var merged = new Map([...first, ...second]);

```
Map常用属性及增删改查方法:
* size: 属性，取出字典的长度
* set(key, value)：方法，向字典中添加新元素
* get(key)：方法，通过键查找特定的数值并返回
* has(key)：方法，判断字典中是否存在键key
* delete(key)：方法，通过键 key 从字典中移除对应的数据
* clear()：方法，将这个字典中的所有元素删除
```js
 let myMap = new Map();
 myMap.set("name","Jack");    
 myMap.set("age","18");     //添加元素
 console.log(myMap.size);  //2
 console.log(myMap.get("name"));//Jack
 console.log(myMap.has("name")); //true
 myMap.delete("age"); //删除
 console.log(myMap.size); //1
 console.log(myMap.has("age")); //false
 myMap.clear();    //清空元素
 console.log(myMap.size); //0
```
Map常用遍历方法:
* Keys()：将字典中包含的所有键名以迭代器形式返回
* values()：将字典中包含的所有数值以迭代器形式返回
* entries()：返回所有成员的迭代器
* forEach()：遍历字典的所有成员
```js
 let myMap = new Map();
 myMap.set("name","Jack");
 myMap.set("age","18");
 myMap.set("sex","man");
 
 myMap.forEach(
   (value,key,map)=>{
     console.log(value);    //Jack,18,man
     console.log(key);  //name,age,sex
     console.log(map); //自身，自身，自身
   }
 )
```
## 9.0 ES6 Reflect 与 Proxy
Proxy 与 Reflect 是 ES6 为了操作对象引入的 API 。
<br>
Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。
<br>
Proxy 可以对目标对象的读取、函数调用等操作进行拦截，然后进行操作处理。它不直接操作对象，而是像代理模式，通过对象的代理对象进行操作，在进行这些操作时，可以添加一些需要的额外操作。
<br>
Reflect 可以用于获取目标对象的行为，它与 Object 类似，但是更易读，为操作对象提供了一种更优雅的方式。它的方法与 Proxy 是对应的。<br>

**基本用法**
一个 Proxy 对象由两个部分组成： target 、 handler 。在通过 Proxy 构造函数生成实例对象时，需要提供这两个参数。 target 即目标对象， handler 是一个对象，声明了代理 target 的指定行为。
```
 let target = {
     name: 'Tom',
     age: 24
 }
 let handler = {
     get: function(target, key) {
         console.log('getting '+key);
         return target[key]; // 不是target.key
     },
     set: function(target, key, value) {
         console.log('setting '+key);
         target[key] = value;
     }
 }
 let proxy = new Proxy(target, handler)
 proxy.name     // 实际执行 handler.get
 proxy.age = 25 // 实际执行 handler.set
 // getting name
 // setting age
 // 25
  
 // target 可以为空对象
 let targetEpt = {}
 let proxyEpt = new Proxy(targetEpt, handler)
 // 调用 get 方法，此时目标对象为空，没有 name 属性
 proxyEpt.name // getting name
 // 调用 set 方法，向目标对象中添加了 name 属性
 proxyEpt.name = 'Tom'
 // setting name
 // "Tom"
 // 再次调用 get ，此时已经存在 name 属性
 proxyEpt.name
 // getting name
 // "Tom"
  
 // 通过构造函数新建实例时其实是对目标对象进行了浅拷贝，因此目标对象与代理对象会互相
 // 影响
 targetEpt)
 // {name: "Tom"}
  
 // handler 对象也可以为空，相当于不设置拦截操作，直接访问目标对象
 let targetEmpty = {}
 let proxyEmpty = new Proxy(targetEmpty,{})
 proxyEmpty.name = "Tom"
 targetEmpty) // {name: "Tom"}
```
**实例方法**
>get(target, propKey, receiver)

用于 target 对象上 propKey 的读取操作。
```
 let exam ={
     name: "Tom",
     age: 24
 }
 let proxy = new Proxy(exam, {
   get(target, propKey, receiver) {
     console.log('Getting ' + propKey);
     return target[propKey];
   }
 })
 proxy.name 
 // Getting name
 // "Tom"
```
get() 方法可以继承。
```
 let proxy = new Proxy({}, {
   get(target, propKey, receiver) {
       // 实现私有属性读取保护
       if(propKey[0] === '_'){
           throw new Erro(`Invalid attempt to get private     "${propKey}"`);
       }
       console.log('Getting ' + propKey);
       return target[propKey];
   }
 });
  
 let obj = Object.create(proxy);
 obj.name
 // Getting name
```
>set(target, propKey, value, receiver)

用于拦截 target 对象上的 propKey 的赋值操作。如果目标对象自身的某个属性，不可写且不可配置，那么set方法将不起作用。
```
 let validator = {
     set: function(obj, prop, value) {
         if (prop === 'age') {
             if (!Number.isInteger(value)) {
                 throw new TypeError('The age is not an integer');
             }
             if (value > 200) {
                 throw new RangeError('The age seems invalid');
             }
         }
         // 对于满足条件的 age 属性以及其他属性，直接保存
         obj[prop] = value;
     }
 };
 let proxy= new Proxy({}, validator)
 proxy.age = 100;
 proxy.age           // 100
 proxy.age = 'oppps' // 报错
 proxy.age = 300     // 报错
```
第四个参数 receiver 表示原始操作行为所在对象，一般是 Proxy 实例本身。
```
 const handler = {
     set: function(obj, prop, value, receiver) {
         obj[prop] = receiver;
     }
 };
 const proxy = new Proxy({}, handler);
 proxy.name= 'Tom';
 proxy.name=== proxy // true
  
 const exam = {}
 Object.setPrototypeOf(exam, proxy)
 exam.name = "Tom"
 exam.name === exam // true
```
注意，严格模式下，set代理如果没有返回true，就会报错。

**apply(target, ctx, args)**<br>
用于拦截函数的调用、call 和 reply 操作。target 表示目标对象，ctx 表示目标对象上下文，args 表示目标对象的参数数组。
```
 function sub(a, b){
     return a - b;
 }
 let handler = {
     apply: function(target, ctx, args){
         console.log('handle apply');
         return Reflect.apply(...arguments);
     }
 }
 let proxy = new Proxy(sub, handler)
 proxy(2, 1) 
 // handle apply
 // 1
```
>has(target, propKey)

用于拦截 HasProperty 操作，即在判断 target 对象是否存在 propKey 属性时，会被这个方法拦截。此方法不判断一个属性是对象自身的属性，还是继承的属性。
```
 let  handler = {
     has: function(target, propKey){
         console.log("handle has");
         return propKey in target;
     }
 }
 let exam = {name: "Tom"}
 let proxy = new Proxy(exam, handler)
 'name' in proxy
 // handle has
 // true
注意：此方法不拦截 for ... in 循环。
```
>construct(target, args)

用于拦截 new 命令。返回值必须为对象。
```
 let handler = {
     construct: function (target, args, newTarget) {
         console.log('handle construct')
         return Reflect.construct(target, args, newTarget)  
     }
 }
 class Exam { 
     constructor (name) {  
         this.name = name 
     }
 }
 let ExamProxy = new Proxy(Exam, handler)
 let proxyObj = new ExamProxy('Tom')
 console.log(proxyObj)
 // handle construct
 // exam {name: "Tom"}
```
>deleteProperty(target, propKey)

用于拦截 delete 操作，如果这个方法抛出错误或者返回 false ，propKey 属性就无法被 delete 命令删除。
>defineProperty(target, propKey, propDesc)

用于拦截 Object.definePro若目标对象不可扩展，增加目标对象上不存在的属性会报错；若属性不可写或不可配置，则不能改变这些属性。

```
 let handler = {
     defineProperty: function(target, propKey, propDesc){
         console.log("handle defineProperty");
         return true;
     }
 }plet target = {}
 let proxy = new Proxy(target, handler)
 proxy.name = "Tom"
 // handle defineProperty
 target
 // {name: "Tom"}
  
 // defineProperty 返回值为false，添加属性操作无效
 let handler1 = {
     defineProperty: function(target, propKey, propDesc){
         console.log("handle defineProperty");
         return false;
     }
 }
 let target1 = {}
 let proxy1 = new Proxy(target1, handler1)
 proxy1.name = "Jerry"
 target1
 // {}
```
erty 操作
>getOwnPropertyDescriptor(target, propKey)

用于拦截 Object.getOwnPropertyD() 返回值为属性描述对象或者 undefined 。
```
 let handler = {
     getOwnPropertyDescriptor: function(target, propKey){
         return Object.getOwnPropertyDescriptor(target, propKey);
     }
 }
 let target = {name: "Tom"}
 let proxy = new Proxy(target, handler)
 Object.getOwnPropertyDescriptor(proxy, 'name')
 // {value: "Tom", writable: true, enumerable: true, configurable: 
 // true}
```
ptor 属性
>getPrototypeOf(target)

主要用于拦截获取对象原型的操作。包括以下操作：
```
- Object.prototype._proto_
- Object.prototype.isPrototypeOf()
- Object.getPrototypeOf()
- Reflect.getPrototypeOf()
- instanceof

let exam = {}
let proxy = new Proxy({},{
    getPrototypeOf: function(target){
        return exam;
    }
})
Object.getPrototypeOf(proxy) // {} 
```
注意，返回值必须是对象或者 null ，否则报错。另外，如果目标对象不可扩展（non-extensible），getPrototypeOf 方法必须返回目标对象的原型对象。
```
let proxy = new Proxy({},{
    getPrototypeOf: function(target){
        return true;
    }
})
Object.getPrototypeOf(proxy)
// TypeError: 'getPrototypeOf' on proxy: trap returned neither object // nor null 
```
>isExtensible(target)

用于拦截 Object.isExtensible 操作。
<br>
该方法只能返回布尔值，否则返回值会被自动转为布尔值
```
let proxy = new Proxy({},{
    isExtensible:function(target){
        return true;
    }
})
Object.isExtensible(proxy) // true

注意：它的返回值必须与目标对象的isExtensible属性保持一致，否则会抛出错误。

let proxy = new Proxy({},{
    isExtensible:function(target){
        return false;
    }
})
Object.isExtensible(proxy)
// TypeError: 'isExtensible' on proxy: trap result does not reflect 
// extensibility of proxy target (which is 'true') 
```
>ownKeys(target)

用于拦截对象自身属性的读取操作。主要包括以下操作：
```
 - Object.getOwnPropertyNames()
 - Object.getOwnPropertySymbols()
 - Object.keys()
 - or...in

方法返回的数组成员，只能是字符串或 Symbol 值，否则会报错。

若目标对象中含有不可配置的属性，则必须将这些属性在结果中返回，否则就会报错。

若目标对象不可扩展，则必须全部返回且只能返回目标对象包含的所有属性，不能包含不存在的属性，否则也会报错。

let proxy = new Proxy( {
  name: "Tom",
  age: 24
}, {
    ownKeys(target) {
        return ['name'];
    }
});
Object.keys(proxy)
// [ 'name' ]f返回结果中，三类属性会被过滤：
//          - 目标对象上没有的属性
//          - 属性名为 Symbol 值的属性
//          - 不可遍历的属性
 
let target = {
  name: "Tom",
  [Symbol.for('age')]: 24,
};
// 添加不可遍历属性 'gender'
Object.defineProperty(target, 'gender', {
  enumerable: false,
  configurable: true,
  writable: true,
  value: 'male'
});
let handler = {
    ownKeys(target) {
        return ['name', 'parent', Symbol.for('age'), 'gender'];
    }
};
let proxy = new Proxy(target, handler);
Object.keys(proxy)
// ['name']
```
>preventExtensions(target)

拦截 Object.preventExtensions 操作。
<br>
该方法必须返回一个布尔值，否则会自动转为布尔值。
```
 // 只有目标对象不可扩展时（即 Object.isExtensible(proxy) 为 false ），
 // proxy.preventExtensions 才能返回 true ，否则会报错
 var proxy = new Proxy({}, {
   preventExtensions: function(target) {
     return true;
   }
 });
 // 由于 proxy.preventExtensions 返回 true，此处也会返回 true，因此会报错
 Object.preventExtensions(proxy) 被// TypeError: 'preventExtensions' on proxy: trap returned truish but // the proxy target is extensible
  
 // 解决方案
  var proxy = new Proxy({}, {
   preventExtensions: function(target) {
     // 返回前先调用 Object.preventExtensions
     Object.preventExtensions(target);
     return true;
   }
 });
 Object.preventExtensions(proxy)
 // Proxy {}
```
>setPrototypeOf

主要用来拦截 Object.setPrototypeOf 方法。
<br>
返回值必须为布尔值，否则会被自动转为布尔值。
<br>
若目标对象不可扩展，setPrototypeOf 方法不得改变目标对象的原型。
```
 et proto = {}
 let proxy = new Proxy(function () {}, {
     setPrototypeOf: function(target, proto) {
         console.log("setPrototypeOf");
         return true;
     }
 }
 );
 Object.setPrototypeOf(proxy, proto);
 // setPrototypeOf
```
>Proxy.revocable()

用于返回一个可取消的 Proxy 实例。
```
 let {proxy, revoke} = Proxy.revocable({}, {});
 proxy.name = "Tom";
 revoke();
 proxy.name 
 // TypeError: Cannot perform 'get' on a proxy that has been revoked
```
**Reflect映射**

与obj的区别
```js
//1.0 需要用try 和 catch 捕获
try{
    Object.defineProperties(obj,'data',{})
}catch (e){
    throw e
}
if(Reflect.defineProperties(obj,'data',{})){
    // success
}else{
    // fail
}
// 2.0 命令式变成函数行为
let obj = {name:'123'}
console.log('name' in obj) // true
console.log(Reflect.has(obj,'name')) //true

delete obj.name
Reflect.deleteProperty(obj,'name')

Reflect.set(obj,'age',88)
Reflect.get(obj,'age')
```


## 10.0 ES6 迭代器 iterator

iterator 是 ES6 引入的一种新的遍历机制，迭代器有两个核心概念：
* 迭代器是一个统一的接口，它的作用是使各种数据结构可被便捷的访问，它是通过一个键为Symbol.iterator 的方法来实现。<br>
* 迭代器是用于遍历数据结构元素的指针（如数据库中的游标）。<br>

**迭代过程**<br>
迭代的过程如下：
* 通过 Symbol.iterator 创建一个迭代器，指向当前数据结构的起始位置
* 随后通过 next 方法进行向下迭代指向下一个位置， next 方法会返回当前位置的对象，对象包含了 value 和 done 两个属性， value 是当前属性的值， done 用于判断是否遍历结束
* 当 done 为 true 时则遍历结束

```
const items = ["zero", "one", "two"];
const it = items[Symbol.iterator]();
 
it.next();
>{value: "zero", done: false}
it.next();
>{value: "one", done: false}
it.next();
>{value: "two", done: false}
it.next();
>{value: undefined, done: true} 
```
可迭代的数据结构
1. Array
2. String
3. Map
4. Set
5. arguments 对象
6. nodeList 对象

**for...of 与for in区别**
``` js
for (let item of ["zero", "one", "two"]) {
  console.log(item); // zero // one // two 
}
for (let item in ["zero", "one", "two"]) {
  console.log(item); // 0 // 1 // 2
}
for in 不能遍历 map set结构
for of 不能遍历对象
for…of循环的是的是可迭代对象的value（值），in循环的是可迭代对象的key（属性）
```
**我非得遍历对象**

1.0 线性化
```js
let obj = {
    0:'xiaohua',
    1:'小白',
    2:'小黑',
    length:3,
    [Symbol.iterator]:Array.prototype[Symbol.iterator]
}
for(let i of obj){
    console.log(i) //xiaohua // 小白 //小黑
}
```
2.0 还是需要埋迭代器
```js
    let obj = {
    code:200,
    name:'obj',
    list:['everyOne','erveyTime','toduy'],
    // 迭代器
    [Symbol.iterator](){
        let index = 0;
        return {
            next:()=>{
                return {
                    value:this.list[index++],
                    done:index>=(this.list.length +1 ) ? true :false
                }
            }
        }
    }
}
for(let i of obj){
    console.log(i)
}
let iter = obj[Symbol.iterator]()
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
```

