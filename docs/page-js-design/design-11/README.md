## 装饰器模式
装饰者(decorator)模式能够在不改变对象自身的基础上，动态的给某个对象添加额外的职责，不会影响原有接口的功能。
<br>
模拟传统面向对象语言的装饰者模式
``` 
//原始的飞机类
var Plane = function () {
};

Plane.prototype.fire = function () {
    console.log('发射普通子弹');
};


//装饰类
var MissileDecorator = function (plane) {
    this.plane = plane;
}

MissileDecorator.prototype.fire = function () {
    this.plane.fire();
    console.log('发射导弹!');
};

var plane = new Plane();
plane = new MissileDecorator(plane);
plane.fire();
```
JavaScript中的装饰器模式
``` 
var Plane = {
        fire:function(){
            console.log('发射普通的子弹');
        }
    }
    var oneDecorator = function(){
        console.log('发射导弹!');
    }
    var fire = Plane.fire;
    Plane.fire = function(){
        fire();
        oneDecorator()
    }
    Plane.fire();
```
[参考](https://www.cnblogs.com/gaosirs/p/10756503.html)<br>
复杂一点的
``` 
// 装饰者模式 decorate(装饰)
var tree = {};
tree.decorate = function(){
	console.log('别让树倒了')
}
// Decorator(装饰器) 定义方法，用于添加额外的装饰器，
// 装饰器被实现为构造器函数 都继承自tree对象
tree.getDecorator = function(deco){
	tree[deco].prototype = this
	return new tree[deco];
}
// 创建装饰器 redBalls() ,我们将他设为tree的一个属性(已保持
//全局命名空间的纯净) ，redBall 对象也提供了decorate()方法，
// 注意它先调用了父类的decorate()方法

tree.RedBalls = function(){
	this.decorate = function (){
		this.RedBalls.prototype.decorate();
		console.log('放一些红球')
	}
}
tree.BlueBalls = function(){
	this.decorate = function (){
		this.BlueBalls.prototype.decorate();
		console.log('放一些蓝球1')
	}
}
tree.caidai = function(){
	this.decorate = function (){
		this.caidai.prototype.decorate();
		console.log('放一些彩带')
	}
}

// 再把所有的装饰器都添加到基础对象中
tree = tree.getDecorator('BlueBalls');
tree = tree.getDecorator('RedBalls');
tree = tree.getDecorator('caidai');
tree.decorate();
// 返回的顺序是这个哦
/*别让树倒了
 放一些蓝球1
 放一些红球
 放一些彩带*/
```




