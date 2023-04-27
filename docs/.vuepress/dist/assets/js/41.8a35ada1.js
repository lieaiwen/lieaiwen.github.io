(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{251:function(t,n,a){"use strict";a.r(n);var s=a(6),e=Object(s.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_12-0-call和apply的模拟实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-0-call和apply的模拟实现"}},[t._v("#")]),t._v(" 12.0 call和apply的模拟实现")]),t._v(" "),a("p",[a("strong",[t._v("用法：")])]),t._v(" "),a("blockquote",[a("p",[t._v("A.call(B,x,y)  B,x,y 为参数")])]),t._v(" "),a("ol",[a("li",[t._v("改变函数A的this指向，使之指向B; （B为null，undefined的时候A里面的this指向window）")]),t._v(" "),a("li",[t._v("把A函数放到B中运行，x和y是A函数的参数")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" var girl = { name:'du',age:18 }\n function boy(){ console.log(this.age) }\n\nboy.call(girl) // 18\n")])])]),a("p",[t._v("注意：")]),t._v(" "),a("ol",[a("li",[t._v("call改变了this的指向，指向了girl")]),t._v(" "),a("li",[t._v("boy 函数执行了")])]),t._v(" "),a("p",[a("strong",[t._v("模拟实现第一步")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" var girl = {\n     age: 18,\n     boy: function() {\n         console.log(this.age)\n     }\n };\n \n girl.boy(); // 18\n")])])]),a("p",[t._v("这样this 指向了girl，但是我们又增加了girl的属性，都这样写的话我们还有call干嘛？\n"),a("br"),t._v("\n那我们就把它再删除了。"),a("br"),t._v("\n继续我们的步骤：")]),t._v(" "),a("ol",[a("li",[t._v("将函数设为对象的属性")]),t._v(" "),a("li",[t._v("执行该函数")]),t._v(" "),a("li",[t._v("删除该函数")])]),t._v(" "),a("blockquote",[a("p",[t._v("1.0 girl.fn = boy"),a("br"),t._v("\n2.0 girl.fn()"),a("br"),t._v("\n3.0 delete girl.fn"),a("br")])]),t._v(" "),a("p",[t._v("所以我们的第一版likeCall："),a("br")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Function.prototype.ss = function(){ console.log(this) }\n\nfunction a(){}\na.ss() // function a(){}\n\n\nFunction.prototype.likeCall = function(context){\n// 首先要获取调用call的函数，用this可以获取\n    context.fn = this;\n    context.fn()\n    delete context.fn;\n} \n\nvar girl = { name:'du',age:18 }\n function boy(){ console.log(this.age) }\n\nboy.likeCall(girl) // 18\n")])])]),a("p",[a("strong",[t._v("模拟实现第二步")])]),t._v(" "),a("p",[t._v("call 里面是可以传参数的并且是一个到多个,此时我们就可以用到函数里面的arguments对象获取对象的参数了")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" function aa(a,b,c){ console.log(arguments) }\naa(1,2,3) \narguments = {\n      0: 1,\n      1: 2,\n      2: 3,\n      length: 3\n }\n因为arguments 是类似数组对象我们可以用for 循环\nvar args = []\nfor(var i = 1, len = arguments.length; i < len; i++) {\n    args.push('arguments[' + i + ']');\n}\n 执行后 args为 [arguments[1], arguments[2], arguments[3]]\n")])])]),a("p",[t._v("接下里我们把上面的数组放到要执行的函数里面")]),t._v(" "),a("ol",[a("li",[t._v("context.fn(...args) //es6")]),t._v(" "),a("li",[t._v("eval('context.fn(' + args +')') //es3")])]),t._v(" "),a("p",[t._v("所以我们的第二版代码是：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" Function.prototype.likeCall = function(context){\n // 首先要获取调用call的函数，用this可以获取\n    context.fn = this;\n    var args = []\n    for(var i = 1, len = arguments.length; i < len; i++) {\n        args.push('arguments[' + i + ']');\n    }\n     eval('context.fn(' + args +')')\n     delete context.fn;\n } \n \n var girl = { name:'du',age:18 }\n  function boy(a, b){ \n    console.log(this.age + '--' + a +'--' + b)\n  }\n \n boy.likeCall(girl,10,9) // 18--10--9\n")])])]),a("p",[t._v("不要急还有最后一步:"),a("br")]),t._v(" "),a("ol",[a("li",[t._v("第一个参数为null或者undefined的时候,即A的this 指向window"),a("br")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  var age = 18 \n   function boy(){ \n     console.log(this.age )\n   }\n  \n  boy.call(null) // 18\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("函数是有返回值的")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  var age = 18 \n   function boy(){ \n     return this.age +2\n   }\n  \n  boy.call(null) // 20\n")])])]),a("p",[t._v("综合上面两种情况直接上代码：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  Function.prototype.likeCall = function(context){\n      var context = context || window;\n  // 首先要获取调用call的函数，用this可以获取\n     context.fn = this;\n     var args = []\n     for(var i = 1, len = arguments.length; i < len; i++) {\n         args.push('arguments[' + i + ']');\n     }\n     var result =  eval('context.fn(' + args +')')\n      delete context.fn;\n     return result;\n  } \n测试：\n   var age = 18 \n   var woman = {age:30}\n   function boy(){ \n     return this.age +2\n   }\n  \n  boy.likeCall(null) // 20  返回值没问题 \n  boy.likeCall(woman) // 32 原来的也没问题\n")])])]),a("p",[t._v("完成了。"),a("br"),t._v(" "),a("strong",[t._v("apply的模拟实现")])]),t._v(" "),a("p",[t._v("apply跟call的区别就是 参数的不同而已 一个是多个参数一个是一个数组:\n"),a("br"),t._v("\n看我们第一行的代码就是：")]),t._v(" "),a("blockquote",[a("p",[t._v("A.apply(B,[1,2])")])]),t._v(" "),a("p",[t._v("所以我们只要修改一下就行了:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" Function.prototype.likeApply = function(context, arr){\n       var context = context || window;\n   // 首先要获取调用call的函数，用this可以获取\n      context.fn = this;\n      var result\n      if(!arr){\n            result = context.fn()\n      }else{\n          var args = []\n          for(var i = 1, len = arguments.length; i < len; i++) {\n              args.push('arguments[' + i + ']');\n          }\n          result =  eval('context.fn(' + args +')')\n      }\n       delete context.fn;\n      return result;\n   } \n 测试： 不用测试了 的有点自信吧！\n")])])]),a("p",[t._v("最后直接上bind的")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// bind要考虑返回的函数，作为构造函数被调用的情况")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Bind")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" context "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    context "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" fn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" f "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("result")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// result如果作为构造函数被调用，this指向的是new出来的对象")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this instanceof fn，判断new出来的对象是否为fn的实例")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// bind返回的函数作为普通函数被调用时")]),t._v("\n      context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果绑定的是构造函数 那么需要继承构造函数原型属性和方法")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实现继承的方式: 使用Object.create")]),t._v("\n  result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("参考链接："),a("a",{attrs:{href:""}},[t._v("冴羽的博客")]),t._v(" https://github.com/mqyqingfeng/Blog/issues/11"),a("br")])])}),[],!1,null,null,null);n.default=e.exports}}]);