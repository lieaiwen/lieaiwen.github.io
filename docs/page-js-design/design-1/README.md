## 工厂模式
工厂模式是一种用来创建对象的设计模式。我们不暴露对象创建的逻辑,而是将逻辑封装在一个函数内,那么这个函数可以成为工厂;
并且是通过使用一个共同的接口来指向新创建的对象，用工厂方法代替new操作的一种模式。
``` 
class Creator {
    create(name) {
        return new Animal(name)
    }
}
class Animal {
    constructor(name){
        this.name = name
    }
}

var cretor = new Creator()

var duck = creator.create('Duck')
duck.name // Duck

var chicken = creator.create('Chicken')
chicken.name // Chicken
```
1.0 构造函数和创建者分离，对new操作进行封装<br>
2.0 符合开放封闭原则(OCP)



