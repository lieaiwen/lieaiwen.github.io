# 数组操作（精简版）
>日常开发中，数组对于我们来说是经常使用到的，由此这里给大家分享几十个关于Array实用的代码，
>内容很多，建议收藏阅读

本篇文章不在一一解释，每个操作的具体用法，我们只介绍一下主要(实用)用法，让我们开始吧

## 1.0 push
push 方法从数组尾部开始添加数据,原数组发生改变
```
let a = [1,2,3]
a.push(4,5,6) // a = [1,2,3,4,5,6]  
 
let a = [1,2,3]
let b = a.push([1,2]) // a = [1,2,3,[1,2]] 

let a = [1,2,3]
a.push() // a = [1,2,3] 
```
## 2.0 unshift
unshift 方法从数组头部开始添加数据,原数组发生改变
```
let a = [1,2,3]
a.unshift(4,5,6) // a = [4,5,6,1,2,3]

let a = [1,2,3]
a.unshift([1,2]) // a = [[1,2],1,2,3] 

let a = [1,2,3]
a.unshift() // a = [1,2,3] 
```

## 3.0 pop
pop 方法来删除并返回数组的最后一个元素,原数组发生改变
```
let a = [1,2,3]
let b = a.pop() // a = [1,2]   b = 2
```
## 4.0 shift
shift 方法来删除并返回数组的第一个元素,原数组发生改变
```
let a = [1,2,3]
let b = a.shift() // a = [2,3]   b = 1
```
## 5.0 slice
slice 切割数组arr.slice(start, end)：start和end是数组下标从0开始（允许负值）,返回切割后的数组,*原数组不改变*
```
let a = [1,2,3]
let b = a.slice() // a = [1,2,3]   b = [1,2,3]

let a = [1,2,3]
let b = a.slice(1) // a = [1,2,3] b  = [2,3]

let a = [1,2,3]
let b = a.slice(1,2) // a = [1,2,3] b  = [2]

5.1 超过下标到最后一个结束
let a = [1,2,3]
let b = a.slice(1,5) // a = [1,2,3] b  = [2,3]

5.2 第一个参数为负数 倒着查即可
let a = [1,2,3,4]
let b = a.slice(-2) // a = [1,2,3,4] b  = [3,4]  

5.3 多个负数
let a = [1,2,3,4]
let b = a.slice(-2,2) // a = [1,2,3,4] b  = [] 负数 -2 从 3 开始，2 也是3 并且不能包括它 所以为[]
let c = a.slice(-2,3) // a = [1,2,3,4]  c = [3]
let d = a.slice(-3,-1) // a = [1,2,3,4]  c = [2,3]
let e = a.slice(-1,-4) // 这种乱的情况 返回 [] 

```
重点：传两个值则从 第一个参数下标开始到 第二个参数下标 之前结束,不包括第二个参数下标的值
## 6.0 splice
splice 方法也是修改数组的,99%原数组改变
```
6.1 没有参数的话返回空数组，原数组不变
let a = [1,2,3]
let b = a.splice() // a = [1,2,3]   b = []

6.2 一个参数 ，表示从 该参数索引开始截取，到数组结束，原数组是剩下的
let a = [1,2,3]
let b = a.splice(1) // a = [1]   b = [2,3]
// 也可是负数
let b = a.splice(-1) // a = [1,2]   b = [3]

6.3 两个参数 ， 从第一个参数索引开始到，第二个参数表示的是长度意思是1 就截取一个 2 就截取2个
let a = [1,2,3]
let b = a.splice(0,1) // a = [2,3]   b = [1]
let b = a.splice(1,2) // a = [1]   b = [2,3]

6.4 三个参数以上的， 同上 ，后面的参数 就是往数组里面追加的，往原数组截取的位置开始追加 我们这里是a
let a = [1,2,3,4]
let b = a.splice(0,1,5) // a = [5,2,3,4]   b = [1]
let b = a.splice(1,2,5,6) // a = [1,5,6,4]   b = [2,3]
```
## 7.0 reverse
reverse 方法 颠倒数组中元素的顺序
```
let a = [1,2,3]
let b = a.reverse(); // a = [3,2,1] b = [3,2,1]
```
## 8.0 sort
sort 对数组进行排序
```
8.1 基础排序是 从第一位开始的排完之后才排第二个
let a = [1,3,12,21]
let b = a.sort(); // a = [1,12,21,3] b = [1,12,21,3] 

8.2 排序函数
let a = [1,3,12,21]
let c = a.sort(function(a,b){
return a - b; // 从小到大排序 a = [1,3,12,21] c = [1,3,12,21]
return b - a; // 从大到小  a = [21,12,3,1] c = [21,12,3,1]
}); 
```
## 9.0 join
join 方法 可以把数组转换成字符串
```
let a = [1,2,3]
let b = a.join(); // a = [1,2,3] b = '1,2,3'
let b = a.join('+'); // a = [1,2,3] b = 1+2+3
let b = a.join(''); // a = [1,2,3] b = '123'
```
## 10.0 concat
concat 方法属于字符串的方法，也可以用于数组拼接
```
let a = [1,2,3]
let b = a.concat(4,5,6); // a = [1,2,3] b = [1,2,3,4,5,6]

let a = [1,2,3]
let b = a.concat([4,5,6]); // a = [1,2,3] b = [1,2,3,4,5,6]

let a = [1,2,3]
let b = a.concat([4,5,6],[7]); // a = [1,2,3] b = [1,2,3,4,5,6,7]
```
## 11.0 indexOf()
indexOf() 也是字符串的方法,也可以用于数组查找
``` 
11.1 传一个参数的话，存在 就返回索引值 ，不存在就返回-1
let a = [1,2,3]
let b = a.indexOf(2); // a = [1,2,3] b = 1 

11.2 第二个参数也在的话，就是从第二个下标开始查询
let a = [1,2,3]
let b = a.indexOf(2,2); // a = [1,2,3] b = -1
let b = a.indexOf(2,1); // a = [1,2,3] b = 1
```
## 12.0 forEach()
forEach遍历数组,没有返回值或者说是返回值为undefined
```
let arr = [1,2,3]
arr.forEach((item,index,arr)=>{
    //item 为当前数组元素
    // index 为当前索引
    // arr 为本数组
})
```
## 13.0 map()
map() 遍历数组 用来接收一个返回值，创建一个新数组 ，不改变原数组
```
let a = [1,2,3]
let b = a.map((item,index,arr)=>{
return item*2;
})
// a = [1,2,3] b=[2,4,6]
```
## 14.0 filter()
filter() 遍历数组用来接收一个返回值，创建一个新数组 ，不改变原数组
``` 
let arr = [1,2,3,4]
let arr1 = arr.filter(function(item,index){
return item>=3
})
// arr = [1,2,3,4] arr1=[3,4]
```
## 15.0 some()
some() 检测数组中是否含有某一个值，返回一个布尔值，如果数组中有任意一个元素满足给定的条件，结果就为 true否则则为false。
``` 
let arr = [1,2,3,4]
let arr1 = arr.some(function(item,index){
return item>=3
})
// arr = [1,2,3,4] arr1=true
```
## 16.0 every()
every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）,返回一个布尔值,结果为 true或false。
``` 
let arr = [1,2,3,4]
let arr1 = arr.every(function(item,index){
return item>=3
})
// arr = [1,2,3,4] arr1=false
```
## 17.0 reduce()
reduce() 对数组中的所有元素调用指定的回调函数，该回调函数的返回值为累计结果。并且把返回值在下一次回调函数时作为参数提供。
>语法: array.reduce(function(total, currentValue, currentIndex, item), initialValue)
```
 let arr = [1,2,3,4]
let arr1 = arr.reduce(function(total,num){
	return total + num ;
})
注意： 如果不传 initialValue 则数组的第一位会成为 total 也就是说
reduc 是从第二位开始 遍历的
// arr = [1,2,3,4] arr1=10

练习：
var arr1 = [1, 2, [3, 4]];  
arr1.reduce((acc, val) => acc.concat(val), []);
acc就是 total 
[] 就是 initialValue
则acc就是[] ,所以[].concat(1)=>[1].concat(2)=>[1,2].concat([3,4]) //  [1,2,3,4]
```
## 18.0 Array.from()
Array.from()方法就是将一个类数组对象或者可遍历对象转换成一个真正的数组。<br>
18.1 Array.from 返回一个真正的数组
``` 
let a = [1,2,3]
// 参数为数组，返回和原数组一样的数组
let b = Array.from(a) // a = [1, 2, 3]  b = [1, 2, 3]
b[2] = 4 // a = [1, 2, 3]  b = [1, 2, 4]
// 参数含空位
let c = Array.from([1, ,3]) // c = [1,undefined,3]
```
18.2 将字符串转为数组
``` 
let  str = 'hello world!';
console.log(Array.from(str)) // ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", "!"]
```
18.3 将Set结构的数据转换为真正的数组
``` 
let a = [1,2,3]
let set = new Set(arr)
let b = Array.from(set) // a = [1,2,3]  b = [1,2,3]
```
18.4 Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组
``` 
let a = [1,2,3]
let set = new Set(arr)
let b = Array.from(set, item => item + 1) // a = [1,2,3]  b = [2,3,4]
```
18.5Array.from可以将类数组对象，转为数组
>那么什么是类数组对象呢？所谓类数组对象，最基本的要求就是具有length属性的对象
``` 
let arrayLike = {
0: 'tom',
1: '65',
2: '男',
3: ['jane','john','Mary'],
'length': 4
}
let arr = Array.from(arrayLike) // arr =  ['tom','65','男',['jane','john','Mary']]

let arrayLike = {
'name': 'tom',
'age': '65',
'sex': '男',
'friends': ['jane','john','Mary'],
'length': 4
}
let arr = Array.from(arrayLike) // arr= [ undefined, undefined, undefined, undefined ]
```
总结：要将一个类数组对象转换为一个真正的数组，必须具备以下条件：<br>
1、该类数组对象必须具有length属性，用于指定数组的长度。如果没有length属性，那么转换后的数组是一个空数组。<br>
2、该类数组对象的属性名必须为数值型或字符串型的数字 (ps: 该类数组对象的属性名可以加引号，也可以不加引号)

