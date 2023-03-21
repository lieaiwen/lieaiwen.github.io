## 其它知识点
## 1.0 选择器优先级
!important > 行内样式 > #id > .class > tag > * > 继承 > 默认
<br>
**基本选择器**
* 通配符选择器（＊）
* id选择器（\#ID）
* 类选择器（.className）
* 元素选择器(E)
* 后代选择器（Ｅ Ｆ）
* 子元素选择器(E>F)
* 相邻兄弟元素选择器(E + F)
* 群组选择器（selector1,selector2,...,selectorN）
<br>
**属性选择器**
* E[attr]：只使用属性名，但没有确定任何属性值
* E[attr="value"]：指定属性名，并指定了该属性的属性值
* E[attr~="value"]：指定属性名，并且具有属性值，此属性值是一个词列表，并且以空格隔开，其中词列表中包含了一个value词，而且等号前面的“〜”不能不写
* E[attr^="value"]：指定了属性名，并且有属性值，属性值是以value开头的；
* E[attr$="value"]：指定了属性名，并且有属性值，而且属性值是以value结束的；
* E[attr*="value"]：指定了属性名，并且有属性值，而且属值中包含了value；
* E[attr|="value"]：指定了属性名，并且属性值是value或者以“value-”开头的值（比如说zh-cn）;

