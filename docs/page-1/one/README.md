## 数组操作
>日常开发中，数组对于我们来说是经常使用到的，由此这里给大家分享几十个关于Array实用的代码，
>内容很多，建议收藏阅读

数组对象的作用是：使用单独的变量名来存储一系列的值

## 1.0 push
push 方法从数组尾部开始添加数据 array.push(item1, item2, …, itemX) <br/>
1.0 返回数组的长度 <br/>
2.0 原数组 发生改变 <br/>
```js
let a = [1,2,3]
let b = a.push(4,5,6) // a = [1,2,3,4,5,6]   b = 6
let a = [1,2,3]
let b = a.push([1,2]) // a = [1,2,3,[1,2]] b = 4
let a = [1,2,3]
let b = a.push() // a = [1,2,3] b = 3
```



## 2.0 unshift
unshift 方法从数组头部开始添加数据 array.unshift(item1, item2, …, itemX) shift（转移，挪动，变化） <br/>
1.0 返回数组的长度 <br/>
2.0 原数组 发生改变 <br/>
```js
let a = [1,2,3]
let b = a.unshift(4,5,6) // a = [4,5,6,1,2,3]   b = 6
let a = [1,2,3]
let b = a.unshift([1,2]) // a = [[1,2],1,2,3] b = 4
let a = [1,2,3]
let b = a.unshift() // a = [1,2,3] b = 3
```


## 3.0 pop
pop 方法来删除并返回数组的最后一个元素。 array.pop() 里面没有参数只能操作一个<br/>
1.0 返回删除的值 <br/>
2.0 原数组 发生改变 <br/>
```js
let a = [1,2,3]
let b = a.pop() // a = [1,2]   b = 2
```


## 4.0 shift
shift 方法来删除并返回数组的第一个元素。 array.shift() 里面没有参数只能操作一个<br/>
1.0 返回删除的值 <br/>
2.0 原数组 发生改变 <br/>
```js
let a = [1,2,3]
let b = a.shift() // a = [2,3]   b = 1
```

## 5.0 slice
slice 切割数组  arr.slice(start, end) <br/>
1.0 返回切割后的数组 <br/>
2.0 原数组 不改变 <br/>
3.0 都是可选参数  什么都不传的话，返回原数组 并且允许负值 <br/>
4.0 只传一个参数的话 表明从这个下标开始到数组结尾结束<br/>
5.0 传两个值则从 第一个参数下标开始到 第二个参数下标 之前结束 **重点** 不包括第二个参数下标的值<br/>
```js
let a = [1,2,3]
let b = a.slice() // a = [1,2,3]   b = [1,2,3]

let a = [1,2,3]
let b = a.slice(1) // a = [1,2,3] b  = [2,3]

let a = [1,2,3]
let b = a.slice(1,2) // a = [1,2,3] b  = [2]

// 5.1超过的话 截取到最后一个结束
let a = [1,2,3]
let b = a.slice(1,5) // a = [1,2,3] b  = [2,3]

// 5.2 第一个参数为负数
let a = [1,2,3,4]
let b = a.slice(-2) // a = [1,2,3,4] b  = [3,4]

// 5.3 两个都为 负数  -2 从 3开始  2 也是3 并且不能包括它 所以为[]
let a = [1,2,3,4]
let b = a.slice(-2,2) // a = [1,2,3,4] b  = []
let c = a.slice(-2,3) // a = [1,2,3,4]  c = [3]
let d = a.slice(-3,-1) // a = [1,2,3,4]  c = [2,3]
let e = a.slice(-1,-4) // 这种乱的情况 返回 []
```



## 6.0 splice
splice 方法 也是修改数组的  语法：array.splice(index,howmany,item1,…,itemX) <br/>
1.0 没有参数的话返回空数组，原数组不变
```js
let a = [1,2,3]
let b = a.splice() // a = [1,2,3]   b = []
```

