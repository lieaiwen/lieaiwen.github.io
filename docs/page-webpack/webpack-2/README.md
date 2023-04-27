# webpack 5.0  (基础)

## 为什么需要打包工具？

开发时，我们会使用框架（React、Vue），ES6 模块化语法，Less/Sass 等 css 预处理器等语法进行开发。

这样的代码要想在浏览器运行必须经过编译成浏览器能识别的 JS、Css 等语法，才能运行。

所以我们需要打包工具帮我们做完这些事。

除此之外，打包工具还能压缩代码、做兼容性处理、提升代码性能等。

`Webpack 是一个静态资源打包工具。`

我们将 `Webpack` 输出的文件叫做 `bundle`


## 开始使用
**1. 资源目录**
```js
webpack_code # 项目根目录（所有指令必须在这个目录运行）
    └── src # 项目源码目录
        ├── js # js文件目录
        │   ├── count.js
        │   └── sum.js
        └── main.js # 项目主文件
```
**2. 创建文件**

* count.js
```js
export default function count(x, y) {
  return x - y;
}
```
* sum.js
```js
export default function sum(...args) {
    return args.reduce((p, c) => p + c, 0);
}
```
* main.js
```
import count from "./js/count";
import sum from "./js/sum";

console.log(count(2, 1));
console.log(sum(1, 2, 3, 4));
```

**3. 下载依赖**

打开终端，来到项目根目录。运行以下指令：
```js
npm init -y
```
此时会生成一个基础的 `package.json` 文件。

安装webpack 和webpack-cli
```js
npm i webpack webpack-cli -D
```

**4. 启用 Webpack**

* 开发模式
```js
npx webpack ./src/main.js --mode=development
```
* 生产模式
```js
npx webpack ./src/main.js --mode=production
```

`npx webpack:` 是用来运行本地安装 `Webpack` 包的。

`./src/main.js:` 指定 `Webpack` 从 `main.js` 文件开始打包，不但会打包 `main.js，`还会将其依赖也一起打包进来。

`--mode=xxx：`指定模式（环境）。

**Tips:**
>首先,我们需要了解的是。npx是npm上的一个命令
>npx侧重于执行命令的,执行某个模块命令。虽然会自动安装模块,但是重在执行某个命令

**5. 观察输出文件**

默认 `Webpack` 会将文件打包输出到 `dist` 目录下，我们查看 `dist` 目录会发现 生成了一个`main.js` 文件


**其它**

`Webpack` 本身功能比较少，只能处理 `js` 资源，一旦遇到 `css` 等其他资源就会报错。

所以我们学习 `Webpack`，就是主要学习如何处理其他资源。


## 基本配置

**5 大核心概念**

1. entry（入口）
>指示 Webpack 从哪个文件开始打包

2. output（输出）
>指示 Webpack 打包完的文件输出到哪里去，如何命名等

3. loader（加载器）
>webpack 本身只能处理 js、json 等资源，其他资源需要借助 loader，Webpack 才能解析

4. plugins（插件）
>扩展 Webpack 的功能

5. mode（模式）
>主要由两种模式：
>>开发模式：development<br>
>>生产模式：production

**准备 Webpack 配置文件**

在项目根目录下新建文件：`webpack.config.js`

```js
module.exports = {
    // 入口
    entry: "",
    // 输出
    output: {},
    // 加载器
    module: {
        rules: [],
    },
    // 插件
    plugins: [],
    // 模式
    mode: "",
}
```
Webpack 是基于 Node.js 运行的，所以采用 `Common.js` 模块化规范

**修改配置文件**
```js
// Node.js的核心模块，专门用来处理文件路径
const path = require("path");

module.exports = {
  // 入口
  // 相对路径和绝对路径都行
  entry: "./src/main.js",
  // 输出
  output: {
    // path: 文件输出目录，必须是绝对路径
    // path.resolve()方法返回一个绝对路径
    // __dirname 当前文件的文件夹绝对路径
    path: path.resolve(__dirname, "dist"),
    // filename: 输出文件名
    filename: "main.js",
  },
  // 加载器
  module: {
    rules: [],
  },
  // 插件
  plugins: [],
  // 模式
  mode: "development", // 开发模式
};
```
运行指令：`npx webpack`,同样的会在`dist`目录下 生成 `main.js`

此时功能和之前一样，也不能处理样式资源

**小结**

`Webpack` 将来都通过 `webpack.config.js` 文件进行配置，来增强 `Webpack` 的功能

我们后面会以两个模式来分别搭建 `Webpack` 的配置，先进行开发模式，再完成生产模式

## 处理样式资源

Webpack 本身是不能识别样式资源的，所以我们需要借助 Loader 来帮助 Webpack 解析样式资源

我们找 Loader 都应该去官方文档中找到对应的 Loader，然后使用

官方文档找不到的话，可以从社区 Github 中搜索查询

