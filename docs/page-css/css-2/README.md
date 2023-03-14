## 第二页
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
  3.1 W3C的标准盒子模型  width = content <br>
  3.2 IE盒子模型 width = content + padding + border <br>
  我们这说的width 是 元素的width 比如 .one{ width:300px; } <br>
  所以开发者想用哪个模式是自己习惯了 ，<br>
  默认情况是 box-sizing:content-box; w3c标准的盒子模型 <br>
  box-sizing:border-box  是IE盒子模型 <br>
  一些大佬建议 我们将所有元素都设置为: box-sizing:border-box;
  还有一个值是padding-box：<br>
  Height = height(包含padding-top + padding-bottom) + border-top + border-bottom
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
**伪元素**
* ::after (:after)
* ::before (:before)
* "first-letter" 伪元素用于向文本的首字母设置特殊样式：
* "first-line" 伪元素用于向文本的首行设置特殊样式。

**伪类**
* a:link {color:#FF0000;} /* 未访问的链接 */
* a:visited {color:#00FF00;} /* 已访问的链接 */
* a:hover {color:#FF00FF;} /* 鼠标划过链接 */
* a:active {color:#0000FF;} /* 已选中的链接 */
## 11.0 移动端1像素边框问题
  产生原因： <br>
    主要是跟一个东西有关，DPR(devicePixelRatio) 设备像素比，它是默认缩放为100%的情况下，设备像素和CSS像素的比值。<br>
    window.devicePixelRatio=物理像素 /CSS像素 <br>
    目前主流的屏幕DPR=2 （iPhone 8）,或者3 （iPhone 8 Plus）。拿2倍屏来说，设备的物理像素要实现1像素，而DPR=2，所以css 像素只能是 0.5。一般设计稿是按照750来设计的，它上面的1px是以750来参照的，而我们写css样式是以设备375为参照的，所以我们应该写的0.5px就好了
    <hr>
    移动端 使用meta标签来设置移动端显示的比例：
    具体看：[example](https://blog.csdn.net/ld395353765/article/details/90640866)<br>
    [demo](http://www.zliel.top/vpdemo/css-demo/css-1px.html)<br>
``` 
第二种方法
 .box{
      width:200px;
      height:200px;
  }
    .box:after{
        content:'';
        width:100%;
        height:1px;
        background: red;
        display: block;
    }
    @media screen and(-webkit-min-device-pixel-ratio: 2){
        .box:after{
            transform: scaleY(0.5); // 通过设置 Y 轴的值来定义缩放转换。压缩一倍
        }
    }
  @media screen and(-webkit-min-device-pixel-ratio: 3){
      .box:after{
          transform: scaleY(0.333);
      }
  }
<div class="box"></div>
```
## 12.0 position 都有哪些属性
  12.1 static 默认值，没有定位，正常出现在文档流里面<br>

  <hr>
    HTML 元素的默认值，即没有定位，遵循正常的文档流对象。<br>
    静态定位的元素不会受到 top, bottom, left, right影响。<br>
  <hr>

  12.2 relative 生成相对定位的元素<br>

  <hr>
    相对定位元素的定位是相对其正常位置。<br>
    移动相对定位元素，但它原本所占的空间不会改变。<br>
    相对定位元素经常被用来作为绝对定位元素的容器块。<br>
  <hr>

  12.3 absolute 绝对定位<br>

  <hr>
      绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于 'html':<br>
      absolute 定位使元素的位置与文档流无关，因此不占据空间。<br>
      absolute 定位的元素和其他元素重叠。<br>
  <hr>

  12.4 fixed 绝对定位<br>

  <hr>
    元素的位置相对于浏览器窗口是固定位置。
    即使窗口是滚动的它也不会移动：
  <hr>

  12.5 sticky 粘性定位，该定位基于用户滚动的位置。<br>

  它的行为就像 position:relative; 而当页面滚动超出目标区域时，它的表现就像 position:fixed;，它会固定在目标位置。<br>
  注意: Internet Explorer, Edge 15 及更早 IE 版本不支持 sticky 定位。 Safari 需要使用 -webkit- prefix (查看以下实例)。<br>
  [demo](http://www.zliel.top/vpdemo/css-demo/position/p1.html)<br>

## 13.0 介绍下 BFC、IFC、GFC 和 FFC
    13.1 BFC（Block formatting contexts）：块级格式上下文 <br>
    13.2 IFC（Inline formatting contexts）：内联格式上下文 <br>
    13.3 GFC（GrideLayout formatting contexts）：网格布局格式化上下文 <br>
    13.4 FFC（Flex formatting contexts）:自适应格式上下文 <br>

## 14.0 说说渐进增强和优雅降级
  ### 渐进增强（Progressive Enhancement）：
一开始就针对低版本浏览器进行构建页面，完成基本的功能，然后再针对高级浏览器进行效果、交互、追加功能达到更好的体验。<br>
  ### 优雅降级（Graceful Degradation）：
一开始就构建站点的完整功能，然后针对浏览器测试和修复。比如一开始使用 CSS3 的特性构建了一个应用，然后逐步针对各大浏览器进行 hack 使其可以在低版本浏览器上正常浏览。<br>
更完善解释 [example](https://juejin.im/post/58eda95261ff4b005819faf9)<br>
## 15.0 层叠上下文
元素提升为一个相对特殊的图层，在三维空间中 (z轴) 高出普通元素一等，<br>
  在同一层叠上下文中，层叠等级才有意义<br>
  z-index的优先级最高<br>
  [demo](http://www.zliel.top/vpdemo/css-demo/position/p2.html)<br>

## 16.0 比较 opacity:0,visibility:hidden,display:none 优劣和适用场景
    结构：<br>
    display:none: 会让元素完全从渲染树中消失，渲染的时候不占据任何空间, 不能点击，<br>
    visibility: hidden:不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，不能点击<br>
    opacity: 0: 不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，可以点击<br>

    继承：<br>
    display: none和opacity: 0：是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示。<br>
    visibility: hidden：是继承属性，子孙节点消失由于继承了hidden，通过设置visibility: visible;可以让子孙节点显式。<br>

    性能：<br>
    displaynone : 修改元素会造成文档回流,读屏器不会读取display: none元素内容，性能消耗较大<br>
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

## 移动端rem适配
原理 html根语速字体大小设置屏幕区域的宽
```
window.onload = function(){
    var width = document.documentElement.clientWidth;
    var htmlNode = document.querySelect('html')
    htmlNode.style.fontSize = width + 'px';
} 
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

## 页面导入样式时，使用link和@import有什么区别
1. link是HTML标签，@import是css提供的。
2. link引入的样式页面加载时同时加载，@import引入的样式需等页面加载完成后再加载。
3. link没有兼容性问题，@import不兼容ie5以下。
4. link可以通过js操作DOM动态引入样式表改变样式，而@import不可以。












