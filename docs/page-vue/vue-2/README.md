## vue面试题

## 说说你对 SPA 单页面的理解，它的优缺点分别是什么？
SPA（single-page application）仅在Web页面初始化时加载相应的 HTML、JavaScript 和 CSS。一旦页面加载完成，SPA 不会因为用户的操作而进行页面的重新加载或跳转；取而代之的是利用路由机制实现 HTML 内容的变换，UI 与用户的交互，避免页面的重新加载。

**优点：**
* 用户体验好、快，内容的改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染；
* 基于上面一点，SPA 相对对服务器压力小；
* 前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理；

**缺点：**
* 初次加载耗时多：为实现单页 Web 应用功能及显示效果，需要在加载页面的时候将 JavaScript、CSS 统一加载，部分页面-- 按需加载；
* 前进后退路由管理：由于单页应用在一个页面中显示所有的内容，所以不能使用浏览器的前进后退功能，所有的页面切换需要自己建立堆栈管理；
* SEO 难度较大：由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势。

SEO：<br>
为了提升网页在搜索引擎自然搜索结果中的收录数量以及排序位置而做的优化行为。简言之，就是希望百度等搜索引擎能多多我们收录精心制作后的网站，并且在别人访问时网站能排在前面。
<br>
1. 合理的 title、description、keywords：搜索对着三项的权重逐个减小，title 值强调重点即可，重要关键词出现不要超过 2 次，而且要靠前，不同页面 title 要有所不同；description 把页面内容高度概括，长度合适，不可过分堆砌关键词，不同页面 description 有所不同；keywords 列举出重要关键词即可
2. 语义化的 HTML 代码，符合 W3C 规范：语义化代码让搜索引擎容易理解网页
3. 重要内容 HTML 代码放在最前：搜索引擎抓取 HTML 顺序是从上到下，有的搜索引擎对抓取长度有限制，保证重要内容一定会被抓取
4. 重要内容不要用 js 输出：爬虫不会执行 js 获取内容
5. 少用 iframe：搜索引擎不会抓取 iframe 中的内容
6. 非装饰性图片必须加 alt
7. 提高网站速度：网站速度是搜索引擎排序的一个重要指标

