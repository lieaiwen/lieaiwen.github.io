## Vue Router(路由)
vue-router和vue.js是深度集成的,适合用于单页面应用.传统的路由是用一些超链接来实现页面切换和跳转.而vue-router在单页面应用中,则是组件之间的切换.其本质就是:建立并管理url和对应组件之间的映射关系.

## 1.0 vue 路由是什么
>Vue路由是指根据url分配到对应的处理程序；作用就是解析URL，调用对应的控制器（的方法，并传递参数）。
>Vue路由有助于在浏览器的URL或历史记录与Vue组件之间建立链接，从而允许某些路径渲染与之关联的任何一个视图。
> 

## 2.0 为什么要使用路由
> 在传统的web开发中每一个请求地址都会请求服务器来进行处理，但是用户有些操作则无需请求服务器，
> 直接页面端修改下逻辑就能达到目的，在这种方式下最好的方法是使用路由，因为使用路由时，URL会随着改变，
> 用户浏览一个网页时可以直接复制或收藏当前页面的URL给别人，这种方式对于搜索引擎和用户来说都是友好的

## 3.0 入门
我们在创建vue项目的时候，默认是都会把这个路由安装好的，直接使用就可以了。<br>
步骤一：我们在 components文件夹下面新建两个页面 name.vue 和 age.vue
```
--- name.vue

<template>
  <div>
      我叫小夏
  </div>
</template>

--- age.vue

 <template>
  <div>
      我年方18
  </div>
</template>
```
步骤二：在router文件夹下的index.vue 引入文件并配置路由
```
 import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 1.0 引入组件
import Name from '@/components/name'
import Age from '@/components/age'

Vue.use(Router)

// 2.0 定义路由
export default new Router({
   //mode:'history', //路由模式:默认为hash,如果改为history,则需要后端进行配合
   //base:'/',//基路径:默认值为'/'.如果整个单页应用在/app/下,base就应该设为'/app/'.一般可以写成__dirname,在webpack中配置.
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/name',
      name:'Name', //给路由命名,设置的name要唯一!
      component:Name, //就是第一步import的组件
    },
    { //路由懒加载:单页面应用,首页时,加载内容时间过长.运用懒加载对页面组件进行划分,减少首页加载时间
      path:'/age',
      name:'Age',
      component:()=>import('@/components/age'),//此时component则不需要在第一步import
    }
  ]
})
```
步骤三：在App.vue中配置跳转
>1, router-link组件来导航,用户点击后切换到相关视图.<br>
>2, router-view组件来设置切换的视图在哪里渲染.(一个页面也可以有多个router-view分别展示特定的视图,并且支持嵌套)
```
<template>
 <div id="app" class="portal-app">
   <!-- 使用 router-link 组件来导航. -->
   <!-- 通过传入 `to` 属性指定链接. -->
   <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
   <router-link to="/name">点我看看名字 </router-link>
   <router-link to="/age">点我看看年龄 </router-link>
   
   <!-- 路由出口 -->
   <!-- 路由匹配到的组件将渲染在这里 -->
   <router-view/>
  </div>
</template> 
```
这样基本的路由就算配置好了，点击就能看到组件之间的切换了。
<br>
我们在创建项目的时候，已经给我们挂载了路由，是main.js里面的如下：
```
 new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
```
通过创建和挂载根实例，让我们的整个程序都有路由功能。<br>
通过注入路由器，我们可以在任何组件内通过 this.$router 访问路由器，也可以通过 this.$route访问当前路由对象：<br>
__Tips__ :这里我简单说明下$router和$route的区别:<br>
$router是指整个路由实例,你可以操控整个路由,通过'$router.push'往其中添加任意的路由对象.<br>
$route:是指当前路由实例('$router')跳转到的路由对象;<br>
路由实例可以包含多个路由对象.它们是父子包含关系.<br>
``` 
this.$route.params // 本页面的参数
this.$router.go(-1) // 返回以上一页
this.$router.push('/age') // 跳转到age页面
```

