## 浏览器对象模型 (BOM)

### Window 对象
所有浏览器都支持 window 对象。它表示浏览器窗口。

所有 JavaScript 全局对象、函数以及变量均自动成为 window 对象的成员。

全局变量是 window 对象的属性。

全局函数是 window 对象的方法。

甚至 HTML DOM 的 document 也是 window 对象的属性之一：

```js
window.document.getElementById("header");
 // 与此相同：
document.getElementById("header");
```

### Window 尺寸

window.innerHeight - 浏览器窗口的内部高度(包括滚动条) --不包含 导航栏

window.innerWidth - 浏览器窗口的内部宽度(包括滚动条)

一些其他方法：

* window.open() - 打开新窗口
* window.close() - 关闭当前窗口
* window.moveTo() - 移动当前窗口
* window.resizeTo() - 调整当前窗口的尺寸

### Window Screen

window.screen对象在编写时可以不使用 window 这个前缀。

* screen.availWidth - 可用的屏幕宽度
* screen.availHeight - 可用的屏幕高度

>screen.availWidth 属性返回访问者屏幕的宽度，以像素计，减去界面特性，比如窗口任务栏。

### Window Location

>window.location 对象用于获得当前页面的地址 (URL)，并把浏览器重定向到新的页面。

window.location 对象在编写时可不使用 window 这个前缀。 一些例子：

* location.hostname 返回 web 主机的域名
* location.pathname 返回当前页面的路径和文件名
* location.port 返回 web 主机的端口 （80 或 443）
* location.protocol 返回所使用的 web 协议（http: 或 https:）

### Window History

window.history对象在编写时可不使用 window 这个前缀。

为了保护用户隐私，对 JavaScript 访问该对象的方法做出了限制。

* history.back() - 与在浏览器点击后退按钮相同
* history.forward() - 与在浏览器中点击向前按钮相同

`history.go()` 这个方法来实现向前，后退的功能

```js
history.go(1); // 表示前进一个页面
history.go(0); // 表示刷新页面
history.go(-1); // 表示后退一个页面
```

### Window Navigator
>window.navigator 对象包含有关访问者浏览器的信息。

```js
"浏览器代号: " + navigator.appCodeName; // 'Mozilla'
"浏览器名称: " + navigator.appName ; // Netscape
"浏览器版本: " + navigator.appVersion  
// '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36'
"启用Cookies: " + navigator.cookieEnabled  // true
"硬件平台: " + navigator.platform // Win32
"用户代理: " + navigator.userAgent  
// Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36
"用户代理语言: " + navigator.language  // zh-CN
```
**警告**
来自 navigator 对象的信息具有误导性，不应该被用于检测浏览器版本，这是因为：

* navigator 数据可被浏览器使用者更改
* 一些浏览器对测试站点会识别错误
* 浏览器无法报告晚于浏览器发布的新操作系统

**浏览器检测**

由于 navigator 可误导浏览器检测，使用对象检测可用来嗅探不同的浏览器。

由于不同的浏览器支持不同的对象，您可以使用对象来检测浏览器。例如，由于只有 Opera 支持属性 "window.opera"，您可以据此识别出 Opera。
