## 20.0 js 深浅拷贝
**数组的浅拷贝**
>可以利用数组的一些方法比如:slice、concat返回一个新数组的特性来实现拷贝

1. concat
```js
 var arr = ['abc',1,true,null,undefined]
 var new_arr = arr.concat();
 new_arr[0] = 'aaa';
 console.log(arr) // ['abc',1,true,null,undefined]
 console.log(new_arr) // ['aaa',1,true,null,undefined]
```
2. slice
```js
 var arr = ['abc',1,true,null,undefined]
 var new_arr = arr.slice();
 new_arr[0] = 'aaa';
 console.log(arr) // ['abc',1,true,null,undefined]
 console.log(new_arr) // ['aaa',1,true,null,undefined]
```

但是假设我们数组里面嵌套了对象或者数组的话,就会出现不一样的结果

```js
 var arr = [{name:'xiao'}, [1]]
 var new_arr = arr.concat();
 new_arr[0].name = 'big';
 arr[1][0] = 2;
 console.log(arr) // [{name:'big'}, [2]]
 console.log(new_arr) // [{name:'big'}, [2]]
```
上面的例子我们，不管是新数组还是旧数组都发生了变化，
也就是说concat方法，克隆的并不彻底。<br>

如果数组元素是基本类型，就会拷贝一份，互不影响，但是如果是
对象数组这样的引用类型的时候拷贝的就是其引用，这样无论在新旧数组进行了修改
两者都会发生改变。<br>

我们把这种复制引用的拷贝方法称之为浅拷贝，与之对应的就是深拷贝，深拷贝就是指完全的拷贝一个对象，即使嵌套了对象，两者也相互分离，修改一个对象的属性，也不会影响另一个。<br>

**数组的深拷贝**

大多数情况下我们是可以使用这个技巧的，如下：
```js
 var arr = [{name:'xiao'}, [1]]
 var new_arr = JSON.parse(JSON.stringify(arr));
 new_arr[0].name = 'big';
 arr[1][0] = 2;
 console.log(arr) //[{name:'xiao'}, [2]]
 console.log(new_arr)//[{name:'big'}, [1]]
```
但也有一个问题，就是不能拷贝函数，
>PS:一般到这里就差不多了,工作中我反正99.99%没见过 数组里面有函数的（目光短浅了）

```
 var arr = [{b:function(){ console.log(2) }}, function(){ console.log(1) }]
 var new_arr = JSON.parse(JSON.stringify(arr));
 
 console.log(new_arr)//[{}, null]
```
**浅拷贝的实现**

上面的 concat、slice 、 JSON.stringify()都属于技巧类的，
那我们怎么实现一个数组或者对象的浅拷贝呢？<br>

好好想想，那就遍历对象，然后把属性和属性值放在一个新的对象好像就可以了
```js
var arr = [1,{b:function(){ console.log(2) }}, function(){ console.log(1) },[5,6]]
var shallowCopy = function(obj) {
    // 只拷贝对象
    if (typeof obj !== 'object') return;
    // 根据obj的类型判断是新建一个数组还是对象
    var newObj = obj instanceof Array ? [] : {};
    // 遍历obj，并且判断是obj的属性才拷贝
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
let new_arr = shallowCopy(arr)
new_arr[1].b() // 2 证明浅拷贝成功 包括函数
new_arr[0] // 1
arr[3][1]=111
console.log(new_arr[3][1]) //1111
```
注意：我们上面的浅拷贝方法 已经实现了基本类型 和 function<br>

**深拷贝的实现**

如何实现一个深拷贝呢？那现在不就里面还是一个对象或者数组，我们再一次调用深拷贝函数就可以了
```js
 var arr = [1,{b:function(){ console.log(2) }}, function(){ console.log(1) },[5,6]]
 var deepCopy = function(obj) {
     // 只拷贝对象
     if (typeof obj !== 'object') return;
     // 根据obj的类型判断是新建一个数组还是对象
     var newObj = obj instanceof Array ? [] : {};
     // 遍历obj，并且判断是obj的属性才拷贝
     for (var key in obj) {
         if (obj.hasOwnProperty(key)) {
             newObj[key] = typeof obj[key] !== 'object'? obj[key] : deepCopy(obj[key]);
         }
     }
     return newObj;
 }
 let new_arr = deepCopy(arr)
 arr[3][1]=111
 console.log(new_arr[3][1]) //6  证明深拷贝成功
```

参考链接：[冴羽的博客](https://github.com/mqyqingfeng/Blog/issues/32)