## 4.0 vue-router 的两种模式
__4.1 Hash 模式__
>vue-router默认使用Hash模式.使用url的hash来模拟一个完整的url.此时url变化时,浏览器是不会重新加载的.Hash(即#)是url的锚点,代表的是网页中的一个位置,仅仅改变#后面部分,浏览器只会滚动对应的位置,而不会重新加载页面.#仅仅只是对浏览器进行指导,而对服务端是完全没有作用的!它不会被包括在http请求中,故也不会重新加载页面.同时hash发生变化时,url都会被浏览器记录下来,这样你就可以使用浏览器的后退了.

<br>
总而言之:Hash模式就是通过改变#后面的值,实现浏览器渲染指定的组件.
<br>

__4.1 History 模式__

>如果你不喜欢hash这种#样式.可以使用history模式.这种模式利用了HTML5 History新增的pushState()和replaceState()方法. 除了之前的back,forward,go方法,这两个新方法可以应用在浏览器历史记录的增加替换功能上.使用History模式,通过历史记录修改url,但它不会立即向后端发送请求.
注意点: 虽然History模式可以丢掉不美观的#,也可以正常的前进后退,但是刷新f5后,此时浏览器就会访问服务器,在没有后台支持的情况下,此时就会得到一个404!官方文档给出的描述是:"不过这种模式要玩好,还需要后台配置支持.因为我们的应用是单个客户端应用,如果后台没有正确的配置,当用户直接访问时,就会返回404.所以呢,你要在服务端增加一个覆盖所有情况的的候选资源;如果url匹配不到任何静态资源,则应该返回同一个index.html页面."

<br>
总而言之:History模式就是通过pushState()方法来对浏览器的浏览记录进行修改,来达到不用请求后端来渲染的效果.不过建议,实际项目还是使用history模式.
<br>

## 5.0 动态路由匹配
很多时候，我们需要将给定匹配模式的路由映射到同一个组件。例如，我们可能有一个 User 组件，它应该对所有用户进行渲染，但用户 ID 不同。在 Vue Router 中，我们可以在路径中使用一个动态字段来实现，我们称之为 路径参数 ：
<br>
动态路由匹配本质上就是通过url进行传参
<br>
__5.1 路由对象属性介绍：__
<br>
为了下面理解的方便这里简单介绍下常用的路由对象属性,在组件内可以通过this.$route(不是$router!)进行访问.
``` 
$route.path
类型: string
字符串，对应当前路由的路径，总是解析为绝对路径，如 "/age"。

$route.params
类型: Object
一个 key/value 对象，包含了动态片段和全匹配片段，如果没有路由参数，就是一个空对象。

$route.query
类型: Object
一个 key/value 对象，表示 URL 查询参数。
例如，对于路径 /age?user=1，则有 $route.query.user == 1，如果没有查询参数，则是个空对象。

$route.name
当前路由的名称，Age,如果有的话。
这里建议最好给每个路由对象命名,方便以后编程式导航.不过记住name必须唯一!

$route.hash
类型: string
当前路由的 hash 值 (带 #) ，如果没有 hash 值，则为空字符串。

$route.fullPath
类型: string
完成解析后的 URL，包含查询参数和 hash 的完整路径。

$route.matched
类型: Array<RouteRecord>
一个数组，包含当前路由的所有嵌套路径片段的路由记录 。
路由记录就是 routes 配置数组中的对象副本 (还有在children数组)。

$route.redirectedFrom
如果存在重定向，即为重定向来源的路由的名字。
```

__5.1 使用params进行配置:__

举个例子:
```
routes:[{
	//动态路径参数,以冒号开头
	path:'/name/:id',
	component:User
}] 
```
这样,就是使用params进行配置.像/name/1和/name/2都将映射到相同的路由.
<br>
一个路径参数使用':'冒号进行标记.<br>
当匹配到一个路由时,参数就会被设置到this.$route.params,可以在每个组件内使用.例如/name/1.$route.params.id就为1
<br>
我们对页面进行改造
``` 
// router/index.js
{
      path:'/name/:id',
      name:'Name',
      component:Name,
    },
    
// app.vue

    <router-link to="/name/1">点我看看名字1 </router-link>
   <router-link to="/name/2">点我看看名字2 </router-link>
   
// name.vue

<template>
  <div>
    <div>发生了什么</div>
    <ul>
      <li>我是小明{{id}}</li>
      <li>我今天很高兴</li>
    </ul>
  </div>
</template>
created() {
    this.id = this.$route.params.id
  },
```
我们发现点击 “点我看看名字1” 下面会出现新的数据 但是再点击 “点我看看名字2” 页面数据并没有改变，这是因为：<br>
由于路由参数对组件实例是复用的.例如:/name/1 和 /name/2在使用路由参数时,复用的都是Name组件.
此时组件的生命周期钩子不会再被调用。如果你想路径切换时,进行一些初始化操作时,可以用以下两种解决办法:
<br>
方法一：在组件内 watch $route 对象：
```
// name 组件 增加
watch:{
    '$route' (to, from) {
      // 对路由变化作出响应...
      this.id = this.$route.params.id
    }
  },
```
方法二：使用2.2版本中的  beforeRouteUpdate 路由守卫：
```
    // name 组件 跟 created() 同级
beforeRouteUpdate(to,from,next){
    // 在当前路由改变，但是该组件被复用时调用
    next()
     // 可以访问组件实例 `this`

    this.id = this.$route.params.id
  },
```
这样来回切换，数据就会随之变化了。

__5.2 通过query进行配置传参:__

在项目里我们可以通过上面提到的params进行传参.同时也可以用query进行传参.
举个例子:
```angular2html
<router-link to="/name?id=1">foo</router-link>

vue-route会自动将?后的id=1封装进this.$route.query里. 此时,在组件里this.$route.query.id值为'1'

==除了通过router-link的to属性. query也可以通过后面讲到的编程式导航进行传参==
```


## 6.0 编程式导航

什么是编程式导航,编程式导航就是在vue组件内部通过this.$router访问路由实例,并通过this.$router.push导航到不同的url,进行路由映射,
所以 它的作用是和`<router-link :to>`是一毛一样的! 当然,前提是你已经在routes里配置了对应的路由对象.<br>
一般什么时候用到编程式导航? 如果,你想在路由跳转前做点其他事情,例如权限验证等.但是用`<router-link>`的话,就直接跳转了.此时就可以使用编程式导航!

__6.1 编程式导航写法__

编程式导航一般都是用到router.push方法.该方法的参数可以是一个字符串路径,或者一个描述地址的对象.例如:
```
// 字符串路径
router.push('/users/eduardo')

// 带有路径的对象
router.push({ path: '/users/eduardo' })

// 命名的路由，并加上参数，让路由建立 url
router.push({ name: 'user', params: { username: 'eduardo' } })

// 带查询参数，结果是 /register?plan=private
router.push({ path: '/register', query: { plan: 'private' } })

// 带 hash，结果是 /about#team
router.push({ path: '/about', hash: '#team' }) 
```

__注意：__ 如果提供了 path，params 会被忽略，上述例子中的 query 并不属于这种情况。取而代之的是下面例子的做法，
你需要提供路由的 name 或手写完整的带有参数的 path ：

__6.2 router.replace方法__

router.replace和router.push很像,写法一样.但实际效果不一样.push是向history里添加新记录.而replace是直接将当前浏览器history记录替换掉!
<br>
那最直接的后果是什么呢? 举个例子:
>用push方法,页面1跳转到页面2,你使用浏览器的后退可以回到页面1 <br>
> 用replace方法,页面1被替换成页面2,你使用浏览器的后退,此时你回不到页面1,只能回到页面1的前一页,页面0.

`那什么时候会用到replace呢?` 当你不想让用户回退到之前的页面时,常见于权限验证,验证后就不让用户回退到登录页重复验证.

__6.3 router.go(n)方法__

这个方法的参数就是一个整数,意思是在history记录中前进或后退多少步.类似window.history.go(n).这样就能控制页面前进或者后退多少步.

## 7.0 嵌套路由与单组件多视图
`嵌套路由:`就是父路由嵌套子路由.url上就是/name嵌套两个子路由后就是/user/hong和/uer/ming.<br>
`单组件多视图:`就是一个组件里有多个视图进行展示.即包含有多个`<router-view/>`

讲之前,必须先清楚这样一件事,一个<router-view/>对应展示的就是一个组件 因此实现嵌套路由有两个要点:
<br>
一、路由对象中定义子路由(嵌套子路由)<br>
二、组件内`<router-view/>`的使用.

__7.1 路由对象中定义子路由__
```
    {
      path:'/name',
      name:'Name',
      component:Name,
      children:[
        {path:'hong',name:'Hong',component:()=>import('@/components/xiaohong'),},
         //此时path等同于'/name/hong',子路由会继承父路由的路径.但是不能写成path:'/hong'.因为以 / 开头的嵌套路径会被当作根路径,也就是说此时hong成了根路径.而不是name.
        {path:'ming',name:'Ming',component:()=>import('@/components/xiaoming'),}
      ]
    },
    
    //name.vue 页面代码
    <template>
      <div>
        <div>我是name组件</div>
        <button @click="look(1)">点我看小红</button>
        <button @click="look(2)">点我看小明</button>
        <router-view></router-view>
      </div>
    </template>
    // 增加方法
    look(num){
      if(num==1){
        this.$router.push('/name/hong')
      }else{
        this.$router.push('/name/ming')
      }
    }
```
__7.2 单组件多视图__

如果一个组件有多个视图,来展示多个子组件.这个时候就需要用到命名视图
``` 
//app.vue
<div id="app" >
    <div>我布局一下页面</div>
    <router-view></router-view> //没有设置name的视图,会获得默认命名为default
   <router-view name="headerLayout"></router-view>
   <router-view name="leftLayout"></router-view>
   <router-view name="rightLayout"></router-view>
</div>
// 增加几个页面 hello.vue   headerLayout.vue leftLayout.vue rightLayout.vue  里面内容如下

<template><div>hello vue-router</div></template>
<template><div>我是顶部</div></template>
<template><div>我是左边</div></template>
<template><div>我是右边</div></template>  

//  router.index.js  先引入几个文件
import Hello from '@/components/hello'
import HeaderLayout from '@/components/headerLayout'
import LeftLayout from '@/components/leftLayout'
import RightLayout from '@/components/rightLayout'

routes: [
    {
      path: '/',
      // redirect: 'name',
      components: {
        default: Hello,
        headerLayout:HeaderLayout,
        leftLayout:LeftLayout,
        rightLayout:RightLayout,
      }
    },
  ]
  //如果有多个视图需要展示时,以前的component换成components(加上s!!),写成对象形式.
  左边的属性对应的<router-view>里设置的name="headerLayout"，右边的对应上面的组件

```

## 8.0 重定向和别名

__8.1 重定向__

重定向其实就是通过路由.拦截path,然后替换url跳转到redirect所指定的路由上. 重定向是通过 routes 配置来完成

``` 
{ 从 /age 重定向到 /name
      path:'/age',
      name:'Age',
      component:()=>import('@/components/age'),
      redirect: '/name',
}

// 第二种写法
{ 
      path:'/age',
      name:'Age',
      component:()=>import('@/components/age'),
      redirect: {name:'Name'},
}

//甚至是一个方法，动态返回重定向目标：
const router = new VueRouter({
  routes: [
    { path: '/a', redirect: to => {
      // 方法接收 目标路由 作为参数
      // return 重定向的 字符串路径/路径对象
	  const { hash, params, query } = to
	  //这里使用了ES6的解构写法,分别对应了to的hash模式,params,query参数.这里解构就不具体说明了.
        if (query.to === 'name') {
          return { path: '/name', query: null }
        }
        if (hash === '#baz') {
          return { name: 'baz', hash: '' }
        }
        if (params.id) {
          return '/with-params/:id'
        } else {
          return '/bar'
        }
    }}
  ]
})
```

__8.2别名__

重定向是替url换路径,达到路由跳转.那别名就是一个路由有两个路径.两个路径都能跳转到该路由.<br>
举个栗子:你可能大名叫'赵日天',但你的小名(别名)可能就叫'二狗子'.但'赵日天'和'二狗子'指代的是同一个人(路由).<br>
别名是在router里的alias进行配置:
```
<router-link to="/years">点我看看年龄 </router-link>

{ 
      path:'/age',
      name:'Age',
      component:()=>import('@/components/age'),//此时component则不需要在第一步import
      alias: '/years'
      //当有多个别名时,alias也可以写成数组形式.  alias: ['/years', '/yearss','/ages']
    }
```

## 9.0 路由懒加载

vue主要用于单页面应用，此时webpack会打包大量文件,这样就会造成首页需要加载资源过多,首屏时间过长,给用户一种不太友好的体验.
如果使用路由懒加载,仅在你路由跳转的时候才加载相关页面.这样首页加载的东西少了,首屏时间也减少了.
vueRouter的懒加载主要是靠`Vue 的异步组件`和 `Webpack 的代码分割功能`，轻松实现路由组件的懒加载。

``` 
{ //路由懒加载:单页面应用,首页时,加载内容时间过长.运用懒加载对页面组件进行划分,减少首页加载时间
      path:'/age',
      name:'Age',
      component:()=>import('@/components/age'),//此时component则不需要在第一步import
}
```

__9.1把组件按组分块__

`使用 webpack`有时候我们想把某个路由下的所有组件都打包在同个异步块 (chunk) 中。只需要使用命名 chunk，一个特殊的注释语法来提供 chunk name (需要 Webpack > 2.4)：
```
// 需要在webpack.base.conf.js里面的output里面的filename下面加上chunkFileName
 output: {
 path: config.build.assetsRoot,
 filename: '[name].js',
 // 需要配置的地方
 chunkFilename: '[name].js',
 publicPath: process.env.NODE_ENV === 'production'
   ? config.build.assetsPublicPath
   : config.dev.assetsPublicPath
}
// 路由修改
{
      path:'/name',
      name:'Name',
      component:import(/* webpackChunkName: "group-user" */ '@/components/name'),
    },
    { 
      path:'/age',
      name:'Age',
      component:()=>import(/* webpackChunkName: "group-user" */ '@/components/age'),
    }
```

## 10.0 导航守卫

路由导航守卫,通俗点说就是路由钩子.作用也和生命周期钩子类似,在路由跳转过程进行操作控制

__10.1 导航守卫分类__

`全局守卫:`异步执行,每个路由跳转都会按顺序执行
<br>
- router.beforeEach 全局前置守卫
- router.beforeResolve 全局解析守卫(2.5.0+) 在beforeRouteEnter调用之后调用.
- router.afterEach 全局后置钩子 进入路由之后 注意:不支持next(),只能写成这种形式router.afterEach((to, from) => {});

每个守卫方法接收三个参数：

- `to: Route:` 即将要进入的目标 路由对象
- `from: Route:` 当前导航正要离开的路由对象
- `next: Function:` 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
``` 
next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是confirmed(确认的)。

next(false): 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，
那么 URL 地址会重置到from路由对应的地址。

next('/')或者next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。
你可以向next传递任意位置对象，且允许设置诸如
replace: true、name: 'home'之类的选项以及任何用在router-link的to prop或router.push中的选项。

next(error): (2.4.0+) 如果传入next的参数是一个Error实例，
则导航会被终止且该错误会被传递给router.onError()注册过的回调。

```
下面就通过例子再进行详细的说明
```
//1, 可以在main.js 或者在单独的路由配置文件router.js中进行设置
router.beforeEach((to, from, next) => { 
  ...
  next();
});

//2, 也可以在组件内部设置
this.$router.beforeEach((to, from, next) => { 
  ...
  next();
});

//3, 对函数及next()的详细使用说明
router.beforeEach((to, from, next) => { 
	//首先to和from 其实是一个路由对象,所以路由对象的属性都是可以获取到的(具体可以查看官方路由对象的api文档).
	//例如:我想获取获取to的完整路径就是to.path.获取to的子路由to.matched[0].
      next();//使用时,千万不能漏写next!!!
	//next()  表示直接进入下一个钩子.
	//next(false)  中断当前导航
	//next('/path路径')或者对象形式next({path:'/path路径'})  跳转到path路由地址
	//next({path:'/shotcat',name:'shotCat',replace:true,query:{logoin:true}...})  这种对象的写法,可以往里面添加很多.router-link 的 to prop 和 router.push 中的选项(具体可以查看api的官方文档)全都是可以添加进去的,再说明下,replace:true表示替换当前路由地址,常用于权限判断后的路由修改.
	//next(error)的用法,(需2.4.0+) 
 }).catch(()=>{
  //跳转失败页面
  next({ path: '/error', replace: true, query: { back: false }})
})
//如果你想跳转报错后,再回调做点其他的可以使用 router.onError()
router.onError(callback => { 
  console.log('出错了!', callback);
});

```
`路由独享的守卫:` 即路由对象独享的守卫 <br>
beforeEnter:路由只独享这一个钩子,在routes里配置
```
const router = new VueRouter({
  routes: [
    {
      path: '/name',
      component: Name,
      beforeEnter: (to, from, next) => {
        // 使用方法和上面的beforeEach一样
      }
    }
  ]
})

```
`组件内的守卫:` 注意:这类路由钩子是写在组件内部的

- beforeRouteEnter 进入路由前,此时实例还没创建,无法获取到this
- beforeRouteUpdate (2.2) 路由复用同一个组件时
- beforeRouteLeave 离开当前路由,此时可以用来保存数据,或数据初始化,或关闭定时器等等

这里官方的例子说明的很详细,这里就直接进行引用了.
```
//在组件内部进行配置,这里的函数用法也是和beforeEach一毛一样
const Foo = {
  template: `...`,
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /name/:id，在 /name/1 和 /name/2 之间跳转的时候，
    // 由于会渲染同样的 Name 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
}
```

__10.2 完整的导航解析流程__

1.0 导航被触发。<br>
2.0 在失活的组件里调用 beforeRouteLeave 守卫。<br>
3.0 调用全局的 beforeEach 守卫。<br>
4.0 在重用的组件里调用 beforeRouteUpdate 守卫(2.2+)。<br>
5.0 在路由配置里调用 beforeEnter。<br>
6.0 解析异步路由组件。<br>
7.0 在被激活的组件里调用 beforeRouteEnter。<br>
8.0 调用全局的 beforeResolve 守卫(2.5+)。<br>
9.0 导航被确认。<br>
10.0 调用全局的 afterEach 钩子。<br>
11.0 触发 DOM 更新。<br>
12.0 调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。

## 11.0 路由元信息

__11.1什么是路由元信息__

一句话概括:路由配置的meta对象里的信息,如下：
``` 
const router = new VueRouter({
  routes: [
    {
      path: '/name',
      component: Name,
      children: [
        {
          path: 'bar',
          component: Bar,
          // a meta field
          meta: { requiresAuth: true }
        }
      ]
    }
  ]
})
```
从上面例子可以看出就是给路由添加了一个自定义的meta对象,并在里面设置了一个requiresAuth状态为true.

__11.2它有什么用__

先看代码：
``` 
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    //对matched不了解的建议看官方api文档
	//数组some方法,如果meta.requiresAuth为ture,则返回true.此时,说明进入该路由前需要判断用户是否已经登录 
    if (!auth.loggedIn()) {   //如果没登录,则跳转到登录页
      next({
        path: '/login',
        query: { redirect: to.fullPath }  //官方例子的这个小细节很好,通过query将要跳转的路由路径保存下来,待完成登录后,就可以直接获取该路径,直接跳转到登录前要去的路由
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})
```
我们可以通过在meta里设置的状态,来判断是否需要进行登录验证.如果meta里的requiresAuth为true,
则需要判断是否已经登录,没登录就跳转到登录页.如果已登录则继续跳转.
<br>

此时,可能会有同学说,前面说的path,params,query都可以存储信息,作为登录验证的状态标记.的确,它们也可以达到同样的效果.如果是少量单个的验证,使用它们问题不大.
但如果是多个路由都需要进行登录验证呢?path,params,query是把信息显性地存储在url上的.并且多个路径都把一个相同的状态信息加在url上.这样就使url不再单纯,并且也很不优雅美观.
所以要优雅要隐性地传递信息,就使用meta对象吧!




## 总结
以上就是Vue Router的基本操作了，希望大家学以致用。
<br>参考链接
>https://router.vuejs.org/zh/introduction.html<br>
>https://juejin.cn/post/6844903665388486664#heading-44

失败了，不要害怕重新开始，不是从头而是从经验开始。




