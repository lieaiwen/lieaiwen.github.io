## 单例模式
单例模式的定义是：
>保证一个类仅有一个实例,并提供一个访问它的全局访问点。<br>

单例模式是一种常用的模式，有一些对象我们往往只需要一个，比如线程池、全局缓存、浏览器
中的window对象等。在js开发中，单例模式的用途同样非常广泛。试想一下，当我们单击
登录按钮的时候，页面中会出现一个登录浮窗，而这个登录浮窗是唯一的，无论单击多少次登录按钮，
这个浮窗都只会被创建一次，那么这个登录浮窗就适合用单例模式来创建。

**1.0 实现单例模式**

用一个变量来标志当前是否已经为某个类创建
过对象，如果是，则在下一次获取该类的实例时，直接返回之前创建的对象
```js
 let singleMan = function(name){
    this.name = name;
    this.girlFriend = null;
}
singleMan.prototype.getName = function(){
    console.log(this.name)
}
singleMan.getGirlFriend = function(name){
    console.log(name,this.girlFriend)
    if(!this.girlFriend){
        this.girlFriend = new singleMan(name)
    }
    console.log(name,this.girlFriend)
    return this.girlFriend
}
let man1 = singleMan.getGirlFriend('小红1')
let man2 = singleMan.getGirlFriend('小红2')
/*
* 小红1 undefined
* 小红1 singleMan {name: '小红1', girlFriend: null}
*  小红2 singleMan {name: '小红1', girlFriend: null}
*  小红2 singleMan {name: '小红1', girlFriend: null}
* */
console.log(man1 === man2) // true
```
**知识点**
>假如给函数添加的属性也是一个函数，那么这个属性函数的this指向的是原函数，而不是window
```js
var a = function (){
    console.log('a函数')
}
a.ww = function(){
    console.log(this)
}
a.ww() // ƒ (){ console.log('a函数') }
```
单例模式的另外一种写法
```js
let singleMan = function(name){
    this.name = name;
}
singleMan.prototype.getName = function(){
    console.log(this.name)
}
singleMan.getGirlFriend = (function(){
    let girlFriend = null //// 使用闭包防止全局变量的污染
    //console.log(girlFriend)
    return function(name){
        if(!girlFriend){
            girlFriend = new singleMan(name)
        }
        //console.log(name,girlFriend)
        return girlFriend
    }

})()
let man1 = singleMan.getGirlFriend('小红1')
let man2 = singleMan.getGirlFriend('小红2')
/*
*  null
*  小红1 singleMan {name: '小红1'}
*  小红2 singleMan {name: '小红1'}
* */
console.log(man1 === man2) // true
```
我们通过 singleMan.getGirlFriend 来获取 singleMan 类的唯一对象，这种方式相对简单，但有
一个问题，就是增加了这个类的“**不透明性**”，singleMan 类的使用者必须知道这是一个单例类，
跟以往通过 new XXX 的方式来获取对象不同，这里偏要使用 singleMan.getGirlFriend 来获取对象。

**2.0 用代理实现单例模式**

在下面的例子中，我们将使用 CreateDiv 单例类，它的作用是负责在页
面中创建唯一的 div 节点
```js
    let CreateDiv = function( html ){
        this.html = html;
        this.init();
    };
    CreateDiv.prototype.init = function(){
        let div = document.createElement( 'div' );
        div.innerHTML = this.html;
        document.body.appendChild( div );
    };
    // 接下来引入代理类 proxySingletonCreateDiv：
    var ProxySingletonCreateDiv = (function(){
        let instance;
        return function( html ){
            if ( !instance ){
                instance = new CreateDiv( html );
            }
            return instance;
        }
    })();
    let a = new ProxySingletonCreateDiv( 'sven1' );
    let b = new ProxySingletonCreateDiv( 'sven2' );
    console.log( a === b ); // true
```
通过引入代理类的方式，我们同样完成了一个单例模式的编写，现在我们
把负责管理单例的逻辑移到了代理类 proxySingletonCreateDiv 中。这样一来，CreateDiv 就变成了
一个普通的类，它跟 proxySingletonCreateDiv 组合起来可以达到单例模式的效果。

**3.0惰性单例**

惰性单例指的是在需要的时候才创建对象实例。惰性单例是单例模式的重点，这种技术在实
际开发中非常有用，有用的程度可能超出了我们的想象，




```js
<!DOCTYPE html>
<html lang="en">

<body>
    <button id="btn">登录</button>
</body>
<script>
    class Login {
        createLayout() {
            var oDiv = document.createElement('div')
            oDiv.innerHTML = '我是登录框'
            document.body.appendChild(oDiv)
            oDiv.style.display = 'none'
            return oDiv
        }
    }

    class Single {
        getSingle(fn) {
            var result;
            return function() {
                return result || (result = fn.apply(this, arguments))
            }
        }
    }

    var oBtn = document.getElementById('btn')
    var single = new Single()
    var login = new Login()

    // 由于闭包，createLoginLayer对result的引用，所以当single.getSingle函数执行完之后，内存中并不会销毁result。

    // 当第二次以后点击按钮，根据createLoginLayer函数的作用域链中已经包含了result，所以直接返回result

    // 讲获取单例和创建登录框的方法解耦，符合开放封闭原则
    var createLoginLayer = single.getSingle(login.createLayout)
    oBtn.onclick = function() {
        var layout = createLoginLayer()
        layout.style.display = 'block'
    }
</script>

</html>
```
小结：<br>
1.0 单例模式的主要思想就是 如果 已经创建，则直接返回
``` 
function createSingle(){
    var obj = null;
    if(!obj){
        obj = xxx    
    }
    return obj;
}
```
2.0 符合开放封闭原则





