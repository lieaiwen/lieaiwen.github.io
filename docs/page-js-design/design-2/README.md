## 单例模式
单例模式的定义是：保证一个类仅有一个实例,并提供一个访问它的全局访问点。<br>
单例模式是一种常用的模式，有一些对象我们往往只需要一个，比如线程池、全局缓存、浏览器
中的window对象等。在js开发中，单例模式的用途同样非常广泛。试想一下，当我们单击
登录按钮的时候，页面中会出现一个登录浮窗，而这个登录浮窗是唯一的，无论单击多少次登录按钮，
这个浮窗都只会被创建一次，那么这个登录浮窗就适合用单例模式来创建。
``` 
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





