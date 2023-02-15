## Node
>来说说为啥我要学习node 我不是为了想要构建 服务端才学的node 因为我之前
>已经学习了php了，也构建了 一个商城，最近工作基本稳定，我也闲下来思考了
>一下我的进阶之路，思来想去还是得学node，为什么呢？因为我们现在前端很多构建
>工具都是基于node开发的，不学不行啊！

**什么是NodeJS**<br>
JS是脚本语言，脚本语言都需要一个解析器才能运行。对于写在HTML页面里的JS，浏览器充当了解析器的角色。而对于需要独立运行的JS，NodeJS就是一个解析器。

每一种解析器都是一个运行环境，不但允许JS定义各种数据结构，进行各种计算，还允许JS使用运行环境提供的内置对象和方法做一些事情。例如运行在浏览器中的JS的用途是操作DOM，浏览器就提供了document之类的内置对象。而运行在NodeJS中的JS的用途是操作磁盘文件或搭建HTTP服务器，NodeJS就相应提供了fs、http等内置对象。

总结：Node.js 是一个基于Chrome V8引擎的javascript运行环境。
注意：Node.js 无法调用DOM和BOM等浏览器内置API。

**有啥用处**<br>
NodeJS的作者说，他创造NodeJS的目的是为了实现高性能Web服务器，他首先看重的是事件机制和异步IO模型的优越性，而不是JS。但是他需要选择一种编程语言实现他的想法，这种编程语言不能自带IO功能，并且需要能良好支持事件机制。JS没有自带IO功能，天生就用于处理浏览器中的DOM事件，并且拥有一大群程序员，因此就成为了天然的选择。
 
***IO是啥***<br>
我们都知道unix世界里、一切皆文件、而文件是什么呢？文件就是一串二进制流而已、不管socket、还是FIFO、管道、终端、对我们来说、一切都是文件、一切都是流、在信息交换的过程中、我们都是对这些流进行数据的收发操作、简称为I/O操作(input and output)

**如何运行**
* 打开终端，键入node进入命令交互模式，可以输入一条代码语句后立即执行并显示结果，例如：
>$ node <br>
>\> console.log('Hello World!')<br>
>Hello World!<br>

* 如果要运行一大段代码的话，可以先写一个JS文件再运行。例如有以下hello.js。
``` 
function hello() {
    console.log('Hello World!');
}
hello();
```
写好后在终端下键入node hello.js运行，结果如下：
>$ node hello.js<br>
>Hello World!

(注意不用进入node交互模式，需要在此文件下打开cmd,不能在其他文件夹下面)

**模块**

在编写每个模块时，都有require、exports、module三个预先定义好的变量可供使用

**require**

require函数用于在当前模块中加载和使用别的模块，传入一个模块名，返回一个模块导出对象
```
 var foo1 = require('./gj/foo')
 var foo2 = require('/node/practice/gj/foo')
 console.log(foo1) // { hello: [Function], a: 5 }
 console.log(foo2) // { hello: [Function], a: 5 }
// foo1至foo2中保存的是同一个模块的导出对象。
```
另外，可以使用以下方式加载和使用一个JSON文件。
```
 var data = require('./data.json');
```
**exports**

exports对象是当前模块的导出对象，用于导出模块公有方法和属性。别的模块通过require函数使用当前模块时得到的就是当前模块的exports对象。以下例子中导出了一个公有方法。
```
foo.js 文件内容
exports.hello = function(){
    console.log(1111)
}
exports.a = 5;
```
**module**

通过module对象可以访问到当前模块的一些相关信息，但最多的用途是替换当前模块的导出对象。例如模块导出对象默认是一个普通对象，如果想改成一个函数的话，可以使用以下方式。
```
 module.exports = function () {
     console.log('Hello World!');
 };

上面的foo文件可以这样修改
 function hello(){
    console.log(1111)
}
var a = 5;
module.export={ hello, a }
引入之后输出的结果是一样的 
// { hello: [Function], a: 5 }
```
***模块初始化***

