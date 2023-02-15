## 网络操作

不了解网络编程的程序员不是好前端，而NodeJS恰好提供了一扇了解网络编程的窗口。通过NodeJS，除了可以编写一些服务端程序来协助前端开发和测试外，还能够学习一些HTTP协议与Socket协议的相关知识，这些知识在优化前端性能和排查前端故障时说不定能派上用场

**开门红**

NodeJS本来的用途是编写高性能Web服务器，使用NodeJS内置的http模块简单实现一个HTTP服务器。

**API**

1.0 'http'模块提供两种使用方式：

---1.1 作为服务端使用时，创建一个http服务器，监听http客户端请求并返回响应。

---1.2 作为客户端使用时，发起一个http客户端请求，获取服务端响应。

首先我们来看看服务端模式下如何工作。如开门红中的例子所示，首先需要使用.createServer方法创建一个服务器，然后调用.listen方法监听端口。之后，每当来了一个客户端请求，创建服务器时传入的回调函数就被调用一次。可以看出，这是一种事件机制。

<b>HTTP请求</b>本质上是一个数据流，由请求头（headers）和请求体（body）组成。例如以下是一个完整的HTTP请求数据内容。
```
 POST / HTTP/1.1
 User-Agent: curl/7.26.0
 Host: localhost
 Accept: */*
 Content-Length: 11
 Content-Type: application/x-www-form-urlencoded
 
 Hello World
```
可以看到，空行之上是请求头，之下是请求体。HTTP请求在发送给服务器时，可以认为是按照从头到尾的顺序一个字节一个字节地以数据流方式发送的。而http模块创建的HTTP服务器在接收到完整的请求头后，就会调用回调函数。在回调函数中，除了可以使用request对象访问请求头数据外，还能把request对象当作一个只读数据流来访问请求体数据。以下是一个例子。
```
 http.createServer(function (request, response) {
     var body = [];
 
     console.log(request.method);
     console.log(request.headers);
 
     request.on('data', function (chunk) {
         body.push(chunk);
     });
 
     request.on('end', function () {
         body = Buffer.concat(body);
         console.log(body.toString());
     });
 }).listen(80);
--------
GET
{
  host: '127.0.0.1:8124',
  connection: 'keep-alive',
  'cache-control': 'max-age=0',
  'upgrade-insecure-requests': '1',
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
  'sec-fetch-site': 'none',
  'sec-fetch-mode': 'navigate',
  'sec-fetch-user': '?1',
  'sec-fetch-dest': 'document',
  'accept-encoding': 'gzip, deflate, br',
  'accept-language': 'zh-CN,zh;q=0.9'
}

```
<b>HTTP响应</b>本质上也是一个数据流，同样由响应头（headers）和响应体（body）组成。例如以下是一个完整的HTTP请求数据内容。
```
HTTP/1.1 200 OK
Content-Type: text/plain
Content-Length: 11
Date: Tue, 05 Nov 2013 05:31:38 GMT
Connection: keep-alive

Hello World 
```
在回调函数中，除了可以使用response对象来写入响应头数据外，还能把response对象当作一个只写数据流来写入响应体数据。例如在以下例子中，服务端原样将客户端请求的请求体数据返回给客户端。
```
 http.createServer(function (request, response) {
     response.writeHead(200, { 'Content-Type': 'text/plain' });
 
     request.on('data', function (chunk) {
         response.write(chunk);
     });
 
     request.on('end', function () {
         response.end();
     });
 }).listen(8124);
```
接下来我们看看客户端模式下如何工作。为了发起一个客户端HTTP请求，我们需要指定目标服务器的位置并发送请求头和请求体，以下示例演示了具体做法。
```
 var options = {
         hostname: 'www.example.com',
         port: 80,
         path: '/upload',
         method: 'POST',
         headers: {
             'Content-Type': 'application/x-www-form-urlencoded'
         }
     };
 
 var request = http.request(options, function (response) {});
 
 request.write('Hello World');
 request.end();
```
可以看到，.request方法创建了一个客户端，并指定请求目标和请求头数据。之后，就可以把request对象当作一个只写数据流来写入请求体数据和结束请求。另外，由于HTTP请求中GET请求是最常见的一种，并且不需要请求体，因此http模块也提供了以下便捷API。
```
 http.get('http://www.example.com/', function (response) {});
```
当客户端发送请求并接收到完整的服务端响应头时，就会调用回调函数。在回调函数中，除了可以使用response对象访问响应头数据外，还能把response对象当作一个只读数据流来访问响应体数据。以下是一个例子。
```
 http.get('http://www.example.com/', function (response) {
     var body = [];
 
     console.log(response.statusCode);
     console.log(response.headers);
 
     response.on('data', function (chunk) {
         body.push(chunk);
     });
 
     response.on('end', function () {
         body = Buffer.concat(body);
         console.log(body.toString());
     });
 });
-----------
200
{
  age: '520426',
  'cache-control': 'max-age=604800',
  'content-type': 'text/html; charset=UTF-8',
  date: 'Thu, 10 Dec 2020 08:45:53 GMT',
  etag: '"3147526947+gzip+ident"',
  expires: 'Thu, 17 Dec 2020 08:45:53 GMT',
  'last-modified': 'Thu, 17 Oct 2019 07:18:26 GMT',
  server: 'ECS (sjc/4E8D)',
  vary: 'Accept-Encoding',
  'x-cache': 'HIT',
  'content-length': '1256',
  connection: 'close'
}
<!doctype html>
<html>
<head>
    <title>Example Domain</title>

    <meta charset="utf-8" />
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type="text/css">
    body {
        background-color: #f0f0f2;
        margin: 0;
        padding: 0;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;

    }
    div {
        width: 600px;
        margin: 5em auto;
        padding: 2em;
        background-color: #fdfdff;
        border-radius: 0.5em;
        box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.02);
    }
    a:link, a:visited {
        color: #38488f;
        text-decoration: none;
    }
    @media (max-width: 700px) {
        div {
            margin: 0 auto;
            width: auto;
        }
    }
    </style>
</head>

<body>
<div>
    <h1>Example Domain</h1>
    <p>This domain is for use in illustrative examples in documents. You may use this
    domain in literature without prior coordination or asking for permission.</p>
    <p><a href="https://www.iana.org/domains/example">More information...</a></p>
</div>
</body>
</html>

```
**HTTPS**

