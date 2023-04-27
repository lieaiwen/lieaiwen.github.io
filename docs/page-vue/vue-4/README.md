## Vuex实战
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
<br>英译：
> dispatch 派遣;调遣;派出;发出，发送 <br>
> state 状态<br>
> actions 行动 所做之事<br>
> mutations 变异，突变<br>
> commit 承诺，保证(做某事、遵守协议或遵从安排等)<br>
> payload 有效载荷 装载量<br>

## 1.0 安装
初始化一个基于webpack的vue项目
>vue init webpack vue2-vuex

打开文件夹安装vuex
>npm install vuex@3.1.0 --save

**注意版本**，我用的是 npm install vuex@3.1.0 --save

## 2.0 创建文件
在src文件夹下创建 store文件，然后创建index.js 里面内容如下
```js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
  state:{ // 定义全局状态
    count:1
  },
});
export default store 
```
再然后在 main.js里面引入
```js
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    // 注册到vue里面，让vue项目拥有vuex的功能
    // 给vue实例原型链上的$store属性赋值 
    store,
    router,
    components: { App },
    template: '<App/>'
})
```
## 3.0  state里面值的使用
1.0 直接使用 **this.$store.state.变量名**（取值）<br>
2.0 用辅助函数 **mapState** 获取
```js
<div class="hello">
    <h2>直接使用1：{{$store.state.count}}</h2>
    <h2>直接使用2：{{num}}</h2>
    <h2>辅助函数使用：{{count}}</h2>
    <h2>别名:{{number}}</h2>
</div>
import {mapState} from 'vuex'
export default {
    name: 'HelloWorld',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            num:''
        }
    },
    computed:{
        ...mapState(['count']),
        // 也可以起别名
        ...mapState({number:'count'})
    },
    created() {
        this.num = this.$store.state.count // 因为只赋值了一次，以后count改变 num不会变
    },
}
```
## 4.0  定义mutations同步数据
>更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。

语法：
```js
const store = new Vuex.Store({
  state:{
    count:1
  },
  mutations:{ // 修改变量值
    addCount(state,value){ // 增加数据
      state.count += value
    },
    subCount(state,value){ // 减少数据
      state.count -= value
    },
  }
});
```
**使用mutations的2中方法：**

1.0 直接使用 **this.$store.commit('mutations里面的函数名')**
<br>
2.0 映射使用 **mapMutatios**
```js
// 增加两个按钮
<button  @click="add()">增加数据</button>
<button @click="sub()">减少数据</button>
// 方法里面增加两个方法
methods:{
    add(){
        this.$store.commit('addCount',10)
    },
    sub(){
        this.$store.commit('subCount',8)
    }
},
// 然后点击就会 发生改变
```
使用mapMutations
```js
// 先引入
import {mapState,mapMutations} from 'vuex'
methods:{
...mapMutations(['addCount','subCount']),
     add(){
      this.addCount(10)
      //this.$store.commit('addCount',10)
    },
    sub(){
        this.subCount(10)
        //this.$store.commit('subCount',8)
    }
}
```
**Tips:**
```js
// 参数这边官方建议传递一个对象，而不是一个值，这样更美观，其实我觉的是后面人看代码更好理解
mutations:{
    addCount(state,payload){
      state.count += payload.number
    }
}
// 页面方法
add(){
    this.$store.commit('increment',{number:666}) //每次都加666
}
```

## 5.0 了解异步操作 Actions
在 mutation 中混合异步调用会导致你的程序很难调试。例如，当你调用了两个包含异步回调的 mutation 来改变状态，你怎么知道什么时候回调和哪个先回调呢？这就是为什么我们要区分这两个概念。在 Vuex 中，mutation 都是同步事务：
<br> 修改store/index.js
```js
const store = new Vuex.Store({
  state:{
    count:1,
    name:'小红'
  },
  mutations:{
      addCount(state,value){ // 增加数据
          state.count += value
      },
  },
  actions:{ // 异步操作在这里
      asyncAddCount(content,num){ // content 默认参数 与 store 实例具有相同方法和属性
        return new Promise((resolve,reject)=>{
          setTimeout(()=>{
            content.commit('addCount',num)
            resolve()
          },2000)
        })
      }
  },
});
```
**actions：调用的两种方法**

1.0 直接使用 **this.$store.dispatch('actions里面的函数名')**
<br>
2.0 映射使用 **mapActions**
```js
// 1.0 修改点击事件
add(){
    //this.addCount(10)
    //this.$store.commit('addCount',10)
    this.$store.dispatch('asyncAddCount',88)
},
```
映射法：
```js
// 引入辅助函数
import {mapState,mapMutations,mapActions} from 'vuex'
// 使用
methods:{
...mapMutations(['addCount','subCount']),
...mapActions(['asyncAddCount']),
        add(){
        //this.addCount(10)
        //this.$store.commit('addCount',10)
        //this.$store.dispatch('asyncAddCount',88)
        this.asyncAddCount(88)
    },
},
```
看了例子，是不是明白了，actions就是去提交mutations的，什么异步操作都在actions中消化了，最后再去提交mutations的。<br>