[Webpack 官方 Loader 文档](https://webpack.docschina.org/loaders/)


**1.0 处理 Css 资源**
<hr>

**下载包**
```js
npm i css-loader style-loader -D
```
注意：需要下载两个 loader

**功能介绍**

* `css-loader：`负责将 Css`文件编译成 Webpack能识别的模块
* `style-loader：`会动态创建一个 Style 标签，里面放置 Webpack 中 Css 模块内容

此时样式就会以 Style 标签的形式在页面上生效

**配置 `webpack.config.js`**

```js
const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        // 用来匹配 .css 结尾的文件
        test: /\.css$/,
        // use 数组里面 Loader 执行顺序是从右到左
        use: [
            "style-loader", // 将js中的css通过创建style标签添加到html文件中
            "css-loader"], // 将css资源编译成commonjs的模块到js中
      },
    ],
  },
  plugins: [],
  mode: "development",
};
```
**添加 Css 资源**

* 新增文件`src/css/index.css`

```js
.box1 {
  width: 100px;
  height: 100px;
  background-color: pink;
}
```

* 修改`main.js`文件
```
import count from "./js/count";
import sum from "./js/sum";
// 引入 Css 资源，Webpack才会对其打包
import "./css/index.css";

console.log(count(2, 1));
console.log(sum(1, 2, 3, 4));
```
* 修改`public/index.html`文件
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>webpack5</title>
  </head>
  <body>
    <h1>Hello Webpack5</h1>
    
    <!-- 准备一个使用样式的 DOM 容器 -->
    <div class="box1"></div>
    
    <!-- 引入打包后的js文件，才能看到效果 -->
    <script src="../dist/main.js"></script>
  </body>
</html>
```

**运行指令**
```js
npx webpack
```
打开 index.html 页面查看效果

**2.0 处理 Sass 和 Scss 资源**

<hr>

**下载包**
```js
npm i sass-loader sass -D
```
注意：需要下载两个 loader

**功能介绍**

* `sass-loader：`负责将 Sass 文件编译成 css 文件
* `sass：` `sass-loader` 依赖 `sass` 进行编译

此时样式就会以 Style 标签的形式在页面上生效

**配置 `webpack.config.js`**

```js
const path = require("path");

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
    },
    module: {
        rules: [
            {
                // 用来匹配 .css 结尾的文件
                test: /\.css$/,
                // use 数组里面 Loader 执行顺序是从右到左
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [],
    mode: "development",
};
```
**添加 Sass 资源**

* 新增文件`src/sass/index.sass`

```js
/* 可以省略大括号和分号 */
.box3
width: 100px
height: 100px
background-color: hotpink
```
* 新增文件`src/sass/index.scss`

```js
.box4 {
    width: 100px;
    height: 100px;
    background-color: lightpink;
}
```

* 修改`main.js`文件
```
import count from "./js/count";
import sum from "./js/sum";
// 引入资源，Webpack才会对其打包
import "./css/index.css";
import "./sass/index.sass";
import "./sass/index.scss";

console.log(count(2, 1));
console.log(sum(1, 2, 3, 4));
```
* 修改`public/index.html`文件
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>webpack5</title>
</head>
<body>
<h1>Hello Webpack5</h1>
<div class="box1"></div>
<div class="box3"></div>
<div class="box4"></div>
<script src="../dist/main.js"></script>
</body>
</html>
```

**运行指令**
```js
npx webpack
```
打开 index.html 页面查看效果







[参考链接](https://yk2012.github.io/sgg_webpack5/)










## 处理图片资源

过去在 Webpack4 时，我们处理图片资源通过 file-loader 和 url-loader 进行处理

现在 Webpack5 已经将两个 Loader 功能内置到 Webpack 里了，我们只需要简单配置即可处理图片资源

```js

const path = require("path")

module.exports = {
    // 入口
    entry: "./src/main.js",
    // 输出
    output: {
        path:path.resolve(__dirname,'dist'),
        filename: "main.js"
    },
    // 加载器
    module: {
        rules: [
            {
                // 用来匹配 .css 结尾的文件
                test: /\.css$/,
                // use 数组里面 Loader 执行顺序是从右到左
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                type: "asset",
            },
        ],
    },
    // 插件
    plugins: [],
    // 模式
    mode: "development", //
}

```

**添加图片资源**

* src/img/a.png
* src/img/avatar.jpeg
* src/img/yz.gif

**使用图片资源**

* src/css/index.css
```js
.box1 {
    width: 100px;
    height: 100px;
    background: url("../img/a.png");
    background-size: cover;
}
```
* src/sass/index.sass
```js
.box3
  width: 200px
  height: 200px
  background: url("../img/avatar.jpeg")
  background-size: cover
```
* src/sass/index.scss
```js
.box4 {
  width: 100px;
  height: 100px;
  background: url("../img/yz.gif");
  background-size: cover;
}
```

**运行指令**
```js
npx webpack
```
打开 index.html 页面查看效果

**输出资源情况**

此时如果查看 dist 目录的话，会发现多了三张图片资源

因为 Webpack 会将所有打包好的资源输出到 dist 目录下

* 为什么样式资源没有呢？

因为经过 style-loader 的处理，样式资源打包到 main.js 里面去了，所以没有额外输出出来

**对图片资源进行优化**

将小于某个大小的图片转化成 data URI 形式（Base64 格式）(其实默认就有但是我们可以自己控制大小)
```js

const path = require("path")

