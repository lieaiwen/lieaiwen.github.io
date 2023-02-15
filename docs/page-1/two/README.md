## call apply bind

## call
  call和apply作用是一样的，都是为了改变某个函数运行时的上下文（context）而存在的，换句话说，就是为了改变函数体内部this的指向。<br>
  作用：<br>
    使用 call() 方法，您可以编写能够在不同对象上使用的方法<br>
  用法：
   A.call(B,x,y)<br>
    1  改变函数A的this指向，使之指向B;<br>
    2  把A函数放到B中运行，x和y是A函数的<br>
    一 常规用法<br>
     call()方法是预定义的js方法 <br>
     通过call（）你能够使用属于另一个对象的方法
  ```
   var person = {
        fullName:function(){
          return this.firstName + '--' + this.lastName
           }
       }
       var person1 = {
        firstName:'1111',
         lastName:'2222',
       }
       var person2 = {
        firstName:'3333',
        lastName:'444',
       }
       console.log(person.fullName.call(person1)) //1111--2222
       console.log(person.fullName.call(person2)) // 3333--444
  ```
[demo](http://www.zliel.top/vpdemo/js-demo/js-call/call1.html)  <br>
 2.0 带参数的
  ```
      var person = {
        fullName:function(city,age){
          return this.firstName + '--' + this.lastName +'=' +city+ '年龄'+age
          }
      }
      var person1 = {
        firstName:'1111',
        lastName:'2222',
      }
      var person2 = {
        firstName:'3333',
        lastName:'444',
      }
      console.log(person.fullName.call(person1,'郑州','18')) //1111--2222=郑州年龄18
      console.log(person.fullName.call(person2,'上海','19')) // 3333--444=上海年龄19
  ```
[demo](http://www.zliel.top/vpdemo/js-demo/js-call/call2.html)  <br>
3.0 用来继承
```
 function Person(){
  this.sayName = function(){
    return this.name;
     }
 }

 function Chinese(name){
  //借助 call 实现继承
  Person.call(this)
     this.name = name;
  this.whichPeople = function(){
    console.log('我是中国人')
     }
 }
 var people = new Chinese('小明和')
 console.log(people);
 console.log(people.sayName()) //小明和
```
[demo](http://www.zliel.top/vpdemo/js-demo/js-call/call3.html)  <br>
4.0 例1：
```
 var name = '笑笑';
    var age  = 17;
    var obj = {
    	name:'打打',
        objAge:this.age, // 指向上一级作用域 window ，对象不形成作用域
        myFun:function(){
    		console.log(this.name + '年龄' + this.age);
        }
    }
    console.log(obj.objAge) //17
    obj.myFun() // 打打年龄undefined
    var fav = '大爷';
    function showf(){
    	console.log(this.fav)
    }
    showf();// 大爷
    比较一下这两者 this 的差别，第一个打印里面的 this 指向 obj，第二个全局声明的 shows() 函数 this 是 window ；
```
[demo](http://www.zliel.top/vpdemo/js-demo/js-call/call4.html)  <br>

5.0 例2：
```
var name = '笑笑';
	var age  = 17;
	var obj = {
		name:'打打',
		objAge:this.age, // 指向上一级作用域 window ，对象不形成作用域
		myFun:function(){
			console.log(this.name + '年龄' + this.age);
		}
	}
	var dd = {
		name:'美女',
        age:99
    }
    obj.myFun.call(dd);// 美女年龄99
    obj.myFun.apply(dd);// 美女年龄99
    obj.myFun.bind(dd)();// 美女年龄99
以上出了 bind 方法后面多了个 () 外 ，结果返回都一致！

由此得出结论，bind 返回的是一个新的函数，你必须调用它才会被执行。
```
[demo](http://www.zliel.top/vpdemo/js-demo/js-call/call5.html)  <br>
6.0 例3：
```
var name = '笑笑';
	var age  = 17;
	var obj = {
		name:'打打',
		objAge:this.age, // 指向上一级作用域 window ，对象不形成作用域
		myFun:function(fm,t){
			console.log(this.name + '年龄' + this.age+'来自'+fm+'的'+t);
		}
	}
	var dd = {
		name:'美女',
        age:99
    }
    obj.myFun.call(dd,'四川','成都');// 美女年龄99美女年龄99来自四川的成都
    obj.myFun.apply(dd,['上海','静安区']);// 美女年龄99来自上海的静安区
	obj.myFun.bind(dd,'上海','静安区')();// 美女年龄99来自上海静安区的
    obj.myFun.bind(dd,['上海','静安区'])();// 美女年龄99来自上海,静安区的undefined
从上面四个结果不难看出:

call 、bind 、 apply 这三个函数的第一个参数都是 this 的指向对象，第二个参数差别就来了：

call 的参数是直接放进去的，第二第三第 n 个参数全都用逗号分隔，直接放到后面 obj.myFun.call(db,'成都', ... ,'string' )。

apply 的所有参数都必须放在一个数组里面传进去 obj.myFun.apply(db,['成都', ..., 'string' ])。

bind 除了返回是函数以外，它 的参数和 call 一样。

当然，三者的参数不限定是 string 类型，允许是各种类型，包括函数 、 object 等等！
```
[demo](http://www.zliel.top/vpdemo/js-demo/js-call/call6.html)  <br>