## 19.0 Array.of()
Array.of() 方法： 数组创建，将参数中所有值作为元素形成数组，如果参数为空，则返回一个空数组
``` 
let a = Array.of(1,2,3) // a = [1,2,3]
let b = Array.of(1,'2',true) // a = [1,'2',true]
let c = Array.of();// c []
let d = Array.of(1,'',' ',undefined,,2) // 这个是要报错的 参数不能为空(也就是里面的两个,,)
```
## 20.0 find()
find() 方法查找数组中符合条件的元素，若有多个符合条件的元素，则返回第一个元素。
``` 
let a = Array.of(1,2,3) // a = [1,2,3]
let b = a.find(item => item > 2) //b = 3
```
## 21.0 findIndex()
findIndex() 方法查找数组中符合条件的元素，若有多个符合条件的元素，则返回第一个元素索引。
```
let a = Array.of(1,2,3) // a = [1,2,3]
let b = a.findIndex(item => item === 1) //b = 0
```
## 22.0 includes()
includes()方法：检测数组中是否包含一个值
```
let a = [1,2,3]
let b = a.includes(1) //b = true
// 参数2：可选，搜索的起始索引，默认为0
let c = a.includes(1,2) //c = false
// NaN的包含判断
let d = [1,NaN].includes(NaN) // true
```
## 23.0 fill()
fill()方法：将一定范围索引的数组元素内容填充为单个指定的值
```
let a = [1,2,3]
// 参数1： 用来填充的值
// 参数2：被填充的起始索引
// 参数3(可选)： 被填充的结束索引，默认为数组末尾
let b = a.fill(10,1,2) //a = [1,10,3] b = [1,10,3]
let b = a.fill(10,1) // a = [1,10,10] b = [1,10,10]
```
## 24.0 flat()
嵌套数组转一维 数组 (注意：兼容性很不好)
```
 console.log([1 ,[2, 3]].flat()); // [1, 2, 3]
// 指定转换的嵌套层数
console.log([1, [2, [3, [4, 5]]]].flat(2)); // [1, 2, 3, [4, 5]]
// 不管嵌套多少层
console.log([1, [2, [3, [4, 5]]]].flat(Infinity)); // [1, 2, 3, 4, 5]
// 自动跳过空位
console.log([1, [2, , 3]].flat()); // [1, 2, 3]

例外的：flatMap()方法：相当于array.map().flat()
```
## 25.0 isArray()
isArray()使用它可以判断一个值是否为数组。
```
let a = [1,2,3];
console.log(Array.isArray(a));  //true
let a = {name:'2'}
console.log(Array.isArray(a));  //false
```
## 26.0 ...
... 扩展运算符
```
let arr = [1, 2], arr1 = [...arr]; // arr = [1, 2] arr1 = [1, 2]
// 数组含空位
let arr2 = [1, , 3],
arr3 = [...arr2]; // arr3 = [1, undefined, 3]
// 合并数组
let a = [...[1,2], ...[3,4]] // [1,2,3,4]
```
接下里是一些关于数组操作的代码了：<br>

