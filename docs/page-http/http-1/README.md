## http
HTTP 是基于 **TCP/IP** 协议的应用层协议。它不涉及数据包（packet）传输，主要规定了客户端和服务器之间的通信格式，默认使用80端口。
## http简介
HTTP协议是Hyper Text Transfer Protocol（超文本传输协议）的缩写,是用于从万维网（WWW:World Wide Web ）服务器传输超文本到本地浏览器的传送协议。。
<br>

HTTP是一个基于**TCP/IP**通信协议来传递数据（HTML 文件, 图片文件, 查询结果等）。
## HTTP 工作原理
HTTP协议工作于客户端-服务端架构为上。浏览器作为HTTP客户端通过URL向HTTP服务端即WEB服务器发送所有请求。
<br>

Web服务器有：Apache服务器，IIS服务器（Internet Information Services）等。
<br>

Web服务器根据接收到的请求后，向客户端发送响应信息。
<br>

HTTP默认端口号为80，但是你也可以改为8080或者其他端口。
<br>
HTTP三点注意事项：
>1.0 HTTP是无连接：无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。采用这种方式可以节省传输时间。

>2.0 HTTP是媒体独立的：这意味着，只要客户端和服务器知道如何处理的数据内容，任何类型的数据都可以通过HTTP发送。客户端以及服务器指定使用适合的Content-Type(Mime-Type)内容类型。

>3.0 HTTP是无状态：HTTP协议是无状态协议。无状态是指协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就较快。

## HTTP 消息结构
HTTP是基于客户端/服务端（C/S）的架构模型，通过一个可靠的链接来交换信息，是一个无状态的请求/响应协议。
<br>
一个HTTP"客户端"是一个应用程序（Web浏览器或其他任何客户端），通过连接到服务器达到向服务器发送一个或多个HTTP的请求的目的。
<br>
一个HTTP"服务器"同样也是一个应用程序（通常是一个Web服务，如Apache Web服务器或IIS服务器等），通过接收客户端的请求并向客户端发送HTTP响应数据。
<br>
HTTP使用统一资源标识符（Uniform Resource Identifiers, URI）来传输数据和建立连接。
<br>
一旦建立连接后，数据消息就通过类似Internet邮件所使用的格式[RFC5322]和多用途Internet邮件扩展（MIME）[RFC2045]来传送。
 <br>