2.0 一个参数 ，表示从 该参数索引开始截取，到数组结束，原数组是剩下的
```js
let a = [1,2,3]
let b = a.splice(1) // a = [1]   b = [2,3]
// 也可是负数
let b = a.splice(-1) // a = [1,2]   b = [3]
```
3.0 两个参数 ， 从第一个参数索引开始到，第二个参数表示的是长度意思是1 就截取一个 2 就截取2个
```js
let a = [1,2,3]
let b = a.splice(0,1) // a = [2,3]   b = [1]
let b = a.splice(1,2) // a = [1]   b = [2,3]
```
4.0 三个参数以上的， 同上 ，后面的参数 就是往数组里面追加的，往原数组截取的位置开始追加 我们这里是a
```js
let a = [1,2,3,4]
let b = a.splice(0,1,5) // a = [5,2,3,4]   b = [1]
let b = a.splice(1,2,5,6) // a = [1,5,6,4]   b = [2,3]
```

## 7.0 reverse
reverse 方法 颠倒数组中元素的顺序，语法 array.reverse()  也有返回值<br/>
```js
let a = [1,2,3]
let b = a.reverse(); // a = [3,2,1] b = [3,2,1]
```

## 8.0 sort
sort 对数组进行排序, 语法 array.sort(sortfunction) <br/>
1.0 基础排序是 从第一位开始的排完之后才排第二个 所以 <br/>
```js
let a = [1,3,12,21]
let b = a.sort(); // a = [1,12,21,3] b = [1,12,21,3]
```
2.0 添加 排序函数
```js
let a = [1,3,12,21]
let c = a.sort(function(a,b){
  return a - b; // 从小到大排序 a = [1,3,12,21] c = [1,3,12,21]
  return b - a; // 从大到小  a = [21,12,3,1] c = [21,12,3,1]
}); 
```

## 9.0 join
join 方法 可以把数组转换成字符串 <br/>
```js
let a = [1,2,3]
let b = a.join(); // a = [1,2,3] b = '1,2,3'
let b = a.join('+'); // a = [1,2,3] b = 1+2+3
let b = a.join(''); // a = [1,2,3] b = '123'
```

## 10.0 concat
concat 方法属于字符串的方法，也可以用于数组拼接 语法：string.concat(string1, string2, …, stringX) <br/>
1.0 拼接 多个单个数据的
```js
let a = [1,2,3]
let b = a.concat(4,5,6); // a = [1,2,3] b = [1,2,3,4,5,6]
```
2.0 一个单数组的情况
```js
let a = [1,2,3]
let b = a.concat([4,5,6]); // a = [1,2,3] b = [1,2,3,4,5,6]
```
3.0 多个 数组的情况
```js
let a = [1,2,3]
let b = a.concat([4,5,6],[7]); // a = [1,2,3] b = [1,2,3,4,5,6,7]
```

## 11.0  es5 增加的一些数组方法
indexOf() 也是字符串的方法 方法 string.indexOf(searchvalue,start) 有返回值<br/>
1.0 传一个参数的话，存在 就返回索引值 ，不存在就返回-1
```js
let a = [1,2,3]
let b = a.indexOf(2); // a = [1,2,3] b = 1
```
2.0  第二个参数也在的话，就是从第二个下标开始查询
```js
let a = [1,2,3]
let b = a.indexOf(2,2); // a = [1,2,3] b = -1
let b = a.indexOf(2,1); // a = [1,2,3] b = 1
```


## 12.0 forEach()
forEach() 语法: array.forEach(function(currentValue, index, arr), thisValue) <br/>
遍历数组 ，没有返回值或者说是返回值为undefined <br/>
```js
let a = [1,2,3]
arr.forEach((item,index,arr)=>{
   //item 为当前数组元素
   // index 为当前索引
   // arr 为数组名字
})
```


## 12.0 map()
map 语法:array.map(function(currentValue,index,arr), thisValue) <br/>
map()  遍历数组 用来接收一个返回值，创建一个新数组 ，不改变原数组
```js
let a = [1,2,3]
let b = a.map((item,index,arr)=>{
  return item*2;
})
// a = [1,2,3] b=[2,4,6]
```


## 13.0 filter()
filter 语法:array.filter(function(currentValue,index,arr), thisValue) <br/>
filter()  遍历数组 用来接收一个返回值，创建一个新数组 ，不改变原数组
```js
let arr = [1,2,3,4]
let arr1 = arr.filter(function(item,index){
	return item>=3
})
// arr = [1,2,3,4] arr1=[3,4]
```

