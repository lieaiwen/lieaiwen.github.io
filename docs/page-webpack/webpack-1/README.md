## 深入浅出 Webpack (1.0)

## 安装Webpack

在用 Webpack 执行构建任务时需要通过 webpack 可执行文件去启动构建任务，所以需要安装 webpack 可执行文件。

在开始给项目加入构建前，你需要先新建一个 Web 项目比如：
* 新建一个目录，再进入项目根目录执行 npm init 来初始化最简单的采用了模块化开发的项目；

**安装 Webpack 到本项目**

```js
// npm i -D 是 npm install --save-dev 的简写，
// 是指安装模块并保存到 package.json 的 devDependencies
// 安装指定版本
npm i -D webpack
// 接着安装 webpack-cli （此工具用于在命令行中运行 webpack）：
npm install  webpack-cli --save-dev
```
**使用 Webpack**

下面通过 Webpack 构建一个采用 CommonJS 模块化编写的项目，该项目有个网页会通过 JavaScript 在网页中显示 Hello,Webpack。

运行构建前，先把要完成该功能的最基础的 JavaScript 文件和 HTML 建立好，需要如下文件：

页面入口文件 `index.html`

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div id="app"></div>
<!--导入 Webpack 输出的 JavaScript 文件-->
<script src="./dist/bundle.js"></script>
</body>
</html>

```
JS 工具函数文件 `show.js`
```js
// 操作 DOM 元素，把 content 显示到网页上
function show(content) {
  window.document.getElementById('app').innerText = 'Hello,' + content;
}

// 通过 CommonJS 规范导出 show 函数
module.exports = show;
```
JS 执行入口文件 `main.js`
```js
// 通过 CommonJS 规范导入 show 函数
const show = require('./show.js');
// 执行 show 函数
show('Webpack');
```
Webpack 在执行构建时默认会从项目根目录下的 webpack.config.js 文件读取配置，所以你还需要新建它，其内容如下：
```js
const path = require('path');

module.exports = {
  // JavaScript 执行入口文件
  entry: './main.js',
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: 'bundle.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  }
};
```
由于 Webpack 构建运行在 Node.js 环境下，所以该文件最后需要通过 CommonJS 规范导出一个描述如何构建的 Object 对象。

此时项目目录如下：
```js
webpack-demo
|-- node_modules
|-- index.html
|-- main.js
|-- package.json
|-- package-lock.json
|-- show.js
|-- webpack.config.js
```
一切文件就绪，在项目根目录下执行 **webpack** 命令运行 Webpack 构建，
你会发现目录下多出一个 dist 目录，里面有个 bundle.js 文件，
bundle.js 文件是一个可执行的 JavaScript 文件，
它包含页面所依赖的两个模块 main.js 和 show.js 及`自执行`函数。 这时你用浏览器打开 index.html 网页将会看到 Hello,Webpack5.0。



Webpack 是一个打包模块化 JavaScript 的工具，它会从 main.js 出发，识别出源码中的模块化导入语句， 递归的寻找出入口文件的所有依赖，把入口和其所有依赖打包到一个单独的文件中。

至此你已经学会了 Webpack，接下来我们将探索 Webpack 的更多功能。（我看到这句话只想说一句话：妈的骗子，我会个蛋锤）

**npm scripts**

考虑到用 CLI 这种方式来运行本地的 webpack 副本并不是特别方便，我们可以设置一个快捷方式。调整 package.json 文件，添加一个 npm script：

package.json
```js
{
  "name": "webpack-demo",
  "version": "1.0.0",
  "description": "练习webpack",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1", 
 +  "start": "webpack"
  },
  "author": "zl",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^5.78.0",
    "webpack-cli": "^5.0.1"
  }
}

```
现在，可以使用 `npm run start` 命令，来替代我们之前使用的 `webpack` 命令来构建

## 使用 Loader
>loader:装载机

在上一节中使用 Webpack 构建了一个采用 CommonJS 规范的模块化项目，本节将继续优化这个网页的 UI，为项目引入 CSS 代码让文字居中显示，main.css 的内容如下：

```js
#app{
  text-align: center;
}
```

Webpack 把一切文件看作模块，CSS 文件也不例外，要引入 main.css 需要像引入 JavaScript 文件那样，修改入口文件 main.js 如下：

```js
// 通过 CommonJS 规范导入 CSS 模块
require('./main.css');
// 通过 CommonJS 规范导入 show 函数
const show = require('./show.js');
// 执行 show 函数
show('Webpack');
```

但是这样修改后去执行 Webpack 构建是会报错的，因为 Webpack 原生不支持解析 CSS 文件。要支持非 JavaScript 类型的文件，需要使用 Webpack 的 Loader 机制。Webpack的配置修改使用如下：

```js
const path = require('path');

