(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{191:function(t,n,e){t.exports=e.p+"assets/img/1.8415b8e8.jpg"},281:function(t,n,e){"use strict";e.r(n);var s=e(6),a=Object(s.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"vuex实战"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuex实战"}},[t._v("#")]),t._v(" Vuex实战")]),t._v(" "),s("p",[t._v("Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。\n"),s("br"),t._v("英译：")]),t._v(" "),s("blockquote",[s("p",[t._v("dispatch 派遣;调遣;派出;发出，发送 "),s("br"),t._v("\nstate 状态"),s("br"),t._v("\nactions 行动 所做之事"),s("br"),t._v("\nmutations 变异，突变"),s("br"),t._v("\ncommit 承诺，保证(做某事、遵守协议或遵从安排等)"),s("br"),t._v("\npayload 有效载荷 装载量"),s("br")])]),t._v(" "),s("h2",{attrs:{id:"_1-0-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-0-安装"}},[t._v("#")]),t._v(" 1.0 安装")]),t._v(" "),s("p",[t._v("npm install vuex --save"),s("br"),t._v("\n注意版本，我第一次安装的时候版本就过高导致出错，后来就删除了，从新装了一下npm install vuex@2.0 --save")]),t._v(" "),s("h2",{attrs:{id:"_2-0-创建文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-创建文件"}},[t._v("#")]),t._v(" 2.0 创建文件")]),t._v(" "),s("p",[t._v("在src文件夹下创建 store文件，然后创建index.js 里面内容如下")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import Vue from 'vue'\nimport Vuex from 'vuex'\nVue.use(Vuex);\n\nconst store = new Vuex.Store({\n  state:{\n    count:1\n  },\n  mutations:{\n    increment(state){\n      state.count++\n    }\n  }\n});\nexport default store \n")])])]),s("p",[t._v("再然后在 main.js里面引入")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import Vue from 'vue'\nimport App from './App'\nimport router from './router'\nimport ElementUI from 'element-ui';\nimport 'element-ui/lib/theme-chalk/index.css';\nimport store from './store/index'\nVue.use(ElementUI);\nVue.config.productionTip = false\n\nnew Vue({\n  el: '#app',\n  router,\n  store,\n  components: { App },\n  template: '<App/>'\n})\n")])])]),s("h2",{attrs:{id:"_3-0-简单使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-0-简单使用"}},[t._v("#")]),t._v(" 3.0  简单使用")]),t._v(" "),s("p",[t._v("你可以通过 store.state 来获取状态对象，以及通过 store.commit 方法触发状态变更：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<div class="hello">\n    <div>{{num}}</div>\n    <el-button type="primary" @click="look()">点我看看</el-button>\n</div>\ndata () {\n    return {\n      msg: \'Welcome to Your Vue.js App\',\n      num:null,\n    }\n  },\n  created(){\n    console.log(this.$store)\n    this.num = this.$store.state.count;\n  },\n  methods:{\n      look(){\n        this.$store.commit(\'increment\')\n        console.log(this.$store.state)\n        this.num = this.$store.state.count; // 注意 改变之后得赋值要不然怎么取到呢，得从新取一下\n      },\n  },\n')])])]),s("p",[t._v("每点击一次就能加1，大家可以试一试。"),s("br"),t._v("\n上面步骤略显繁琐，那我们直接放在计算属性里面")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("data () {\n    return {\n      msg: 'Welcome to Your Vue.js App',\n      // num:null,\n    }\n  },\ncomputed:{\n    num(){ // 放在计算属性 data里面的 num 是需要删除的\n      return this.$store.state.count\n    }\n},\ncreated(){\n},\nmethods:{\n  look(){\n    this.$store.commit('increment')\n  },\n},\n")])])]),s("p",[t._v("当然了 每次都 this.$store.state.xxx 不符合我们程序员的 “懒散”，上")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import { mapState } from 'vuex';\ncomputed: {\n    ...mapState(['count']), \n},\n如果你指写上面的话，我们的程序指定有问题，因为我们渲染的值是num\n所以就需要该名字了，\ncomputed: {\n    ...mapState({num:'count'}), \n},\n")])])]),s("h2",{attrs:{id:"_4-0-getter修饰器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-0-getter修饰器"}},[t._v("#")]),t._v(" 4.0 Getter修饰器")]),t._v(" "),s("p",[t._v("比如我们上面的count，需要我们在前面全部加一个字符串“hello”，当然我们在页面就可以直接加，但是如果页面很多，我们就要修改很多次，\n如果要把“hello”，变成“fuck”了，我们又要去多个页面修改。所有就出现了Getter这个修饰器。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("const store = new Vuex.Store({\n  state:{\n    count:1,\n    name:'小红'\n  },\n  mutations:{\n    increment(state){\n      state.count++\n    }\n  },\n  getters:{\n    getCount(state){\n      return 'hello '+state.count\n    },\n  }\n});\n// 每次获取的时候\ncreated(){\n    console.log(this.$store.getters.getCount) // hello 1\n},\n// 当然这样太多字了\n用mapGetters去结构\nimport {mapState,mapGetters} from 'vuex'\ncomputed:{\n    ...mapState({num:'count'}), //\n    ...mapGetters(['getCount']) // 注意用的时候名字 就叫 ‘getCount’\n}, \n当然 我们可以修改它的名\n...mapGetters({ otherCount: 'getCount' }) // 页面这样用就可以了{{otherCount}}\n")])])]),s("h2",{attrs:{id:"_5-0-了解如何修改值：mutation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-0-了解如何修改值：mutation"}},[t._v("#")]),t._v(" 5.0 了解如何修改值：Mutation")]),t._v(" "),s("p",[t._v("更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。"),s("br"),t._v("\n我们上面已经用过mutation了，下面讲mutation的进阶，传参，这跟我们函数传参一样一样的")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mutations:{\n    increment(state,n){\n      state.count += n  \n    }\n}, \n页面方法\nlook(){\n    this.$store.commit('increment',2) // 每次都加2 触发一次变成3 再触发变成5 然后7\n},\n但是呢 参数这边官方建议传递一个对象，而不是一个值，这样更美观，其实我觉的是后面人看代码更好理解\nmutations:{\n    increment(state,payload){\n      state.count += payload.number\n    }\n},\n页面方法\nlook(){\n    this.$store.commit('increment',{number:666}) //每次都加666\n},\n当然也有对应的 mapMutations 但是我个人建议不用\n")])])]),s("h2",{attrs:{id:"_6-0-了解一步操作-actions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-0-了解一步操作-actions"}},[t._v("#")]),t._v(" 6.0 了解一步操作 Actions")]),t._v(" "),s("p",[t._v("在 mutation 中混合异步调用会导致你的程序很难调试。例如，当你调用了两个包含异步回调的 mutation 来改变状态，你怎么知道什么时候回调和哪个先回调呢？这就是为什么我们要区分这两个概念。在 Vuex 中，mutation 都是同步事务：\n"),s("br"),t._v(" 修改store/index.js")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("const store = new Vuex.Store({\n  state:{\n    count:1,\n    name:'小红'\n  },\n  mutations:{\n    increment(state,payload){\n      state.count += payload.number\n    }\n  },\n  getters:{\n    getCount(state){\n      return 'hello '+state.count\n    },\n  },\n  actions:{\n      setNum(content){ // content 默认参数 与 store 实例具有相同方法和属性\n        return new Promise((resolve,reject)=>{\n          setTimeout(()=>{\n            content.commit('increment',{number:100})\n            resolve()\n          },1000)\n        })\n      }\n  },\n});\nexport default store\n\nasync created(){\n    console.log('旧值:',this.$store.state.count) //  1\n    await this.$store.dispatch('setNum');\n    console.log('新值:',this.$store.state.count) // 101\n},\n")])])]),s("p",[t._v("看了例子，是不是明白了，action就是去提交mutation的，什么异步操作都在action中消化了，最后再去提交mutation的。"),s("br"),t._v("\n简化写法")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("actions 稍作修改\nactions:{\n      setNum(content,payLoad){\n        return new Promise((resolve,reject)=>{\n          setTimeout(()=>{\n            content.commit('increment',{number:payLoad.number})\n            resolve()\n          },1000)\n        })\n      }\n  },\n  页面修改如下\nimport { mapActions } from 'vuex';\n async created(){\n    await this.setNum({ number: 101 })\n    console.log(this.$store.state.count) //102\n  },\n  methods:{\n    ...mapActions(['setNum']),\n  },\n  当然我们也可以 修改这个名字\n  ...mapActions({ OthersetNum: 'setNum' }), // 调用this.OthersetNum()\n")])])]),s("p",[t._v("看到这里，你应该明白action在vuex的位置了吧，什么时候该用action，什么时候不用它，你肯定有了自己的判断，最主要的判断条件就是我要做的操作是不是异步，这也是action存在的本质。当然，你不要将action和mutation混为一谈，action其实就是mutation的上一级，在action这里处理完异步的一些操作后，后面的修改state就交给mutation去做了")]),t._v(" "),s("h2",{attrs:{id:"_7-0-项目结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-0-项目结构"}},[t._v("#")]),t._v(" 7.0 项目结构")]),t._v(" "),s("p",[t._v("我们目前就这一个index.js 假设如果我们这个页面内容很多很多，那以后看起来或者维护起来就麻烦了，所以我们把这个页面拆分一下\n"),s("img",{attrs:{src:e(191),alt:"avatar"}}),s("br"),t._v("\nindex.js里面大致包含state/getters/mutations/actions这四个属性，我们可以彻底点，index.js里面就保持这个架子，把里面的内容四散到其他文件中。\n"),s("br"),t._v("\nstate.js")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("export const state = {\n  count:1,\n  name:'小红'\n}\n")])])]),s("p",[t._v("getters.js")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("export const getters = {\n    getCount(state){\n    return 'hello '+state.count\n  },\n}\n")])])]),s("p",[t._v("mutations.js")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("export const mutations = {\n  increment(state,payload){\n    state.count += payload.number\n  }\n}\n")])])]),s("p",[t._v("actions.js")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("export const actions =  {\n  setNum(content,payLoad){\n    return new Promise((resolve,reject)=>{\n      setTimeout(()=>{\n        content.commit('increment',{number:payLoad.number})\n        resolve()\n      },1000)\n    })\n  }\n}\n")])])]),s("p",[t._v("最后我们的index.js")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import Vue from 'vue'\nimport Vuex from 'vuex'\nimport {state} from './state'\nimport {getters} from \"./getters\";\nimport {mutations} from \"./mutations\";\nimport {actions} from \"./actions\";\n\nVue.use(Vuex);\n\nconst store = new Vuex.Store({\n  state:state,\n  getters:getters,\n  mutations:mutations,\n  actions:actions\n});\nexport default store\n")])])]),s("p",[t._v("以上就是简单的进行了按属性进行拆分store里面的代码，这样就比较清晰了哈，你需要加什么就去哪里加，大家各干各的，互不影响。"),s("br"),t._v("\n当然，你完全可以不这么做，引用官方文档中的一句话，“需要多人协作的大型项目中，这会很有帮助。但如果你不喜欢，你完全可以不这样做”。\n"),s("br")]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("以上就是vuex的基本操作了，希望大家学以致用。\n"),s("br"),t._v("参考链接")]),t._v(" "),s("blockquote",[s("p",[t._v("https://vuex.vuejs.org/zh/installation.html"),s("br"),t._v("\nhttps://juejin.cn/post/6928468842377117709")])]),t._v(" "),s("p",[t._v("你要克服懒惰，你要克服游手好闲，你要克服漫长的白日梦，你要克服一蹴而就的妄想，你要克服自以为是浅薄的幽默感。你要独立生长在这世上，不寻找不依靠，因为冷漠寡情的人孤独一生。你要坚强，振作，自立，不能软弱，逃避，害怕。不要沉溺在消极负面得情绪里，要正面阳光得对待生活和爱你的人。")])])}),[],!1,null,null,null);n.default=a.exports}}]);