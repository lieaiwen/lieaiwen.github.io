## js知识点5

## 1.0 js递归和尾递归
**定义：** <br>
>递归函数就是在函数体内调用本函数
```js
function fac(n){
    if( n === 1) return 1;
    return n * fac(n-1)
}
fac(3)
(3*fac(2))
(3*(2*fac(1))) // 6
```
**说明：**<br> 
函数调用会产生“调用记录（存储着函数的相关信息）”存放在栈中，当有函数返回，对应的调用记录才会消失，
<br>
述用普通递归实现的阶乘的执行过程中，不断的调用自身，导致一直没有返回，这样也就不断的在栈中存储调用记录
而当调用自身的次数过多后，就会产生我们常说的“栈溢出”
<br>
**更形象的描述：**
<br>
就想一个人不断地借钱（调用自身，不断向栈中存调用记录），但是总想着以后再还（一直没有返回），
当外债积累到超出自己偿还能力的时候，就跑路了（栈溢出）

## 尾递归
```js
function fac(n, total){
    if(n ===1) return total;
    return fac(n-1,n*total);
}
fac(3,1)
//执行步骤：
//1.0 fac(2,3*1)
//2.0 fac(1,2*3)
//3.0 // 6
```
**说明：** <br>
永远只有一个调用记录，调用函数产生一个调用记录，最后一步操作 return fac(n - 1, n * total) 
<br>
把当前函数的计算结果当做参数传递给了下一个自身调用，这样第一个函数调用产生的调用记录就消失了，因为它执行完了
依次类推，就不会溢出
<br>
尾递归：函数的最后一步是执行一个函数


## 3.0 使用new关键字调用函数（new Person(…)）的具体步骤
``` 
1.0 创建空对象
    var obj = {};
2.0 设置新对象的的constructor属性为构造函数的名称,
设置新对象的__proto__属性指向构造函数的prototype对象；
obj.__proto__ = Person.prototype;
3.0 使用新对象调用函数，函数中的this被指向新实例对象；
Person.call(obj);
4.0 将初始化完毕的新对象地址，保存到等号左边的变量中 
```
prototype的定义
``` 
javascript中的每个对象都有prototype属性，
Javascript中对象的prototype属性的解释是：返回对象类型原型的引用。
function test () {
　　this.foo = "foo";
}
var a = new test()
js  constructor 属性返回对创建此对象的数组函数的引用
a.constructor
    ƒ test () {
    　　this.foo = "foo";
    }
test.prototype
    {constructor: ƒ}
    constructor: ƒ test()
    __proto__: Object
```
## 4.0 new Object 和 Object.create的区别
1.0 new Object()继承内置对象Object，Object.create继承指定对象
<br>
2.0 可以通过Object.create(null) 创建一个干净的对象，也就是没有原型，而 new Object() 创建的对象是 Object的实例，原型永远指向Object.prototype.
    
    
## 判断JS对象是否拥有某属性
1.0 in 运算符
``` 
var obj = {name:'jack'};
alert('name' in obj); // --> true
alert('toString' in obj); // --> true
无论是name，还是原形链上的toString，都能检测到返回true。
```
2.0 hasOwnProperty 方法
``` 
var obj = {name:'jack'};
obj.hasOwnProperty('name'); // --> true
obj.hasOwnProperty('toString'); // --> false
原型链上继承过来的属性无法通过hasOwnProperty检测到，返回false。
```