## Mvvm定义
``` 
MVVM是Model-View-ViewModel的简写。即模型-视图-视图模型。
【模型】指的是后端传递的数据。
【视图】指的是所看到的页面。
【视图模型】mvvm模式的核心，它是连接view和model的桥梁。

 它有两个方向：
    一是将【模型】转化成【视图】，即将后端传递的数据转化成所看到的页面。
    实现的方式是：数据绑定。
    二是将【视图】转化成【模型】，即将所看到的页面转化成后端的数据。
    实现的方式是：DOM 事件监听。

    这两个方向都实现的，我们称之为数据的双向绑定。

    总结：在MVVM的框架下视图和模型是不能直接通信的。
    它们通过ViewModel来通信，ViewModel通常要实现一个observer观察者，
    当数据发生变化，ViewModel能够监听到数据的这种变化，
    然后通知到对应的视图做自动更新，而当用户操作视图，
    ViewModel也能监听到视图的变化，然后通知数据做改动，
    这实际上就实现了数据的双向绑定。并且MVVM中的View 和 ViewModel可以互相通信。
```
## MVC定义
``` 
MVC是Model-View- Controller的简写。即模型-视图-控制器。
M和V指的意思和MVVM中的M和V意思一样。
C即Controller指的是页面业务逻辑。使用MVC的目的就是将M和V的代码分离。

‘MVC是单向通信。也就是View跟Model，必须通过Controller来承上启下。
MVC和MVVM的区别并不是VM完全取代了C，
ViewModel存在目的在于抽离Controller中展示的业务逻辑，
而不是替代Controller，其它视图操作业务等还是应该放在Controller中实现。

也就是说MVVM实现的是业务逻辑组件的重用。
由于mvc出现的时间比较早，前端并不那么成熟，很多业务逻辑也是在后端实现，
所以前端并没有真正意义上的MVC模式。而我们今天再次提起MVC，是因为大前端的来到，
出现了MVVM模式的框架，我们需要了解一下MVVM这种设计模式是如何一步步演变过来的。
```
## MVVM框架:VUE的介绍
``` 
Vue就是基于MVVM模式实现的一套框架，
    在vue中：Model:指的是js中的数据，如对象，数组等等。
    View:指的是页面视图
    viewModel:指的是vue实例化对象
为什么说VUE是一个渐进式的javascript框架, 渐进式是什么意思？
    1.如果你已经有一个现成的服务端应用，你可以将vue 作为该应用的一部分嵌入其中，
    带来更加丰富的交互体验;
    2.如果你希望将更多业务逻辑放到前端来实现，
    那么VUE的核心库及其生态系统也可以满足你的各式需求（core+vuex+vue-route）。
    和其它前端框架一样，VUE允许你将一个网页分割成可复用的组件，
    每个组件都包含属于自己的HTML、CSS、JAVASCRIPT以用来渲染网页中相应的地方。
    3.如果我们构建一个大型的应用，在这一点上，我们可能需要将东西分割成为各自的组件和文件，
    vue有一个命令行工具，使快速初始化一个真实的工程变得非常简单
    （vue init webpack my-project）。我们可以使用VUE的单文件组件，
    它包含了各自的HTML、JAVASCRIPT以及带作用域的CSS或SCSS。

    以上这三个例子，是一步步递进的，也就是说对VUE的使用可大可小，
    它都会有相应的方式来整合到你的项目中。所以说它是一个渐进式的框架。

    VUE最独特的特性：响应式系统VUE是响应式的（reactive），
    也就是说当我们的数据变更时，VUE会帮你更新所有网页中用到它的地方。

    Model 层代表数据模型，也可以在Model中定义数据修改和操作的业务逻辑；View 代表UI 组件，它负责将数据模型转化成UI 展现出来，ViewModel 是一个同步View 和Model的对象（桥梁）。
    
    在MVVM架构下，View 和 Model 之间并没有直接的联系，而是通过ViewModel进行交互，Model 和 ViewModel 之间的交互是双向的， 因此View 数据的变化会同步到Model中，而Model 数据的变化也会立即反应到View 上。
    
    ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，而View 和 Model 之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。
    
    主要就是mvc中Controller
    mvvm主要解决了mvc中大量的DOM 操作使页面渲染性能降低，加载速度变慢，影响用户体验。
```

