## 原型模式
用原型实例指定创建对象的种类，并且通过拷贝这些原型创建新的对象<br>
在js中，实现原型模式是在es5中，提出的--Object.create--方法，
使用现有的对象来提新创建的对象的__proto__;<br>
··················
``` 
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
```
重要 1. 方法继承
``` 
var Parent = function() {}
Parent.prototype.show = function() {}
var Child = function() {}

// Child继承Parent的所有原型方法
Child.prototype = new Parent()
```
2. 所有函数默认继承Object
``` 
var Foo = function() {}
console.log(Foo.prototype.__proto__ === Object.prototype) // true
```
3. Object.create
``` 
var proto = {a: 1}
var propertiesObject = {
    b: {
        value: 2
    }
}
var obj = Object.create(proto, propertiesObject)
console.log(obj.__proto__ === proto)  // true
```
4. isPrototypeOf <br>
prototypeObj是否在obj的原型链上
``` 
prototypeObj.isPrototypeOf(obj)
```
5. instanceof<br>
constructor.prototype是否出现在obj的原型链上
``` 
obj instanceof constructor
```
6. getPrototypeOf<br>
Object.getPrototypeOf(obj) 方法返回指定对象obj的原型（内部[[Prototype]]属性的值）
``` 
Object.getPrototypeOf(obj)
```
7. setPrototypeOf<br>
设置一个指定的对象的原型 ( 即, 内部[[Prototype]]属性）到另一个对象或 null
``` 
var obj = {}
var prototypeObj = {}
Object.setPrototypeOf(obj, prototypeObj)
console.log(obj.__proto__ === prototypeObj)  // true
```



