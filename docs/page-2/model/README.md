## 3.0 模块导入导出大全

## 介绍
> module.exports 和exports 是commonjs的规范 --模块的导出 <br>
> require 是amd规范 --模块的导入
>export 和export default 是es6 规范 --模块的导出 <br>
> import 是es6 的一个语法标准 --模块的导入

require: node 和 es6 都支持的引入 <br>
export / import : 只有es6 支持的导出引入<br>
module.exports / exports: 只有 node 支持的导出<br>


## 1.0 module.exports 和 exports的使用
>module 变量代表当前模块，这是个对象，会创建exports的属性，属性的默认值是空对象

我们新建两个文件
```js
//until.js
module.exports = {a:1,b:2}
// main.js
let req = require('./until.js')
console.log(req) // 结果 {a:1,b:2}
```

继续修改until.js
```js
module.exports = {a:1,b:2}
module.exports = function (name){
console.log('名字是'+name)
}
// main.js
let req = require('./until.js')
console.log(req,req('小红')) // 结果 名字是小红
```
总结：一个js文件里面只有一个 module.exports，如果重复会被覆盖

<hr>

我们继续修改until.js

```js
function add(a,b){
console.log(a+b)
}
let a = 1;
module.exports = {add,a}

// main.js
let req = require('./until.js')
console.log(req,req('小红'))   // 结果 { add: [Function: add], a: 1 }

当然了 main.js 也可以这样 解构用
let {add,a} = require('./until.js')
console.log(add(1,2),a) // 结果  3  1
```

>exports 是module.exports的一个引用，可以认为是 var exports = module.exports = {}

```js
// until.js
function add(a,b){
console.log(a+b)
}
exports.a = 1;
exports.add = add;
exports.isPeople = true;

// main.js
let msg = require('./until.js')
console.log(msg) // 结果 { a: 1, add: [Function: add], isPeople: true }

```
继续修改
```js
let a = 100;

console.log(module.exports); //能打印出结果为：{}
console.log(exports); //能打印出结果为：{}

exports.a = 200; // module.exports 的内容给改成 {a : 200}

exports = '指向其他内存区'; //这里把exports的指向指走

main.js
var a = require('./until.js');
console.log(a) // 结果 {a : 200}
```

```js
module.exports = {name: '叔叔'};
exports = {name: '阿姨'}

//main.js
var obj = require('./until.js');
console.log(obj) // 结果 { name: '叔叔' }
```
## 2.0 module.exports 和exports的区别

1.0 相对而已，exports不能导出匿名函数（比如没有变量名的函数）也不能写 exports = {add};<br>
2.0 其实require导出的内容是module.exports的指向的内存块内容，并不是exports的。
简而言之，区分他们之间的区别就是 exports 只是 module.exports的引用，辅助后者添加内容用的

## 3.0 export和export default 的使用

>export 用于对外输出本模块（一个文件可以理解为一个模块）变量的接口，import 用于在一个模块中加载另一个含有export接口的模块。也就是说使用export命令定义了模块的对外接口以后，其他JS文件就可以通过import命令加载这个模块（文件）。这几个都是ES6的语法。

demo1 export 导出的例子
```js
// until.js

    let age = 11;
    let name = "小红";
    function add(){
        console.log('123321')
    }
    
    export {age}
    export {name}
    export {add}

// main.js
     //导入方法 对应导入的变量或函数，一定要花括号
    import {age,name,add} from './until.js'  // 花括号里面的值必须与暴露的变量相同
    
    console.log(age,name,add()) // 结果 11 小红 123321

// until.js 导出部分也可以这样写
    export {age,name,add}

    还可以这样写
    export let old = 'uuww'

// 注意当我们导出一个函数的时候
    export function add(){  // 正确的
        console.log(123)
    }

    export function(){  // 错误的
        console.log(123)
    }


```
demo2 export default导出的例子
```js
// until.js
    let age = 11;
    let name = "小红";
    
    export default age
    export default name 
    // 注意这时候就会报错，因为一个页面只能export default一个
    所以我们修改成
    export default {age,name}

//main.js 引入的时候也是有所区别的
    import {age,name} from './until.js'
    
    console.log(age,name) // 结果 11 小红
    
    也可以这样写
    import {age as age1,name as name1} from './until.js' // 取了一个别名
    
    console.log(age1,name1) // 结果 11 小红
    
    还可以这样
    import test from './until.js' // 当一个整体的时候名字随便取，不要花括号

    console.log(test.age,test.name) // 结果 11 小红

    或者这样
    import * as test from './until.js' 
    
    console.log(test.age,test.name) // 结果 11 小红
    

// 注意当我们导出一个函数的时候
    export default function(){ // 正确
        console.log(123)
    }
    export default function add(){ // 正确
        console.log(123)
    }
    
    import add from './until.js'
```
总结：<br>
1.0 在一个文件或模块中，export、import可以有多个，export default仅有一个 <br>
2.0 export default 的对象、变量、函数、类、 可以没有名字，但export导出的必须有名字 <br>
3.0 通过export方式导出，在导入时要加{ }(如果用 import * as ... from 也可以不用 {})，export default则不需要
4.0 export default与export可以在同一个js文件中同时使用
5.0 模块的导入导出意义在于将类聚的方法和变量等限定在私有的作用域中，同时支持引入和导出功能以顺畅地连接上下游依赖，使得用户完全不必考虑变量污染。

