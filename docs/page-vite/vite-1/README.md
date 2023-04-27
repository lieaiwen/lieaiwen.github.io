## vite

不学不行呀

### vue2老项目vite升级改造过程记录

1.0 https://www.likecs.com/show-308639384.html
2.0 https://www.jianshu.com/p/91c5c5e5ab1c
3.0 https://blog.csdn.net/m0_68036862/article/details/128678133

## 搭建自己的脚手架
1.0 https://www.jb51.net/article/159892.htm


## webpack 和 vite的区别
它与 Webpack 的主要区别在于，使用 Vite 构建的开发环境，在开发过程中不存在捆绑（bundle）过程。源代码中的 import 语句会直接以 script module 的形式提供给浏览器，Vite 内置的开发服务会拦截模块请求并在必要时执行代码转换。例如，页面渲染一个名为 component.vue 的文件时，Vite 内置的开发服务会接到页面的请求，然后动态编译这个 component.vue 文件，再把编译结果响应给页面。

这就带来了以下几个好处。

由于不需要做捆绑工作，服务器冷启动速度非常快。

代码是按需编译的，因此只编译当前界面上实际导入的代码。你不必等到整个应用被捆绑后才开始开发，这对于拥有非常多界面的应用来说是一个巨大的性能提升。

热更新（HMR）的性能与模块数量无关。这使得 HMR 始终快速，无论你的应用程序有多大。
