## js-2面试题+基础知识点

## 1.0 执行上下文栈
>当执行一个函数的时候，就会创建一个执行上下文，并且压入执行上下文栈，当函数执行完毕的时候，就会将函数的执行上下文从栈中弹出。

* 变量对象
* 作用域链
* this


## 3.0 js 数据类型
6种数据类型
``` 
1.0 string 
2.0 number 
3.0 boolean
4.0 undefined
5.0 null
6.0 object
7.0 Symble
什么是symbol？ Symbol是ES6中新增的一种数据类型, 被划分到了基本数据类型中
Symbol的作用：用来表示一个独一无二的值
```
基本数据类型
``` 
string number null boolean undefined Symble
```
引用数据类型
``` 
object array function

二者区别
1.0 基本数据类型就是简单的操作值
2.0 引用数据类型就是把引用地址赋值给变量
```

## 4.0 栈内存和堆内存的定义
4.1 函数执行的时候首先会开辟一个新的内存空间叫栈内存（环境或作用域）

4.2 数据类型在赋值的时候会开辟一个新的内存空间叫堆内存（存放代码块）

## 5.0 Object.create()
Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
<br>
语法：Object.create(proto[, propertiesObject])
``` 
demo1
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"

console.log(me) //
   name: "Matthew"
   isHuman: true
    __proto__:
        isHuman: false
        printIntroduction: ƒ ()
        __proto__: Object

demo2
var prototype = {
    name: 'Jack',
    getName: function() {
        return this.name
    }
}

var obj = Object.create(prototype, {
    job: {
        value: 'IT'
    }
})

console.log(obj.getName())  // Jack
console.log(obj.job)  // IT
console.log(obj.__proto__ === prototype)  //true
console.log(obj) 
    job: "IT"
    __proto__:
        name: "Jack"
        getName: ƒ ()
        __proto__: Object

```

## 8.0 js获取程序执行的时间
``` 
方法一
    console.time('global')
    //要执行的代码放中间
    console.timeEnd('global')
    global是标志这两个time是一对的。
方法二：
    // 起始时间
    let start = Date.now(); 
    // 调用函数
    doSomething(); 
    // 结束时间
    let stop = Date.now(), 
    result = stop - start;
``` 
## 9.0 把一个字符串转换为驼峰命名
```
function toString(foo){
        var arr = foo.split('-');
        for(var i=1;i < arr.length;i++){
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1,arr[i].length-1)

        }
        return arr.join('')
    }
    toString('get-element-by-id'); 
```
## 10.0 一个有意思的面试题
```
function Foo(){
        getName = function (){console.log(1)}
        return this;
    }
    Foo.getName = function(){console.log(2)}
    Foo.prototype.getName = function(){console.log(3)}
    var getName = function(){console.log(4)}
    function getName(){console.log(5)}

    Foo.getName(); //2
    getName(); //4 
    Foo().getName(); //1
    getName(); //1
    new Foo.getName(); // new (Foo.getName)() // new (function(){console.log(2)}) //2
    new Foo().getName(); // (new Foo()).getName() 实例对象先从自身找 自身原型链 Object 外层 //3
    new new Foo.getName(); // new ((new Foo()).getName)() // new (foo.getName)() // 3

其实上面的 代码可以这样写 
1.0变量的提升和函数的提上
2.0 当函数名和变量名 重名的时候保留函数

function Foo(){
        getName = function (){console.log(1)}
        return this;
    }
    var getName;
    function getName(){console.log(5)}
    Foo.getName = function(){console.log(2)}
    Foo.prototype.getName = function(){console.log(3)}
    getName = function(){console.log(4)}
```

## 11.0 冒泡排序
```
  var arr = [5,3,2,4,1];
   for(var i =0 ;i<arr.length-1;i++){
       for(var j=0;j<arr.length-1-i;j++){
           if(arr[j]>arr[j+1]){
               var temp =arr[j];
               arr[j] = arr[j+1];
               arr[j+1] = temp;
           }
       }
   }
console.log(arr) //[5,4,3,2,1] 
```

