## 1.0 小程序
* 轻量级，用完即走
* mpvue wepg 小程序的框架
## 2.0 变量提升（预处理）
>js引擎在代码正式执行之前会做一个预处理的工作
1. 收集变量
2. 收集函数

将var后面的变量定义但不赋值 比如 var a = undefined;<br>
function(){} 提前定义该函数<br>
**js引擎底层如何实现变量提升**<br>
执行上下文，，执行上下文对象<br>
``` 
执行上下文（execute context）EC
理解：代码执行的环境
时机：代码在正式执行之前会进入到执行环境
进入执行环境要干那些工作
    1. 创建变量对象，主要收集变量 函数及函数的参数
                    全局变量 window 局部的：抽象的但是确实存在
    2.0 确认this的指向
        1）全局的this指向谁
        2）局部 this--->调用它的对象
    3.0 创建作用域链
        父级作用域链 + 当前的变量对象
     4.0 扩展
        ECObj = {
            变量对象：{变量，函数，函数的形参}
            scopeChain（作用域链）：父级作用域链 + 当前的变量对象
            this：{window || 调用它的对象}
        }
执行上下文对象就是指 this

作用域是代码定义的时候产生的
```

## 3.0  隐式类型转换
**3.1 ==**
* 两个引用类型比较，只需判断它们是不是引用了同一个对象，是返回true，否则为false。
* undefined 和 null 两者互相比较或者与自身比较，结果是true。它俩与其他任何值比较的都为false。
* NaN与任何值比较包括它自身结果都是false。
* 引用类型和基本数据类型进行比较，两者最后都会转换成基本数据类型再进行比较。
* String，Boolean，Number中的任意两个进行比较，最后都会转为Number类型再进行比较。

**3.2 +**<br>
```
 3 + true; // 4
 "2" + 3; // "23"
 2 + "3"; // "23"
```
**3.3 if**<br>
**3.4 || &&**<br>




## 5.0 new的过程中发生了四步操作：
```
var obj = new Object()
obj.__propo__ = Foo.propotype;
var result = Foo.apply(obj, arguments)
obj = (result instanceof Object && result) || obj; 
```

## 6.0 js乱序的实现
``` 
var values = [1, 2, 3, 4, 5];

values.sort(function(){
    return Math.random() - 0.5;
});

console.log(values)
```
Math.random() - 0.5 随机得到一个正数，负数或者是0，
如果是正数的则降序排列，如果是负数则升序排列，
如果是0就不变，然后不断的升序或者降序，最终得到一个乱序的数组。

