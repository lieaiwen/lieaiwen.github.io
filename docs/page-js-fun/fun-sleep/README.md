## sleep休眠或等待函数

## sleep函数
JavaScript是单线程运行的，没有内置的sleep函数，现在模拟实现sleep延迟执行的效果。<br>
使用休眠函数实现页面改变背景颜色，黑色2秒，蓝色3秒，黄色4秒，循环改变颜色。

## 1.0 setTimeOut实现
直接使用setTimeout实现sleep()的方法，兼容性最好，但是使用了回调函数的实现方式，代码的可读性和维护性不是很好。<br>
废话少说直接上代码，我们来看
```
var bg = document.getElementsByTagName('body')[0]

function changeColor(color) {
	bg.style.backgroundColor=color
}

function sleepHandle(){
	changeColor('black');
	setTimeout(()=>{
		changeColor('blue');
		setTimeout(()=>{
			changeColor('yellow');
			setTimeout(()=>{
				sleepHandle()
			},4000)
		},3000)
	},2000)
}
sleepHandle()
```

是不是很简单，这可读性和可维护性也不差呀，怎么就不友好了，那是因为我们做的简单，假设改变颜色需要10种呢，一下就能感受出来了，当然了
可能自己写的没问题，但是你让其他同事看这代码，估计是想揍人的啦。

## 2.0 使用promise实现
在ES6的语法中，Promise是sleep方法异步的实现一种方式，借助Promise方法可以优雅的构建sleep实现方法，避免了出现函数回调‘地狱’。<br>

>使用Promise，把下一次的颜色改变写在then里面，最后同样使用递归完成循环。
>使用promise代替setTimeout，利用链式调用以及then来实现颜色的转换，then返回一个promise对象，当这个对象为resolve状态then可以持续调用。


```
var bg = document.getElementsByTagName('body')[0]

function changeColor(color,time) {
	return new Promise((resolve,reject)=>{
		bg.style.backgroundColor=color
		setTimeout(()=>{
			resolve()
		},time)
	})
}

function main(){
	Promise.resolve().then(()=>{
		return changeColor('black',2000)
	}).then(()=>{
		return changeColor('blue',3000)
	}).then(()=>{
		return changeColor('yellow',4000)
	}).then(()=>{
		main()
	})
}
main()
```
你看看,你看看是不是清晰很多了，等等似乎也不是那么清晰了，好多.then.then的，不要慌我们继续往下看

## 3.0 使用promise和await实现

async await实际上是generator和promise的语法糖，在提供同步编程方式实现异步调用的基础上，同时满足对sleep函数语义化的支持，也是常用的sleep的实现方式。

```
var bg = document.getElementsByTagName('body')[0]

 function changeColor(color, time) {
	return new Promise((resolve,reject)=>{
		bg.style.backgroundColor=color
		setTimeout(()=>{
			resolve()
		},time)
	})
}

async function main() {
	await changeColor('black', 2000);
	console.log(2)
	await changeColor('blue', 3000);
	console.log(3)
	await changeColor('yellow', 4000);
	console.log(4)
	main()
}
main() 
```
2s后输出2 3s后输出3 4s后输出4 然后继续循环往复的进行。<br>
这样逻辑和功能就分开，是不是更清晰了一点了。所以以后再有需要写等一会儿再执行的情况，我们这个方法完全可以胜任的。

## 4.0 while实现

while的语法我们都知道，当满足某些条件的时候，while里面的内容会一直执行，所以如下面只有当超过500毫秒才能执行后面的逻辑
```
 let sleep = (delay = 500) => {
    let t = Date.now();
    while(Date.now() - t <= delay) {
        continue;
    }
    doSomeThing
};
```
我们就叫上面的代码为阻塞主进程之休眠。<br>

通宵复习是因为平时没听过课，拼命减肥是因为吃零食从来不会控制，分手了才开始后悔是因为之前没有给足够的关心。于是别人开始敬佩你的勤奋，同情你的遭遇，可是只有你知道，你的痛苦都是罪有应得。


##  除了使用 `userAgent` 之外，也可以使用以下方法来判断当前浏览器是在 PC 端还是移动端：

1. 使用媒体查询判断屏幕大小。移动设备的屏幕一般比较小，可以通过屏幕大小来推断是否是移动端。` window.matchMedia`

2. 判断终端设备的触摸能力。通过判断设备是否支持触摸操作，通常可以分辨是移动端还是 PC 端。例如，使用 `ontouchstart` 事件来判断是否支持触摸。

3. 判断浏览器是否支持某些 API。例如，Mobile Safari 支持 `touch` 事件和 `orientationchange` 事件，可以通过检测这些事件是否被支持来判断是否是移动端。

需要注意的是，这些方法都不是百分百准确的，有时候可能会出现误判的情况。因此，在判断时应尽可能结合多个因素来进行推断。

## ios和安卓的兼容问题

1.0 获取时间戳
```js
//  ios 不识别 
new Date(‘2020-11-26 11:52:00’).getTime()
//    需要修改成 2020/11/26 11:52:00
 let time = '2020/11/26 11:52:00';
 time = time.replace(/\-/g,"/")
let date = new Date(time).getTime()
```
2.0 window.open（）IOS环境下无法正常执行
```js
// 用
window.location.href
```

3.0 input输入框type类型为number的时候出现上下箭头
```js
// 写样式隐藏掉

input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
 -webkit-appearance: none !important; margin: 0; 
}
```

4.0 部分安卓手机点击图片会放大

```js
 // 这种方法会取消掉img标签的点击事件，如果需要点击事件，在外层盒子上添加点击事件
img{ 
    pointer-events: none;
} 
```

5.0 ios滑动卡顿问题

```js
body{
    -webkit-overflow-scrolling: touch;
}
```

...等等
  
