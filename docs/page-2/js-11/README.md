## 11.0 理解js的对象

**js对象的属性类型**
 1. 数据属性
 2. 访问器属性
 
**数据属性** 包含一个保存数据值的位置。值会从这个位置读取，也会写入到这个位置。 数据属性有 4 个特性描述它们的行为。

1. [[Configurable]]：（可配置）表示属性是否可以通过 delete 删除并重新定义，是否可以修改它的特
   性，以及是否可以把它改为访问器属性.默认是true
2. [[Enumerable]]：（可枚举）表示属性是否可以通过 for-in 循环返回。默认true
3. [[Writable]]：（可书写）表示属性的值是否可以被修改。默认true
4. [[Value]]：包含属性实际的值。默认undefined

先定义一个对象
```js
let person = { 
 name: "小红", 
 age: 29, 
 sayName() { 
 console.log(this.name); 
 } 
};
```
正是因为这些属性，所以上面定义的对象可以这样么玩
```js
console.log(person.name) // 小红
person.name = "小白"
console.log(person.name) // 小白
for(let key in person){
    console.log(key)
    // name
    // age
    // sayName
}
delete person.name
for(let key in person){
    console.log(key)
    // age
    // sayName
}
```
证明我们的对象可以**修改**、**遍历**、**删除**。
<br>
我现在就想让这个对象的一些属性，不能修改，不能遍历，不让删除怎么办了，继续往下看
<br>
要修改属性的默认特性，就必须使用 Object.defineProperty()方法,这个方法接收 3 个参数：
要给其添加属性的对象、属性的名称和一个描述符对象
```js
let person = {
    age:18,
};
Object.defineProperty(person,'name',{
        Writable:false, // 不可修改
        value:'小明'
    })
console.log(person.name) // 小明
person.name = "小小";
console.log(person.name) // 小明
```
不让遍历
```js
let person = {
    age:18,
};
Object.defineProperty(person,'name',{
        Enumerable:false, // 不可遍历
        value:'小明'
    })
console.log(person) // {age:18,name:'小明'}
for(let key in person){
    console.log(key)
    // age
}
//我们这边遍历就看不到 'name' 了
```
不让删除,我想大家应该也能猜出来怎么写了
```js
let person = {
    age:18,
};
Object.defineProperty(person,'name',{
        Configurable:false, // 不可遍历
        value:'小明'
    })
console.log(person) // {age:18,name:'小明'}
delete person.name
console.log(person) // {age:18,name:'小明'}
```
当然了我们可以随意组合
```js
let person = {
    age:18,
};
Object.defineProperty(person,'name',{
        Configurable:false, // 是否可配置
        Writable:true,      // 是否可读写
        Enumerable:false, // 是否可遍历
        value:'小明'
    })
```
**注意：** 只要用Object.defineProperty了，按道理你必须定义这三个属性，不然全部默认变成 false，
如果你只定义其中一个 那么剩下的两个也默认变成了false
```js
let person = {
    age:18,
};
Object.defineProperty(person,'name',{
        value:'小明'
    })
// 现在是不可遍历 不可修改 不可删除了都
console.log(person) // {age:18,name:'小明'}
person.name = "小小"
console.log(person) // {age:18,name:'小明'}
delete person.name
console.log(person) // {age:18,name:'小明'}
for(let key in person){
    console.log(key) // age
}
```
**注意：** ，一个属性被定义为不可配置之后，就不能再变回可配置的了。再次调用 Object.defineProperty()并修改任何非 writable 属性会导致错误：
```js
let person = {}; 
Object.defineProperty(person, "name", { 
 configurable: false, 
 value: "Nicholas" 
}); 
// 抛出错误
Object.defineProperty(person, "name", { 
 configurable: true, 
 value: "Nicholas" 
});
```
**访问器属性** 访问器属性不包含数据值。相反，它们包含一个获取（getter）函数和一个设置（setter）函数，不
过这两个函数不是必需的。在读取访问器属性时，会调用获取函数，这个函数的责任就是返回一个有效
的值。在写入访问器属性时，会调用设置函数并传入新值，这个函数必须决定对数据做出什么修改。访
问器属性有 4 个特性描述它们的行为。
<br>

1. [[Configurable]]：（可配置）表示属性是否可以通过 delete 删除并重新定义，是否可以修改它的特
   性，以及是否可以把它改为访问器属性.默认是true
2. [[Enumerable]]：（可枚举）表示属性是否可以通过 for-in 循环返回。默认true
3. [[Get]]]：获取函数，在读取属性时调用。默认值为 undefined。
4. [[Set]]：设置函数，在写入属性时调用。默认值为 undefined。

访问器属性是不能直接定义的，必须使用 Object.defineProperty()。
```js
// 定义一个对象，包含伪私有成员 year_和公共成员 edition
  let book = {
      year_: 2017,
      age: 1
  };
  Object.defineProperty(book, "year", {
      get() {
          return this.year_;
      },
      set(newValue) {
          if (newValue > 2017) {
              this.year_ = newValue;
              this.age += newValue - 2017;
          }
      }
  });
  book.year = 2018;
  console.log(book.age); // 2
```
对象 book 有两个默认属性：year_中的下划线常用来表示该
属性并不希望在对象方法的外部被访问。另一个属性 year 被定义为一个访问器属性，其中获取函数简
单地返回 year_的值，而设置函数会做一些计算以决定正确的版本（age）。因此，把 year 属性修改
为 2018 会导致 year_变成 2018，age 变成 2。这是访问器属性的典型使用场景，即设置一个属性
值会导致一些其他变化发生。
<br>

获取函数和设置函数不一定都要定义。只定义获取函数意味着属性是只读的，尝试修改属性会被忽
略。类似地，只有一个设置函数的属性是不能读取的

**定义多个属性**
上面我们都是一个一个属性定义的，现在我要一下定义多个，那就用**Object.defineProperties()** 方法
```js
let book = {};
Object.defineProperties(book, {
   year_: {
      value: 2017
   },
   age: {
      value: 1
   },
   year: {
      get() {
         return this.year_;
      },
      set(newValue) {
         if (newValue > 2017) {
            this.year_ = newValue;
            this.age += newValue - 2017;
         }
      }
   }
});
```
这段代码在 book 对象上定义了两个数据属性 year_和 age，还有一个访问器属性 year。
最终的对象跟上一节示例中的一样。唯一的区别是所有属性都是同时定义的，并且数据属性的
configurable、enumerable 和 writable 特性值都是 false。

**读取属性的特性**
<br>

**Object.getOwnPropertyDescriptor()** 方法可以取得指定属性的属性描述符。这个方法接
收两个参数：属性所在的对象和要取得其描述符的属性名
```js
let descriptor = Object.getOwnPropertyDescriptor(book, "year_");
        console.log(descriptor.value); // 2017
        console.log(descriptor.configurable); // false
        console.log(typeof descriptor.get); // "undefined"
        let descriptor = Object.getOwnPropertyDescriptor(book, "year");
        console.log(descriptor.value); // undefined
        console.log(descriptor.enumerable); // false
        console.log(typeof descriptor.get); // "function"
```
我要获取整个对象的读取属性呢？
```js
console.info(Object.getOwnPropertyDescriptors(book))
// { 
// age: { 
//   configurable: false, 
//   enumerable: false, 
//   value: 1, 
//   writable: false 
// }, 
// year: { 
//   configurable: false, 
//   enumerable: false, 
//   get: f(), 
//   set: f(newValue), 
// }, 
// year_: { 
//   configurable: false, 
//   enumerable: false, 
//   value: 2017, 
//   writable: false 
//  } 
// }
```