module.exports = {
    // 入口
    entry: "./src/main.js",
    // 输出
    output: {
        path:path.resolve(__dirname,'dist'),
        filename: "main.js"
    },
    // 加载器
    module: {
        rules: [
            {
                // 用来匹配 .css 结尾的文件
                test: /\.css$/,
                // use 数组里面 Loader 执行顺序是从右到左
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024 // 小于10kb的图片会被base64处理
                    }
                }
            },
        ],
    },
    // 插件
    plugins: [],
    // 模式
    mode: "development", //
}
```
* 优点：减少请求数量
* 缺点：体积变得更大

此时输出的图片文件就只有两张，有一张图片以 data URI 形式内置到 js 中了 （注意：需要将上次打包生成的文件清空，再重新打包才有效果）

## 修改输出资源的名称和路径

**配置**
```js {9,32-39}
const path = require("path")

module.exports = {
    // 入口
    entry: "./src/main.js",
    // 输出
    output: {
        path:path.resolve(__dirname,'dist'),
        filename: "js/main.js" // 将 js 文件输出到 static/js 目录中
    },
    // 加载器
    module: {
        rules: [
            {
                // 用来匹配 .css 结尾的文件
                test: /\.css$/,
                // use 数组里面 Loader 执行顺序是从右到左
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024 // 小于10kb的图片会被base64处理
                    }
                },
                generator:{
                    // 将图片文件输出到 static/imgs 目录中
                    // 将图片文件命名 [hash:10][ext][query]
                    // [hash:8]: hash值取10位
                    // [ext]: 使用之前的文件扩展名
                    // [query]: 添加之前的query参数
                    filename:'static/imgs/[hash:10][ext][query]'
                }
            },
        ],
    },
    // 插件
    plugins: [],
    // 模式
    mode: "development", //
}

```
**修改 index.html**
```js
<script  src="../dist/js/main.js"></script>
```
**运行指令**
```js
npx webpack
```

* 此时输出文件目录：

(注意：需要将上次打包生成的文件清空，再重新打包才有效果）

```js

dist
    |-static
        |-imgs
            |-7003350e.png
    |-js
        |-main.js
```

**自动清空上次打包资源**

修改`webpack.config.js`
```js
output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/main.js",
    clean: true, // 自动将上次打包目录资源清空
  },
```

## 处理字体图标资源

**下载字体图标文件**

打开[阿里巴巴矢量图标库](https://www.iconfont.cn/home/index);

选择想要的图标添加到购物车，统一下载到本地

**添加字体图标资源**

* src/fonts/iconfont.ttf
* src/css/iconfont.css
 
修改 `iconfont.css`
```js
@font-face {
  font-family: "iconfont"; /* Project id  */
  src: url('../fonts/iconfont.ttf?t=1681866072859') format('truetype');
}
```

`main.js`引入字体样式
```js {5}
import count from './js/count'
import sum from './js/sum'

// 引入资源，Webpack才会对其打包
import "./css/iconfont.css";
import './css/index.css'
import "./sass/index.sass";
import "./sass/index.scss";

console.log(count(2, 1));
console.log(sum(1, 2, 3, 4));
```

修改 `index.html`
```html {15-17}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>wepack5.0</title>
</head>
<body>
<h1>hell people</h1>
<!-- 准备一个使用样式的 DOM 容器 -->
<div class="box1"></div>

<div class="box3"></div>
<div class="box4"></div>

<!-- 使用字体图标 -->
<i class="iconfont">&#xe67a;</i>
<i class="iconfont icon-danganguihuan"></i>

<script  src="../dist/js/main.js"></script>

</body>
</html>
```

修改 `webpack.config.js`
```js {42-48}
const path = require("path")

module.exports = {
    // 入口
    entry: "./src/main.js",
    // 输出
    output: {
        path:path.resolve(__dirname,'dist'),
        filename: "js/main.js", // 将 js 文件输出到 static/js 目录中
        clean:true,
    },
    // 加载器
    module: {
        rules: [
            {
                // 用来匹配 .css 结尾的文件
                test: /\.css$/,
                // use 数组里面 Loader 执行顺序是从右到左
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024 // 小于10kb的图片会被base64处理
                    }
                },
                generator:{
                    // 将图片文件输出到 static/imgs 目录中
                    // 将图片文件命名 [hash:10][ext][query]
                    // [hash:8]: hash值取10位
                    // [ext]: 使用之前的文件扩展名
                    // [query]: 添加之前的query参数
                    filename:'static/imgs/[hash:10][ext][query]'
                }
            },
            {
                test: /\.(ttf|woff2?)$/,
                type: "asset/resource",
                generator: {
                    filename: "static/media/[hash:8][ext][query]",
                },
            },
        ],
    },
    // 插件
    plugins: [],
    // 模式
    mode: "development", //
}
```
`type: "asset/resource"`和`type: "asset"`的区别：

1. `type: "asset/resource"` 相当于`file-loader`, 将文件转化成 `Webpack` 能识别的资源，其他不做处理
2. `type: "asset"` 相当于`url-loader,` 将文件转化成 `Webpack` 能识别的资源，同时小于某个大小的资源会处理成 data URI 形式

**运行指令**
```js
npx webpack
```
打开index.html 页面查看效果

## 处理其他资源

开发中可能还存在一些其他资源，如音视频等，我们也一起处理了

修改配置文件 `webpack.config.js`
```js {43}
const path = require("path")

