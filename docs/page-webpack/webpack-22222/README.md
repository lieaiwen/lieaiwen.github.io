## webpack 其它小知识

### 1.0 --save 和 --save-dev 的区别

简单来说：

* 这跟 npm install  和 npm i 是一样的
* --save 和 -S 是一样的
* --save-dev 和 -D 是一样的
* --save 和 -S 安装运行依赖（项目上线以后也需要使用到的）
* --save-dev 和 -D 安装开发依赖（只在开发阶段使用）

在package.json 文件中有体现：
>dependencies 是生产依赖   devDependencies 是开发依赖

**生产依赖**：就是程序上线以后仍然需要使用的依赖

**开发依赖**：就是我们在开发过程中需要用的依赖，只在开发阶段起作用

```js
bundle: 捆 (一)包;(一)扎;

```

## webpack 可以看的文章
https://juejin.cn/post/6844904079219490830
https://juejin.cn/post/6844904121380667399#heading-52
一位前端小姐姐的五万字面试宝典

热更新原理
https://juejin.cn/post/6844904008432222215

深入浅出webpack

http://webpack.wuhaolin.cn/

**很重要的**

**很重要的**

https://yk2012.github.io/sgg_webpack5/