## 14.0 some()
some 语法:array.some(function(currentValue,index,arr), thisValue) <br/>
some()  检测数组中是否含有某一个值，返回一个布尔值，如果数组中有任意一个元素满足给定的条件，结果就为 true否则则为false。
```js
let arr = [1,2,3,4]
let arr1 = arr.some(function(item,index){
	return item>=3
})
// arr = [1,2,3,4] arr1=true
```

## 14.0 every()
every 语法:array.every(function(currentValue,index,arr), thisValue) <br/>
every()  方法用于检测数组所有元素是否都符合指定条件（通过函数提供）,返回一个布尔值,结果为 true或false。
```js
let arr = [1,2,3,4]
let arr1 = arr.every(function(item,index){
	return item>=3
})
// arr = [1,2,3,4] arr1=false
```


## 15.0 reduce()
reduce 语法: array.reduce(function(total, currentValue, currentIndex, arr), initialValue) <br/>
* total 必需。初始值, 或者计算结束后的返回值。
* initialValue	可选。传递给函数的初始值
* reduce()  对数组中的所有元素调用指定的回调函数，该回调函数的返回值为累计结果。并且把返回值在下一次回调函数时作为参数提供。
```js
let arr = [1,2,3,4]
let arr1 = arr.reduce(function(total,num){
	return total + num ;
})
//注意： 如果不传 initialValue 则数组的第一位会成为 total 也就是说
//reduc 是从第二位开始 遍历的
// arr = [1,2,3,4] arr1=10

var arr1 = [1, 2, [3, 4]];
arr1.flat();

//展开单列矩阵
arr1.reduce((acc, val) => acc.concat(val), []);// [1, 2, 3, 4] 
// acc就是 total 
// [] 就是 initialValue
// 则acc就是[]

// 如果是多层的话
function flattenDeep(arr1) {
   return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}
flattenDeep(arr1);

// 递归版本的反嵌套
function flatten(array) {
  var flattend = [];
  (function flat(array) {
    array.forEach(function(el) {
      if (Array.isArray(el)) flat(el);
      else flattend.push(el);
    });
  })(array);
  return flattend;
}
```




## 16.0 ES6 新增的方法 Array.from()
语法：Array.from(arrayLike[, mapFn[, thisArg]]) <br/>
Array.from()方法就是将一个类数组对象或者可遍历对象转换成一个真正的数组。<br/>
1.0 Array.from 返回一个真正的数组
```js
let a = [1,2,3]
// 参数为数组，返回和原数组一样的数组
let b = Array.from(a) // a = [1, 2, 3]  b = [1, 2, 3]
b[2] = 4 // a = [1, 2, 3]  b = [1, 2, 4]
// 参数含空位
let c = Array.from([1, ,3]) // c = [1,undefined,3]
```
2.0 将字符串转为数组
```js
let  str = 'hello world!';
console.log(Array.from(str)) // ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", "!"]
```

2.5 将Set结构的数据转换为真正的数组
```js
let a = [1,2,3]
let set = new Set(arr)
let b = Array.from(set) // a = [1,2,3]  b = [1,2,3]
```
3.0 Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组
```js
let a = [1,2,3]
let set = new Set(arr)
let b = Array.from(set, item => item + 1) // a = [1,2,3]  b = [2,3,4]
```
4.0 那么什么是类数组对象呢？
>所谓类数组对象，最基本的要求就是具有length属性的对象 <br/>

4.1 
```js
let arrayLike = {
    0: 'tom',
    1: '65',
    2: '男',
    3: ['jane','john','Mary'],
    'length': 4
}
let arr = Array.from(arrayLike) // arr =  ['tom','65','男',['jane','john','Mary']]
```
4.2
```js
let arrayLike = {
    'name': 'tom',
    'age': '65',
    'sex': '男',
    'friends': ['jane','john','Mary'],
    length: 4
}
let arr = Array.from(arrayLike) // arr= [ undefined, undefined, undefined, undefined ]
```
总结：要将一个类数组对象转换为一个真正的数组，必须具备以下条件：<br/>
1、该类数组对象必须具有length属性，用于指定数组的长度。如果没有length属性，那么转换后的数组是一个空数组。 <br/>
2、该类数组对象的属性名必须为数值型或字符串型的数字 (ps: 该类数组对象的属性名可以加引号，也可以不加引号)

