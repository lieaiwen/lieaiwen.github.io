## vue 脚手架

**1.0 开发模式配置**

新建webpack.dev.js 还是在config文件夹下
```js

const path = require('path')

// 引入方法定义环境变量 因为vue要用
const { DefinePlugin } = require('webpack');

// 下载插件对 js代码进行检查
const EslintWebpackPlugin = require('eslint-webpack-plugin');

// 处理html的资源
const HtmlWenpackPlugin = require('html-webpack-plugin');
// const {entry} = require("./webpack.dev");

// 引入vue 插件
const { VueLoaderPlugin } = require('vue-loader')

// 处理css 有很多重复的代码 要统一处理一下
// 返回处理样式loader的一个函数
const getStyleLoaders = (pre)=>{
    return [
        'vue-style-loader', // 正常style-loader 现在修改成vue-style-loader
        'css-loader',
        {
            loader:'postcss-loader',
            options:{ // 指定选项才能干活
                postcssOptions:{
                    // 智能预设 处理程度要指定一下 package.json 里面的browserslist
                    plugins:['postcss-preset-env'],
                }
            }
        },
        pre
    ].filter(Boolean)
}

module.exports = {
    // 入口文件
    entry:'./src/main.js',
    // 输出
    output:{
        path:undefined,// 开发模式可以试undefined
        filename: 'static/js/[name].js',// 输出文件的名字
        chunkFilename:'static/js/[name].chunk.js',//动态导入输出资源命名方式 也就是公共的js
        //图片、字体等资源命名方式（注意用hash）[query]其它参数
        assetModuleFilename:'static/media/[name].[hash:10][ext][query]',
    },
    module:{
        rules:[
            // 处理 css文件
            {
                test:/\.css$/,// 处理文件的正则
                // 1.0 'style-loader','css-loader' 会在html里面生成style标签插入css
                // 2.0 处理css的兼容性的话 需要 postcss-loader
                use:getStyleLoaders(),
            },
            {
                test:/\.less$/,// 处理文件的正则
                // 1.0 'style-loader','css-loader' 会在html里面生成style标签插入css
                // 2.0 处理css的兼容性的话 需要 postcss-loader
                use:getStyleLoaders("less-loader"),
            },
            {
                test:/\.s[ac]ss$/,// 处理文件的正则
                // 1.0 'style-loader','css-loader' 会在html里面生成style标签插入css
                // 2.0 处理css的兼容性的话 需要 postcss-loader
                use:getStyleLoaders("sass-loader"),
            },
            // 处理 图片
            {
                test:/\.(jpe?g|png|gif|webp|svg)$/,
                type:'asset',// 处理资源的方式 可以转base64
                // 优化
                parser:{
                    dataUrlCondition:{ // 小于 10 kb的转成base64
                        maxSize: 10 * 1024,
                    }
                }
            },
            // 处理其它资源
            // 1.0 字体图标
            {
                test:/.(woff2?|ttf)$/,
                type:'asset/resource',// 资源是什么就输出什么，不能转换其它格式（比如base64）
            },
            // 处理 js
            // 1.0 bable 对代码的转换
            {
                test:/\.js$/,
                include:path.resolve(__dirname,'../src'),//处理哪个文件
                loader: 'babel-loader',// 也需要定义一个文件 干什么事
                options:{ // 选项
                    cacheDirectory: true, // 缓存
                    cacheCompression: false,//  对缓存不压缩
                },
            },
            // 处理vue文件
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    // 处理html
    plugins: [
        // eslint对代码的检查 需要添加 eslintrc.js
        // 所有的插件都要实例化
        // new EslintWebpackPlugin({
        //     // 处理的文件范围 context 和  exclude 可以2选一 一样的效果
        //     context:path.resolve(__dirname,'../src'),
        //     exclude:'node_modules',// 不包含这个文件
        //     cache: true,// 添加缓存 第二次打包更快
        //     // 缓存路径
        //     cacheLocation:path.resolve(__dirname,'../node_modules/.cache/.eslintcache'),
        // }),
        new HtmlWenpackPlugin({
            template:path.resolve(__dirname,'../public/index.html')
        }),
        new VueLoaderPlugin(),  // 引入vue 插件
        // cross-env 定义的环境变量是给打包工具使用的
        // DefinePlugin 定义的环境变量是给源代码使用的，从而解决vue3.0 页面警告的问题
        new DefinePlugin({
            __VUE_OPTIONS_API__: "true",
            __VUE_PROD_DEVTOOLS__: "false",
        }),
    ],

    // 开发模式
    mode: 'development',
    devtool:'cheap-module-source-map' ,// 为了开发模式是代码显示更加友好
    // 为了控制打包的体积 不要都打包到一个文件中
    optimization:{
        splitChunks:{  //代码分割
            chunks:'all' ,
        },
        // 提取runtime文件
        runtimeChunk:{
            name: entrypoint => `runtime~${entrypoint.name}.js` // runtime文件命名规则
        }
    },
    // webpack 解析模块加载项
    resolve:{
      // 自动补全文件扩展名
      extensions:['.vue','.js','.json']
    },
    // 开发环境自动化配置
    devServer:{
        host:'localhost', // 域名
        port:3000, // 端口号
        open:true, // 打开浏览器
        hot: true,// 热更新
        historyApiFallback:true,// 解决前端路由刷新404问题
    }
}
```
package.json
```js
{
  "name": "vue-webpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npm run dev",
    "dev": "cross-env NODE_ENV=development webpack serve --config ./config/webpack.dev.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "browserslist": [
    "last 2 version",
    "> 1%",
    "not dead"
  ],
  "devDependencies": {
    "@babel/eslint-parser": "^7.21.3",
    "@vue/cli-plugin-babel": "^5.0.8",
    "cross-env": "^7.0.3",
    "css-loader": "^6.7.3",
    "eslint-plugin-vue": "^9.11.0",
    "eslint-webpack-plugin": "^4.0.1",
    "html-webpack-plugin": "^5.5.1",
    "less-loader": "^11.1.0",
    "postcss-loader": "^7.2.4",
    "postcss-preset-env": "^8.3.2",
    "sass-loader": "^13.2.2",
    "vue-loader": "^17.1.0",
    "vue-style-loader": "^4.1.3",
    "vue-template-compiler": "^2.7.14",
    "webpack": "^5.80.0",
    "webpack-cli": "^5.0.2",
    "webpack-dev-server": "^4.13.3"
  },
  "dependencies": {
    "vue": "^3.2.47",
    "vue-router": "^4.1.6"
  }
}
```
babel.config.js
```js
module.exports = {
    presets: ["@vue/cli-plugin-babel/preset"], // 用此预设编译 vue文件
}
```