https模块与http模块极为类似，区别在于https模块需要额外处理SSL证书。

在服务端模式下，创建一个HTTPS服务器的示例如下。
```
 var options = {
         key: fs.readFileSync('./ssl/default.key'),
         cert: fs.readFileSync('./ssl/default.cer')
     };
 
 var server = https.createServer(options, function (request, response) {
         // ...
     });
```
可以看到，与创建HTTP服务器相比，多了一个options对象，通过key和cert字段指定了HTTPS服务器使用的私钥和公钥。

另外，NodeJS支持SNI技术，可以根据HTTPS客户端请求使用的域名动态使用不同的证书，因此同一个HTTPS服务器可以使用多个域名提供服务。接着上例，可以使用以下方法为HTTPS服务器添加多组证书。
```
server.addContext('foo.com', {
    key: fs.readFileSync('./ssl/foo.com.key'),
    cert: fs.readFileSync('./ssl/foo.com.cer')
});

server.addContext('bar.com', {
    key: fs.readFileSync('./ssl/bar.com.key'),
    cert: fs.readFileSync('./ssl/bar.com.cer')
}); 
```
在客户端模式下，发起一个HTTPS客户端请求与http模块几乎相同，示例如下。
```
 var options = {
         hostname: 'www.example.com',
         port: 443,
         path: '/',
         method: 'GET'
     };
 
 var request = https.request(options, function (response) {});
 
 request.end();
```
但如果目标服务器使用的SSL证书是自制的，不是从颁发机构购买的，默认情况下https模块会拒绝连接，提示说有证书安全问题。在options里加入rejectUnauthorized: false字段可以禁用对证书有效性的检查，从而允许https模块请求开发环境下使用自制证书的HTTPS服务器。