一个模块中的JS代码仅在模块第一次被使用时执行一次，并在执行过程中初始化模块的导出对象。之后，缓存起来的导出对象被重复利用。
```
 新模块 count.js
 var num = 1;
function count(){
    num++
    cosnole.log(num)
} 
exports.count = count;

var count1 = require('./gj/count')
var count2 = require('./gj/count')
var count3 = require('./gj/count')
console.log(count1.count()) // 2
console.log(count2.count()) // 3
console.log(count3.count()) // 4
```
可以看到，counter.js并没有因为被require了两次而初始化两次。

***主模块***

通过命令行参数传递给NodeJS以启动程序的模块被称为主模块。主模块负责调度组成整个程序的其它模块完成工作。例如通过以下命令启动程序时，main.js就是主模块。
>node main.js 

(注意node里面是不能用es6的export和import的，因为node用的是commonJS的模块化，如果想用得引插件，我这边就先不讲了)

**代码的组织和部署**
>编写任何的程序，都要有个良好的开端，首先需要准备好代码的目录结构和部署方式，
>就如同盖房子要先打地基一样。

**模块路径解析规则**
require函数支持斜杠(/),相对路径(./),但是这两种路径在模块之间都建立了强耦合关系，
一旦模块存放的位置发生变化，与之对应的模块代码就得修改。因此require函数支出第三种
形式的路径，写法类似于 foo/bar,并依次按照以下规则解析路径，直到找到模块位置。
<br>
1. 内置模块<br>
    如果传递给require函数的是NodeJS内置模块名称，不做路径解析，直接返回内部模块的导出对象，例如require('fs')。

2. node_modules目录
    NodeJS定义了一个特殊的node_modules目录用于存放模块。例如某个模块的绝对路径是/home/user/hello.js，在该模块中使用require('foo/bar')方式加载模块时，则NodeJS依次尝试使用以下路径。
>/home/user/node_modules/foo/bar <br>
>/home/node_modules/foo/bar <br>
>/node_modules/foo/bar <br>

**包（package）**

js模块的基本单位是单个js文件，但复杂些的模块往往由多个子模块组成，
为了便于管理和使用，我们可以把由多个子模块组成的大模块称做包，并把所有子模块放在同一个目录里。

在组成一个包的所有子模块中，需要有一个入口模块，入口模块的导出对象被作为包的导出对象。例如有以下目录结构。
```
 - /home/user/lib/
     - cat/
         head.js
         body.js
         main.js
```
其中cat目录定义了一个包，其中包含3个子模块，main.js作为入口模块，其内容如下：
```
 var head = require('./head');
 var body = require('./body');
 
 exports.create = function (name) {
     return {
         name: name,
         head: head.create(),
         body: body.create()
     };
 };
```
在其它模块里使用包的时候，需要加载包的入口模块。接着上例，使用require('/home/user/lib/cat/main')能达到目的，但是入口模块名称出现在路径里看上去不是个好主意。因此我们需要做点额外的工作，让包使用起来更像是单个模块。

**index.js**

当模块的文件名是index.js，加载模块时可以使用模块所在目录的路径代替模块文件路径，因此接着上例，以下两条语句等价。
>var cat = require('/home/user/lib/cat'); <br>
>var cat = require('/home/user/lib/cat/index');

这样处理后，就只需要把包目录路径传递给require函数，感觉上整个目录被当作单个模块使用，更有整体感。

**package.json**

如果想自定义入口模块的文件名和存放位置，就需要在包目录下包含一个package.json文件，并在其中指定入口模块的路径。上例中的cat模块可以重构如下。
```
 - /home/user/lib/
     - cat/
         + doc/
         - lib/
             head.js
             body.js
             main.js
         + tests/
         package.json
```
其中package.json内容如下。
```
 {
     "name": "cat",
     "main": "./lib/main.js"
 }
```
如此一来，就同样可以使用require('/home/user/lib/cat')的方式加载模块。NodeJS会根据包目录下的package.json找到入口模块所在位置。

