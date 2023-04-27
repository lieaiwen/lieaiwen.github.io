## ajax
**简介：**

Ajax 不是一种新的编程语言，而是一种用于创建更好更快以及交互性更强的Web应用程序的技术。
使用 JavaScript 向服务器提出请求并处理响应而不阻塞用户核心对象XMLHttpRequest。通过这个对象，您的 JavaScript 可在不重载页面的情况与 Web 服务器交换数据，即在不需要刷新页面的情况下，就可以产生局部刷新的效果。
Ajax 在浏览器与 Web 服务器之间使用异步数据传输（HTTP 请求），这样就可使网页从服务器请求少量的信息，而不是整个页面。
Ajax可使因特网应用程序更小、更快，更友好。
Ajax 是一种独立于 Web 服务器软件的浏览器技术。

**人话：** ajax是向服务器请求数据的技术，不用刷新页面

问题：<br>
1.什么是服务器<br>
2.服务器的交互流程<br>
3.0 ajax工作流程（原理）<br>
4.0 http工作原理<br>

**1.0 服务器：**
>提供某种服务的机器（计算机）

比如：

qq音乐：用的音频服务器<br>
迅雷：文件服务器<br>
qq邮件：邮件服务器<br>
爱奇艺：视频服务器<br>
google浏览器：**web服务器**（提供网页服务的）

**2.0 了解前端访问服务器的几种方式**

2.1 直接网址 http://www.baidu.com<br>
2.2 a标签<br>
2.3 window.location.href<br>
2.4 ajax (跟上面3个不同)(它不跳转的)

**3.0前后端交互的3个流程**

1.0 请求（浏览器）
2.0 处理（服务器）
3.0 相应（服务器）

**4.0 ajax语法**
>AJAX是JavaScript使用内置对象XMLHttpRequest与Web服务器通信并且无需提交表单或加载页面的能力。

```js
// 1.0 创建XMLHttpRequest对象()
let xhr = new XMLHttpRequest()
// 2.0 设置请求方法和请求地址
xhr.open('get','https://www.lieapp/api/articleList')

// 3.0 发送请求
xhr.send()
// 4.0 注册响应回调时间
//这个时间不是立即执行的，过会儿财智星，取决于服务器,网络
xhr.onload = function(){
    console.log('do something')
}

// post 请求
// 1.0 需要设置请求头 在 2和3之间设置 2.0 参数在send里面拼接
// 2.5 设置请求头
xhr.setRequestHeader('Content-type','application/x-www-form-urlencode')
xhr.send('num=1&pageSize=10')
```
**小tips** 

ajax的请求头来自 form表单的entry
```js
<form action="" enctype="application/x-www-form-urlencoded"></form>
<form action="" enctype="multipart/form-data"></form>
<form action="" enctype="text/plain"></form>
```

**大知识点**
```js
xhr.send() //方法有三个参数 第一个请求方法，第二个 请求地址 第三个 anync 
//anync 两个值 true 或者false
// true 表示异步 false 表示同步
// 异步就是 请求可能需要一些时间才能返回回来，这时候我的js可以去干其它的事情
// 同步就是 必须等我请求响应，js你才能去执行后面的代码
```

**ajax的事件 onreadystatechange 事件**<br>

当请求被发送到服务器时，我们需要执行一些基于响应的任务。<br>
每当 readyState 改变时，就会触发 onreadystatechange 事件。<br>
readyState 属性存有 XMLHttpRequest 的状态信息。<br>

下面是 XMLHttpRequest 对象的三个重要的属性：
```js
1.0 onreadystatechange 
// 存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数。
2.0 readyState
/*存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。

0: 请求未初始化
1: 服务器连接已建立
2: 请求已接收
3: 请求处理中
4: 请求已完成，且响应已就绪
*/
3.0 status
/*200: "OK"
404: 未找到页面
*/
// 完整版的请求 用回调函数
function ajax(url,cfunc) {
    let xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET",'/try/ajax/ajax_info.txt',true);
    xmlhttp.send();
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
            document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
        }
    };
}
```
这是一个链接 [菜鸟教程](./1.html)
