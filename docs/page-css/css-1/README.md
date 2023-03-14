## 真正的移动端适配
[参考链接](https://www.jianshu.com/p/1f1b23f8348f)<br>

我们再写移动端适配的时候，会在入口页面增加这一行代码

```angular2html
<meta content="width=device-width, viewport-fit=cover, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" name="viewport">
width=device-width : 表示让当前的可视宽度 = 设备宽度
viewport-fit=cover ：表示让当前的可视区域沾满整个屏幕(解决iphonex刘海全面屏底部留白问题)
initial-scale=1.0 :  设置页面的初始缩放值
maximum-scale=1.0 :  允许用户的最小缩放值
minimum-scale=1.0 :  允许用户的最大缩放值
user-scalable=no :   是否允许用户进行缩放，值为"no"或"yes", no 代表不允许，yes代表允许
```
meta标签中的viewport属性，就是视图的含义
#### 布局视口
也就是`<meta name="viewport" content="width=device-width">`中width属性的含义<br>

我们在css中写的所有样式，就是相对于布局视口进行布局的<br>

默认情况下，移动端的布局视口并不是屏幕宽度，而是一般在768px ~ 1024px间(大部分情况下980px) <br>

可以通过document.documentElement.clientWidth 和 document.documentElement.clientHeight获取

#### 布局视口
视觉视口是指用户通过设备屏幕看到的区域，默认等于当前浏览器的窗口大小(当initial-scale为1)<br>

当用户对浏览器进行缩放时，不会改变布局视口的大小，所以页面布局是不变的，但是缩放会改变觉视口的大小<br>

可以通过window.innerWidth 和window.innerHeight获取 (会随着缩放进行改变)<br>

放大页面，此时window.innerWidth反而减小 (页面放大，你看到的东西也变少了)

#### 理想视口
理想视口的概念常用于移动端，使用户不需要缩放，也不需要出现横向滚动条，便可以正常看到网站的所有内容。<br>

理想视口下，布局视口宽度 = 视觉视口宽度 = 设备宽度 <br>

可以通过screen.width 和screen.height获取 (常量，不会改变)


+ 设备像素也叫物理像素 <br>

  设备像素指的是显示器上的真实像素，每个像素的大小是屏幕固有的属性，屏幕出厂以后就不会改变了。<br>

  设备分辨率描述的就是这个显示器的宽和高分别是多少个设备像素。<br>

  早期的移动设备，只有物理像素，没有独立像素，在不缩放的前提下，CSS 中的 1px 就代表着 1 个物理像素。比如 iphone3 的物理像素是 320 * 480，那么 width: 320px; 的元素将会占满 iphone3 的屏幕宽度。
  <br>
+ 设备独立像素

  从 iphone4 开始，苹果公司便推出了所谓的 Retina 屏，物理像素变成 640 * 960，但是屏幕尺寸没有变化，也就是说单位面积上的物理像素的数量增加了，或者说屏幕密度增加了。如果还按照原来那样，1px CSS 像素由 1 个物理像素来渲染， 那么 width: 320px; 的元素只会占据半个屏幕的宽度。原来在 iphone3 上能够占满屏的网页，在 iphone4 上只会占一半的屏幕，同时 font-size: 20px; 的字体在 iphone4 上的尺寸也会缩小。
  <br>
  为了让同一个网页在 iphone4 和 iphone3 上的有相同的显示效果，引入了独立像素的概念。iphone4 的独立像素为 320 * 480，是 iphone4 的物理像素的一半，和 iphone3 的物理像素一样。也就是说，iphone4 上的 1 个独立像素 == 2 个物理像素。在 iphone4 上，在不缩放的前提下，CSS 中的 1px 便由 1 个独立像素来渲染，相当于 2 个物理像素。这样，width: 320px; 的元素由 320 个独立像素来渲染，也就是由 640 个物理像素来渲染，正好占满 iphopn4 的屏幕宽度。font-size: 20px; 的字体在 iphone3 和 iphone4 上的尺寸也相同，只不过在 iphone4 上的字体更清楚。
  <br>
  我们已经知道，iphone4 上，1 个独立像素 == 2 个物理像素，但是不是所有的设备上都这样。
  并且在缩放比为1时，独立像素 === css像素
  <br>

+ css像素

  在CSS中使用的px都是指css像素，比如width: 128px。css像素的大小是很容易变化的。当我们缩放页面的时候，元素的css像素数量不会改变，改变的只是每个css像素的大小。也就是说width: 128px的元素在缩放200%以后，宽度依然是128个css像素，只不过每个css像素的宽度和高度变为原来的两倍。如果原本元素宽度为128个设备独立像素，那么缩放200%以后元素宽度为256个设备独立像素（css像素宽度始终是128）
<br>
  在缩放比例为100%的情况下，一个css像素大小等于一个设备独立像素。

  为了描述不同型号的手机物理像素和独立像素之间的关系，引入了一个新的概念：设备像素比 devicePixelRatio（dpr）。在 js 中通过 window.devicePixelRatio 查看。
```angular2html
devicePixelRatio = 物理像素 / 独立像素
iphone3: devicePixelRatio = 320 / 320 = 1
iphone4: devicePixelRatio = 640 / 320 = 2
iphone6Plus: devicePixelRatio = 1242 / 414 = 3
```
在 media 查询中，resolution 就代表着 devicePixelRatio。
```angular2html
@media (min-resolution: 2dppx) {
  body {
    color: red;
  }
}
// 上面的代码表示，在 devicePixelRatio >= 2 的设备上，字体颜色为红色。
```
## 1.0 1px像素问题
这里的1像素指的是CSS像素。因此我们可以发现，在写1px的时候，在不同dpr的物理设备上映射的设备像素是不同的。dpr为2时，映射的像素为2px；dpr3时就映射成3px。这样的话，如果在屏幕尺寸比较大的设备上（准确来说时设备像素比较大），1px渲染出来就样子就会有些粗。

#### 解决方案
利用媒体查询 + css3的transform <br>
利用媒体查询区分二倍屏和三倍屏，利用transform:scale(xx)对高度进行缩放。代码如下：
```angular2html
/*二倍屏*/
@media only screen and (-webkit-min-device-pixel-ratio: 2.0) {
    .my-border::after {
        transform: scaleY(0.5);
        webkit-transform: scaleY(0.5);
    }
}
/*三倍屏*/
@media only screen and (-webkit-min-device-pixel-ratio: 3.0) {
    .my-border::after {
        transform: scaleY(0.33);
        webkit-transform: scaleY(0.33);
    }
}
```
注意：IOS 系统的 safari 浏览器不支持标准的 min-resolution，使用非标准的 min-device-pixel-ratio。

## 2.0 常见适配方案
#### 移动端为什么会有适配的问题
不同型号的手机可能它的宽度、高度是不相同的，我们总不能都把宽度写成 750px吧
> 简单一句话概括：移动端适配就是在进行屏幕宽度的等比例缩放：<br>
> 平时我们开发中，拿到的移动端设计稿一般是750 * 1334 尺寸大小（ iPhone6 的设备像素为标准的设计图）。那如果在750px设计稿上量出的元素宽度为100px，那么在375px宽度的屏幕下，这个元素宽度就应该等比例缩放成50px。<br>
> 所以适配的难点是：如果实现页面的等比例缩放？

### rem方案
>该方案的核心就是：所有需要动态布局的元素，不再使用px固定尺寸，而是采用rem相对尺寸 <br>
>rem的大小是相对于根元素html的字体大小：如果html的font-size为100px，那么1rem就等于100px

核心代码：
```angular2html
 <script type="text/javascript">
    window.getPushWindowTimes = new Date().getTime();
    (function (doc, win) {
      var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
          var clientWidth = docEl.clientWidth;
          docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
        };
      if (!doc.addEventListener) {
        return;
      }
      win.addEventListener(resizeEvt, recalc, false);
      doc.addEventListener('DOMContentLoaded', recalc, false);
      recalc()
    })(document, window)
  </script>
```
### vh/vw方案
vh、vw方案即将视觉视口宽度 window.innerWidth 和视觉视口高度 window.innerHeight 等分为 100 份。<br>

这种方案和上面的方案解决问题的思路一样。这个是需要将设计稿的px转成对应的vw，当然这种比例关系我们不用手动计算，webpack解析css时有个postcss-px-to-viewport插件，可以实现px到vw的自动转化。
<br>
核心代码：
```angular2html
// 根目录新建 postcss.config.js
    module.exports = {
        plugins: {
        'postcss-px-to-viewport': {
        unitToConvert: "px", // 要转化的单位
        viewportWidth: 750, // UI设计稿的宽度
        unitPrecision: 6, // 转换后的精度，即小数点位数
        propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
        viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
        fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw      selectorBlackList: ["wrap"], // 指定不转换为视窗单位的类名，
        minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
        mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
        replace: true, // 是否转换后直接更换属性值
        exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
        include: undefined, // 如果设置了include，那将只有匹配到的文件才会被转换
        landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
        landscapeUnit: 'vw', // 横屏时使用的单位
        // landscapeWidth: 750 // 横屏时使用的视口宽度
        }
    }
```
我用的是vue单页面应用 下载对应的包即可




## 检测属性的兼容情况
[网址](https://caniuse.com/?search=transfer) https://caniuse.com/?search=transfer

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