## 12.0 反转数组
```
 var arr = [1,2,3,4,5,6,7]
  for(var i=0;i<arr.length/2;i++){
      var temp =arr[i];
      arr[i] = arr[arr.length-1-i];
      arr[arr.length-1-i] = temp;
  }
  console.log(arr) // [7, 6, 5, 4, 3, 2, 1]
```
## 13.0 数组去重
1.0 Set 去重
```
[...new Set(arr)] 
var a = NaN;
a == NaN // false
var b = {} // b == {} // false
```
2.0 Set 去重
```
 function unique (arr) {
   return Array.from(new Set(arr))
 }
 var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
 console.log(unique(arr))
  //[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}]
这种方法 无法去掉“{}”空对象
```
3.0 双层循环，然后splice去重
```
 function unique(arr){
     for(var i=0;i<arr.length;i++){
         for(var j=i+1;j<arr.length;j++){
             if(arr[i]==arr[j]){
                 arr.splice(j,1)
                j--
             }
         }
     }
     return arr;
 }
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
 unique(arr);//NaN和{}没有去重，两个null直接消失了 
```
4.0 利用indexOf去重
```
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        if (array .indexOf(arr[i]) === -1) {
            array .push(arr[i])
        }
    }
    return array;
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr))
 //NaN、{}没有去重 
```
5.0 利用includes
```
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    var array =[];
    for(var i = 0; i < arr.length; i++) {
            if( !array.includes( arr[i]) ) {//includes 检测数组是否有某个值
                    array.push(arr[i]);
              }
    }
    return array
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
    console.log(unique(arr))
 //{}没有去重 
```
6.0 利用hasOwnProperty
```
function unique(arr) {
    var obj = {};
    return arr.filter(function(item, index, arr){
        return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
    })
}
    var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
        console.log(unique(arr))
//[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}]   //所有的都去重了 
```
7.0 利用Map数据结构去重
```
function arrayNonRepeatfy(arr) {
  let map = new Map();
  let array = new Array();  // 数组用于返回结果
  for (let i = 0; i < arr.length; i++) {
    if(map .has(arr[i])) {  // 如果有该key值
      map .set(arr[i], true); 
    } else { 
      map .set(arr[i], false);   // 如果没有该key值
      array .push(arr[i]);
    }
  } 
  return array ;
}
 var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
    console.log(unique(arr)) 
```
创建一个空Map数据结构，遍历需要去重的数组，把数组的每一个元素作为key存到Map中。由于Map中不会出现相同的key值，所以最终得到的就是去重后的结果。


## 15.0 闭包
>MDN概念：闭包是函数和声明该函数的词法环境的组合<br>
>是指有权访问另一个函数作用域中的变量的函数

**形成条件**<br>
 1. 函数嵌套
 2. 内部函数引用外部函数的局部变量

**优点**<br>
 * 延长外部函数局部变量的生命周期
 
**缺点** <br>
* 容易造成内存泄漏
## 16.0 js节点的增删该查
```
<div id="box1">1</div>
    <div id="box2">2</div>
    <div id="box3">3</div>
</div>

        var oBox = document.getElementById('box');
        var oBox1 = document.getElementById('box1');
        var oBox2 = document.getElementById('box2');
        var oBox3 = document.getElementById('box3');
        var op = document.createElement('p');
        var opText = document.createTextNode('666');
        op.appendChild(opText);// 推进去文本节点
        oBox.appendChild(op); // 追加节点
        oBox.insertBefore(op,oBox1); //
        oBox.removeChild(oBox2);
        oBox.replaceChild(op,oBox3); // 替换节点

```
查找节点
```
getElementsByTagName() // 通过标签查找
getElementsByName() // 通过元素的name属性查找
getElementsById() // 通过元素id 查找
querySelector与querySelectorAll() // 分别表示满足条件的第一个元素或者所有元素。括号内的写法与CSS选择器的写法一样。
```

