## 真正的移动端适配
[参考链接](https://www.jianshu.com/p/1f1b23f8348f)<br>


## 检测属性的兼容情况
网址 百度搜索 can i use

## 1.0 css3 含@的都有
1.1 @media <br>
使用 @media 查询，你可以针对不同的媒体类型定义不同的样式。<br>

@media 可以针对不同的屏幕尺寸设置不同的样式，特别是如果你需要设置设计响应式的页面，@media 是非常有用的。<br>
``` css
 @media only screen and (max-width: 600px) {
            .example {background: red;}
        }
        //screen	用于电脑屏幕，平板电脑，智能手机等。
```
当你重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面。<br>
[demo](http://www.zliel.top/vpdemo/css-demo/css-media.html)  <br>
1.2 @keyframes <br>
使用@keyframes规则，你可以创建动画。<br>
创建动画是通过逐步改变从一个CSS样式设定到另一个。<br>
在动画过程中，您可以更改CSS样式的设定多次。<br>
指定的变化时发生时使用％，或关键字"from"和"to"，这是和0％到100％相同。<br>
0％是开头动画，100％是当动画完成。<br>
为了获得最佳的浏览器支持，您应该始终定义为0％和100％的选择器<br>
``` css
animation:mymove 5s infinite;
@keyframes mymove
{
0%   {top:0px;}
25%  {top:200px;}
50%  {top:100px;}
75%  {top:200px;}
100% {top:0px;}
}
```
``` 说明
animation: name duration timing-function delay iteration-count direction fill-mode play-state;
animation-name	指定要绑定到选择器的关键帧的名称
animation-duration	动画指定需要多少秒或毫秒完成
  animation-timing-function	设置动画将如何完成一个周期
    animation-timing-function使用的数学函数，称为三次贝塞尔曲线，速度曲线。使用此函数，您可以使用您自己的值，或使用预先定义的值之一
        1.0 linear	动画从头到尾的速度是相同的。
        2.0 ease	默认。动画以低速开始，然后加快，在结束前变慢。
        3.0 ease-in	动画以低速开始。
        4.0 ease-out	动画以低速结束。
        5.0 ease-in-out	动画以低速开始和结束。
        6.0 cubic-bezier(n,n,n,n)	在 cubic-bezier 函数中自己的值。可能的值是从 0 到 1 的数值。
animation-delay	设置动画在启动前的延迟间隔。
animation-iteration-count	定义动画的播放次数。 0 infinite 无限次数
  animation-direction	指定是否应该轮流反向播放动画。  //定义是否循环交替反向播放动画。
    1.0 normal	默认值。动画按正常播放。
    2.0 reverse	动画反向播放。
    3.0 alternate	动画在奇数次（1、3、5...）正向播放，在偶数次（2、4、6...）反向播放。
    4.0 alternate-reverse	动画在奇数次（1、3、5...）反向播放，在偶数次（2、4、6...）正向播放。
  animation-fill-mode	规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。
    1.0 none	默认值。动画在动画执行之前和之后不会应用任何样式到目标元素。
    2.0 forwards	在动画结束后（由 animation-iteration-count 决定），动画将应用该属性值。
    3.0backwards	动画将应用在 animation-delay 定义期间启动动画的第一次迭代的关键帧中定义的属性值。这些都是 from 关键帧中的值（当 animation-direction 为 "normal" 或 "alternate" 时）或 to 关键帧中的值（当 animation-direction 为 "reverse" 或 "alternate-reverse" 时）。
    4.0 both	动画遵循 forwards 和 backwards 的规则。也就是说，动画会在两个方向上扩展动画属性。
  animation-play-state	指定动画是否正在运行或已暂停。
    1.0 paused	指定暂停动画	测试
    2.0 running	指定正在运行的动画
    用法： animation-play-state: paused|running;
```
[demo](http://www.zliel.top/vpdemo/css-demo/css-keyframes.html)  <br>
1.3 @font-size <br>
Internet Explorer 9, Firefox, Opera,Chrome, 和 Safari支持@font-face 规则 <br>
``` css
@font-face
{
	font-family: myFirstFont;
	src: url('Sansation_Light.ttf')
		,url('Sansation_Light.eot'); /* IE9 */
}

div
{
	font-family:myFirstFont;
}
```
[demo](http://www.zliel.top/vpdemo/css-demo/css-font-face.html)  <br>

## 2.0 transition
transition 属性设置元素当过渡效果 <br>
语法：transition: property duration timing-function delay;
``` 说明
transition-property	指定CSS属性的name，transition效果
  1.0 none	没有属性会获得过渡效果。
  2.0 all	所有属性都将获得过渡效果。
  3.0 property	定义应用过渡效果的 CSS 属性名称列表，列表以逗号分隔。
  用法：单个-- transition-property:width;
       多个-- transition-property:width,height;
transition-duration	transition效果需要指定多少秒或毫秒才能完成
transition-timing-function	指定transition效果的转速曲线
  1.0 linear	规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。
  2.0 ease	规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）。
  3.0 ease-in	规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）。
  4.0 ease-out	规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）。
  5.0 ease-in-out	规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）。
transition-delay	定义transition效果开始的时候
  transition-delay 属性指定何时将开始切换效果。延迟几秒开始
```
[demo](http://www.zliel.top/vpdemo/css-demo/css-transition.html)

## 3.0 transform
属性定义及使用说明 ---Transform属性应用于元素的2D或3D转换。这个属性允许你将元素旋转，缩放，移动，倾斜等。<br>
主要属性有：
``` css
translate(x,y)	定义 2D 转换。 translate翻译：(使)变为，成为 等同于移动
translate3d(x,y,z)	定义 3D 转换。
scale(x[,y]?)	定义 2D 缩放转换。
scale3d(x,y,z)	定义 3D 缩放转换。
rotate(angle)	定义 2D 旋转，在参数中规定角度。
rotate3d(x,y,z,angle)	定义 3D 旋转。
skewX(angle)	定义沿着 X 轴的 2D 倾斜转换。
skewY(angle)	定义沿着 Y 轴的 2D 倾斜转换。
```
[demo](http://www.zliel.top/vpdemo/css-demo/css-transform.html)

## 4.0 transition 和transform 的区别
transition 是过度效果
transform 只是 2d或者3d转换， 在换句话说 人家 transition 是动画。

## 5.0 transition 和 animation 的区别
  transition 过渡效果 一定时间之内，一组css属性变换到另一组属性的动画展示过程。
  1. 需要一个事件来触发，比如hover，所以没法在网页加载时自动触发。 <br>
  2. 是一次性的，不能重复发生，除非一再触发。<br>

  3. 只能定义开始状态和结束状态，不能定义中间状态，也就是说只有两个状态。<br>
  <hr>
  animation  与transition不同的是，animation可以通过keyframes显式控制当前帧的属性值，<br>
  而transition只能隐式来进行（不能指定每帧的属性值）(属于帧动画)，所以相对而言animation的功能更加灵活。 <br>

  扩展：什么是帧动画--逐帧动画是一种常见的动画形式（Frame By Frame），其原理是在“连续的关键帧”中分解动画动作，也就是在时间轴的每帧上逐帧绘制不同的内容，使其连续播放而成动画。

## 6.0 css预处理器（less/sass）
sass 和 LESS 都是是 CSS 预处理器，是 CSS 上的一种抽象层，是一种特殊的 语法/语言 最终会编译成 CSS,在这层编译之上，便可以赋予 CSS 更多更强大的功能，常用功能: <br>
优点：结构清晰，便于扩展。可以轻松实现多重继承。<br>
  1.0 嵌套
``` css
.one{
    color: red;
    .two{
      color:blue
    }
  }
编译后： .one{color:red} .one .two{color:blue};后面的编译结果不写了
```
 2.0 变量
 ```
 $width: 5em;
 #main {
   width: $width;
 }
 ```
 3.0 循环语句 4.0 条件语句  这两个我是不常用 建议也少用 <br>
 5.0 单位转换
 很早记得用给那个px2rem的转换 <br>
 6.0 mixin复用
 ```
 @mixin no-bullets {
   list-style: none;
   li {
     list-style-image: none;
     list-style-type: none;
     margin-left: 0px;
   }
 }
 ul.plain {
   color: #444;
   @include no-bullets;
 }
 ```

## 7.0 常用的css3属性都有哪些？
1. border-radius
2. box-shadow
3. background-image
   background-size
   background-origin
   background-clip
4. Gradients
* 线性渐变（Linear Gradients）- 向下/向上/向左/向右/对角方向
* 径向渐变（Radial Gradients）- 由它们的中心定义
background-image: linear-gradient(direction, color-stop1, color-stop2, ...);

5. transform 转换
6. transition 过度
7. @keyframes animation 动画