module.exports = {
    // 入口
    entry: "./src/main.js",
    // 输出
    output: {
        path:path.resolve(__dirname,'dist'),
        filename: "js/main.js", // 将 js 文件输出到 static/js 目录中
        clean:true,
    },
    // 加载器
    module: {
        rules: [
            {
                // 用来匹配 .css 结尾的文件
                test: /\.css$/,
                // use 数组里面 Loader 执行顺序是从右到左
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024 // 小于10kb的图片会被base64处理
                    }
                },
                generator:{
                    // 将图片文件输出到 static/imgs 目录中
                    // 将图片文件命名 [hash:10][ext][query]
                    // [hash:8]: hash值取10位
                    // [ext]: 使用之前的文件扩展名
                    // [query]: 添加之前的query参数
                    filename:'static/imgs/[hash:10][ext][query]'
                }
            },
            {
                test: /\.(ttf|woff2?|mp3|map4|avi)$/,
                type: "asset/resource",
                generator: {
                    filename: "static/media/[hash:8][ext][query]",
                },
            },
        ],
    },
    // 插件
    plugins: [],
    // 模式
    mode: "development", //
}
```
就是在处理字体图标资源基础上增加其他文件类型，统一处理即可

## 处理 js 资源

有人可能会问，js 资源 Webpack 不能已经处理了吗，为什么我们还要处理呢？

原因是 Webpack 对 js 处理是有限的，只能编译 js 中 ES 模块化语法，不能编译其他语法，导致 js 不能在 IE 等浏览器运行，所以我们希望做一些兼容性处理。

**Babel**

JavaScript 编译器。

主要用于将 ES6 语法编写的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中

**配置文件**

配置文件由很多种写法：

* `babel.config.*`：新建文件，位于项目根目录
  * `babel.config.js`
  * `babel.config.json`
* `.babelrc.*`：新建文件，位于项目根目录
  * `.babelrc`
  * `.babelrc.js`
  * `.babelrc.json`
* `package.json` 中 babel：不需要创建文件，在原有文件基础上写

Babel 会查找和自动读取它们，所以以上配置文件只需要存在一个即可

**具体配置**

我们以 `babel.config.js` 配置文件为例：

新建 babel.config.js
```js
module.exports = {
    // 预设
    presets: [],
};

```
**presets** 预设

简单理解：就是一组 Babel 插件, 扩展 Babel 功能

* `@babel/preset-env:` 一个智能预设，允许您使用最新的 JavaScript。
* `@babel/preset-react：`一个用来编译 React jsx 语法的预设
* `@babel/preset-typescript：`一个用来编译 TypeScript 语法的预设

**在 Webpack 中使用**

下载包
```js
npm i babel-loader @babel/core @babel/preset-env -D
```

定义 Babel 配置文件

* babel.config.js
```js
module.exports = {
  presets: ["@babel/preset-env"],
};
```
修改 main.js
```js {10-13}
import count from './js/count'
import sum from './js/sum'

// 引入资源，Webpack才会对其打包
import "./css/iconfont.css";
import './css/index.css'
import "./sass/index.sass";
import "./sass/index.scss";

const result1 = count(2, 1);
console.log(result1);
const result2 = sum(1, 2, 3, 4);
console.log(result2);
```

**重点--重点**

我再使用最新的 `@babel/core @babel/preset-env`

页面一直报错 不是 `@babel/core` 就是 `@babel/preset-env` 我大致猜测是这些依赖版本的问题和我本地node版本之间有冲突，没办法要么升级node 要么降级依赖
由于我本地node还有其它项目，也没想多装其它版本node 我选择了降低依赖版本安装了这些
```js
npm install -D babel-loader@7 babel-core babel-preset-env

"babel-core": "^6.26.3",
"babel-loader": "^7.1.5",
"babel-preset-env": "^1.7.0",
```
同样的也需要修改 `babel.config.js`
```js
module.exports = {
    presets: ["babel-preset-env"],
};
```

最后配置 `webpack.config.js`
```js {49-53}
const path = require("path")