## 6.0 Getter修饰器
比如我们上面的count，需要我们在前面全部加一个字符串“hello”，当然我们在页面就可以直接加，但是如果页面很多，我们就要修改很多次，
如果要把“hello”，变成“fuck”了，我们又要去多个页面修改。所有就出现了Getter这个修饰器。
<br>
语法：
```js
// store.js
const store = new Vuex.Store({
  state:{
    count:1,
  },
  getters:{
    getCount(state){
      return 'hello '+state.count
    },
  }
});
```
```js
<h2>getters方法1：{{gCount}}</h2>
<h2>getters方法2：{{getCount}}</h2>
<h2>getters方法(别名)：{{qqww}}</h2>

import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'

computed:{
...mapGetters(['getCount']), // 注意用的时候名字 就叫 ‘getCount’
    //别名
...mapGetters({qqww:'getCount'}) 
},
created() {
    this.gCount = this.$store.getters.getCount // hello1
    // 注意 如果 count的数值修改 gCount不会修改，因为赋值操作只执行了一次，而在computed计算属性里里面的会随之变化
},
```


## 7.0 项目结构
我们目前就这一个index.js 假设如果我们这个页面内容很多很多，那以后看起来或者维护起来就麻烦了，所以我们把这个页面拆分一下
![avatar](./1.jpg)<br>
index.js里面大致包含state/getters/mutations/actions这四个属性，我们可以彻底点，index.js里面就保持这个架子，把里面的内容四散到其他文件中。
<br>
state.js
```js
export const state = {
  count:1,
  name:'小红'
}
```
getters.js
```js 
export const getters = {
    getCount(state){
    return 'hello '+state.count
  },
}
```
mutations.js
```js
export const mutations = {
  increment(state,payload){
    state.count += payload.number
  }
}
```
actions.js
```js
export const actions =  {
  setNum(content,payLoad){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        content.commit('increment',{number:payLoad.number})
        resolve()
      },1000)
    })
  }
}
```
最后我们的index.js
```js
import Vue from 'vue'
import Vuex from 'vuex'
import {state} from './state'
import {getters} from "./getters";
import {mutations} from "./mutations";
import {actions} from "./actions";

Vue.use(Vuex);

const store = new Vuex.Store({
  state:state,
  getters:getters,
  mutations:mutations,
  actions:actions
});
export default store
```
以上就是简单的进行了按属性进行拆分store里面的代码，这样就比较清晰了哈，你需要加什么就去哪里加，大家各干各的，互不影响。<br>
当然，你完全可以不这么做，引用官方文档中的一句话，“需要多人协作的大型项目中，这会很有帮助。但如果你不喜欢，你完全可以不这样做”。
<br>

## 8.0 vuex-modules定义-分模块
我们上面已经把vuex按功能分开了，但是还是不行，比如很大的项目，我想按功能划分就有点捉襟见肘了
<br>
所有我们就有了分模块
```js
// 新建两个模块
// user.js 用户模块
// 注意state 变成了函数
export const userModel = {
    namespaced:true, // 加上命名空间之后就不怕 方法重复了
    state(){
        return{
            name:'小红',
            age:18
        }
    },
    getters:{

    },
    mutations:{
        setName(state,value){
            state.name = value
        },
    },
    actions:{

    },
}


// cart.js 购物车模块
export const cardModel = {
    namespaced:true, // 加上命名空间之后就不怕 方法重复了
    state(){
        return{
            list:[{size:'185',age:18,color:'red'}]
        }
    },
    getters:{

    },
    mutations:{

    },
    actions:{

    },
}

// 修改 index.js
import Vue from 'vue'
import Vuex from 'vuex'
import {userModel} from "./mudules/user";
import {cardModel} from "./mudules/cart";

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{ // 小模块注册
        userModel,
        cardModel,
        // 取别名
        // uuser:userModel
    }
});
export default store

```
**如何取值** 

**注意：** 分模块后影响state里面的取值，其它的方法暂时不变

1.0 直接取值 **this.$store.state.模块名.变量名**

```js
// 分模块后写法
...mapState({
    '变量名':state => state.模块名.变量名
})
<h2>{{name}}</h2>
<h2>{{list}}</h2>
// 取值先
computed:{
...mapState({
        name: (state) => {
            return state.userModel.name
        },
        list: (state) => {
            return state.cartModel.list
        },
    }),
// 其它写法
...mapState('userModel',['name']),
...mapState('userModel',{nnn:'age'})
}
```
分模块后 mutatios的用法
```js
// 1.0
this.$store.commit('userModel/setName','大大的大')
// 2.0 映射使用

methods:{
...mapMutations('userModel',['setName']),
    add(){
      this.setName('小小小')
    },
},
// 或者
methods:{
...mapMutations('userModel',{ooName:'setName'}),
   add(){
    this.ooName('小小小')
    },
}
// 与之相关的Actions 和 getters的用法是一样的
```

## 总结
以上就是vuex的基本操作了，希望大家学以致用。
<br>参考链接
>https://vuex.vuejs.org/zh/installation.html<br>
>https://juejin.cn/post/6928468842377117709

你要克服懒惰，你要克服游手好闲，你要克服漫长的白日梦，你要克服一蹴而就的妄想，你要克服自以为是浅薄的幽默感。你要独立生长在这世上，不寻找不依靠，因为冷漠寡情的人孤独一生。你要坚强，振作，自立，不能软弱，逃避，害怕。不要沉溺在消极负面得情绪里，要正面阳光得对待生活和爱你的人。





