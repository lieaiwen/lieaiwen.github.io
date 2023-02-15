## 代理模式 Proxy（代理）
代理模式是为一个对象提供一个代用品或占位符，以便控制对它的访问。<br>
比如 明星有经纪人，如果想请明星来办一场活动，只能联系他的经纪人，
经纪人会把报酬和活动细节谈好后 ，把合同交给明星。

<br>
本例举一个用代理对象加载图片的例子来理解代理模式，当网络不好的时候，图片的
加载需要一段时间，这就会产生空白，影响用户体验，这时候我们可在图片真正加载完
之前，使用一张loading站位图片，等图片真正加载完再给图片设置src属性。

```
class MyImage {
    constructor() {
        this.img = new Image()
        document.body.appendChild(this.img)
    }
    setSrc(src) { // 这是个方法 不是setter 属性
        this.img.src = src
    }
}

class ProxyImage {
    constructor() {
        this.proxyImage = new Image()
    }

    setSrc(src) { // 这是个方法 不是setter 属性
        let myImageObj = new MyImage()
        myImageObj.img.src = 'file://xxx.png'  //为本地图片url
        this.proxyImage.src = src
        this.proxyImage.onload = function() {
            myImageObj.img.src = src
        }
    }
}

var proxyImage = new ProxyImage()
proxyImage.setSrc('http://xxx.png') //服务器资源url
```
上面 本体类中有自己的setSrc 方法，如果有一天网络速度不再需要 预加载了，我们
可以直接使用本体的setSrc，并且不需要改动本体类的代码，而且可以删除代理类
``` 
// 依旧可以满足需求
var myImage = new MyImage()
myImage.setSrc('http://qiniu.sunzhaoye.com/CORS.png')
```
小结<br/>
1.0 代理模式符合开放闭合原则
2.0 本体对象和代理对象拥有相同的方法，在用户看来并不知道请求的本体对象还是代理对象。







