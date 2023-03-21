vue3 哪些跟vue2的不同

1.0 模板里面接受数据不同
vue3.0 用
```js
 setup(){
    return {
      name:'小明',
      age:'12',
      list:{
        name:'xxx',
        www:'dsefijhu'
      }
    }
```
vue2.0 用
```js
 data() {
    return {}
  }
```
2.0 入口文件
```js
//vue3
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
// vue2
import Vue from 'vue'
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
```

组合式api
https://www.jianshu.com/p/2cac57888886
https://blog.csdn.net/sobject/article/details/123538739