## 1.0 将值转换为数组
```
let castArray = (value) => (Array.isArray(value) ? value : [value]);
castArray(1); // [1]
```
## 2.0 检查数组是否为空
```
 let isEmpty = (arr) => Array.isArray(arr) && arr.length === 0;
 isEmpty([]); // true
```
## 3.0 克隆一个数组
```
const clone = (arr) => arr.slice(0);

// Or
const clone = (arr) => [...arr];

// Or
const clone = (arr) => Array.from(arr);

// Or
const clone = (arr) => arr.map((x) => x);

// Or
const clone = (arr) => JSON.parse(JSON.stringify(arr));

// Or
const clone = (arr) => arr.concat([]);
```
## 4.0 将字符串数组转换为数字
```
 const toNumbers = (arr) => arr.map(Number);

// Or
const toNumbers = (arr) => arr.map((x) => +x);
toNumbers(['2', '3', '4']); // [2, 3, 4]
```
## 5.0 计算数组中某个值的出现次数
```
 const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
 展开：
 function countOccurrences(arr,val){
  return arr.reduce(function(total,item){
        return item === val ? total + 1 : total
   },0)
}

// Or
const countOccurrences = (arr, val) => arr.filter((item) => item === val).length;
展开：
function countOccurrences(arr,val){
   let oArr =  arr.filter(function(item,index){
        return item === val
    })
    return oArr.length
}
countOccurrences([2, 1, 3, 3, 2, 3], 2); // 2
countOccurrences(['a', 'b', 'a', 'c', 'a', 'b'], 'a'); // 3
```
## 6.0 计算数组元素的出现次数
```
const countOccurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});
展开：
var countOccurrences = function countOccurrences(arr) {
    return arr.reduce(function (prev, curr) {
        prev[curr] = ++prev[curr] || 1;
        return prev;
    }, {});
}; 
countOccurrences([2, 1, 3, 3, 2, 3]); // { '1': 1, '2': 2, '3': 3 }
countOccurrences(['a', 'b', 'a', 'c', 'a', 'b']); // { 'a': 3, 'b': 2, 'c': 1 }
```
## 7.0 计算数组中某个值的出现次数
```
 const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
 展开：
 var countOccurrences = function countOccurrences(arr,val) {
        return arr.reduce(function (num, item) {
            return item === val ? num +1 : num
        }, 0);
    };
   console.log(countOccurrences([2, 1, 3, 3, 2, 3], 2)) // 2
   console.log(countOccurrences(['a', 'b', 'a', 'c', 'a', 'b'], 'a')) // 3
```
## 8.0 清空数组
```
 const empty = (arr) => (arr.length = 0);
```
## 9.0 查找数组中最长字符串的长度
```
 const findLongest = (words) => Math.max(...words.map((el) => el.length));
  展开：
  var findLongest = function findLongest(arrWords) {
       let OarrArrWords =  arrWords.map(el=>{
            return el.length
        })
      return  Math.max(...OarrArrWords)
    };
  console.log(findLongest(['always', 'look', 'on', 'the', 'bright', 'side', 'of', 'life'])) // 6
```
## 10.0 查找数组的最大项和最小项
```
 const max = (arr) => Math.max(...arr);
 const min = (arr) => Math.min(...arr);
```
## 11.0 获取数组的平均值
```
 const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
 展开：
 var average = function average(arr) {
      let Onum =  arr.reduce((a,item)=>{
           return a+item
       },0)
        return Onum / arr.length;
    };
    console.log(average([1,2,3])) // 2
```
## 12.0 删除数组中的重复值
```
onst removeDuplicate = (arr) => arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));
展开：
var removeDuplicate = function removeDuplicate(arr) {
          return arr.filter((i)=>{
             return arr.indexOf(i) === arr.lastIndexOf(i);// 返回正序出现的位置和倒叙出现的位置相同证明就这一个了
          })
        };
console.log(removeDuplicate(['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd'])) // ['h', 'e', 'w', 'r', 'd']
```
## 13.0 从数组中删除假值
```
const removeFalsy = (arr) => arr.filter(Boolean);
removeFalsy([0, 'a string', '', NaN, true, 5, undefined, 'another string', false]);
// ['a string', true, 5, 'another string']
```
## 14.0 打乱数组
```
 const shuffle = (arr) => arr.sort(() => 0.5 - Math.random());
 shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // [9, 1, 10, 6, 8, 5, 2, 3, 7, 4]
```
## 15.0 将数组拆分为块
```
 const chunk = (arr, size) => arr.reduce((acc, e, i) => (i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc), []);
 展开：
 let  chunk  = function chunk(arr,size){
       arr.reduce((acc, currentValue, currentIndex)=>{ //currentValue 当前值，currentIndex，当前索引
          currentIndex % size ? acc[acc.length - 1].push(currentValue) : acc.push([currentValue]);
          return acc
       },[])
   }
   chunk([1, 2, 3, 4, 5, 6, 7, 8], 3); // [[1, 2, 3], [4, 5, 6], [7, 8]]
   chunk([1, 2, 3, 4, 5, 6, 7, 8], 4); // [[1, 2, 3, 4], [5, 6, 7, 8]]
```
## 16.0 创建笛卡尔积
```
 const cartesian = (...sets) => sets.reduce((acc, set) => acc.flatMap((x) => set.map((y) => [...x, y])), [[]]);
 展开：
 function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
        }
        return arr2;
    } else {
        return Array.from(arr);
    }
}

var cartesian = function cartesian() {
    var _len = arguments.length;// 参数长度
    var sets = Array(_len);// 初始数组长度，都为空
    for (var _key = 0; _key < _len; _key++) {
        sets[_key] = arguments[_key]; // 赋值给sets
    }
    return sets.reduce(function (acc, set) {
        return acc.flatMap(function (x) {
            return set.map(function (y) {
                return [].concat(_toConsumableArray(x), [y]);
            });
        });
    }, [[]]);
};
console.log(cartesian([1, 2], [3, 4]))
// [ [1, 3], [1, 4], [2, 3], [2, 4] ]
```

不管活成什么样子，都不要把责任推给别人，一切苦乐都是自己造成的，任何一次选择，都有它对应的筹码，愿赌服输，也是一个成年人该有的品质。