新建src文件

```js
// main.js
import  { createApp } from 'vue'; // 引入方法准备创建 vue
import Router from './router/index'

import App from './App' // 引入组件

createApp(App).use(Router).mount(document.getElementById('app'))

// App.vue
<template>
<div>
<h1 class="title">hello app222</h1>
<router-link to="/home">home</router-link>
<router-link to="/about">about</router-link>

<router-view/>
</div>
</template>

<script>
  import Home from './views/home'
  export default {
    name:'App',
    components:{
        Home
    },
  data() {
    return {
        msg: 'Welcome to scalable'
    }
  },
}
</script>

<style >
 .title{
    border:1px solid deeppink;
}
</style>


// router/index.js
import { createRouter,createWebHistory } from 'vue-router'

const Home = () => import('../views/home')
const About = () => import('../views/about')

export default createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/about',
            component:About,
        }
    ]
})
// views/about.vue
<template>
    <div>
        <h3>我是about</h3>
    </div>
</template>

<script>
export default {
  data() {
    return {
        msg: 'Welcome to scalable'
    }
  },
}
</script>

// views/home.vue
<template>
    <div>
        <div>我是home页面</div>
    </div>
</template>

<script>
  export default {
  data() {
    return {
        msg: 'Welcome to scalable'
    }
  },
}
</script>
```

**注意** 对应的包要一个一个下载

**2.0 生产模式配置**

```js
// webpack.prod.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const { DefinePlugin } = require("webpack");

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
    entry: "./src/main.js",
    output: {
        path: undefined,
        filename: "static/js/[name].[contenthash:10].js",
        chunkFilename: "static/js/[name].[contenthash:10].chunk.js",
        assetModuleFilename: "static/js/[hash:10][ext][query]",
        clean: true,
    },
    module: {
        rules: [
            {
                // 用来匹配 .css 结尾的文件
                test: /\.css$/,
                // use 数组里面 Loader 执行顺序是从右到左
                use: getStyleLoaders(),
            },
            {
                test: /\.less$/,
                use: getStyleLoaders("less-loader"),
            },
            {
                test: /\.s[ac]ss$/,
                use: getStyleLoaders("sass-loader"),
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024, // 小于10kb的图片会被base64处理
                    },
                },
            },
            {
                test: /\.(ttf|woff2?)$/,
                type: "asset/resource",
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, "../src"),
                loader: "babel-loader",
                options: {
                    cacheDirectory: true,
                    cacheCompression: false,
                    plugins: [
                        // "@babel/plugin-transform-runtime" // presets中包含了
                    ],
                },
            },
            // vue-loader不支持oneOf
            {
                test: /\.vue$/,
                loader: "vue-loader", // 内部会给vue文件注入HMR功能代码
                options: {
                    // 开启缓存
                    cacheDirectory: path.resolve(
                        __dirname,
                        "node_modules/.cache/vue-loader"
                    ),
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html"),
        }),
        new MiniCssExtractPlugin({
            filename: "static/css/[name].[contenthash:10].css",
            chunkFilename: "static/css/[name].[contenthash:10].chunk.css",
        }),
        new VueLoaderPlugin(),
        new DefinePlugin({
            __VUE_OPTIONS_API__: "true",
            __VUE_PROD_DEVTOOLS__: "false",
        }),
    ],
    optimization: {
        // 压缩的操作
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserWebpackPlugin(),
        ],
        splitChunks: {
            chunks: "all",
        },
        runtimeChunk: {
            name: (entrypoint) => `runtime~${entrypoint.name}`,
        },
    },
    resolve: {
        extensions: [".vue", ".js", ".json"],
    },
    mode: "production",
    devtool: "source-map",
};

```