## vue 实现双向数据绑定
简单的demo
``` 
<input type="text" id="inp"/>
<p id="showText"></p>
var obj = {};
　　Object.defineProperty(obj,"newProp",{
　　　　get:function(){
　　　　　　return obj;
　　　　},
　　　　set:function(newVal){
　　　　　　document.getElementById("inp").value = newVal;
　　　　　　document.getElementById("showText").innerHTML = newVal;
　　　　}
　　})
　　document.addEventListener("keyup",function(e){
　　　　obj.newProp = e.target.value;
　　})
```
[参考链接](https://segmentfault.com/a/1190000006599500?utm_source=tag-newest)

## 谈谈你对对vuex的理解
**vuex是什么**
>vuex是一个专为vue.js应用程序开发的状态管理模式

**vuex的属性**
>vuex五大核心属性：state，getter，mutation，action，module
 
 1. state：存储数据，存储状态；在根实例中注册了store 后，用 this.$store.state 来访问；对应vue里面的data；存放数据方式为响应式，vue组件从store中读取数据，如数据发生变化，组件也会对应的更新。
 2. getter：可以认为是 store 的计算属性，它的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算
 3. mutation：更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
 4. action：包含任意异步操作，通过提交 mutation 间接更变状态。
 5. module：将 store 分割成模块，每个模块都具有state、mutation、action、getter、甚至是嵌套子模块。

**vuex的数据传递流程**
![avatar](/images/vue/vue1.jpg)<br>
* 当组件进行数据修改的时候我们需要调用dispatch来触发actions里面的方法
* actions里面的每个方法中都会有一个commit方法，当方法执行的时候会通过commit来触发mutations里面的方法进行数据的修改
* mutations里面的每个函数都会有一个state参数，这样就可以在mutations里面进行state的数据修改，当数据修改完毕后，会传导给页面。
* 页面的数据也会发生改变

[模板](https://vuex.vuejs.org/zh/guide/structure.html)

## vue生命周期的理解
>总共分为8个阶段创建前/后，载入前/后，更新前/后，销毁前/后。

**创建前/后**
* 在beforeCreated阶段，vue实例的挂载元素$el和数据对象data都为undefined，还未初始化。
* 在created阶段，vue实例的数据对象data有了，$el还没有。

**载入前/后**
* 在beforeMount阶段，vue实例的$el和data都初始化了，但还是挂载之前为虚拟的dom节点，data.message还未替换。
* 在mounted阶段，vue实例挂载完成，data.message成功渲染。

**更新前/后**
* 当data变化时，会触发beforeUpdate和updated方法。

**销毁前/后**
* 在执行destroy方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在

**1.0 什么是 vue 生命周期**
>vue 实例从创建到销毁的过程就是生命周期。<br>
>也就是从开始创建、初始化数据、编译模板、挂在 dom -> 渲染、更新 -> 渲染、写在等一系列过程

**2.0 vue生命周期的作用是什么**
>生命周期中有多个事件钩子，让我们在控制整个 vue 实例的过程时更容易形成好的逻辑

**3.0 第一次页面加载会触发哪几个钩子**
>第一次加载会触发 beforeCreate、created、beforeMount、mounted

**4.0 简述每个周期具体适合哪些场景**
>beforecreate : 可以在这加个loading事件，在加载实例时触发<br>
>created : 初始化完成时的事件写在这里，如在这结束loading事件，异步请求也适宜在这里调用<br>
>mounted : 挂载元素，获取到DOM节点 updated : 如果对数据统一处理，在这里写上相应函数<br>
>beforeDestroy : 可以做一个确认停止事件的确认框 nextTick : 更新数据后立即操作dom

## vue 组件之间通信
**父向子**
```
import CH from './ch'
components:{
            CH
        },
<CH :datalist="list" @childFn="parentFn"></CH>
props:{
    datalist:{
        type:Object,
        default: {name:2222}
    }
},
 ```
**子向父**
``` 
<button @click="click">Send</button>
click() {
    this.$emit('childFn', this.message);
}
<CH :datalist="list" @childFn="parentFn"></CH>
parentFn(payload) {
    this.message = payload;
},
```
**兄弟组件**
``` query paramas```
**隔代组件**
```
两层 父传子 
多的话 vuex 或者

订阅与发布者 pubsub.js   插件库 类似于vuex
a 订阅消息 PubSub.subscribe('msg',function(msg,data){})
b 发布消息 PubSub.publish('msg',data)
优点：可以实现任意关系组件通信
```

## v-show和v-if指令的共同点和不同点
* v-show指令是通过修改元素的display的CSS属性让其显示或者隐藏
* v-if指令是直接销毁和重建DOM达到让元素显示和隐藏的效果,如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
* v-show只编译一次；而v-if不停地销毁和创建
* 所以，v-if 适用于在运行时很少改变条件，不需要频繁切换条件的场景；v-show 则适用于需要非常频繁切换条件的场景。

**性能**

1. v-show只编译一次，后面其实就是控制css，而v-if不停的销毁和创建，故v-show性能更好一点
2. v-if有更高的切换消耗；v-show有更高的初始渲染消耗；

## Vue的双向数据绑定原理是什么
>vue.js 是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。

## vue 路由原理
>本质就是监听 URL 的变化，然后匹配路由规则，显示相应的页面，并且无须刷新。目前单页面使用的路由就只有两种实现方式

**hash 模式**
>www.test.com/#/ 就是 Hash URL，当 # 后面的哈希值发生变化时，不会向服务器请求数据，可以通过 hashchange 事件来监听到 URL 的变化，从而进行跳转页面

![avatar](/images/vue/vue2.png)

**History 模式**
>History 模式是 HTML5 新推出的功能，比之 Hash URL 更加美观

![avatar](/images/vue/vue3.png)

## vue 页面的懒加载
>利用了函数只有被调用才会执行的特性。将组件的component属性赋值一个函数，在函数中去异步引入组件
```js
export default {
    path:'/test1',
    name:'test1',
    component: () => import('@/components/children/Test1'),
    children:[]
} 
```
component: () => import('@/components/children/Test1')这个是配置路由懒加载，优化首屏加载缓慢


## Class 与 Style 如何动态绑定？
**Class 可以通过对象语法和数组语法进行动态绑定：**
```js
// 1.0 对象语法：
 <div v-bind:class="{ active: isActive, 'text-danger': hasError }"></div>
 data: {
   isActive: true,
   hasError: false
 }
// 2.0 数组语法：
<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}
```
**Style 也可以通过对象语法和数组语法进行动态绑定：**
```js
// 1.0 对象语法：
 <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
 data: {
   activeColor: 'red',
   fontSize: 30
 }
// 2.0 数组语法：
    <div v-bind:style="[styleColor, styleSize]"></div>
    data: {
      styleColor: {
         color: 'red'
       },
      styleSize:{
         fontSize:'23px'
      }
    }
```

## computed 和 watch 的区别和运用的场景？
computed：是计算属性，依赖其它属性值，并且 computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed  的值；

watch：更多的是「观察」的作用，类似于某些数据的监听回调 ，每当监听的数据变化时都会执行回调进行后续操作；

**运用场景：**

* 当我们需要进行数值计算，并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时，都要重新计算；
* 当我们需要在数据变化时执行异步或开销较大的操作时，应该使用 watch，使用 watch 选项允许我们执行异步操作 ( 访问一个 API )，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。

## 直接给一个数组项赋值，Vue 能检测到变化吗？
由于 JavaScript 的限制，Vue 不能检测到以下数组的变动：<br>
* 当你利用索引直接设置一个数组项时，例如：vm.items[indexOfItem] = newValue
* 当你修改数组的长度时，例如：vm.items.length = newLength

```js
// 为了解决第一个问题，Vue 提供了以下操作方法：
// Vue.set
Vue.set(vm.items, indexOfItem, newValue)
// vm.$set，Vue.set的一个别名
vm.$set(vm.items, indexOfItem, newValue)
// Array.prototype.splice
vm.items.splice(indexOfItem, 1, newValue)

// 为了解决第二个问题，Vue 提供了以下操作方法：

// Array.prototype.splice
vm.items.splice(newLength)

```
**注意：**

上面说的是vue2  vue3.0 是可以监听到变化的

`原理` 应该是 Object.definePrototype 和 proxy的区别
数组的话是因为 vue 重写了array的一些方法导致的

## Vue 的父组件和子组件生命周期钩子函数执行顺序？
* 加载渲染过程

父 beforeCreate -> 父 created -> 父 beforeMount -> 子 beforeCreate -> 子 created -> 子 beforeMount -> 子 mounted -> 父 mounted
<br>
* 子组件更新过程

父 beforeUpdate -> 子 beforeUpdate -> 子 updated -> 父 updated
<br>
* 销毁过程
父 beforeDestroy -> 子 beforeDestroy -> 子 destroyed -> 父 destroyed

## 在哪个生命周期内调用异步请求？
可以在钩子函数 created、beforeMount、mounted 中进行调用，因为在这三个钩子函数中，data 已经创建，可以将服务端端返回的数据进行赋值。但是本人推荐在 created 钩子函数中调用异步请求，因为在 created 钩子函数中调用异步请求有以下优点：
<br>
1. 能更快获取到服务端数据，减少页面 loading 时间；
2. ssr 不支持 beforeMount 、mounted 钩子函数，所以放在 created 中有助于一致性；

## ssr 服务端渲染

[demo1](https://www.jb51.net/article/173920.htm)<br>
[demo2](https://segmentfault.com/a/1190000015964813)<br>

## 父组件可以监听到子组件的生命周期吗？
1. 比如有父组件 Parent 和子组件 Child，如果父组件监听到子组件挂载 mounted 就做一些逻辑处理，可以通过以下写法实现：
```
 // Parent.vue
 <Child @mounted="doSomething"/>
     
 // Child.vue
 mounted() {
   this.$emit("mounted");
 }
```
以上需要手动通过 $emit 触发父组件的事件，
2. 更简单的方式可以在父组件引用子组件时通过 @hook 来监听即可，如下所示：
 ```
//  Parent.vue
<Child @hook:mounted="doSomething" ></Child>

doSomething() {
   console.log('父组件监听到 mounted 钩子函数 ...');
},
    
//  Child.vue
mounted(){
   console.log('子组件触发 mounted 钩子函数 ...');
},    
    
// 以上输出顺序为：
// 子组件触发 mounted 钩子函数 ...
// 父组件监听到 mounted 钩子函数 ...   
```
当然 @hook 方法不仅仅是可以监听 mounted，其它的生命周期事件，例如：created，updated 等都可以监听。
## 组件中 data 为什么是一个函数？
>为什么组件中的 data 必须是一个函数，然后 return 一个对象，而 new Vue 实例里，data 可以直接是一个对象？
```
// data
data() {
  return {
	message: "子组件",
	childName:this.name
  }
}

// new Vue
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
```
因为组件是用来复用的，且 JS 里对象是引用关系，如果组件中 data 是一个对象，那么这样作用域没有隔离，子组件中的 data 属性值会相互影响，如果组件中 data 选项是一个函数，那么每个实例可以维护一份被返回对象的独立的拷贝，组件实例之间的 data 属性值不会互相影响；而 new Vue 的实例，是不会被复用的，因此不存在引用对象的问题。

## v-model 的原理
我们在 vue 项目中主要使用 v-model 指令在表单 input、textarea、select 等元素上创建双向数据绑定，我们知道 v-model 本质上不过是语法糖，v-model 在内部为不同的输入元素使用不同的属性并抛出不同的事件：
* text 和 textarea 元素使用 value 属性和 input 事件；
* checkbox 和 radio 使用 checked 属性和 change 事件；
* select 字段将 value 作为 prop 并将 change 作为事件。

以 input 表单元素为例：
``` 
<input v-model='something'>
    
相当于
<input v-bind:value="something" v-on:input="something = $event.target.value">

```
如果在自定义组件中，v-model 默认会利用名为 value 的 prop 和名为 input 的事件，如下所示：
```
 父组件：
 <ModelChild v-model="message"></ModelChild>
 
 子组件：
 <div>{{value}}</div>
 
 props:{
     value: String
 },
 methods: {
   test1(){
      this.$emit('input', '小红')
   },
 },

```
## Proxy 与 Object.defineProperty 优劣对比
**Proxy 的优势如下:**
1. Proxy 可以直接监听对象而非属性；
2. Proxy 可以直接监听数组的变化；
3. Proxy 有多达 13 种拦截方法,不限于 apply、ownKeys、deleteProperty、has 等等是 Object.defineProperty 不具备的；
4. Proxy 返回的是一个新对象,我们可以只操作新的对象达到目的,而 Object.defineProperty 只能遍历对象属性直接修改；
5. Proxy 作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利；

**Object.defineProperty 的优势如下:**
* 兼容性好，支持 IE9，而 Proxy 的存在浏览器兼容性问题,而且无法用 polyfill 磨平，因此 Vue 的作者才声明需要等到下个大版本( 3.0 )才能用 Proxy 重写

## 你有对 Vue 项目进行哪些优化
**代码层面的优化**
1. v-if 和 v-show 区分使用场景
2. computed 和 watch  区分使用场景
3. v-for 遍历必须为 item 添加 key，且避免同时使用 v-if
4. 长列表性能优化
5. 事件的销毁
6. 图片资源懒加载
7. 路由懒加载
8. 第三方插件的按需引入
9. 优化无限列表性能
10. 服务端渲染 SSR or 预渲染

**Webpack 层面的优化**
1. Webpack 对图片进行压缩
2. 减少 ES6 转为 ES5 的冗余代码
3. 提取公共代码
4. 模板预编译
5. 提取组件的 CSS
6. 优化 SourceMap
7. 构建结果输出分析
8. Vue 项目的编译优化

**基础的 Web 技术的优化**
1. 开启 gzip 压缩
2. 浏览器缓存
3. CDN 的使用
4. 使用 Chrome Performance 查找性能瓶颈

## 未完成的
[vue的30个问题](https://juejin.im/post/5d59f2a451882549be53b170#heading-12)