## 17.0 JavaScript如何获取被点击的li元素是所有li元素中的第几个？
```
 var d = document.getElementsByTagName('li'); // 获取所有li元素
     for(var i=0; i<d.length; i++){
         d[i].index = i; // 为第i个li元素添加一个index属性，赋值为i
         d[i].addEventListener('click',function() {
             console.log(this.index); 
             // 为第i个li元素添加一个click事件，当元素被点击时，则会在控制台输出索引
         })
     }
```
## 18.0 图片懒加载和预加载
**图片预加载**<br>
>接下来极有可能用到的图片提前加载 下来

```
// 存放图片路径的数组
    var imgSrcArr = [
        'imgsrc1.png',
        'imgsrc2.png',
        'imgsrc3.png',
        'imgsrc4.png'
    ];

    var imgWrap = [];

    function preloadImg(arr) {
        for(var i =0; i< arr.length ;i++) {
        	// 创建n个 image 对象 
            imgWrap[i] = new Image(); 
            imgWrap[i].src = arr[i];
        }
    }
    # 调用方法
    preloadImg(imgSrcArr);

    # 或者延迟的文档加载完毕在加载图片(调用此方法)
    $(function () {
        preloadImg(imgSrcArr);
    })
```
**图片懒加载**<br>
>当打开一个有很多图片的页面时，先只加载页面上看到的图片，等滚动到页面下面时，再加载所需的图片。这就是图片懒加载。
>减少或延迟请求数，缓解浏览器的压力，增强用户体验。