module.exports = {
    // 入口
    entry: "./src/main.js",
    // 输出
    output: {
        path:path.resolve(__dirname,'dist'),
        filename: "js/main.js", // 将 js 文件输出到 static/js 目录中
        clean:true,
    },
    // 加载器
    module: {
        rules: [
            {
                // 用来匹配 .css 结尾的文件
                test: /\.css$/,
                // use 数组里面 Loader 执行顺序是从右到左
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024 // 小于10kb的图片会被base64处理
                    }
                },
                generator:{
                    // 将图片文件输出到 static/imgs 目录中
                    // 将图片文件命名 [hash:10][ext][query]
                    // [hash:8]: hash值取10位
                    // [ext]: 使用之前的文件扩展名
                    // [query]: 添加之前的query参数
                    filename:'static/imgs/[hash:10][ext][query]'
                }
            },
            {
                test: /\.(ttf|woff2?|mp3|map4|avi)$/,
                type: "asset/resource",
                generator: {
                    filename: "static/media/[hash:8][ext][query]",
                },
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/, // 排除node_modules代码不编译
                leader:'babel-loader',
            }
        ],
    },
    // 插件
    plugins: [],
    // 模式
    mode: "development", //development production
}
```

还有一种不需要配置`babel.config.js` 的写法

先删除 ``babel.config.js``

再修改`webpack.config.js`
```js
{
  test: /\.m?js$/,
          exclude: /(node_modules)/, // 排除node_modules代码不编译
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['babel-preset-env']
            }
          }
}
```

**运行指令**
```js
npx webpack
```
打开打包后的 `dist/js/main.js` 文件查看，会发现箭头函数等 ES6 语法已经转换了

------------变，变革蛋，我看了没有变还是箭头函数，不搞了

--中午没休息，现在头都是迷糊的，搞定了上面这个问题 用的是 `babel/core @babel/preset-env`

搞的心累 下了一个 node新版本 18 + 的搞定了 我之前的本地是 12.1.0 的 所以一直有报错

哎，一言难尽，这东西说实话确实很烦人，并且解决了也没啥成就感。

我就是这浪：刚才又试了一下 14+ 的版本也可以




我们现在打开的html页面是我们手动创建的，并且如果修改js的路径的时候都要手动修改js的引入，是不是很麻烦，我们有新的插件可以帮助我们完整这一步

## 处理 Html 资源

**下载包**
```js
npm i html-webpack-plugin -D
```
**配置**

`webpack.config.js`
```js {2,60-64}
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    // 入口
    entry: "./src/main.js",
    // 输出
    output: {
        path:path.resolve(__dirname,'dist'),
        filename: "js/main.js", // 将 js 文件输出到 static/js 目录中
        clean:true,
    },
    // 加载器
    module: {
        rules: [
            {
                // 用来匹配 .css 结尾的文件
                test: /\.css$/,
                // use 数组里面 Loader 执行顺序是从右到左
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024 // 小于10kb的图片会被base64处理
                    }
                },
                generator:{
                    // 将图片文件输出到 static/imgs 目录中
                    // 将图片文件命名 [hash:10][ext][query]
                    // [hash:8]: hash值取10位
                    // [ext]: 使用之前的文件扩展名
                    // [query]: 添加之前的query参数
                    filename:'static/imgs/[hash:10][ext][query]'
                }
            },
            {
                test: /\.(ttf|woff2?|mp3|map4|avi)$/,
                type: "asset/resource",
                generator: {
                    filename: "static/media/[hash:8][ext][query]",
                },
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/, // 排除node_modules代码不编译
                loader:'babel-loader',
            }
        ],
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            // 以 public/index.html 为模板创建文件
            // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
            template: path.resolve(__dirname, "public/index.html"),
        }),
    ],
    // 模式
    mode: "development", //development production
}
```
**修改`index.html` 去掉引入的 js 文件，因为 `HtmlWebpackPlugin` 会自动引入**

打包 
```js
npx webpack
```
此时 dist 目录就会输出一个 index.html 文件

## 开发服务器&自动化

每次写完代码都需要手动输入指令才能编译代码，太麻烦了，我们希望一切自动化

**下载包**
```js
npm i webpack-dev-server -D
```
**配置 webpack.config.js**
```js {73-78}
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    // 入口
    entry: "./src/main.js",
    // 输出
    output: {
        path:path.resolve(__dirname,'dist'),
        filename: "js/main.js", // 将 js 文件输出到 static/js 目录中
        clean:true,
    },
    // 加载器
    module: {
        rules: [
            {
                // 用来匹配 .css 结尾的文件
                test: /\.css$/,
                // use 数组里面 Loader 执行顺序是从右到左
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024 // 小于10kb的图片会被base64处理
                    }
                },
                generator:{
                    // 将图片文件输出到 static/imgs 目录中
                    // 将图片文件命名 [hash:10][ext][query]
                    // [hash:8]: hash值取10位
                    // [ext]: 使用之前的文件扩展名
                    // [query]: 添加之前的query参数
                    filename:'static/imgs/[hash:10][ext][query]'
                }
            },
            {
                test: /\.(ttf|woff2?|mp3|map4|avi)$/,
                type: "asset/resource",
                generator: {
                    filename: "static/media/[hash:8][ext][query]",
                },
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/, // 排除node_modules代码不编译
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }

        ],
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            // 以 public/index.html 为模板创建文件
            // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
            template: path.resolve(__dirname, "public/index.html"),
        }),
    ],
    // 开发服务器
    devServer: {
        host: "localhost", // 启动服务器域名
        port: "3000", // 启动服务器端口号
        open: true, // 是否自动打开浏览器
    },
    // 模式
    mode: "development", //development production
}
```

**运行指令**
```js
npx webpack serve 
// 或者
npx webpack-dev-server
```

**注意运行指令发生了变化**

并且当你使用开发服务器时，所有代码都会在内存中编译打包，并不会输出到 dist 目录下。（先删除在看一眼有木有）

开发时我们只关心代码能运行，有效果即可，至于代码被编译成什么样子，我们并不需要知道。

## 生产模式介绍
生产模式是开发完成代码后，我们需要得到代码将来部署上线。

这个模式下我们主要对代码进行优化，让其运行性能更好。

优化主要从两个角度出发:

1. 优化代码运行性能
2. 优化代码打包速度

**生产模式准备**

我们分别准备两个配置文件来放不同的配置

**文件目录**
```js
├── wbpack (项目根目录)
    ├── config (Webpack配置文件目录)
    │    ├── webpack.dev.js(开发模式配置文件)
    │    └── webpack.prod.js(生产模式配置文件)
    ├── node_modules (下载包存放目录)
    ├── src (项目源码目录，除了html其他都在src里面)
