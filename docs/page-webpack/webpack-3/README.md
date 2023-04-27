## webpack 5.0  (高级)

所谓高级配置其实就是进行 Webpack 优化，让我们代码在编译/运行时性能更好~

我们会从以下角度来进行优化：

1. 提升开发体验
2. 提升打包构建速度
3. 减少代码体积
4. 优化代码运行性能

## 提升开发体验

**1.0 SourceMap**

比如我们现在的代码打包完之后，在浏览器运行，假设某个js地方出错了，编译后的js我们很难找到错误的地方。

而我们需要更准确的错误提示，来帮助我们更好的开发代码。这时候`sourceMap` 就来了

**SourceMap（源代码映射）** 是一个用来生成源代码与构建后代码一一映射的文件的方案。

它会生成一个 xxx.map 文件，里面包含源代码和构建后代码每一行、每一列的映射关系。当构建后代码出错了，会通过 xxx.map 文件，从构建后代码出错位置找到映射后源代码出错位置，从而让浏览器提示源代码文件出错位置，帮助我们更快的找到错误根源。

**怎么用**

通过查看[Webpack DevTool 文档](https://webpack.docschina.org/configuration/devtool/)可知，`SourceMap` 的值有很多种情况.

但实际开发时我们只需要关注两种情况即可：

* 开发模式：`cheap-module-source-map`
  * 优点：打包编译速度快，只包含行映射
  * 缺点：没有列映射

修改`webpack.dev.js`
```js
module.exports = {
  // 其他省略
  mode: "development",
  devtool: "cheap-module-source-map",
};
```
这样我们js写错的时候，浏览器的报错就会给我们定位到哪个js文件的哪一行出错了。

* 生产模式：`source-map`
  * 优点：包含行/列映射
  * 缺点：打包编译速度更慢

```js
module.exports = {
  // 其他省略
  mode: "production",
  devtool: "source-map",
};
```

## 提升打包构建速度

**1.0 HotModuleReplacement**

**为什么**

开发时我们修改了其中一个模块代码，Webpack 默认会将所有模块全部重新打包编译，速度很慢。

所以我们需要做到修改某个模块代码，就只有这个模块代码需要重新打包编译，其他模块不变，这样打包速度就能很快。

`HotModuleReplacement（HMR/热模块替换）：`在程序运行中，替换、添加或删除模块，而无需重新加载整个页面。

**修改 `webpack.dev.js`**

```js {7}
module.exports = {
  // 其他省略
  devServer: {
    host: "localhost", // 启动服务器域名
    port: "3000", // 启动服务器端口号
    open: true, // 是否自动打开浏览器
    hot: true, // 开启HMR功能（只能用于开发环境，生产环境不需要了）  其实默认就是true
  },
};
```
此时 `css` 样式经过 `style-loader` 处理，已经具备 HMR 功能了。 但是 js 还不行。

**修改`main.js`**
```js {16-20}
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
console.log('我添加了dev-server')

// 判断是否支持HMR
if(module.hot){
    module.hot.accept('./js/count.js')
    module.hot.accept('./js/sum.js')
}
```
上面这样写会很麻烦，所以实际开发我们会使用其他 loader 来解决。

比如：[vue-loader](https://github.com/vuejs/vue-loader)

为啥我只写了vue-loader呢，说实在话，我也写过react项目，自己练手的，但是只要长时间不练手，那就忘记的差不对了，目前呢
我是暂且先放弃了对react的学习了，如果真的工作需要用它，我相信，随时都可以通过学习快速上手。其实也是想跟你们说，不比焦虑
说只会vue或者只会react，真需要的时候我也相信有过几年开发经验的我们，随时都能做好准备。

**2.0 OneOf**

打包时每个文件都会经过所有 loader 处理，虽然因为 test 正则原因实际没有处理上，但是都要过一遍。比较慢。

`(我们现在写的这个是因为我们的项目太简单了，体现不出来，等你项目有好几十页面的时候马上你就能体会到)`

所以我们修改一下：`就是只能匹配上一个 loader, 剩下的就不匹配了。`

**修改webpack.dev.js**

```js {28-29,74-75}
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
                oneOf:[
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
                ]
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
        hot: true, // 开启HMR功能（只能用于开发环境，生产环境不需要了） 其实默认就是true
    },
    // 模式
    mode: "development", //development production
    devtool: "cheap-module-source-map",
}
```
生产模式也是如此配置。

**3.0 Include/Exclude**

开发时我们需要使用第三方的库或插件，所有文件都下载到 node_modules 中了。而这些文件是不需要编译可以直接使用的。

所以我们在对 js 文件处理时，要排除 node_modules 下面的文件。

* include

包含，只处理 xxx 文件

* exclude

排除，除了 xxx 文件以外其他文件都处理

其实我们之前都配置过了 我们现在换一种用法

**修改webpack.dev.js**
```js {66-67}
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
                oneOf:[
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
                        //exclude: /(node_modules)/, // 排除node_modules代码不编译
                        include: path.resolve(__dirname, "../src"), // 也可以用包含
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env']
                            }
                        }
                    }
                ]
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
        hot: true, // 开启HMR功能（只能用于开发环境，生产环境不需要了） 其实默认就是true
    },
    // 模式
    mode: "development", //development production
    devtool: "cheap-module-source-map",
}
```
生产模式也是如此配置。

**4.0 Cache**

每次打包时 js 文件都要经过 Eslint 检查 和 Babel 编译，速度比较慢。

我们可以缓存之前的 Eslint 检查 和 Babel 编译结果，这样第二次打包时速度就会更快了。

`对 Eslint 检查 和 Babel 编译结果进行缓存。`

我这没有写要经过EsLint检查的配置项，所以只要 缓存Babel即可

修改`webpack.dev.js`
```js {72-73}
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
                oneOf:[
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
                        //exclude: /(node_modules)/, // 排除node_modules代码不编译
                        include: path.resolve(__dirname, "../src"), // 也可以用包含
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env'],
                                cacheDirectory: true, // 开启babel编译缓存
                                cacheCompression: false, // 缓存文件不要压缩
                            }
                        },
                    }
                ]
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
        hot: true, // 开启HMR功能（只能用于开发环境，生产环境不需要了） 其实默认就是true
    },
    // 模式
    mode: "development", //development production
    devtool: "cheap-module-source-map",
}
```

**5.0 thread**
>多进程打包：开启电脑的多个进程同时干一件事，速度更快。

当项目越来越庞大时，打包速度越来越慢，甚至于需要一个下午才能打包出来代码。这个速度是比较慢的。

我们想要继续提升打包速度，其实就是要提升 js 的打包速度，因为其他文件都比较少。

而对 js 文件处理主要就是 eslint 、babel、Terser 三个工具，所以我们要提升它们的运行速度。

我们可以开启多进程同时处理 js 文件，这样速度就比之前的单进程打包更快了。

**需要注意：请仅在特别耗时的操作中使用，因为每个进程启动就有大约为 600ms 左右开销。**

我们启动进程的数量就是我们 CPU 的核数。

1. 如何获取 CPU 的核数，因为每个电脑都不一样
```js
// nodejs核心模块，直接使用
const os = require("os");
// cpu核数
const threads = os.cpus().length;
```
2. 下载包
```js
npm i thread-loader -D
```
3. 修改 webpack.dev.js
```js {1,4-5,70-87}
const os = require("os");
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");
// cpu核数
const threads = os.cpus().length;

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
                oneOf:[
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
                        //exclude: /(node_modules)/, // 排除node_modules代码不编译
                        include: path.resolve(__dirname, "../src"), // 也可以用包含
                        use: [
                            //使用时，需将此 loader 放置在其他 loader 之前。
                            // 放置在此 loader 之后的 loader 会在一个独立的 worker 池中运行。
                            {
                                loader: "thread-loader", // 开启多进程
                                options: {
                                    workers: threads, // 数量
                                },
                            },
                            {
                                loader: 'babel-loader',
                                options: {
                                    presets: ['@babel/preset-env'],
                                    cacheDirectory: true, // 开启babel编译缓存
                                    cacheCompression: false, // 缓存文件不要压缩
                                }
                            },
                        ],
                    }
                ]
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
        hot: true, // 开启HMR功能（只能用于开发环境，生产环境不需要了） 其实默认就是true
    },
    // 模式
    mode: "development", //development production
    devtool: "cheap-module-source-map",
}

```
我们目前打包的内容都很少，所以因为启动进程开销原因，使用多进程打包实际上会显著的让我们打包时间变得很长。

同样的生产的配置也是如此

## 减少代码体积

**1.0 Tree Shaking**
>意思就是书的抖动，它抖动干啥呢，就是枯叶给抖动下来，到我们代码中就是 把没用的代码片段给过滤掉

开发时我们定义了一些工具函数库，或者引用第三方工具函数库或组件库。

如果没有特殊处理的话我们打包时会引入整个库，但是实际上可能我们可能只用上极小部分的功能。

这样将整个库都打包进来，体积就太大了。

**注意：它依赖 ES Module**

Webpack 已经默认开启了这个功能，无需其他配置。

在我们的文件下新建一个 `until.js`

```js
export function changeString(str){
    return str.toLowerCase()
}

export function addNum(a,b){
    return a + b
}

export function getYear(){
    return new Date().getFullYear()
}
```
修改 `main.js`
```js {3,16}
import count from './js/count'
import sum from './js/sum'
import { getYear } from "./js/until";

// 引入资源，Webpack才会对其打包
import "./css/iconfont.css";
import './css/index.css'
import "./sass/index.sass";
import "./sass/index.scss";

const result1 = count(2, 1);
console.log(result1);
const result2 = sum(1, 2, 3, 4);
console.log(result2);

console.log(getYear)

// 判断是否支持HMR
if(module.hot){
    module.hot.accept('./js/count.js')
    module.hot.accept('./js/sum.js')
}
```
打包 
```js
npm run build
```
然后去看 我们`dist`目录下的main.js 发现只有 getYear方法的引用

**2.0 Babel**

Babel 为编译的每个文件都插入了辅助代码，使代码体积过大！

Babel 对一些公共方法使用了非常小的辅助代码，比如 _extend。默认情况下会被添加到每一个需要它的文件中。

你可以将这些辅助代码作为一个独立模块，来避免重复引入

`@babel/plugin-transform-runtime:` 禁用了 Babel 自动对每个文件的 runtime 注入，而是引入 `@babel/plugin-transform-runtime` 并且使所有辅助代码从这里引用。

**下载包**
```js
npm i @babel/plugin-transform-runtime -D
```
修改 webpack.prod.js
```js {93}
const os = require("os");
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// cpu核数
const threads = os.cpus().length;

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
                oneOf: [
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
                        exclude: /node_modules/, // 排除node_modules代码不编译
                        use: [
                            {
                                loader: "thread-loader", // 开启多进程
                                options: {
                                    workers: threads, // 数量
                                },
                            },
                            {
                                loader: 'babel-loader',
                                options: {
                                    presets: ['@babel/preset-env'],
                                    cacheDirectory: true, // 开启babel编译缓存
                                    cacheCompression: false, // 缓存文件不要压缩
                                    plugins: ["@babel/plugin-transform-runtime"], // 减少代码体积
                                }
                            },
                        ],
                    }
                ]
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
    devtool: 'source-map'
}
```

**3.0 Image Minimizer**

图片压缩，这个我感觉还是在项目之前处理比较好，目前就先不用这个插件了

无损压缩的话需要这几个插件
```js
npm install imagemin-gifsicle imagemin-jpegtran imagemin-optipng imagemin-svgo -D
```

## 优化代码运行性能

**1.0 Code Split**

打包代码时会将所有 js 文件打包到一个文件中，体积太大了。我们如果只要渲染首页，就应该只加载首页的 js 文件，其他文件不应该加载。

所以我们需要将打包生成的文件进行代码分割，生成多个 js 文件，渲染哪个页面就只加载某个 js 文件，这样加载的资源就少，速度就更快

代码分割（Code Split）主要做了两件事：

1. 分割文件：将打包生成的文件进行分割，生成多个 js 文件。
2. 按需加载：需要哪个文件就加载哪个文件。

修改`index.html`
```js {18}
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
<button id="btn">计算</button>
</body>
</html>

```
修改`main.js`
```js {25-32}
import count from './js/count'
import sum from './js/sum'
import { getYear } from "./js/until";

// 引入资源，Webpack才会对其打包
import "./css/iconfont.css";
import './css/index.css'
import "./sass/index.sass";
import "./sass/index.scss";
import {addCount} from "./js/math";

const result1 = count(2, 1);
console.log(result1);
const result2 = sum(1, 2, 3, 4);
console.log(result2);

console.log(getYear)

// 判断是否支持HMR
if(module.hot){
    module.hot.accept('./js/count.js')
    module.hot.accept('./js/sum.js')
}

document.getElementById("btn").onclick = function () {
    // eslint会对动态导入语法报错，需要修改eslint配置文件
    // webpackChunkName: "math"：这是webpack动态导入模块命名的方式
    // "math"将来就会作为[name]的值显示。
    import(/* webpackChunkName: "math" */ "./js/math.js").then(({ addCount }) => {
        console.log(addCount(2, 1));
    })
};

```
修改 `webpack.prod.js` 并且统一文件命名配置
```js {35-37,115-116,121-127}
const os = require("os");
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// cpu核数
const threads = os.cpus().length;

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
        filename: "js/[name].js", // 入口文件打包输出资源命名方式
        chunkFilename: "js/[name].chunk.js", // 动态导入输出资源命名方式
        assetModuleFilename: "static/media/[name].[hash][ext]", // 图片、字体等资源命名方式（注意用hash
        clean:true,
    },
    // 加载器
    module: {
        rules: [
            {
                oneOf: [
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
                        //generator:{
                            // 将图片文件输出到 static/imgs 目录中
                            // 将图片文件命名 [hash:10][ext][query]
                            // [hash:8]: hash值取10位
                            // [ext]: 使用之前的文件扩展名
                            // [query]: 添加之前的query参数
                        //     filename:'static/imgs/[hash:10][ext][query]'
                        // }
                    },
                    {
                        test: /\.(ttf|woff2?|mp3|map4|avi)$/,
                        type: "asset/resource",
                        // generator: {
                        //     filename: "static/media/[hash:8][ext][query]",
                        // },
                    },
                    {
                        test: /\.m?js$/,
                        exclude: /node_modules/, // 排除node_modules代码不编译
                        use: [
                            {
                                loader: "thread-loader", // 开启多进程
                                options: {
                                    workers: threads, // 数量
                                },
                            },
                            {
                                loader: 'babel-loader',
                                options: {
                                    presets: ['@babel/preset-env'],
                                    cacheDirectory: true, // 开启babel编译缓存
                                    cacheCompression: false, // 缓存文件不要压缩
                                    plugins: ["@babel/plugin-transform-runtime"], // 减少代码体积
                                }
                            },
                        ],
                    }
                ]
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
            //filename: "static/css/main.css",
            filename: "static/css/[name].css",
            chunkFilename: "static/css/[name].chunk.css",
        }),
        // css压缩
        new CssMinimizerPlugin(),
    ],
    optimization:{
        // 代码分割配置
        splitChunks: {
            chunks: "all", // 对所有模块都进行分割
            // 其他内容用默认配置即可
        },
    },
    // 开发服务器
    // devServer: {
    //     host: "localhost", // 启动服务器域名
    //     port: "3000", // 启动服务器端口号
    //     open: true, // 是否自动打开浏览器
    // },
    // 模式
    mode: "production", //development production
    devtool: 'source-map'
}
```

**2.0 Preload / Prefetch**

我们前面已经做了代码分割，同时会使用 import 动态导入语法来进行代码按需加载（我们也叫懒加载，比如路由懒加载就是这样实现的）。

但是加载速度还不够好，比如：是用户点击按钮时才加载这个资源的，如果资源体积很大，那么用户会感觉到明显卡顿效果。

我们想在浏览器空闲时间，加载后续需要使用的资源。我们就需要用上 `Preload` 或 `Prefetch` 技术。

* `Preload：`告诉浏览器立即加载资源。

* `Prefetch：`告诉浏览器在空闲时才开始加载资源。

它们共同点：

* 都只会加载资源，并不执行。
* 都有缓存。

它们区别：

* Preload加载优先级高，Prefetch加载优先级低。
* Preload只能加载当前页面需要使用的资源，Prefetch可以加载当前页面资源，也可以加载下一个页面需要使用的资源。

总结：

* 当前页面优先级高的资源用 Preload 加载。
* 下一个页面需要使用的资源用 Prefetch 加载。

它们的问题：兼容性较差。

* 我们可以去 [Can I Use](https://caniuse.com/?search=Preload) 网站查询 API 的兼容性问题。
* `Preload` 相对于 `Prefetch` 兼容性好一点。

**下载包**

npm i @vue/preload-webpack-plugin -D

配置 `webpack.prod.js`
```js
+ const PreloadWebpackPlugin = require("@vue/preload-webpack-plugin");

// plugins里面加
new PreloadWebpackPlugin({
  rel: "preload", // preload兼容性更好
  as: "script",
  // rel: 'prefetch' // prefetch兼容性更差
}),
```

**3.0 Network Cache**

**4.0 Core-js**

**5.0 Core-js**

开发 Web App 项目，项目一旦处于网络离线情况，就没法访问了。

我们希望给项目提供离线体验。

渐进式网络应用程序(progressive web application - PWA)：是一种可以提供类似于 native app(原生应用程序) 体验的 Web App 的技术。

其中最重要的是，在 `离线(offline)` 时应用程序能够继续运行功能。

内部通过 `Service Workers` 技术实现的。