**工程目录**

现在我们可以来完整地规划一个工程目录了。以编写一个命令行程序为例，一般我们会同时提供命令行模式和API模式两种使用方式，并且我们会借助三方包来编写代码。除了代码外，一个完整的程序也应该有自己的文档和测试用例。因此，一个标准的工程目录都看起来像下边这样。
```
  /home/user/workspace/node-echo/   # 工程目录
     - bin/                          # 存放命令行相关代码
         node-echo
     + doc/                          # 存放文档
     - lib/                          # 存放API相关代码
         echo.js
     - node_modules/                 # 存放三方包
         + argv/
     + tests/                        # 存放测试用例
     package.json                    # 元数据文件
     README.md                       # 说明文件
```
其中部分文件内容如下：
```
/* bin/node-echo */
var argv = require('argv'),
    echo = require('../lib/echo');
console.log(echo(argv.join(' ')));

/* lib/echo.js */
module.exports = function (message) {
    return message;
};

/* package.json */
{
    "name": "node-echo",
    "main": "./lib/echo.js"
} 
```
以上例子中分类存放了不同类型的文件，并通过node_moudles目录直接使用三方包名加载模块。此外，定义了package.json之后，node-echo目录也可被当作一个包来使用。

**NPM**

NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：

* 允许用户从NPM服务器下载别人编写的三方包到本地使用。
* 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
* 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。

可以看到，NPM建立了一个NodeJS生态圈，NodeJS开发者和用户可以在里边互通有无。以下分别介绍这三种场景下怎样使用NPM。

```
 1. 下载三方包
    npm install argv 
 2. 下载指定版本的话，可以在包名后边加上@<version>
    npm install argv@0.0.1
```
下载好之后，argv包就放在了工程目录下的node_modules目录中，因此在代码中只需要通过require('argv')的方式就好，无需指定三方包路径。
<br>
如果使用到的三方包比较多，在终端下一个包一条命令地安装未免太人肉了。因此NPM对package.json的字段做了扩展，允许在其中申明三方包依赖。因此，上边例子中的package.json可以改写如下：
```
 {
     "name": "node-echo",
     "main": "./lib/echo.js",
     "dependencies": {
         "argv": "0.0.2"
     }
 }
```
这样处理后，在工程目录下就可以使用npm install命令批量安装三方包了。更重要的是，当以后node-echo也上传到了NPM服务器，别人下载这个包时，NPM会根据包中申明的三方包依赖自动下载进一步依赖的三方包。例如，使用npm install node-echo命令时，NPM会自动创建以下目录结构。
```
 - project/
     - node_modules/
         - node-echo/
             - node_modules/
                 + argv/
             ...
     ...
```
如此一来，用户只需关心自己直接使用的三方包，不需要自己去解决所有包的依赖关系。

**发布代码**

第一次使用NPM发布代码前需要注册一个账号。终端下运行npm adduser，之后按照提示做即可。账号搞定后，接着我们需要编辑package.json文件，加入NPM必需的字段。接着上边node-echo的例子，package.json里必要的字段如下。
```
 {
     "name": "node-echo",           # 包名，在NPM服务器上须要保持唯一
     "version": "1.0.0",            # 当前版本号
     "dependencies": {              # 三方包依赖，需要指定包名和版本号
         "argv": "0.0.2"
       },
     "main": "./lib/echo.js",       # 入口模块位置
     "bin" : {
         "node-echo": "./bin/node-echo"      # 命令行程序名和主模块位置
     }
 }
```
之后，我们就可以在package.json所在目录下运行npm publish发布代码了。

以上算是我总结的 node的一些概念知识，应该大部分也适用于你，毕竟我也是新手。
我们的共同点，总是相似的很多。






























