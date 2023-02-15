## 迭代器模式
迭代器模式是指提供一种方法顺序访问一个聚合对象中的各个元素，而不需要暴露
该对象的内部表示。迭代器模式可以把迭代的过程从业务逻辑中分离出来，在使用迭代器
模式之后，即使不关心对象的内部构造，也可以按顺序访问其中的每个元素。

``` 
class Creater{
    constructor(list){
        this.list = list
    }
    // 创建一个迭代器，也叫遍历器
    createIterator() {
        return new Iterator(this)
    }
}
class Iterator {
    constructor(creater) {
        this.list = creater.list
        this.index = 0
    }

    // 判断是否遍历完数据
    isDone() {
        if (this.index >= this.list.length) {
            return true
        }
        return false
    }

    next() {
        return this.list[this.index++]
    }

}
var arr = [1, 2, 3, 4]

var creater = new Creater(arr)
var iterator = creater.createIterator()
console.log(iterator.list)  // [1, 2, 3, 4]
while (!iterator.isDone()) {
    console.log(iterator.next()) 
    // 1
    // 2
    // 3
    // 4
}
Symbol（符号，代号）
iterator(迭代器)
```
es6的迭代器：
``` 
1.0 Array
2.0 Map
3.0 Set
4.0 String
5.0 typeArray
6.0 arguments
7.0 NodeList
注意: Object不是有序数据集合
```
以上有序数据集合都部署了Symbol.iterator属性，属性值为一个函数，执行这个函数，返回一个迭代器，迭代器部署了next方法，调用迭代器的next方法可以按顺序访问子元素
``` 
var arr = [1, 2, 3, 4]

var iterator = arr[Symbol.iterator]()

console.log(iterator.next())  // {value: 1, done: false}
console.log(iterator.next())  // {value: 2, done: false}
console.log(iterator.next())  // {value: 3, done: false}
console.log(iterator.next())  // {value: 4, done: false}
console.log(iterator.next())  // {value: undefined, done: true}
```
小结：<br>
1.0 JavaScript中的有序数据集合有Array，Map，Set，String，typeArray，arguments，NodeList，不包括Object
<br>
2.0  任何部署了[Symbol.iterator]接口的数据都可以使用for...of循环遍历
<br>
3.0  迭代器模式使目标对象和迭代器对象分离，符合开放封闭原则


