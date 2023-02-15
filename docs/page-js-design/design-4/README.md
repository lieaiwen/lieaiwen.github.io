## 适配器模式
适配器模式的作用是解决两个软件实体间的接口不兼容的问题。使用
适配器模式之后，原本由于接口不兼容而不能工作的朗格软件实体可以一起工作。
<br>
适配器的别名是包装器(wrapper),这是一个响度简单的模式，在程序开发中有
许多这样的场景：当我们试图调用模块或者对象的某个接口时，却发现这个接口的
格式并不符合目前的需求。这时候有两种解决办法，第个一种是修改原来的接口实现
但如果原来的模块很复杂，或者我们拿到的模块一是一段别人编写的经过压缩的代码
，修改原几口就显的不太现实了。第二种办法是创建一个适配器，将原接口转换为客户
希望的另外一个接口，客户只需要和适配器打交道。
``` 
class GoogleMap(){
    show(){
        console.log('google地图')
    }
}
class BaiduMap(){
    show(){
        console.log('百度地图')
    }
}
function render(map){
    if(map.show instanceof Function){
        map.show()
    }
}
render(new GooleMap())  // 渲染谷歌地图
render(new BaiduMap())  // 渲染百度地图
```
但是假如BaiduMap类的原型方法不叫show，而是叫display，这时候就可以使用适配器模式了，因为我们不能轻易的改变第三方的内容。在BaiduMap的基础上封装一层，对外暴露show方法。
``` 
class GooleMap {
    show() {
        console.log('渲染谷歌地图')
    }
}

class BaiduMap {
    display() {
        console.log('渲染百度地图')
    }
}


// 定义适配器类, 对BaiduMap类进行封装
class BaiduMapAdapter{
    show(){
        var baiduMap = new BaiduMap()
        return baiduMap.display()
    }
}

function render(map) {
    if (map.show instanceof Function) {
        map.show()
    }
}

render(new GooleMap())         // 渲染谷歌地图
render(new BaiduMapAdapter())  // 渲染百度地图
```
小结：<br>
1.0 适配器模式主要解决两个接口之间不匹配的问题，
不会改变原来的接口，而是由一个对象对另外一个对象的包装。
2.0 适配器模式符合开放封闭原则