## 17.0 Array.of()
Array.of() 方法： 数组创建，将参数中所有值作为元素形成数组，如果参数为空，则返回一个空数组。
```js
let a = Array.of(1,2,3) // a = [1,2,3]
let b = Array.of(1,'2',true) // a = [1,'2',true]
let c = Array.of();// c
let d = Array.of(1,'',' ',undefined,,2) // 这个是要报错的 参数不能为空(也就是里面的两个,,)
```

## 18.0 find()
find() 方法查找数组中符合条件的元素，若有多个符合条件的元素，则返回第一个元素。
```js
let a = Array.of(1,2,3) // a = [1,2,3]
let b = a.find(item => item > 2) //b = 3
// 数组空位处理为 undefined
let c = [,1].find(n => true) // undefined
console.log([undefined, 1].find(n => 10)) // undefined
```


## 19.0 findIndex()
findIndex() 方法查找数组中符合条件的元素，若有多个符合条件的元素，则返回第一个元素索引。 <br/>
参数1：回调函数 <br/>
参数2(可选)：指定回调函数中的 this 值 <br/>
```js
let a = Array.of(1,2,3) // a = [1,2,3]
let b = a.findIndex(item => item === 1) //b = 0
// 数组空位处理为 undefined
let c = [,1].findIndex(n => true) // c = 0
```


## 20.0 includes()
includes()方法：检测数组中是否包含一个值 <br/>
注意:与Set 和Map 的has方法区分;Set 的has 方法用于查找值; <br/>
  Map的has方法用于查找键名
```js
let a = [1,2,3]
let b = a.includes(1) //b = true
// 参数2：可选，搜索的起始索引，默认为0
let c = a.includes(1,2) //c = false
// NaN的包含判断
let d = [1,NaN].includes(NaN) // true
```


## 21.0 fill()
fill()方法：将一定范围索引的数组元素内容填充为单个指定的值 <br/>
```js
let a = [1,2,3]
// 参数1： 用来填充的值
// 参数2：被填充的起始索引
// 参数3(可选)： 被填充的结束索引，默认为数组末尾
let b = a.fill(10,1,2) //a = [1,10,3] b = [1,10,3]
let b = a.fill(10,1) // a = [1,10,10] b = [1,10,10]
```

## 22.0 entries()
entries()方法：遍历键值对 <br/>
```js
let entries = ['a', 'b'].entries();
console.log(entries.next().value); // [0, "a"]
console.log(entries.next().value); // [1, "b"]
// 2.0 使用 for of 循环
for(let [key, value] of ['a', 'b'].entries()){
  console.log(key, value);
}
// 0 ,'a'
// 1 ,'b'
```

## 23.0 keys()
keys() 遍历键名。 (它也有next方法)
```js
for(let key of ['a', 'b'].keys()){
  console.log(key);
}
// 0
// 1
console.log([...[,'a'].keys()]) // [0,1]
```


## 24.0 values()
values() 方法：遍历键值 (它也有next方法)
```js
for(let value of ['a', 'b'].values()){
  console.log(value);
}
// 'a'
// 'b'
console.log([...[,'a'].values()]) // [undefined,"a"]
```


## 25.0 flat()
嵌套数组转一维 数组  (注意：兼容性很不好)
```js
console.log([1 ,[2, 3]].flat()); // [1, 2, 3]
// 指定转换的嵌套层数
console.log([1, [2, [3, [4, 5]]]].flat(2)); // [1, 2, 3, [4, 5]]
// 不管嵌套多少层
console.log([1, [2, [3, [4, 5]]]].flat(Infinity)); // [1, 2, 3, 4, 5]
// 自动跳过空位
console.log([1, [2, , 3]].flat()); // [1, 2, 3]

//展开单列矩阵
arr1.reduce((acc, val) => acc.concat(val), []);// [1, 2, 3, 4] 
// acc就是 total 
// [] 就是 initialValue
// 则acc就是[]

// 如果是多层的话
function flattenDeep(arr1) {
   return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}
flattenDeep(arr1);
```

## 26.0 复制数组
... 扩展运算符
```js
let arr = [1, 2], arr1 = [...arr];
arr1[0] = 5  // arr = [1, 2] arr1 = [5, 2]
// 数组含空位
let arr2 = [1, , 3],
    arr3 = [...arr2]; // arr3 = [1, undefined, 3]
// 合并数组
let arr4 = [...[1,2], ...[3,4]]
console.log(arr4) // [1,2,3,4]
```


