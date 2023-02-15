## vue 知识点1

1.0 cli 是vue的命令行工具 下载 vue的时候就自带了 <br>
2.0 git 上面fork 的意思是叉子 点击一下之后 这个项目就是你的啦
然后你可以修改 你也可以给原作者  原作者自己是否需要替换 <br>
3.0 fork 之后 你本地初始化是这样的 vue init liewen/webpack test <br>
4.0 vue list 查看官方提供了那些 模板文件 <br>
5.0 vue-loader 是什么？
>vue-loader 是 webpack 的一个 loader，用于处理 .vue 文件<br>

[说明](https://www.cnblogs.com/Sherlock09/p/11023593.html)<br>
6.0 导航守卫 导航表示：路由正在发生改变 
``` 
1.0 全局前置守卫
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
  // ...
})
to: Route: 即将要进入的目标 路由对象

from: Route: 当前导航正要离开的路由

next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
确保要调用 next 方法，否则钩子就不会被 resolved。
    next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。
    
    next(false): 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。
    
    next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向 next 传递任意位置对象，且允许设置诸如 replace: true、name: 'home' 之类的选项以及任何用在 router-link 的 to prop 或 router.push 中的选项。
    
    next(error): (2.4.0+) 如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调。

2.0 全局后置钩子

你也可以注册全局后置钩子，然而和守卫不同的是，这些钩子不会接受 next 函数也不会改变导航本身：
router.afterEach((to, from) => {
  // ...
})

3.0 路由独享的守卫

const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})
4.0 组件内的守卫
beforeRouteEnter
beforeRouteUpdate (2.2 新增)
beforeRouteLeave 离开该页面是触发的守卫 可以访问组件实例 `this`
beforeRouteLeave(to, from, next) {
    if(this.jump == false && to.name == 'abc') {
        next('/abc')    
    }else if(this.jump == true && to.name == 'detaiil'){
        next()
    }else{
        next()
    }
}


```
[说明](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB)<br>

## vue Key的作用
>:key='id'，意思是为元素绑定一个key属性，这个key属性为元素添加了一个唯一身份标识符。<br>
>之后，当数据改变，Vue底层通过对比能够更快的获取到更新的内容并显示到页面上<br>
>总之就是一句话，key属性能够提升性能(主要作用于数据更新时