│    └── 略
    ├── public (项目html文件)
    │    └── index.html
    ├
    ├── babel.config.js(Babel配置文件)
    └── package.json (包的依赖管理配置文件)
```
**修改 webpack.dev.js**

因为文件目录变了，所以所有绝对路径需要回退一层目录才能找到对应的文件

新增 `webpack.dev.js`
```js {7-17,21-23,80}
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    // 入口
    // 为啥不需要修改了 因为这个入口跟一个属性(context)有关
    // 默认 context 就是我们的项目目录 当然你也可以这样配置
    /*
    * context:path.resolve(__dirname, "../")
    * entry: "./src/main.js",
    * */
    // 或者
    /*
    * context:path.resolve(__dirname, "./")
    * entry: "../src/main.js",
    * */
    entry: "./src/main.js",
    // 输出
    output: {
        path: undefined, // 开发模式没有输出，不需要指定输出目录
        filename: "static/js/main.js", // 将 js 文件输出到 static/js 目录中
        //clean:true, // 开发模式没有输出，不需要清空输出结果
    },
    // 加载器
    module: {
        rules: [
            {
                // 用来匹配 .css 结尾的文件
                test: /\.css$/,
                // use 数组里面 Loader 执行顺序是从右到左
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024 // 小于10kb的图片会被base64处理
                    }
                },
                generator:{
                    // 将图片文件输出到 static/imgs 目录中
                    // 将图片文件命名 [hash:10][ext][query]
                    // [hash:8]: hash值取10位
                    // [ext]: 使用之前的文件扩展名
                    // [query]: 添加之前的query参数
                    filename:'static/imgs/[hash:10][ext][query]'
                }
            },
            {
                test: /\.(ttf|woff2?|mp3|map4|avi)$/,
                type: "asset/resource",
                generator: {
                    filename: "static/media/[hash:8][ext][query]",
                },
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/, // 排除node_modules代码不编译
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }

        ],
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            // 以 public/index.html 为模板创建文件
            // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
            template: path.resolve(__dirname, "../public/index.html"),
        }),
    ],
    // 开发服务器
    devServer: {
        host: "localhost", // 启动服务器域名
        port: "3000", // 启动服务器端口号
        open: true, // 是否自动打开浏览器
    },
    // 模式
    mode: "development", //development production
}
```

运行开发模式的指令：
```js
npx webpack serve --config ./config/webpack.dev.js
```

新增 `webpack.prod.js`
```js {10,69,73-77,79}
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    // 入口
    entry: "./src/main.js", //
    // 输出
    output: {
        path: path.resolve(__dirname, "../dist"), // 生产模式需要输出
        filename: "js/main.js", // 将 js 文件输出到 dist/js 目录中
        clean:true,
    },
    // 加载器
    module: {
        rules: [
            {
                // 用来匹配 .css 结尾的文件
                test: /\.css$/,
                // use 数组里面 Loader 执行顺序是从右到左
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024 // 小于10kb的图片会被base64处理
                    }
                },
                generator:{
                    // 将图片文件输出到 static/imgs 目录中
                    // 将图片文件命名 [hash:10][ext][query]
                    // [hash:8]: hash值取10位
                    // [ext]: 使用之前的文件扩展名
                    // [query]: 添加之前的query参数
                    filename:'static/imgs/[hash:10][ext][query]'
                }
            },
            {
                test: /\.(ttf|woff2?|mp3|map4|avi)$/,
                type: "asset/resource",
                generator: {
                    filename: "static/media/[hash:8][ext][query]",
                },
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/, // 排除node_modules代码不编译
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }

        ],
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            // 以 public/index.html 为模板创建文件
            // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
            template: path.resolve(__dirname, "../public/index.html"),
        }),
    ],
    // 开发服务器
    // devServer: {
    //     host: "localhost", // 启动服务器域名
    //     port: "3000", // 启动服务器端口号
    //     open: true, // 是否自动打开浏览器
    // },
    // 模式
    mode: "production", //development production
}
```

运行生产模式的指令：
```js
npx webpack --config ./config/webpack.prod.js
```

**配置运行指令**

为了方便运行不同模式的指令，我们将指令定义在 package.json 中 scripts 里面

```js
{
  // 其他省略
  "scripts": {
    "start": "npm run dev",
    "dev": "npx webpack serve --config ./config/webpack.dev.js",
    "build": "npx webpack --config ./config/webpack.prod.js"
  }
}
```
以后启动指令：

* 开发模式：`npm start` 或 `npm run dev`
* 生产模式：`npm run build`

## css处理

**提取 Css 成单独文件**

Css 文件目前被打包到 js 文件中，当 js 文件加载时，会创建一个 style 标签来生成样式

这样对于网站来说，会出现闪屏现象，用户体验不好

我们应该是单独的 Css 文件，通过 link 标签加载性能才好

**下载包**
```js
npm i mini-css-extract-plugin -D
```

**配置webpack.prod.js**
```js {3,21,25,71-75}
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // 入口
    entry: "./src/main.js", //
    // 输出
    output: {
        path: path.resolve(__dirname, "../dist"), // 生产模式需要输出
        filename: "js/main.js", // 将 js 文件输出到 dist/js 目录中
        clean:true,
    },
    // 加载器
    module: {
        rules: [
            {
                // 用来匹配 .css 结尾的文件
                test: /\.css$/,
                // use 数组里面 Loader 执行顺序是从右到左
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024 // 小于10kb的图片会被base64处理
                    }
                },
                generator:{
                    // 将图片文件输出到 static/imgs 目录中
                    // 将图片文件命名 [hash:10][ext][query]
                    // [hash:8]: hash值取10位
                    // [ext]: 使用之前的文件扩展名
                    // [query]: 添加之前的query参数
                    filename:'static/imgs/[hash:10][ext][query]'
                }
            },
            {
                test: /\.(ttf|woff2?|mp3|map4|avi)$/,
                type: "asset/resource",
                generator: {
                    filename: "static/media/[hash:8][ext][query]",
                },
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/, // 排除node_modules代码不编译
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }

        ],
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            // 以 public/index.html 为模板创建文件
            // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
            template: path.resolve(__dirname, "../public/index.html"),
        }),
        // 提取css成单独文件
        new MiniCssExtractPlugin({
            // 定义输出文件名和目录
            filename: "static/css/main.css",
        }),
    ],
    // 开发服务器
    // devServer: {
    //     host: "localhost", // 启动服务器域名
    //     port: "3000", // 启动服务器端口号
    //     open: true, // 是否自动打开浏览器
    // },
    // 模式
    mode: "production", //development production
}
```

**运行命令**
```js
npm run build
```

**Css 兼容性处理**

**下载包**
```js
npm i postcss-loader postcss postcss-preset-env -D
```
**配置webpack.prod.js**
```js {23-32,39-48}
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // 入口
    entry: "./src/main.js", //
    // 输出
    output: {
        path: path.resolve(__dirname, "../dist"), // 生产模式需要输出
        filename: "js/main.js", // 将 js 文件输出到 dist/js 目录中
        clean:true,
    },
    // 加载器
    module: {
        rules: [
            {
                // 用来匹配 .css 结尾的文件
                test: /\.css$/,
                // use 数组里面 Loader 执行顺序是从右到左
                use: [MiniCssExtractPlugin.loader,
                  "css-loader",
                  {
                    loader: "postcss-loader",
                    options: {
                      postcssOptions: {
                        plugins: [
                          "postcss-preset-env", // 能解决大多数样式兼容性问题
                        ],
                      },
                    },
                  },
                ],
            },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, 
                  "css-loader",
                  {
                    loader: "postcss-loader",
                    options: {
                      postcssOptions: {
                        plugins: [
                          "postcss-preset-env", // 能解决大多数样式兼容性问题
                        ],
                      },
                    },
                  },
                  "sass-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024 // 小于10kb的图片会被base64处理
                    }
                },
                generator:{
                    // 将图片文件输出到 static/imgs 目录中
                    // 将图片文件命名 [hash:10][ext][query]
                    // [hash:8]: hash值取10位
                    // [ext]: 使用之前的文件扩展名
                    // [query]: 添加之前的query参数
                    filename:'static/imgs/[hash:10][ext][query]'
                }
            },
            {
                test: /\.(ttf|woff2?|mp3|map4|avi)$/,
                type: "asset/resource",
                generator: {
                    filename: "static/media/[hash:8][ext][query]",
                },
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/, // 排除node_modules代码不编译
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }

        ],
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            // 以 public/index.html 为模板创建文件
            // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
            template: path.resolve(__dirname, "../public/index.html"),
        }),
        // 提取css成单独文件
        new MiniCssExtractPlugin({
            // 定义输出文件名和目录
            filename: "static/css/main.css",
        }),
    ],
    // 开发服务器
    // devServer: {
    //     host: "localhost", // 启动服务器域名
    //     port: "3000", // 启动服务器端口号
    //     open: true, // 是否自动打开浏览器
    // },
    // 模式
    mode: "production", //development production
}
```
**控制兼容性**

我们可以在 package.json 文件中添加 browserslist 来控制样式的兼容性做到什么程度。
```js
{
  // 其他省略
  "browserslist": ["ie >= 8"]
}
```
想要知道更多的 browserslist 配置，查看[browserslist 文档](https://github.com/browserslist/browserslist)

以上为了测试兼容性所以设置兼容浏览器 ie8 以上。

实际开发中我们一般不考虑旧版本浏览器了，所以我们可以这样设置：

```js
{
  // 其他省略
  "browserslist": ["last 2 version", "> 1%", "not dead"]
}
```

**合并配置 webpack.prod.js**

```js {5-22,40,44}
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// 获取处理样式的Loaders
const getStyleLoaders = (preProcessor) => {
    return [
        MiniCssExtractPlugin.loader,
        "css-loader",
        {
            loader: "postcss-loader",
            options: {
                postcssOptions: {
                    plugins: [
                        "postcss-preset-env", // 能解决大多数样式兼容性问题
                    ],
                },
            },
        },
        preProcessor,
    ].filter(Boolean);
};