**客户端请求消息:**
<br>
客户端发送一个HTTP请求到服务器的请求消息包括以下格式：请求行（request line）、请求头部（header）、空行和请求数据四个部分组成，下图给出了请求报文的一般格式。
 ![avatar](/images//http/http1.jpg)<br>

**服务器响应消息:**
 <br>
 HTTP响应也由四个部分组成，分别是：状态行、消息报头、空行和响应正文。
![avatar](/images/http/http2.jpg)

## HTTP请求方法

根据HTTP标准，HTTP请求可以使用多种请求方法。
<br>
HTTP1.0定义了三种请求方法： GET, POST 和 HEAD方法。
<br>
HTTP1.1新增了五种请求方法：OPTIONS, PUT, DELETE, TRACE 和 CONNECT 方法。
<br>
![avatar](/images/http/http3.jpg)

## HTTP 响应头信息
HTTP请求头提供了关于请求，响应或者其他的发送实体的信息。
```js
1.0 Allow
    服务器支持哪些请求方法（如GET、POST等）。

2.0 Content-Encoding
    文档的编码（Encode）方法。只有在解码之后才可以得到Content-Type头指定的内容类型。
    利用gzip压缩文档能够显著地减少HTML文档的下载时间。
    Java的GZIPOutputStream可以很方便地进行gzip压缩，
    但只有Unix上的Netscape和Windows上的IE 4、IE 5才支持它。
    因此，Servlet应该通过查看Accept-Encoding头（即request.getHeader("Accept-Encoding")）
    检查浏览器是否支持gzip，为支持gzip的浏览器返回经gzip压缩的HTML页面，
    为其他浏览器返回普通页面。

3.0 Content-Length
    表示内容长度。只有当浏览器使用持久HTTP连接时才需要这个数据。
    如果你想要利用持久连接的优势，可以把输出文档写入ByteArrayOutputStram，
    完成后查看其大小，然后把该值放入Content-Length头，
    最后通过byteArrayStream.writeTo(response.getOutputStream()发送内容。

4.0 Content-Type
    表示后面的文档属于什么MIME类型。
    Servlet默认为text/plain，但通常需要显式地指定为text/html。
    由于经常要设置Content-Type，因此HttpServletResponse提供了一个专用的方法setContentType。

5.0 Date
    当前的GMT时间。你可以用setDateHeader来设置这个头以避免转换时间格式的麻烦。

6.0 Expires
    应该在什么时候认为文档已经过期，从而不再缓存它？

7.0 Last-Modified
    文档的最后改动时间。
    客户可以通过If-Modified-Since请求头提供一个日期，该请求将被视为一个条件GET，
    只有改动时间迟于指定时间的文档才会返回，
    否则返回一个304（Not Modified）状态。
    Last-Modified也可用setDateHeader方法来设置。

8.0 Location
    表示客户应当到哪里去提取文档。
    Location通常不是直接设置的，而是通过HttpServletResponse的sendRedirect方法，
    该方法同时设置状态代码为302。

9.0 Refresh

    表示浏览器应该在多少时间之后刷新文档，以秒计。除了刷新当前文档之外，
    你还可以通过setHeader("Refresh", "5; URL=http://host/path")让浏览器读取指定的页面。
    
    注意这种功能通常是通过设置HTML页面HEAD区的
    ＜META HTTP-EQUIV="Refresh" CONTENT="5;URL=http://host/path"＞实现，
    这是因为，自动刷新或重定向对于那些不能使用CGI或Servlet的HTML编写者十分重要。
    但是，对于Servlet来说，直接设置Refresh头更加方便。

    注意Refresh的意义是"N秒之后刷新本页面或访问指定页面"，
    而不是"每隔N秒刷新本页面或访问指定页面"。
    因此，连续刷新要求每次都发送一个Refresh头，
    而发送204状态代码则可以阻止浏览器继续刷新，
    不管是使用Refresh头还是＜META HTTP-EQUIV="Refresh" ...＞。
    
    注意Refresh头不属于HTTP 1.1正式规范的一部分，而是一个扩展，但Netscape和IE都支持它。

10.0 Server
    服务器名字。Servlet一般不设置这个值，而是由Web服务器自己设置。

11.0 Set-Cookie
    设置和页面关联的Cookie。
    Servlet不应使用response.setHeader("Set-Cookie", ...)，
    而是应使用HttpServletResponse提供的专用方法addCookie。

12.0  WWW-Authenticate
    客户应该在Authorization头中提供什么类型的授权信息？
    在包含401（Unauthorized）状态行的应答中这个头是必需的。
    例如，response.setHeader("WWW-Authenticate", "BASIC realm=＼"executives＼"")。
    
    注意Servlet一般不进行这方面的处理，
    而是让Web服务器的专门机制来控制受密码保护页面的访问（例如.htaccess）。
```
## HTTP状态码
当浏览者访问一个网页时，浏览者的浏览器会向网页所在服务器发出请求。当浏览器接收并显示网页前，此网页所在的服务器会返回一个包含HTTP状态码的信息头（server header）用以响应浏览器的请求。
<br>
HTTP状态码的英文为HTTP Status Code。
```js
下面是常见的HTTP状态码：

200 - 请求成功

301 - 资源（网页等）被永久转移到其它URL
永久移动。请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI。
今后任何新的请求都应使用新的URI代替

404 - 请求的资源（网页等）不存在
405 客户端请求中的方法被禁止
500 - 内部服务器错误
```
HTTP状态码分类:
<br>
HTTP状态码由三个十进制数字组成，第一个十进制数字定义了状态码的类型，后两个数字没有分类的作用。HTTP状态码共分为5种类型：
<br>
![avatar](/images/http/http4.jpg)
404： url错误<br>
400：参数错误<br>
405： 请求方法错误<br>
403/402 :没有权限<br>

## HTTP content-type
>Content-Type，内容类型，一般是指网页中存在的Content-Type，用于定义网络文件的类型和网页的编码，决定浏览器将以什么形式、什么编码读取这个文件，这就是经常看到一些Asp网页点击的结果却是下载到的一个文件或一张图片的原因。



## URI和URL的区别
**什么是URI**<br>

URI，通一资源标志符(Uniform Resource Identifier， URI)，表示的是web上每一种可用的资源，如 HTML文档、图像、视频片段、程序等都由一个URI进行定位的。
<br>

**什么是URL**<br>

URL是URI的一个子集。它是Uniform Resource Locator的缩写，译为“统一资源定位 符”。
<br>
通俗地说，URL是Internet上描述信息资源的字符串，主要用在各种WWW客户程序和服务器程序上。
<br>
采用URL可以用一种统一的格式来描述各种信息资源，包括文件、服务器的地址和目录等。URL是URI概念的一种实现方式。
<br>

**区别:**<br>

从上面的例子来看，你可能觉得URI和URL可能是相同的概念，其实并不是，URI和URL都定义了资源是什么，但URL还定义了该如何访问资源。URL是一种具体的URI，它是URI的一个子集，它不仅唯一标识资源，而且还提供了定位该资源的信息。URI 是一种语义上的抽象概念，可以是绝对的，也可以是相对的，而URL则必须提供足够的信息来定位，是绝对的。
##  强制缓存和协商缓存 
>强制缓存是我们在第一次请求资源时在 http 响应头设置一个过期时间，在时效内都将直接从浏览器进行获取，常见的 http 响应头字段如 Cache-Control 和 Expires

>协商缓存是我们通过 http 响应头字段 etag 或者 Last-Modified 等判断服务器上资源是否修改，如果修改则从服务器重新获取，如果未修改则 304 指向浏览器缓存中进行获取

##  为什么有了HTTP为什么还要HTTPS？
>https是安全版的http，因为http协议的数据都是明文进行传输的，
所以对于一些敏感信息的传输就很不安全，HTTPS就是为了解决HTTP的不安全而生的。
##  HTTPS是如何保证安全的？
>HTTPS 介绍：HTTPS在传输数据之前需要客户端（浏览器）与服务端（网站）之间进行一次握手，在握手过程中将确立双方加密传输数据的密码信息。

>TLS/SSL协议不仅仅是一套加密传输的协议，TLS/SSL中使用了非对称加密，对称加密以及HASH算法。
## HTTP的keep-alive是干什么的？
在早期的HTTP/1.0中，每次http请求都要创建一个连接，而创建连接的过程需要消耗资源和时间，
为了减少资源消耗，缩短响应时间，就需要重用连接。
在后来的HTTP/1.0中以及HTTP/1.1中，引入了重用连接的机制，
就是在http请求头中加入Connection: keep-alive来告诉对方这个请求响应完成后不要关闭，
下一次咱们还用这个请求继续交流。协议规定HTTP/1.0如果想要保持长连接，
需要在请求头中加上Connection: keep-alive。

```js
keep-alive的优点：
    较少的CPU和内存的使用（由于同时打开的连接的减少了）
    允许请求和应答的HTTP管线化
    降低拥塞控制 （TCP连接减少了）
    减少了后续请求的延迟（无需再进行握手）
    报告错误无需关闭TCP连
```

详细的参考链接有：<br>
[参考链接](https://juejin.im/post/5d032b77e51d45777a126183#heading-11)  <br>

## GET 和 POST 请求的区别
```js
GET 参数通过 url 传递，POST 放在 body 中。（http 协议规定，url 在请求头中，所以大小限制很小）
GET 请求在 url 中传递的参数是有长度限制的，而 POST 没有。原因见上↑↑↑
GET 在浏览器回退时是无害的，而 POST 会再次提交请求
GET 请求会被浏览器主动 cache，而 POST 不会，除非手动设置
GET 比 POST 更不安全，因为参数直接暴露在 url 中，所以不能用来传递敏感信息
对参数的数据类型，GET 只接受 ASCII字符，而 POST 没有限制
GET 请求只能进行 url(x-www-form-urlencoded)编码，而 POST 支持多种编码方式
GET 产生一个 TCP 数据包；POST 产生两个 TCP 数据包。对于 GET 方式的请求，浏览器会把 http 的 header 和 data 一并发送出去，服务器响应200（返回数据）。而对于 POST，浏览器先发送 header，服务器响应100 continue，浏览器再发送 data，服务器响应200 ok（返回数据）
```

## 输入URL发生什么？

```js
1.0 DNS 域名解析（域名解析成ip地址，走UTP协议，因此不会有握手过程）：
    浏览器将 URL 解析出相对应的服务器的 IP 地址
    （1. 本地浏览器的 DNS 缓存中查找 2. 再向系统DNS缓存发送查询请求 3. 再向路由器DNS缓存 
    4. 网络运营商DNS缓存 5. 递归搜索），并从 url 中解析出端口号
        上面的递归搜索：比如blog.baidu.com 1.0 先从.com域名下查找dns解析 2.0 .baidu域名下查找dns解析
                                        3.0 blog域名下查找dns解析 4.0 出错了
2.0 浏览器与目标服务器建立一条 TCP 连接（三次握手）
第一次握手：浏览器发起：告诉服务器我要发送请求了
第二次握手：服务器发起：告诉浏览器我准备接收，你赶紧发送吧
第三次：浏览器发送：告诉服务器，我马上发送，你准备接收吧！
为啥三次：比如只有一次，假设服务器很忙 没空理浏览器，这时候浏览器就发送数据，浏览器是接收不到数据的
    假设2次：这时候浏览器出问题了，我不打算发了，那服务器一直等待状态，造成资源浪费
    所以要三次：来告诉双方我们都没问题了。保证双方的通信是ok的
3.0 浏览器向服务器发送一条 HTTP 请求报文
4.0 服务器返回给浏览器一条 HTTP 响应报文
5.0 浏览器进行渲染
6.0 关闭 TCP 连接（四次挥手）
    第一次：浏览器发起：发给服务器 我东西（请求报文）发送完了，你准备关闭吧！
    第二次：服务器发起：告诉浏览器，我东西接收完了（请求报文），我准备关闭了，你也准备吧！
    第三次：服务器发起：告诉浏览器，我东西(响应报文)发送完了，你准备关闭吧！
    第四次：浏览器发起：告诉服务器，我东西接收完了，我准备关闭了（响应报文），你也准备吧！
```

## 浏览器渲染的步骤
```js
1.0 HTML 解析出 DOM Tree
    在DOM树中，每一个HTML标签都有一个对应的节点（元素节点），
    并且每一个文本也都有一个对应的文本节点，
    DOM树的根节点就是documentElement，对应的是html标签
2.0 CSS 解析出 Style Rules 
    style link标签之类的
    解析CSS的时候会按照如下顺序来定义优先级（递增）：
    浏览器默认设置<用户设置<外联样式<内联样式<标签样式
    2.5 遇见script标签 处理js代码比如 dom style样式啊！
3.0 两者关联生成 Render Tree
4.0 当渲染树创建完成之后，浏览器就可以根据渲染树直接把页面绘制到屏幕上。
注意：这5个步骤不一定按照顺序执行，如果dom或者cssom树修改了可能执行多次，
    时机页面中 这些步骤都会执行多次的。
```
浏览器解析文档的过程中，如果遇到 script 标签，会立即解析脚本，停止解析文档（因为 JS 可能会改变 DOM 和 CSS,如果继续解析会造成浪费）。
如果是外部 script, 会等待脚本下载完成之后在继续解析文档。现在 script 标签增加了 defer 和 async 属性，脚本解析会将脚本中改变 DOM 和 css 的地方> 解析出来，追加到 DOM Tree 和 Style Rules 上
## 渲染树（render tree）和DOM树的关系
```js
（1）在DOM树构建的同时，浏览器会构建渲染树。（为了提高用户体验，浏览器并不会等到所有HTML文档加载完成之后才建立渲染树并渲染，而是会在从网络层获取html文档的同时把已经接收到的局部内容先渲染出来）

（2）DOM树完全和html标签一一对应，而渲染树会忽略（即不包含）不需要渲染的元素（如head，样式为display:none的元素等）

（3）渲染树中每一个节点都存储着对应的CSS属性
```
## reflow（重排，回流）和repaint（重绘）
reflow：浏览器要花时间去渲染，当它发现了某个部分发生了变化并且影响了布局，就需要倒回去重新渲染

repaint：如果只是改变了某个元素的背景颜色或文字颜色等，不影响元素周围或内部布局，就只会引起浏览器的repaint，重画其中一部分。

reflow比repaint更花费时间，也就更影响性能，所以在写代码时应尽量避免过多的reflow。
## 什么时候会发生reflow
（1）页面初始化的时候

（2）操作DOM的时候（增加或删除DOM元素）

（3）某些元素的尺寸改了（边距，填充，边框，宽高）

（4）CSS的属性发生变化（隐藏display：none）

（5）内容改变（文本改变或图片改变而引起的的计算值的宽高改变）

（6）浏览器窗口尺寸改变（当resize事件发生时）

## 如何减少reflow/repaint
（1）不要逐个修改DOM样式，可以预先定义好css的class，然后修改DOM的className，将多个需要进行相同操作的元素一次修改

（2）不要把DOM结点的属性值放在一个循环里当成循环的变量

（3）当动画元素使用fixed或absolute的position时（脱离了文档流），那么在修改他们的CSS时不会发生reflow

（4）不要使用table布局，因为可能很小的一个改动都会造成整个table的重新布局

（5）在内存中多次操作结点，完成后再添加到文档中去

（6）如果要对一个元素进行复杂的操作，可以先隐藏它（display：none），操作完成后再显示

（7）对于需要经常取出的引起浏览器重排的属性值，要缓存到变量中

## 为什么要先引入css文件，再引入js文件
（1）js代码的下载是阻塞下载，不可以和其他代码并行下载和解析；CSS的加载不会阻塞DOM树的解析（会阻塞其渲染，也会阻塞后面的js执行）

（2）页面加载时，是按照从上到下，从左到右的顺序加载的。如果将js放在前面，会立即执行，阻塞后续的资源下载和执行。如果外部脚本加载时间过长，会造成网页长时间失去响应，浏览器就会呈现“假死”状态（阻塞效应）

（2）页面需要等到head中的js和css加载完成之后才开始绘制，当js放在body最后时，不需要等待，可以避免资源阻塞，同时使静态页面迅速显示

（3）部分js的执行依赖于前面的样式。

（4）js一般是处理功能，所以不需要提前加载。先给用户观感，在给用户上手体验。

## 为了避免用户看到长时间的白屏时间，应尽可能的提高CSS的加载速度，具体方法
（1）使用CDN（Content Delivery Network，内容分发网络），CDN会根据你的网络状况，替你挑选最近的一个具有缓存内容的节点为你提供资源，减少加载时间

（2）对css进行压缩

（3）合理的使用缓存（设置cache-control，expires以及E-tag）

（4）减少http请求数，将多个css文件合并，或者干脆直接写成内联样式（但是内联样式的缺点是不能缓存）


## CDN是啥
CDN的全称是Content Delivery Network，即内容分发网络。CDN是构建在现有网络基础之上的智能虚拟网络，依靠部署在各地的边缘服务器，通过中心平台的负载均衡、内容分发、调度等功能模块，使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率。CDN的关键技术主要有内容存储和分发技术。
 
## 用什么解析成IP
从网址到IP地址的转换，称为DNS解析，DNS解析是一个递归查询的过程，具体步骤如下（以www.google.com为例）：

（1）首先在本地域名服务器（最近的一台DNS服务器）中查询IP地址

（2）如果没有找到，本地域名服务器会向根域名服务器发送一个请求

（3）如果根域名服务器中也不存在该域名，但判定这个域名属于“com”域，则本地域名服务器会向com顶级域名服务器发送一个请求

（4）如果com顶级域名服务器没有找到该域名，但判定这个域名属于“google.com”域，则本地域名服务器会向google.com域名服务器发送一个请求，以此类推

（5）直到本地域名服务器得到域名对应的IP地址，并将其缓存到本地，供下次查询使用

（6）综上，网址的解析过程为.->.com->google.com->www.google.com.。
## DNS用的是TCP协议还是UDP协议
DNS在区域传输的时候使用TCP协议，其他时候使用UDP协议。<br>
区域传送使用TCP而不是UDP，因为数据同步传送的数据量比一个请求应答的数据量要多得多<br>
域名解析时使用UDP协议：<br>
客户端向DNS服务器查询域名，一般返回的内容都不超过512字节，用UDP传输即可。不用经过三次握手，这样DNS服务器负载更低，响应更快。理论上说，客户端也可以指定向DNS服务器查询时用TCP，但事实上，很多DNS服务器进行配置的时候，仅支持UDP查询包。

## cookie是什么
cookie是什么，cookie就是一种浏览器管理状态的一个文件，它有name，也有value，后面那些看不见的是Domain、path等等，
```js
name -----Cookie的名称
value ----- 值
Domain(领域，范围)----- 可以访问该Cookie的域名
path -----该Cookie的使用路径。如果设置为/path/，则只有路径为/path/的页面可以访问该Cookie。如果设置为/，则本域名下的所有页面都可以访问该Cookie。
Max Age （expires(失效，终止;到期;)）-----该Cookie失效的时间，单位为秒，也常和Expires一起使用，通过它可以计算出其有效时间。Max Age如果为正数，则该Cookie在Max Age秒之后失效。如果为负数，则关闭浏览器时Cookie即失效，浏览器也不会以任何形式保存该Cookie。
httponly----- 若此属性为true，则只有在HTTP头中会带有此Cookie的信息，而不能通过document.cookie来访问此Cookie。
size ----- 此Cookie的大小。
Secure (安全,安心的)-----该Cookie是否仅被使用安全协议传输。安全协议有HTTPS和SSL等，在网络上传输数据之前先将数据加密。默认为false。
SameSite(same 同样的 site 场地)----- Cookie 的SameSite属性用来限制第三方 Cookie，从而减少安全风险。
它可以设置三个值。
Strict 完全禁止第三方 Cookie 跨站点时，任何情况下都不会发送 Cookie。换言之，只有当前网页的 URL 与请求目标一致，才会带上 Cookie。
Lax ax规则稍稍放宽，大多数情况也是不发送第三方 Cookie，但是导航到目标网址的 Get 请求除外。
None Chrome 计划将Lax变为默认设置。这时，网站可以选择显式关闭SameSite属性，将其设为None。不过，前提是必须同时设置Secure属性（Cookie 只能通过 HTTPS 协议发送），否则无效。
```
cookie 原理：<br>
第一次访问网站的时候，浏览器发出请求，服务器响应请求后，会将cookie放入到响应请求中，在浏览器第二次发请求的时候，会把cookie带过去，服务端会辨别用户身份，当然服务器也可以修改cookie内容
<br>
[参考链接](https://github.com/laihuamin/JS-total/blob/master/blog/cookie.md)
## 浏览器缓存机制
![avatar](/images/http/cache.png)