## 2.0 css实现水平垂直居中
1.0 绝对定位元素的居中实现
``` css
   width: 100px;
   height: 100px;
   background: orange;
   position: absolute;
   top: 50%;
   left: 50%;
   margin-top: -50px; /*高度的一半*/
   margin-left: -50px; /*宽度的一半*/
```
这个必须知道宽度和高度 <br>
[demo](http://www.zliel.top/vpdemo/css-demo/css-center1.html)<br>

2.0 css3的transform 中的translate 偏移量百分比是相对自身大小来说的
``` css
    background: orange;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50%);
```
[demo](http://www.zliel.top/vpdemo/css-demo/css-center2.html)<br>
所以可以不用知道元素的 宽度和高度<br>

3.0 margin：auto; 实现绝对定位元素的居中
```
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom: 0;
    margin:auto;
```
[demo](http://www.zliel.top/vpdemo/css-demo/css-center3.html)<br>

4.0 flex布局
```
            display: flex;
            align-items: center;/*定义body的元素垂直居中*/
            justify-content: center;/*定义body的元素水平居中*/
```
[demo](http://www.zliel.top/vpdemo/css-demo/css-center4.html)<br>
5.0 vertical-align:middle
行内元素 垂直方向居中
``` html
<div class="big-box">
   <span class="box">
     <img src=""/>
   </span>
</div>

.big-box{
   width: 500px;
   height: 400px;
   background: green;
   text-align: center;
   }
 .box{
      line-height: 400px;
      border:1px solid blue;
  }
  img{
      vertical-align: middle;
      width:100px;
      height:auto;
  }
```
[demo](http://www.zliel.top/vpdemo/css-demo/css-center5.html)<br>

6.0 display:table
```
.parent{
     width: 300px;
     height: 300px;
     background: orange;
     text-align: center;
     display: table;
     }
 .son{
    display: table-cell;
    background-color: yellow;
    vertical-align: middle;
  }
<div class="parent">
    <div class="son">nihao奥德赛科技</div>
 </div>
```
[demo](http://www.zliel.top/vpdemo/css-demo/css-center6.html)

## 3.0 css盒子模型
一个元素的宽度等于 width = content+ padding +border + margin <br>
* 3.1 W3C的标准盒子模型  width = content <br>
* 3.2 IE盒子模型 width = content + padding + border <br>
  我们这说的width 是 元素的width 比如 .one{ width:300px; } <br>
  所以开发者想用哪个模式是自己习惯了 ，<br>

  **默认情况:**<br>
  box-sizing:content-box; **w3c标准的盒子模型** <br>
  box-sizing:border-box  **是IE盒子模型** <br>
  一些大佬建议 我们将所有元素都设置为: box-sizing:border-box;
```
采用继承的方式
html{
  box-sizing:border-box;
}
*,*::before,*::after{
  box-sizing:inhert;
}

```

## 4.0 清楚浮动  4中方法
  4.1 bfc的 overflow:hidden;  <br>
  4.2 给父元素写一个固定的高度，只能在子元素高度固定的情况使用，，这个不推荐使用，<br>
    [demo](http://www.zliel.top/vpdemo/css-demo/clearfloat/clear1.html) <br>
  4.3 结尾处加div 样式clear：both ;也不推荐 莫名增加div标签<br>
    [demo](http://www.zliel.top/vpdemo/css-demo/clearfloat/clear2.html) <br>
  4.4 父级div 增加伪类:after 和 zoom  推荐使用
    [demo](http://www.zliel.top/vpdemo/css-demo/clearfloat/clear3.html) <br>


## 5.0 nth-child 与 nth-of-type 区别
  ```
  p:nth-child(2) {
      background: #ccc
  }
  作用于 P 的父元素的第二个子元素，若该元素不为 P, 则无效
  p:nth-of-type(2) {
      background: red
  }
  作用于 P 的父元素的第二个 P 元素(子元素)
  类似的：
  1.0 :first-child p:first-child // 作用于 P 的父元素的第一个p元素，如不是p元素，不生效
  2.0 :first-of-type p:first-of-type // 作用于 P 的父元素的第一个p元素,如果第一个不是p，那就找第二个
  3.0 :last-child
  4.0 :last-of-type
  ```
[demo](http://www.zliel.top/vpdemo/css-demo/css-nth-of-type.html)<br>

## 6.0 css实现一个三角形
```
1.0 用border属性
.triangle {
    height:0;
    width:0;
    border-color:red transparent transparent transparent;
    border-style:solid;
    border-width:30px;
}
2.0 用CSS3的clip-path属性
这个就是还要增加一个位置调整 不简洁
.triangle3{
        width: 100px;
        height: 100px;
        background: deeppink;
        clip-path: polygon(0px 0px, 0px 100px, 100px 0px);  /*将坐标(0,0),(0,100),(100,0)连成一个三角形*/
        transform: rotate(225deg);  /*旋转225，变成下三角*/
    }
```
[demo](http://www.zliel.top/vpdemo/css-demo/css-triangle.html)<br>

## 7.0 css实现一个自适应的正方形
```
1.0  单位 vh vw 等于可视区域的 宽度高度 100份
.one{
    width:20vh;
    height:20vh;
    background: deepskyblue;
}
2.0 利用margin或者padding的百分比计算是参照父元素的width属性
.two{
      width: 10%;
      padding-bottom: 10%;
      height: 0;  /*防止内容撑开多余的高度*/
      background: red;
  }
```
[demo](http://www.zliel.top/vpdemo/css-demo/css-square.html)<br>

## 8.0 说一些 space-around 和space-between的区别
其实就是一个边距的区别，按水平布局来说，space-between在左右两侧没有边距，而space-around在左右两侧会留下边距，垂直布局同理
[demo](http://www.zliel.top/vpdemo/css-demo/css-flex1.html)<br>

## 9.0 居中为什么要是用transform （不建议使用margin-left/top）
因为transform （2d和3d转换） 和animation 属于合成属性，浏览器会重新创建一个合成层，不进行重绘 <br>
top/left 属于布局属性，该属性会导致重排，进而重绘，造成性能开销。

## 10.0 不支持::before ,::after的元素
IE 不支持的元素有：img, input, select, textarea <br>
FireFox 不支持的元素：input，select，textarea <br>
Chrome 不支持的元素有：input[type=text], textarea
CSS伪类,伪元素是用来添加一些选择器的特殊效果。

**伪元素**<br>
什么是伪元素？<br>
CSS 伪元素用于设置元素指定部分的样式。<br>
例如，它可用于：<br>

 * 设置元素的首字母、首行的样式<br>
 * 在元素的内容之前或之后插入内容
```css
::after (:after) -- p::after	在每个 <p> 元素之后插入内容。
::before (:before) -- p::before	在每个 <p> 元素之前插入内容。
"::first-letter" -- p::first-letter	选择每个 <p> 元素的首字母。
"::first-line" -- p::first-line	选择每个 <p> 元素的首行。
"::selection" -- p::selection	选择用户选择的元素部分。
```


**伪类**<br>
什么是伪类？<br>
伪类用于定义元素的特殊状态。<br>
例如，它可用于：<br>

* 设置鼠标悬停在元素上时的样式<br>
* 为已访问和未访问链接设置不同的样式<br>
* 设置元素获得焦点时的样式<br>

```css
a:link {color:#FF0000;} /* 未访问的链接 */
a:visited {color:#00FF00;} /* 已访问的链接 */
a:hover {color:#FF00FF;} /* 鼠标划过链接 */
a:active {color:#0000FF;} /* 已选中的链接 */
:checked	input:checked	选择每个被选中的 <input> 元素。
:disabled	input:disabled	选择每个被禁用的 <input> 元素。
:empty	p:empty	选择没有子元素的每个 <p> 元素。
:enabled	input:enabled	选择每个已启用的 <input> 元素。
:first-child	p:first-child	选择作为其父的首个子元素的每个 <p> 元素。
:first-of-type	p:first-of-type	选择作为其父的首个 <p> 元素的每个 <p> 元素。
:focus	input:focus	选择获得焦点的 <input> 元素。
...等等
```
## 11.0 页面导入样式时，使用link和@import有什么区别
1. link是HTML标签，@import是css提供的。
2. link引入的样式页面加载时同时加载，@import引入的样式需等页面加载完成后再加载。
3. link没有兼容性问题，@import不兼容ie5以下。
4. link可以通过js操作DOM动态引入样式表改变样式，而@import不可以。

## 12.0 position 都有哪些属性
  12.1 **static** 默认值，没有定位，正常出现在文档流里面<br>

  <hr>
    HTML 元素的默认值，即没有定位，遵循正常的文档流对象。<br>
    静态定位的元素不会受到 top, bottom, left, right影响。<br>
  <hr>

  12.2 **relative** 生成相对定位的元素<br>

  <hr>
    相对定位元素的定位是相对其正常位置。<br>
    移动相对定位元素，但它原本所占的空间不会改变。<br>
    相对定位元素经常被用来作为绝对定位元素的容器块。<br>
  <hr>

  12.3 **absolute** 绝对定位<br>

  <hr>
      绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于 'html':<br>
      absolute 定位使元素的位置与文档流无关，因此不占据空间。<br>
      absolute 定位的元素和其他元素重叠。<br>
  <hr>

  12.4 **fixed** 绝对定位<br>

  <hr>
    元素的位置相对于浏览器窗口是固定位置。
    即使窗口是滚动的它也不会移动：
  <hr>

  12.5 **sticky** 粘性定位，该定位基于用户滚动的位置。<br>

  它的行为就像 position:relative; 而当页面滚动超出目标区域时，它的表现就像 position:fixed;，它会固定在目标位置。<br>
  注意: Internet Explorer, Edge 15 及更早 IE 版本不支持 sticky 定位。 Safari 需要使用 -webkit- prefix (查看以下实例)。<br>
  [demo](http://www.zliel.top/vpdemo/css-demo/position/p1.html)<br>

## 13.0 介绍下 BFC、IFC、GFC 和 FFC
    13.1 BFC（Block formatting contexts）：块级格式上下文 <br>
    13.2 IFC（Inline formatting contexts）：内联格式上下文 <br>
    13.3 GFC（GrideLayout formatting contexts）：网格布局格式化上下文 <br>
    13.4 FFC（Flex formatting contexts）:自适应格式上下文 <br>

## 14.0 说说渐进增强和优雅降级
 **渐进增强（Progressive Enhancement）**：
一开始就针对低版本浏览器进行构建页面，完成基本的功能，然后再针对高级浏览器进行效果、交互、追加功能达到更好的体验。<br>
 **优雅降级（Graceful Degradation）**：
一开始就构建站点的完整功能，然后针对浏览器测试和修复。比如一开始使用 CSS3 的特性构建了一个应用，然后逐步针对各大浏览器进行 hack 使其可以在低版本浏览器上正常浏览。<br>
更完善解释 [example](https://juejin.im/post/58eda95261ff4b005819faf9)<br>

## 15.0 层叠上下文
元素提升为一个相对特殊的图层，在三维空间中 (z轴) 高出普通元素一等，<br>
  在同一层叠上下文中，层叠等级才有意义<br>
  z-index的优先级最高<br>
![avatar](./zindex.png)

## 16.0 比较 opacity:0,visibility:hidden,display:none 优劣和适用场景
    结构：<br>
    display:none: 会让元素完全从渲染树中消失，渲染的时候不占据任何空间, 不能点击，<br>
    visibility: hidden:不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，不能点击<br>
    opacity: 0: 不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，可以点击<br>

    性能：<br>
    display:none : 修改元素会造成文档回流,读屏器不会读取display: none元素内容，性能消耗较大<br>
    visibility:hidden: 修改元素只会造成本元素的重绘,性能消耗较少读屏器读取visibility: hidden元素内容<br>
    opacity: 0 ： 修改元素会造成重绘，性能消耗较少<br>

    联系：它们都能让元素不可见<br>
## 17.0 隐藏页面中的某个元素的方法
  完全隐藏：元素从渲染树中消失，不占据空间。<br>
  视觉上的隐藏：屏幕中不可见，占据空间。<br>
  语义上的隐藏：读屏软件不可读，但正常占据空。<br>
  1.0 完全隐藏：
  ```
    1.1 display:none;
    1.2 h5 新增属性 <div hidden></div>
  ```
2.0 视觉上的隐藏
  ```
    2.1 visibility:hidden;
    2.2 opacity:0;
    2.3 层级覆盖
        position: relative;
        z-index: -999;
        再设置一个层级较高的元素覆盖在此元素上。
    2.4 宽高设置为0 ，字体大小设置为0 或者超出部分隐藏
      2.4.1
            height: 0;
            width: 0;
            font-size: 0;
      2.4.2
            height: 0;
            width: 0;
            overflow:hidden;
    2.5 移除 视图区
        position:absolute;
        left: -99999px;
    2.6 transform 属性
        2.6.1 缩放
          transform: scale(0);
          height: 0;
        2.6.2 旋转
          transform: rotateY(90deg);
  ```

3.0 读屏软件不可读 占据空间
  ```
  3.1 <div aria-hidden="true"></div>
  ```

## 18.0 css3 object-fit详解
object-fit的默认值：
``` 
fill: 中文释义“填充”。默认值。替换内容拉伸填满整个content box, 不保证保持原有的比例。
contain: 中文释义“包含”。保持原有尺寸比例。保证替换内容尺寸一定可以在容器里面放得下。因此，此参数可能会在容器内留下空白。
cover: 中文释义“覆盖”。保持原有尺寸比例。保证替换内容尺寸一定大于容器尺寸，宽度和高度至少有一个和容器一致。因此，此参数可能会让替换内容（如图片）部分区域不可见。
none: 中文释义“无”。保持原有尺寸比例。同时保持替换内容原始尺寸大小。
scale-down: 中文释义“降低”。就好像依次设置了none或contain, 最终呈现的是尺寸比较小的那个。
```
![avatar](/images/object-fit.jpg)

## 19.0 css 超出部分省略号
单行的
``` 
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:no-wrap;
```
多行的
``` 
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden;
```

## 21.0 querySelector()
querySelector() 方法返回匹配指定 CSS 选择器元素的第一个子元素 。
``` 
1.0 
获取文档中 class="example" 的第一个元素:
document.querySelector(".example");

2.0 
获取文档中第一个 <p> 元素：
document.querySelector("p");

3.0 
以下代码将为文档的第一个 <h2> 元素添加背景颜色，因为我们只能从上到下筛选出第一个 存在于筛选器中的标签：
<h2>A h2 element</h2>
<h3>A h3 element</h3>

document.querySelector("h2, h3").style.backgroundColor = "red";
```
**querySelectAll()**
<br>
是筛选出所有符合条件的标签 是一个数组
``` 
// 获取文档中所有的 <p> 元素
var x = document.querySelectorAll("p"); 
 
// 设置第一个 <p> 元素的背景颜色
x[0].style.backgroundColor = "red";
```



## 22.0 css3 含@的都有
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

## 23.0 transition
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

## 24.0 transform
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

## 25.0 transition 和transform 的区别
transition 是过度效果
transform 只是 2d或者3d转换， 在换句话说 人家 transition 是动画。

## 26.0 transition 和 animation 的区别
transition 过渡效果 一定时间之内，一组css属性变换到另一组属性的动画展示过程。
1. 需要一个事件来触发，比如hover，所以没法在网页加载时自动触发。 <br>
2. 是一次性的，不能重复发生，除非一再触发。<br>

3. 只能定义开始状态和结束状态，不能定义中间状态，也就是说只有两个状态。<br>
  <hr>
  animation  与transition不同的是，animation可以通过keyframes显式控制当前帧的属性值，<br>
  而transition只能隐式来进行（不能指定每帧的属性值）(属于帧动画)，所以相对而言animation的功能更加灵活。 <br>

扩展：什么是帧动画--逐帧动画是一种常见的动画形式（Frame By Frame），其原理是在“连续的关键帧”中分解动画动作，也就是在时间轴的每帧上逐帧绘制不同的内容，使其连续播放而成动画。


## 27.0 常用的css3属性都有哪些？
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