修改package.json 文件
```js {5}
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npm run dev",
    "dev": "cross-env NODE_ENV=development webpack serve --config ./config/webpack.dev.js",
    "build": "cross-env NODE_ENV=production webpack  --config ./config/webpack.prod.js"
  }
```
运行指令
```js
npm run build //即可
```

**3.0 合并配置**

新建文件webpack.config.js 基于 webpack.prod.js
```js {11,15,34-36,99,108,125,126,128-134}
// webpack.prod.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const { DefinePlugin } = require("webpack");

// 判断是不是生产环境
const isProduction = process.env.NODE_ENV === 'production';

const getStyleLoaders = (preProcessor) => {
    return [
        isProduction ? MiniCssExtractPlugin.loader :'vue-style-loader',
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
    entry: "./src/main.js",
    output: {
        path: isProduction ? path.resolve(__dirname, "../dist") : undefined,
        filename: isProduction ? "static/js/[name].[contenthash:10].js" : "static/js/[name].js",
        chunkFilename: isProduction ? "static/js/[name].[contenthash:10].chunk.js": "static/js/[name].chunk.js",
        assetModuleFilename: "static/js/[hash:10][ext][query]",
        clean: true,
    },
    module: {
        rules: [
            {
                // 用来匹配 .css 结尾的文件
                test: /\.css$/,
                // use 数组里面 Loader 执行顺序是从右到左
                use: getStyleLoaders(),
            },
            {
                test: /\.less$/,
                use: getStyleLoaders("less-loader"),
            },
            {
                test: /\.s[ac]ss$/,
                use: getStyleLoaders("sass-loader"),
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024, // 小于10kb的图片会被base64处理
                    },
                },
            },
            {
                test: /\.(ttf|woff2?)$/,
                type: "asset/resource",
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, "../src"),
                loader: "babel-loader",
                options: {
                    cacheDirectory: true,
                    cacheCompression: false,
                    plugins: [
                        // "@babel/plugin-transform-runtime" // presets中包含了
                    ],
                },
            },
            // vue-loader不支持oneOf
            {
                test: /\.vue$/,
                loader: "vue-loader", // 内部会给vue文件注入HMR功能代码
                options: {
                    // 开启缓存
                    cacheDirectory: path.resolve(
                        __dirname,
                        "node_modules/.cache/vue-loader"
                    ),
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html"),
        }),
       isProduction && new MiniCssExtractPlugin({
            filename: "static/css/[name].[contenthash:10].css",
            chunkFilename: "static/css/[name].[contenthash:10].chunk.css",
        }),
        new VueLoaderPlugin(),
        new DefinePlugin({
            __VUE_OPTIONS_API__: "true",
            __VUE_PROD_DEVTOOLS__: "false",
        }),
    ].filter(Boolean),
    optimization: {
        // 压缩的操作
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserWebpackPlugin(),
        ],
        splitChunks: {
            chunks: "all",
        },
        runtimeChunk: {
            name: (entrypoint) => `runtime~${entrypoint.name}`,
        },
    },
    resolve: {
        extensions: [".vue", ".js", ".json"],
    },
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? "source-map" : "cheap-module-source-map",
    // 开发环境自动化配置
    devServer:{
        host:'localhost', // 域名
        port:3000, // 端口号
        open:true, // 打开浏览器
        hot: true,// 热更新
        historyApiFallback:true,// 解决前端路由刷新404问题
    }
};
```
修改 package.json
```js {4,5}
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npm run dev",
    "dev": "cross-env NODE_ENV=development webpack serve --config ./config/webpack.config.js",
    "build": "cross-env NODE_ENV=production webpack  --config ./config/webpack.config.js"
  },
```
打包构建  看效果一样一样的

## loader原理

## plugin原理