module.exports = {
    // 入口
    entry: "./src/main.js", //
    // 输出
    output: {
        path: path.resolve(__dirname, "../dist"), // 生产模式需要输出
        filename: "js/main.js", // 将 js 文件输出到 dist/js 目录中
        clean:true,
    },
    // 加载器
    module: {
        rules: [
            {
                // 用来匹配 .css 结尾的文件
                test: /\.css$/,
                // use 数组里面 Loader 执行顺序是从右到左
                use: getStyleLoaders(),
            },
            {
                test: /\.s[ac]ss$/,
                use: getStyleLoaders('sass-loader'),
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024 // 小于10kb的图片会被base64处理
                    }
                },
                generator:{
                    // 将图片文件输出到 static/imgs 目录中
                    // 将图片文件命名 [hash:10][ext][query]
                    // [hash:8]: hash值取10位
                    // [ext]: 使用之前的文件扩展名
                    // [query]: 添加之前的query参数
                    filename:'static/imgs/[hash:10][ext][query]'
                }
            },
            {
                test: /\.(ttf|woff2?|mp3|map4|avi)$/,
                type: "asset/resource",
                generator: {
                    filename: "static/media/[hash:8][ext][query]",
                },
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/, // 排除node_modules代码不编译
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }

        ],
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            // 以 public/index.html 为模板创建文件
            // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
            template: path.resolve(__dirname, "../public/index.html"),
        }),
        // 提取css成单独文件
        new MiniCssExtractPlugin({
            // 定义输出文件名和目录
            filename: "static/css/main.css",
        }),
    ],
    // 开发服务器
    // devServer: {
    //     host: "localhost", // 启动服务器域名
    //     port: "3000", // 启动服务器端口号
    //     open: true, // 是否自动打开浏览器
    // },
    // 模式
    mode: "production", //development production
}
```

**运行指令**
```js
npm run build
```

**Css 压缩**

**下载包**
```js
npm i css-minimizer-webpack-plugin -D
```

**配置webpack.prod.js**
```js {4,96-97}
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// 获取处理样式的Loaders
const getStyleLoaders = (preProcessor) => {
    return [
        MiniCssExtractPlugin.loader,
        "css-loader",
        {
            loader: "postcss-loader",
            options: {
                postcssOptions: {
                    plugins: [
                        "postcss-preset-env", // 能解决大多数样式兼容性问题
                    ],
                },
            },
        },
        preProcessor,
    ].filter(Boolean);
};