[参考](https://www.jianshu.com/p/6d3e38728c10)

## 19.0 作用域问题
>JavaScript语言的作用域仅存在于函数范围中。这是必须要牢记的一点，还有一点重要的就是作用域的提升规则。

**变量被提升了**
```
var x = 10;
function x(){};
console.log(x); // 10
实际上被解释为:
var x;
function x(){};
x = 10;
console.log(x); // 10 
```
**函数被提升**
```
function test() {
    foo(); // TypeError "foo is not a function"
    bar(); // "this will run!"
    var foo = function () { // function expression assigned to local variable 'foo'
        alert("this won't run!");
    }
    function bar() { // function declaration, given the name 'bar'
        alert("this will run!");
    }
}
test();
实际上等价于:
function test() {
    var foo;
    var bar;
    bar = function () { // function declaration, given the name 'bar'
        alert("this will run!");
    }

    foo(); // TypeError "foo is not a function"
    bar(); // "this will run!"

    foo = function () { // function expression assigned to local variable 'foo'
        alert("this won't run!");
    }
}
test();
主要注意的地方：带有命名的函数变量式声明，是不会提升到作用域范围内的，比如:
var baz = function spam() {};
baz(); // vaild
spam(); // ReferenceError "spam is not defined" 

```
## 20.0 ++a和a++
```
var a = 1
var b = ++a // 2 先加再赋值
var a = 1
var c = a++ //1 先赋值再加

var a = 3;
var goos = function(){
return a++;
　　} 
console.log(goos()); // 3

var a = 3;
var goos = function(){
return ++a;
　　} 
console.log(goos()); //4 
```


## 22.0 null 和 undefined 区别
* undefined 一般都来自于某个表达式最原始的状态值，不是人为操作的结果。当然，你也可以手动给一个变量赋值 undefined，但这样做没有意义，因为一个变量不赋值就是 undefined 

* null 的字面意思是 空值 ，这个值的语义是，希望表示 一个对象被人为的重置为空对象，而非一个变量最原始的状态 。 在内存里的表示就是，栈中的变量没有指向堆中的内存对象，即：

![avatar](/images/js/js-null.png)<br>
当一个对象被赋值了null 以后，原来的对象在内存中就处于游离状态，GC 会择机回收该对象并释放内存。因此，如果需要释放某个对象，就将变量设置为null，即表示该对象已经被清空，目前无效状态。试想一下，如果此处把 null 换成 undefined 会不会感到别扭? 显然语义不通，其操作不能正确的表达其想要的行为。
<br>
[参考链接](https://cloud.tencent.com/developer/article/1407939)
## 23.0 innerHTML 和 innerText 的区别
* innerHTML:也就是从对象的起始位置到终止位置的全部内容,包括Html标签。

* innerText:从起始位置到终止位置的内容, 但它去除Html标签

## 24.0 js清空数组
1. arr = []
2. arr.length = 0
3. arr.splice(0, arr.length)
4. while(arr.length){ arr.pop() }

## 25.0 为什么要将JS源文件的全部内容包装在一个函数中
这是一种越来越普遍的做法，被许多流行的JS库所采用。 这种技术围绕文件的整个内容创建一个闭包，最重要的是，它可以创建一个私有命名空间，从而有助于避免不同JS模块和库之间潜在的名称冲突。

<br>
该技术的另一个特性是允许为全局变量提供一个简单的别名，这在jQuery插件中经常使用。


## 26.0 将类似数组转为数组
```
 var arrayLike = {0: 'name', 1: 'age', 2: 'sex', length: 3 }
 1.0 Array.prototype.slice.call(arrayLike, 0); // ["name", "age", "sex"] 
 // slice可以做到类数组转数组
 
 2.0 Array.prototype.map.call(arrayLike, function(item){
     return item.toUpperCase();
 }); 
 // ["NAME", "AGE", "SEX"]

// 3. ES6 Array.from
Array.from(arrayLike); // ["name", "age", "sex"] 
// 4. apply
Array.prototype.concat.apply([], arrayLike)
```
特别的：
```
 function func(...arguments) {
     console.log(arguments); // [1, 2, 3]
 }
 
 func(1, 2, 3);
```

## 27.0 js 格式化数字，数字每隔三位加个逗号
下面这个方法这只适用于 正整数
``` 
function formattedNumber(num) {
    var num = (num || 0).toString();
    var result = '';
    while (num.length > 3) {
        result = ',' + num.slice(-3) + result;
        num = num.slice(0, num.length - 3);
    }
    if (num) { result = num + result; }
    return result;
}
```

## 28.0 栈和堆
栈(stack)：栈会自动分配内存空间，会自动释放，存放基本类型，简单的数据段，占据固定大小的空间。（基本类型：String，Number，Boolean，Null，Undefined）<br>
堆(heap)：动态分配的内存，大小不定也不会自动释放，存放引用类型，指那些可能由多个值构成的对象，保存在堆内存中，包含引用类型的变量，实际上保存的不是变量本身，而是指向该对象的指针。（引用类型：Function，Array，Object）

**栈和堆的溢出**

栈：可以递归调用方法，这样随着栈深度的增加，JVM维持着一条长长的方法调用轨迹，知道内存不够分配，产生栈溢出。
<br>
堆：循环创建对象，通俗点就是不断的new 一个对象。

**区别**

栈：所有在方法中定义的变量都是放在栈内存中，随着方法的执行结束，这个方法的内存栈也自然销毁。
<br>
优点：存取速度比堆快，仅次于直接位于CPU中的寄存器，数据可以共享；
<br>
缺点：存在栈中的数据大小与生存期必须是确定的，缺乏灵活性。
<br>
堆：堆内存中的对象不会随方法的结束而销毁，即使方法结束后，这个对象还可能被另一个引用变量所引用(参数传递)。创建对象是为了反复利用，这个对象将被保存到运行时数据区

## 29.0 垃圾回收
>JavaScript 是使用垃圾回收的编程语言，开发者不需要操心内存分配和回收。JavaScript 的垃圾回收
程序可以总结如下

1. 离开作用域的值会被自动标记为可回收，然后在垃圾回收期间被删除。
2. 主流的垃圾回收算法是标记清理，即先给当前不使用的值加上标记，再回来回收它们的内存。
   图灵社区会
3. 引用计数是另一种垃圾回收策略，需要记录值被引用了多少次。JavaScript 引擎不再使用这种算
   法，但某些旧版本的 IE 仍然会受这种算法的影响，原因是 JavaScript 会访问非原生 JavaScript 对
   象（如 DOM 元素）。
4. 引用计数在代码中存在循环引用时会出现问题。
5. 解除变量的引用不仅可以消除循环引用，而且对垃圾回收也有帮助。为促进内存回收，全局对
   象、全局对象的属性和循环引用都应该在不需要时解除引用。


















