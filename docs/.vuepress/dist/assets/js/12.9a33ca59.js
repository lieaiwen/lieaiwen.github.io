(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{77:function(a,e,t){"use strict";t.r(e);var r=t(0),n=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"数组操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组操作"}},[a._v("#")]),a._v(" 数组操作")]),a._v(" "),t("p",[a._v("数组对象的作用是：使用单独的变量名来存储一系列的值")]),a._v(" "),t("h2",{attrs:{id:"_1-0-push"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-0-push"}},[a._v("#")]),a._v(" 1.0 push")]),a._v(" "),t("p",[a._v("push 方法从数组尾部开始添加数据 array.push(item1, item2, …, itemX) "),t("br"),a._v("\n1.0 返回数组的长度 "),t("br"),a._v("\n2.0 原数组 发生改变 "),t("br"),a._v("\ndemo:\n"),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nlet a = [1,2,3]\nlet b = a.push(4,5,6) // a = [1,2,3,4,5,6]   b = 6\nlet a = [1,2,3]\nlet b = a.push([1,2]) // a = [1,2,3,[1,2]] b = 4\nlet a = [1,2,3]\nlet b = a.push() // a = [1,2,3] b = 3\n")])])]),a._v(" "),t("h2",{attrs:{id:"_2-0-unshift"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-unshift"}},[a._v("#")]),a._v(" 2.0 unshift")]),a._v(" "),t("p",[a._v("unshift 方法从数组头部开始添加数据 array.unshift(item1, item2, …, itemX) shift（转移，挪动，变化） "),t("br"),a._v("\n1.0 返回数组的长度 "),t("br"),a._v("\n2.0 原数组 发生改变 "),t("br"),a._v(" "),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nlet a = [1,2,3]\nlet b = a.unshift(4,5,6) // a = [4,5,6,1,2,3]   b = 6\nlet a = [1,2,3]\nlet b = a.unshift([1,2]) // a = [[1,2],1,2,3] b = 4\nlet a = [1,2,3]\nlet b = a.unshift() // a = [1,2,3] b = 3\n")])])]),a._v(" "),t("h2",{attrs:{id:"_3-0-pop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-0-pop"}},[a._v("#")]),a._v(" 3.0 pop")]),a._v(" "),t("p",[a._v("pop 方法来删除并返回数组的最后一个元素。 array.pop() 里面没有参数只能操作一个"),t("br"),a._v("\n1.0 返回删除的值 "),t("br"),a._v("\n2.0 原数组 发生改变 "),t("br"),a._v("\ndemo:\n"),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nlet a = [1,2,3]\nlet b = a.pop() // a = [1,2]   b = 2\n")])])]),a._v(" "),t("h2",{attrs:{id:"_4-0-shift"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-0-shift"}},[a._v("#")]),a._v(" 4.0 shift")]),a._v(" "),t("p",[a._v("shift 方法来删除并返回数组的第一个元素。 array.shift() 里面没有参数只能操作一个"),t("br"),a._v("\n1.0 返回删除的值 "),t("br"),a._v("\n2.0 原数组 发生改变 "),t("br"),a._v("\ndemo:\n"),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nlet a = [1,2,3]\nlet b = a.shift() // a = [2,3]   b = 1\n")])])]),a._v(" "),t("h2",{attrs:{id:"_5-0-slice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-0-slice"}},[a._v("#")]),a._v(" 5.0 slice")]),a._v(" "),t("p",[a._v("slice 切割数组  arr.slice(start, end) "),t("br"),a._v("\n1.0 返回切割后的数组 "),t("br"),a._v("\n2.0 原数组 不改变 "),t("br"),a._v("\n3.0 都是可选参数  什么都不传的话，返回原数组 并且允许负值 "),t("br"),a._v("\n4.0 只传一个参数的话 表明从这个下标开始到数组结尾结束"),t("br"),a._v("\n5.0 传两个值则从 第一个参数下标开始到 第二个参数下标 之前结束 ---重点 不包括第二个参数下标的值"),t("br"),a._v("\ndemo:\n"),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nlet a = [1,2,3]\nlet b = a.slice() // a = [1,2,3]   b = [1,2,3]\nlet a = [1,2,3]\nlet b = a.slice() // a = [1,2,3]   b = [1,2,3]\nlet a = [1,2,3]\nlet b = a.slice(1) // a = [1,2,3] b  = [2,3]\nlet a = [1,2,3]\nlet b = a.slice(1,2) // a = [1,2,3] b  = [2]\n// 5.1超过的话 截取到最后一个结束\nlet a = [1,2,3]\nlet b = a.slice(1,5) // a = [1,2,3] b  = [2,3]\n// 5.2 第一个参数为负数\nlet a = [1,2,3,4]\nlet b = a.slice(-2) // a = [1,2,3,4] b  = [3,4]\n// 5.3 两个都为 负数  -2 从 3开始  2 也是3 并且不能包括它 所以为[]\nlet a = [1,2,3,4]\nlet b = a.slice(-2,2) // a = [1,2,3,4] b  = []\nlet c = a.slice(-2,3) // a = [1,2,3,4]  c = [3]\nlet d = a.slice(-3,-1) // a = [1,2,3,4]  c = [2,3]\nlet e = a.slice(-1,-4) // 这种乱的情况 返回 []\n")])])]),a._v(" "),t("h2",{attrs:{id:"_6-0-splice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-0-splice"}},[a._v("#")]),a._v(" 6.0 splice")]),a._v(" "),t("p",[a._v("splice 方法 也是修改数组的  语法：array.splice(index,howmany,item1,…,itemX) "),t("br"),a._v("\n1.0 没有参数的话返回空数组，原数组不变\n"),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nlet a = [1,2,3]\nlet b = a.splice() // a = [1,2,3]   b = []\n")])]),a._v("\n2.0 一个参数 ，表示从 该参数索引开始截取，到数组结束，原数组是剩下的\n"),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nlet a = [1,2,3]\nlet b = a.splice(1) // a = [1]   b = [2,3]\n// 也可是负数\nlet b = a.splice(-1) // a = [1,2]   b = [3]\n")])]),a._v("\n3.0 两个参数 ， 从第一个参数索引开始到，第二个参数表示的是长度意思是1 就截取一个 2 就截取2个\n"),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nlet a = [1,2,3]\nlet b = a.splice(0,1) // a = [2,3]   b = [1]\nlet b = a.splice(1,2) // a = [1]   b = [2,3]\n")])]),a._v("\n// 4.0 三个参数以上的， 同上 ，后面的参数 就是往数组里面追加的，往原数组截取的位置开始追加 我们这里是a\n"),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nlet a = [1,2,3,4]\nlet b = a.splice(0,1,5) // a = [5,2,3,4]   b = [1]\nlet b = a.splice(1,2,5,6) // a = [1,5,6,4]   b = [2,3]\n")])])]),a._v(" "),t("h2",{attrs:{id:"_7-0-reverse"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-0-reverse"}},[a._v("#")]),a._v(" 7.0 reverse")]),a._v(" "),t("p",[a._v("reverse 方法 颠倒数组中元素的顺序，语法 array.reverse()  也有返回值"),t("br"),a._v(" "),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nlet a = [1,2,3]\nlet b = a.reverse(); // a = [3,2,1] b = [3,2,1]\n")]),a._v("\n")])]),a._v(" "),t("h2",{attrs:{id:"_8-0-sort"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-0-sort"}},[a._v("#")]),a._v(" 8.0 sort")]),a._v(" "),t("p",[a._v("sort 对数组进行排序, 语法 array.sort(sortfunction) "),t("br"),a._v("\n1.0 基础排序是 从第一位开始的排完之后才排第二个 所以 "),t("br"),a._v(" "),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nlet a = [1,3,12,21]\nlet b = a.sort(); // a = [1,12,21,3] b = [1,12,21,3]\n")]),a._v("\n")]),a._v("\n2.0 添加 排序函数\n"),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nlet a = [1,3,12,21]\nlet c = a.sort(function(a,b){\nreturn a - b; // 从小到大排序 a = [1,3,12,21] c = [1,3,12,21]\nreturn b - a; // 从大到小  a = [21,12,3,1] c = [21,12,3,1]\n}); //\n")]),a._v("\n")])]),a._v(" "),t("h2",{attrs:{id:"_9-0-join"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-0-join"}},[a._v("#")]),a._v(" 9.0 join")]),a._v(" "),t("p",[a._v("join 方法 可以把数组转换成字符串 "),t("br"),a._v(" "),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nlet a = [1,2,3]\nlet b = a.join(); // a = [1,2,3] b = '1,2,3'\nlet b = a.join('+'); // a = [1,2,3] b = 1+2+3\nlet b = a.join(''); // a = [1,2,3] b = '123'\n")]),a._v("\n")])]),a._v(" "),t("h2",{attrs:{id:"_10-0-concat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-0-concat"}},[a._v("#")]),a._v(" 10.0 concat")]),a._v(" "),t("p",[a._v("concat 方法属于字符串的方法，也可以用于数组拼接 语法：string.concat(string1, string2, …, stringX) "),t("br"),a._v("\n1.0 拼接 多个单个数据的\n"),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nlet a = [1,2,3]\nlet b = a.concat(4,5,6); // a = [1,2,3] b = [1,2,3,4,5,6]\n")]),a._v("\n")]),a._v("\n2.0 一个单数组的情况\n"),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nlet a = [1,2,3]\nlet b = a.concat([4,5,6]); // a = [1,2,3] b = [1,2,3,4,5,6]\n")]),a._v("\n")]),a._v("\n3.0 多个 数组的情况\n"),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nlet a = [1,2,3]\nlet b = a.concat([4,5,6],[7]); // a = [1,2,3] b = [1,2,3,4,5,6,7]\n")]),a._v("\n")])]),a._v(" "),t("h2",{attrs:{id:"_11-0-es5-增加的一些数组方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-0-es5-增加的一些数组方法"}},[a._v("#")]),a._v(" 11.0  es5 增加的一些数组方法")]),a._v(" "),t("p",[a._v("indexOf() 也是字符串的方法 方法 string.indexOf(searchvalue,start) 有返回值"),t("br"),a._v("\n1.0 传一个参数的话，存在 就返回索引值 ，不存在就返回-1\n"),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nlet a = [1,2,3]\nlet b = a.indexOf(2); // a = [1,2,3] b = 1\n")]),a._v("\n")]),a._v("\n2.0  第二个参数也在的话，就是从第二个下标开始查询\n"),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nlet a = [1,2,3]\nlet b = a.indexOf(2,2); // a = [1,2,3] b = -1\nlet b = a.indexOf(2,1); // a = [1,2,3] b = 1\n")]),a._v("\n")])]),a._v(" "),t("h2",{attrs:{id:"_12-0-foreach"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12-0-foreach"}},[a._v("#")]),a._v(" 12.0 forEach()")]),a._v(" "),t("p",[a._v("forEach() 语法: array.forEach(function(currentValue, index, arr), thisValue) "),t("br"),a._v("\n遍历数组 ，没有返回值或者说是返回值为undefined "),t("br"),a._v(" "),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nlet a = [1,2,3]\narr.forEach((item,index,arr)=>{\n//item 为当前数组元素\n// index 为当前索引\n// arr 为数组名字\n})\n")]),a._v("\n")])]),a._v(" "),t("h2",{attrs:{id:"_12-0-map"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12-0-map"}},[a._v("#")]),a._v(" 12.0 map()")]),a._v(" "),t("p",[a._v("map 语法:array.map(function(currentValue,index,arr), thisValue) "),t("br"),a._v("\nmap()  遍历数组 用来接收一个返回值，创建一个新数组 ，不改变原数组\n"),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nlet a = [1,2,3]\nlet b = a.map((item,index,arr)=>{\nreturn item*2;\n})\n// a = [1,2,3] b=[2,4,6]\n")]),a._v("\n")])]),a._v(" "),t("h2",{attrs:{id:"_13-0-filter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_13-0-filter"}},[a._v("#")]),a._v(" 13.0 filter()")]),a._v(" "),t("p",[a._v("filter 语法:array.filter(function(currentValue,index,arr), thisValue) "),t("br"),a._v("\nfilter()  遍历数组 用来接收一个返回值，创建一个新数组 ，不改变原数组\n"),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nlet arr = [1,2,3,4]\nlet arr1 = arr.filter(function(item,index){\nreturn item>=3\n})\n// arr = [1,2,3,4] arr1=[3,4]\n")]),a._v("\n")])]),a._v(" "),t("h2",{attrs:{id:"_14-0-some"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_14-0-some"}},[a._v("#")]),a._v(" 14.0 some()")]),a._v(" "),t("p",[a._v("some 语法:array.filter(function(currentValue,index,arr), thisValue) "),t("br"),a._v("\nsome()  检测数组中是否含有某一个值，返回一个布尔值，如果数组中有任意一个元素满足给定的条件，结果就为 true否则则为false。\n"),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nlet arr = [1,2,3,4]\nlet arr1 = arr.some(function(item,index){\nreturn item>=3\n})\n// arr = [1,2,3,4] arr1=true\n")]),a._v("\n")])]),a._v(" "),t("h2",{attrs:{id:"_14-0-every"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_14-0-every"}},[a._v("#")]),a._v(" 14.0 every()")]),a._v(" "),t("p",[a._v("every 语法:array.every(function(currentValue,index,arr), thisValue) "),t("br"),a._v("\nevery()  方法用于检测数组所有元素是否都符合指定条件（通过函数提供）,返回一个布尔值,结果为 true或false。\n"),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nlet arr = [1,2,3,4]\nlet arr1 = arr.every(function(item,index){\nreturn item>=3\n})\n// arr = [1,2,3,4] arr1=false\n")]),a._v("\n")])]),a._v(" "),t("h2",{attrs:{id:"_15-0-reduce"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_15-0-reduce"}},[a._v("#")]),a._v(" 15.0 reduce()")]),a._v(" "),t("p",[a._v("reduce 语法: array.reduce(function(total, currentValue, currentIndex, arr), initialValue) "),t("br"),a._v("\nreduce()  对数组中的所有元素调用指定的回调函数，该回调函数的返回值为累计结果。并且把返回值在下一次回调函数时作为参数提供。\n"),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nlet arr = [1,2,3,4]\nlet arr1 = arr.reduce(function(total,num){\nreturn total + num ;\n})\n// arr = [1,2,3,4] arr1=10\n")]),a._v("\n")])]),a._v(" "),t("h2",{attrs:{id:"_16-0-es6-新增的方法-array-from"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_16-0-es6-新增的方法-array-from"}},[a._v("#")]),a._v(" 16.0 ES6 新增的方法 Array.from()")]),a._v(" "),t("p",[a._v("语法：Array.from(arrayLike[, mapFn[, thisArg]]) "),t("br"),a._v("\nArray.from()方法就是将一个类数组对象或者可遍历对象转换成一个真正的数组。"),t("br"),a._v("\n1.0 Array.from 返回一个真正的数组\n"),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nlet a = [1,2,3]\n// 参数为数组，返回和原数组一样的数组\nlet b = Array.from(a) // a = [1, 2, 3]  b = [1, 2, 3]\nb[2] = 4 // a = [1, 2, 3]  b = [1, 2, 4]\n// 参数含空位\nlet c = Array.from([1, ,3]) // c = [1,undefined,3]\n")]),a._v("\n")]),a._v("\n2.0 将字符串转为数组\n"),t("pre",[t("code",{staticClass:"javascript"},[a._v('\nlet  str = \'hello world!\';\nconsole.log(Array.from(str)) // ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", "!"]\n')]),a._v("\n")]),a._v("\n2.5 将Set结构的数据转换为真正的数组\n"),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nlet a = [1,2,3]\nlet set = new Set(arr)\nlet b = Array.from(set) // a = [1,2,3]  b = [1,2,3]\n")]),a._v("\n")]),a._v("\n3.0 Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组\n"),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nlet a = [1,2,3]\nlet set = new Set(arr)\nlet b = Array.from(set, item => item + 1) // a = [1,2,3]  b = [2,3,4]\n")]),a._v("\n")]),a._v("\n4.0 那么什么是类数组对象呢？所谓类数组对象，最基本的要求就是具有length属性的对象 "),t("br"),a._v("\n4.1\n"),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nlet arrayLike = {\n0: 'tom',\n1: '65',\n2: '男',\n3: ['jane','john','Mary'],\n'length': 4\n}\nlet arr = Array.from(arrayLike) // arr =  ['tom','65','男',['jane','john','Mary']]\n")]),a._v("\n")]),a._v("\n4.2\n"),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nlet arrayLike = {\n'name': 'tom',\n'age': '65',\n'sex': '男',\n'friends': ['jane','john','Mary'],\nlength: 4\n}\nlet arr = Array.from(arrayLike) // arr= [ undefined, undefined, undefined, undefined ]\n")]),a._v("\n")]),a._v("\n总结：要将一个类数组对象转换为一个真正的数组，必须具备以下条件："),t("br"),a._v("\n1、该类数组对象必须具有length属性，用于指定数组的长度。如果没有length属性，那么转换后的数组是一个空数组。 "),t("br"),a._v("\n2、该类数组对象的属性名必须为数值型或字符串型的数字 (ps: 该类数组对象的属性名可以加引号，也可以不加引号)")]),a._v(" "),t("h2",{attrs:{id:"_17-0-array-of"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_17-0-array-of"}},[a._v("#")]),a._v(" 17.0 Array.of()")]),a._v(" "),t("p",[a._v("Array.of() 方法： 数组创建，将参数中所有值作为元素形成数组，如果参数为空，则返回一个空数组。\n"),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nlet a = Array.of(1,2,3) // a = [1,2,3]\nlet b = Array.of(1,'2',true) // a = [1,'2',true]\nlet c = Array.of();// c\nlet d = Array.of(1,'',' ',undefined,,2) // 这个是要报错的 参数不能为空(也就是里面的两个,,)\n")]),a._v("\n")])]),a._v(" "),t("h2",{attrs:{id:"_18-0-find"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_18-0-find"}},[a._v("#")]),a._v(" 18.0 find()")]),a._v(" "),t("p",[a._v("find() 方法查找数组中符合条件的元素，若有多个符合条件的元素，则返回第一个元素。\n"),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nlet a = Array.of(1,2,3) // a = [1,2,3]\nlet b = a.find(item => item > 2) //b = 3\n// 数组空位处理为 undefined\nlet c = [,1].find(n => true) // undefined\nconsole.log([undefined, 1].find(n => 10)) // undefined\n")]),a._v("\n")])]),a._v(" "),t("h2",{attrs:{id:"_19-0-findindex"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_19-0-findindex"}},[a._v("#")]),a._v(" 19.0 findIndex()")]),a._v(" "),t("p",[a._v("findIndex() 方法查找数组中符合条件的元素，若有多个符合条件的元素，则返回第一个元素索引。 "),t("br"),a._v("\n// 参数1：回调函数 "),t("br"),a._v("\n// 参数2(可选)：指定回调函数中的 this 值 "),t("br"),a._v(" "),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nlet a = Array.of(1,2,3) // a = [1,2,3]\nlet b = a.findIndex(item => item === 1) //b = 0\n// 数组空位处理为 undefined\nlet c = [,1].findIndex(n => true) // c = 0\n")]),a._v("\n")])]),a._v(" "),t("h2",{attrs:{id:"_20-0-includes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_20-0-includes"}},[a._v("#")]),a._v(" 20.0 includes()")]),a._v(" "),t("p",[a._v("includes()方法：检测数组中是否包含一个值 "),t("br"),a._v("\n注意:与Set 和Map 的has方法区分;Set 的has 方法用于查找值; "),t("br"),a._v("\nMap的has方法用于查找键名\n"),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nlet a = [1,2,3]\nlet b = a.includes(1) //b = true\n// 参数2：可选，搜索的起始索引，默认为0\nlet c = a.includes(1,2) //c = false\n// NaN的包含判断\nlet d = [1,NaN].includes(NaN) // true\n")]),a._v("\n")])]),a._v(" "),t("h2",{attrs:{id:"_21-0-fill"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_21-0-fill"}},[a._v("#")]),a._v(" 21.0 fill()")]),a._v(" "),t("p",[a._v("fill()方法：将一定范围索引的数组元素内容填充为单个指定的值 "),t("br"),a._v(" "),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nlet a = [1,2,3]\n// 参数1： 用来填充的值\n// 参数2：被填充的起始索引\n// 参数3(可选)： 被填充的结束索引，默认为数组末尾\nlet b = a.fill(10,1,2) //a = [1,10,3] b = [1,10,3]\nlet b = a.fill(10,1) // a = [1,10,10] b = [1,10,10]\n")]),a._v("\n")])]),a._v(" "),t("h2",{attrs:{id:"_22-0-entries"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_22-0-entries"}},[a._v("#")]),a._v(" 22.0 entries()")]),a._v(" "),t("p",[a._v("entries()方法：遍历键值对 "),t("br"),a._v(" "),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nlet entries = ['a', 'b'].entries();\nconsole.log(entries.next().value); // [0, \"a\"]\nconsole.log(entries.next().value); // [1, \"b\"]\n// 2.0 使用 for of 循环\nfor(let [key, value] of ['a', 'b'].entries()){\nconsole.log(key, value);\n}\n// 0 ,'a'\n// 1 ,'b'\n// 3.0 数组含空位\nconsole.log([...[,'a'].entries()]) // [[0,undefined], [1,'a']]\n")]),a._v("\n")])]),a._v(" "),t("h2",{attrs:{id:"_23-0-keys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_23-0-keys"}},[a._v("#")]),a._v(" 23.0 keys()")]),a._v(" "),t("p",[a._v("keys() 遍历键名。 (它也有next方法)\n"),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nfor(let [key, value] of ['a', 'b'].keys()){\nconsole.log(key, value);\n}\n// 0\n// 1\nconsole.log([...[,'a'].keys()]) // [0,1]\n")]),a._v("\n")])]),a._v(" "),t("h2",{attrs:{id:"_24-0-values"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_24-0-values"}},[a._v("#")]),a._v(" 24.0 values()")]),a._v(" "),t("p",[a._v("values() 方法：遍历键值 (它也有next方法)\n"),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nfor(let [key, value] of ['a', 'b'].values()){\nconsole.log(key, value);\n}\n// 'a'\n// 'b'\nconsole.log([...[,'a'].values()]) // [undefined,\"a\"]\n")]),a._v("\n")])]),a._v(" "),t("h2",{attrs:{id:"_25-0-flat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_25-0-flat"}},[a._v("#")]),a._v(" 25.0 flat()")]),a._v(" "),t("p",[a._v("嵌套数组转一维 数组  (注意：兼容性很不好)\n"),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nconsole.log([1 ,[2, 3]].flat()); // [1, 2, 3]\n// 指定转换的嵌套层数\nconsole.log([1, [2, [3, [4, 5]]]].flat(2)); // [1, 2, 3, [4, 5]]\n// 不管嵌套多少层\nconsole.log([1, [2, [3, [4, 5]]]].flat(Infinity)); // [1, 2, 3, 4, 5]\n// 自动跳过空位\nconsole.log([1, [2, , 3]].flat()); // [1, 2, 3]\n")]),a._v("\n")])]),a._v(" "),t("h2",{attrs:{id:"_26-0-复制数组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_26-0-复制数组"}},[a._v("#")]),a._v(" 26.0 复制数组")]),a._v(" "),t("p",[a._v("... 扩展运算符\n"),t("pre",[t("code",{staticClass:"javascript"},[a._v("\nlet arr = [1, 2], arr1 = [...arr];\narr1[0] = 5  // arr = [1, 2] arr1 = [5, 2]\n// 数组含空位\nlet arr2 = [1, , 3],\narr3 = [...arr2]; // arr3 = [1, undefined, 3]\n// 合并数组\nconsole.log([...[1,2], ...[3,4]]) // [1,2,3,4]\n")]),a._v("\n")])])])}),[],!1,null,null,null);e.default=n.exports}}]);