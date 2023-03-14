## 7.0 js防抖和节流

**概叙：** 

开发中，经常会遇到以下场景：监听鼠标移动 onmousemove，监听页面滚动 onscroll，监听大小变化 onresize，监听 input 输入，按钮的搜索、提交功能等。这些场景下，事件会被频繁触发，但我们并不想事件被频繁触发，这时就需要通过防抖和节流来限制频繁操作
<br>
**防抖和节流都是为了解决事件频繁触发的问题**，但在实现原理上有些不同，具体实现原理看下文。

**一、防抖（debounce）**

**1、原理：**

当持续触发事件时，在一定时间内没有再触发事件，事件才会处理函数一次，如果在设定的时间到来之前，又触发了事件，则重新开启定时器，执行最后一次触发事件。
<br>
本质：将多次执行变为最后一次执行

**2、应用场景：**

&nbsp;&nbsp;&nbsp;&nbsp;2.1 scroll事件滚动 <br>
&nbsp;&nbsp;&nbsp;&nbsp;2.2 浏览器窗口的缩放resize事件<br>
&nbsp;&nbsp;&nbsp;&nbsp;2.3 搜索框输入查询的时候<br>
&nbsp;&nbsp;&nbsp;&nbsp;2.4 表单验证<br>
&nbsp;&nbsp;&nbsp;&nbsp;2.5 按钮的提交事件<br>

**2、代码：**
```js
function debounce (fn, delay = 1000) {
  let time = null
  return function () {
    let that = this // 获取当前this
    if (time) { // 判断是否已经存在，如果存在直接清除
      clearTimeout(time)
    }
    time = setTimeout(() => {
      fn.apply(that, arguments) // 使fn 中this，执行当前调用者，并传入参数
    }, delay)
  }
}
// 测试demo
function logger(e){
	console.log('log -----')
}
btn.addEventListener('click',debounce(logger, 1000))
```
**节流（throttle）**

**1、原理：**

在持续触发事件时，在一定时间内只调用一次函数，如果在规定时间内，再次触发此事件，则直接忽略不执行，其主要目的就是减少一段时间的触发频率
<br>
本质：将多次执行变成每隔一段时间执行

**2、应用场景：**

&nbsp;&nbsp;&nbsp;&nbsp;2.1 DOM元素拖拽功能实现 <br>
&nbsp;&nbsp;&nbsp;&nbsp;2.2 计算鼠标移动距离<br>
&nbsp;&nbsp;&nbsp;&nbsp;2.3 监听scroll滚动事件<br>
&nbsp;&nbsp;&nbsp;&nbsp;2.4 搜索、提交等按钮功能<br>

**2、代码：**
```js
function throttle (fn, delay = 1000) {
    let time = null;
    return function () {
        let that = this;
        if (!time) { // 如果已经存在定时器了，则 不做处理
            time = setTimeout(() => {
                fn.apply(that, arguments);
                time = null; // 完结时，将time改为null
            }, delay);
        }
    };
}
// 另外一种写法
function throttle(fn,delay){
    // 记录上一次函数触发的时间
    var lastTime = 0;
    return function(){
        // 记录当前函数触发事件
        var nowTime = Date.now();
        if(nowTime - lastTime >delay){
            fn();
            //同步时间
            lastTime = nowTime;// 利用了闭包
        }
    }
}
document.onscroll = throttle(function(){ console.log(Date.now())},500)
```
