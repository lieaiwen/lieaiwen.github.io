## javaScript函数式编程（美）

### javaScript函数编程简介
>函数式编程通过使用函数来将值转换成抽象单元，接着用于构建软件系统。

* 需要了解 call bind apply <br>
* 每个js函数都可以访问一个名为arguments的局部对象，它以类似于数组的形式存储了调用本函数时的实际参数

**函数式编程**，包含以下技术

* 确定抽象，并为其构建函数。
* 利用已有的函数来构建更为复杂的抽象
* 通过将现有的函数传给其它的函数来构建更加复杂的抽象。

### js函数初试
1. js中有两个值表示**不存在**-- **null** 和 **undefined**，因此existy函数主要检查其参数是否是这类值
```js
function existy(x){
    return x != null;
}
console.log(null == undefined) // true
console.log(null === undefined) // false
console.log(null === null) // true
console.log(undefined === undefined) // true
existy(null) // false
existy(undefined) // false
existy({}.name) // false
existy((function(){})()) // false
existy(0) // true
existy(false) // true
```
existy 函数简化了js中对象是否存在的判断

2.函数truthy用来判断一个对象是否应该被认为是true的同义词
```js
function truthy(x){
    return (x !== false) && existy(x)
}
truthy(false) // false
truthy(undefined) // false
truthy(0) // true
truthy('') // true
```

**高阶函数** 应该可以执行下列至少一项操作

* 以一个函数作为参数
* 返回一个函数作为结果

```js
function add(n, f){
    return n + f()
}
// 以一个函数作为参数
add(11, function() { return 22})

// 返回一个函数作为结果
function fo(){
    return function() {
        return 33
    }
}

```