module.exports = {
    // 入口
    entry: "./src/main.js", //
    // 输出
    output: {
        path: path.resolve(__dirname, "../dist"), // 生产模式需要输出
        filename: "js/main.js", // 将 js 文件输出到 dist/js 目录中
        clean:true,
    },
    // 加载器
    module: {
        rules: [
            {
                // 用来匹配 .css 结尾的文件
                test: /\.css$/,
                // use 数组里面 Loader 执行顺序是从右到左
                use: getStyleLoaders(),
            },
            {
                test: /\.s[ac]ss$/,
                use: getStyleLoaders('sass-loader'),
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024 // 小于10kb的图片会被base64处理
                    }
                },
                generator:{
                    // 将图片文件输出到 static/imgs 目录中
                    // 将图片文件命名 [hash:10][ext][query]
                    // [hash:8]: hash值取10位
                    // [ext]: 使用之前的文件扩展名
                    // [query]: 添加之前的query参数
                    filename:'static/imgs/[hash:10][ext][query]'
                }
            },
            {
                test: /\.(ttf|woff2?|mp3|map4|avi)$/,
                type: "asset/resource",
                generator: {
                    filename: "static/media/[hash:8][ext][query]",
                },
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/, // 排除node_modules代码不编译
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }

        ],
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            // 以 public/index.html 为模板创建文件
            // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
            template: path.resolve(__dirname, "../public/index.html"),
        }),
        // 提取css成单独文件
        new MiniCssExtractPlugin({
            // 定义输出文件名和目录
            filename: "static/css/main.css",
        }),
        // css压缩
        new CssMinimizerPlugin(),
    ],
    // 开发服务器
    // devServer: {
    //     host: "localhost", // 启动服务器域名
    //     port: "3000", // 启动服务器端口号
    //     open: true, // 是否自动打开浏览器
    // },
    // 模式
    mode: "production", //development production
}
```

打包 运行 你就可以去看 dist目录先的文件了

## html 压缩

默认生产模式已经开启了：html 压缩和 js 压缩

不需要额外进行配置

## 总结

我们学会了 Webpack 基本使用，掌握了以下功能：

1. 两种开发模式

* 开发模式：代码能编译自动化运行
* 生产模式：代码编译优化输出

2. Webpack 基本功能

* 开发模式：可以编译 ES Module 语法
* 生产模式：可以编译 ES Module 语法，压缩 js 代码

3.0 Webpack 配置文件

* 5 个核心概念
  * entry
  * output
  * loader
  * plugins
  * mode
* devServer 配置

4.0 Webpack 脚本指令用法

* `webpack` 直接打包输出
* `webpack serve` 启动开发服务器，内存编译打包没有输出