module.exports = {
  // JavaScript 执行入口文件
  entry: './main.js',
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: 'bundle.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        // 用正则去匹配要用该 loader 转换的 CSS 文件
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
};
```

Loader 可以看作具有文件转换功能的翻译员，配置里的 `module.rules` 数组配置了一组规则，
告诉 Webpack 在遇到哪些文件时使用哪些 Loader 去加载和转换。 
如上配置告诉 Webpack 在遇到以 `.css` 结尾的文件时先使用 `css-loader` 读取 CSS 文件，
再交给 `style-loader` 把 CSS 内容注入到 JavaScript 里。 在配置 Loader 时需要注意的是：

* use 属性的值需要是一个由 Loader 名称组成的数组，Loader 的执行顺序是由后到前的；

想知道 Loader 具体支持哪些属性，则需要我们查阅文档，例如 css-loader 还有很多用法，我们可以在
[css-loader](https://www.webpackjs.com/loaders/css-loader/#root) 
主页 上查到。

在重新执行 Webpack 构建前要先安装新引入的 Loader：

```js
npm i -D style-loader css-loader
```
安装成功后重新执行构建时，你会发现 `bundle.js` 文件被更新了，里面注入了在 `main.css` 中写的 CSS，
而不是会额外生成一个 CSS 文件。 但是重新刷新 index.html 网页时将会发现 Hello,Webpack5.0 居中了，样式生效了！ 
也许你会对此感到奇怪，第一次看到 CSS 被写在了 JavaScript 里！这其实都是 style-loader 的功劳，
它的工作原理大概是把 CSS 内容用 JavaScript 里的字符串存储起来， 
在网页执行 JavaScript 时通过 DOM 操作动态地往 `HTML head` 标签里插入 `HTML style` 标签。 
也许你认为这样做会导致 JavaScript 文件变大并导致加载网页时间变长，想让 Webpack 单独输出 CSS 文件。
接下来将教你如何通过 Webpack Plugin 机制来实现。

给 Loader 传入属性的方式除了有 querystring 外，还可以通过 Object 传入，以上的 Loader 配置可以修改为如下：

```js
use: [
  'style-loader', 
  {
    loader:'css-loader',
    options:{
      minimize:true,
    }
  }
]
```
## 使用 Plugin
>Plugin 插件

Plugin 是用来扩展 Webpack 功能的，通过在构建流程里注入钩子实现，它给 Webpack 带来了很大的灵活性。

在上面中通过 Loader 加载了 CSS 文件，本节将通过 Plugin 把注入到 `bundle.js` 文件里的 CSS 提取到单独的文件中，配置修改如下：

```js
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // JavaScript 执行入口文件
    entry: './main.js',
    output: {
        // 把所有依赖的模块合并输出到一个 bundle.js 文件
        filename: 'bundle.js',
        // 把输出文件都放到 dist 目录下
        path: path.resolve(__dirname, './dist'),
    },
    module: {
        rules: [
            {
                // 用正则去匹配要用该 loader 转换的 CSS 文件
                test: /\.css$/,
                // 先使用 css-loader 读取 CSS 文件， 再交给 MiniCssExtractPlugin.loader 把 CSS 内容输出
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            }
        ]
    },
    //  // 从 .js 文件中提取出来 css 
    plugins: [new MiniCssExtractPlugin()],
};

```

要让以上代码运行起来，需要先安装新引入的插件：

```js
npm install --save-dev mini-css-extract-plugin
```
安装成功后重新执行构建，你会发现 dist 目录下多出一个`main.css`,
bundle.js 里也没有 CSS 代码了，再把该 CSS 文件引入到 index.html 里就完成了。

从以上代码可以看出， Webpack 是通过 plugins 属性来配置需要使用的插件列表的。 plugins 属性是一个数组，里面的每一项都是插件的一个实例，在实例化一个组件时可以通过构造函数传入这个组件支持的配置属性。

例如 mini-css-extract-plugin 插件的作用是提取出 JavaScript 代码里的 CSS 到一个单独的文件。
还有很多配置选项可以在[mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) 
的主页上查到。

## 使用 DevServer
>DevServer (开发服务)
前面的几节只是让 Webpack 正常运行起来了，但在实际开发中你可能会需要：

1. 提供 HTTP 服务而不是使用本地文件预览；
2. 监听文件的变化并自动刷新网页，做到实时预览；
3. 支持 Source Map，以方便调试。

对于这些， Webpack 都为你考虑好了。Webpack 原生支持上述第2、3点内容，
再结合官方提供的开发工具 
[DevServer](https://www.webpackjs.com/configuration/dev-server/#root) 
也可以很方便地做到第1点。 
DevServer 会启动一个 HTTP 服务器用于服务网页请求，同时会帮助启动 Webpack ，并接收 Webpack 发出的文件更变信号，通过 WebSocket 协议自动刷新网页做到实时预览。

下面为之前的小项目 Hello,Webpack 继续集成 DevServer。 首先需要安装 DevServer：

```js
npm i -D webpack-dev-server
```
安装成功后执行 webpack-dev-server 命令， DevServer 就启动了，这时你会看到控制台有一串日志输出：

``
[webpack-dev-server] Project is running at:
[webpack-dev-server] Loopback: http://localhost:8000/

``
https://www.webpackjs.com/guides/getting-started
