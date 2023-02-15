## http2
新特性：
1.0 二进制帧层 <br>
2.0 流,消息，帧
``` 
流：已经建立的连接之间双向流动的字节，它能携带一个至多个消息。
消息：一个完整的帧序列，它映射到逻辑的请求和响应消息。
帧：在HTTP/2通信的最小单元。每个桢包括一个帧头，里面有个很小标志，来区别是属于哪个流。

```
3.0 请求和响应的多路复用<br>
[参考链接](https://www.jianshu.com/p/67c541a421f9)  

## 1.0 HTTP1.0 和 HTTP1.1 相比
HTTP1.1 是当前使用最为广泛的HTTP协议
``` 
   HTTP1.0 定义了三种请求方法： GET, POST 和 HEAD 方法。HTTP1.1 新增了六种请求方法：OPTIONS、PUT、PATCH、DELETE、TRACE 和 CONNECT 方法。
   缓存处理：在HTTP1.0中主要使用header里的If-Modified-Since,Expires来做为缓存判断的标准，HTTP1.1则引入了更多的缓存控制策略例如Entity tag，If-Unmodified-Since, If-Match, If-None-Match等更多可供选择的缓存头来控制缓存策略。
   带宽优化及网络连接的使用：HTTP1.0中，存在一些浪费带宽的现象，例如客户端只是需要某个对象的一部分，而服务器却将整个对象送过来了，并且不支持断点续传功能，HTTP1.1则在请求头引入了range头域，它允许只请求资源的某个部分，即返回码是206（Partial Content），这样就方便了开发者自由的选择以便于充分利用带宽和连接。
   错误通知的管理：在HTTP1.1中新增了24个错误状态响应码，如409（Conflict）表示请求的资源与资源的当前状态发生冲突；410（Gone）表示服务器上的某个资源被永久性的删除。
   Host头处理：在HTTP1.0中认为每台服务器都绑定一个唯一的IP地址，因此，请求消息中的URL并没有传递主机名（hostname）。但随着虚拟主机技术的发展，在一台物理服务器上可以存在多个虚拟主机（Multi-homed Web Servers），并且它们共享一个IP地址。HTTP1.1的请求消息和响应消息都应支持Host头域，且请求消息中如果没有Host头域会报告一个错误（400 Bad Request）。
   长连接：HTTP 1.1支持长连接（PersistentConnection）和请求的流水线（Pipelining）处理，在一个TCP连接上可以传送多个HTTP请求和响应，减少了建立和关闭连接的消耗和延迟，在HTTP1.1中默认开启Connection： keep-alive，一定程度上弥补了HTTP1.0每次请求都要创建连接的缺点。通过设置http的请求头部和应答头部，保证本次数据请求结束之后，下一次请求仍可以重用这一通道，避免重新握手。
```

## 2.0  HTTP2.0 和 HTTP1.X 相比
``` 
   新的二进制格式（Binary Format）：HTTP1.x的解析是基于文本。基于文本协议的格式解析存在天然缺陷，文本的表现形式有多样性，要做到健壮性考虑的场景必然很多，二进制则不同，只认0和1的组合。基于这种考虑HTTP2.0的协议解析决定采用二进制格式，实现方便且健壮。
   多路复用（MultiPlexing）：即连接共享，即每一个request都是是用作连接共享机制的。一个request对应一个id，这样一个连接上可以有多个request，每个连接的request可以随机的混杂在一起，接收方可以根据request的 id将request再归属到各自不同的服务端请求里面。
   header压缩：如上文中所言，对前面提到过HTTP1.x的header带有大量信息，而且每次都要重复发送，HTTP2.0使用了专门为首部压缩而设计的 HPACK 算法，使用encoder来减少需要传输的header大小，通讯双方各自cache一份header fields表，既避免了重复header的传输，又减小了需要传输的大小。
   服务端推送（server push）：服务端推送能把客户端所需要的资源伴随着index.html一起发送到客户端，省去了客户端重复请求的步骤。正因为没有发起请求，建立连接等操作，所以静态资源通过服务端推送的方式可以极大地提升速度。例如我的网页有一个sytle.css的请求，在客户端收到sytle.css数据的同时，服务端会将sytle.js的文件推送给客户端，当客户端再次尝试获取sytle.js时就可以直接从缓存中获取到，不用再发请求了。
```
## 3.0 HTTPS 与 HTTP 相比
``` 
   HTTPS协议需要到CA申请证书，一般免费证书很少，需要交费。
   HTTP协议运行在TCP之上，所有传输的内容都是明文，HTTPS运行在SSL/TLS之上，SSL/TLS运行在TCP之上，所有传输的内容都经过加密的。
   HTTP和HTTPS使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。
   HTTPS可以有效的防止运营商劫持，解决了防劫持的一个大问题。
```

## 4.0 如何从HTTP切换到HTTPS
（1）需要将页面中所有的链接（例如js,css,图片等链接）都由http改为https

（2）一般情况下会建议保留HTTP，所以在切换的时候可以做HTTP和HTTPS的兼容，具体实现方式是：去掉页面连接中的http头部，这样恶意自动匹配HTTP头和HTTPS头
    (去掉http头部让浏览器自动匹配http或者https)

## 5.0 浏览器同源策略
浏览器安全的基石是“同源策略”（same-origin policy）。所谓“同源”指的是“三个相同”：
<br>
协议相同
<br>
域名相同
<br>
端口相同
``` 
http://www.baidu.com/dir/page.html
    协议 http://
    域名 www.baidu.com
    端口： 80 默认都是80 
http://www.baidu.com/dir2/page.html 同源

http://baidu.com/dir2/page.html 不同源：域名不同

https://www.baidu.com/dir/page.html 不同源：协议不同

http://www.baidu.com:81/dir2/page.html 不同源：端口不同
```
同源策略的目的是为了保证用户信息的安全，防止恶意的网站窃取数据。不同源的客户端脚本在没有明确授权的情况下，不能读写对方的资源。
<br>
``` 
如果非同源，共有三种行为受到限制：

    Cookie、LocalStorage和IndexDB无法读取
    DOM无法获得
    AJAX请求不能发送

不受同源策略限制的：

    页面中的链接，重定向以及表单提交
    跨域资源的引入是可以的，但是js不能读写加载的内容。
    （如<script src=...></script>，<img>，<link>，<iframe>）
```

## window.onload 和 DOMContentLoaded 谁先执行
   DOMContentLoaded 要早于 window.onload <br>
   在js中DOMContentLoaded方法是在HTML文档被完全的加载和解析之后才会触发的事件，
   他并不需要等到（样式表/图像/子框架）加载完成之后再进行。在看load事件（onload事件），用于检测一个加载完全的页面。<br>
   
## 6.0 TCP/IP的三次握手 四次挥手
**三次握手**
>所谓三次握手（Three-Way Handshake）即建立TCP连接，就是指建立一个TCP连接时，需要客户端和服务端总共发送3个包以确认连接的建立。在socket编程中，这一过程由客户端执行connect来触发，整个流程如下图所示：

![avatar](/images/http/tcp1.png)
1. 第一次握手：Client将标志位SYN置为1，随机产生一个值seq=J，并将该数据包发送给Server，Client进入SYN_SENT状态，等待Server确认。
2. 第二次握手：Server收到数据包后由标志位SYN=1知道Client请求建立连接，Server将标志位SYN和ACK都置为1，ack=J+1，随机产生一个值seq=K，并将该数据包发送给Client以确认连接请求，Server进入SYN_RCVD状态。
3. 第三次握手：Client收到确认后，检查ack是否为J+1，ACK是否为1，如果正确则将标志位ACK置为1，ack=K+1，并将该数据包发送给Server，Server检查ack是否为K+1，ACK是否为1，如果正确则连接建立成功，Client和Server进入ESTABLISHED状态，完成三次握手，随后Client与Server之间可以开始传输数据了。
<br>
**四次挥手**
>三次握手耳熟能详，四次挥手估计就，所谓四次挥手（Four-Way Wavehand）即终止TCP连接，就是指断开一个TCP连接时，需要客户端和服务端总共发送4个包以确认连接的断开。在socket编程中，这一过程由客户端或服务端任一方执行close来触发，整个流程如下图所示：


![avatar](/images/http/tcp2.png)
<br>
由于TCP连接时全双工的，因此，每个方向都必须要单独进行关闭，这一原则是当一方完成数据发送任务后，发送一个FIN来终止这一方向的连接，收到一个FIN只是意味着这一方向上没有数据流动了，即不会再收到数据了，但是在这个TCP连接上仍然能够发送数据，直到这一方向也发送了FIN。首先进行关闭的一方将执行主动关闭，而另一方则执行被动关闭，上图描述的即是如此。
1. 第一次挥手：Client发送一个FIN，用来关闭Client到Server的数据传送，Client进入FIN_WAIT_1状态。
2. 第二次挥手：Server收到FIN后，发送一个ACK给Client，确认序号为收到序号+1（与SYN相同，一个FIN占用一个序号），Server进入CLOSE_WAIT状态。
3. 第三次挥手：Server发送一个FIN，用来关闭Server到Client的数据传送，Server进入LAST_ACK状态。
4. 第四次挥手：Client收到FIN后，Client进入TIME_WAIT状态，接着发送一个ACK给Server，确认序号为收到序号+1，Server进入CLOSED状态，完成四次挥手。
<br>

上面是一方主动关闭，另一方被动关闭的情况，实际中还会出现同时发起主动关闭的情况，具体流程如下图：
<br>
![avatar](/images/http/tcp3.png)





